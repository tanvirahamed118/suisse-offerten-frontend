import { how_large_is_approximately } from "../../reuse-data";

const bricklayer = [
  {
    id: 809068343,
    type: "multibox",
    mainId: 981359683,
    label: "Que nécessite un service ?",
    options: [
      {
        label: "Mur",
      },
      {
        label: "Floor",
      },
      {
        label: "Fenêtre / Porte",
      },
      {
        label: "façade",
      },
      {
        label: "Balcon / Jardin d'hiver",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 981359683,
    type: "multibox",
    mainId: 166208888,
    label: "Que faut-il faire ?",
    options: [
      {
        label: "Coulée / bétonnage",
      },
      {
        label: "Abrasion / Plâtre",
      },
      {
        label: "Articulations",
      },
      {
        label: "Reconstruire",
      },
      {
        label: "Démolition / percée",
      },
      {
        label: "Percer",
      },
      {
        label: "réparation",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 166208888,
    type: "checkbox",
    label: "Devez-vous apporter vos propres matériaux de construction ?",
    options: [
      {
        id: 881792098,
        label: "Oui",
      },
      {
        id: 286160689,
        label: "Non",
      },
      {
        id: 575869854,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 881792098,
    type: "checkbox",
    label: "Quelle est la taille approximative de la zone touchée ?",
    options: how_large_is_approximately,
  },
  {
    id: 286160689,
    type: "checkbox",
    label: "Quelle est la taille approximative de la zone touchée ?",
    options: how_large_is_approximately,
  },
  {
    id: 575869854,
    type: "checkbox",
    label: "Quelle est la taille approximative de la zone touchée ?",
    options: how_large_is_approximately,
  },
];

export default bricklayer;
