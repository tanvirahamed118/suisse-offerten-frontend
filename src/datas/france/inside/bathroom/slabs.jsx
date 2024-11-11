import { approximately_how_the_affected_area } from "../../reuse-data";

const slabs = [
  {
    id: 603134044,
    type: "checkbox",
    label: "Où doivent être installées les plaques ?",
    options: [
      {
        id: 5547535016,
        label: "Pose / remplacement de panneaux",
        credit: 20,
      },
      {
        id: 2526937070,
        label: "Réparation des plaques",
        credit: 15,
      },
      {
        id: 5099030183,
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
    id: 5547535016,
    type: "checkbox",
    label: "Quels services devraient être fournis ?",
    options: [
      {
        id: 9067936961,
        label: "Salle de bain / Toilettes",
      },
      {
        id: 9323433727,
        label: "Jardin d'hiver",
      },
      {
        id: 5384571451,
        label: "Véranda",
      },
      {
        id: 9268724068,
        label: "Balcon / Terrasse",
      },
      {
        id: 9936143821,
        label: "Cheminée / foyer",
      },
      {
        id: 5480689074,
        label: "Autre",
      },
    ],
  },
  {
    id: 9067936961,
    type: "multibox",
    mainId: 3573189789,
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
    id: 9323433727,
    type: "multibox",
    mainId: 3573189789,
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
    id: 5384571451,
    type: "multibox",
    mainId: 3573189789,
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
    id: 9268724068,
    type: "multibox",
    mainId: 3573189789,
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
    id: 9936143821,
    type: "multibox",
    mainId: 3573189789,
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
    id: 5480689074,
    type: "multibox",
    mainId: 3573189789,
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
    id: 3573189789,
    type: "checkbox",
    label: "Où dans la salle de bain / WC faut-il poser du carrelage ?",
    options: [
      {
        id: 6339163582,
        label: "Oui, il existe déjà",
      },
      {
        id: 9317025591,
        label: "Non, il faut encore l'acquérir",
      },
    ],
  },
  {
    id: 6339163582,
    type: "checkbox",
    label: "Quelle est la taille approximative de la zone touchée ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 9317025591,
    type: "checkbox",
    label: "Quelle est la taille approximative de la zone touchée ?",
    options: approximately_how_the_affected_area,
  },
];

export default slabs;
