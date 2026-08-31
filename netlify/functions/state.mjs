// Synchronisation du défi — Netlify Function + Netlify Blobs.
// Aucun compte externe, aucune clé à gérer : le store est fourni par Netlify.
//
// GET  /.netlify/functions/state?room=<salon>            -> { state, version }
//      (envoyer If-None-Match: <version> pour obtenir un 304 et ne rien retélécharger)
// POST /.netlify/functions/state?room=<salon>  body: { entries, config }
//      -> relit l'état, FUSIONNE, réécrit, renvoie { state, version }
//
// La fusion est faite côté serveur pour qu'une écriture concurrente de deux amis
// ne puisse jamais en écraser une autre.

import { getStore } from '@netlify/blobs';

const MAX_BODY = 96 * 1024;    // 3 personnes x 30 jours pesent ~10 Ko
const MAX_ENTRIES = 400;       // 90 cellules utiles : large, sans laisser enfler le blob
const STORE = 'defi-30-jours';

// 204 et 304 interdisent tout corps de reponse : Response() leve sinon.
const NO_BODY = new Set([204, 304]);

// Le site et l'API sont sur la meme origine : on n'autorise QUE celle-la.
// Sans ca, n'importe quelle page tierce pourrait ecrire dans le salon
// depuis le navigateur d'un des trois.
function corsHeaders(request) {
  const origin = request.headers.get('origin');
  if (!origin) return {};                     // requete meme origine : rien a ajouter
  let same = false;
  try { same = new URL(origin).host === new URL(request.url).host; } catch { same = false; }
  if (!same) return {};
  return {
    'access-control-allow-origin': origin,
    'access-control-allow-methods': 'GET,POST,OPTIONS',
    'access-control-allow-headers': 'content-type,if-none-match',
    'access-control-expose-headers': 'etag',
    'vary': 'origin',
  };
}

const json = (status, body, extra = {}) =>
  new Response(NO_BODY.has(status) ? null : JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      ...extra,
    },
  });

// Le nom du salon sert de clé de blob : on le nettoie strictement.
const cleanRoom = (r) =>
  String(r || 'defaut').toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 48) || 'defaut';

const emptyState = () => ({ v: 1, config: {}, entries: {} });

// LWW par entrée : l'horodatage le plus récent gagne, égalité départagée par l'id d'écriture.
function mergeCell(a, b) {
  if (!a) return b;
  if (!b) return a;
  const ta = Number(a.updatedAt) || 0, tb = Number(b.updatedAt) || 0;
  if (ta !== tb) return ta > tb ? a : b;
  return String(a.by || '') >= String(b.by || '') ? a : b;
}

// Clés triées => sérialisation canonique => l'ETag ne change que si les données changent.
function mergeState(a, b) {
  const A = a || emptyState(), B = b || emptyState();
  const out = { v: 1, config: {}, entries: {} };
  for (const k of [...new Set([...Object.keys(A.config || {}), ...Object.keys(B.config || {})])].sort())
    out.config[k] = mergeCell(A.config?.[k], B.config?.[k]);
  for (const k of [...new Set([...Object.keys(A.entries || {}), ...Object.keys(B.entries || {})])].sort())
    out.entries[k] = mergeCell(A.entries?.[k], B.entries?.[k]);
  return out;
}

// Ne garde que des cellules bien formées : un client buggé ne doit pas corrompre le salon.
const MAX_SKEW = 60000; // 1 min de tolerance sur l'horloge d'un telephone

// `now` n'est fourni QU'A L'INGESTION d'un POST. En lecture on ne reborne pas :
// sinon l'horodatage bougerait a chaque appel et l'ETag avec lui.
function sanitize(state, now) {
  const out = emptyState();
  if (!state || typeof state !== 'object') return out;
  const ceiling = now ? now + MAX_SKEW : Infinity;
  const cell = (c, numeric) => {
    if (!c || typeof c !== 'object') return null;
    let updatedAt = Number(c.updatedAt);
    if (!Number.isFinite(updatedAt)) return null;
    // Un appareil en avance de 10 min gagnerait sinon tous les arbitrages LWW.
    if (updatedAt > ceiling) updatedAt = ceiling;
    const by = typeof c.by === 'string' ? c.by.slice(0, 40) : '';
    if (numeric) {
      const reps = Math.max(0, Math.min(100000, Math.round(Number(c.reps) || 0)));
      return { reps, updatedAt, by };
    }
    if (typeof c.value !== 'string' || c.value.length > 200) return null;
    return { value: c.value, updatedAt, by };
  };
  let n = 0;
  for (const [k, v] of Object.entries(state.entries || {})) {
    if (n++ >= MAX_ENTRIES) break;
    if (typeof k !== 'string' || k.length > 80) continue;
    const c = cell(v, true);
    if (c) out.entries[k] = c;
  }
  for (const [k, v] of Object.entries(state.config || {})) {
    if (typeof k !== 'string' || k.length > 40) continue;
    const c = cell(v, false);
    if (c) out.config[k] = c;
  }
  return out;
}

// Hash FNV-1a du JSON canonique : sert d'ETag / de numéro de version.
function version(state) {
  const s = JSON.stringify(state);
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return `"${h.toString(36)}-${s.length.toString(36)}"`;
}

export default async (request) => {
  const cors = corsHeaders(request);
  if (request.method === 'OPTIONS') return json(204, null, cors);
  // Contrôle de la méthode AVANT d'ouvrir le store : une méthode inconnue mérite
  // un 405, pas un 503 « service indisponible ».
  if (request.method !== 'GET' && request.method !== 'POST')
    return json(405, { error: 'methode-non-autorisee' }, cors);

  const url = new URL(request.url);
  const room = cleanRoom(url.searchParams.get('room'));

  let store;
  try {
    store = getStore({ name: STORE, consistency: 'strong' });
  } catch (err) {
    return json(503, { error: 'blobs-indisponible', detail: String(err?.message || err) }, cors);
  }

  const read = async () => {
    try {
      return sanitize(await store.get(room, { type: 'json' }));
    } catch {
      return emptyState();
    }
  };

  if (request.method === 'GET') {
    const state = await read();
    const etag = version(state);
    if (request.headers.get('if-none-match') === etag) return json(304, null, { etag, ...cors });
    return json(200, { state, version: etag, room }, { etag, ...cors });
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY) return json(413, { error: 'charge-trop-grosse' }, cors);

  let patch;
  try {
    patch = sanitize(JSON.parse(raw), Date.now());
  } catch {
    return json(400, { error: 'json-invalide' }, cors);
  }

  // Lecture -> fusion -> écriture conditionnelle. En cas de course avec un autre ami,
  // l'ETag ne correspond plus : on recommence sur l'état frais (3 essais).
  let merged = null;
  for (let attempt = 0; attempt < 3; attempt++) {
    let current = emptyState(), etag;
    try {
      const got = await store.getWithMetadata(room, { type: 'json', consistency: 'strong' });
      if (got) { current = sanitize(got.data); etag = got.etag; }
    } catch { /* premier écrit sur ce salon */ }

    merged = mergeState(current, patch);
    if (version(merged) === version(current)) break; // rien de neuf : pas d'écriture inutile

    try {
      const opts = etag ? { onlyIfMatch: etag } : { onlyIfNew: true };
      const res = await store.setJSON(room, merged, opts);
      if (res?.modified === false) continue; // quelqu'un a écrit entre-temps -> on refait
      break;
    } catch (err) {
      // Un runtime plus ancien peut ignorer l'écriture conditionnelle : on écrit franchement.
      // La fusion étant commutative, une écriture perdue est rattrapée au prochain POST du client.
      if (attempt === 2) {
        try { await store.setJSON(room, merged); } catch (e2) {
          return json(500, { error: 'ecriture-impossible', detail: String(e2?.message || e2) }, cors);
        }
      }
    }
  }

  const state = merged || (await read());
  const etag = version(state);
  return json(200, { state, version: etag, room }, { etag, ...cors });
};

export const config = { path: '/api/state' };
