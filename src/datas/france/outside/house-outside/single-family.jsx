import {
  how_many_sides_the_building_should,
  How_many_the_building_have,
  how_long_scaffolding_needed,
} from "../../reuse-data";

const singleFamily = [
  {
    id: 819970984,
    type: "checkbox",
    label: "A quoi sert l'échafaudage ?",
    options: [
      {
        id: 688245060,
        label: "Façade uniquement",
      },
      {
        id: 139820526,
        label: "Toiture uniquement",
      },
      {
        id: 365063908,
        label: "Façade et toiture",
      },
      {
        id: 620264197,
        label: "Autre",
        credit: 15,
      },
    ],
  },
  // only facade start
  {
    id: 688245060,
    type: "checkbox",
    label:
      "À combien de côtés du bâtiment l'échafaudage doit-il permettre l'accès ?",
    options: how_many_sides_the_building_should(
      220450825,
      364088778,
      917890565,
      912398338,
      5362038862
    ),
  },
  //   1 start
  {
    id: 220450825,
    type: "checkbox",
    label: "Combien d'étages compte le bâtiment ?",
    options: How_many_the_building_have(
      418960734,
      815261701,
      445107708,
      856982563,
      307069820
    ),
  },
  {
    id: 418960734,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 815261701,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 445107708,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 856982563,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 307069820,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },

  //   1 end
  // 2 start
  {
    id: 364088778,
    type: "checkbox",
    label: "Combien d'étages compte le bâtiment ?",
    options: How_many_the_building_have(
      641537651,
      381834432,
      815919286,
      698461393,
      523948138
    ),
  },
  {
    id: 641537651,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 381834432,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 815919286,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 698461393,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 523948138,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  // 2 end
  // 3 start
  {
    id: 917890565,
    type: "checkbox",
    label: "Combien d'étages compte le bâtiment ?",
    options: How_many_the_building_have(
      985524057,
      458816037,
      700578104,
      595094491,
      988240659
    ),
  },
  {
    id: 985524057,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 458816037,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 700578104,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 595094491,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 988240659,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  // 3 end
  // 4 start
  {
    id: 912398338,
    type: "checkbox",
    label: "Combien d'étages compte le bâtiment ?",
    options: How_many_the_building_have(
      552412836,
      399759177,
      356134856,
      792113148,
      305892702
    ),
  },
  {
    id: 552412836,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 399759177,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 356134856,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 792113148,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 305892702,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  // 4 end
  // all arround start
  {
    id: 5362038862,
    type: "checkbox",
    label: "Combien d'étages compte le bâtiment ?",
    options: How_many_the_building_have(
      552412836,
      399759177,
      356134856,
      792113148,
      305892702
    ),
  },
  {
    id: 552412836,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 399759177,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 356134856,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 792113148,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 305892702,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  // all arround
  // only facade end
  // root only start
  {
    id: 139820526,
    type: "checkbox",
    label: "De quel type de toit s'agit-il ?",
    options: how_many_sides_the_building_should(
      220450825,
      364088778,
      917890565,
      912398338
    ),
  },
  //   1 start
  {
    id: 220450825,
    type: "checkbox",
    label: "Combien d'étages compte le bâtiment ?",
    options: How_many_the_building_have(
      418960734,
      815261701,
      445107708,
      856982563,
      307069820
    ),
  },
  {
    id: 418960734,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 815261701,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 445107708,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 856982563,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 307069820,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },

  //   1 end
  // 2 start
  {
    id: 364088778,
    type: "checkbox",
    label: "Combien d'étages compte le bâtiment ?",
    options: How_many_the_building_have(
      641537651,
      381834432,
      815919286,
      698461393,
      523948138
    ),
  },
  {
    id: 641537651,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 381834432,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 815919286,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 698461393,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 523948138,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  // 2 end
  // 3 start
  {
    id: 917890565,
    type: "checkbox",
    label: "Combien d'étages compte le bâtiment ?",
    options: How_many_the_building_have(
      985524057,
      458816037,
      700578104,
      595094491,
      988240659
    ),
  },
  {
    id: 985524057,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 458816037,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 700578104,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 595094491,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 988240659,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  // 3 end
  // all arround
  {
    id: 912398338,
    type: "checkbox",
    label: "Combien d'étages compte le bâtiment ?",
    options: How_many_the_building_have(
      552412836,
      399759177,
      356134856,
      792113148,
      305892702
    ),
  },
  {
    id: 552412836,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 399759177,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 356134856,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 792113148,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 305892702,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  // root only end
  // facade and root
  {
    id: 365063908,
    type: "checkbox",
    label: "De quel type de toit s'agit-il ?",
    options: how_many_sides_the_building_should(
      220450825,
      364088778,
      917890565,
      912398338
    ),
  },
  //   1 start
  {
    id: 220450825,
    type: "checkbox",
    label: "Combien d'étages compte le bâtiment ?",
    options: How_many_the_building_have(
      418960734,
      815261701,
      445107708,
      856982563,
      307069820
    ),
  },
  {
    id: 418960734,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 815261701,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 445107708,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 856982563,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 307069820,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },

  //   1 end
  // 2 start
  {
    id: 220450825,
    type: "checkbox",
    label: "Combien d'étages compte le bâtiment ?",
    options: How_many_the_building_have(
      641537651,
      381834432,
      815919286,
      698461393,
      523948138
    ),
  },
  {
    id: 641537651,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 381834432,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 815919286,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 698461393,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 523948138,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  // 2 end
  // 3 start
  {
    id: 220450825,
    type: "checkbox",
    label: "Combien d'étages compte le bâtiment ?",
    options: How_many_the_building_have(
      985524057,
      458816037,
      700578104,
      595094491,
      988240659
    ),
  },
  {
    id: 985524057,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 458816037,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 700578104,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 595094491,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 988240659,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  // 3 end
  // all arround
  {
    id: 220450825,
    type: "checkbox",
    label: "Combien d'étages compte le bâtiment ?",
    options: How_many_the_building_have(
      552412836,
      399759177,
      356134856,
      792113148,
      305892702
    ),
  },
  {
    id: 552412836,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 399759177,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 356134856,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 792113148,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 305892702,
    type: "checkbox",
    label: "Combien de temps l'échafaudage sera-t-il nécessaire ?",
    options: how_long_scaffolding_needed,
  },
  // facade and root
];

export default singleFamily;
