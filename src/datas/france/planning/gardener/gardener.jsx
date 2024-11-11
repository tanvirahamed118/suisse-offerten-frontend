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
    label: "Quels services devraient être fournis ?",
    options: [
      {
        id: 2446439750,
        label: "Entretien du jardin",
        des: "Par exemple, tondre la pelouse, tailler les haies, planter, désherber, etc.",
      },
      {
        id: 7720464244,
        label: "Entretien des arbres",
        des: "Par exemple, abattre ou élaguer des arbres, retirer des porte-greffes, etc.",
      },
      {
        id: 2195573758,
        label: "Conception de jardin",
        des: "Par exemple, réaménagement du jardin, pose de gazon, terrasses, espaces verts, clôtures, etc.",
      },
      {
        id: 1047842044,
        label: "Autre",
        credit: 8,
      },
    ],
  },

  // Gaden care
  {
    id: 2446439750,
    type: "checkbox",
    label: "S'agit-il d'une commande unique ou récurrente ?",
    options: [
      {
        id: 1049279012,
        label: "Unique",
        credit: 15,
      },
      {
        id: 1050245854,
        label: "Récurrente",
        credit: 25,
      },
    ],
  },
  {
    id: 1049279012,
    type: "checkbox",
    label: "Quels travaux faut-il réaliser ?",
    options: what_work_needs_done,
  },
  {
    id: 1050245854,
    type: "checkbox",
    label: "Quels travaux faut-il réaliser ?",
    options: what_work_needs_done,
  },
  // Gaden care

  // Tree care
  {
    id: 7720464244,
    type: "checkbox",
    label: "De quel type d’entretien d’arbre avez-vous besoin ?",
    options: [
      {
        id: 7413834370,
        label: "Raccourcir ou couper",
      },
      {
        id: 4649663332,
        label: "cas",
      },
      {
        id: 1055563698,
        label: "Retirer le porte-greffe",
        credit: 10,
      },
      {
        id: 1057316697,
        label: "Conseil / Evaluation",
        credit: 5,
      },
      {
        id: 1059605046,
        label: "Arbustes ou autres travaux de jardinage",
        credit: 15,
      },
      {
        id: 1060016865,
        label: "Autre",
        credit: 5,
      },
    ],
  },
  {
    id: 7413834370,
    type: "checkbox",
    label: "Combien y a-t-il d'arbres ?",
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
        label: "4 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 2009996397,
    type: "checkbox",
    label: "Quelle est la taille de l'arbre le plus grand ?",
    options: how_big_the_tree_one,
  },
  {
    id: 3775613421,
    type: "checkbox",
    label: "Quelle est la taille de l'arbre le plus grand ?",
    options: how_big_the_tree_one,
  },
  {
    id: 3174100457,
    type: "checkbox",
    label: "Quelle est la taille de l'arbre le plus grand ?",
    options: how_big_the_tree_one,
  },
  {
    id: 4356477230,
    type: "checkbox",
    label: "Quelle est la taille de l'arbre le plus grand ?",
    options: how_big_the_tree_one,
  },
  {
    id: 4649663332,
    type: "checkbox",
    label: "Combien y a-t-il d'arbres ?",
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
        label: "4 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 1067612524,
    type: "checkbox",
    label: "Quelle est la taille de l'arbre le plus grand ?",
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

  // Conception de jardin
  {
    id: 2195573758,
    type: "checkbox",
    label: "Quels types de travaux d'aménagement paysager sont nécessaires ?",
    options: [
      {
        id: 1076260145,
        label: "Semis de gazon / nouvelle pelouse",
      },
      {
        id: 4426550708,
        label: "terrasse",
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
        id: 1082529981,
        label: "Autre",
        credit: 5,
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
    label: "Quelle est la taille de l'arbre le plus grand ?",
    options: [
      {
        label: "Petite",
        des: "Jusqu'à 3 m2",
        credit: 10,
      },
      {
        label: "Moyen",
        des: "4 à 7 m2",
        credit: 15,
      },
      {
        label: "Grande",
        des: "8 m2 ou plus",
        credit: 20,
      },
    ],
  },
  {
    id: 1084026783,
    type: "checkbox",
    label: "Quelle est la taille de l'arbre le plus grand ?",
    options: [
      {
        label: "Petite",
        des: "Jusqu'à 3 m2",
        credit: 10,
      },
      {
        label: "Moyen",
        des: "4 à 7 m2",
        credit: 15,
      },
      {
        label: "Grande",
        des: "8 m2 ou plus",
        credit: 20,
      },
    ],
  },

  {
    id: 4426550708,
    type: "checkbox",
    label: "Quel type de travaux de terrasse est nécessaire ?",
    options: [
      {
        id: 9616148751,
        label: "Construire une nouvelle terrasse",
      },
      {
        label: "Réparer une terrasse existante",
        credit: 5,
      },
    ],
  },
  {
    id: 9616148751,
    type: "checkbox",
    label: "Quelle est la taille de l'arbre le plus grand ?",
    options: [
      {
        label: "Petite",
        des: "Jusqu'à 14 m²",
        credit: 10,
      },
      {
        label: "Moyen",
        des: "15 à 29 m²",
        credit: 15,
      },
      {
        label: "Grande",
        des: "30 à 59 m²",
        credit: 20,
      },
      {
        label: "Très grand",
        des: "60 m² ou plus",
        credit: 35,
      },
    ],
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
        label: "Installer uniquement la porte",
      },
      {
        id: 1087358787,
        label: "Installer une clôture et un portail",
      },
      {
        id: 1088253807,
        label: "Réparation",
        credit: 8,
      },
    ],
  },
  {
    id: 1085611170,
    type: "checkbox",
    label: "Combien de mètres de clôture environ représente-t-il ?",
    options: [
      {
        label: "Jusqu'à 9 m²",
        credit: 10,
      },
      {
        label: "10 à 24 m²",
        credit: 20,
      },
      {
        label: "25 à 34 m²",
        credit: 25,
      },
      {
        label: "35 m² ou plus",
        credit: 35,
      },
    ],
  },
  {
    id: 1087235190,
    type: "checkbox",
    label: "Combien de portails faut-il installer ?",
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
        label: "3 ou plus",
        credit: 30,
      },
    ],
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
        label: "Jusqu'à 9 m²",
        credit: 15,
      },
      {
        label: "10 à 24 m²",
        credit: 25,
      },
      {
        label: "25 à 34 m²",
        credit: 30,
      },
      {
        label: "35 m² ou plus",
        credit: 35,
      },
    ],
  },
  // Conception de jardin

  // gerden seating area
  {
    id: 1078402200,
    type: "checkbox",
    label: "Quels travaux sont nécessaires pour le Coin salon de jardin ?",
    options: [
      {
        id: 1093422821,
        label: "Create a new Coin salon de jardin",
      },
      {
        label: "Rénover ou agrandir le Coin salon de jardin existant",
        credit: 40,
      },
      {
        label: "Repair existing Coin salon de jardin",
        credit: 15,
      },
    ],
  },
  {
    id: 1093422821,
    type: "checkbox",
    label: "Quelle est la taille de l'arbre le plus grand ?",
    options: [
      {
        label: "Petite",
        des: "Jusqu'à 14 m²",
        credit: 10,
      },
      {
        label: "Moyen",
        des: "15 à 29 m²",
        credit: 15,
      },
      {
        label: "Grande",
        des: "30 à 59 m²",
        credit: 20,
      },
      {
        label: "Très grand",
        des: "60 m² ou plus",
        credit: 35,
      },
    ],
  },
  // gerden seating area

  // Conception de jardin
  {
    id: 1079410883,
    type: "checkbox",
    label:
      "Quelle est la grandeur de la zone pour laquelle le jardin doit être conçu ?",
    options: how_large_garden_designed,
  },

  // Autre
  input(1082529981),
  // Autre
];

export default gardener;
