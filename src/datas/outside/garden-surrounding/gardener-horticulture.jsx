import {
  what_work_needs_done,
  how_trees_are_here,
  how_big_the_tree_one,
  approximately_how_many_meters_fence,
  how_many_need_be_installed,
  is_gate_be_installed_already,
  how_large_garden_designed,
  how_big_the_tree_tow,
  input,
} from "../../reuse-data";

const gardenerHorteulture = [
  {
    id: 1031399466,
    type: "checkbox",
    label: "What services should be provided ?",
    options: [
      {
        id: 1042583057,
        label: "Garden care",
        des: "E.g. mowing lawns, trimming hedges, planting, weeding, etc.",
      },
      {
        id: 1043135631,
        label: "Tree care",
        des: "E.g. felling or trimming trees, removing rootstocks, etc.",
      },
      {
        id: 1047134931,
        label: "Garden design",
        des: "E.g. replanning the garden, laying turf, terraces, garden areas, fences etc.",
      },
      {
        id: 1047518475,
        label: "Fences, gates, privacy screens",
      },
      {
        id: 1047842044,
        label: "Other",
      },
    ],
  },

  // Gaden care
  {
    id: 1042583057,
    type: "checkbox",
    label: "Is this a one-time or recurring order ?",
    options: [
      {
        id: 1049279012,
        label: "Unique",
      },
      {
        id: 1050245854,
        label: "Recurring",
      },
    ],
  },
  {
    id: 1049279012,
    type: "multibox",
    label: "What work needs to be done ?",
    options: what_work_needs_done,
  },
  {
    id: 1050245854,
    type: "multibox",
    label: "What work needs to be done ?",
    options: what_work_needs_done,
  },

  // Gaden care

  // Tree care
  {
    id: 1043135631,
    type: "checkbox",
    label: "What type of tree care do you need ?",
    options: [
      {
        id: 1050588928,
        label: "Shorten or cut",
      },
      {
        id: 1051700644,
        label: "cases",
      },
      {
        id: 1055563698,
        label: "Remove rootstock",
      },
      {
        id: 1057316697,
        label: "Advice / Assessment",
      },
      {
        id: 1059605046,
        label: "Shrubs or other gardening work",
      },
      {
        id: 1060016865,
        label: "Other",
      },
    ],
  },
  {
    id: 1050588928,
    type: "checkbox",
    label: "How many trees are there ?",
    options: how_trees_are_here(1062502204, 1063769131, 1065965018, 1066140720),
  },
  {
    id: 1062502204,
    type: "checkbox",

    label: "How big is the tree ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1063769131,
    type: "checkbox",

    label: "How big is the tree ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1065965018,
    type: "checkbox",

    label: "How big is the tree ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1066140720,
    type: "checkbox",

    label: "How big is the tree ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1051700644,
    type: "checkbox",
    label: "How many trees are there ?",
    options: how_trees_are_here(1067612524, 1071292174, 1075114987, 1076154642),
  },
  {
    id: 1067612524,
    type: "checkbox",
    label: "How big is the tree ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1071292174,
    type: "checkbox",
    label: "How big is the tree ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1075114987,
    type: "checkbox",
    label: "How big is the tree ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1076154642,
    type: "checkbox",
    label: "How big is the tree ?",
    options: how_big_the_tree_one,
  },

  // Tree care

  // Garden design
  {
    id: 1047134931,
    type: "checkbox",
    label: "What type of landscaping work is required ?",
    options: [
      {
        id: 1076260145,
        label: "Sowing grass / new lawn",
      },
      {
        id: 1076459992,
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
    label: "How big is the tree ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1084026783,
    type: "checkbox",
    label: "How big is the tree ?",
    options: how_big_the_tree_one,
  },

  {
    id: 1076459992,
    type: "checkbox",
    label: "What type of patio work is needed ?",
    options: [
      {
        id: 1085596934,
        label: "Building a new terrace",
      },
      {
        label: "Repair existing terrace",
      },
    ],
  },
  {
    id: 1085596934,
    type: "checkbox",
    label: "How big is the tree ?",
    options: how_big_the_tree_one,
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
      },
    ],
  },
  {
    id: 1085611170,
    type: "checkbox",
    label: "Approximately how many meters of fence is it ?",
    options: approximately_how_many_meters_fence,
  },
  {
    id: 1087235190,
    type: "checkbox",
    label: "How many gates need to be installed ?",
    options: how_many_need_be_installed(1091891480, 1091956731, 1092426714),
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
    options: approximately_how_many_meters_fence,
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
      },
      {
        label: "Repair existing garden seating area",
      },
    ],
  },
  {
    id: 1093422821,
    type: "checkbox",
    label: "How big is the tree ?",
    options: how_big_the_tree_tow,
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

export default gardenerHorteulture;
