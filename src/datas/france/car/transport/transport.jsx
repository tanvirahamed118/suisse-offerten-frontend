import { how_far_the_transport } from "../../reuse-data";

const transport = [
  {
    id: 659664297,
    type: "checkbox",
    label: "De quel type de transport avez-vous besoin ?",
    options: [
      {
        id: 120679971,
        label: "Transport de pianos",
        credit: 5,
      },
      {
        id: 613357797,
        label: "Transport de voiture / moto",
        credit: 8,
      },
      {
        id: 760736843,
        label: "Transport de meubles",
        credit: 3,
      },
      {
        id: 270341747,
        label: "Livraison et enlèvement",
        credit: 4,
      },
      {
        id: 709022107,
        label: "Enlèvement et élimination",
        credit: 5,
      },
      {
        id: 939344768,
        label: "Autres",
        credit: 3,
      },
    ],
  },
  {
    id: 120679971,
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
    label: "D'où partent les transports et où vont-ils ?",
    options: [{ width: "Depuis:", height: "Jusqu'à:" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "Quelles sont les pièces concernées ?",
    options: [
      {
        label: "Cave",
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
        label: "5th floor or higher",
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
    mainId: 459406632,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Cave",
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
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 459406632,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 363012132,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Cave",
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
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 363012132,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 613357797,
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
    label: "D'où partent les transports et où vont-ils ?",
    options: [{ width: "Depuis:", height: "Jusqu'à:" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 644565051,
    label: "Quelles sont les pièces concernées ?",
    options: [
      {
        label: "Cave",
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
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 644565051,
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
    label: "A quels étages se trouve la destination ?",
    mainId: 147386648,
    options: [
      {
        label: "Cave",
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
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 147386648,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 944599198,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Cave",
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
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 944599198,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 760736843,
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
    label: "D'où partent les transports et où vont-ils ?",
    options: [{ width: "Depuis:", height: "Jusqu'à:" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "Quelles sont les pièces concernées ?",
    options: [
      {
        label: "Cave",
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
        label: "5th floor or higher",
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
    mainId: 420190695,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Cave",
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
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 420190695,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 839428265,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Cave",
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
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 839428265,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 270341747,
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
    label: "D'où partent les transports et où vont-ils ?",
    options: [{ width: "Depuis:", height: "Jusqu'à:" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 441617407,
    label: "Quelles sont les pièces concernées ?",
    options: [
      {
        label: "Cave",
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
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 441617407,
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
    mainId: 160216962,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Cave",
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
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 160216962,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 106299203,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Cave",
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
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 106299203,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 709022107,
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
    label: "D'où partent les transports et où vont-ils ?",
    options: [{ width: "Depuis:", height: "Jusqu'à:" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 819648441,
    label: "Quelles sont les pièces concernées ?",
    options: [
      {
        label: "Cave",
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
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 819648441,
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
    mainId: 222000770,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Cave",
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
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 222000770,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 293350647,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Cave",
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
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 293350647,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 939344768,
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
    label: "D'où partent les transports et où vont-ils ?",
    options: [{ width: "Depuis:", height: "Jusqu'à:" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 441568963,
    label: "Quelles sont les pièces concernées ?",
    options: [
      {
        label: "Cave",
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
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 441568963,
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
    mainId: 335344367,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Cave",
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
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 335344367,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 914344424,
    label: "A quels étages se trouve la destination ?",
    options: [
      {
        label: "Cave",
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
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 914344424,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [{ label: "Oui" }, { label: "Non" }],
  },
];

export default transport;
