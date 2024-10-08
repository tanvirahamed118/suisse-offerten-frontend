import {
  how_many_garage_doors,
  what_type_garage_door_it,
  how_do_you_the_garage_door,
  how_do_garage_door,
  questionCheckboxItem,
} from "../../reuse-data";

const garageDoors = [
  // Garage doors
  {
    id: 1036517320,
    type: "checkbox",
    label: "Which service do you exactly need ?",
    options: [
      {
        id: 1093867519,
        label: "Install or replace garage door",
      },
      {
        id: 1096754474,
        label: "Repair garage door",
      },
      {
        id: 1097557782,
        label: "Retrofit drive",
      },
      {
        id: 1099306060,
        label: "Other",
      },
    ],
  },

  //  install or repaire garage door start
  {
    id: 1093867519,
    type: "checkbox",
    label: "How many garage doors ?",
    options: how_many_garage_doors(
      1100417025,
      1102166515,
      1104782313,
      1105833577
    ),
  },
  // 1 start
  {
    id: 1100417025,
    type: "checkbox",
    label: "What type of garage door is it ?",
    options: what_type_garage_door_it(
      1108239911,
      1108587963,
      1110101569,
      1112326420,
      1128656747
    ),
  },
  {
    id: 1108239911,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1112973807, 1115184421, 1116708245),
  },
  {
    id: 1112973807,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1115184421,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1116708245,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1108587963,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1116758611, 1117761313, 1119636931),
  },
  {
    id: 1116758611,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1117761313,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1119636931,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1110101569,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1121270907, 1121807201, 1124411759),
  },
  {
    id: 1121270907,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1121807201,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1124411759,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1112326420,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1124723140, 1126150038, 1127641421),
  },
  {
    id: 1124723140,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1126150038,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1127641421,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1128656747,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1128824607, 1132196997, 1132519647),
  },
  {
    id: 1128824607,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1132196997,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1132519647,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },

  // 1 end
  // 2 - 3 start
  {
    id: 1102166515,
    type: "checkbox",
    options: questionCheckboxItem(1133547612, 1133679253),
  },
  {
    id: 1133547612,
    type: "checkbox",
    label: "What type of garage door is it ?",
    options: what_type_garage_door_it(
      1134215695,
      1134701697,
      1135631439,
      1136985014,
      1137514480
    ),
  },
  {
    id: 1134215695,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1138224607, 1138354855, 1139510411),
  },
  {
    id: 1138224607,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1138354855,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1139510411,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1134701697,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1140378428, 1140929155, 1141383993),
  },
  {
    id: 1140378428,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1140929155,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1141383993,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1135631439,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1141727386, 1144131853, 1144265243),
  },
  {
    id: 1141727386,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1144131853,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1144265243,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1136985014,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1144422803, 1144794977, 1145541167),
  },
  {
    id: 1144422803,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1144794977,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1145541167,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1137514480,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1145953897, 1148205047, 1148352593),
  },
  {
    id: 1145953897,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1148205047,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1148352593,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },

  // 2 - 3 end

  //  4 - 5 start
  {
    id: 1104782313,
    type: "checkbox",
    options: questionCheckboxItem(1149463980, 1149517280),
  },
  {
    id: 1149463980,
    type: "checkbox",
    label: "What type of garage door is it ?",
    options: what_type_garage_door_it(
      1149649425,
      1149800737,
      1151248996,
      1151822279,
      1152542173
    ),
  },
  {
    id: 1149649425,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1152885093, 1153378573, 1155811855),
  },
  {
    id: 1152885093,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1153378573,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1155811855,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1149800737,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1156195079, 1157444197, 1158080027),
  },
  {
    id: 1156195079,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1157444197,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1158080027,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1151248996,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1158100401, 1158547915, 1160351491),
  },
  {
    id: 1158100401,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1158547915,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1160351491,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1151822279,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1161848292, 1162801757, 1162860643),
  },
  {
    id: 1161848292,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1162801757,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1162860643,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1152542173,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1163073423, 1165262679, 1166020429),
  },
  {
    id: 1163073423,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1165262679,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1166020429,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },

  // 4 - 5 end
  // 6 or more start
  {
    id: 1105833577,
    type: "checkbox",
    options: [
      {
        id: 1166252684,
        label: "Yes",
      },
      {
        label: "no",
      },
    ],
  },
  {
    id: 1166252684,
    type: "checkbox",
    label: "What type of garage door is it ?",
    options: what_type_garage_door_it(
      1166840553,
      1167255423,
      1167597413,
      1168741017,
      1169610004
    ),
  },
  {
    id: 1166840553,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1170198501, 1170952571, 1172437323),
  },
  {
    id: 1170198501,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1170952571,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1172437323,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1167255423,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1172594236, 1173391571, 1173482575),
  },
  {
    id: 1172594236,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1173391571,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1173482575,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1167597413,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1175435174, 1176283151, 1176818672),
  },
  {
    id: 1175435174,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1176283151,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1176818672,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1168741017,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1177645606, 1179388123, 1181208090),
  },
  {
    id: 1177645606,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1179388123,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1181208090,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1169610004,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1182958795, 1183296078, 1183548797),
  },
  {
    id: 1182958795,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1183296078,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1183548797,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },

  // 6 or more end
  // install or repaire garage door end

  //  Retrofit drive start
  {
    id: 1097557782,
    type: "checkbox",
    label: "How many garage doors ?",
    options: how_many_garage_doors(
      1185038447,
      1186015804,
      1186094710,
      1187577686
    ),
  },
  // 1 start
  {
    id: 1185038447,
    type: "checkbox",
    label: "What type of garage door is it ?",
    options: what_type_garage_door_it(
      1188801855,
      1188968299,
      1190567983,
      1190636417,
      1190698431
    ),
  },
  {
    id: 1188801855,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1191089276, 1191110577, 1191123564),
  },
  {
    id: 1191089276,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1191110577,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1191123564,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1188968299,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1192327969, 1192355911, 1192367989),
  },
  {
    id: 1192327969,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1192355911,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1192367989,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1190567983,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1192452427, 1192509730, 1193647716),
  },
  {
    id: 1192452427,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1192509730,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1193647716,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1190698431,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1194571758, 1194768053, 1195129287),
  },
  {
    id: 1194571758,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1194768053,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1195129287,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1190636417,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1195147272, 1195530459, 1195741847),
  },
  {
    id: 1195147272,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1195530459,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1195741847,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },

  // 1 end

  // 2 - 3 start
  {
    id: 1186015804,
    type: "checkbox",
    options: questionCheckboxItem(1197111346, 1197996241),
  },
  {
    id: 1197111346,
    type: "checkbox",
    label: "What type of garage door is it ?",
    options: what_type_garage_door_it(
      1198671485,
      1198886522,
      1199304983,
      1200712244,
      1200895356
    ),
  },
  {
    id: 1198671485,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1201557883, 1202627355, 1202927354),
  },
  {
    id: 1201557883,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1202627355,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1202927354,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1198886522,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1203362292, 1204346359, 1204388174),
  },
  {
    id: 1203362292,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1204346359,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1204388174,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1199304983,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1204636658, 1205524237, 1205766320),
  },
  {
    id: 1204636658,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1205524237,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1205766320,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1200712244,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1206570414, 1207187575, 1207565879),
  },
  {
    id: 1206570414,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1207187575,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1207565879,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1200895356,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1207856768, 1208625947, 1209480972),
  },
  {
    id: 1207856768,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1208625947,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1209480972,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  // 2 - 3 end
  // 4 - 5 start
  {
    id: 1186094710,
    type: "checkbox",
    options: questionCheckboxItem(1209520462),
  },
  {
    id: 1209520462,
    type: "checkbox",
    label: "What type of garage door is it ?",
    options: what_type_garage_door_it(
      1210842244,
      1211157903,
      1211579625,
      1211821619,
      1212317784
    ),
  },
  {
    id: 1210842244,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1213494064, 1214006393, 1214811461),
  },
  {
    id: 1213494064,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1214006393,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1214811461,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1211157903,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1215648726, 1215666597, 1216681459),
  },
  {
    id: 1215648726,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1215666597,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1216681459,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1211579625,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1217106079, 1217575871, 1217881340),
  },
  {
    id: 1217106079,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1217575871,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1217881340,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1211821619,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1218378344, 1218431521, 1218621035),
  },
  {
    id: 1218378344,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1218431521,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1218621035,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1212317784,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1218987483, 1221481704, 1222031532),
  },
  {
    id: 1218987483,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1221481704,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1222031532,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  // 4 - 5 end
  // 6 or more start
  {
    id: 1187577686,
    type: "checkbox",
    options: questionCheckboxItem(1222387584),
  },
  {
    id: 1222387584,
    type: "checkbox",
    label: "What type of garage door is it ?",
    options: what_type_garage_door_it(
      1224166812,
      1224693968,
      1225456764,
      1225486502,
      1225792393
    ),
  },
  {
    id: 1224166812,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1226027579, 1226828367, 1226928826),
  },
  {
    id: 1226027579,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1226828367,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1226928826,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1224693968,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1226951943, 1227589653, 1227897893),
  },
  {
    id: 1226951943,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1227589653,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1227897893,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1225456764,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1229096173, 1229203987, 1230136583),
  },
  {
    id: 1229096173,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1229203987,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1230136583,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1225486502,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1230411667, 1231341059, 1232411032),
  },
  {
    id: 1230411667,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1231341059,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1232411032,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1225792393,
    type: "checkbox",
    label: "How do you open the garage door ?",
    options: how_do_you_the_garage_door(1233492133, 1234067683, 1234576066),
  },
  {
    id: 1233492133,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1234067683,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },
  {
    id: 1234576066,
    type: "checkbox",
    label: "Is the garage door already there ?",
    options: how_do_garage_door,
  },

  //  Retrofit drive end
  // Garage doors end
];

export default garageDoors;
