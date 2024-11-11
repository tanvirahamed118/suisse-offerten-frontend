import { approximately_how_the_affected_area } from "../../reuse-data";

const slabs = [
  {
    id: 563723534,
    type: "checkbox",
    label: "Où doivent être installées les plaques ?",
    options: [
      {
        id: 477111188,
        label: "Pose / remplacement de panneaux",
        credit: 20,
      },
      {
        id: 491847277,
        label: "Réparation des plaques",
        credit: 15,
      },
      {
        id: 514373759,
        label: "Renouveler les articulations",
        credit: 5,
      },
      {
        label: "Autre",
        credit: 5,
      },
    ],
  },
  {
    id: 477111188,
    type: "checkbox",
    label: "Quels services devraient être fournis ?",
    options: [
      {
        id: 440239138,
        label: "Salle de bain / Toilettes",
      },
      {
        id: 404925801,
        label: "Jardin d'hiver",
      },
      {
        id: 209253756,
        label: "Véranda",
      },
      {
        id: 319057527,
        label: "Balcon / Terrasse",
      },
      {
        id: 212845915,
        label: "Cheminée / foyer",
      },
      {
        id: 360223002,
        label: "Autre",
      },
    ],
  },
  {
    id: 440239138,
    type: "multibox",
    mainId: 915998113,
    label: "Les tuiles/plaques à installer sont-elles déjà là ?",
    options: [
      {
        label: "Murs",
      },
      {
        label: "Sol",
      },
      {
        label: "Douche",
      },
      {
        label: "Bain",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 404925801,
    type: "multibox",
    mainId: 915998113,
    label: "Quelle est la taille approximative de la zone touchée ?",
    options: [
      {
        label: "Murs",
      },
      {
        label: "Soil",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 209253756,
    type: "multibox",
    mainId: 915998113,
    label: "Les tuiles/plaques à installer sont-elles déjà là ?",
    options: [
      {
        label: "Murs",
      },
      {
        label: "Sol",
      },
      {
        label: "Douche",
      },
      {
        label: "Bain",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 319057527,
    type: "multibox",
    mainId: 915998113,
    label: "Les tuiles/plaques à installer sont-elles déjà là ?",
    options: [
      {
        label: "Murs",
      },
      {
        label: "Sol",
      },
      {
        label: "Douche",
      },
      {
        label: "Bain",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 212845915,
    type: "multibox",
    mainId: 915998113,
    label: "Les tuiles/plaques à installer sont-elles déjà là ?",
    options: [
      {
        label: "Murs",
      },
      {
        label: "Sol",
      },
      {
        label: "Douche",
      },
      {
        label: "Bain",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 360223002,
    type: "multibox",
    mainId: 915998113,
    label: "Les tuiles/plaques à installer sont-elles déjà là ?",
    options: [
      {
        label: "Murs",
      },
      {
        label: "Sol",
      },
      {
        label: "Douche",
      },
      {
        label: "Bain",
      },
      {
        label: "Autre",
      },
    ],
  },

  {
    id: 915998113,
    type: "checkbox",
    label: "Où dans la salle de bain / WC faut-il poser du carrelage ?",
    options: [
      {
        id: 576329979,
        label: "Oui, il existe déjà",
      },
      {
        id: 724147813,
        label: "Non, il faut encore l'acquérir",
      },
    ],
  },
  {
    id: 576329979,
    type: "checkbox",
    label: "Quelle est la taille approximative de la zone touchée ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 724147813,
    type: "checkbox",
    label: "Quelle est la taille approximative de la zone touchée ?",
    options: approximately_how_the_affected_area,
  },
];

export default slabs;
