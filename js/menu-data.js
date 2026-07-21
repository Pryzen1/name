/* ═══════════════════════════════════════════════════════════════
   fachwerk · Speisekarte — data (6 languages)
   n = name (string if identical in all languages, else object)
   d = description · p = price · pp = per person · veg = "v"/"ve"
   star = fachwerk "Genuß" signature · variants = size/price list
   ═══════════════════════════════════════════════════════════════ */
"use strict";

const FW_MENU = [

  /* ──────────────── MENÜS ──────────────── */
  {
    id: "menus",
    label: { de: "Menüs", en: "Set Menus", fr: "Menus", es: "Menús", hr: "Meniji", lb: "Menüen" },
    groups: [{
      items: [
        { n: { de: "Klassisch — 3-Gang-Menü", en: "Classic — 3-course menu", fr: "Menu classique — 3 plats", es: "Clásico — menú de 3 platos", hr: "Klasični meni — 3 slijeda", lb: "Klassesch — 3-Gäng-Menü" },
          d: { de: "Antipasti-Variation | saisonale Suppe | Hauptgang nach Wahl: Gambas, Lachs, Zanderfilet, Rumpsteak oder Kalbssteak mit Beilage | Dessert-Variation",
               en: "Antipasti selection | seasonal soup | choice of main: gambas, salmon, pike-perch fillet, rump steak or veal steak with side | dessert selection",
               fr: "Assortiment d'antipasti | soupe de saison | plat au choix : gambas, saumon, filet de sandre, rumsteck ou steak de veau avec garniture | assortiment de desserts",
               es: "Variación de antipasti | sopa de temporada | principal a elegir: gambas, salmón, filete de lucioperca, rumpsteak o filete de ternera con guarnición | variación de postres",
               hr: "Izbor antipasta | sezonska juha | glavno jelo po izboru: gambori, losos, file smuđa, ramstek ili teleći odrezak s prilogom | izbor deserata",
               lb: "Antipasti-Variatioun | saisonal Zopp | Haaptgang no Wiel: Gambas, Lachs, Zanderfilet, Rumpsteak oder Kallefssteak mat Bäilag | Dessert-Variatioun" },
          p: "56,50", pp: true },
        { n: { de: "4-Gang-Menü", en: "4-course menu", fr: "Menu 4 plats", es: "Menú de 4 platos", hr: "Meni s 4 slijeda", lb: "4-Gäng-Menü" },
          d: { de: "Wie das klassische Menü, erweitert um einen Zwischengang — in zwei Ausführungen",
               en: "Like the classic menu with an additional course — available in two versions",
               fr: "Comme le menu classique, avec un plat intermédiaire — en deux versions",
               es: "Como el menú clásico, con un plato intermedio — en dos versiones",
               hr: "Kao klasični meni, uz dodatni međuslijed — u dvije izvedbe",
               lb: "Wéi de klassesche Menü, mat engem Zwëschegang — an zwou Versiounen" },
          variants: [{ l: "I", p: "64,90", pp: true }, { l: "II", p: "76,50", pp: true }] },
        { n: { de: "Premium — 3-Gang-Menü", en: "Premium — 3-course menu", fr: "Menu premium — 3 plats", es: "Premium — menú de 3 platos", hr: "Premium meni — 3 slijeda", lb: "Premium — 3-Gäng-Menü" },
          d: { de: "Antipasti-Variation | Risotto | Hauptgang nach Wahl: Langostinos in Hummersauce, Seeteufel, Thunfischsteak, Rinderfilet, Lammfilet oder Kalbsfilet mit Beilage | Dessert",
               en: "Antipasti selection | risotto | choice of main: langoustines in lobster sauce, monkfish, tuna steak, beef fillet, lamb fillet or veal fillet with side | dessert",
               fr: "Assortiment d'antipasti | risotto | plat au choix : langoustines sauce homard, lotte, steak de thon, filet de bœuf, filet d'agneau ou filet de veau avec garniture | dessert",
               es: "Variación de antipasti | risotto | principal a elegir: langostinos en salsa de bogavante, rape, filete de atún, solomillo de res, filete de cordero o de ternera con guarnición | postre",
               hr: "Izbor antipasta | rižoto | glavno jelo po izboru: škampi u umaku od jastoga, grdobina, odrezak od tune, goveđi file, janjeći ili teleći file s prilogom | desert",
               lb: "Antipasti-Variatioun | Risotto | Haaptgang no Wiel: Langostinos an Hummerzooss, Séideiwel, Thonsteak, Rëndfilet, Lammfilet oder Kallefsfilet mat Bäilag | Dessert" },
          p: "68,90", pp: true, star: true }
      ]
    }]
  },

  /* ──────────────── ANTIPASTI ──────────────── */
  {
    id: "antipasti",
    label: { de: "Antipasti", en: "Antipasti", fr: "Antipasti", es: "Antipasti", hr: "Antipasti", lb: "Antipasti" },
    groups: [
      {
        note: { de: "Vorweg: Hausbrot, Aioli & Dip, Oliven — 1,25 € p. P.", en: "To start: house bread, aioli & dip, olives — €1.25 p. p.", fr: "Pour commencer : pain maison, aïoli & dip, olives — 1,25 € p. pers.", es: "Para empezar: pan de la casa, alioli y dip, aceitunas — 1,25 € p. pers.", hr: "Za početak: domaći kruh, aioli i umak, masline — 1,25 € po osobi", lb: "Fir unzefänken: Hausbrout, Aioli & Dipp, Oliven — 1,25 € p. P." },
        items: [
          { n: "Antipasti Classico",
            d: { de: "Grillgemüse | Ziegenkäse | Tomaten-Büffelmozzarella | Serranoschinken", en: "Grilled vegetables | goat cheese | tomatoes & buffalo mozzarella | Serrano ham", fr: "Légumes grillés | fromage de chèvre | tomates-mozzarella di bufala | jambon serrano", es: "Verduras a la parrilla | queso de cabra | tomate con mozzarella de búfala | jamón serrano", hr: "Povrće s roštilja | kozji sir | rajčice s bivoljom mozzarellom | serrano pršut", lb: "Grillgeméis | Geessekéis | Tomaten-Büffelmozzarella | Serrano-Ham" },
            p: "16,50" },
          { n: "Vitello Tonnato",
            d: { de: "Rosé gegartes Kalbfleisch, fein geschnitten | Thunfischsauce | Kapern", en: "Rosé veal, finely sliced | tuna sauce | capers", fr: "Veau rosé finement tranché | sauce au thon | câpres", es: "Ternera rosada en finas láminas | salsa de atún | alcaparras", hr: "Ružičasta teletina, tanko rezana | umak od tune | kapari", lb: "Rosé Kallefsfleesch, fein geschnidden | Thonzooss | Kaperen" },
            p: "16,90" },
          { n: "Burrata | Mozzarella di Bufala",
            d: { de: "Büffelmozzarella auf Fleischtomaten | Basilikumpesto | Olivenöl", en: "Buffalo mozzarella on beef tomatoes | basil pesto | olive oil", fr: "Mozzarella di bufala sur tomates charnues | pesto de basilic | huile d'olive", es: "Mozzarella de búfala sobre tomates | pesto de albahaca | aceite de oliva", hr: "Bivolja mozzarella na mesnatim rajčicama | pesto od bosiljka | maslinovo ulje", lb: "Büffelmozzarella op Fleeschtomaten | Basilikumpesto | Olivenueleg" },
            p: "13,90", veg: "v" },
          { n: "Insalata de Pulpo",
            d: { de: "Hausgemachter Oktopussalat | oder Meeresfrüchtesalat", en: "Homemade octopus salad | or seafood salad", fr: "Salade de poulpe maison | ou salade de fruits de mer", es: "Ensalada de pulpo casera | o ensalada de mariscos", hr: "Domaća salata od hobotnice | ili salata od plodova mora", lb: "Hausgemaachten Oktopus-Zalot | oder Miersfriichten-Zalot" },
            p: "16,90" },
          { n: { de: "Serranoschinken mit Melone", en: "Serrano ham with melon", fr: "Jambon serrano au melon", es: "Jamón serrano con melón", hr: "Serrano pršut s dinjom", lb: "Serrano-Ham mat Melloun" },
            d: { de: "Spanischer Serranoschinken & Melone | oder mit Manchego-Käse", en: "Spanish Serrano ham & melon | or with Manchego cheese", fr: "Jambon serrano espagnol & melon | ou avec du manchego", es: "Jamón serrano español y melón | o con queso manchego", hr: "Španjolski serrano pršut i dinja | ili s Manchego sirom", lb: "Spuenesche Serrano-Ham & Melloun | oder mat Manchego-Kéis" },
            p: "14,50" },
          { n: { de: "Krabbencocktail", en: "Prawn cocktail", fr: "Cocktail de crevettes", es: "Cóctel de gambas", hr: "Koktel od kozica", lb: "Krabbencocktail" },
            d: { de: "Frische Krabben in hausgemachter Cocktailsauce | fruchtig", en: "Fresh prawns in homemade cocktail sauce | fruity", fr: "Crevettes fraîches, sauce cocktail maison | fruitée", es: "Gambas frescas en salsa cóctel casera | afrutado", hr: "Svježe kozice u domaćem koktel-umaku | voćna nota", lb: "Frësch Krabben an hausgemaachter Cocktailzooss | fruchteg" },
            p: "13,90" },
          { n: { de: "Carpaccio vom Rinderfilet", en: "Beef fillet carpaccio", fr: "Carpaccio de filet de bœuf", es: "Carpaccio de solomillo", hr: "Carpaccio od goveđeg filea", lb: "Carpaccio vum Rëndfilet" },
            d: { de: "Mit Rucola & Parmesan", en: "With rocket & Parmesan", fr: "Roquette & parmesan", es: "Con rúcula y parmesano", hr: "S rukolom i parmezanom", lb: "Mat Rucola & Parmesan" },
            p: "16,90" },
          { n: { de: "Carpaccio vom Thunfisch", en: "Tuna carpaccio", fr: "Carpaccio de thon", es: "Carpaccio de atún", hr: "Carpaccio od tune", lb: "Carpaccio vum Thon" },
            p: "16,90" },
          { n: "Vitello e Carpaccio",
            d: { de: "Duett vom Rinderfilet-Carpaccio & Vitello Tonnato", en: "Duet of beef carpaccio & vitello tonnato", fr: "Duo de carpaccio de bœuf & vitello tonnato", es: "Dúo de carpaccio de res y vitello tonnato", hr: "Duet carpaccia od govedine i vitella tonnata", lb: "Duett vum Rëndfilet-Carpaccio & Vitello Tonnato" },
            p: "18,50" },
          { n: { de: "Antipasti-Trilogie", en: "Antipasti trilogy", fr: "Trilogie d'antipasti", es: "Trilogía de antipasti", hr: "Antipasti trilogija", lb: "Antipasti-Trilogie" },
            d: { de: "Vitello Tonnato | Rinderfilet | Serranoschinken", en: "Vitello tonnato | beef fillet | Serrano ham", fr: "Vitello tonnato | filet de bœuf | jambon serrano", es: "Vitello tonnato | solomillo | jamón serrano", hr: "Vitello tonnato | goveđi file | serrano pršut", lb: "Vitello Tonnato | Rëndfilet | Serrano-Ham" },
            p: "18,90" },
          { n: { de: "Beef- oder Tuna-Tatar", en: "Beef or tuna tartare", fr: "Tartare de bœuf ou de thon", es: "Tartar de res o de atún", hr: "Tartar od govedine ili tune", lb: "Beef- oder Thon-Tartar" },
            d: { de: "Rinderfilet-Tatar 120 g: Sardellen, Cornichons, Kapern, Schalotte, Senfsauce · Thunfisch-Tatar 120 g: Kapern, Knoblauch, Schalotte, Wasabi, Sojasauce", en: "Beef fillet tartare 120 g: anchovies, cornichons, capers, shallot, mustard sauce · tuna tartare 120 g: capers, garlic, shallot, wasabi, soy sauce", fr: "Tartare de filet de bœuf 120 g : anchois, cornichons, câpres, échalote, sauce moutarde · tartare de thon 120 g : câpres, ail, échalote, wasabi, sauce soja", es: "Tartar de solomillo 120 g: anchoas, pepinillos, alcaparras, chalota, salsa de mostaza · tartar de atún 120 g: alcaparras, ajo, chalota, wasabi, salsa de soja", hr: "Tartar od goveđeg filea 120 g: inćuni, kornišoni, kapari, ljutika, umak od senfa · tartar od tune 120 g: kapari, češnjak, ljutika, wasabi, soja umak", lb: "Rëndfilet-Tartar 120 g: Sardellen, Cornichonen, Kaperen, Schalott, Moschterzooss · Thon-Tartar 120 g: Kaperen, Knuewelek, Schalott, Wasabi, Sojazooss" },
            p: "19,90" },
          { n: { de: "Vorspeisenplatte „fachwerk“", en: "“fachwerk” starter platter", fr: "Grande assiette d'entrées « fachwerk »", es: "Tabla de entrantes «fachwerk»", hr: "Plata predjela „fachwerk“", lb: "Virspeiseplack „fachwerk“" },
            d: { de: "Antipasti-Variation | Vitello Tonnato | Angus-Carpaccio mit Rucola & Parmesan | Tomate-Mozzarella | mediterranes Grillgemüse, Ziegenkäse, Serranoschinken & Melone | Manchego | neapolitanische Salami — ein Genuß!", en: "Antipasti selection | vitello tonnato | Angus carpaccio with rocket & Parmesan | tomato-mozzarella | Mediterranean grilled vegetables, goat cheese, Serrano ham & melon | Manchego | Neapolitan salami — a delight!", fr: "Assortiment d'antipasti | vitello tonnato | carpaccio d'Angus, roquette & parmesan | tomate-mozzarella | légumes grillés, chèvre, serrano & melon | manchego | salami napolitain — un régal !", es: "Variación de antipasti | vitello tonnato | carpaccio de Angus con rúcula y parmesano | tomate-mozzarella | verduras a la parrilla, queso de cabra, serrano y melón | manchego | salami napolitano — ¡un placer!", hr: "Izbor antipasta | vitello tonnato | Angus carpaccio s rukolom i parmezanom | rajčica-mozzarella | mediteransko povrće s roštilja, kozji sir, serrano i dinja | Manchego | napuljska salama — pravi užitak!", lb: "Antipasti-Variatioun | Vitello Tonnato | Angus-Carpaccio mat Rucola & Parmesan | Tomat-Mozzarella | mediterrant Grillgeméis, Geessekéis, Serrano & Melloun | Manchego | neapolitanesch Salami — e Genoss!" },
            p: "36,90", star: true }
        ]
      }
    ]
  },

  /* ──────────────── TAPAS ──────────────── */
  {
    id: "tapas",
    label: { de: "Tapas", en: "Tapas", fr: "Tapas", es: "Tapas", hr: "Tapas", lb: "Tapas" },
    groups: [
      {
        note: { de: "Vorweg: Hausbrot, Aioli & Dip, Oliven — 1,45 € p. P.", en: "To start: house bread, aioli & dip, olives — €1.45 p. p.", fr: "Pour commencer : pain maison, aïoli & dip, olives — 1,45 € p. pers.", es: "Para empezar: pan de la casa, alioli y dip, aceitunas — 1,45 € p. pers.", hr: "Za početak: domaći kruh, aioli i umak, masline — 1,45 € po osobi", lb: "Fir unzefänken: Hausbrout, Aioli & Dipp, Oliven — 1,45 € p. P." },
        items: [
          { n: { de: "Datteln im Speckmantel | Chorizo", en: "Bacon-wrapped dates | chorizo", fr: "Dattes au lard | chorizo", es: "Dátiles con bacon | chorizo", hr: "Datulje u slanini | chorizo", lb: "Datten am Speckmantel | Chorizo" },
            d: { de: "Süß-würzige Delikatesse | oder mit Chorizo", en: "Sweet and savoury delicacy | or with chorizo", fr: "Délice sucré-salé | ou au chorizo", es: "Delicia dulce y especiada | o con chorizo", hr: "Slatko-pikantna delicija | ili s chorizom", lb: "Séiss-wierzeg Delikatess | oder mat Chorizo" },
            p: "9,90" },
          { n: "Champignons",
            d: { de: "Frische Champignons in Knoblauch-Sahnesauce", en: "Fresh mushrooms in garlic cream sauce", fr: "Champignons frais, sauce crème à l'ail", es: "Champiñones frescos en salsa cremosa de ajo", hr: "Svježe šampinjone u umaku od češnjaka i vrhnja", lb: "Frësch Champignonen an Knuewelek-Rahmzooss" },
            p: "10,90", veg: "v" },
          { n: "Bruschetta Classico",
            d: { de: "Geröstetes Brot | marinierte Tomaten | Serranoschinken", en: "Toasted bread | marinated tomatoes | Serrano ham", fr: "Pain grillé | tomates marinées | jambon serrano", es: "Pan tostado | tomates marinados | jamón serrano", hr: "Prepečeni kruh | marinirane rajčice | serrano pršut", lb: "Geréischt Brout | marinéiert Tomaten | Serrano-Ham" },
            p: "12,90" },
          { n: { de: "Ziegenkäse gratiniert", en: "Goat cheese au gratin", fr: "Chèvre gratiné", es: "Queso de cabra gratinado", hr: "Zapečeni kozji sir", lb: "Geessekéis gratinéiert" },
            d: { de: "Karamellisierter Ziegenkäse | Mandel-Thymian-Honig", en: "Caramelised goat cheese | almond-thyme honey", fr: "Chèvre caramélisé | miel aux amandes et au thym", es: "Queso de cabra caramelizado | miel de almendras y tomillo", hr: "Karamelizirani kozji sir | med s bademima i timijanom", lb: "Karamelliséierte Geessekéis | Mandel-Thymian-Hunneg" },
            p: "13,50", veg: "v" },
          { n: { de: "Calamares a la Romana & Sardellen", en: "Calamares a la romana & anchovies", fr: "Calamars à la romaine & anchois", es: "Calamares a la romana y boquerones", hr: "Lignje na rimski način i inćuni", lb: "Calamares a la Romana & Sardellen" },
            d: { de: "Hausgemachte Calamaresringe & Sardellen in Panade | Aioli", en: "Homemade breaded calamari rings & anchovies | aioli", fr: "Anneaux de calamars et anchois panés maison | aïoli", es: "Aros de calamar y boquerones empanados caseros | alioli", hr: "Domaći pohani kolutići lignji i inćuni | aioli", lb: "Hausgemaach panéiert Calamaresréng & Sardellen | Aioli" },
            p: "13,90" },
          { n: "Aglio e Olio — Babycalamari", p: "14,90",
            d: { de: "In Olivenöl & Knoblauch geschwenkt", en: "Tossed in olive oil & garlic", fr: "Sautés à l'huile d'olive et à l'ail", es: "Salteados en aceite de oliva y ajo", hr: "Na maslinovom ulju s češnjakom", lb: "An Olivenueleg & Knuewelek geschwenkt" } },
          { n: "Aglio e Olio — Pulpo", p: "16,90" },
          { n: "Aglio e Olio — Gambas", p: "16,90" },
          { n: { de: "Trilogie", en: "Trilogy", fr: "Trilogie", es: "Trilogía", hr: "Trilogija", lb: "Trilogie" },
            d: { de: "Jakobsmuscheln | Garnelen | Pulpo", en: "Scallops | prawns | octopus", fr: "Saint-Jacques | crevettes | poulpe", es: "Vieiras | gambas | pulpo", hr: "Jakobove kapice | kozice | hobotnica", lb: "Jakobsmuschelen | Garnélen | Pulpo" },
            p: "22,90" },
          { n: { de: "Jakobsmuscheln gratiniert", en: "Scallops au gratin", fr: "Saint-Jacques gratinées", es: "Vieiras gratinadas", hr: "Zapečene Jakobove kapice", lb: "Jakobsmuschele gratinéiert" },
            d: { de: "All'aglio | in Pesto gratiniert", en: "All'aglio | gratinated in pesto", fr: "À l'ail | gratinées au pesto", es: "Al ajillo | gratinadas con pesto", hr: "S češnjakom | zapečene s pestom", lb: "All'aglio | am Pesto gratinéiert" },
            p: "16,90" },
          { n: "Langostinos Chef Special",
            d: { de: "Riesenlangusten in Hummer-Knoblauch-Sahnesauce", en: "Giant langoustines in lobster-garlic cream sauce", fr: "Langoustines géantes, sauce crémeuse homard-ail", es: "Langostinos gigantes en salsa cremosa de bogavante y ajo", hr: "Veliki škampi u kremastom umaku od jastoga i češnjaka", lb: "Riselangusten an Hummer-Knuewelek-Rahmzooss" },
            p: "24,50", star: true },
          { n: { de: "Tapasplatte „fachwerk“", en: "“fachwerk” tapas platter", fr: "Grande assiette de tapas « fachwerk »", es: "Tabla de tapas «fachwerk»", hr: "Tapas plata „fachwerk“", lb: "Tapasplack „fachwerk“" },
            d: { de: "Die 8 beliebtesten Tapas | Riesengarnelen in Knoblauch | Champignons in Knoblauch | Datteln im Speckmantel & Chorizo | hausgemachte Calamares & Sardellen | mediterrane Kartoffelecken | Grillgemüse & Ziegenkäse — ein Genuß!", en: "Our 8 most popular tapas | king prawns in garlic | mushrooms in garlic | bacon-wrapped dates & chorizo | homemade calamari & anchovies | Mediterranean potato wedges | grilled vegetables & goat cheese — a delight!", fr: "Les 8 tapas les plus appréciées | gambas à l'ail | champignons à l'ail | dattes au lard & chorizo | calamars et anchois maison | pommes de terre méditerranéennes | légumes grillés & chèvre — un régal !", es: "Las 8 tapas más populares | langostinos al ajillo | champiñones al ajillo | dátiles con bacon y chorizo | calamares y boquerones caseros | patatas mediterráneas | verduras a la parrilla y queso de cabra — ¡un placer!", hr: "8 najomiljenijih tapasa | velike kozice s češnjakom | šampinjoni s češnjakom | datulje u slanini i chorizo | domaće lignje i inćuni | mediteranski krumpirići | povrće s roštilja i kozji sir — pravi užitak!", lb: "Déi 8 beléiftst Tapas | Risegarnélen am Knuewelek | Champignonen am Knuewelek | Datten am Speck & Chorizo | hausgemaach Calamares & Sardellen | mediterran Gromperenecken | Grillgeméis & Geessekéis — e Genoss!" },
            p: "44,90", star: true }
        ]
      }
    ]
  },

  /* ──────────────── SALATE ──────────────── */
  {
    id: "salads",
    label: { de: "Salate", en: "Salads", fr: "Salades", es: "Ensaladas", hr: "Salate", lb: "Zaloten" },
    groups: [{
      items: [
        { n: { de: "Insalata Mista | Caesar Salat", en: "Insalata mista | Caesar salad", fr: "Insalata mista | salade César", es: "Insalata mista | ensalada César", hr: "Miješana salata | Cezar salata", lb: "Insalata Mista | Caesar-Zalot" },
          d: { de: "Gemischter Salat | oder Caesar mit Romana, Croûtons & Parmesan", en: "Mixed salad | or Caesar with romaine, croutons & Parmesan", fr: "Salade mixte | ou César : romaine, croûtons & parmesan", es: "Ensalada mixta | o César con romana, picatostes y parmesano", hr: "Miješana salata | ili Cezar s rimskom salatom, krutonima i parmezanom", lb: "Gemëschte Zalot | oder Caesar mat Romana, Croûtonen & Parmesan" },
          p: "13,90", veg: "v" },
        { n: { de: "… mit Putenstreifen", en: "… with turkey strips", fr: "… aux lamelles de dinde", es: "… con tiras de pavo", hr: "… s trakicama puretine", lb: "… mat Schnëtzele vun der Dinde" }, p: "18,90" },
        { n: { de: "… mit Kalbsleber", en: "… with veal liver", fr: "… au foie de veau", es: "… con hígado de ternera", hr: "… s telećom jetrom", lb: "… mat Kallefsliewer" }, p: "18,50" },
        { n: { de: "… mit Garnelen", en: "… with prawns", fr: "… aux crevettes", es: "… con gambas", hr: "… s kozicama", lb: "… mat Garnélen" }, p: "19,90" },
        { n: { de: "… mit Lachsfilet", en: "… with salmon fillet", fr: "… au filet de saumon", es: "… con filete de salmón", hr: "… s filetom lososa", lb: "… mat Lachsfilet" }, p: "19,90" },
        { n: "Surf 'n Turf",
          d: { de: "Gemischter Salat | rosa gegrillte Rinderstreifen & Riesengarnelen", en: "Mixed salad | pink-grilled beef strips & king prawns", fr: "Salade mixte | lamelles de bœuf rosées & gambas", es: "Ensalada mixta | tiras de res a la parrilla y langostinos", hr: "Miješana salata | ružičasto pečene trakice govedine i velike kozice", lb: "Gemëschte Zalot | rosa gegrillte Rëndsträifen & Risegarnélen" },
          p: "24,50", star: true },
        { n: { de: "Mediterraner Ziegenkäse", en: "Mediterranean goat cheese", fr: "Chèvre méditerranéen", es: "Queso de cabra mediterráneo", hr: "Mediteranski kozji sir", lb: "Mediterrane Geessekéis" },
          d: { de: "Mediterraner Salat mit frischem Ziegenkäse | Grillgemüse | Balsamico", en: "Mediterranean salad with fresh goat cheese | grilled vegetables | balsamic", fr: "Salade méditerranéenne au chèvre frais | légumes grillés | balsamique", es: "Ensalada mediterránea con queso de cabra fresco | verduras a la parrilla | balsámico", hr: "Mediteranska salata sa svježim kozjim sirom | povrće s roštilja | balzamiko", lb: "Mediterrane Zalot mat frëschem Geessekéis | Grillgeméis | Balsamico" },
          p: "19,50", veg: "v" },
        { n: { de: "Ziegenkäse gratiniert", en: "Goat cheese au gratin", fr: "Chèvre gratiné", es: "Queso de cabra gratinado", hr: "Zapečeni kozji sir", lb: "Geessekéis gratinéiert" },
          d: { de: "Gemischter Salat | karamellisierter Ziegenkäse in Thymian-Honig-Mandeln", en: "Mixed salad | caramelised goat cheese in thyme-honey almonds", fr: "Salade mixte | chèvre caramélisé, miel-thym-amandes", es: "Ensalada mixta | queso de cabra caramelizado con miel, tomillo y almendras", hr: "Miješana salata | karamelizirani kozji sir s medom, timijanom i bademima", lb: "Gemëschte Zalot | karamelliséierte Geessekéis an Thymian-Hunneg-Mandelen" },
          p: "19,90", veg: "v" }
      ]
    }]
  },

  /* ──────────────── RISOTTO & PASTA ──────────────── */
  {
    id: "pasta",
    label: { de: "Risotto & Pasta", en: "Risotto & Pasta", fr: "Risotto & Pâtes", es: "Risotto y Pasta", hr: "Rižoto i Tjestenina", lb: "Risotto & Pasta" },
    groups: [{
      note: { de: "Wahlweise als Risotto oder Linguine", en: "Your choice of risotto or linguine", fr: "Au choix : risotto ou linguine", es: "A elegir: risotto o linguine", hr: "Po izboru: rižoto ili linguine", lb: "No Wiel als Risotto oder Linguine" },
      items: [
        { n: "Surf 'n Turf",
          d: { de: "Riesengarnelen & Rinderstreifen in Tomaten-Kräuter-Knoblauch", en: "King prawns & beef strips in tomato, herbs & garlic", fr: "Gambas & lamelles de bœuf, tomate-herbes-ail", es: "Langostinos y tiras de res en tomate, hierbas y ajo", hr: "Velike kozice i trakice govedine u rajčici, začinskom bilju i češnjaku", lb: "Risegarnélen & Rëndsträifen an Tomaten-Kraider-Knuewelek" },
          p: "24,90" },
        { n: "Con Gamberi",
          d: { de: "Riesengarnelen in Tomaten-Kräuter-Knoblauch", en: "King prawns in tomato, herbs & garlic", fr: "Gambas, tomate-herbes-ail", es: "Langostinos en tomate, hierbas y ajo", hr: "Velike kozice u rajčici, začinskom bilju i češnjaku", lb: "Risegarnélen an Tomaten-Kraider-Knuewelek" },
          p: "19,90" },
        { n: "Buzara Frutti di Mare",
          d: { de: "Meeresfrüchte in Tomaten-Kräuter-Knoblauch — nach kroatischer Art", en: "Seafood in tomato, herbs & garlic — Croatian style", fr: "Fruits de mer, tomate-herbes-ail — à la croate", es: "Mariscos en tomate, hierbas y ajo — al estilo croata", hr: "Plodovi mora na buzaru — rajčica, začinsko bilje i češnjak", lb: "Miersfriichten an Tomaten-Kraider-Knuewelek — no kroatescher Aart" },
          p: "18,50", star: true },
        { n: "Al Salmone",
          d: { de: "Lachsfilet in Tomaten-Sahnesauce | Rucola | Parmesan", en: "Salmon fillet in tomato cream sauce | rocket | Parmesan", fr: "Filet de saumon, sauce tomate-crème | roquette | parmesan", es: "Filete de salmón en salsa de tomate y nata | rúcula | parmesano", hr: "File lososa u umaku od rajčice i vrhnja | rukola | parmezan", lb: "Lachsfilet an Tomaten-Rahmzooss | Rucola | Parmesan" },
          p: "18,90" },
        { n: { de: "Trüffel", en: "Truffle", fr: "Truffe", es: "Trufa", hr: "Tartuf", lb: "Trüffel" },
          d: { de: "In frischer Trüffel-Sahnesauce | Parmesan", en: "In fresh truffle cream sauce | Parmesan", fr: "Sauce crème à la truffe fraîche | parmesan", es: "En salsa cremosa de trufa fresca | parmesano", hr: "U kremastom umaku od svježeg tartufa | parmezan", lb: "A frëscher Trüffel-Rahmzooss | Parmesan" },
          p: "19,90", veg: "v" },
        { n: "Langostinos Chef Special",
          d: { de: "Riesenlangusten in Hummer-Knoblauch-Sahnesauce", en: "Giant langoustines in lobster-garlic cream sauce", fr: "Langoustines géantes, sauce crémeuse homard-ail", es: "Langostinos gigantes en salsa cremosa de bogavante y ajo", hr: "Veliki škampi u kremastom umaku od jastoga i češnjaka", lb: "Riselangusten an Hummer-Knuewelek-Rahmzooss" },
          p: "26,90", star: true },
        { n: { de: "Hummer Chef Special", en: "Lobster chef special", fr: "Spécial chef : homard", es: "Especial del chef: bogavante", hr: "Chefov specijalitet: jastog", lb: "Hummer Chef Special" },
          d: { de: "Ganzer Hummer, ausgelöst | in Hummer-Knoblauch-Sahnesauce", en: "Whole lobster, shelled | in lobster-garlic cream sauce", fr: "Homard entier décortiqué | sauce crémeuse homard-ail", es: "Bogavante entero pelado | en salsa cremosa de bogavante y ajo", hr: "Cijeli jastog, očišćen | u kremastom umaku od jastoga i češnjaka", lb: "Ganzen Hummer, ausgeléist | an Hummer-Knuewelek-Rahmzooss" },
          p: "36,90", star: true }
      ]
    }]
  },

  /* ──────────────── SUPPEN ──────────────── */
  {
    id: "soups",
    label: { de: "Suppen", en: "Soups", fr: "Soupes", es: "Sopas", hr: "Juhe", lb: "Zoppen" },
    groups: [{
      items: [
        { n: { de: "Tomatencremesuppe", en: "Cream of tomato soup", fr: "Velouté de tomates", es: "Crema de tomate", hr: "Krem juha od rajčice", lb: "Tomatecremezopp" }, p: "8,50", veg: "v" },
        { n: { de: "Brokkolicremesuppe", en: "Cream of broccoli soup", fr: "Velouté de brocoli", es: "Crema de brócoli", hr: "Krem juha od brokule", lb: "Brokkolicremezopp" }, p: "8,90", veg: "v" },
        { n: { de: "Saisonale Suppe", en: "Seasonal soup", fr: "Soupe de saison", es: "Sopa de temporada", hr: "Sezonska juha", lb: "Saisonal Zopp" }, p: "8,90" },
        { n: { de: "Frische Fischsuppe", en: "Fresh fish soup", fr: "Soupe de poisson fraîche", es: "Sopa de pescado fresca", hr: "Svježa riblja juha", lb: "Frësch Fëschzopp" },
          d: { de: "Mit reichhaltiger Einlage", en: "With a generous garnish of fish", fr: "Richement garnie", es: "Con abundante tropiezo", hr: "S bogatim komadićima ribe", lb: "Mat räichhalteger Anlag" },
          p: "12,90" }
      ]
    }]
  },

  /* ──────────────── FISCH VOM GRILL ──────────────── */
  {
    id: "fish",
    label: { de: "Fisch vom Grill", en: "Grilled Fish", fr: "Poisson au Gril", es: "Pescado a la Parrilla", hr: "Riba s Roštilja", lb: "Fësch vum Grill" },
    groups: [{
      note: { de: "Täglich frisch vom Markt — mit Kräuterknoblauch gegrillt", en: "Fresh from the market every day — grilled with herb garlic", fr: "Frais du marché chaque jour — grillé à l'ail et aux herbes", es: "Fresco del mercado cada día — a la parrilla con ajo y hierbas", hr: "Svaki dan svježe s tržnice — s roštilja uz češnjak i začinsko bilje", lb: "All Dag frësch vum Maart — mat Kraiderknuewelek gegrillt" },
      items: [
        { n: "Baby Calamari", p: "24,90" },
        { n: "Pulpo", p: "28,90" },
        { n: "Gambas", p: "26,50" },
        { n: { de: "Lachs | Zander", en: "Salmon | pike-perch", fr: "Saumon | sandre", es: "Salmón | lucioperca", hr: "Losos | smuđ", lb: "Lachs | Zander" }, p: "26,90" },
        { n: { de: "Wolfsbarsch", en: "Sea bass", fr: "Loup de mer", es: "Lubina", hr: "Brancin", lb: "Wollefsbarsch" }, p: "28,90" },
        { n: "Dorade Royal", p: "28,90" },
        { n: { de: "Thunfischsteak", en: "Tuna steak", fr: "Steak de thon", es: "Filete de atún", hr: "Odrezak od tune", lb: "Thonsteak" }, p: "32,50" },
        { n: { de: "Seeteufel — Edelfisch", en: "Monkfish — a noble fish", fr: "Lotte — poisson noble", es: "Rape — pescado noble", hr: "Grdobina — plemenita riba", lb: "Séideiwel — Edelfësch" }, p: "32,90" },
        { n: "Langostinos Chef Special",
          d: { de: "Riesenlangusten in Hummer-Knoblauch-Sahnesauce", en: "Giant langoustines in lobster-garlic cream sauce", fr: "Langoustines géantes, sauce crémeuse homard-ail", es: "Langostinos gigantes en salsa cremosa de bogavante y ajo", hr: "Veliki škampi u kremastom umaku od jastoga i češnjaka", lb: "Riselangusten an Hummer-Knuewelek-Rahmzooss" },
          p: "36,90", star: true },
        { n: { de: "Hummer alla Buzara", en: "Lobster alla buzara", fr: "Homard alla buzara", es: "Bogavante alla buzara", hr: "Jastog na buzaru", lb: "Hummer alla Buzara" },
          d: { de: "Ganzer Hummer in Tomaten-Kräutersauce — nach kroatischer Art", en: "Whole lobster in tomato-herb sauce — Croatian style", fr: "Homard entier, sauce tomate aux herbes — à la croate", es: "Bogavante entero en salsa de tomate y hierbas — al estilo croata", hr: "Cijeli jastog u umaku od rajčice i začinskog bilja — na buzaru", lb: "Ganzen Hummer an Tomaten-Kraiderzooss — no kroatescher Aart" },
          p: "74,80", star: true },
        { n: { de: "Fischplatte „fachwerk“", en: "“fachwerk” fish platter", fr: "Plateau de poissons « fachwerk »", es: "Parrillada de pescado «fachwerk»", hr: "Riblja plata „fachwerk“", lb: "Fëschplack „fachwerk“" },
          d: { de: "Die beliebte Edelfisch-Variation mit Kräuterknoblauch | garniert mit Gambas, Lachsfilet, Pulpo, Seeteufelmedaillons & Thunfischsteak — ein Genuß!", en: "Our popular selection of noble fish with herb garlic | garnished with gambas, salmon fillet, octopus, monkfish medallions & tuna steak — a delight!", fr: "La célèbre sélection de poissons nobles à l'ail et aux herbes | gambas, filet de saumon, poulpe, médaillons de lotte & steak de thon — un régal !", es: "La popular selección de pescados nobles con ajo y hierbas | gambas, filete de salmón, pulpo, medallones de rape y filete de atún — ¡un placer!", hr: "Omiljeni izbor plemenite ribe s češnjakom i začinskim biljem | gambori, file lososa, hobotnica, medaljoni grdobine i odrezak tune — pravi užitak!", lb: "Déi beléift Edelfësch-Variatioun mat Kraiderknuewelek | garnéiert mat Gambas, Lachsfilet, Pulpo, Séideiwelmedaillonen & Thonsteak — e Genoss!" },
          variants: [{ l: "1 Pers.", p: "34,90" }, { l: "2 Pers.", p: "68,80" }], star: true }
      ]
    }]
  },

  /* ──────────────── STEAKHOUSE ──────────────── */
  {
    id: "steaks",
    label: { de: "Steakhouse", en: "Steakhouse", fr: "Steakhouse", es: "Steakhouse", hr: "Steakhouse", lb: "Steakhouse" },
    groups: [
      {
        note: { de: "Bestes Black-Angus-Fleisch — auf den Punkt gegrillt", en: "Finest Black Angus beef — grilled to the point", fr: "La meilleure viande Black Angus — grillée à la perfection", es: "La mejor carne Black Angus — al punto perfecto", hr: "Najbolja Black Angus govedina — pečena točno po želji", lb: "Bescht Black-Angus-Fleesch — op de Punkt gegrillt" },
        items: [
          { n: { de: "Hüftsteak", en: "Rump (hip) steak", fr: "Steak de hanche", es: "Filete de cadera", hr: "Odrezak od buta", lb: "Hüftsteak" },
            variants: [{ l: "200 g", p: "20,90" }, { l: "300 g", p: "29,90" }, { l: "400 g", p: "38,50" }] },
          { n: "Entrecôte",
            variants: [{ l: "200 g", p: "26,90" }, { l: "300 g", p: "36,90" }, { l: "400 g", p: "44,90" }] },
          { n: "Rumpsteak",
            variants: [{ l: "200 g", p: "26,50" }, { l: "300 g", p: "35,90" }, { l: "400 g", p: "44,50" }] },
          { n: { de: "Filetsteak", en: "Fillet steak", fr: "Filet", es: "Solomillo", hr: "File", lb: "Filetsteak" },
            variants: [{ l: "200 g", p: "34,90" }, { l: "300 g", p: "46,90" }, { l: "400 g", p: "64,80" }] },
          { n: "Tagliata di Manzo",
            d: { de: "Rinderfilet 180 g, tranchiert | auf Rucola | Parmesan", en: "Beef fillet 180 g, sliced | on rocket | Parmesan", fr: "Filet de bœuf 180 g tranché | sur roquette | parmesan", es: "Solomillo 180 g en láminas | sobre rúcula | parmesano", hr: "Goveđi file 180 g, narezan | na rukoli | parmezan", lb: "Rëndfilet 180 g, tranchéiert | op Rucola | Parmesan" },
            p: "32,50" },
          { n: "Beef Stroganoff",
            d: { de: "Rinderfiletstreifen 180 g | in Rotwein-Zwiebel-Senf-Sahnesauce", en: "Beef fillet strips 180 g | in red wine, onion & mustard cream sauce", fr: "Lamelles de filet de bœuf 180 g | sauce crème au vin rouge, oignons & moutarde", es: "Tiras de solomillo 180 g | en salsa cremosa de vino tinto, cebolla y mostaza", hr: "Trakice goveđeg filea 180 g | u umaku od crnog vina, luka, senfa i vrhnja", lb: "Rëndfiletsträifen 180 g | a Roudwäin-Ënnen-Moschter-Rahmzooss" },
            p: "32,90" },
          { n: { de: "Angus-Grillspieß", en: "Angus grill skewer", fr: "Brochette Angus", es: "Brocheta Angus", hr: "Angus ražnjić", lb: "Angus-Grillspiess" },
            d: { de: "Angus-Medaillons 300 g | Paprika & Zwiebeln | Kräuterbutter", en: "Angus medallions 300 g | peppers & onions | herb butter", fr: "Médaillons d'Angus 300 g | poivrons & oignons | beurre aux herbes", es: "Medallones de Angus 300 g | pimientos y cebolla | mantequilla de hierbas", hr: "Angus medaljoni 300 g | paprika i luk | maslac od začinskog bilja", lb: "Angus-Medaillonen 300 g | Paprika & Ënnen | Kraiderbotter" },
            p: "34,90" },
          { n: { de: "Chateaubriand — für 2", en: "Chateaubriand — for 2", fr: "Chateaubriand — pour 2", es: "Chateaubriand — para 2", hr: "Chateaubriand — za 2", lb: "Chateaubriand — fir 2" },
            d: { de: "Angus-Filetsteak 400 g | Sauce Béarnaise | Brokkoli | Kroketten", en: "Angus fillet steak 400 g | Béarnaise sauce | broccoli | croquettes", fr: "Filet d'Angus 400 g | sauce béarnaise | brocoli | croquettes", es: "Filete de Angus 400 g | salsa bearnesa | brócoli | croquetas", hr: "Angus file 400 g | umak bearnaise | brokula | kroketi", lb: "Angus-Filetsteak 400 g | Sauce Béarnaise | Brokkoli | Kroketten" },
            p: "76,90", star: true },
          { n: { de: "Surf & Turf — für 2", en: "Surf & turf — for 2", fr: "Surf & turf — pour 2", es: "Surf & turf — para 2", hr: "Surf & turf — za 2", lb: "Surf & Turf — fir 2" },
            d: { de: "Angus-Filetsteak 400 g | 2 Riesengarnelen | Grillgemüse | Kartoffelecken", en: "Angus fillet steak 400 g | 2 king prawns | grilled vegetables | potato wedges", fr: "Filet d'Angus 400 g | 2 gambas | légumes grillés | pommes de terre", es: "Filete de Angus 400 g | 2 langostinos | verduras a la parrilla | patatas gajo", hr: "Angus file 400 g | 2 velike kozice | povrće s roštilja | krumpirići", lb: "Angus-Filetsteak 400 g | 2 Risegarnélen | Grillgeméis | Gromperenecken" },
            p: "78,90", star: true },
          { n: { de: "Grillplatte „fachwerk“ — für 2", en: "“fachwerk” grill platter — for 2", fr: "Grillade « fachwerk » — pour 2", es: "Parrillada «fachwerk» — para 2", hr: "Grill plata „fachwerk“ — za 2", lb: "Grillplack „fachwerk“ — fir 2" },
            d: { de: "Angus-Rindfleisch | Kalbssteak-Medaillons | Lammkoteletts | Chorizo", en: "Angus beef | veal steak medallions | lamb chops | chorizo", fr: "Bœuf Angus | médaillons de veau | côtelettes d'agneau | chorizo", es: "Res Angus | medallones de ternera | chuletas de cordero | chorizo", hr: "Angus govedina | teleći medaljoni | janjeći kotleti | chorizo", lb: "Angus-Rëndfleesch | Kallefssteak-Medaillonen | Lammkotletten | Chorizo" },
            p: "64,90" },
          { n: { de: "Angus-Grillplatte — für 2", en: "Angus grill platter — for 2", fr: "Grillade Angus — pour 2", es: "Parrillada Angus — para 2", hr: "Angus grill plata — za 2", lb: "Angus-Grillplack — fir 2" },
            d: { de: "Angus-Steak-Medaillons | Rinderfilet | Hüftsteak | Rumpsteak | Kräuterbutter", en: "Angus steak medallions | beef fillet | hip steak | rump steak | herb butter", fr: "Médaillons d'Angus | filet de bœuf | steak de hanche | rumsteck | beurre aux herbes", es: "Medallones Angus | solomillo | filete de cadera | rumpsteak | mantequilla de hierbas", hr: "Angus medaljoni | goveđi file | odrezak od buta | ramstek | maslac od začinskog bilja", lb: "Angus-Steak-Medaillonen | Rëndfilet | Hüftsteak | Rumpsteak | Kraiderbotter" },
            p: "66,90" }
        ]
      },
      {
        title: { de: "Saucen zum Steak", en: "Steak sauces", fr: "Sauces pour le steak", es: "Salsas para el steak", hr: "Umaci uz odrezak", lb: "Zoossen zum Steak" },
        items: [
          { n: { de: "Kräuterbutter", en: "Herb butter", fr: "Beurre aux herbes", es: "Mantequilla de hierbas", hr: "Maslac od začinskog bilja", lb: "Kraiderbotter" }, p: "2,50" },
          { n: { de: "Kräuterknoblauch", en: "Herb garlic", fr: "Ail aux herbes", es: "Ajo con hierbas", hr: "Češnjak sa začinskim biljem", lb: "Kraiderknuewelek" }, p: "2,50" },
          { n: { de: "Gorgonzola-Art", en: "Gorgonzola style", fr: "Façon gorgonzola", es: "Al gorgonzola", hr: "Na način gorgonzole", lb: "Gorgonzola-Aart" },
            d: { de: "In Gorgonzolasauce", en: "In Gorgonzola sauce", fr: "Sauce au gorgonzola", es: "En salsa de gorgonzola", hr: "U umaku od gorgonzole", lb: "An Gorgonzolazooss" }, p: "4,00" },
          { n: { de: "Pfeffersteak-Art", en: "Pepper steak style", fr: "Façon steak au poivre", es: "A la pimienta", hr: "S umakom od papra", lb: "Peffersteak-Aart" },
            d: { de: "In feiner Pfeffersauce", en: "In a fine pepper sauce", fr: "Fine sauce au poivre", es: "En fina salsa de pimienta", hr: "U finom umaku od papra", lb: "A fenger Pefferzooss" }, p: "4,00" },
          { n: "Chef Special",
            d: { de: "Mit Zwiebeln & Champignons", en: "With onions & mushrooms", fr: "Oignons & champignons", es: "Con cebolla y champiñones", hr: "S lukom i šampinjonima", lb: "Mat Ënnen & Champignonen" }, p: "4,00" },
          { n: "Surf & Turf",
            d: { de: "Mit 2 Riesengarnelen", en: "With 2 king prawns", fr: "Avec 2 gambas", es: "Con 2 langostinos", hr: "S 2 velike kozice", lb: "Mat 2 Risegarnélen" }, p: "6,90" },
          { n: { de: "Trüffel", en: "Truffle", fr: "Truffe", es: "Trufa", hr: "Tartuf", lb: "Trüffel" },
            d: { de: "In Trüffelsauce", en: "In truffle sauce", fr: "Sauce à la truffe", es: "En salsa de trufa", hr: "U umaku od tartufa", lb: "An Trüffelzooss" }, p: "5,50" },
          { n: "Chateaubriand",
            d: { de: "In Sauce Béarnaise", en: "In Béarnaise sauce", fr: "Sauce béarnaise", es: "En salsa bearnesa", hr: "U umaku bearnaise", lb: "An Sauce Béarnaise" }, p: "4,50" }
        ]
      }
    ]
  },

  /* ──────────────── KALB & LAMM ──────────────── */
  {
    id: "veal",
    label: { de: "Kalb & Lamm", en: "Veal & Lamb", fr: "Veau & Agneau", es: "Ternera y Cordero", hr: "Teletina i Janjetina", lb: "Kallef & Lamm" },
    groups: [{
      items: [
        { n: { de: "Kalbsfilet „Wiener Schnitzel“", en: "Veal fillet “Wiener Schnitzel”", fr: "Filet de veau « escalope viennoise »", es: "Filete de ternera «Wiener Schnitzel»", hr: "Teleći file „bečki odrezak“", lb: "Kallefsfilet „Wiener Schnitzel“" },
          d: { de: "Schnitzel vom Kalbsfilet in Panade | Bratkartoffeln | Preiselbeeren", en: "Breaded veal fillet schnitzel | fried potatoes | lingonberries", fr: "Escalope de filet de veau panée | pommes de terre sautées | airelles", es: "Escalope de filete de ternera empanado | patatas salteadas | arándanos rojos", hr: "Pohani odrezak od telećeg filea | prženi krumpir | brusnice", lb: "Schnitzel vum Kallefsfilet an der Panade | Brotgromperen | Preiselbieren" },
          p: "28,50" },
        { n: { de: "Kalbsfilet Cordon Bleu", en: "Veal fillet cordon bleu", fr: "Cordon bleu de filet de veau", es: "Cordon bleu de filete de ternera", hr: "Teleći file cordon bleu", lb: "Kallefsfilet Cordon Bleu" },
          d: { de: "Kalbsfilet in Panade | Serranoschinken | Gorgonzola | Bratkartoffeln", en: "Breaded veal fillet | Serrano ham | Gorgonzola | fried potatoes", fr: "Filet de veau pané | jambon serrano | gorgonzola | pommes de terre sautées", es: "Filete de ternera empanado | jamón serrano | gorgonzola | patatas salteadas", hr: "Pohani teleći file | serrano pršut | gorgonzola | prženi krumpir", lb: "Kallefsfilet an der Panade | Serrano-Ham | Gorgonzola | Brotgromperen" },
          p: "30,90" },
        { n: { de: "Kalbssteak", en: "Veal steak", fr: "Steak de veau", es: "Filete de ternera", hr: "Teleći odrezak", lb: "Kallefssteak" },
          d: { de: "Rosé gegrilltes Kalbssteak in Kräuterknoblauch | Grillgemüse | Kartoffelecken", en: "Pink-grilled veal steak in herb garlic | grilled vegetables | potato wedges", fr: "Steak de veau rosé, ail-herbes | légumes grillés | pommes de terre", es: "Filete de ternera rosado con ajo y hierbas | verduras a la parrilla | patatas gajo", hr: "Ružičasto pečen teleći odrezak s češnjakom i biljem | povrće s roštilja | krumpirići", lb: "Rosé gegrillte Kallefssteak am Kraiderknuewelek | Grillgeméis | Gromperenecken" },
          p: "28,90" },
        { n: { de: "Kalbsleber", en: "Veal liver", fr: "Foie de veau", es: "Hígado de ternera", hr: "Teleća jetra", lb: "Kallefsliewer" },
          d: { de: "Venezianische Art | in Kräuter-Salbei-Balsamico | Kartoffelstampf", en: "Venetian style | in herb-sage balsamic | mashed potatoes", fr: "À la vénitienne | balsamique aux herbes et à la sauge | écrasé de pommes de terre", es: "A la veneciana | balsámico con hierbas y salvia | puré de patata", hr: "Na venecijanski način | balzamiko s biljem i kaduljom | pire krumpir", lb: "Venezianesch Aart | am Kraider-Salbei-Balsamico | Gromperestampes" },
          p: "26,90" },
        { n: { de: "Lammfilet", en: "Lamb fillet", fr: "Filet d'agneau", es: "Filete de cordero", hr: "Janjeći file", lb: "Lammfilet" }, p: "36,90" },
        { n: { de: "Lammcarré", en: "Rack of lamb", fr: "Carré d'agneau", es: "Carré de cordero", hr: "Janjeći carré", lb: "Lammcarré" }, p: "36,90" },
        { n: { de: "Lammkoteletts", en: "Lamb chops", fr: "Côtelettes d'agneau", es: "Chuletas de cordero", hr: "Janjeći kotleti", lb: "Lammkotletten" }, p: "34,50" },
        { n: { de: "Duett vom Lamm", en: "Duet of lamb", fr: "Duo d'agneau", es: "Dúo de cordero", hr: "Janjeći duet", lb: "Duett vum Lamm" }, p: "34,90" }
      ]
    }]
  },

  /* ──────────────── VEGETARISCH ──────────────── */
  {
    id: "veggie",
    label: { de: "Vegetarisch", en: "Vegetarian", fr: "Végétarien", es: "Vegetariano", hr: "Vegetarijansko", lb: "Vegetaresch" },
    groups: [{
      items: [
        { n: { de: "Veggie-Bio-Burger", en: "Organic veggie burger", fr: "Burger végétarien bio", es: "Hamburguesa vegetariana bio", hr: "Bio veggie burger", lb: "Veggie-Bio-Burger" },
          d: { de: "Cheddar | Burgersauce | Salat | Zwiebeln | Steakpommes", en: "Cheddar | burger sauce | salad | onions | steak fries", fr: "Cheddar | sauce burger | salade | oignons | frites", es: "Cheddar | salsa burger | ensalada | cebolla | patatas fritas", hr: "Cheddar | burger umak | salata | luk | krumpirići", lb: "Cheddar | Burgerzooss | Zalot | Ënnen | Steakfritten" },
          p: "18,50", veg: "v" },
        { n: { de: "Pilzrisotto / oder Linguine", en: "Mushroom risotto / or linguine", fr: "Risotto aux champignons / ou linguine", es: "Risotto de setas / o linguine", hr: "Rižoto od gljiva / ili linguine", lb: "Champignonsrisotto / oder Linguine" },
          d: { de: "Frische Champignons | Zwiebeln | in Sahnesauce", en: "Fresh mushrooms | onions | in cream sauce", fr: "Champignons frais | oignons | sauce crème", es: "Champiñones frescos | cebolla | en salsa de nata", hr: "Svježe šampinjone | luk | u umaku od vrhnja", lb: "Frësch Champignonen | Ënnen | an Rahmzooss" },
          p: "18,90", veg: "v" },
        { n: { de: "Mediterranes Risotto / oder Linguine", en: "Mediterranean risotto / or linguine", fr: "Risotto méditerranéen / ou linguine", es: "Risotto mediterráneo / o linguine", hr: "Mediteranski rižoto / ili linguine", lb: "Mediterrane Risotto / oder Linguine" },
          d: { de: "Mediterranes Gemüse | in Tomaten-Kräuter-Knoblauch | Parmesan", en: "Mediterranean vegetables | in tomato, herbs & garlic | Parmesan", fr: "Légumes méditerranéens | tomate-herbes-ail | parmesan", es: "Verduras mediterráneas | en tomate, hierbas y ajo | parmesano", hr: "Mediteransko povrće | u rajčici, začinskom bilju i češnjaku | parmezan", lb: "Mediterrant Geméis | an Tomaten-Kraider-Knuewelek | Parmesan" },
          p: "18,90", veg: "v" },
        { n: { de: "Gemüseplatte mit Reis", en: "Vegetable platter with rice", fr: "Assiette de légumes au riz", es: "Plato de verduras con arroz", hr: "Plata povrća s rižom", lb: "Geméisplack mat Räis" },
          d: { de: "Gemüsevariation mit Reis | ein Genuß für Vegetarier & Veganer", en: "Vegetable selection with rice | a delight for vegetarians & vegans", fr: "Assortiment de légumes au riz | un régal pour végétariens & végans", es: "Variación de verduras con arroz | un placer para vegetarianos y veganos", hr: "Izbor povrća s rižom | užitak za vegetarijance i vegane", lb: "Geméisvariatioun mat Räis | e Genoss fir Vegetarier & Veganer" },
          p: "18,90", veg: "ve" },
        { n: { de: "Paella — Feinschmeckerplatte für 2", en: "Paella — gourmet platter for 2", fr: "Paella — plateau gourmet pour 2", es: "Paella — plato gourmet para 2", hr: "Paella — gurmanska plata za 2", lb: "Paella — Feinschmecker-Plack fir 2" },
          d: { de: "Der Klassiker als Reisgericht — vegetarisch | oder mit Edelfisch, Meeresfrüchten & mediterranem Gemüse | in Kräuter-Knoblauch-Safransauce — ein Genuß!", en: "The classic rice dish — vegetarian | or with noble fish, seafood & Mediterranean vegetables | in herb-garlic-saffron sauce — a delight!", fr: "Le grand classique du riz — végétarien | ou avec poisson noble, fruits de mer & légumes | sauce ail-herbes-safran — un régal !", es: "El clásico plato de arroz — vegetariano | o con pescado noble, mariscos y verduras | en salsa de ajo, hierbas y azafrán — ¡un placer!", hr: "Klasično jelo od riže — vegetarijanski | ili s plemenitom ribom, plodovima mora i povrćem | u umaku od češnjaka, bilja i šafrana — pravi užitak!", lb: "De Klassiker als Räisplat — vegetaresch | oder mat Edelfësch, Miersfriichten & mediterranem Geméis | an Kraider-Knuewelek-Safranzooss — e Genoss!" },
          p: "48,90", veg: "v", star: true }
      ]
    }]
  },

  /* ──────────────── KINDER ──────────────── */
  {
    id: "kids",
    label: { de: "Kinderkarte", en: "For Kids", fr: "Menu Enfant", es: "Para Niños", hr: "Dječji Meni", lb: "Kannerkaart" },
    groups: [{
      items: [
        { n: { de: "Kinder-Kalbsschnitzel", en: "Kids' veal schnitzel", fr: "Escalope de veau enfant", es: "Escalope de ternera infantil", hr: "Dječji teleći odrezak", lb: "Kanner-Kallefsschnitzel" },
          d: { de: "Kalbsschnitzel mit Pommes", en: "Veal schnitzel with fries", fr: "Escalope de veau et frites", es: "Escalope de ternera con patatas fritas", hr: "Teleći odrezak s pomfritom", lb: "Kallefsschnitzel mat Fritten" },
          p: "12,90" },
        { n: { de: "Kinder-Filetsteak", en: "Kids' fillet steak", fr: "Filet de bœuf enfant", es: "Solomillo infantil", hr: "Dječji file odrezak", lb: "Kanner-Filetsteak" },
          d: { de: "Rinderfiletsteak mit Pommes", en: "Beef fillet steak with fries", fr: "Steak de filet de bœuf et frites", es: "Filete de solomillo con patatas fritas", hr: "Odrezak od goveđeg filea s pomfritom", lb: "Rëndfiletsteak mat Fritten" },
          p: "16,90" },
        { n: { de: "Spaghetti Napoli", en: "Spaghetti Napoli", fr: "Spaghetti Napoli", es: "Espaguetis Napoli", hr: "Špageti Napoli", lb: "Spaghetti Napoli" },
          d: { de: "Mit hausgemachter Tomatensauce | Parmesan", en: "With homemade tomato sauce | Parmesan", fr: "Sauce tomate maison | parmesan", es: "Con salsa de tomate casera | parmesano", hr: "S domaćim umakom od rajčice | parmezan", lb: "Mat hausgemaachter Tomatenzooss | Parmesan" },
          p: "10,90", veg: "v" }
      ]
    }]
  },

  /* ──────────────── BEILAGEN ──────────────── */
  {
    id: "sides",
    label: { de: "Saucen & Beilagen", en: "Sauces & Sides", fr: "Sauces & Garnitures", es: "Salsas y Guarniciones", hr: "Umaci i Prilozi", lb: "Zoossen & Bäilagen" },
    groups: [
      {
        title: { de: "Saucen", en: "Sauces", fr: "Sauces", es: "Salsas", hr: "Umaci", lb: "Zoossen" },
        items: [
          { n: { de: "Kräuter-Knoblauchsauce", en: "Herb-garlic sauce", fr: "Sauce ail-herbes", es: "Salsa de ajo y hierbas", hr: "Umak od češnjaka i bilja", lb: "Kraider-Knuewelekzooss" }, p: "2,50" },
          { n: { de: "Kräuterbutter", en: "Herb butter", fr: "Beurre aux herbes", es: "Mantequilla de hierbas", hr: "Maslac od začinskog bilja", lb: "Kraiderbotter" }, p: "2,50" },
          { n: { de: "Champignonsauce", en: "Mushroom sauce", fr: "Sauce aux champignons", es: "Salsa de champiñones", hr: "Umak od šampinjona", lb: "Champignonszooss" }, p: "4,00" },
          { n: { de: "Grüne Pfeffersauce", en: "Green pepper sauce", fr: "Sauce au poivre vert", es: "Salsa de pimienta verde", hr: "Umak od zelenog papra", lb: "Gréng Pefferzooss" }, p: "4,00" },
          { n: "Sauce Béarnaise", p: "4,50" },
          { n: { de: "Gorgonzolasauce", en: "Gorgonzola sauce", fr: "Sauce au gorgonzola", es: "Salsa de gorgonzola", hr: "Umak od gorgonzole", lb: "Gorgonzolazooss" }, p: "4,00" },
          { n: { de: "Trüffelsauce", en: "Truffle sauce", fr: "Sauce à la truffe", es: "Salsa de trufa", hr: "Umak od tartufa", lb: "Trüffelzooss" }, p: "5,50" },
          { n: { de: "Hummersauce", en: "Lobster sauce", fr: "Sauce au homard", es: "Salsa de bogavante", hr: "Umak od jastoga", lb: "Hummerzooss" }, p: "5,50" }
        ]
      },
      {
        title: { de: "Beilagen", en: "Sides", fr: "Garnitures", es: "Guarniciones", hr: "Prilozi", lb: "Bäilagen" },
        items: [
          { n: { de: "Salatteller als Beilage", en: "Side salad plate", fr: "Assiette de salade", es: "Plato de ensalada", hr: "Salata kao prilog", lb: "Zalotenteller als Bäilag" }, p: "6,90" },
          { n: { de: "Folienkartoffel", en: "Baked potato", fr: "Pomme de terre au four", es: "Patata asada", hr: "Pečeni krumpir u foliji", lb: "Foliegromper" }, p: "4,50" },
          { n: { de: "Steakpommes", en: "Steak fries", fr: "Frites de steak", es: "Patatas fritas gruesas", hr: "Krumpirići za odrezak", lb: "Steakfritten" }, p: "3,90" },
          { n: { de: "Bratkartoffeln", en: "Fried potatoes", fr: "Pommes de terre sautées", es: "Patatas salteadas", hr: "Prženi krumpir", lb: "Brotgromperen" }, p: "4,00" },
          { n: { de: "Rosmarinkartoffeln", en: "Rosemary potatoes", fr: "Pommes de terre au romarin", es: "Patatas al romero", hr: "Krumpir s ružmarinom", lb: "Rosmaringromperen" }, p: "4,50" },
          { n: { de: "Kartoffelecken", en: "Potato wedges", fr: "Quartiers de pommes de terre", es: "Patatas gajo", hr: "Krumpirići", lb: "Gromperenecken" }, p: "4,00" },
          { n: { de: "Brokkoli", en: "Broccoli", fr: "Brocoli", es: "Brócoli", hr: "Brokula", lb: "Brokkoli" }, p: "4,50" },
          { n: { de: "Grillgemüse", en: "Grilled vegetables", fr: "Légumes grillés", es: "Verduras a la parrilla", hr: "Povrće s roštilja", lb: "Grillgeméis" }, p: "4,90" },
          { n: { de: "Grüne Bohnen mit Speck", en: "Green beans with bacon", fr: "Haricots verts au lard", es: "Judías verdes con bacon", hr: "Mahune sa slaninom", lb: "Gréng Bounen mat Speck" }, p: "4,50" },
          { n: { de: "Reis / Kroketten", en: "Rice / croquettes", fr: "Riz / croquettes", es: "Arroz / croquetas", hr: "Riža / kroketi", lb: "Räis / Kroketten" }, p: "3,90" },
          { n: { de: "Mangold / Blattspinat", en: "Chard / leaf spinach", fr: "Blettes / épinards", es: "Acelgas / espinacas", hr: "Blitva / špinat", lb: "Mangold / Blatspinat" }, p: "4,90" },
          { n: { de: "Geröstete Zwiebeln", en: "Roasted onions", fr: "Oignons rôtis", es: "Cebolla frita", hr: "Prženi luk", lb: "Geréischt Ënnen" }, p: "3,90" }
        ]
      }
    ]
  },

  /* ──────────────── DESSERTS ──────────────── */
  {
    id: "desserts",
    label: { de: "Desserts", en: "Desserts", fr: "Desserts", es: "Postres", hr: "Deserti", lb: "Desserten" },
    groups: [
      {
        items: [
          { n: "Mousse au Chocolat", p: "8,50", veg: "v" },
          { n: { de: "Tiramisu — hausgemacht", en: "Tiramisu — homemade", fr: "Tiramisu — fait maison", es: "Tiramisú — casero", hr: "Tiramisu — domaći", lb: "Tiramisu — hausgemaach" }, p: "8,90", veg: "v", star: true },
          { n: { de: "Vanilleeis mit flambierten Kirschen", en: "Vanilla ice cream with flambéed cherries", fr: "Glace vanille aux cerises flambées", es: "Helado de vainilla con cerezas flambeadas", hr: "Sladoled od vanilije s flambiranim višnjama", lb: "Vanillsglace mat flambéierte Kiischten" },
            d: { de: "Mit Sahne", en: "With cream", fr: "Avec chantilly", es: "Con nata", hr: "Sa šlagom", lb: "Mat Schlagsahne" }, p: "8,90", veg: "v" },
          { n: { de: "Vanilleeis mit heißer Schokolade", en: "Vanilla ice cream with hot chocolate", fr: "Glace vanille au chocolat chaud", es: "Helado de vainilla con chocolate caliente", hr: "Sladoled od vanilije s vrućom čokoladom", lb: "Vanillsglace mat waarmer Schockela" },
            d: { de: "Haselnüsse | Sahne", en: "Hazelnuts | cream", fr: "Noisettes | chantilly", es: "Avellanas | nata", hr: "Lješnjaci | šlag", lb: "Hieselnëss | Schlagsahne" }, p: "8,50", veg: "v" },
          { n: { de: "Schokotörtchen", en: "Chocolate fondant", fr: "Fondant au chocolat", es: "Coulant de chocolate", hr: "Čokoladni kolačić", lb: "Schockelastäertchen" },
            d: { de: "Mit flüssigem Kern | Vanilleeis", en: "With a molten centre | vanilla ice cream", fr: "Cœur coulant | glace vanille", es: "Con corazón fundente | helado de vainilla", hr: "S tekućom sredinom | sladoled od vanilije", lb: "Mat flëssegem Kär | Vanillsglace" }, p: "9,80", veg: "v" },
          { n: "Tartufo Classico", p: "7,90", veg: "v" },
          { n: "Copa Crema Catalana",
            d: { de: "Mit Vanilleeis", en: "With vanilla ice cream", fr: "Avec glace vanille", es: "Con helado de vainilla", hr: "Sa sladoledom od vanilije", lb: "Mat Vanillsglace" }, p: "8,50", veg: "v" },
          { n: { de: "Zitronensorbet", en: "Lemon sorbet", fr: "Sorbet au citron", es: "Sorbete de limón", hr: "Sorbet od limuna", lb: "Zitrounesorbet" },
            d: { de: "Mit frischen Beeren", en: "With fresh berries", fr: "Aux baies fraîches", es: "Con bayas frescas", hr: "Sa svježim bobicama", lb: "Mat frësche Bieren" }, p: "7,90", veg: "v" },
          { n: "Marsala Zabaione", p: "9,90", veg: "v" },
          { n: { de: "Süße Dessertvariation", en: "Sweet dessert selection", fr: "Variation de desserts", es: "Variación de postres", hr: "Slatka desertna varijacija", lb: "Séiss Dessertvariatioun" },
            d: { de: "Nach Art des Hauses: hausgemachtes Tiramisu | Mousse au Chocolat | Copa Crema Catalana | garniert mit Eis & Saisonfrüchten", en: "House style: homemade tiramisu | chocolate mousse | copa crema catalana | garnished with ice cream & seasonal fruit", fr: "Façon maison : tiramisu maison | mousse au chocolat | copa crema catalana | glace & fruits de saison", es: "Al estilo de la casa: tiramisú casero | mousse de chocolate | copa crema catalana | con helado y fruta de temporada", hr: "Na način kuće: domaći tiramisu | čokoladni mousse | copa crema catalana | uz sladoled i sezonsko voće", lb: "No Aart vum Haus: hausgemaachten Tiramisu | Mousse au Chocolat | Copa Crema Catalana | garnéiert mat Glace & Saisonfriichten" },
            variants: [{ l: "1 Pers.", p: "12,90" }, { l: "2 Pers.", p: "24,90" }], veg: "v", star: true },
          { n: { de: "Käsevariation", en: "Cheese selection", fr: "Assiette de fromages", es: "Tabla de quesos", hr: "Izbor sireva", lb: "Kéisvariatioun" },
            d: { de: "Italienische & spanische Käse | Honig-Senf-Dip", en: "Italian & Spanish cheeses | honey-mustard dip", fr: "Fromages italiens & espagnols | dip miel-moutarde", es: "Quesos italianos y españoles | dip de miel y mostaza", hr: "Talijanski i španjolski sirevi | umak od meda i senfa", lb: "Italienesch & spuenesch Kéiser | Hunneg-Moschter-Dipp" }, p: "12,50", veg: "v" },
          { n: "Espresso Corretto / Affogato al Caffè",
            d: { de: "Espresso Doppio mit Grappa | oder Vanilleeis — ein gemütlicher Ausklang", en: "Double espresso with grappa | or vanilla ice cream — a cosy finish", fr: "Espresso doppio à la grappa | ou glace vanille — une fin toute en douceur", es: "Espresso doppio con grappa | o helado de vainilla — un final acogedor", hr: "Dupli espresso s grappom | ili sladoledom od vanilije — ugodan završetak", lb: "Espresso Doppio mat Grappa | oder Vanillsglace — e gemittlechen Ausklang" }, p: "6,90" }
        ]
      }
    ]
  },

  /* ──────────────── GETRÄNKE ──────────────── */
  {
    id: "drinks",
    label: { de: "Getränke", en: "Drinks", fr: "Boissons", es: "Bebidas", hr: "Pića", lb: "Gedrénks" },
    groups: [
      {
        title: { de: "Aperitifs", en: "Aperitifs", fr: "Apéritifs", es: "Aperitivos", hr: "Aperitivi", lb: "Aperitiffen" },
        items: [
          { n: "Prosecco", p: "5,50" }, { n: "Hugo", p: "6,90" },
          { n: { de: "Sherry medium oder dry", en: "Sherry medium or dry", fr: "Xérès medium ou sec", es: "Jerez medium o seco", hr: "Sherry medium ili suhi", lb: "Sherry medium oder dry" }, p: "4,50" },
          { n: { de: "Portwein", en: "Port", fr: "Porto", es: "Oporto", hr: "Porto", lb: "Portwäin" }, p: "4,90" },
          { n: "Martini Bianco / Rosso", p: "4,90" },
          { n: "Campari Orange", p: "7,90" }, { n: "Campari Soda / Spritz", p: "6,90" },
          { n: "Lillet Blanc — Wild Berry", p: "7,90" }, { n: "Aperol Spritz", p: "7,90" },
          { n: "Aperitivo Rosato Spritz (Ramazzotti)", p: "7,90" }
        ]
      },
      {
        title: { de: "Cocktails & Drinks", en: "Cocktails & Drinks", fr: "Cocktails", es: "Cócteles", hr: "Kokteli", lb: "Cocktailen" },
        items: [
          { n: "Vodka Red Bull", p: "8,00" },
          { n: "Vodka Lemon", d: { de: "Absolut Vodka | Bitter Lemon | Zitrone", en: "Absolut vodka | bitter lemon | lemon", fr: "Vodka Absolut | bitter lemon | citron", es: "Vodka Absolut | bitter lemon | limón", hr: "Absolut votka | bitter lemon | limun", lb: "Absolut Vodka | Bitter Lemon | Zitroun" }, p: "7,50" },
          { n: "Gin Tonic", d: { de: "Gordon's Gin | Tonic Water | Zitrone", en: "Gordon's gin | tonic water | lemon", fr: "Gin Gordon's | tonic | citron", es: "Ginebra Gordon's | tónica | limón", hr: "Gordon's gin | tonik | limun", lb: "Gordon's Gin | Tonic | Zitroun" }, p: "8,00" },
          { n: "Mojito", d: { de: "Limetten | Rohrzucker | Minze | weißer Rum | Limettensaft", en: "Limes | cane sugar | mint | white rum | lime juice", fr: "Citron vert | sucre de canne | menthe | rhum blanc | jus de citron vert", es: "Lima | azúcar de caña | menta | ron blanco | zumo de lima", hr: "Limete | šećer od trske | menta | bijeli rum | sok limete", lb: "Limetten | Rouerzocker | Mënz | wäisse Rum | Limettejus" }, p: "8,00" },
          { n: "Piña Colada", d: { de: "Weißer Rum | Kokoscreme | Ananassaft", en: "White rum | coconut cream | pineapple juice", fr: "Rhum blanc | crème coco | jus d'ananas", es: "Ron blanco | crema de coco | zumo de piña", hr: "Bijeli rum | kokosova krema | sok ananasa", lb: "Wäisse Rum | Kokoscrème | Ananasjus" }, p: "8,00" },
          { n: "Caipirinha", d: { de: "Cachaça | Rohrzucker | Limetten | Limettensaft", en: "Cachaça | cane sugar | limes | lime juice", fr: "Cachaça | sucre de canne | citron vert | jus de citron vert", es: "Cachaça | azúcar de caña | lima | zumo de lima", hr: "Cachaça | šećer od trske | limete | sok limete", lb: "Cachaça | Rouerzocker | Limetten | Limettejus" }, p: "8,00" },
          { n: "Cuba Libre", d: { de: "Havana Club | Limettensaft | Cola", en: "Havana Club | lime juice | cola", fr: "Havana Club | jus de citron vert | cola", es: "Havana Club | zumo de lima | cola", hr: "Havana Club | sok limete | cola", lb: "Havana Club | Limettejus | Cola" }, p: "8,00" },
          { n: "Tequila Sunrise", d: { de: "Tequila | Orangensaft | Grenadine", en: "Tequila | orange juice | grenadine", fr: "Tequila | jus d'orange | grenadine", es: "Tequila | zumo de naranja | granadina", hr: "Tequila | sok naranče | grenadina", lb: "Tequila | Orangejus | Grenadine" }, p: "8,00" },
          { n: "Sex on the Beach", d: { de: "Vodka | Pfirsichlikör | Orangensaft | Maracuja | Zitrone", en: "Vodka | peach liqueur | orange juice | passion fruit | lemon", fr: "Vodka | liqueur de pêche | jus d'orange | passion | citron", es: "Vodka | licor de melocotón | zumo de naranja | maracuyá | limón", hr: "Votka | liker od breskve | sok naranče | marakuja | limun", lb: "Vodka | Piischlikör | Orangejus | Maracuja | Zitroun" }, p: "8,50" },
          { n: "Mai Tai", d: { de: "Rum | Orangensaft | Grenadine | Ananassaft | Mandelsirup", en: "Rum | orange juice | grenadine | pineapple juice | almond syrup", fr: "Rhum | jus d'orange | grenadine | jus d'ananas | sirop d'amande", es: "Ron | zumo de naranja | granadina | zumo de piña | sirope de almendra", hr: "Rum | sok naranče | grenadina | sok ananasa | sirup od badema", lb: "Rum | Orangejus | Grenadine | Ananasjus | Mandelsirop" }, p: "8,50" },
          { n: "Swimmingpool", d: { de: "Vodka | Rum | Blue Curaçao | Kokos | Ananassaft", en: "Vodka | rum | blue curaçao | coconut | pineapple juice", fr: "Vodka | rhum | curaçao bleu | coco | jus d'ananas", es: "Vodka | ron | curaçao azul | coco | zumo de piña", hr: "Votka | rum | plavi curaçao | kokos | sok ananasa", lb: "Vodka | Rum | Blue Curaçao | Kokos | Ananasjus" }, p: "8,50" },
          { n: "Long Island Iced Tea", d: { de: "Vodka | Gin | weißer Rum | Tequila | Triple Sec | Cola", en: "Vodka | gin | white rum | tequila | triple sec | cola", fr: "Vodka | gin | rhum blanc | tequila | triple sec | cola", es: "Vodka | ginebra | ron blanco | tequila | triple seco | cola", hr: "Votka | gin | bijeli rum | tequila | triple sec | cola", lb: "Vodka | Gin | wäisse Rum | Tequila | Triple Sec | Cola" }, p: "9,50" },
          { n: { de: "Ipanema (alkoholfrei)", en: "Ipanema (non-alcoholic)", fr: "Ipanema (sans alcool)", es: "Ipanema (sin alcohol)", hr: "Ipanema (bezalkoholni)", lb: "Ipanema (ouni Alkohol)" },
            d: { de: "Limetten | Rohrzucker | Limettensaft | Maracuja", en: "Limes | cane sugar | lime juice | passion fruit", fr: "Citron vert | sucre de canne | jus de citron vert | passion", es: "Lima | azúcar de caña | zumo de lima | maracuyá", hr: "Limete | šećer od trske | sok limete | marakuja", lb: "Limetten | Rouerzocker | Limettejus | Maracuja" }, p: "6,90" },
          { n: { de: "Virgin Colada (alkoholfrei)", en: "Virgin colada (non-alcoholic)", fr: "Virgin colada (sans alcool)", es: "Virgin colada (sin alcohol)", hr: "Virgin colada (bezalkoholna)", lb: "Virgin Colada (ouni Alkohol)" },
            d: { de: "Kokoscreme | Ananassaft", en: "Coconut cream | pineapple juice", fr: "Crème coco | jus d'ananas", es: "Crema de coco | zumo de piña", hr: "Kokosova krema | sok ananasa", lb: "Kokoscrème | Ananasjus" }, p: "6,90" }
        ]
      },
      {
        title: { de: "Alkoholfreie Getränke", en: "Soft Drinks", fr: "Boissons sans alcool", es: "Bebidas sin alcohol", hr: "Bezalkoholna pića", lb: "Alkoholfräi Gedrénks" },
        items: [
          { n: { de: "Mineralwasser 0,25 l", en: "Mineral water 0.25 l", fr: "Eau minérale 0,25 l", es: "Agua mineral 0,25 l", hr: "Mineralna voda 0,25 l", lb: "Mineralwaasser 0,25 l" }, p: "2,40" },
          { n: { de: "Wasser mit / ohne Kohlensäure 0,75 l", en: "Water still / sparkling 0.75 l", fr: "Eau plate / gazeuse 0,75 l", es: "Agua con / sin gas 0,75 l", hr: "Voda gazirana / negazirana 0,75 l", lb: "Waasser mat / ouni Spruddel 0,75 l" }, p: "6,90" },
          { n: "Coca-Cola", p: "2,80" }, { n: "Cola Zero", p: "2,80" }, { n: "Sprite", p: "2,80" }, { n: "Mezzo Mix", p: "2,80" },
          { n: "Schweppes Bitter Lemon", p: "2,90" }, { n: "Schweppes Ginger Ale", p: "2,90" }, { n: "Schweppes Tonic Water", p: "2,90" },
          { n: "Red Bull", p: "3,50" },
          { n: { de: "Vio Bio-Schorle: Orange-Maracuja | Apfel-Johannisbeere | Rhabarber", en: "Vio organic spritzer: orange-passion fruit | apple-currant | rhubarb", fr: "Vio bio pétillant : orange-passion | pomme-cassis | rhubarbe", es: "Vio bio con gas: naranja-maracuyá | manzana-grosella | ruibarbo", hr: "Vio bio gazirani sok: naranča-marakuja | jabuka-ribiz | rabarbara", lb: "Vio Bio-Schorle: Orange-Maracuja | Apel-Kréischel | Rhabarber" }, p: "3,50" }
        ]
      },
      {
        title: { de: "Bier", en: "Beer", fr: "Bière", es: "Cerveza", hr: "Pivo", lb: "Béier" },
        items: [
          { n: "Zunft Kölsch", variants: [{ l: "0,2 l", p: "2,20" }, { l: "0,3 l", p: "3,30" }] },
          { n: "Königs Pilsener", p: "3,30" },
          { n: "Radler", p: "3,00" },
          { n: { de: "Hefeweizen", en: "Wheat beer", fr: "Bière blanche", es: "Cerveza de trigo", hr: "Pšenično pivo", lb: "Hefeweizen" }, p: "4,40" },
          { n: { de: "Alkoholfreies Weizen", en: "Non-alcoholic wheat beer", fr: "Blanche sans alcool", es: "Trigo sin alcohol", hr: "Bezalkoholno pšenično", lb: "Alkoholfräit Weizen" }, p: "4,40" },
          { n: "San Miguel", p: "3,50" },
          { n: "Bergisches Landbier Original", p: "3,30" },
          { n: "Sangria Especial", variants: [{ l: "0,25 l", p: "6,90" }, { l: "0,5 l", p: "13,50" }, { l: "1 l", p: "25,90" }] }
        ]
      },
      {
        title: { de: "Heiße Getränke", en: "Hot Drinks", fr: "Boissons chaudes", es: "Bebidas calientes", hr: "Topli napici", lb: "Waarm Gedrénks" },
        items: [
          { n: "Espresso", p: "2,20" }, { n: "Espresso Doppio", p: "4,40" },
          { n: { de: "Kaffee", en: "Coffee", fr: "Café", es: "Café", hr: "Kava", lb: "Kaffi" }, p: "2,20" },
          { n: "Cappuccino", p: "3,00" },
          { n: { de: "Cappuccino Special mit Schuss Kakao", en: "Cappuccino special with a dash of cocoa", fr: "Cappuccino spécial, touche de cacao", es: "Cappuccino especial con toque de cacao", hr: "Cappuccino special s malo kakaa", lb: "Cappuccino Special mat engem Schoss Kakao" }, p: "3,40" },
          { n: "Latte Macchiato", p: "3,60" },
          { n: { de: "Milchkaffee", en: "Café au lait", fr: "Café au lait", es: "Café con leche", hr: "Bijela kava", lb: "Mëllechkaffi" }, p: "2,80" },
          { n: { de: "Kakao", en: "Hot chocolate", fr: "Chocolat chaud", es: "Cacao", hr: "Kakao", lb: "Kakao" }, p: "2,00" },
          { n: { de: "Tee (verschiedene Sorten)", en: "Tea (various kinds)", fr: "Thé (plusieurs variétés)", es: "Té (varias clases)", hr: "Čaj (razne vrste)", lb: "Téi (verschidde Sorten)" }, p: "2,00" },
          { n: { de: "Licor 43 mit Milch", en: "Licor 43 with milk", fr: "Licor 43 au lait", es: "Licor 43 con leche", hr: "Licor 43 s mlijekom", lb: "Licor 43 mat Mëllech" }, p: "5,50" }
        ]
      },
      {
        title: { de: "Spirituosen (4 cl) & Weinbrand", en: "Spirits (4 cl) & Brandy", fr: "Spiritueux (4 cl) & Brandy", es: "Licores (4 cl) y Brandy", hr: "Žestoka pića (4 cl) i Brandy", lb: "Spirituosen (4 cl) & Wäibrand" },
        items: [
          { n: "Grappa", p: "4,50" }, { n: "Grappa di Prosecco", p: "4,90" },
          { n: "Vodka Absolut", p: "5,00" }, { n: "Tequila", p: "4,00" }, { n: "Malteser", p: "4,00" },
          { n: { de: "Jubiläums-Aquavit", en: "Jubiläums aquavit", fr: "Aquavit Jubiläums", es: "Aquavit Jubiläums", hr: "Jubilarni akvavit", lb: "Jubiläums-Aquavit" }, p: "4,50" },
          { n: "Bailey's", p: "4,00" }, { n: "Licor 43", p: "4,00" }, { n: "Sambuca", p: "5,00" },
          { n: "Fernet Branca", p: "4,00" }, { n: "Averna", p: "4,50" }, { n: "Ramazzotti", p: "4,50" },
          { n: "Jim Beam Bourbon", p: "5,00" }, { n: "Jack Daniel's", p: "6,00" },
          { n: "Bacardi Rum", p: "5,00" }, { n: "Havana Club 3 Años", p: "5,00" },
          { n: "Gordon's Gin", p: "5,00" }, { n: "Jägermeister", p: "4,50" }, { n: "Limoncello", p: "4,50" },
          { n: "Osborne Veterano", p: "5,50" }, { n: "Osborne Brandy 103", p: "5,50" },
          { n: { de: "Carlos I — am Tisch flambiert", en: "Carlos I — flambéed at the table", fr: "Carlos I — flambé à table", es: "Carlos I — flambeado en la mesa", hr: "Carlos I — flambiran za stolom", lb: "Carlos I — um Dësch flambéiert" }, p: "6,90" },
          { n: { de: "Cardenal Mendoza — auf Wunsch flambiert", en: "Cardenal Mendoza — flambéed on request", fr: "Cardenal Mendoza — flambé sur demande", es: "Cardenal Mendoza — flambeado a petición", hr: "Cardenal Mendoza — flambiran na želju", lb: "Cardenal Mendoza — op Wonsch flambéiert" }, p: "6,90" },
          { n: { de: "Conde de Osborne — auf Wunsch flambiert", en: "Conde de Osborne — flambéed on request", fr: "Conde de Osborne — flambé sur demande", es: "Conde de Osborne — flambeado a petición", hr: "Conde de Osborne — flambiran na želju", lb: "Conde de Osborne — op Wonsch flambéiert" }, p: "6,90" }
        ]
      }
    ]
  },

  /* ──────────────── WEINE ──────────────── */
  {
    id: "wine",
    label: { de: "Weinkarte", en: "Wine List", fr: "Carte des Vins", es: "Carta de Vinos", hr: "Vinska Karta", lb: "Wäikaart" },
    groups: [
      {
        title: { de: "Schaumwein & Champagner", en: "Sparkling & Champagne", fr: "Effervescents & Champagne", es: "Espumosos y Champán", hr: "Pjenušci i Šampanjac", lb: "Schaumwäin & Champagner" },
        items: [
          { n: "Prosecco", variants: [{ l: "0,15 l", p: "5,90" }, { l: "0,75 l", p: "28,90" }] },
          { n: { de: "Chardonnay Sekt", en: "Chardonnay sparkling", fr: "Chardonnay effervescent", es: "Chardonnay espumoso", hr: "Pjenušavi Chardonnay", lb: "Chardonnay Schaumwäin" },
            variants: [{ l: "0,75 l", p: "28,50" }, { l: "Magnum", p: "56,50" }] },
          { n: "Moët & Chandon", variants: [{ l: "0,75 l", p: "118,90" }, { l: "Magnum", p: "198,50" }] }
        ]
      },
      {
        title: { de: "Offene Weine — weiß & rosé", en: "Wines by the Glass — white & rosé", fr: "Vins au verre — blancs & rosés", es: "Vinos por copa — blancos y rosados", hr: "Vina na čaše — bijela i rosé", lb: "Oppe Wäiner — wäiss & rosé" },
        note: { de: "0,2 l / 0,5 l", en: "0.2 l / 0.5 l", fr: "0,2 l / 0,5 l", es: "0,2 l / 0,5 l", hr: "0,2 l / 0,5 l", lb: "0,2 l / 0,5 l" },
        items: [
          { n: "Riesling — Pfalz",
            d: { de: "Lieblich, zart hellgelb — exotische Frucht", en: "Off-dry, pale yellow — exotic fruit", fr: "Moelleux, jaune pâle — fruits exotiques", es: "Semidulce, amarillo pálido — fruta exótica", hr: "Poluslatki, blijedožut — egzotično voće", lb: "Lieflech, zaart hellgiel — exotesch Fruucht" },
            variants: [{ l: "0,2 l", p: "6,00" }, { l: "0,5 l", p: "13,90" }] },
          { n: "Grauburgunder — Baden",
            d: { de: "Trocken, leicht, massive Frucht, langer Abgang", en: "Dry, light, generous fruit, long finish", fr: "Sec, léger, fruit intense, longue finale", es: "Seco, ligero, fruta intensa, largo final", hr: "Suh, lagan, izražena voćnost, dug završetak", lb: "Dréchen, liicht, kräfteg Fruucht, laangen Ofgang" },
            variants: [{ l: "0,2 l", p: "6,50" }, { l: "0,5 l", p: "14,90" }] },
          { n: "Chardonnay",
            d: { de: "Halbtrocken — Aprikose & Pfirsich", en: "Semi-dry — apricot & peach", fr: "Demi-sec — abricot & pêche", es: "Semiseco — albaricoque y melocotón", hr: "Polusuhi — marelica i breskva", lb: "Hallefdréchen — Aprikos & Piisch" },
            variants: [{ l: "0,2 l", p: "6,50" }, { l: "0,5 l", p: "14,90" }] },
          { n: "Graševina — Kroatien",
            d: { de: "Trocken, hell & leicht — kroatischer Qualitätswein", en: "Dry, pale & light — Croatian quality wine", fr: "Sec, clair & léger — vin de qualité croate", es: "Seco, claro y ligero — vino croata de calidad", hr: "Suha, svijetla i lagana — hrvatsko kvalitetno vino", lb: "Dréchen, hell & liicht — kroatesche Qualitéitswäin" },
            variants: [{ l: "0,2 l", p: "6,50" }, { l: "0,5 l", p: "14,90" }] },
          { n: "Pinot Grigio — Italien",
            d: { de: "Trocken — grüner Apfel im Abgang", en: "Dry — green apple on the finish", fr: "Sec — pomme verte en finale", es: "Seco — manzana verde en el final", hr: "Suh — zelena jabuka u završetku", lb: "Dréchen — grénge Apel am Ofgang" },
            variants: [{ l: "0,2 l", p: "6,90" }, { l: "0,5 l", p: "15,90" }] },
          { n: "Lugana Ca dei Frati DOC",
            d: { de: "Trocken — Aprikose & Mandel, elegant; Top-Lugana vom Gardasee", en: "Dry — apricot & almond, elegant; a top Lugana from Lake Garda", fr: "Sec — abricot & amande, élégant ; grand Lugana du lac de Garde", es: "Seco — albaricoque y almendra, elegante; gran Lugana del lago de Garda", hr: "Suh — marelica i badem, elegantan; vrhunska Lugana s jezera Garda", lb: "Dréchen — Aprikos & Mandel, elegant; Top-Lugana vum Gardaséi" },
            variants: [{ l: "0,15 l", p: "8,90" }, { l: "0,75 l", p: "44,90" }] },
          { n: "Weißherbst — Rosé, Pfalz",
            d: { de: "Mild, säurearm, feinfruchtig-lieblich", en: "Mild, low acidity, delicately fruity", fr: "Doux, peu acide, finement fruité", es: "Suave, baja acidez, finamente afrutado", hr: "Blag, niske kiselosti, fino voćan", lb: "Mëll, säurenaarm, feinfruchteg" },
            variants: [{ l: "0,2 l", p: "6,50" }, { l: "0,5 l", p: "14,90" }] },
          { n: "Rosato Ca'Ernesto — Italien",
            d: { de: "Fruchtbetont & trocken", en: "Fruit-driven & dry", fr: "Fruité & sec", es: "Afrutado y seco", hr: "Voćan i suh", lb: "Fruchtbetount & dréchen" },
            variants: [{ l: "0,2 l", p: "6,90" }, { l: "0,5 l", p: "15,90" }] }
        ]
      },
      {
        title: { de: "Offene Weine — rot", en: "Wines by the Glass — red", fr: "Vins au verre — rouges", es: "Vinos por copa — tintos", hr: "Vina na čaše — crna", lb: "Oppe Wäiner — rout" },
        items: [
          { n: "Merlot",
            d: { de: "Mittelkräftig — rote Früchte, Zimt & Thymian, samtige Länge", en: "Medium-bodied — red fruit, cinnamon & thyme, velvety length", fr: "Mi-corsé — fruits rouges, cannelle & thym, longueur veloutée", es: "De cuerpo medio — frutos rojos, canela y tomillo, final aterciopelado", hr: "Srednje puno — crveno voće, cimet i timijan, baršunast završetak", lb: "Mëttelkräfteg — rout Friichten, Kanéil & Thymian, samteg Längt" },
            variants: [{ l: "0,2 l", p: "6,50" }, { l: "0,5 l", p: "14,90" }] },
          { n: "Puglia Primitivo",
            d: { de: "Kräftig & fruchtig — intensiver trockener Italiener", en: "Full & fruity — an intense dry Italian", fr: "Corsé & fruité — italien sec et intense", es: "Potente y afrutado — italiano seco e intenso", hr: "Snažan i voćan — intenzivan suhi Talijan", lb: "Kräfteg & fruchteg — intensiven dréchen Italiener" },
            variants: [{ l: "0,2 l", p: "6,90" }, { l: "0,5 l", p: "15,90" }] },
          { n: "Baron de Ley Reserva — Rioja",
            d: { de: "100 % Tempranillo, 6 Jahre gereift — kräftig, würzig, elegant", en: "100% Tempranillo, aged 6 years — powerful, spicy, elegant", fr: "100 % tempranillo, 6 ans d'élevage — puissant, épicé, élégant", es: "100 % tempranillo, 6 años de crianza — potente, especiado, elegante", hr: "100 % tempranillo, 6 godina dozrijevanja — snažan, začinski, elegantan", lb: "100 % Tempranillo, 6 Joer gereift — kräfteg, wierzeg, elegant" },
            variants: [{ l: "0,15 l", p: "8,90" }, { l: "0,75 l", p: "44,90" }] },
          { n: "Dalmatiner — Kroatien",
            d: { de: "Lieblich, fruchtig & leicht — Qualitätswein aus Dalmatien", en: "Smooth, fruity & light — quality wine from Dalmatia", fr: "Doux, fruité & léger — vin de qualité de Dalmatie", es: "Suave, afrutado y ligero — vino de calidad de Dalmacia", hr: "Pitko, voćno i lagano — kvalitetno vino iz Dalmacije", lb: "Lieflech, fruchteg & liicht — Qualitéitswäin aus Dalmatien" },
            variants: [{ l: "0,2 l", p: "6,50" }, { l: "0,5 l", p: "14,50" }] }
        ]
      },
      {
        title: { de: "Flaschenweine — weiß (0,75 l)", en: "Bottled Whites (0.75 l)", fr: "Bouteilles — blancs (0,75 l)", es: "Botellas — blancos (0,75 l)", hr: "Buteljna vina — bijela (0,75 l)", lb: "Fläschewäiner — wäiss (0,75 l)" },
        items: [
          { n: "Weißer Burgunder — Neef-Emmich, Rheinhessen",
            d: { de: "Mittelkräftig, würzig, trocken — feine Süße & Eichenholz", en: "Medium-bodied, spicy, dry — subtle sweetness & oak", fr: "Mi-corsé, épicé, sec — douceur subtile & chêne", es: "Cuerpo medio, especiado, seco — dulzor sutil y roble", hr: "Srednje puno, začinsko, suho — nježna slast i hrast", lb: "Mëttelkräfteg, wierzeg, dréchen — feng Séisst & Eechenholz" }, p: "28,50" },
          { n: "Grauburgunder — Markus Pfaffmann, Pfalz",
            d: { de: "Harmonisch trocken — Apfel, Trockenblumen, Melone; vielschichtig & lang", en: "Harmoniously dry — apple, dried flowers, melon; layered & long", fr: "Sec harmonieux — pomme, fleurs séchées, melon ; complexe & long", es: "Seco y armonioso — manzana, flores secas, melón; complejo y largo", hr: "Skladno suho — jabuka, suho cvijeće, dinja; slojevito i dugo", lb: "Harmonesch dréchen — Apel, gedréchent Blummen, Melloun; villschichteg & laang" }, p: "28,90" },
          { n: "Grauburgunder Hauswein — Endingen, Baden",
            d: { de: "Harmonisch trocken — Zitrus & Grapefruit vom Kaiserstuhl", en: "Harmoniously dry — citrus & grapefruit from the Kaiserstuhl", fr: "Sec harmonieux — agrumes & pamplemousse du Kaiserstuhl", es: "Seco y armonioso — cítricos y pomelo del Kaiserstuhl", hr: "Skladno suho — citrusi i grejp s Kaiserstuhla", lb: "Harmonesch dréchen — Zitrus & Grapefruit vum Kaiserstuhl" }, p: "28,90" },
          { n: "Lugana — Ottella, Venetien",
            d: { de: "Trocken — exotische Frucht, Steinobst, Wildkräuter & Zitrus", en: "Dry — exotic fruit, stone fruit, wild herbs & citrus", fr: "Sec — fruits exotiques, fruits à noyau, herbes sauvages & agrumes", es: "Seco — fruta exótica, fruta de hueso, hierbas silvestres y cítricos", hr: "Suho — egzotično i koštuničavo voće, divlje bilje i citrusi", lb: "Dréchen — exotesch Fruucht, Steenuebst, Wëllkraider & Zitrus" }, p: "38,90" },
          { n: "Pinot Grigio Collio DOC — Livon, Friaul",
            d: { de: "Trocken — Vanille & Lindenblüte, voller Gaumen; Geheimtipp!", en: "Dry — vanilla & linden blossom, full palate; an insider tip!", fr: "Sec — vanille & tilleul, bouche ample ; le bon plan !", es: "Seco — vainilla y flor de tilo, paladar amplio; ¡joya escondida!", hr: "Suho — vanilija i lipov cvijet, puno nepce; skriveni dragulj!", lb: "Dréchen — Vanill & Lannebléiehunneg, voller Gaum; Geheimtipp!" }, p: "35,50" },
          { n: "Chardonnay — Krauthaker, Kroatien",
            d: { de: "Trocken, 9 Monate Eichenfass — elegante Haselnussnote", en: "Dry, 9 months in oak — elegant hazelnut note", fr: "Sec, 9 mois en fût de chêne — élégante note de noisette", es: "Seco, 9 meses en roble — elegante nota de avellana", hr: "Suho, 9 mjeseci u hrastovim bačvama — elegantna nota lješnjaka", lb: "Dréchen, 9 Méint Eechefaass — elegant Hieselnossnout" }, p: "39,90" },
          { n: "Graševina — Kutjevo, Kroatien",
            d: { de: "Trocken — harmonisch, blumig-fruchtig nach Zitrone & Apfel", en: "Dry — harmonious, floral and fruity with lemon & apple", fr: "Sec — harmonieux, floral et fruité, citron & pomme", es: "Seco — armonioso, floral y afrutado, limón y manzana", hr: "Suho — skladno, cvjetno-voćno na limun i jabuku", lb: "Dréchen — harmonesch, blummeg-fruchteg no Zitroun & Apel" }, p: "26,50" },
          { n: "Pošip — Čara, Dalmatien",
            d: { de: "Bekannte dalmatinische Rebsorte von der Insel Korčula — duftend & vollmundig", en: "Renowned Dalmatian variety from the island of Korčula — fragrant & full-bodied", fr: "Cépage dalmate réputé de l'île de Korčula — parfumé & ample", es: "Célebre variedad dálmata de la isla de Korčula — aromático y con cuerpo", hr: "Poznata dalmatinska sorta s otoka Korčule — mirisna i puna", lb: "Bekannt dalmatinesch Rief vun der Insel Korčula — doftend & vollmondeg" }, p: "28,90" }
        ]
      },
      {
        title: { de: "Flaschenweine — rot (0,75 l)", en: "Bottled Reds (0.75 l)", fr: "Bouteilles — rouges (0,75 l)", es: "Botellas — tintos (0,75 l)", hr: "Buteljna vina — crna (0,75 l)", lb: "Fläschewäiner — rout (0,75 l)" },
        items: [
          { n: "Spätburgunder QbA — Wachenheim, Pfalz",
            d: { de: "Trocken — ausdrucksvoll, vielschichtig, rote Früchte", en: "Dry — expressive, layered, red fruit", fr: "Sec — expressif, complexe, fruits rouges", es: "Seco — expresivo, complejo, frutos rojos", hr: "Suho — izražajno, slojevito, crveno voće", lb: "Dréchen — ausdrocksvoll, villschichteg, rout Friichten" }, p: "26,90" },
          { n: "Spätburgunder — Fritz Waßmer, Baden",
            d: { de: "Trocken — fein & warm, weich am Gaumen; Geheimtipp!", en: "Dry — fine & warm, soft on the palate; an insider tip!", fr: "Sec — fin & chaleureux, souple en bouche ; le bon plan !", es: "Seco — fino y cálido, suave en boca; ¡joya escondida!", hr: "Suho — fino i toplo, mekano na nepcu; skriveni dragulj!", lb: "Dréchen — fein & waarm, weich um Gaum; Geheimtipp!" }, p: "28,90" },
          { n: "Primitivo — Terre di Campo Sasso, Apulien",
            d: { de: "Trocken — tiefe Fruchtsüße & üppige Aromen", en: "Dry — deep fruit sweetness & opulent aromas", fr: "Sec — douceur fruitée profonde & arômes opulents", es: "Seco — profunda dulzura frutal y aromas opulentos", hr: "Suho — duboka voćna slast i raskošne arome", lb: "Dréchen — déif Fruuchtséisst & üppeg Aromen" }, p: "35,90" },
          { n: "Nero d'Avola — Baglio di Pianetto, Sizilien",
            d: { de: "Trocken — Waldbeeren, Kirschkonfitüre, samtiges Tannin", en: "Dry — wild berries, cherry preserve, velvety tannin", fr: "Sec — baies sauvages, confiture de cerises, tanins veloutés", es: "Seco — bayas silvestres, confitura de cereza, taninos aterciopelados", hr: "Suho — šumsko voće, džem od višanja, baršunasti tanini", lb: "Dréchen — Bëschbieren, Kiischtekonfitür, samteg Tanninen" }, p: "36,50" },
          { n: "Barone di Valforte — Abruzzen",
            d: { de: "Trocken — Kräutergewürze & rote Früchte, kerniges Tannin", en: "Dry — herbal spice & red fruit, firm tannin", fr: "Sec — épices herbacées & fruits rouges, tanins fermes", es: "Seco — especias herbales y frutos rojos, taninos firmes", hr: "Suho — biljni začini i crveno voće, čvrsti tanini", lb: "Dréchen — Kraidergewierzer & rout Friichten, kärnegt Tannin" }, p: "38,90" },
          { n: "Château Chataigniere — Bordeaux",
            d: { de: "Trocken — Blaubeere, Cassis & Kirsche, samtige Länge", en: "Dry — blueberry, cassis & cherry, velvety length", fr: "Sec — myrtille, cassis & cerise, longueur veloutée", es: "Seco — arándano, cassis y cereza, final aterciopelado", hr: "Suho — borovnica, ribiz i višnja, baršunast završetak", lb: "Dréchen — Bloubier, Cassis & Kiischt, samteg Längt" }, p: "34,90" },
          { n: "Bordeaux — Rothschild Sélection Prestige",
            d: { de: "Ein Glanzstück von Barons de Rothschild (Lafite) — Brombeere, Cassis, Bitterschokolade", en: "A showpiece from Barons de Rothschild (Lafite) — blackberry, cassis, dark chocolate", fr: "Un joyau des Barons de Rothschild (Lafite) — mûre, cassis, chocolat noir", es: "Una joya de Barons de Rothschild (Lafite) — mora, cassis, chocolate negro", hr: "Remek-djelo Barons de Rothschild (Lafite) — kupina, ribiz, tamna čokolada", lb: "E Glanzstéck vu Barons de Rothschild (Lafite) — Bromber, Cassis, Batterschockela" }, p: "48,90", star: true },
          { n: "Châteauneuf-du-Pape — Rhône",
            d: { de: "100 % Grenache — frische Himbeere, saftig, feine Pfeffernote", en: "100% Grenache — fresh raspberry, juicy, fine peppery note", fr: "100 % grenache — framboise fraîche, juteux, fine note poivrée", es: "100 % garnacha — frambuesa fresca, jugoso, fina nota de pimienta", hr: "100 % grenache — svježa malina, sočno, fina nota papra", lb: "100 % Grenache — frësch Hambier, saftesch, feng Peffernout" }, p: "56,50" },
          { n: "Rioja Castroviejo Crianza DOCa — Spanien",
            d: { de: "Trocken — Kirsche & Veilchen, hochfeine Säure", en: "Dry — cherry & violet, ultra-fine acidity", fr: "Sec — cerise & violette, acidité très fine", es: "Seco — cereza y violeta, acidez finísima", hr: "Suho — višnja i ljubičica, vrlo fina kiselost", lb: "Dréchen — Kiischt & Véilchen, houfeng Säure" }, p: "28,90" },
          { n: "Carménère Reserva Especial — Chile",
            d: { de: "Trocken — Erdbeere, Pflaume, Schokolade & Zedernholz", en: "Dry — strawberry, plum, chocolate & cedar", fr: "Sec — fraise, prune, chocolat & cèdre", es: "Seco — fresa, ciruela, chocolate y cedro", hr: "Suho — jagoda, šljiva, čokolada i cedrovina", lb: "Dréchen — Äerdbier, Promm, Schockela & Zederholz" }, p: "28,90" },
          { n: "Dingač — Halbinsel Pelješac, Kroatien",
            d: { de: "Trocken — intensiv nach Beeren & Kirschen, wuchtig & tanninbetont", en: "Dry — intense berry & cherry, powerful and tannic", fr: "Sec — baies & cerises intenses, puissant et tannique", es: "Seco — intensas bayas y cerezas, potente y tánico", hr: "Suho — intenzivno bobičasto voće i višnje, snažno i taninsko", lb: "Dréchen — intensiv no Bieren & Kiischten, wuchteg & tanninbetount" }, p: "39,90", star: true },
          { n: "Plavac — Insel Hvar, Kroatien",
            d: { de: "Vollmundig, aber nicht schwer — weich & mild, rubinrot", en: "Full-bodied yet not heavy — soft & mild, ruby red", fr: "Ample sans lourdeur — souple & doux, rouge rubis", es: "Con cuerpo pero no pesado — suave y delicado, rojo rubí", hr: "Puno, ali ne teško — mekano i blago, rubin crveno", lb: "Vollmondeg, awer net schwéier — weich & mëll, rubinrout" }, p: "26,90" },
          { n: "Primitivo Rosé — Leone de Castris, Apulien",
            d: { de: "Trocken — tiefe Fruchtsüße, üppige Aromen", en: "Dry — deep fruit sweetness, opulent aromas", fr: "Sec — douceur fruitée profonde, arômes opulents", es: "Seco — profunda dulzura frutal, aromas opulentos", hr: "Suho — duboka voćna slast, raskošne arome", lb: "Dréchen — déif Fruuchtséisst, üppeg Aromen" }, p: "35,90" }
        ]
      }
    ]
  }
];

window.FW_MENU = FW_MENU;
