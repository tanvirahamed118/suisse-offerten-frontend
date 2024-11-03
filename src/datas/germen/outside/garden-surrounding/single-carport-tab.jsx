import {
  does_the_subsurface_need_prepared,
  what_kind_roof_shape_you_want,
  do_you_need_additional_carport,
  what_performance_you_exactly_need,
  is_the_kit_available,
  does_a_building_permit_submitted,
  where_should_carport_be_located,
} from "../../reuse-data";

const singleCarport = [
  {
    id: 1248456884,
    type: "checkbox",
    label: "Wo soll der Carport stehen ?",
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
      "Muss der Untergrund vorbereitet werden (z.B. Fundament oder Bodenbelag) ?",
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
    label: "Welche Dachform wünschen Sie ?",
    options: what_kind_roof_shape_you_want(
      1253831768,
      1254010140,
      1255028276,
      1277878317
    ),
  },
  // gable roof start
  {
    id: 1253831768,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1255092631,
      1255108783,
      1255653876,
      1255862478,
      1255935092
    ),
  },
  // storage space
  {
    id: 1255092631,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1257132434,
      1108017642,
      7945169687
    ),
  },
  {
    id: 1257132434,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1257473072, 1257473677),
  },
  {
    id: 1257473072,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1257473677,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1108017642,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1257930226, 1258014465),
  },
  {
    id: 1257930226,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1258014465,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 7945169687,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1258881684, 1260472641),
  },
  {
    id: 1258881684,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1260472641,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1255108783,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1260709392,
      2750221738,
      3182227358
    ),
  },
  {
    id: 1260709392,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1262387100, 1262877209),
  },
  {
    id: 1262387100,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1262877209,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2750221738,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1263278063, 1263343806),
  },
  {
    id: 1263278063,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263343806,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 3182227358,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1263436851, 1263967408),
  },
  {
    id: 1263436851,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263967408,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1255653876,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1264016287,
      1264076772,
      1264847922
    ),
  },
  {
    id: 1264016287,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1264956796, 1265021890),
  },
  {
    id: 1264956796,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265021890,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264076772,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264847922,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1265062369,
      1265520049,
      1266173661
    ),
  },
  {
    id: 1265062369,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1267230261, 1267853268),
  },
  {
    id: 1267230261,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267853268,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265520049,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1266173661,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1267920660,
      1267963064,
      1268769574
    ),
  },
  {
    id: 1267920660,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1268883605, 1269321634),
  },
  {
    id: 1268883605,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1269321634,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267963064,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1268769574,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1255862478,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1270623914,
      1271083314,
      1271502179
    ),
  },
  {
    id: 1270623914,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1272185458, 1272954294),
  },
  {
    id: 1272185458,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1272954294,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271083314,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271502179,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1274068792,
      1275162346,
      1275888310
    ),
  },
  {
    id: 1274068792,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1276673415, 1277372496),
  },
  {
    id: 1276673415,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1277372496,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275162346,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275888310,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // gable roof end
  // flat roof start
  {
    id: 1254010140,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1278470086,
      1279112648,
      1279127793,
      1279634728,
      1280548553
    ),
  },
  // storage space
  {
    id: 1278470086,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1281143385,
      1281757996,
      1282462721
    ),
  },
  {
    id: 1281143385,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1282733197, 1283123321),
  },
  {
    id: 1282733197,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283123321,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1281757996,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1283732831, 1283830990),
  },
  {
    id: 1283732831,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283830990,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1282462721,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1283876390, 1284222450),
  },
  {
    id: 1283876390,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1284222450,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1279112648,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1284994216,
      1285030033,
      1286121211
    ),
  },
  {
    id: 1284994216,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1286319386, 1287074236),
  },
  {
    id: 1286319386,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287074236,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1285030033,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1287641254, 1287959130),
  },
  {
    id: 1287641254,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287959130,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1286121211,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1288390037, 1288764523),
  },
  {
    id: 1288390037,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1288764523,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1279127793,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1289188782,
      1289523141,
      1289701762
    ),
  },
  {
    id: 1289188782,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1289743713, 1289762497),
  },
  {
    id: 1289743713,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289762497,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289523141,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289701762,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1279634728,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1292080702,
      1292231233,
      1292683839
    ),
  },
  {
    id: 1292080702,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1292863431, 1293761668),
  },
  {
    id: 1292863431,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293761668,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292231233,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292683839,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1293843650,
      1293984381,
      1294168493
    ),
  },
  {
    id: 1293843650,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1294340384, 1294941726),
  },
  {
    id: 1294340384,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941726,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293984381,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294168493,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // flat roof end
  // lean to roof start
  {
    id: 1255028276,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1295887573,
      1296324480,
      1296647692,
      1296687583,
      1297704266
    ),
  },
  // storage space
  {
    id: 1295887573,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1298411715,
      1299185614,
      1299336880
    ),
  },
  {
    id: 1298411715,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1300396621, 1300720575),
  },
  {
    id: 1300396621,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1300720575,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1299185614,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1300964224, 1301849286),
  },
  {
    id: 1300964224,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1301849286,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1299336880,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1301919634, 1302053051),
  },
  {
    id: 1301919634,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1302053051,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1296324480,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1303161157,
      1303311045,
      1303647290
    ),
  },
  {
    id: 1303161157,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1304416433, 1304586881),
  },
  {
    id: 1304416433,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1304586881,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1303311045,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1305332483, 1306062901),
  },
  {
    id: 1305332483,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306062901,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1303647290,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1306163358, 1306293990),
  },
  {
    id: 1306163358,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306293990,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1296647692,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1306448717,
      1306564449,
      1307187307
    ),
  },
  {
    id: 1306448717,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1307194701, 1307214310),
  },
  {
    id: 1307194701,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307214310,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306564449,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307187307,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1296687583,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1307527351,
      130775573,
      130775574
    ),
  },
  {
    id: 1307527351,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(130775576, 130775577),
  },
  {
    id: 130775576,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775577,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775573,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775574,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1297704266,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1293843651,
      1293843653,
      1293843654
    ),
  },
  {
    id: 1293843651,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1294340383, 1294941722),
  },
  {
    id: 1294340383,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941722,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843653,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843654,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // lean to roof end
  // other roof start
  {
    id: 1277878317,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
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
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(498998527, 393873761, 463728189),
  },
  {
    id: 498998527,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(798560885, 278436874),
  },
  {
    id: 798560885,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 278436874,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 393873761,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(226754979, 342068251),
  },
  {
    id: 226754979,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 342068251,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 463728189,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(445555565, 812701879),
  },
  {
    id: 445555565,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 812701879,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 568663755,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(416803569, 713928406, 714048573),
  },
  {
    id: 416803569,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(257696070, 704170902),
  },
  {
    id: 257696070,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 704170902,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 713928406,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(420301640, 157756147),
  },
  {
    id: 420301640,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 157756147,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 714048573,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(339932323, 587666779),
  },
  {
    id: 339932323,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 587666779,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 924692209,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(461364055, 329576989, 380228518),
  },
  {
    id: 461364055,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(894609490, 576095522),
  },
  {
    id: 894609490,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 576095522,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 329576989,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 380228518,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 606121083,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(184662533, 858288295, 977207627),
  },
  {
    id: 184662533,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(555142930, 829153260),
  },
  {
    id: 555142930,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 829153260,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 858288295,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977207627,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 245139522,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(199268106, 949607148, 698555398),
  },
  {
    id: 199268106,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(769397177, 697435969),
  },
  {
    id: 769397177,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 697435969,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 949607148,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 698555398,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other roof end
  // yes end

  // finishing here
  // no start
  {
    id: 1252676206,
    type: "checkbox",
    label: "Welche Dachform wünschen Sie ?",
    options: what_kind_roof_shape_you_want(
      1253831768,
      1254010140,
      1255028276,
      1277878317
    ),
  },
  // gable roof start
  {
    id: 1253831768,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1255092631,
      1255108783,
      1255653876,
      1255862478,
      1255935092
    ),
  },
  // storage space
  {
    id: 1255092631,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1257132434,
      2035371810,
      8112902526
    ),
  },
  {
    id: 1257132434,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1257473072, 1257473677),
  },
  {
    id: 1257473072,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1257473677,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2035371810,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1257930226, 1258014465),
  },
  {
    id: 1257930226,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1258014465,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 8112902526,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1258881684, 1260472641),
  },
  {
    id: 1258881684,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1260472641,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1255108783,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1260709392,
      9810351331,
      4815709254
    ),
  },
  {
    id: 1260709392,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1262387100, 1262877209),
  },
  {
    id: 1262387100,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1262877209,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9810351331,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1263278063, 1263343806),
  },
  {
    id: 1263278063,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263343806,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 4815709254,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1263436851, 1263967408),
  },
  {
    id: 1263436851,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263967408,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1255653876,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1264016287,
      1264076772,
      1264847922
    ),
  },
  {
    id: 1264016287,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1264956796, 1265021890),
  },
  {
    id: 1264956796,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265021890,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264076772,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264847922,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1265062369,
      1265520049,
      1266173661
    ),
  },
  {
    id: 1265062369,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1267230261, 1267853268),
  },
  {
    id: 1267230261,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267853268,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265520049,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1266173661,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1267920660,
      1267963064,
      1268769574
    ),
  },
  {
    id: 1267920660,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1268883605, 1269321634),
  },
  {
    id: 1268883605,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1269321634,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267963064,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1268769574,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1255862478,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1270623914,
      1271083314,
      1271502179
    ),
  },
  {
    id: 1270623914,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1272185458, 1272954294),
  },
  {
    id: 1272185458,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1272954294,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271083314,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271502179,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1274068792,
      1275162346,
      1275888310
    ),
  },
  {
    id: 1274068792,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1276673415, 1277372496),
  },
  {
    id: 1276673415,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1277372496,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275162346,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275888310,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // gable roof end
  // flat roof start
  {
    id: 1254010140,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1278470086,
      1279112648,
      1279127793,
      1279634728,
      1280548553
    ),
  },
  // storage space
  {
    id: 1278470086,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1281143385,
      1281757996,
      1282462721
    ),
  },
  {
    id: 1281143385,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1282733197, 1283123321),
  },
  {
    id: 1282733197,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283123321,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1281757996,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1283732831, 1283830990),
  },
  {
    id: 1283732831,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283830990,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1282462721,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1283876390, 1284222450),
  },
  {
    id: 1283876390,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1284222450,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1279112648,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1284994216,
      1285030033,
      1286121211
    ),
  },
  {
    id: 1284994216,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1286319386, 1287074236),
  },
  {
    id: 1286319386,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287074236,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1285030033,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1287641254, 1287959130),
  },
  {
    id: 1287641254,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287959130,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1286121211,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1288390037, 1288764523),
  },
  {
    id: 1288390037,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1288764523,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1279127793,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1289188782,
      1289523141,
      1289701762
    ),
  },
  {
    id: 1289188782,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1289743713, 1289762497),
  },
  {
    id: 1289743713,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289762497,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289523141,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289701762,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1279634728,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1292080702,
      1292231233,
      1292683839
    ),
  },
  {
    id: 1292080702,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1292863431, 1293761668),
  },
  {
    id: 1292863431,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293761668,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292231233,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292683839,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1293843650,
      1293984381,
      1294168493
    ),
  },
  {
    id: 1293843650,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1294340384, 1294941726),
  },
  {
    id: 1294340384,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941726,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293984381,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294168493,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // flat roof end
  // lean to roof start
  {
    id: 1255028276,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1295887573,
      1296324480,
      1296647692,
      1296687583,
      1297704266
    ),
  },
  // storage space
  {
    id: 1295887573,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1298411715,
      1299185614,
      1299336880
    ),
  },
  {
    id: 1298411715,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1300396621, 1300720575),
  },
  {
    id: 1300396621,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1300720575,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1299185614,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1300964224, 1301849286),
  },
  {
    id: 1300964224,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1301849286,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1299336880,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1301919634, 1302053051),
  },
  {
    id: 1301919634,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1302053051,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1296324480,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1303161157,
      1303311045,
      1303647290
    ),
  },
  {
    id: 1303161157,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1304416433, 1304586881),
  },
  {
    id: 1304416433,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1304586881,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1303311045,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1305332483, 1306062901),
  },
  {
    id: 1305332483,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306062901,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1303647290,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1306163358, 1306293990),
  },
  {
    id: 1306163358,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306293990,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1296647692,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1306448717,
      1306564449,
      1307187307
    ),
  },
  {
    id: 1306448717,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1307194701, 1307214310),
  },
  {
    id: 1307194701,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307214310,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306564449,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307187307,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1296687583,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1307527351,
      130775573,
      130775574
    ),
  },
  {
    id: 1307527351,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(130775576, 130775577),
  },
  {
    id: 130775576,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775577,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775573,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775574,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1297704266,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1293843651,
      1293843653,
      1293843654
    ),
  },
  {
    id: 1293843651,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1294340383, 1294941722),
  },
  {
    id: 1294340383,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941722,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843653,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843654,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // lean to roof end
  // other roof start
  {
    id: 1277878317,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
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
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(498998527, 393873761, 463728189),
  },
  {
    id: 498998527,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(798560885, 278436874),
  },
  {
    id: 798560885,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 278436874,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 393873761,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(226754979, 342068251),
  },
  {
    id: 226754979,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 342068251,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 463728189,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(445555565, 812701879),
  },
  {
    id: 445555565,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 812701879,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 568663755,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(416803569, 713928406, 714048573),
  },
  {
    id: 416803569,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(257696070, 704170902),
  },
  {
    id: 257696070,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 704170902,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 713928406,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(420301640, 157756147),
  },
  {
    id: 420301640,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 157756147,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 714048573,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(339932323, 587666779),
  },
  {
    id: 339932323,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 587666779,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 924692209,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(461364055, 329576989, 380228518),
  },
  {
    id: 461364055,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(894609490, 576095522),
  },
  {
    id: 894609490,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 576095522,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 329576989,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 380228518,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 606121083,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(184662533, 858288295, 977207627),
  },
  {
    id: 184662533,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(555142930, 829153260),
  },
  {
    id: 555142930,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 829153260,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 858288295,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977207627,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 245139522,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(199268106, 949607148, 698555398),
  },
  {
    id: 199268106,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(769397177, 697435969),
  },
  {
    id: 769397177,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 697435969,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 949607148,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 698555398,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no end

  // don't know / need advice start
  {
    id: 1252739056,
    type: "checkbox",
    label: "Welche Dachform wünschen Sie ?",
    options: what_kind_roof_shape_you_want(
      1253831768,
      1254010140,
      1255028276,
      1277878317
    ),
  },
  // gable roof start
  {
    id: 1253831768,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1255092631,
      1255108783,
      1255653876,
      1255862478,
      1255935092
    ),
  },
  // storage space
  {
    id: 1255092631,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1257132434,
      7292683680,
      4606313932
    ),
  },
  {
    id: 1257132434,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1257473072, 1257473677),
  },
  {
    id: 1257473072,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1257473677,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 7292683680,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1257930226, 1258014465),
  },
  {
    id: 1257930226,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1258014465,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 4606313932,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1258881684, 1260472641),
  },
  {
    id: 1258881684,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1260472641,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1255108783,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1260709392,
      6909652003,
      9782716225
    ),
  },
  {
    id: 1260709392,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1262387100, 1262877209),
  },
  {
    id: 1262387100,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1262877209,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6909652003,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1263278063, 1263343806),
  },
  {
    id: 1263278063,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263343806,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9782716225,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1263436851, 1263967408),
  },
  {
    id: 1263436851,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263967408,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1255653876,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1264016287,
      1264076772,
      1264847922
    ),
  },
  {
    id: 1264016287,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1264956796, 1265021890),
  },
  {
    id: 1264956796,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265021890,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264076772,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264847922,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1265062369,
      1265520049,
      1266173661
    ),
  },
  {
    id: 1265062369,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1267230261, 1267853268),
  },
  {
    id: 1267230261,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267853268,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265520049,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1266173661,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1267920660,
      1267963064,
      1268769574
    ),
  },
  {
    id: 1267920660,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1268883605, 1269321634),
  },
  {
    id: 1268883605,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1269321634,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267963064,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1268769574,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1255862478,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1270623914,
      1271083314,
      1271502179
    ),
  },
  {
    id: 1270623914,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1272185458, 1272954294),
  },
  {
    id: 1272185458,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1272954294,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271083314,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271502179,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1274068792,
      1275162346,
      1275888310
    ),
  },
  {
    id: 1274068792,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1276673415, 1277372496),
  },
  {
    id: 1276673415,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1277372496,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275162346,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275888310,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // gable roof end
  // flat roof start
  {
    id: 1254010140,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1278470086,
      1279112648,
      1279127793,
      1279634728,
      1280548553
    ),
  },
  // storage space
  {
    id: 1278470086,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1281143385,
      1281757996,
      1282462721
    ),
  },
  {
    id: 1281143385,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1282733197, 1283123321),
  },
  {
    id: 1282733197,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283123321,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1281757996,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1283732831, 1283830990),
  },
  {
    id: 1283732831,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283830990,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1282462721,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1283876390, 1284222450),
  },
  {
    id: 1283876390,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1284222450,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1279112648,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1284994216,
      1285030033,
      1286121211
    ),
  },
  {
    id: 1284994216,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1286319386, 1287074236),
  },
  {
    id: 1286319386,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287074236,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1285030033,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1287641254, 1287959130),
  },
  {
    id: 1287641254,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287959130,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1286121211,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1288390037, 1288764523),
  },
  {
    id: 1288390037,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1288764523,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1279127793,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1289188782,
      1289523141,
      1289701762
    ),
  },
  {
    id: 1289188782,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1289743713, 1289762497),
  },
  {
    id: 1289743713,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289762497,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289523141,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289701762,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1279634728,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1292080702,
      1292231233,
      1292683839
    ),
  },
  {
    id: 1292080702,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1292863431, 1293761668),
  },
  {
    id: 1292863431,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293761668,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292231233,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292683839,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1293843650,
      1293984381,
      1294168493
    ),
  },
  {
    id: 1293843650,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1294340384, 1294941726),
  },
  {
    id: 1294340384,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941726,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293984381,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294168493,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // flat roof end
  // lean to roof start
  {
    id: 1255028276,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1295887573,
      1296324480,
      1296647692,
      1296687583,
      1297704266
    ),
  },
  // storage space
  {
    id: 1295887573,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1298411715,
      1299185614,
      1299336880
    ),
  },
  {
    id: 1298411715,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1300396621, 1300720575),
  },
  {
    id: 1300396621,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1300720575,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1299185614,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1300964224, 1301849286),
  },
  {
    id: 1300964224,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1301849286,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1299336880,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1301919634, 1302053051),
  },
  {
    id: 1301919634,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1302053051,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1296324480,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1303161157,
      1303311045,
      1303647290
    ),
  },
  {
    id: 1303161157,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1304416433, 1304586881),
  },
  {
    id: 1304416433,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1304586881,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1303311045,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1305332483, 1306062901),
  },
  {
    id: 1305332483,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306062901,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1303647290,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1306163358, 1306293990),
  },
  {
    id: 1306163358,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306293990,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1296647692,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1306448717,
      1306564449,
      1307187307
    ),
  },
  {
    id: 1306448717,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1307194701, 1307214310),
  },
  {
    id: 1307194701,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307214310,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306564449,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307187307,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1296687583,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1307527351,
      130775573,
      130775574
    ),
  },
  {
    id: 1307527351,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(130775576, 130775577),
  },
  {
    id: 130775576,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775577,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775573,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775574,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1297704266,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1293843651,
      1293843653,
      1293843654
    ),
  },
  {
    id: 1293843651,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1294340383, 1294941722),
  },
  {
    id: 1294340383,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941722,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843653,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843654,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // lean to roof end
  // other roof start
  {
    id: 1277878317,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
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
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(498998527, 393873761, 463728189),
  },
  {
    id: 498998527,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(798560885, 278436874),
  },
  {
    id: 798560885,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 278436874,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 393873761,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(226754979, 342068251),
  },
  {
    id: 226754979,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 342068251,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 463728189,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(445555565, 812701879),
  },
  {
    id: 445555565,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 812701879,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 568663755,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(416803569, 713928406, 714048573),
  },
  {
    id: 416803569,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(257696070, 704170902),
  },
  {
    id: 257696070,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 704170902,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 713928406,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(420301640, 157756147),
  },
  {
    id: 420301640,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 157756147,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 714048573,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(339932323, 587666779),
  },
  {
    id: 339932323,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 587666779,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 924692209,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(461364055, 329576989, 380228518),
  },
  {
    id: 461364055,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(894609490, 576095522),
  },
  {
    id: 894609490,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 576095522,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 329576989,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 380228518,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 606121083,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(184662533, 858288295, 977207627),
  },
  {
    id: 184662533,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(555142930, 829153260),
  },
  {
    id: 555142930,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 829153260,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 858288295,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977207627,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 245139522,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(199268106, 949607148, 698555398),
  },
  {
    id: 199268106,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(769397177, 697435969),
  },
  {
    id: 769397177,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 697435969,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 949607148,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 698555398,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  //   at the house
  {
    id: 1251819497,
    type: "checkbox",
    label:
      "Muss der Untergrund vorbereitet werden (z.B. Fundament oder Bodenbelag) ?",
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
    label: "Welche Dachform wünschen Sie ?",
    options: what_kind_roof_shape_you_want(
      1253831768,
      1254010140,
      1255028276,
      1277878317
    ),
  },
  // gable roof start
  {
    id: 1253831768,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1255092631,
      1255108783,
      1255653876,
      1255862478,
      1255935092
    ),
  },
  // storage space
  {
    id: 1255092631,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1257132434,
      8775101285,
      8594485397
    ),
  },
  {
    id: 1257132434,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1257473072, 1257473677),
  },
  {
    id: 1257473072,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1257473677,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 8775101285,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1257930226, 1258014465),
  },
  {
    id: 1257930226,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1258014465,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 8594485397,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1258881684, 1260472641),
  },
  {
    id: 1258881684,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1260472641,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1255108783,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1260709392,
      9776565849,
      9937335823
    ),
  },
  {
    id: 1260709392,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1262387100, 1262877209),
  },
  {
    id: 1262387100,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1262877209,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9776565849,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1263278063, 1263343806),
  },
  {
    id: 1263278063,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263343806,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9937335823,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1263436851, 1263967408),
  },
  {
    id: 1263436851,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263967408,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1255653876,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1264016287,
      1264076772,
      1264847922
    ),
  },
  {
    id: 1264016287,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1264956796, 1265021890),
  },
  {
    id: 1264956796,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265021890,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264076772,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264847922,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1265062369,
      1265520049,
      1266173661
    ),
  },
  {
    id: 1265062369,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1267230261, 1267853268),
  },
  {
    id: 1267230261,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267853268,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265520049,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1266173661,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1267920660,
      1267963064,
      1268769574
    ),
  },
  {
    id: 1267920660,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1268883605, 1269321634),
  },
  {
    id: 1268883605,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1269321634,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267963064,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1268769574,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1255862478,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1270623914,
      1271083314,
      1271502179
    ),
  },
  {
    id: 1270623914,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1272185458, 1272954294),
  },
  {
    id: 1272185458,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1272954294,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271083314,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271502179,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1274068792,
      1275162346,
      1275888310
    ),
  },
  {
    id: 1274068792,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1276673415, 1277372496),
  },
  {
    id: 1276673415,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1277372496,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275162346,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275888310,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // gable roof end
  // flat roof start
  {
    id: 1254010140,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1278470086,
      1279112648,
      1279127793,
      1279634728,
      1280548553
    ),
  },
  // storage space
  {
    id: 1278470086,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1281143385,
      1281757996,
      1282462721
    ),
  },
  {
    id: 1281143385,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1282733197, 1283123321),
  },
  {
    id: 1282733197,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283123321,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1281757996,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1283732831, 1283830990),
  },
  {
    id: 1283732831,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283830990,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1282462721,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1283876390, 1284222450),
  },
  {
    id: 1283876390,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1284222450,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1279112648,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1284994216,
      1285030033,
      1286121211
    ),
  },
  {
    id: 1284994216,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1286319386, 1287074236),
  },
  {
    id: 1286319386,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287074236,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1285030033,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1287641254, 1287959130),
  },
  {
    id: 1287641254,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287959130,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1286121211,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1288390037, 1288764523),
  },
  {
    id: 1288390037,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1288764523,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1279127793,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1289188782,
      1289523141,
      1289701762
    ),
  },
  {
    id: 1289188782,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1289743713, 1289762497),
  },
  {
    id: 1289743713,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289762497,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289523141,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289701762,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1279634728,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1292080702,
      1292231233,
      1292683839
    ),
  },
  {
    id: 1292080702,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1292863431, 1293761668),
  },
  {
    id: 1292863431,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293761668,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292231233,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292683839,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1293843650,
      1293984381,
      1294168493
    ),
  },
  {
    id: 1293843650,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1294340384, 1294941726),
  },
  {
    id: 1294340384,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941726,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293984381,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294168493,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // flat roof end
  // lean to roof start
  {
    id: 1255028276,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1295887573,
      1296324480,
      1296647692,
      1296687583,
      1297704266
    ),
  },
  // storage space
  {
    id: 1295887573,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1298411715,
      1299185614,
      1299336880
    ),
  },
  {
    id: 1298411715,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1300396621, 1300720575),
  },
  {
    id: 1300396621,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1300720575,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1299185614,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1300964224, 1301849286),
  },
  {
    id: 1300964224,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1301849286,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1299336880,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1301919634, 1302053051),
  },
  {
    id: 1301919634,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1302053051,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1296324480,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1303161157,
      1303311045,
      1303647290
    ),
  },
  {
    id: 1303161157,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1304416433, 1304586881),
  },
  {
    id: 1304416433,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1304586881,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1303311045,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1305332483, 1306062901),
  },
  {
    id: 1305332483,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306062901,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1303647290,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1306163358, 1306293990),
  },
  {
    id: 1306163358,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306293990,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1296647692,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1306448717,
      1306564449,
      1307187307
    ),
  },
  {
    id: 1306448717,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1307194701, 1307214310),
  },
  {
    id: 1307194701,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307214310,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306564449,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307187307,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1296687583,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1307527351,
      130775573,
      130775574
    ),
  },
  {
    id: 1307527351,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(130775576, 130775577),
  },
  {
    id: 130775576,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775577,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775573,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775574,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1297704266,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1293843651,
      1293843653,
      1293843654
    ),
  },
  {
    id: 1293843651,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1294340383, 1294941722),
  },
  {
    id: 1294340383,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941722,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843653,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843654,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // lean to roof end
  // other roof start
  {
    id: 1277878317,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
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
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(498998527, 393873761, 463728189),
  },
  {
    id: 498998527,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(798560885, 278436874),
  },
  {
    id: 798560885,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 278436874,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 393873761,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(226754979, 342068251),
  },
  {
    id: 226754979,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 342068251,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 463728189,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(445555565, 812701879),
  },
  {
    id: 445555565,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 812701879,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 568663755,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(416803569, 713928406, 714048573),
  },
  {
    id: 416803569,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(257696070, 704170902),
  },
  {
    id: 257696070,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 704170902,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 713928406,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(420301640, 157756147),
  },
  {
    id: 420301640,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 157756147,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 714048573,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(339932323, 587666779),
  },
  {
    id: 339932323,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 587666779,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 924692209,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(461364055, 329576989, 380228518),
  },
  {
    id: 461364055,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(894609490, 576095522),
  },
  {
    id: 894609490,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 576095522,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 329576989,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 380228518,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 606121083,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(184662533, 858288295, 977207627),
  },
  {
    id: 184662533,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(555142930, 829153260),
  },
  {
    id: 555142930,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 829153260,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 858288295,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977207627,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 245139522,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(199268106, 949607148, 698555398),
  },
  {
    id: 199268106,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(769397177, 697435969),
  },
  {
    id: 769397177,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 697435969,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 949607148,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 698555398,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other roof end
  // yes end

  // finishing here
  // no start
  {
    id: 1252676206,
    type: "checkbox",
    label: "Welche Dachform wünschen Sie ?",
    options: what_kind_roof_shape_you_want(
      1253831768,
      1254010140,
      1255028276,
      1277878317
    ),
  },
  // gable roof start
  {
    id: 1253831768,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1255092631,
      1255108783,
      1255653876,
      1255862478,
      1255935092
    ),
  },
  // storage space
  {
    id: 1255092631,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1257132434,
      2029974541,
      8013200293
    ),
  },
  {
    id: 1257132434,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1257473072, 1257473677),
  },
  {
    id: 1257473072,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1257473677,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2029974541,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1257930226, 1258014465),
  },
  {
    id: 1257930226,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1258014465,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 8013200293,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1258881684, 1260472641),
  },
  {
    id: 1258881684,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1260472641,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1255108783,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1260709392,
      9408964529,
      2217301347
    ),
  },
  {
    id: 1260709392,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1262387100, 1262877209),
  },
  {
    id: 1262387100,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1262877209,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9408964529,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1263278063, 1263343806),
  },
  {
    id: 1263278063,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263343806,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2217301347,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1263436851, 1263967408),
  },
  {
    id: 1263436851,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263967408,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1255653876,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1264016287,
      1264076772,
      1264847922
    ),
  },
  {
    id: 1264016287,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1264956796, 1265021890),
  },
  {
    id: 1264956796,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265021890,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264076772,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264847922,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1265062369,
      1265520049,
      1266173661
    ),
  },
  {
    id: 1265062369,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1267230261, 1267853268),
  },
  {
    id: 1267230261,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267853268,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265520049,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1266173661,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1267920660,
      1267963064,
      1268769574
    ),
  },
  {
    id: 1267920660,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1268883605, 1269321634),
  },
  {
    id: 1268883605,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1269321634,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267963064,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1268769574,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1255862478,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1270623914,
      1271083314,
      1271502179
    ),
  },
  {
    id: 1270623914,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1272185458, 1272954294),
  },
  {
    id: 1272185458,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1272954294,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271083314,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271502179,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1274068792,
      1275162346,
      1275888310
    ),
  },
  {
    id: 1274068792,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1276673415, 1277372496),
  },
  {
    id: 1276673415,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1277372496,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275162346,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275888310,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // gable roof end
  // flat roof start
  {
    id: 1254010140,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1278470086,
      1279112648,
      1279127793,
      1279634728,
      1280548553
    ),
  },
  // storage space
  {
    id: 1278470086,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1281143385,
      1281757996,
      1282462721
    ),
  },
  {
    id: 1281143385,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1282733197, 1283123321),
  },
  {
    id: 1282733197,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283123321,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1281757996,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1283732831, 1283830990),
  },
  {
    id: 1283732831,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283830990,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1282462721,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1283876390, 1284222450),
  },
  {
    id: 1283876390,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1284222450,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1279112648,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1284994216,
      1285030033,
      1286121211
    ),
  },
  {
    id: 1284994216,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1286319386, 1287074236),
  },
  {
    id: 1286319386,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287074236,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1285030033,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1287641254, 1287959130),
  },
  {
    id: 1287641254,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287959130,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1286121211,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1288390037, 1288764523),
  },
  {
    id: 1288390037,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1288764523,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1279127793,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1289188782,
      1289523141,
      1289701762
    ),
  },
  {
    id: 1289188782,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1289743713, 1289762497),
  },
  {
    id: 1289743713,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289762497,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289523141,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289701762,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1279634728,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1292080702,
      1292231233,
      1292683839
    ),
  },
  {
    id: 1292080702,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1292863431, 1293761668),
  },
  {
    id: 1292863431,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293761668,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292231233,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292683839,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1293843650,
      1293984381,
      1294168493
    ),
  },
  {
    id: 1293843650,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1294340384, 1294941726),
  },
  {
    id: 1294340384,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941726,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293984381,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294168493,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // flat roof end
  // lean to roof start
  {
    id: 1255028276,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1295887573,
      1296324480,
      1296647692,
      1296687583,
      1297704266
    ),
  },
  // storage space
  {
    id: 1295887573,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1298411715,
      1299185614,
      1299336880
    ),
  },
  {
    id: 1298411715,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1300396621, 1300720575),
  },
  {
    id: 1300396621,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1300720575,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1299185614,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1300964224, 1301849286),
  },
  {
    id: 1300964224,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1301849286,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1299336880,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1301919634, 1302053051),
  },
  {
    id: 1301919634,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1302053051,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1296324480,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1303161157,
      1303311045,
      1303647290
    ),
  },
  {
    id: 1303161157,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1304416433, 1304586881),
  },
  {
    id: 1304416433,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1304586881,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1303311045,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1305332483, 1306062901),
  },
  {
    id: 1305332483,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306062901,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1303647290,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1306163358, 1306293990),
  },
  {
    id: 1306163358,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306293990,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1296647692,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1306448717,
      1306564449,
      1307187307
    ),
  },
  {
    id: 1306448717,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1307194701, 1307214310),
  },
  {
    id: 1307194701,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307214310,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306564449,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307187307,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1296687583,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1307527351,
      130775573,
      130775574
    ),
  },
  {
    id: 1307527351,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(130775576, 130775577),
  },
  {
    id: 130775576,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775577,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775573,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775574,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1297704266,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1293843651,
      1293843653,
      1293843654
    ),
  },
  {
    id: 1293843651,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1294340383, 1294941722),
  },
  {
    id: 1294340383,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941722,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843653,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843654,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // lean to roof end
  // other roof start
  {
    id: 1277878317,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
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
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(498998527, 393873761, 463728189),
  },
  {
    id: 498998527,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(798560885, 278436874),
  },
  {
    id: 798560885,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 278436874,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 393873761,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(226754979, 342068251),
  },
  {
    id: 226754979,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 342068251,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 463728189,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(445555565, 812701879),
  },
  {
    id: 445555565,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 812701879,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 568663755,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(416803569, 713928406, 714048573),
  },
  {
    id: 416803569,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(257696070, 704170902),
  },
  {
    id: 257696070,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 704170902,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 713928406,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(420301640, 157756147),
  },
  {
    id: 420301640,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 157756147,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 714048573,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(339932323, 587666779),
  },
  {
    id: 339932323,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 587666779,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 924692209,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(461364055, 329576989, 380228518),
  },
  {
    id: 461364055,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(894609490, 576095522),
  },
  {
    id: 894609490,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 576095522,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 329576989,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 380228518,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 606121083,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(184662533, 858288295, 977207627),
  },
  {
    id: 184662533,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(555142930, 829153260),
  },
  {
    id: 555142930,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 829153260,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 858288295,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977207627,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 245139522,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(199268106, 949607148, 698555398),
  },
  {
    id: 199268106,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(769397177, 697435969),
  },
  {
    id: 769397177,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 697435969,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 949607148,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 698555398,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no end

  // don't know / need advice start
  {
    id: 1252739056,
    type: "checkbox",
    label: "Welche Dachform wünschen Sie ?",
    options: what_kind_roof_shape_you_want(
      1253831768,
      1254010140,
      1255028276,
      1277878317
    ),
  },
  // gable roof start
  {
    id: 1253831768,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1255092631,
      1255108783,
      1255653876,
      1255862478,
      1255935092
    ),
  },
  // storage space
  {
    id: 1255092631,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1257132434,
      6584341645,
      8760533225
    ),
  },
  {
    id: 1257132434,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1257473072, 1257473677),
  },
  {
    id: 1257473072,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1257473677,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6584341645,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1257930226, 1258014465),
  },
  {
    id: 1257930226,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1258014465,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 8760533225,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1258881684, 1260472641),
  },
  {
    id: 1258881684,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1260472641,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1255108783,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1260709392,
      3635951244,
      2034307595
    ),
  },
  {
    id: 1260709392,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1262387100, 1262877209),
  },
  {
    id: 1262387100,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1262877209,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 3635951244,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1263278063, 1263343806),
  },
  {
    id: 1263278063,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263343806,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2034307595,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1263436851, 1263967408),
  },
  {
    id: 1263436851,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263967408,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1255653876,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1264016287,
      1264076772,
      1264847922
    ),
  },
  {
    id: 1264016287,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1264956796, 1265021890),
  },
  {
    id: 1264956796,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265021890,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264076772,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264847922,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1265062369,
      1265520049,
      1266173661
    ),
  },
  {
    id: 1265062369,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1267230261, 1267853268),
  },
  {
    id: 1267230261,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267853268,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265520049,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1266173661,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1267920660,
      1267963064,
      1268769574
    ),
  },
  {
    id: 1267920660,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1268883605, 1269321634),
  },
  {
    id: 1268883605,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1269321634,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267963064,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1268769574,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1255862478,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1270623914,
      1271083314,
      1271502179
    ),
  },
  {
    id: 1270623914,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1272185458, 1272954294),
  },
  {
    id: 1272185458,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1272954294,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271083314,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271502179,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1274068792,
      1275162346,
      1275888310
    ),
  },
  {
    id: 1274068792,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1276673415, 1277372496),
  },
  {
    id: 1276673415,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1277372496,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275162346,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275888310,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // gable roof end
  // flat roof start
  {
    id: 1254010140,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1278470086,
      1279112648,
      1279127793,
      1279634728,
      1280548553
    ),
  },
  // storage space
  {
    id: 1278470086,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1281143385,
      1281757996,
      1282462721
    ),
  },
  {
    id: 1281143385,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1282733197, 1283123321),
  },
  {
    id: 1282733197,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283123321,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1281757996,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1283732831, 1283830990),
  },
  {
    id: 1283732831,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283830990,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1282462721,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1283876390, 1284222450),
  },
  {
    id: 1283876390,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1284222450,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1279112648,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1284994216,
      1285030033,
      1286121211
    ),
  },
  {
    id: 1284994216,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1286319386, 1287074236),
  },
  {
    id: 1286319386,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287074236,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1285030033,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1287641254, 1287959130),
  },
  {
    id: 1287641254,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287959130,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1286121211,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1288390037, 1288764523),
  },
  {
    id: 1288390037,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1288764523,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1279127793,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1289188782,
      1289523141,
      1289701762
    ),
  },
  {
    id: 1289188782,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1289743713, 1289762497),
  },
  {
    id: 1289743713,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289762497,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289523141,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289701762,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1279634728,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1292080702,
      1292231233,
      1292683839
    ),
  },
  {
    id: 1292080702,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1292863431, 1293761668),
  },
  {
    id: 1292863431,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293761668,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292231233,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292683839,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1293843650,
      1293984381,
      1294168493
    ),
  },
  {
    id: 1293843650,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1294340384, 1294941726),
  },
  {
    id: 1294340384,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941726,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293984381,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294168493,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // flat roof end
  // lean to roof start
  {
    id: 1255028276,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1295887573,
      1296324480,
      1296647692,
      1296687583,
      1297704266
    ),
  },
  // storage space
  {
    id: 1295887573,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1298411715,
      1299185614,
      1299336880
    ),
  },
  {
    id: 1298411715,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1300396621, 1300720575),
  },
  {
    id: 1300396621,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1300720575,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1299185614,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1300964224, 1301849286),
  },
  {
    id: 1300964224,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1301849286,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1299336880,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1301919634, 1302053051),
  },
  {
    id: 1301919634,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1302053051,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1296324480,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1303161157,
      1303311045,
      1303647290
    ),
  },
  {
    id: 1303161157,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1304416433, 1304586881),
  },
  {
    id: 1304416433,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1304586881,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1303311045,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1305332483, 1306062901),
  },
  {
    id: 1305332483,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306062901,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1303647290,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1306163358, 1306293990),
  },
  {
    id: 1306163358,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306293990,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1296647692,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1306448717,
      1306564449,
      1307187307
    ),
  },
  {
    id: 1306448717,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1307194701, 1307214310),
  },
  {
    id: 1307194701,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307214310,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306564449,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307187307,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1296687583,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1307527351,
      130775573,
      130775574
    ),
  },
  {
    id: 1307527351,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(130775576, 130775577),
  },
  {
    id: 130775576,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775577,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775573,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775574,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1297704266,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1293843651,
      1293843653,
      1293843654
    ),
  },
  {
    id: 1293843651,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1294340383, 1294941722),
  },
  {
    id: 1294340383,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941722,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843653,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843654,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // lean to roof end
  // other roof start
  {
    id: 1277878317,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
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
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(498998527, 393873761, 463728189),
  },
  {
    id: 498998527,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(798560885, 278436874),
  },
  {
    id: 798560885,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 278436874,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 393873761,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(226754979, 342068251),
  },
  {
    id: 226754979,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 342068251,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 463728189,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(445555565, 812701879),
  },
  {
    id: 445555565,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 812701879,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 568663755,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(416803569, 713928406, 714048573),
  },
  {
    id: 416803569,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(257696070, 704170902),
  },
  {
    id: 257696070,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 704170902,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 713928406,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(420301640, 157756147),
  },
  {
    id: 420301640,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 157756147,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 714048573,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(339932323, 587666779),
  },
  {
    id: 339932323,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 587666779,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 924692209,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(461364055, 329576989, 380228518),
  },
  {
    id: 461364055,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(894609490, 576095522),
  },
  {
    id: 894609490,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 576095522,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 329576989,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 380228518,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 606121083,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(184662533, 858288295, 977207627),
  },
  {
    id: 184662533,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(555142930, 829153260),
  },
  {
    id: 555142930,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 829153260,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 858288295,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977207627,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 245139522,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(199268106, 949607148, 698555398),
  },
  {
    id: 199268106,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(769397177, 697435969),
  },
  {
    id: 769397177,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 697435969,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 949607148,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 698555398,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  //   at the house

  // at the garage
  {
    id: 1252198179,
    type: "checkbox",
    label:
      "Muss der Untergrund vorbereitet werden (z.B. Fundament oder Bodenbelag) ?",
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
    label: "Welche Dachform wünschen Sie ?",
    options: what_kind_roof_shape_you_want(
      1253831768,
      1254010140,
      1255028276,
      1277878317
    ),
  },
  // gable roof start
  {
    id: 1253831768,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1255092631,
      1255108783,
      1255653876,
      1255862478,
      1255935092
    ),
  },
  // storage space
  {
    id: 1255092631,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1257132434,
      1910622356,
      3285794882
    ),
  },
  {
    id: 1257132434,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1257473072, 1257473677),
  },
  {
    id: 1257473072,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1257473677,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1910622356,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1257930226, 1258014465),
  },
  {
    id: 1257930226,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1258014465,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 3285794882,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1258881684, 1260472641),
  },
  {
    id: 1258881684,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1260472641,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1255108783,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1260709392,
      6118395028,
      3164106253
    ),
  },
  {
    id: 1260709392,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1262387100, 1262877209),
  },
  {
    id: 1262387100,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1262877209,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6118395028,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1263278063, 1263343806),
  },
  {
    id: 1263278063,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263343806,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 3164106253,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1263436851, 1263967408),
  },
  {
    id: 1263436851,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263967408,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1255653876,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1264016287,
      1264076772,
      1264847922
    ),
  },
  {
    id: 1264016287,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1264956796, 1265021890),
  },
  {
    id: 1264956796,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265021890,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264076772,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264847922,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1265062369,
      1265520049,
      1266173661
    ),
  },
  {
    id: 1265062369,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1267230261, 1267853268),
  },
  {
    id: 1267230261,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267853268,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265520049,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1266173661,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1267920660,
      1267963064,
      1268769574
    ),
  },
  {
    id: 1267920660,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1268883605, 1269321634),
  },
  {
    id: 1268883605,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1269321634,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267963064,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1268769574,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1255862478,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1270623914,
      1271083314,
      1271502179
    ),
  },
  {
    id: 1270623914,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1272185458, 1272954294),
  },
  {
    id: 1272185458,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1272954294,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271083314,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271502179,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1274068792,
      1275162346,
      1275888310
    ),
  },
  {
    id: 1274068792,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1276673415, 1277372496),
  },
  {
    id: 1276673415,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1277372496,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275162346,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275888310,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // gable roof end
  // flat roof start
  {
    id: 1254010140,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1278470086,
      1279112648,
      1279127793,
      1279634728,
      1280548553
    ),
  },
  // storage space
  {
    id: 1278470086,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1281143385,
      1281757996,
      1282462721
    ),
  },
  {
    id: 1281143385,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1282733197, 1283123321),
  },
  {
    id: 1282733197,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283123321,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1281757996,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1283732831, 1283830990),
  },
  {
    id: 1283732831,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283830990,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1282462721,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1283876390, 1284222450),
  },
  {
    id: 1283876390,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1284222450,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1279112648,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1284994216,
      1285030033,
      1286121211
    ),
  },
  {
    id: 1284994216,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1286319386, 1287074236),
  },
  {
    id: 1286319386,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287074236,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1285030033,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1287641254, 1287959130),
  },
  {
    id: 1287641254,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287959130,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1286121211,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1288390037, 1288764523),
  },
  {
    id: 1288390037,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1288764523,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1279127793,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1289188782,
      1289523141,
      1289701762
    ),
  },
  {
    id: 1289188782,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1289743713, 1289762497),
  },
  {
    id: 1289743713,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289762497,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289523141,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289701762,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1279634728,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1292080702,
      1292231233,
      1292683839
    ),
  },
  {
    id: 1292080702,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1292863431, 1293761668),
  },
  {
    id: 1292863431,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293761668,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292231233,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292683839,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1293843650,
      1293984381,
      1294168493
    ),
  },
  {
    id: 1293843650,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1294340384, 1294941726),
  },
  {
    id: 1294340384,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941726,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293984381,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294168493,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // flat roof end
  // lean to roof start
  {
    id: 1255028276,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1295887573,
      1296324480,
      1296647692,
      1296687583,
      1297704266
    ),
  },
  // storage space
  {
    id: 1295887573,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1298411715,
      1299185614,
      1299336880
    ),
  },
  {
    id: 1298411715,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1300396621, 1300720575),
  },
  {
    id: 1300396621,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1300720575,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1299185614,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1300964224, 1301849286),
  },
  {
    id: 1300964224,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1301849286,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1299336880,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1301919634, 1302053051),
  },
  {
    id: 1301919634,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1302053051,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1296324480,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1303161157,
      1303311045,
      1303647290
    ),
  },
  {
    id: 1303161157,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1304416433, 1304586881),
  },
  {
    id: 1304416433,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1304586881,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1303311045,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1305332483, 1306062901),
  },
  {
    id: 1305332483,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306062901,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1303647290,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1306163358, 1306293990),
  },
  {
    id: 1306163358,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306293990,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1296647692,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1306448717,
      1306564449,
      1307187307
    ),
  },
  {
    id: 1306448717,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1307194701, 1307214310),
  },
  {
    id: 1307194701,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307214310,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306564449,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307187307,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1296687583,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1307527351,
      130775573,
      130775574
    ),
  },
  {
    id: 1307527351,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(130775576, 130775577),
  },
  {
    id: 130775576,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775577,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775573,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775574,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1297704266,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1293843651,
      1293843653,
      1293843654
    ),
  },
  {
    id: 1293843651,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1294340383, 1294941722),
  },
  {
    id: 1294340383,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941722,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843653,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843654,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // lean to roof end
  // other roof start
  {
    id: 1277878317,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
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
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(498998527, 393873761, 463728189),
  },
  {
    id: 498998527,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(798560885, 278436874),
  },
  {
    id: 798560885,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 278436874,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 393873761,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(226754979, 342068251),
  },
  {
    id: 226754979,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 342068251,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 463728189,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(445555565, 812701879),
  },
  {
    id: 445555565,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 812701879,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 568663755,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(416803569, 713928406, 714048573),
  },
  {
    id: 416803569,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(257696070, 704170902),
  },
  {
    id: 257696070,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 704170902,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 713928406,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(420301640, 157756147),
  },
  {
    id: 420301640,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 157756147,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 714048573,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(339932323, 587666779),
  },
  {
    id: 339932323,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 587666779,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 924692209,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(461364055, 329576989, 380228518),
  },
  {
    id: 461364055,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(894609490, 576095522),
  },
  {
    id: 894609490,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 576095522,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 329576989,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 380228518,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 606121083,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(184662533, 858288295, 977207627),
  },
  {
    id: 184662533,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(555142930, 829153260),
  },
  {
    id: 555142930,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 829153260,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 858288295,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977207627,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 245139522,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(199268106, 949607148, 698555398),
  },
  {
    id: 199268106,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(769397177, 697435969),
  },
  {
    id: 769397177,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 697435969,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 949607148,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 698555398,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other roof end
  // yes end

  // finishing here
  // no start
  {
    id: 1252676206,
    type: "checkbox",
    label: "Welche Dachform wünschen Sie ?",
    options: what_kind_roof_shape_you_want(
      1253831768,
      1254010140,
      1255028276,
      1277878317
    ),
  },
  // gable roof start
  {
    id: 1253831768,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1255092631,
      1255108783,
      1255653876,
      1255862478,
      1255935092
    ),
  },
  // storage space
  {
    id: 1255092631,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1257132434,
      8678779107,
      3632744373
    ),
  },
  {
    id: 1257132434,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1257473072, 1257473677),
  },
  {
    id: 1257473072,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1257473677,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 8678779107,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1257930226, 1258014465),
  },
  {
    id: 1257930226,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1258014465,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 3632744373,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1258881684, 1260472641),
  },
  {
    id: 1258881684,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1260472641,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1255108783,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1260709392,
      9105849480,
      3833134428
    ),
  },
  {
    id: 1260709392,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1262387100, 1262877209),
  },
  {
    id: 1262387100,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1262877209,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9105849480,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1263278063, 1263343806),
  },
  {
    id: 1263278063,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263343806,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 3833134428,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1263436851, 1263967408),
  },
  {
    id: 1263436851,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263967408,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1255653876,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1264016287,
      1264076772,
      1264847922
    ),
  },
  {
    id: 1264016287,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1264956796, 1265021890),
  },
  {
    id: 1264956796,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265021890,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264076772,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264847922,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1265062369,
      1265520049,
      1266173661
    ),
  },
  {
    id: 1265062369,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1267230261, 1267853268),
  },
  {
    id: 1267230261,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267853268,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265520049,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1266173661,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1267920660,
      1267963064,
      1268769574
    ),
  },
  {
    id: 1267920660,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1268883605, 1269321634),
  },
  {
    id: 1268883605,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1269321634,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267963064,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1268769574,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1255862478,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1270623914,
      1271083314,
      1271502179
    ),
  },
  {
    id: 1270623914,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1272185458, 1272954294),
  },
  {
    id: 1272185458,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1272954294,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271083314,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271502179,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1274068792,
      1275162346,
      1275888310
    ),
  },
  {
    id: 1274068792,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1276673415, 1277372496),
  },
  {
    id: 1276673415,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1277372496,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275162346,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275888310,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // gable roof end
  // flat roof start
  {
    id: 1254010140,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1278470086,
      1279112648,
      1279127793,
      1279634728,
      1280548553
    ),
  },
  // storage space
  {
    id: 1278470086,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1281143385,
      1281757996,
      1282462721
    ),
  },
  {
    id: 1281143385,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1282733197, 1283123321),
  },
  {
    id: 1282733197,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283123321,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1281757996,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1283732831, 1283830990),
  },
  {
    id: 1283732831,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283830990,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1282462721,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1283876390, 1284222450),
  },
  {
    id: 1283876390,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1284222450,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1279112648,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1284994216,
      1285030033,
      1286121211
    ),
  },
  {
    id: 1284994216,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1286319386, 1287074236),
  },
  {
    id: 1286319386,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287074236,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1285030033,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1287641254, 1287959130),
  },
  {
    id: 1287641254,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287959130,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1286121211,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1288390037, 1288764523),
  },
  {
    id: 1288390037,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1288764523,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1279127793,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1289188782,
      1289523141,
      1289701762
    ),
  },
  {
    id: 1289188782,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1289743713, 1289762497),
  },
  {
    id: 1289743713,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289762497,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289523141,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289701762,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1279634728,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1292080702,
      1292231233,
      1292683839
    ),
  },
  {
    id: 1292080702,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1292863431, 1293761668),
  },
  {
    id: 1292863431,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293761668,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292231233,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292683839,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1293843650,
      1293984381,
      1294168493
    ),
  },
  {
    id: 1293843650,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1294340384, 1294941726),
  },
  {
    id: 1294340384,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941726,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293984381,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294168493,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // flat roof end
  // lean to roof start
  {
    id: 1255028276,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1295887573,
      1296324480,
      1296647692,
      1296687583,
      1297704266
    ),
  },
  // storage space
  {
    id: 1295887573,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1298411715,
      1299185614,
      1299336880
    ),
  },
  {
    id: 1298411715,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1300396621, 1300720575),
  },
  {
    id: 1300396621,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1300720575,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1299185614,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1300964224, 1301849286),
  },
  {
    id: 1300964224,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1301849286,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1299336880,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1301919634, 1302053051),
  },
  {
    id: 1301919634,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1302053051,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1296324480,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1303161157,
      1303311045,
      1303647290
    ),
  },
  {
    id: 1303161157,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1304416433, 1304586881),
  },
  {
    id: 1304416433,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1304586881,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1303311045,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1305332483, 1306062901),
  },
  {
    id: 1305332483,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306062901,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1303647290,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1306163358, 1306293990),
  },
  {
    id: 1306163358,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306293990,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1296647692,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1306448717,
      1306564449,
      1307187307
    ),
  },
  {
    id: 1306448717,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1307194701, 1307214310),
  },
  {
    id: 1307194701,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307214310,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306564449,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307187307,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1296687583,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1307527351,
      130775573,
      130775574
    ),
  },
  {
    id: 1307527351,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(130775576, 130775577),
  },
  {
    id: 130775576,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775577,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775573,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775574,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1297704266,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1293843651,
      1293843653,
      1293843654
    ),
  },
  {
    id: 1293843651,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1294340383, 1294941722),
  },
  {
    id: 1294340383,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941722,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843653,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843654,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // lean to roof end
  // other roof start
  {
    id: 1277878317,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
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
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(498998527, 393873761, 463728189),
  },
  {
    id: 498998527,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(798560885, 278436874),
  },
  {
    id: 798560885,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 278436874,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 393873761,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(226754979, 342068251),
  },
  {
    id: 226754979,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 342068251,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 463728189,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(445555565, 812701879),
  },
  {
    id: 445555565,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 812701879,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 568663755,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(416803569, 713928406, 714048573),
  },
  {
    id: 416803569,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(257696070, 704170902),
  },
  {
    id: 257696070,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 704170902,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 713928406,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(420301640, 157756147),
  },
  {
    id: 420301640,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 157756147,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 714048573,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(339932323, 587666779),
  },
  {
    id: 339932323,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 587666779,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 924692209,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(461364055, 329576989, 380228518),
  },
  {
    id: 461364055,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(894609490, 576095522),
  },
  {
    id: 894609490,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 576095522,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 329576989,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 380228518,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 606121083,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(184662533, 858288295, 977207627),
  },
  {
    id: 184662533,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(555142930, 829153260),
  },
  {
    id: 555142930,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 829153260,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 858288295,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977207627,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 245139522,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(199268106, 949607148, 698555398),
  },
  {
    id: 199268106,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(769397177, 697435969),
  },
  {
    id: 769397177,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 697435969,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 949607148,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 698555398,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no end

  // don't know / need advice start
  {
    id: 1252739056,
    type: "checkbox",
    label: "Welche Dachform wünschen Sie ?",
    options: what_kind_roof_shape_you_want(
      1253831768,
      1254010140,
      1255028276,
      1277878317
    ),
  },
  // gable roof start
  {
    id: 1253831768,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1255092631,
      1255108783,
      1255653876,
      1255862478,
      1255935092
    ),
  },
  // storage space
  {
    id: 1255092631,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1257132434,
      4731112514,
      6856603217
    ),
  },
  {
    id: 1257132434,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1257473072, 1257473677),
  },
  {
    id: 1257473072,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1257473677,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 4731112514,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1257930226, 1258014465),
  },
  {
    id: 1257930226,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1258014465,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6856603217,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1258881684, 1260472641),
  },
  {
    id: 1258881684,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1260472641,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1255108783,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1260709392,
      1406837307,
      5060639170
    ),
  },
  {
    id: 1260709392,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1262387100, 1262877209),
  },
  {
    id: 1262387100,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1262877209,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1406837307,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1263278063, 1263343806),
  },
  {
    id: 1263278063,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263343806,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 5060639170,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1263436851, 1263967408),
  },
  {
    id: 1263436851,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1263967408,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1255653876,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1264016287,
      1264076772,
      1264847922
    ),
  },
  {
    id: 1264016287,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1264956796, 1265021890),
  },
  {
    id: 1264956796,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265021890,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264076772,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1264847922,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1265062369,
      1265520049,
      1266173661
    ),
  },
  {
    id: 1265062369,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1267230261, 1267853268),
  },
  {
    id: 1267230261,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267853268,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1265520049,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1266173661,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1267920660,
      1267963064,
      1268769574
    ),
  },
  {
    id: 1267920660,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1268883605, 1269321634),
  },
  {
    id: 1268883605,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1269321634,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1267963064,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1268769574,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1255862478,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1270623914,
      1271083314,
      1271502179
    ),
  },
  {
    id: 1270623914,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1272185458, 1272954294),
  },
  {
    id: 1272185458,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1272954294,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271083314,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1271502179,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1274068792,
      1275162346,
      1275888310
    ),
  },
  {
    id: 1274068792,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1276673415, 1277372496),
  },
  {
    id: 1276673415,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1277372496,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275162346,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1275888310,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // gable roof end
  // flat roof start
  {
    id: 1254010140,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1278470086,
      1279112648,
      1279127793,
      1279634728,
      1280548553
    ),
  },
  // storage space
  {
    id: 1278470086,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1281143385,
      1281757996,
      1282462721
    ),
  },
  {
    id: 1281143385,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1282733197, 1283123321),
  },
  {
    id: 1282733197,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283123321,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1281757996,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1283732831, 1283830990),
  },
  {
    id: 1283732831,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1283830990,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1282462721,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1283876390, 1284222450),
  },
  {
    id: 1283876390,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1284222450,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1279112648,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1284994216,
      1285030033,
      1286121211
    ),
  },
  {
    id: 1284994216,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1286319386, 1287074236),
  },
  {
    id: 1286319386,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287074236,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1285030033,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1287641254, 1287959130),
  },
  {
    id: 1287641254,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1287959130,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1286121211,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1288390037, 1288764523),
  },
  {
    id: 1288390037,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1288764523,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1279127793,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1289188782,
      1289523141,
      1289701762
    ),
  },
  {
    id: 1289188782,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1289743713, 1289762497),
  },
  {
    id: 1289743713,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289762497,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289523141,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1289701762,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1279634728,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1292080702,
      1292231233,
      1292683839
    ),
  },
  {
    id: 1292080702,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1292863431, 1293761668),
  },
  {
    id: 1292863431,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293761668,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292231233,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1292683839,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1255935092,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1293843650,
      1293984381,
      1294168493
    ),
  },
  {
    id: 1293843650,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1294340384, 1294941726),
  },
  {
    id: 1294340384,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941726,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293984381,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294168493,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // no, just need the carport
  // flat roof end
  // lean to roof start
  {
    id: 1255028276,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
    options: do_you_need_additional_carport(
      1295887573,
      1296324480,
      1296647692,
      1296687583,
      1297704266
    ),
  },
  // storage space
  {
    id: 1295887573,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1298411715,
      1299185614,
      1299336880
    ),
  },
  {
    id: 1298411715,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1300396621, 1300720575),
  },
  {
    id: 1300396621,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1300720575,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1299185614,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1300964224, 1301849286),
  },
  {
    id: 1300964224,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1301849286,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1299336880,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1301919634, 1302053051),
  },
  {
    id: 1301919634,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1302053051,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 1296324480,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1303161157,
      1303311045,
      1303647290
    ),
  },
  {
    id: 1303161157,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1304416433, 1304586881),
  },
  {
    id: 1304416433,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1304586881,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1303311045,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1305332483, 1306062901),
  },
  {
    id: 1305332483,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306062901,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1303647290,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1306163358, 1306293990),
  },
  {
    id: 1306163358,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306293990,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 1296647692,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1306448717,
      1306564449,
      1307187307
    ),
  },
  {
    id: 1306448717,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1307194701, 1307214310),
  },
  {
    id: 1307194701,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307214310,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1306564449,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1307187307,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 1296687583,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1307527351,
      130775573,
      130775574
    ),
  },
  {
    id: 1307527351,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(130775576, 130775577),
  },
  {
    id: 130775576,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775577,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775573,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 130775574,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 1297704266,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(
      1293843651,
      1293843653,
      1293843654
    ),
  },
  {
    id: 1293843651,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(1294340383, 1294941722),
  },
  {
    id: 1294340383,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1294941722,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843653,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1293843654,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // lean to roof end
  // other roof start
  {
    id: 1277878317,
    type: "checkbox",
    label: "Sie benötigen Zusatzausstattung für Ihren Carport ?",
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
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(498998527, 393873761, 463728189),
  },
  {
    id: 498998527,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(798560885, 278436874),
  },
  {
    id: 798560885,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 278436874,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 393873761,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(226754979, 342068251),
  },
  {
    id: 226754979,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 342068251,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 463728189,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(445555565, 812701879),
  },
  {
    id: 445555565,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 812701879,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // storage space
  // photovoltaic system
  {
    id: 568663755,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(416803569, 713928406, 714048573),
  },
  {
    id: 416803569,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(257696070, 704170902),
  },
  {
    id: 257696070,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 704170902,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 713928406,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(420301640, 157756147),
  },
  {
    id: 420301640,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 157756147,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 714048573,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(339932323, 587666779),
  },
  {
    id: 339932323,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 587666779,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // photovoltaic system
  // green roaf
  {
    id: 924692209,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(461364055, 329576989, 380228518),
  },
  {
    id: 461364055,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(894609490, 576095522),
  },
  {
    id: 894609490,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 576095522,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 329576989,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 380228518,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // green roaf
  // other
  {
    id: 606121083,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(184662533, 858288295, 977207627),
  },
  {
    id: 184662533,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(555142930, 829153260),
  },
  {
    id: 555142930,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 829153260,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 858288295,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977207627,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // other
  // no, just need the carport
  {
    id: 245139522,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_you_exactly_need(199268106, 949607148, 698555398),
  },
  {
    id: 199268106,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(769397177, 697435969),
  },
  {
    id: 769397177,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 697435969,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 949607148,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 698555398,
    type: "checkbox",
    label: "Muss trotzdem ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // at the garage
];

export default singleCarport;
