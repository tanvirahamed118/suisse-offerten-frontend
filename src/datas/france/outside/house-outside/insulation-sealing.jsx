import { in_how_floor_insulated } from "../../reuse-data";

const insulationSealing = [
  {
    id: 584581882,
    type: "checkbox",
    label: "Pourquoi avez-vous besoin d'isolation ?",
    options: [
      {
        id: 367864171,
        label: "Sol",
        des: "Sous-sol, salon, etc.",
      },
      {
        id: 843349467,
        label: "Mur",
        des: "Façades, murs intérieurs, etc.",
      },
      {
        id: 794760366,
        label: "Chape ou toiture",
        credit: 25,
      },
      {
        id: 773220083,
        label: "Porte / Fenêtre",
      },
      {
        id: 808199848,
        label: "Protection contre le bruit",
      },
      {
        id: 224629023,
        label: "Autre ou plusieurs des réponses ci-dessus",
        credit: 7,
      },
    ],
  },
  {
    id: 367864171,
    type: "checkbox",
    label: "Dans combien de pièces faut-il isoler le sol ?",
    options: in_how_floor_insulated,
  },
  {
    id: 843349467,
    type: "checkbox",
    label: "Combien de murs faut-il isoler ?",
    options: [
      {
        label: "Un mur",
        credit: 10,
      },
      {
        label: "Murs multiples",
        credit: 25,
      },
      {
        label: "Maison entière",
        credit: 45,
      },
    ],
  },
  {
    id: 773220083,
    type: "checkbox",
    label: "Combien de portes et/ou fenêtres doivent être isolées au total ?",
    options: [
      {
        label: "1 à 2 portes/fenêtres",
        credit: 5,
      },
      {
        label: "3 à 4 portes/fenêtres",
        credit: 10,
      },
      {
        label: "5 portes/fenêtres ou plus",
        credit: 15,
      },
    ],
  },
  {
    id: 808199848,
    type: "checkbox",
    label: "Qu'est-ce qui doit être insonorisé ou isolé du bruit ??",
    options: [
      {
        label: "Un mur / plafond / sol",
        credit: 2,
      },
      {
        label: "Une chambre",
        credit: 3,
      },
      {
        label: "Plusieurs pièces",
        credit: 6,
      },
      {
        label: "Maison entière",
        credit: 10,
      },
      {
        label: "Toiture",
        credit: 8,
      },
      {
        label: "Autre",
        credit: 5,
      },
    ],
  },
];

export default insulationSealing;
