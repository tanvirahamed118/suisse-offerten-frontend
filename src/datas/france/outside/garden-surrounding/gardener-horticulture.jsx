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
  How_large_is_to_be_covered,
} from "../../reuse-data";

const gardenerHorteulture = [
  {
    id: 1031399466,
    type: "checkbox",
    label: "Quels services devraient être fournis ?",
    options: [
      {
        id: 1042583057,
        label: "Entretien du jardin",
        des: "Par exemple, tondre la pelouse, tailler les haies, planter, désherber, etc.",
      },
      {
        id: 1043135631,
        label: "Entretien des arbres",
        des: "Par exemple, abattre ou élaguer des arbres, retirer des porte-greffes, etc.",
      },
      {
        id: 1047134931,
        label: "Conception de jardin",
        des: "Par exemple, réaménagement du jardin, pose de gazon, terrasses, espaces verts, clôtures, etc.",
      },
      {
        id: 1047518475,
        label: "Clôtures, portails, brise-vue",
      },
      {
        id: 1047842044,
        label: "Autre",
      },
    ],
  },

  // Gaden care
  {
    id: 1042583057,
    type: "checkbox",
    label: "S'agit-il d'une commande unique ou récurrente ?",
    options: [
      {
        id: 1049279012,
        label: "Unique",
        credit: 3,
      },
      {
        id: 1050245854,
        label: "Récurrente",
        credit: 6,
      },
    ],
  },
  {
    id: 1049279012,
    type: "multibox",
    label: "Quels travaux faut-il réaliser ?",
    options: what_work_needs_done,
  },
  {
    id: 1050245854,
    type: "multibox",
    label: "Quels travaux faut-il réaliser ?",
    options: what_work_needs_done,
  },

  // Gaden care

  // Tree care
  {
    id: 1043135631,
    type: "checkbox",
    label: "De quel type d’entretien d’arbre avez-vous besoin ?",
    options: [
      {
        id: 1050588928,
        label: "Raccourcir ou couper",
      },
      {
        id: 1051700644,
        label: "Cas",
      },
      {
        id: 1055563698,
        label: "Retirer le porte-greffe",
        credit: 3,
      },
      {
        id: 1057316697,
        label: "Conseil / Evaluation",
        credit: 3,
      },
      {
        id: 1059605046,
        label: "Arbustes ou autres travaux de jardinage",
        credit: 6,
      },
      {
        id: 1060016865,
        label: "Autre",
        credit: 3,
      },
    ],
  },
  {
    id: 1050588928,
    type: "checkbox",
    label: "Combien y a-t-il d'arbres ?",
    options: how_trees_are_here(1062502204, 1063769131, 1065965018, 1066140720),
  },
  {
    id: 1062502204,
    type: "checkbox",
    label: "Quelle est la taille de l'arbre ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1063769131,
    type: "checkbox",
    label: "Quelle est la taille de l'arbre le plus grand ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1065965018,
    type: "checkbox",
    label: "Quelle est la taille de l'arbre le plus grand ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1066140720,
    type: "checkbox",

    label: "Quelle est la taille de l'arbre le plus grand ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1051700644,
    type: "checkbox",
    label: "Combien y a-t-il d'arbres ?",
    options: how_trees_are_here(1067612524, 1071292174, 1075114987, 1076154642),
  },
  {
    id: 1067612524,
    type: "checkbox",
    label: "Quelle est la taille de l'arbre ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1071292174,
    type: "checkbox",
    label: "Quelle est la taille de l'arbre le plus grand ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1075114987,
    type: "checkbox",
    label: "Quelle est la taille de l'arbre le plus grand ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1076154642,
    type: "checkbox",
    label: "Quelle est la taille de l'arbre le plus grand ?",
    options: how_big_the_tree_one,
  },

  // Tree care

  // Garden design
  {
    id: 1047134931,
    type: "checkbox",
    label: "Quels types de travaux d'aménagement paysager sont nécessaires ?",
    options: [
      {
        id: 1076260145,
        label: "Semis de gazon / nouvelle pelouse",
      },
      {
        id: 1076459992,
        label: "Terrasse",
      },
      {
        id: 1076946635,
        label: "Clôtures",
      },
      {
        id: 1078402200,
        label: "Coin salon de jardin",
      },
      {
        id: 1079410883,
        label: "Conception de jardin",
      },
      {
        label: "Autre",
        credit: 15,
      },
    ],
  },
  {
    id: 1076260145,
    type: "checkbox",
    label: "Quel type de gazon faut-il poser ?",
    options: [
      {
        id: 1082668570,
        label: "Gazon naturel",
      },
      {
        id: 1084026783,
        label: "Gazon artificiel",
      },
    ],
  },
  {
    id: 1082668570,
    type: "checkbox",
    label: "Quelle est la taille de la pelouse ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1084026783,
    type: "checkbox",
    label: "Quelle est la taille de la pelouse ?",
    options: how_big_the_tree_one,
  },

  {
    id: 1076459992,
    type: "checkbox",
    label: "Quel type de travaux de terrasse est nécessaire ?",
    options: [
      {
        id: 1085596934,
        label: "Construire une nouvelle terrasse",
      },
      {
        label: "Réparer une terrasse existante",
        credit: 8,
      },
    ],
  },
  {
    id: 1085596934,
    type: "checkbox",
    label: "Quelle est la taille de la zone à couvrir ?",
    options: How_large_is_to_be_covered,
  },
  // fences
  {
    id: 1076946635,
    type: "checkbox",
    label: "Quel type de travaux de clôture sont nécessaires ?",
    options: [
      {
        id: 1085611170,
        label: "Installer une clôture",
      },
      {
        id: 1087235190,
        label: "Only install gate",
      },
      {
        id: 1087358787,
        label: "Installer une clôture et un portail",
      },
      {
        id: 1088253807,
        label: "repair",
        credit: 7,
      },
    ],
  },
  {
    id: 1085611170,
    type: "checkbox",
    label: "Environ combien de portails faut-il installer ?",
    options: approximately_how_many_meters_fence,
  },
  {
    id: 1087235190,
    type: "checkbox",
    label: "Combien de portails faut-il installer ?",
    options: how_many_need_be_installed(1091891480, 1091956731, 1092426714),
  },
  {
    id: 1091891480,
    type: "checkbox",
    label: "Le portail à installer est-il déjà là ?",
    options: is_gate_be_installed_already,
  },
  {
    id: 1091956731,
    type: "checkbox",
    label: "Le portail à installer est-il déjà là ?",
    options: is_gate_be_installed_already,
  },
  {
    id: 1092426714,
    type: "checkbox",
    label: "Le portail à installer est-il déjà là ?",
    options: is_gate_be_installed_already,
  },

  {
    id: 1087358787,
    type: "checkbox",
    label: "Combien de mètres de clôture environ représente-t-il ?",
    options: [
      {
        id: 3109247811,
        label: "Up to 9 m",
        credit: 8,
      },
      {
        id: 1774524662,
        label: "10 to 24 m",
        credit: 13,
      },
      {
        id: 9082473900,
        label: "25 to 34 m",
        credit: 18,
      },
      {
        id: 8152952950,
        label: "35 m or more",
        credit: 25,
      },
    ],
  },
  {
    id: 3109247811,
    type: "checkbox",
    label: "How many gates need to be installed ?",
    options: [
      {
        label: "1",
        credit: 5,
      },
      {
        label: "2",
        credit: 10,
      },
      {
        label: "3 or more",
        credit: 18,
      },
    ],
  },
  {
    id: 1774524662,
    type: "checkbox",
    label: "How many gates need to be installed ?",
    options: [
      {
        label: "1",
        credit: 5,
      },
      {
        label: "2",
        credit: 10,
      },
      {
        label: "3 or more",
        credit: 18,
      },
    ],
  },
  {
    id: 9082473900,
    type: "checkbox",
    label: "How many gates need to be installed ?",
    options: [
      {
        label: "1",
        credit: 5,
      },
      {
        label: "2",
        credit: 10,
      },
      {
        label: "3 or more",
        credit: 18,
      },
    ],
  },
  {
    id: 8152952950,
    type: "checkbox",
    label: "How many gates need to be installed ?",
    options: [
      {
        label: "1",
        credit: 5,
      },
      {
        label: "2",
        credit: 10,
      },
      {
        label: "3 or more",
        credit: 18,
      },
    ],
  },
  // Garden design

  // gerden seating area
  {
    id: 1078402200,
    type: "checkbox",
    label: "Quels travaux sont nécessaires pour le coin salon de jardin ?",
    options: [
      {
        id: 1093422821,
        label: "Créer un nouveau coin salon de jardin",
      },
      {
        label: "Rénover ou agrandir un espace de jardin existant",
        credit: 20,
      },
      {
        label: "Réparer le coin salon de jardin existant",
        credit: 15,
      },
    ],
  },
  {
    id: 1093422821,
    type: "checkbox",
    label: "Quelle doit être la taille de la zone de salon de jardin ?",
    options: how_big_the_tree_tow,
  },
  // gerden seating area

  // garden design
  {
    id: 1079410883,
    type: "checkbox",
    label:
      "Quelle est la taille de la zone pour laquelle le jardin doit être conçu ?",
    options: how_large_garden_designed,
  },

  // Autre
  input(1082529981),
  // Autre
];

export default gardenerHorteulture;
