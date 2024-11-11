const insulation = [
  {
    id: 854277929,
    type: "checkbox",
    label: "Pourquoi avez-vous besoin d'isolation ?",
    options: [
      {
        id: 536262274,
        label: "Sol",
        des: "Sous-sol, salon, etc.",
      },
      {
        id: 948721480,
        label: "Mur",
        des: "Façades, murs intérieurs, etc.",
      },
      {
        id: 974052021,
        label: "Chape ou toiture",
        credit: 25,
      },
      {
        id: 811313434,
        label: "Porte / Fenêtre",
      },
      {
        id: 312757265,
        label: "Protection contre le bruit",
      },
      {
        id: 675895081,
        label: "Autre ou plusieurs des réponses ci-dessus",
        credit: 7,
      },
    ],
  },
  {
    id: 536262274,
    type: "checkbox",
    label: "Dans combien de pièces faut-il isoler le sol ?",
    options: [
      {
        label: "1 à 2 pièces",
        credit: 10,
      },
      {
        label: "3 à 4 pièces",
        credit: 20,
      },
      {
        label: "5 chambres ou plus",
        credit: 35,
      },
    ],
  },
  {
    id: 948721480,
    type: "checkbox",
    label: "Combien de murs faut-il isoler ?",
    options: [
      {
        label: "Un mur",
        credit: 10,
      },
      {
        label: "Murs multiples",
        credit: 20,
      },
      {
        label: "Maison entière",
        credit: 45,
      },
    ],
  },
  {
    id: 811313434,
    type: "checkbox",
    label: "Combien de portes et/ou fenêtres doivent être isolées au total ?",
    options: [
      {
        label: "1 à 2 portes/fenêtres",
        credit: 8,
      },
      {
        label: "3 à 4 portes/fenêtres",
        credit: 16,
      },
      {
        label: "5 portes/fenêtres ou plus",
        credit: 35,
      },
    ],
  },
  {
    id: 312757265,
    type: "checkbox",
    label: "Qu'est-ce qui doit être insonorisé ou isolé du bruit ?",
    options: [
      {
        label: "Un mur / plafond / sol",
        credit: 10,
      },
      {
        label: "Une chambre",
        credit: 5,
      },
      {
        label: "Plusieurs pièces",
        credit: 10,
      },
      {
        label: "Maison entière",
        credit: 25,
      },
      {
        label: "Toiture",
        credit: 25,
      },
      {
        label: "Autre",
        credit: 7,
      },
    ],
  },
];

export default insulation;
