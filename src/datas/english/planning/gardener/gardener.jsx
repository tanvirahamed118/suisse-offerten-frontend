import {
  what_work_needs_done,
  how_big_the_tree_one,
  is_gate_be_installed_already,
  how_large_garden_designed,
  input,
} from "../../reuse-data";

const gardener = [
  {
    id: 8709238135,
    type: "checkbox",
    label: "What services should be provided ?",
    options: [
      {
        id: 2446439750,
        label: "Garden care",
        des: "E.g. mowing lawns, trimming hedges, planting, weeding, etc.",
      },
      {
        id: 7720464244,
        label: "Tree care",
        des: "E.g. felling or trimming trees, removing rootstocks, etc.",
      },
      {
        id: 2195573758,
        label: "Garden design",
        des: "E.g. replanning the garden, laying turf, terraces, garden areas, fences etc.",
      },
      {
        id: 1047842044,
        label: "Other",
        credit: 8,
      },
    ],
  },

  // Gaden care
  {
    id: 2446439750,
    type: "checkbox",
    label: "Is this a one-time or recurring order ?",
    options: [
      {
        id: 1049279012,
        label: "Unique",
        credit: 15,
      },
      {
        id: 1050245854,
        label: "Recurring",
        credit: 25,
      },
    ],
  },
  {
    id: 1049279012,
    type: "checkbox",
    label: "What work needs to be done ?",
    options: what_work_needs_done,
  },
  {
    id: 1050245854,
    type: "checkbox",
    label: "What work needs to be done ?",
    options: what_work_needs_done,
  },
  // Gaden care

  // Tree care
  {
    id: 7720464244,
    type: "checkbox",
    label: "What type of tree care do you need ?",
    options: [
      {
        id: 7413834370,
        label: "Shorten or cut",
      },
      {
        id: 4649663332,
        label: "cases",
      },
      {
        id: 1055563698,
        label: "Remove rootstock",
        credit: 10,
      },
      {
        id: 1057316697,
        label: "Advice / Assessment",
        credit: 5,
      },
      {
        id: 1059605046,
        label: "Shrubs or other gardening work",
        credit: 15,
      },
      {
        id: 1060016865,
        label: "Other",
        credit: 5,
      },
    ],
  },
  {
    id: 7413834370,
    type: "checkbox",
    label: "How many trees are there ?",
    options: [
      {
        id: 2009996397,
        label: "1",
        credit: 5,
      },
      {
        id: 3775613421,
        label: "2",
        credit: 10,
      },
      {
        id: 3174100457,
        label: "3",
        credit: 15,
      },
      {
        id: 4356477230,
        label: "4 or more",
        credit: 25,
      },
    ],
  },
  {
    id: 2009996397,
    type: "checkbox",
    label: "How big is the tallest tree ?",
    options: how_big_the_tree_one,
  },
  {
    id: 3775613421,
    type: "checkbox",
    label: "How big is the tallest tree ?",
    options: how_big_the_tree_one,
  },
  {
    id: 3174100457,
    type: "checkbox",
    label: "How big is the tallest tree ?",
    options: how_big_the_tree_one,
  },
  {
    id: 4356477230,
    type: "checkbox",
    label: "How big is the tallest tree ?",
    options: how_big_the_tree_one,
  },
  {
    id: 4649663332,
    type: "checkbox",
    label: "How many trees are there ?",
    options: [
      {
        id: 1067612524,
        label: "1",
        credit: 5,
      },
      {
        id: 1071292174,
        label: "2",
        credit: 10,
      },
      {
        id: 1075114987,
        label: "3",
        credit: 15,
      },
      {
        id: 1076154642,
        label: "4 or more",
        credit: 25,
      },
    ],
  },
  {
    id: 1067612524,
    type: "checkbox",
    label: "How big is the tallest tree ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1071292174,
    type: "checkbox",
    label: "How big is the tallest tree ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1075114987,
    type: "checkbox",
    label: "How big is the tallest tree ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1076154642,
    type: "checkbox",
    label: "How big is the tallest tree ?",
    options: how_big_the_tree_one,
  },

  // Tree care

  // Garden design
  {
    id: 2195573758,
    type: "checkbox",
    label: "What type of landscaping work is required ?",
    options: [
      {
        id: 1076260145,
        label: "Sowing grass / new lawn",
      },
      {
        id: 4426550708,
        label: "terrace",
      },
      {
        id: 1076946635,
        label: "Fences",
      },
      {
        id: 1078402200,
        label: "Garden seating area",
      },
      {
        id: 1079410883,
        label: "Garden design",
      },
      {
        id: 1082529981,
        label: "Other",
        credit: 5,
      },
    ],
  },
  {
    id: 1076260145,
    type: "checkbox",
    label: "What type of turf should be laid ?",
    options: [
      {
        id: 1082668570,
        label: "Natural grass",
      },
      {
        id: 1084026783,
        label: "Artificial turf",
      },
    ],
  },
  {
    id: 1082668570,
    type: "checkbox",
    label: "How big is the tallest tree ?",
    options: [
      {
        label: "Small",
        des: "Up to 3 m",
        credit: 10,
      },
      {
        label: "Medium",
        des: "4 to 7 m",
        credit: 15,
      },
      {
        label: "Large",
        des: "8 m or more",
        credit: 20,
      },
    ],
  },
  {
    id: 1084026783,
    type: "checkbox",
    label: "How big is the tallest tree ?",
    options: [
      {
        label: "Small",
        des: "Up to 3 m",
        credit: 10,
      },
      {
        label: "Medium",
        des: "4 to 7 m",
        credit: 15,
      },
      {
        label: "Large",
        des: "8 m or more",
        credit: 20,
      },
    ],
  },

  {
    id: 4426550708,
    type: "checkbox",
    label: "What type of patio work is needed ?",
    options: [
      {
        id: 9616148751,
        label: "Building a new terrace",
      },
      {
        label: "Repair existing terrace",
        credit: 5,
      },
    ],
  },
  {
    id: 9616148751,
    type: "checkbox",
    label: "How big is the tallest tree ?",
    options: [
      {
        label: "Small",
        des: "Up to 14 m²",
        credit: 10,
      },
      {
        label: "Medium",
        des: "15 to 29 m²",
        credit: 15,
      },
      {
        label: "Large",
        des: "30 to 59 m²",
        credit: 20,
      },
      {
        label: "Very Large",
        des: "60 m² or more",
        credit: 35,
      },
    ],
  },
  // fences
  {
    id: 1076946635,
    type: "checkbox",
    label: "What type of fencing work is required ?",
    options: [
      {
        id: 1085611170,
        label: "Install fence",
      },
      {
        id: 1087235190,
        label: "Only install gate",
      },
      {
        id: 1087358787,
        label: "Install fence and gate",
      },
      {
        id: 1088253807,
        label: "repair",
        credit: 8,
      },
    ],
  },
  {
    id: 1085611170,
    type: "checkbox",
    label: "Approximately how many meters of fence is it ?",
    options: [
      {
        label: "Up to 9 m",
        credit: 10,
      },
      {
        label: "10 to 24 m",
        credit: 20,
      },
      {
        label: "25 to 34 m",
        credit: 25,
      },
      {
        label: "35 m or more",
        credit: 35,
      },
    ],
  },
  {
    id: 1087235190,
    type: "checkbox",
    label: "How many gates need to be installed ?",
    options: [
      {
        id: 1091891480,
        label: "1",
        credit: 10,
      },
      {
        id: 1091956731,
        label: "2",
        credit: 20,
      },
      {
        id: 1092426714,
        label: "3 or more",
        credit: 30,
      },
    ],
  },
  {
    id: 1091891480,
    type: "checkbox",
    label: "Is the gate to be installed already there ?",
    options: is_gate_be_installed_already,
  },
  {
    id: 1091956731,
    type: "checkbox",
    label: "Is the gate to be installed already there ?",
    options: is_gate_be_installed_already,
  },
  {
    id: 1092426714,
    type: "checkbox",
    label: "Is the gate to be installed already there ?",
    options: is_gate_be_installed_already,
  },

  {
    id: 1087358787,
    type: "checkbox",
    label: "Approximately how many meters of fence is it ?",
    options: [
      {
        label: "Up to 9 m",
        credit: 15,
      },
      {
        label: "10 to 24 m",
        credit: 25,
      },
      {
        label: "25 to 34 m",
        credit: 30,
      },
      {
        label: "35 m or more",
        credit: 35,
      },
    ],
  },
  // Garden design

  // gerden seating area
  {
    id: 1078402200,
    type: "checkbox",
    label: "What work is needed for the garden seating area ?",
    options: [
      {
        id: 1093422821,
        label: "Create a new garden seating area",
      },
      {
        label: "Remodel or extend existing garden seating area",
        credit: 40,
      },
      {
        label: "Repair existing garden seating area",
        credit: 15,
      },
    ],
  },
  {
    id: 1093422821,
    type: "checkbox",
    label: "How big is the tallest tree ?",
    options: [
      {
        label: "Small",
        des: "Up to 14 m²",
        credit: 10,
      },
      {
        label: "Medium",
        des: "15 to 29 m²",
        credit: 15,
      },
      {
        label: "Large",
        des: "30 to 59 m²",
        credit: 20,
      },
      {
        label: "Very large",
        des: "60 m² or more",
        credit: 35,
      },
    ],
  },
  // gerden seating area

  // garden design
  {
    id: 1079410883,
    type: "checkbox",
    label: "How large is the area for which the garden should be designed ?",
    options: how_large_garden_designed,
  },

  // other
  input(1082529981),
  // other
];

export default gardener;
