import {
  does_the_subsurface_need_prepared,
  what_kind_roof_shape_you_want,
  do_you_need_additional_carport,
  what_performance_you_exactly_need,
  is_the_kit_available,
  does_a_building_permit_submitted,
  where_should_carport_be_located,
} from "../../reuse-data";

const doubleCarport = [
  {
    id: 1249041972,
    type: "checkbox",
    label: "Où doit être situé le carport ?",
    options: where_should_carport_be_located(
      1251457058,
      1251819497,
      1252198179
    ),
  },
  {
    id: 1251457058,
    type: "checkbox",
    label:
      "Le sous-sol doit-il être préparé (ex : fondation ou revêtement de sol) ?",
    options: does_the_subsurface_need_prepared(
      1252528544,
      1252676206,
      1252739056
    ),
  },
  // yes start
  {
    id: 1252528544,
    type: "checkbox",
    label: "Quelle forme de toit désirez-vous ?",
    options: what_kind_roof_shape_you_want(
      1253831768,
      1254010140,
      1255028276,
      4419476685
    ),
  },
  // gable roof start
  {
    id: 1253831768,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1255092631,
      1255108783,
      1255653876,
      2569259467,
      1255935092
    ),
  },
  // storage space
  {
    id: 1255092631,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1257132434,
      5109873273,
      4162931922
    ),
  },
  {
    id: 1257132434,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1257473072, 1257473677),
  },
  {
    id: 1257473072,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1257473677,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },

  {
    id: 5109873273,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },

  {
    id: 4162931922,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },

  // storage space
  // photovoltaic system
  {
    id: 1255108783,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1260709392,
      2927150071,
      9505166208
    ),
  },
  {
    id: 1260709392,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1262387100, 1262877209),
  },
  {
    id: 1262387100,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1262877209,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },

  {
    id: 2927150071,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },

  {
    id: 9505166208,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },

  // photovoltaic system
  // green roaf
  {
    id: 1255653876,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1264016287,
      1264076772,
      1264847922
    ),
  },
  {
    id: 1264016287,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1264956796, 1265021890),
  },
  {
    id: 1264956796,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265021890,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264076772,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264847922,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1265062369,
      1265520049,
      1266173661
    ),
  },
  {
    id: 1265062369,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1267230261, 1267853268),
  },
  {
    id: 1267230261,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267853268,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265520049,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1266173661,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1267920660,
      1267963064,
      1268769574
    ),
  },
  {
    id: 1267920660,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1268883605, 1269321634),
  },
  {
    id: 1268883605,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1269321634,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267963064,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1268769574,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other

  {
    id: 1270623914,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1272185458, 1272954294),
  },
  {
    id: 1272185458,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1272954294,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271083314,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271502179,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1274068792,
      1275162346,
      1275888310
    ),
  },
  {
    id: 1274068792,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1276673415, 1277372496),
  },
  {
    id: 1276673415,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1277372496,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275162346,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275888310,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // gable roof end
  // flat roof start
  {
    id: 1254010140,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1278470086,
      1279112648,
      1279127793,
      1280548553,
      1279634728
    ),
  },
  // storage space
  {
    id: 1278470086,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1281143385,
      9219900302,
      4890848326
    ),
  },
  {
    id: 1281143385,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1282733197, 1283123321),
  },
  {
    id: 1282733197,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283123321,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },

  {
    id: 9219900302,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },

  {
    id: 4890848326,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },

  // storage space
  // photovoltaic system
  {
    id: 1279112648,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1284994216,
      4475673002,
      7277105322
    ),
  },
  {
    id: 1284994216,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1286319386, 1287074236),
  },
  {
    id: 1286319386,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287074236,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },

  {
    id: 4475673002,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 7277105322,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1279127793,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1289188782,
      1289523141,
      1289701762
    ),
  },
  {
    id: 1289188782,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1289743713, 1289762497),
  },
  {
    id: 1289743713,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289762497,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289523141,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289701762,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1279634728,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1292080702,
      1292231233,
      1292683839
    ),
  },
  {
    id: 1292080702,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1292863431, 1293761668),
  },
  {
    id: 1292863431,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293761668,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292231233,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292683839,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1293843650,
      1293984381,
      1294168493
    ),
  },
  {
    id: 1293843650,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1294340384, 1294941726),
  },
  {
    id: 1294340384,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941726,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293984381,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294168493,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // flat roof end
  // lean to roof start
  {
    id: 1255028276,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1295887573,
      1296324480,
      1296647692,
      5184995357,
      1297704266
    ),
  },
  // storage space
  {
    id: 1295887573,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1298411715,
      1653574233,
      8988820542
    ),
  },
  {
    id: 1298411715,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1300396621, 1300720575),
  },
  {
    id: 1300396621,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1300720575,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },

  {
    id: 1653574233,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },

  {
    id: 8988820542,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1296324480,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1303161157,
      2129016515,
      5352305027
    ),
  },
  {
    id: 1303161157,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1304416433, 1304586881),
  },
  {
    id: 1304416433,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1304586881,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },

  {
    id: 2129016515,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },

  {
    id: 5352305027,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1296647692,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1306448717,
      1306564449,
      1307187307
    ),
  },
  {
    id: 1306448717,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1307194701, 1307214310),
  },
  {
    id: 1307194701,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307214310,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306564449,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307187307,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other

  {
    id: 1307527351,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(130775576, 130775577),
  },
  {
    id: 130775576,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775577,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775573,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775574,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1297704266,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1293843651,
      1293843653,
      1293843654
    ),
  },
  {
    id: 1293843651,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1294340383, 1294941722),
  },
  {
    id: 1294340383,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941722,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843653,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843654,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // lean to roof end
  // other roof start

  // storage space
  {
    id: 293078028,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(498998527, 393873761, 463728189),
  },
  {
    id: 498998527,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(798560885, 278436874),
  },
  {
    id: 798560885,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 278436874,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 393873761,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(226754979, 342068251),
  },
  {
    id: 226754979,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 342068251,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 463728189,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(445555565, 812701879),
  },
  {
    id: 445555565,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 812701879,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 568663755,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(416803569, 713928406, 714048573),
  },
  {
    id: 416803569,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(257696070, 704170902),
  },
  {
    id: 257696070,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 704170902,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 713928406,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(420301640, 157756147),
  },
  {
    id: 420301640,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 157756147,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 714048573,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(339932323, 587666779),
  },
  {
    id: 339932323,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 587666779,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 924692209,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(461364055, 329576989, 380228518),
  },
  {
    id: 461364055,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(894609490, 576095522),
  },
  {
    id: 894609490,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 576095522,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 329576989,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 380228518,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 606121083,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(184662533, 858288295, 977207627),
  },
  {
    id: 184662533,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(555142930, 829153260),
  },
  {
    id: 555142930,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 829153260,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 858288295,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977207627,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 245139522,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(199268106, 949607148, 698555398),
  },
  {
    id: 199268106,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(769397177, 697435969),
  },
  {
    id: 769397177,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 697435969,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 949607148,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 698555398,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other roof end
  // yes end

  // finishing here
  // no start
  {
    id: 1252676206,
    type: "checkbox",
    label: "Quelle forme de toit désirez-vous ?",
    options: what_kind_roof_shape_you_want(
      1253831768,
      1254010140,
      1255028276,
      3316794310
    ),
  },
  // gable roof start
  {
    id: 1253831768,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1255092631,
      1255108783,
      1255653876,
      4008826622,
      1255935092
    ),
  },
  // storage space
  {
    id: 1255092631,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1257132434,
      5264075186,
      2106980340
    ),
  },
  {
    id: 1257132434,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1257473072, 1257473677),
  },
  {
    id: 1257473072,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1257473677,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 5264075186,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1257930226, 1258014465),
  },
  {
    id: 1257930226,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1258014465,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2106980340,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1258881684, 1260472641),
  },
  {
    id: 1258881684,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1260472641,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1255108783,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1260709392,
      9539065935,
      5417380339
    ),
  },
  {
    id: 1260709392,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1262387100, 1262877209),
  },
  {
    id: 1262387100,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1262877209,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9539065935,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1263278063, 1263343806),
  },
  {
    id: 1263278063,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263343806,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 5417380339,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1263436851, 1263967408),
  },
  {
    id: 1263436851,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263967408,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1255653876,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1264016287,
      1264076772,
      1264847922
    ),
  },
  {
    id: 1264016287,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1264956796, 1265021890),
  },
  {
    id: 1264956796,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265021890,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264076772,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264847922,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1265062369,
      1265520049,
      1266173661
    ),
  },
  {
    id: 1265062369,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1267230261, 1267853268),
  },
  {
    id: 1267230261,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267853268,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265520049,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1266173661,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1267920660,
      1267963064,
      1268769574
    ),
  },
  {
    id: 1267920660,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1268883605, 1269321634),
  },
  {
    id: 1268883605,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1269321634,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267963064,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1268769574,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 4008826622,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1270623914,
      1271083314,
      1271502179
    ),
  },
  {
    id: 1270623914,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1272185458, 1272954294),
  },
  {
    id: 1272185458,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1272954294,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271083314,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271502179,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1274068792,
      1275162346,
      1275888310
    ),
  },
  {
    id: 1274068792,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1276673415, 1277372496),
  },
  {
    id: 1276673415,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1277372496,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275162346,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275888310,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // gable roof end
  // flat roof start
  {
    id: 1254010140,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1278470086,
      1279112648,
      1279127793,
      1280548553,
      1279634728
    ),
  },
  // storage space
  {
    id: 1278470086,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1281143385,
      7209969391,
      8176744330
    ),
  },
  {
    id: 1281143385,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1282733197, 1283123321),
  },
  {
    id: 1282733197,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283123321,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 7209969391,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1283732831, 1283830990),
  },
  {
    id: 1283732831,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283830990,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 8176744330,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1283876390, 1284222450),
  },
  {
    id: 1283876390,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1284222450,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1279112648,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1284994216,
      6763601151,
      2407362827
    ),
  },
  {
    id: 1284994216,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1286319386, 1287074236),
  },
  {
    id: 1286319386,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287074236,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6763601151,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1287641254, 1287959130),
  },
  {
    id: 1287641254,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287959130,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2407362827,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1288390037, 1288764523),
  },
  {
    id: 1288390037,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1288764523,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1279127793,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1289188782,
      1289523141,
      1289701762
    ),
  },
  {
    id: 1289188782,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1289743713, 1289762497),
  },
  {
    id: 1289743713,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289762497,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289523141,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289701762,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1279634728,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1292080702,
      1292231233,
      1292683839
    ),
  },
  {
    id: 1292080702,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1292863431, 1293761668),
  },
  {
    id: 1292863431,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293761668,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292231233,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292683839,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1293843650,
      1293984381,
      1294168493
    ),
  },
  {
    id: 1293843650,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1294340384, 1294941726),
  },
  {
    id: 1294340384,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941726,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293984381,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294168493,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // flat roof end
  // lean to roof start
  {
    id: 1255028276,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1295887573,
      1296324480,
      1296647692,
      1547971188,
      1297704266
    ),
  },
  // storage space
  {
    id: 1295887573,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1298411715,
      1368819670,
      5330609535
    ),
  },
  {
    id: 1298411715,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1300396621, 1300720575),
  },
  {
    id: 1300396621,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1300720575,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1368819670,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1300964224, 1301849286),
  },
  {
    id: 1300964224,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1301849286,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 5330609535,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1301919634, 1302053051),
  },
  {
    id: 1301919634,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1302053051,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1296324480,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1303161157,
      8648079453,
      6538519117
    ),
  },
  {
    id: 1303161157,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1304416433, 1304586881),
  },
  {
    id: 1304416433,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1304586881,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 8648079453,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1305332483, 1306062901),
  },
  {
    id: 1305332483,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306062901,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6538519117,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1306163358, 1306293990),
  },
  {
    id: 1306163358,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306293990,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1296647692,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1306448717,
      1306564449,
      1307187307
    ),
  },
  {
    id: 1306448717,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1307194701, 1307214310),
  },
  {
    id: 1307194701,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307214310,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306564449,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307187307,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1547971188,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1307527351,
      130775573,
      130775574
    ),
  },
  {
    id: 1307527351,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(130775576, 130775577),
  },
  {
    id: 130775576,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775577,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775573,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775574,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1297704266,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1293843651,
      1293843653,
      1293843654
    ),
  },
  {
    id: 1293843651,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1294340383, 1294941722),
  },
  {
    id: 1294340383,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941722,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843653,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843654,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // lean to roof end
  // other roof start
  {
    id: 3316794310,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      293078028,
      568663755,
      924692209,
      606121083,
      245139522
    ),
  },
  // storage space
  {
    id: 293078028,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(498998527, 393873761, 463728189),
  },
  {
    id: 498998527,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(798560885, 278436874),
  },
  {
    id: 798560885,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 278436874,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 393873761,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(226754979, 342068251),
  },
  {
    id: 226754979,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 342068251,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 463728189,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(445555565, 812701879),
  },
  {
    id: 445555565,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 812701879,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 568663755,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(416803569, 713928406, 714048573),
  },
  {
    id: 416803569,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(257696070, 704170902),
  },
  {
    id: 257696070,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 704170902,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 713928406,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(420301640, 157756147),
  },
  {
    id: 420301640,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 157756147,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 714048573,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(339932323, 587666779),
  },
  {
    id: 339932323,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 587666779,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 924692209,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(461364055, 329576989, 380228518),
  },
  {
    id: 461364055,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(894609490, 576095522),
  },
  {
    id: 894609490,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 576095522,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 329576989,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 380228518,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 606121083,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(184662533, 858288295, 977207627),
  },
  {
    id: 184662533,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(555142930, 829153260),
  },
  {
    id: 555142930,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 829153260,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 858288295,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977207627,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 245139522,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(199268106, 949607148, 698555398),
  },
  {
    id: 199268106,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(769397177, 697435969),
  },
  {
    id: 769397177,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 697435969,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 949607148,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 698555398,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no end

  // don't know / need advice start
  {
    id: 1252739056,
    type: "checkbox",
    label: "Quelle forme de toit désirez-vous ?",
    options: what_kind_roof_shape_you_want(
      1253831768,
      1254010140,
      1255028276,
      3316794310
    ),
  },
  // gable roof start
  {
    id: 1253831768,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1255092631,
      1255108783,
      1255653876,
      6677749180,
      1255935092
    ),
  },
  // storage space
  {
    id: 1255092631,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1257132434,
      4920913296,
      4491061500
    ),
  },
  {
    id: 1257132434,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1257473072, 1257473677),
  },
  {
    id: 1257473072,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1257473677,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 4920913296,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1257930226, 1258014465),
  },
  {
    id: 1257930226,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1258014465,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 4491061500,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1258881684, 1260472641),
  },
  {
    id: 1258881684,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1260472641,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1255108783,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1260709392,
      8880132863,
      9713683792
    ),
  },
  {
    id: 1260709392,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1262387100, 1262877209),
  },
  {
    id: 1262387100,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1262877209,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 8880132863,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1263278063, 1263343806),
  },
  {
    id: 1263278063,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263343806,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9713683792,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1263436851, 1263967408),
  },
  {
    id: 1263436851,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263967408,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1255653876,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1264016287,
      1264076772,
      1264847922
    ),
  },
  {
    id: 1264016287,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1264956796, 1265021890),
  },
  {
    id: 1264956796,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265021890,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264076772,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264847922,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1265062369,
      1265520049,
      1266173661
    ),
  },
  {
    id: 1265062369,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1267230261, 1267853268),
  },
  {
    id: 1267230261,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267853268,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265520049,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1266173661,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1267920660,
      1267963064,
      1268769574
    ),
  },
  {
    id: 1267920660,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1268883605, 1269321634),
  },
  {
    id: 1268883605,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1269321634,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267963064,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1268769574,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 6677749180,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1270623914,
      1271083314,
      1271502179
    ),
  },
  {
    id: 1270623914,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1272185458, 1272954294),
  },
  {
    id: 1272185458,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1272954294,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271083314,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271502179,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1274068792,
      1275162346,
      1275888310
    ),
  },
  {
    id: 1274068792,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1276673415, 1277372496),
  },
  {
    id: 1276673415,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1277372496,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275162346,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275888310,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // gable roof end
  // flat roof start
  {
    id: 1254010140,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1278470086,
      1279112648,
      1279127793,
      1280548553,
      1279634728
    ),
  },
  // storage space
  {
    id: 1278470086,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1281143385,
      5244012160,
      9101728160
    ),
  },
  {
    id: 1281143385,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1282733197, 1283123321),
  },
  {
    id: 1282733197,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283123321,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 5244012160,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1283732831, 1283830990),
  },
  {
    id: 1283732831,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283830990,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9101728160,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1283876390, 1284222450),
  },
  {
    id: 1283876390,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1284222450,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1279112648,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1284994216,
      4495827735,
      2553580722
    ),
  },
  {
    id: 1284994216,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1286319386, 1287074236),
  },
  {
    id: 1286319386,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287074236,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 4495827735,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1287641254, 1287959130),
  },
  {
    id: 1287641254,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287959130,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2553580722,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1288390037, 1288764523),
  },
  {
    id: 1288390037,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1288764523,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1279127793,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1289188782,
      1289523141,
      1289701762
    ),
  },
  {
    id: 1289188782,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1289743713, 1289762497),
  },
  {
    id: 1289743713,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289762497,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289523141,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289701762,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1279634728,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1292080702,
      1292231233,
      1292683839
    ),
  },
  {
    id: 1292080702,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1292863431, 1293761668),
  },
  {
    id: 1292863431,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293761668,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292231233,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292683839,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1293843650,
      1293984381,
      1294168493
    ),
  },
  {
    id: 1293843650,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1294340384, 1294941726),
  },
  {
    id: 1294340384,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941726,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293984381,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294168493,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // flat roof end
  // lean to roof start
  {
    id: 1255028276,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1295887573,
      1296324480,
      1296647692,
      7321081757,
      1297704266
    ),
  },
  // storage space
  {
    id: 1295887573,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1298411715,
      3066335622,
      2958288362
    ),
  },
  {
    id: 1298411715,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1300396621, 1300720575),
  },
  {
    id: 1300396621,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1300720575,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 3066335622,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1300964224, 1301849286),
  },
  {
    id: 1300964224,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1301849286,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2958288362,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1301919634, 1302053051),
  },
  {
    id: 1301919634,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1302053051,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1296324480,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1303161157,
      9896158713,
      9473975434
    ),
  },
  {
    id: 1303161157,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1304416433, 1304586881),
  },
  {
    id: 1304416433,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1304586881,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9896158713,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1305332483, 1306062901),
  },
  {
    id: 1305332483,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306062901,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9473975434,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1306163358, 1306293990),
  },
  {
    id: 1306163358,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306293990,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1296647692,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1306448717,
      1306564449,
      1307187307
    ),
  },
  {
    id: 1306448717,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1307194701, 1307214310),
  },
  {
    id: 1307194701,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307214310,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306564449,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307187307,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 7321081757,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1307527351,
      130775573,
      130775574
    ),
  },
  {
    id: 1307527351,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(130775576, 130775577),
  },
  {
    id: 130775576,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775577,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775573,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775574,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1297704266,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1293843651,
      1293843653,
      1293843654
    ),
  },
  {
    id: 1293843651,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1294340383, 1294941722),
  },
  {
    id: 1294340383,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941722,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843653,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843654,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // lean to roof end
  // other roof start
  {
    id: 3316794310,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      293078028,
      568663755,
      924692209,
      606121083,
      245139522
    ),
  },
  // storage space
  {
    id: 293078028,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(498998527, 393873761, 463728189),
  },
  {
    id: 498998527,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(798560885, 278436874),
  },
  {
    id: 798560885,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 278436874,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 393873761,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(226754979, 342068251),
  },
  {
    id: 226754979,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 342068251,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 463728189,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(445555565, 812701879),
  },
  {
    id: 445555565,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 812701879,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 568663755,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(416803569, 713928406, 714048573),
  },
  {
    id: 416803569,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(257696070, 704170902),
  },
  {
    id: 257696070,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 704170902,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 713928406,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(420301640, 157756147),
  },
  {
    id: 420301640,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 157756147,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 714048573,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(339932323, 587666779),
  },
  {
    id: 339932323,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 587666779,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 924692209,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(461364055, 329576989, 380228518),
  },
  {
    id: 461364055,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(894609490, 576095522),
  },
  {
    id: 894609490,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 576095522,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 329576989,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 380228518,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 606121083,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(184662533, 858288295, 977207627),
  },
  {
    id: 184662533,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(555142930, 829153260),
  },
  {
    id: 555142930,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 829153260,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 858288295,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977207627,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 245139522,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(199268106, 949607148, 698555398),
  },
  {
    id: 199268106,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(769397177, 697435969),
  },
  {
    id: 769397177,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 697435969,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 949607148,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 698555398,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  //   at the house
  {
    id: 1251819497,
    type: "checkbox",
    label:
      "Le sous-sol doit-il être préparé (ex : fondation ou revêtement de sol) ?",
    options: does_the_subsurface_need_prepared(
      1252528544,
      1252676206,
      1252739056
    ),
  },
  // yes start
  {
    id: 1252528544,
    type: "checkbox",
    label: "Quelle forme de toit désirez-vous ?",
    options: what_kind_roof_shape_you_want(
      1253831768,
      1254010140,
      1255028276,
      5927469185
    ),
  },
  // gable roof start
  {
    id: 1253831768,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1255092631,
      1255108783,
      1255653876,
      3895697079,
      1255935092
    ),
  },
  // storage space
  {
    id: 1255092631,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1257132434,
      7186665745,
      4311268718
    ),
  },
  {
    id: 1257132434,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1257473072, 1257473677),
  },
  {
    id: 1257473072,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1257473677,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 7186665745,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1257930226, 1258014465),
  },
  {
    id: 1257930226,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1258014465,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 4311268718,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1258881684, 1260472641),
  },
  {
    id: 1258881684,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1260472641,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1255108783,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1260709392,
      7693174118,
      5572774280
    ),
  },
  {
    id: 1260709392,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1262387100, 1262877209),
  },
  {
    id: 1262387100,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1262877209,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 7693174118,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1263278063, 1263343806),
  },
  {
    id: 1263278063,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263343806,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 5572774280,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1263436851, 1263967408),
  },
  {
    id: 1263436851,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263967408,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1255653876,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1264016287,
      1264076772,
      1264847922
    ),
  },
  {
    id: 1264016287,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1264956796, 1265021890),
  },
  {
    id: 1264956796,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265021890,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264076772,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264847922,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1265062369,
      1265520049,
      1266173661
    ),
  },
  {
    id: 1265062369,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1267230261, 1267853268),
  },
  {
    id: 1267230261,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267853268,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265520049,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1266173661,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1267920660,
      1267963064,
      1268769574
    ),
  },
  {
    id: 1267920660,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1268883605, 1269321634),
  },
  {
    id: 1268883605,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1269321634,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267963064,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1268769574,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 3895697079,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1270623914,
      1271083314,
      1271502179
    ),
  },
  {
    id: 1270623914,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1272185458, 1272954294),
  },
  {
    id: 1272185458,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1272954294,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271083314,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271502179,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1274068792,
      1275162346,
      1275888310
    ),
  },
  {
    id: 1274068792,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1276673415, 1277372496),
  },
  {
    id: 1276673415,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1277372496,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275162346,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275888310,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // gable roof end
  // flat roof start
  {
    id: 1254010140,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1278470086,
      1279112648,
      1279127793,
      1280548553,
      1279634728
    ),
  },
  // storage space
  {
    id: 1278470086,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1281143385,
      8822204316,
      2224424328
    ),
  },
  {
    id: 1281143385,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1282733197, 1283123321),
  },
  {
    id: 1282733197,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283123321,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 8822204316,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1283732831, 1283830990),
  },
  {
    id: 1283732831,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283830990,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2224424328,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1283876390, 1284222450),
  },
  {
    id: 1283876390,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1284222450,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1279112648,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1284994216,
      6524237065,
      2618175657
    ),
  },
  {
    id: 1284994216,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1286319386, 1287074236),
  },
  {
    id: 1286319386,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287074236,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6524237065,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1287641254, 1287959130),
  },
  {
    id: 1287641254,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287959130,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2618175657,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1288390037, 1288764523),
  },
  {
    id: 1288390037,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1288764523,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1279127793,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1289188782,
      1289523141,
      1289701762
    ),
  },
  {
    id: 1289188782,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1289743713, 1289762497),
  },
  {
    id: 1289743713,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289762497,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289523141,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289701762,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1279634728,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1292080702,
      1292231233,
      1292683839
    ),
  },
  {
    id: 1292080702,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1292863431, 1293761668),
  },
  {
    id: 1292863431,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293761668,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292231233,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292683839,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1293843650,
      1293984381,
      1294168493
    ),
  },
  {
    id: 1293843650,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1294340384, 1294941726),
  },
  {
    id: 1294340384,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941726,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293984381,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294168493,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // flat roof end
  // lean to roof start
  {
    id: 1255028276,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1295887573,
      1296324480,
      1296647692,
      6578481645,
      1297704266
    ),
  },
  // storage space
  {
    id: 1295887573,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1298411715,
      5198189094,
      8177180250
    ),
  },
  {
    id: 1298411715,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1300396621, 1300720575),
  },
  {
    id: 1300396621,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1300720575,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 5198189094,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1300964224, 1301849286),
  },
  {
    id: 1300964224,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1301849286,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 8177180250,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1301919634, 1302053051),
  },
  {
    id: 1301919634,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1302053051,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1296324480,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1303161157,
      3504487749,
      3364722182
    ),
  },
  {
    id: 1303161157,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1304416433, 1304586881),
  },
  {
    id: 1304416433,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1304586881,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 3504487749,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1305332483, 1306062901),
  },
  {
    id: 1305332483,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306062901,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 3364722182,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1306163358, 1306293990),
  },
  {
    id: 1306163358,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306293990,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1296647692,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1306448717,
      1306564449,
      1307187307
    ),
  },
  {
    id: 1306448717,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1307194701, 1307214310),
  },
  {
    id: 1307194701,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307214310,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306564449,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307187307,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 6578481645,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1307527351,
      130775573,
      130775574
    ),
  },
  {
    id: 1307527351,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(130775576, 130775577),
  },
  {
    id: 130775576,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775577,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775573,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775574,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1297704266,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1293843651,
      1293843653,
      1293843654
    ),
  },
  {
    id: 1293843651,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1294340383, 1294941722),
  },
  {
    id: 1294340383,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941722,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843653,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843654,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // lean to roof end
  // other roof start
  {
    id: 5927469185,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      293078028,
      568663755,
      924692209,
      606121083,
      245139522
    ),
  },
  // storage space
  {
    id: 293078028,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(498998527, 393873761, 463728189),
  },
  {
    id: 498998527,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(798560885, 278436874),
  },
  {
    id: 798560885,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 278436874,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 393873761,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(226754979, 342068251),
  },
  {
    id: 226754979,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 342068251,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 463728189,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(445555565, 812701879),
  },
  {
    id: 445555565,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 812701879,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 568663755,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(416803569, 713928406, 714048573),
  },
  {
    id: 416803569,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(257696070, 704170902),
  },
  {
    id: 257696070,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 704170902,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 713928406,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(420301640, 157756147),
  },
  {
    id: 420301640,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 157756147,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 714048573,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(339932323, 587666779),
  },
  {
    id: 339932323,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 587666779,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 924692209,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(461364055, 329576989, 380228518),
  },
  {
    id: 461364055,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(894609490, 576095522),
  },
  {
    id: 894609490,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 576095522,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 329576989,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 380228518,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 606121083,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(184662533, 858288295, 977207627),
  },
  {
    id: 184662533,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(555142930, 829153260),
  },
  {
    id: 555142930,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 829153260,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 858288295,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977207627,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 245139522,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(199268106, 949607148, 698555398),
  },
  {
    id: 199268106,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(769397177, 697435969),
  },
  {
    id: 769397177,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 697435969,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 949607148,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 698555398,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other roof end
  // yes end

  // finishing here
  // no start
  {
    id: 1252676206,
    type: "checkbox",
    label: "Quelle forme de toit désirez-vous ?",
    options: what_kind_roof_shape_you_want(
      1253831768,
      1254010140,
      1255028276,
      7590998265
    ),
  },
  // gable roof start
  {
    id: 1253831768,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1255092631,
      1255108783,
      1255653876,
      1244976005,
      1255935092
    ),
  },
  // storage space
  {
    id: 1255092631,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1257132434,
      6635620097,
      6426706865
    ),
  },
  {
    id: 1257132434,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1257473072, 1257473677),
  },
  {
    id: 1257473072,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1257473677,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6635620097,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1257930226, 1258014465),
  },
  {
    id: 1257930226,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1258014465,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6426706865,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1258881684, 1260472641),
  },
  {
    id: 1258881684,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1260472641,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1255108783,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1260709392,
      3855625970,
      6099822405
    ),
  },
  {
    id: 1260709392,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1262387100, 1262877209),
  },
  {
    id: 1262387100,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1262877209,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 3855625970,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1263278063, 1263343806),
  },
  {
    id: 1263278063,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263343806,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6099822405,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1263436851, 1263967408),
  },
  {
    id: 1263436851,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263967408,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1255653876,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1264016287,
      1264076772,
      1264847922
    ),
  },
  {
    id: 1264016287,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1264956796, 1265021890),
  },
  {
    id: 1264956796,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265021890,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264076772,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264847922,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1265062369,
      1265520049,
      1266173661
    ),
  },
  {
    id: 1265062369,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1267230261, 1267853268),
  },
  {
    id: 1267230261,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267853268,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265520049,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1266173661,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1267920660,
      1267963064,
      1268769574
    ),
  },
  {
    id: 1267920660,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1268883605, 1269321634),
  },
  {
    id: 1268883605,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1269321634,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267963064,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1268769574,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1244976005,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1270623914,
      1271083314,
      1271502179
    ),
  },
  {
    id: 1270623914,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1272185458, 1272954294),
  },
  {
    id: 1272185458,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1272954294,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271083314,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271502179,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1274068792,
      1275162346,
      1275888310
    ),
  },
  {
    id: 1274068792,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1276673415, 1277372496),
  },
  {
    id: 1276673415,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1277372496,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275162346,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275888310,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // gable roof end
  // flat roof start
  {
    id: 1254010140,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1278470086,
      1279112648,
      1279127793,
      1280548553,
      1279634728
    ),
  },
  // storage space
  {
    id: 1278470086,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1281143385,
      3632021188,
      8723889342
    ),
  },
  {
    id: 1281143385,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1282733197, 1283123321),
  },
  {
    id: 1282733197,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283123321,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 3632021188,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1283732831, 1283830990),
  },
  {
    id: 1283732831,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283830990,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 8723889342,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1283876390, 1284222450),
  },
  {
    id: 1283876390,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1284222450,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1279112648,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1284994216,
      7890657730,
      5817843205
    ),
  },
  {
    id: 1284994216,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1286319386, 1287074236),
  },
  {
    id: 1286319386,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287074236,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 7890657730,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1287641254, 1287959130),
  },
  {
    id: 1287641254,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287959130,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 5817843205,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1288390037, 1288764523),
  },
  {
    id: 1288390037,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1288764523,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1279127793,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1289188782,
      1289523141,
      1289701762
    ),
  },
  {
    id: 1289188782,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1289743713, 1289762497),
  },
  {
    id: 1289743713,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289762497,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289523141,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289701762,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1279634728,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1292080702,
      1292231233,
      1292683839
    ),
  },
  {
    id: 1292080702,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1292863431, 1293761668),
  },
  {
    id: 1292863431,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293761668,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292231233,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292683839,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1293843650,
      1293984381,
      1294168493
    ),
  },
  {
    id: 1293843650,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1294340384, 1294941726),
  },
  {
    id: 1294340384,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941726,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293984381,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294168493,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // flat roof end
  // lean to roof start
  {
    id: 1255028276,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1295887573,
      1296324480,
      1296647692,
      8832000948,
      1297704266
    ),
  },
  // storage space
  {
    id: 1295887573,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1298411715,
      3530653592,
      6776359075
    ),
  },
  {
    id: 1298411715,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1300396621, 1300720575),
  },
  {
    id: 1300396621,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1300720575,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 3530653592,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1300964224, 1301849286),
  },
  {
    id: 1300964224,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1301849286,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6776359075,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1301919634, 1302053051),
  },
  {
    id: 1301919634,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1302053051,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1296324480,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1303161157,
      1965442604,
      7115866391
    ),
  },
  {
    id: 1303161157,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1304416433, 1304586881),
  },
  {
    id: 1304416433,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1304586881,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1965442604,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1305332483, 1306062901),
  },
  {
    id: 1305332483,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306062901,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 7115866391,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1306163358, 1306293990),
  },
  {
    id: 1306163358,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306293990,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1296647692,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1306448717,
      1306564449,
      1307187307
    ),
  },
  {
    id: 1306448717,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1307194701, 1307214310),
  },
  {
    id: 1307194701,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307214310,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306564449,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307187307,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 8832000948,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1307527351,
      130775573,
      130775574
    ),
  },
  {
    id: 1307527351,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(130775576, 130775577),
  },
  {
    id: 130775576,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775577,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775573,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775574,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1297704266,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1293843651,
      1293843653,
      1293843654
    ),
  },
  {
    id: 1293843651,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1294340383, 1294941722),
  },
  {
    id: 1294340383,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941722,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843653,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843654,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // lean to roof end
  // other roof start
  {
    id: 7590998265,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      293078028,
      568663755,
      924692209,
      606121083,
      245139522
    ),
  },
  // storage space
  {
    id: 293078028,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(498998527, 393873761, 463728189),
  },
  {
    id: 498998527,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(798560885, 278436874),
  },
  {
    id: 798560885,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 278436874,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 393873761,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(226754979, 342068251),
  },
  {
    id: 226754979,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 342068251,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 463728189,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(445555565, 812701879),
  },
  {
    id: 445555565,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 812701879,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 568663755,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(416803569, 713928406, 714048573),
  },
  {
    id: 416803569,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(257696070, 704170902),
  },
  {
    id: 257696070,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 704170902,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 713928406,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(420301640, 157756147),
  },
  {
    id: 420301640,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 157756147,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 714048573,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(339932323, 587666779),
  },
  {
    id: 339932323,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 587666779,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 924692209,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(461364055, 329576989, 380228518),
  },
  {
    id: 461364055,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(894609490, 576095522),
  },
  {
    id: 894609490,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 576095522,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 329576989,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 380228518,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 606121083,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(184662533, 858288295, 977207627),
  },
  {
    id: 184662533,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(555142930, 829153260),
  },
  {
    id: 555142930,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 829153260,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 858288295,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977207627,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 245139522,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(199268106, 949607148, 698555398),
  },
  {
    id: 199268106,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(769397177, 697435969),
  },
  {
    id: 769397177,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 697435969,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 949607148,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 698555398,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no end

  // don't know / need advice start
  {
    id: 1252739056,
    type: "checkbox",
    label: "Quelle forme de toit désirez-vous ?",
    options: what_kind_roof_shape_you_want(
      1253831768,
      1254010140,
      1255028276,
      1499244160
    ),
  },
  // gable roof start
  {
    id: 1253831768,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1255092631,
      1255108783,
      1255653876,
      8261100257,
      1255935092
    ),
  },
  // storage space
  {
    id: 1255092631,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1257132434,
      9533511137,
      6715194413
    ),
  },
  {
    id: 1257132434,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1257473072, 1257473677),
  },
  {
    id: 1257473072,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1257473677,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9533511137,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1257930226, 1258014465),
  },
  {
    id: 1257930226,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1258014465,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6715194413,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1258881684, 1260472641),
  },
  {
    id: 1258881684,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1260472641,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1255108783,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1260709392,
      1906141710,
      6630061687
    ),
  },
  {
    id: 1260709392,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1262387100, 1262877209),
  },
  {
    id: 1262387100,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1262877209,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1906141710,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1263278063, 1263343806),
  },
  {
    id: 1263278063,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263343806,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6630061687,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1263436851, 1263967408),
  },
  {
    id: 1263436851,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263967408,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1255653876,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1264016287,
      1264076772,
      1264847922
    ),
  },
  {
    id: 1264016287,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1264956796, 1265021890),
  },
  {
    id: 1264956796,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265021890,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264076772,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264847922,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1265062369,
      1265520049,
      1266173661
    ),
  },
  {
    id: 1265062369,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1267230261, 1267853268),
  },
  {
    id: 1267230261,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267853268,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265520049,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1266173661,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1267920660,
      1267963064,
      1268769574
    ),
  },
  {
    id: 1267920660,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1268883605, 1269321634),
  },
  {
    id: 1268883605,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1269321634,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267963064,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1268769574,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 8261100257,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1270623914,
      1271083314,
      1271502179
    ),
  },
  {
    id: 1270623914,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1272185458, 1272954294),
  },
  {
    id: 1272185458,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1272954294,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271083314,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271502179,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1274068792,
      1275162346,
      1275888310
    ),
  },
  {
    id: 1274068792,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1276673415, 1277372496),
  },
  {
    id: 1276673415,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1277372496,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275162346,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275888310,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // gable roof end
  // flat roof start
  {
    id: 1254010140,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1278470086,
      1279112648,
      1279127793,
      1280548553,
      1279634728
    ),
  },
  // storage space
  {
    id: 1278470086,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1281143385,
      1349814849,
      4995063697
    ),
  },
  {
    id: 1281143385,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1282733197, 1283123321),
  },
  {
    id: 1282733197,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283123321,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1349814849,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1283732831, 1283830990),
  },
  {
    id: 1283732831,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283830990,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 4995063697,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1283876390, 1284222450),
  },
  {
    id: 1283876390,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1284222450,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1279112648,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1284994216,
      5410471239,
      6431807495
    ),
  },
  {
    id: 1284994216,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1286319386, 1287074236),
  },
  {
    id: 1286319386,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287074236,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 5410471239,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1287641254, 1287959130),
  },
  {
    id: 1287641254,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287959130,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6431807495,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1288390037, 1288764523),
  },
  {
    id: 1288390037,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1288764523,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1279127793,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1289188782,
      1289523141,
      1289701762
    ),
  },
  {
    id: 1289188782,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1289743713, 1289762497),
  },
  {
    id: 1289743713,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289762497,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289523141,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289701762,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1279634728,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1292080702,
      1292231233,
      1292683839
    ),
  },
  {
    id: 1292080702,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1292863431, 1293761668),
  },
  {
    id: 1292863431,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293761668,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292231233,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292683839,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1293843650,
      1293984381,
      1294168493
    ),
  },
  {
    id: 1293843650,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1294340384, 1294941726),
  },
  {
    id: 1294340384,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941726,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293984381,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294168493,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // flat roof end
  // lean to roof start
  {
    id: 1255028276,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1295887573,
      1296324480,
      1296647692,
      2574310287,
      1297704266
    ),
  },
  // storage space
  {
    id: 1295887573,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1298411715,
      7889497871,
      8815843533
    ),
  },
  {
    id: 1298411715,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1300396621, 1300720575),
  },
  {
    id: 1300396621,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1300720575,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 7889497871,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1300964224, 1301849286),
  },
  {
    id: 1300964224,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1301849286,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 8815843533,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1301919634, 1302053051),
  },
  {
    id: 1301919634,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1302053051,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1296324480,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1303161157,
      4890933719,
      9321843587
    ),
  },
  {
    id: 1303161157,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1304416433, 1304586881),
  },
  {
    id: 1304416433,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1304586881,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 4890933719,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1305332483, 1306062901),
  },
  {
    id: 1305332483,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306062901,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9321843587,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1306163358, 1306293990),
  },
  {
    id: 1306163358,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306293990,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1296647692,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1306448717,
      1306564449,
      1307187307
    ),
  },
  {
    id: 1306448717,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1307194701, 1307214310),
  },
  {
    id: 1307194701,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307214310,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306564449,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307187307,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 2574310287,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1307527351,
      130775573,
      130775574
    ),
  },
  {
    id: 1307527351,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(130775576, 130775577),
  },
  {
    id: 130775576,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775577,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775573,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775574,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1297704266,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1293843651,
      1293843653,
      1293843654
    ),
  },
  {
    id: 1293843651,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1294340383, 1294941722),
  },
  {
    id: 1294340383,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941722,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843653,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843654,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // lean to roof end
  // other roof start
  {
    id: 1499244160,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      293078028,
      568663755,
      924692209,
      606121083,
      245139522
    ),
  },
  // storage space
  {
    id: 293078028,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(498998527, 393873761, 463728189),
  },
  {
    id: 498998527,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(798560885, 278436874),
  },
  {
    id: 798560885,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 278436874,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 393873761,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(226754979, 342068251),
  },
  {
    id: 226754979,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 342068251,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 463728189,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(445555565, 812701879),
  },
  {
    id: 445555565,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 812701879,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 568663755,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(416803569, 713928406, 714048573),
  },
  {
    id: 416803569,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(257696070, 704170902),
  },
  {
    id: 257696070,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 704170902,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 713928406,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(420301640, 157756147),
  },
  {
    id: 420301640,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 157756147,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 714048573,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(339932323, 587666779),
  },
  {
    id: 339932323,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 587666779,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 924692209,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(461364055, 329576989, 380228518),
  },
  {
    id: 461364055,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(894609490, 576095522),
  },
  {
    id: 894609490,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 576095522,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 329576989,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 380228518,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 606121083,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(184662533, 858288295, 977207627),
  },
  {
    id: 184662533,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(555142930, 829153260),
  },
  {
    id: 555142930,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 829153260,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 858288295,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977207627,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 245139522,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(199268106, 949607148, 698555398),
  },
  {
    id: 199268106,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(769397177, 697435969),
  },
  {
    id: 769397177,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 697435969,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 949607148,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 698555398,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  //   at the house

  // at the garage
  {
    id: 1252198179,
    type: "checkbox",
    label:
      "Le sous-sol doit-il être préparé (ex : fondation ou revêtement de sol) ?",
    options: does_the_subsurface_need_prepared(
      1252528544,
      1252676206,
      1252739056
    ),
  },
  // yes start
  {
    id: 1252528544,
    type: "checkbox",
    label: "Quelle forme de toit désirez-vous ?",
    options: what_kind_roof_shape_you_want(
      1253831768,
      1254010140,
      1255028276,
      2521982329
    ),
  },
  // gable roof start
  {
    id: 1253831768,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1255092631,
      1255108783,
      1255653876,
      9376593649,
      1255935092
    ),
  },
  // storage space
  {
    id: 1255092631,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1257132434,
      6491279854,
      3908688039
    ),
  },
  {
    id: 1257132434,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1257473072, 1257473677),
  },
  {
    id: 1257473072,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1257473677,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6491279854,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1257930226, 1258014465),
  },
  {
    id: 1257930226,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1258014465,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 3908688039,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1258881684, 1260472641),
  },
  {
    id: 1258881684,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1260472641,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1255108783,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1260709392,
      8537089439,
      8535906029
    ),
  },
  {
    id: 1260709392,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1262387100, 1262877209),
  },
  {
    id: 1262387100,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1262877209,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 8537089439,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1263278063, 1263343806),
  },
  {
    id: 1263278063,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263343806,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 8535906029,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1263436851, 1263967408),
  },
  {
    id: 1263436851,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263967408,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1255653876,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1264016287,
      1264076772,
      1264847922
    ),
  },
  {
    id: 1264016287,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1264956796, 1265021890),
  },
  {
    id: 1264956796,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265021890,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264076772,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264847922,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1265062369,
      1265520049,
      1266173661
    ),
  },
  {
    id: 1265062369,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1267230261, 1267853268),
  },
  {
    id: 1267230261,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267853268,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265520049,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1266173661,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1267920660,
      1267963064,
      1268769574
    ),
  },
  {
    id: 1267920660,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1268883605, 1269321634),
  },
  {
    id: 1268883605,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1269321634,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267963064,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1268769574,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 9376593649,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1270623914,
      1271083314,
      1271502179
    ),
  },
  {
    id: 1270623914,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1272185458, 1272954294),
  },
  {
    id: 1272185458,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1272954294,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271083314,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271502179,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1274068792,
      1275162346,
      1275888310
    ),
  },
  {
    id: 1274068792,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1276673415, 1277372496),
  },
  {
    id: 1276673415,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1277372496,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275162346,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275888310,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // gable roof end
  // flat roof start
  {
    id: 1254010140,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1278470086,
      1279112648,
      1279127793,
      1280548553,
      1279634728
    ),
  },
  // storage space
  {
    id: 1278470086,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1281143385,
      6401467296,
      3324013350
    ),
  },
  {
    id: 1281143385,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1282733197, 1283123321),
  },
  {
    id: 1282733197,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283123321,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6401467296,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1283732831, 1283830990),
  },
  {
    id: 1283732831,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283830990,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 3324013350,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1283876390, 1284222450),
  },
  {
    id: 1283876390,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1284222450,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1279112648,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1284994216,
      5060969424,
      2201339058
    ),
  },
  {
    id: 1284994216,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1286319386, 1287074236),
  },
  {
    id: 1286319386,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287074236,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 5060969424,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1287641254, 1287959130),
  },
  {
    id: 1287641254,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287959130,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2201339058,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1288390037, 1288764523),
  },
  {
    id: 1288390037,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1288764523,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1279127793,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1289188782,
      1289523141,
      1289701762
    ),
  },
  {
    id: 1289188782,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1289743713, 1289762497),
  },
  {
    id: 1289743713,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289762497,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289523141,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289701762,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1279634728,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1292080702,
      1292231233,
      1292683839
    ),
  },
  {
    id: 1292080702,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1292863431, 1293761668),
  },
  {
    id: 1292863431,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293761668,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292231233,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292683839,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1293843650,
      1293984381,
      1294168493
    ),
  },
  {
    id: 1293843650,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1294340384, 1294941726),
  },
  {
    id: 1294340384,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941726,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293984381,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294168493,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // flat roof end
  // lean to roof start
  {
    id: 1255028276,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1295887573,
      1296324480,
      1296647692,
      1794282355,
      1297704266
    ),
  },
  // storage space
  {
    id: 1295887573,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1298411715,
      4468628558,
      2179399837
    ),
  },
  {
    id: 1298411715,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1300396621, 1300720575),
  },
  {
    id: 1300396621,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1300720575,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 4468628558,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1300964224, 1301849286),
  },
  {
    id: 1300964224,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1301849286,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2179399837,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1301919634, 1302053051),
  },
  {
    id: 1301919634,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1302053051,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1296324480,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1303161157,
      3435046978,
      4175475800
    ),
  },
  {
    id: 1303161157,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1304416433, 1304586881),
  },
  {
    id: 1304416433,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1304586881,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 3435046978,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1305332483, 1306062901),
  },
  {
    id: 1305332483,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306062901,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 4175475800,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1306163358, 1306293990),
  },
  {
    id: 1306163358,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306293990,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1296647692,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1306448717,
      1306564449,
      1307187307
    ),
  },
  {
    id: 1306448717,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1307194701, 1307214310),
  },
  {
    id: 1307194701,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307214310,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306564449,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307187307,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1794282355,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1307527351,
      130775573,
      130775574
    ),
  },
  {
    id: 1307527351,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(130775576, 130775577),
  },
  {
    id: 130775576,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775577,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775573,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775574,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1297704266,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1293843651,
      1293843653,
      1293843654
    ),
  },
  {
    id: 1293843651,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1294340383, 1294941722),
  },
  {
    id: 1294340383,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941722,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843653,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843654,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // lean to roof end
  // other roof start
  {
    id: 2521982329,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      293078028,
      568663755,
      924692209,
      606121083,
      245139522
    ),
  },
  // storage space
  {
    id: 293078028,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(498998527, 393873761, 463728189),
  },
  {
    id: 498998527,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(798560885, 278436874),
  },
  {
    id: 798560885,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 278436874,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 393873761,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(226754979, 342068251),
  },
  {
    id: 226754979,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 342068251,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 463728189,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(445555565, 812701879),
  },
  {
    id: 445555565,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 812701879,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 568663755,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(416803569, 713928406, 714048573),
  },
  {
    id: 416803569,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(257696070, 704170902),
  },
  {
    id: 257696070,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 704170902,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 713928406,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(420301640, 157756147),
  },
  {
    id: 420301640,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 157756147,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 714048573,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(339932323, 587666779),
  },
  {
    id: 339932323,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 587666779,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 924692209,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(461364055, 329576989, 380228518),
  },
  {
    id: 461364055,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(894609490, 576095522),
  },
  {
    id: 894609490,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 576095522,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 329576989,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 380228518,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 606121083,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(184662533, 858288295, 977207627),
  },
  {
    id: 184662533,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(555142930, 829153260),
  },
  {
    id: 555142930,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 829153260,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 858288295,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977207627,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 245139522,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(199268106, 949607148, 698555398),
  },
  {
    id: 199268106,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(769397177, 697435969),
  },
  {
    id: 769397177,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 697435969,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 949607148,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 698555398,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other roof end
  // yes end

  // finishing here
  // no start
  {
    id: 1252676206,
    type: "checkbox",
    label: "Quelle forme de toit désirez-vous ?",
    options: what_kind_roof_shape_you_want(
      1253831768,
      1254010140,
      1255028276,
      2713568745
    ),
  },
  // gable roof start
  {
    id: 1253831768,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1255092631,
      1255108783,
      1255653876,
      2147255072,
      1255935092
    ),
  },
  // storage space
  {
    id: 1255092631,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1257132434,
      1371284735,
      9198255816
    ),
  },
  {
    id: 1257132434,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1257473072, 1257473677),
  },
  {
    id: 1257473072,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1257473677,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1371284735,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1257930226, 1258014465),
  },
  {
    id: 1257930226,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1258014465,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9198255816,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1258881684, 1260472641),
  },
  {
    id: 1258881684,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1260472641,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1255108783,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1260709392,
      4207253134,
      1494157040
    ),
  },
  {
    id: 1260709392,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1262387100, 1262877209),
  },
  {
    id: 1262387100,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1262877209,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 4207253134,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1263278063, 1263343806),
  },
  {
    id: 1263278063,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263343806,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1494157040,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1263436851, 1263967408),
  },
  {
    id: 1263436851,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263967408,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1255653876,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1264016287,
      1264076772,
      1264847922
    ),
  },
  {
    id: 1264016287,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1264956796, 1265021890),
  },
  {
    id: 1264956796,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265021890,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264076772,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264847922,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1265062369,
      1265520049,
      1266173661
    ),
  },
  {
    id: 1265062369,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1267230261, 1267853268),
  },
  {
    id: 1267230261,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267853268,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265520049,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1266173661,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1267920660,
      1267963064,
      1268769574
    ),
  },
  {
    id: 1267920660,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1268883605, 1269321634),
  },
  {
    id: 1268883605,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1269321634,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267963064,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1268769574,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 2147255072,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1270623914,
      1271083314,
      1271502179
    ),
  },
  {
    id: 1270623914,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1272185458, 1272954294),
  },
  {
    id: 1272185458,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1272954294,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271083314,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271502179,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1274068792,
      1275162346,
      1275888310
    ),
  },
  {
    id: 1274068792,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1276673415, 1277372496),
  },
  {
    id: 1276673415,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1277372496,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275162346,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275888310,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // gable roof end
  // flat roof start
  {
    id: 1254010140,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1278470086,
      1279112648,
      1279127793,
      1280548553,
      1279634728
    ),
  },
  // storage space
  {
    id: 1278470086,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1281143385,
      2585337584,
      4443466915
    ),
  },
  {
    id: 1281143385,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1282733197, 1283123321),
  },
  {
    id: 1282733197,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283123321,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2585337584,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1283732831, 1283830990),
  },
  {
    id: 1283732831,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283830990,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 4443466915,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1283876390, 1284222450),
  },
  {
    id: 1283876390,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1284222450,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1279112648,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1284994216,
      1345433508,
      1520097083
    ),
  },
  {
    id: 1284994216,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1286319386, 1287074236),
  },
  {
    id: 1286319386,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287074236,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1345433508,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1287641254, 1287959130),
  },
  {
    id: 1287641254,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287959130,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1520097083,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1288390037, 1288764523),
  },
  {
    id: 1288390037,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1288764523,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1279127793,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1289188782,
      1289523141,
      1289701762
    ),
  },
  {
    id: 1289188782,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1289743713, 1289762497),
  },
  {
    id: 1289743713,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289762497,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289523141,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289701762,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1279634728,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1292080702,
      1292231233,
      1292683839
    ),
  },
  {
    id: 1292080702,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1292863431, 1293761668),
  },
  {
    id: 1292863431,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293761668,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292231233,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292683839,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1293843650,
      1293984381,
      1294168493
    ),
  },
  {
    id: 1293843650,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1294340384, 1294941726),
  },
  {
    id: 1294340384,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941726,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293984381,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294168493,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // flat roof end
  // lean to roof start
  {
    id: 1255028276,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1295887573,
      1296324480,
      1296647692,
      9874721540,
      1297704266
    ),
  },
  // storage space
  {
    id: 1295887573,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1298411715,
      7618921541,
      4264910366
    ),
  },
  {
    id: 1298411715,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1300396621, 1300720575),
  },
  {
    id: 1300396621,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1300720575,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 7618921541,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1300964224, 1301849286),
  },
  {
    id: 1300964224,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1301849286,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 4264910366,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1301919634, 1302053051),
  },
  {
    id: 1301919634,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1302053051,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1296324480,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1303161157,
      2580745958,
      2118330657
    ),
  },
  {
    id: 1303161157,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1304416433, 1304586881),
  },
  {
    id: 1304416433,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1304586881,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2580745958,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1305332483, 1306062901),
  },
  {
    id: 1305332483,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306062901,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2118330657,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1306163358, 1306293990),
  },
  {
    id: 1306163358,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306293990,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1296647692,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1306448717,
      1306564449,
      1307187307
    ),
  },
  {
    id: 1306448717,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1307194701, 1307214310),
  },
  {
    id: 1307194701,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307214310,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306564449,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307187307,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 9874721540,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1307527351,
      130775573,
      130775574
    ),
  },
  {
    id: 1307527351,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(130775576, 130775577),
  },
  {
    id: 130775576,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775577,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775573,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775574,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1297704266,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1293843651,
      1293843653,
      1293843654
    ),
  },
  {
    id: 1293843651,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1294340383, 1294941722),
  },
  {
    id: 1294340383,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941722,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843653,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843654,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // lean to roof end
  // other roof start
  {
    id: 2713568745,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      293078028,
      568663755,
      924692209,
      606121083,
      245139522
    ),
  },
  // storage space
  {
    id: 293078028,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(498998527, 393873761, 463728189),
  },
  {
    id: 498998527,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(798560885, 278436874),
  },
  {
    id: 798560885,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 278436874,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 393873761,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(226754979, 342068251),
  },
  {
    id: 226754979,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 342068251,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 463728189,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(445555565, 812701879),
  },
  {
    id: 445555565,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 812701879,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 568663755,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(416803569, 713928406, 714048573),
  },
  {
    id: 416803569,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(257696070, 704170902),
  },
  {
    id: 257696070,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 704170902,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 713928406,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(420301640, 157756147),
  },
  {
    id: 420301640,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 157756147,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 714048573,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(339932323, 587666779),
  },
  {
    id: 339932323,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 587666779,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 924692209,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(461364055, 329576989, 380228518),
  },
  {
    id: 461364055,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(894609490, 576095522),
  },
  {
    id: 894609490,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 576095522,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 329576989,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 380228518,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 606121083,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(184662533, 858288295, 977207627),
  },
  {
    id: 184662533,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(555142930, 829153260),
  },
  {
    id: 555142930,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 829153260,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 858288295,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977207627,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 245139522,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(199268106, 949607148, 698555398),
  },
  {
    id: 199268106,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(769397177, 697435969),
  },
  {
    id: 769397177,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 697435969,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 949607148,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 698555398,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no end

  // don't know / need advice start
  {
    id: 1252739056,
    type: "checkbox",
    label: "Quelle forme de toit désirez-vous ?",
    options: what_kind_roof_shape_you_want(
      1253831768,
      1254010140,
      1255028276,
      7202513619
    ),
  },
  // gable roof start
  {
    id: 1253831768,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1255092631,
      1255108783,
      1255653876,
      6545612062,
      1255935092
    ),
  },
  // storage space
  {
    id: 1255092631,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1257132434,
      8840634406,
      3018874450
    ),
  },
  {
    id: 1257132434,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1257473072, 1257473677),
  },
  {
    id: 1257473072,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1257473677,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 8840634406,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1257930226, 1258014465),
  },
  {
    id: 1257930226,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1258014465,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 3018874450,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1258881684, 1260472641),
  },
  {
    id: 1258881684,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1260472641,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1255108783,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1260709392,
      2005051937,
      5422468822
    ),
  },
  {
    id: 1260709392,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1262387100, 1262877209),
  },
  {
    id: 1262387100,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1262877209,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2005051937,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1263278063, 1263343806),
  },
  {
    id: 1263278063,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263343806,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 5422468822,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1263436851, 1263967408),
  },
  {
    id: 1263436851,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263967408,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1255653876,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1264016287,
      1264076772,
      1264847922
    ),
  },
  {
    id: 1264016287,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1264956796, 1265021890),
  },
  {
    id: 1264956796,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265021890,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264076772,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264847922,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1265062369,
      1265520049,
      1266173661
    ),
  },
  {
    id: 1265062369,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1267230261, 1267853268),
  },
  {
    id: 1267230261,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267853268,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265520049,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1266173661,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1267920660,
      1267963064,
      1268769574
    ),
  },
  {
    id: 1267920660,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1268883605, 1269321634),
  },
  {
    id: 1268883605,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1269321634,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267963064,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1268769574,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 6545612062,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1270623914,
      1271083314,
      1271502179
    ),
  },
  {
    id: 1270623914,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1272185458, 1272954294),
  },
  {
    id: 1272185458,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1272954294,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271083314,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271502179,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1274068792,
      1275162346,
      1275888310
    ),
  },
  {
    id: 1274068792,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1276673415, 1277372496),
  },
  {
    id: 1276673415,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1277372496,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275162346,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275888310,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // gable roof end
  // flat roof start
  {
    id: 1254010140,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1278470086,
      1279112648,
      1279127793,
      1280548553,
      1279634728
    ),
  },
  // storage space
  {
    id: 1278470086,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1281143385,
      8710892721,
      5044304014
    ),
  },
  {
    id: 1281143385,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1282733197, 1283123321),
  },
  {
    id: 1282733197,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283123321,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 8710892721,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1283732831, 1283830990),
  },
  {
    id: 1283732831,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283830990,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 5044304014,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1283876390, 1284222450),
  },
  {
    id: 1283876390,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1284222450,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1279112648,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1284994216,
      4783550861,
      9046207115
    ),
  },
  {
    id: 1284994216,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1286319386, 1287074236),
  },
  {
    id: 1286319386,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287074236,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 4783550861,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1287641254, 1287959130),
  },
  {
    id: 1287641254,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287959130,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9046207115,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1288390037, 1288764523),
  },
  {
    id: 1288390037,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1288764523,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1279127793,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1289188782,
      1289523141,
      1289701762
    ),
  },
  {
    id: 1289188782,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1289743713, 1289762497),
  },
  {
    id: 1289743713,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289762497,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289523141,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289701762,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1279634728,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1292080702,
      1292231233,
      1292683839
    ),
  },
  {
    id: 1292080702,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1292863431, 1293761668),
  },
  {
    id: 1292863431,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293761668,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292231233,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292683839,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1293843650,
      1293984381,
      1294168493
    ),
  },
  {
    id: 1293843650,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1294340384, 1294941726),
  },
  {
    id: 1294340384,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941726,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293984381,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294168493,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // flat roof end
  // lean to roof start
  {
    id: 1255028276,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      1295887573,
      1296324480,
      1296647692,
      8038371736,
      1297704266
    ),
  },
  // storage space
  {
    id: 1295887573,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1298411715,
      2397718653,
      2341562678
    ),
  },
  {
    id: 1298411715,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1300396621, 1300720575),
  },
  {
    id: 1300396621,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1300720575,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2397718653,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1300964224, 1301849286),
  },
  {
    id: 1300964224,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1301849286,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2341562678,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1301919634, 1302053051),
  },
  {
    id: 1301919634,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1302053051,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1296324480,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1303161157,
      6068496540,
      4408982775
    ),
  },
  {
    id: 1303161157,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1304416433, 1304586881),
  },
  {
    id: 1304416433,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1304586881,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6068496540,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1305332483, 1306062901),
  },
  {
    id: 1305332483,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306062901,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 4408982775,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1306163358, 1306293990),
  },
  {
    id: 1306163358,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306293990,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1296647692,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1306448717,
      1306564449,
      1307187307
    ),
  },
  {
    id: 1306448717,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1307194701, 1307214310),
  },
  {
    id: 1307194701,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307214310,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306564449,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307187307,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 8038371736,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1307527351,
      130775573,
      130775574
    ),
  },
  {
    id: 1307527351,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(130775576, 130775577),
  },
  {
    id: 130775576,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775577,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775573,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775574,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1297704266,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1293843651,
      1293843653,
      1293843654
    ),
  },
  {
    id: 1293843651,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1294340383, 1294941722),
  },
  {
    id: 1294340383,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941722,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843653,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843654,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // lean to roof end
  // other roof start
  {
    id: 7202513619,
    type: "checkbox",
    label: "Avez-vous besoin d'équipements supplémentaires sur votre carport ?",
    options: do_you_need_additional_carport(
      293078028,
      568663755,
      924692209,
      606121083,
      245139522
    ),
  },
  // storage space
  {
    id: 293078028,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(498998527, 393873761, 463728189),
  },
  {
    id: 498998527,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(798560885, 278436874),
  },
  {
    id: 798560885,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 278436874,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 393873761,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(226754979, 342068251),
  },
  {
    id: 226754979,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 342068251,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 463728189,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(445555565, 812701879),
  },
  {
    id: 445555565,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 812701879,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 568663755,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(416803569, 713928406, 714048573),
  },
  {
    id: 416803569,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(257696070, 704170902),
  },
  {
    id: 257696070,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 704170902,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 713928406,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(420301640, 157756147),
  },
  {
    id: 420301640,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 157756147,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 714048573,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(339932323, 587666779),
  },
  {
    id: 339932323,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 587666779,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 924692209,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(461364055, 329576989, 380228518),
  },
  {
    id: 461364055,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(894609490, 576095522),
  },
  {
    id: 894609490,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 576095522,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 329576989,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 380228518,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 606121083,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(184662533, 858288295, 977207627),
  },
  {
    id: 184662533,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(555142930, 829153260),
  },
  {
    id: 555142930,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 829153260,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 858288295,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977207627,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 245139522,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(199268106, 949607148, 698555398),
  },
  {
    id: 199268106,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(769397177, 697435969),
  },
  {
    id: 769397177,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 697435969,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 949607148,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 698555398,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // at the garage
];

export default doubleCarport;
