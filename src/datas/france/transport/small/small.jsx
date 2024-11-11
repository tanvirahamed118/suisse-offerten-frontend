import { how_far_the_transport } from "../../reuse-data";

const small = [
  {
    id: 1529840539,
    type: "checkbox",
    label: "De quel type de transport avez-vous besoin ?",
    options: [
      {
        id: 8745161830,
        label: "Transport de pianos",
        credit: 5,
      },
      {
        id: 7568795465,
        label: "Transport de voiture / moto",
        credit: 8,
      },
      {
        id: 4721712231,
        label: "Transport de meubles",
        credit: 3,
      },
      {
        id: 7396035660,
        label: "Livraison et enlèvement",
        credit: 4,
      },
      {
        id: 7821475897,
        label: "Enlèvement et élimination",
        credit: 5,
      },
      {
        label: "Autres",
        credit: 3,
      },
    ],
  },
  {
    id: 8745161830,
    type: "checkbox",
    label: "A quelle distance se trouve le transport ?",
    options: how_far_the_transport(
      6159716830,
      782293155,
      538989857,
      612833247,
      541477660
    ),
  },
  {
    id: 6159716830,
    type: "doubleInput",
    mainId: 7568795465,
    label: "A quels étages se situe le lieu de retrait ?",
    options: [
      {
        width: "Depuis:",
        height: "Jusqu'à:",
        placeOne: "Par exemple 3011 Berne",
        placeTow: "Par exemple 8003 Zurich",
      },
    ],
  },
  {
    id: 7568795465,
    type: "multibox",
    mainId: 4721712231,
    label: "A quels étages se situe le lieu de retrait ?",
    options: [
      {
        label: "Grotte",
      },
      {
        label: "Rez-de-chaussée",
      },
      {
        label: "1er étage",
      },
      {
        label: "2e étage",
      },
      {
        label: "3ème étage",
      },
      {
        label: "4ème étage",
      },
      {
        label: "5e étage ou plus",
      },
    ],
  },
  {
    id: 4721712231,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [
      { label: "Oui", id: 726372277 },
      { label: "Non", id: 640061636 },
    ],
  },
  {
    id: 726372277,
    type: "multibox",
    mainId: 565108776,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Grotte",
      },
      {
        label: "Rez-de-chaussée",
      },
      {
        label: "1er étage",
      },
      {
        label: "2e étage",
      },
      {
        label: "3ème étage",
      },
      {
        label: "4ème étage",
      },
      {
        label: "5e étage ou plus",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 565108776,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Grotte",
      },
      {
        label: "Rez-de-chaussée",
      },
      {
        label: "1er étage",
      },
      {
        label: "2e étage",
      },
      {
        label: "3ème étage",
      },
      {
        label: "4ème étage",
      },
      {
        label: "5e étage ou plus",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 7568795465,
    type: "checkbox",
    label: "A quelle distance se trouve le transport ?",
    options: how_far_the_transport(
      399206890,
      782293155,
      538989857,
      612833247,
      541477660
    ),
  },
  {
    id: 399206890,
    type: "doubleInput",
    mainId: 686111495,
    label: "A quels étages se situe le lieu de retrait ?",
    options: [{ label: "" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "A quels étages se situe le lieu de retrait ?",
    options: [
      {
        label: "Grotte",
      },
      {
        label: "Rez-de-chaussée",
      },
      {
        label: "1er étage",
      },
      {
        label: "2e étage",
      },
      {
        label: "3ème étage",
      },
      {
        label: "4ème étage",
      },
      {
        label: "5e étage ou plus",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [
      { label: "Oui", id: 726372277 },
      { label: "Non", id: 640061636 },
    ],
  },
  {
    id: 726372277,
    type: "multibox",
    mainId: 565108776,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Grotte",
      },
      {
        label: "Rez-de-chaussée",
      },
      {
        label: "1er étage",
      },
      {
        label: "2e étage",
      },
      {
        label: "3ème étage",
      },
      {
        label: "4ème étage",
      },
      {
        label: "5e étage ou plus",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 565108776,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Grotte",
      },
      {
        label: "Rez-de-chaussée",
      },
      {
        label: "1er étage",
      },
      {
        label: "2e étage",
      },
      {
        label: "3ème étage",
      },
      {
        label: "4ème étage",
      },
      {
        label: "5e étage ou plus",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 4721712231,
    type: "checkbox",
    label: "A quelle distance se trouve le transport ?",
    options: how_far_the_transport(
      399206890,
      782293155,
      538989857,
      612833247,
      541477660
    ),
  },
  {
    id: 399206890,
    type: "doubleInput",
    mainId: 686111495,
    label: "A quels étages se situe le lieu de retrait ?",
    options: [{ label: "" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "A quels étages se situe le lieu de retrait ?",
    options: [
      {
        label: "Grotte",
      },
      {
        label: "Rez-de-chaussée",
      },
      {
        label: "1er étage",
      },
      {
        label: "2e étage",
      },
      {
        label: "3ème étage",
      },
      {
        label: "4ème étage",
      },
      {
        label: "5e étage ou plus",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [
      { label: "Oui", id: 726372277 },
      { label: "Non", id: 640061636 },
    ],
  },
  {
    id: 726372277,
    type: "multibox",
    mainId: 565108776,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Grotte",
      },
      {
        label: "Rez-de-chaussée",
      },
      {
        label: "1er étage",
      },
      {
        label: "2e étage",
      },
      {
        label: "3ème étage",
      },
      {
        label: "4ème étage",
      },
      {
        label: "5e étage ou plus",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 565108776,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Grotte",
      },
      {
        label: "Rez-de-chaussée",
      },
      {
        label: "1er étage",
      },
      {
        label: "2e étage",
      },
      {
        label: "3ème étage",
      },
      {
        label: "4ème étage",
      },
      {
        label: "5e étage ou plus",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 7396035660,
    type: "checkbox",
    label: "A quelle distance se trouve le transport ?",
    options: how_far_the_transport(
      399206890,
      782293155,
      538989857,
      612833247,
      541477660
    ),
  },
  {
    id: 399206890,
    type: "doubleInput",
    mainId: 686111495,
    label: "A quels étages se situe le lieu de retrait ?",
    options: [{ label: "" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "A quels étages se situe le lieu de retrait ?",
    options: [
      {
        label: "Grotte",
      },
      {
        label: "Rez-de-chaussée",
      },
      {
        label: "1er étage",
      },
      {
        label: "2e étage",
      },
      {
        label: "3ème étage",
      },
      {
        label: "4ème étage",
      },
      {
        label: "5e étage ou plus",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [
      { label: "Oui", id: 726372277 },
      { label: "Non", id: 640061636 },
    ],
  },
  {
    id: 726372277,
    type: "multibox",
    mainId: 565108776,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Grotte",
      },
      {
        label: "Rez-de-chaussée",
      },
      {
        label: "1er étage",
      },
      {
        label: "2e étage",
      },
      {
        label: "3ème étage",
      },
      {
        label: "4ème étage",
      },
      {
        label: "5e étage ou plus",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 565108776,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Grotte",
      },
      {
        label: "Rez-de-chaussée",
      },
      {
        label: "1er étage",
      },
      {
        label: "2e étage",
      },
      {
        label: "3ème étage",
      },
      {
        label: "4ème étage",
      },
      {
        label: "5e étage ou plus",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 7821475897,
    type: "checkbox",
    label: "Hoch much should be transportet ?",
    options: [
      { label: "A car charge" },
      { label: "A van load" },
      { label: "Multiple transport loads" },
      { label: "A truck load or more" },
    ],
  },
  {
    id: 399206890,
    type: "doubleInput",
    mainId: 686111495,
    label: "A quels étages se situe le lieu de retrait ?",
    options: [{ label: "" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "A quels étages se situe le lieu de retrait ?",
    options: [
      {
        label: "Grotte",
      },
      {
        label: "Rez-de-chaussée",
      },
      {
        label: "1er étage",
      },
      {
        label: "2e étage",
      },
      {
        label: "3ème étage",
      },
      {
        label: "4ème étage",
      },
      {
        label: "5e étage ou plus",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [
      { label: "Oui", id: 726372277 },
      { label: "Non", id: 640061636 },
    ],
  },
  {
    id: 726372277,
    type: "multibox",
    mainId: 565108776,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Grotte",
      },
      {
        label: "Rez-de-chaussée",
      },
      {
        label: "1er étage",
      },
      {
        label: "2e étage",
      },
      {
        label: "3ème étage",
      },
      {
        label: "4ème étage",
      },
      {
        label: "5e étage ou plus",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 565108776,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Grotte",
      },
      {
        label: "Rez-de-chaussée",
      },
      {
        label: "1er étage",
      },
      {
        label: "2e étage",
      },
      {
        label: "3ème étage",
      },
      {
        label: "4ème étage",
      },
      {
        label: "5e étage ou plus",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 3154518546,
    type: "checkbox",
    label: "A quelle distance se trouve le transport ?",
    options: how_far_the_transport(
      399206890,
      782293155,
      538989857,
      612833247,
      541477660
    ),
  },
  {
    id: 399206890,
    type: "doubleInput",
    mainId: 686111495,
    label: "A quels étages se situe le lieu de retrait ?",
    options: [{ label: "" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "A quels étages se situe le lieu de retrait ?",
    options: [
      {
        label: "Grotte",
      },
      {
        label: "Rez-de-chaussée",
      },
      {
        label: "1er étage",
      },
      {
        label: "2e étage",
      },
      {
        label: "3ème étage",
      },
      {
        label: "4ème étage",
      },
      {
        label: "5e étage ou plus",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [
      { label: "Oui", id: 726372277 },
      { label: "Non", id: 640061636 },
    ],
  },
  {
    id: 726372277,
    type: "multibox",
    mainId: 565108776,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Grotte",
      },
      {
        label: "Rez-de-chaussée",
      },
      {
        label: "1er étage",
      },
      {
        label: "2e étage",
      },
      {
        label: "3ème étage",
      },
      {
        label: "4ème étage",
      },
      {
        label: "5e étage ou plus",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 565108776,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Grotte",
      },
      {
        label: "Rez-de-chaussée",
      },
      {
        label: "1er étage",
      },
      {
        label: "2e étage",
      },
      {
        label: "3ème étage",
      },
      {
        label: "4ème étage",
      },
      {
        label: "5e étage ou plus",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
];

export default small;
