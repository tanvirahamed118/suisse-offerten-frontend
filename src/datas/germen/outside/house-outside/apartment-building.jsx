import {
  how_many_sides_the_building_should,
  How_many_the_building_have,
  how_long_scaffolding_needed,
} from "../../reuse-data";

const apartmentBuilding = [
  {
    id: 170366635,
    type: "checkbox",
    label: "Wofür wird das Gerüst benötigt ?",
    options: [
      {
        id: 688245060,
        label: "Nur Fassade",
      },
      {
        id: 139820526,
        label: "Nur Dach",
      },
      {
        id: 365063908,
        label: "Fassade und Dach",
      },
      {
        id: 620264197,
        label: "Andere",
      },
    ],
  },
  // only facade start
  {
    id: 688245060,
    type: "checkbox",
    label: "Wie viele Gebäudeseiten sollen durch das Gerüst zugänglich sein ?",
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
    label: "Wie viele Stockwerke hat das Gebäude ?",
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
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 815261701,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 445107708,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 856982563,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 307069820,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },

  //   1 end
  // 2 start
  {
    id: 364088778,
    type: "checkbox",
    label: "Wie viele Stockwerke hat das Gebäude ?",
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
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 381834432,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 815919286,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 698461393,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 523948138,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  // 2 end
  // 3 start
  {
    id: 917890565,
    type: "checkbox",
    label: "Wie viele Stockwerke hat das Gebäude ?",
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
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 458816037,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 700578104,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 595094491,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 988240659,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  // 3 end
  // all arround
  {
    id: 912398338,
    type: "checkbox",
    label: "Wie viele Stockwerke hat das Gebäude ?",
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
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 399759177,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 356134856,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 792113148,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 305892702,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  // all arround
  // only facade end
  // root only start
  {
    id: 139820526,
    type: "checkbox",
    label: "Wie viele Gebäudeseiten sollen durch das Gerüst zugänglich sein ?",
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
    label: "Wie viele Stockwerke hat das Gebäude ?",
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
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 815261701,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 445107708,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 856982563,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 307069820,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },

  //   1 end
  // 2 start
  {
    id: 364088778,
    type: "checkbox",
    label: "Wie viele Stockwerke hat das Gebäude ?",
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
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 381834432,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 815919286,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 698461393,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 523948138,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  // 2 end
  // 3 start
  {
    id: 917890565,
    type: "checkbox",
    label: "Wie viele Stockwerke hat das Gebäude ?",
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
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 458816037,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 700578104,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 595094491,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 988240659,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  // 3 end
  // all arround
  {
    id: 912398338,
    type: "checkbox",
    label: "Wie viele Stockwerke hat das Gebäude ?",
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
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 399759177,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 356134856,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 792113148,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 305892702,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  // root only end
  // facade and root
  {
    id: 365063908,
    type: "checkbox",
    label: "Wie viele Gebäudeseiten sollen durch das Gerüst zugänglich sein ?",
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
    label: "Wie viele Stockwerke hat das Gebäude ?",
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
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 815261701,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 445107708,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 856982563,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 307069820,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },

  //   1 end
  // 2 start
  {
    id: 220450825,
    type: "checkbox",
    label: "Wie viele Stockwerke hat das Gebäude ?",
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
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 381834432,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 815919286,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 698461393,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 523948138,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  // 2 end
  // 3 start
  {
    id: 220450825,
    type: "checkbox",
    label: "Wie viele Stockwerke hat das Gebäude ?",
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
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 458816037,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 700578104,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 595094491,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 988240659,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  // 3 end
  // all arround
  {
    id: 220450825,
    type: "checkbox",
    label: "Wie viele Stockwerke hat das Gebäude ?",
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
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 399759177,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 356134856,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 792113148,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  {
    id: 305892702,
    type: "checkbox",
    label: "Wie lange wird das Gerüst benötigt ?",
    options: how_long_scaffolding_needed,
  },
  // facade and root
];

export default apartmentBuilding;
