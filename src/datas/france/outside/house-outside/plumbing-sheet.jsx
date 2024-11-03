import {
  ppproximately_how_big_is_covered_clad,
  what_is_the_order,
} from "../../reuse-data";

const plumbingSheet = [
  {
    id: 126762922,
    type: "checkbox",
    label: "Que nécessite un service ?",
    options: [
      {
        id: 822001588,
        label: "Gouttière / tuyau de descente",
      },
      {
        id: 553375588,
        label: "Petite partie de toit",
        des: "Par exemple, faîte, surplomb, bordure, système de protection contre la foudre, etc.",
      },
      {
        id: 497443654,
        label: "Couverture / panneau",
      },
      {
        id: 371481781,
        label: "Cheminée / cheminée",
        credit: 10,
      },
      {
        id: 463565116,
        label: "Autre",
        credit: 10,
      },
    ],
  },
  {
    id: 822001588,
    type: "checkbox",
    label: "Que faut-il faire au sujet de la gouttière/du tuyau de descente ?",
    options: [
      {
        id: 112122992,
        label: "Faire le ménage",
      },
      {
        id: 248117555,
        label: "Remplaçante",
      },
      {
        id: 415310641,
        label: "Réparation",
      },
      {
        id: 411698828,
        label: "Installer",
      },
      {
        id: 246565523,
        label: "Autre",
      },
    ],
  },
  {
    id: 112122992,
    type: "checkbox",
    label: "Quelle est la durée approximative de la commande ?",
    options: what_is_the_order,
  },
  {
    id: 248117555,
    type: "checkbox",
    label: "Quelle est la durée approximative de la commande ?",
    options: what_is_the_order,
  },
  {
    id: 415310641,
    type: "checkbox",
    label: "Quelle est la durée approximative de la commande ?",
    options: what_is_the_order,
  },
  {
    id: 411698828,
    type: "checkbox",
    label: "Quelle est la durée approximative de la commande ?",
    options: what_is_the_order,
  },
  {
    id: 246565523,
    type: "checkbox",
    label: "Quelle est la durée approximative de la commande ?",
    options: what_is_the_order,
  },
  {
    id: 553375588,
    type: "checkbox",
    label: "Quelle est la durée approximative de la commande ?",
    options: what_is_the_order,
  },
  {
    id: 497443654,
    type: "checkbox",
    label: "Quelle est la taille approximative de la structure à recouvrir ?",
    options: ppproximately_how_big_is_covered_clad,
  },
];

export default plumbingSheet;
