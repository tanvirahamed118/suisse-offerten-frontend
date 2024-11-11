const plumbing = [
  {
    id: 243131485,
    type: "checkbox",
    label: "Pourquoi avez-vous besoin d'un service de plomberie ?",
    options: [
      {
        id: 415723906,
        label: "Blocages et fuites",
        des: "Tuyaux bouchés, robinet qui goutte, etc.",
      },
      {
        id: 479161497,
        label: "Appareils électroménagers",
        des: "Lave-linge, lave-vaisselle, etc.",
        credit: 8,
      },
      {
        id: 366677345,
        label: "Objets et accessoires sanitaires",
        des: "Robinet, baignoire, pommeau de douche, douche, toilette, etc.",
        credit: 10,
      },
      {
        id: 273026338,
        label: "Canalisations et égouts",
        des: "Remplacement de canalisations dans la cuisine, raccordement d'eau dans le jardin, etc.",
      },
      {
        id: 762491314,
        label: "Radiateur / Chauffage",
      },
      {
        id: 601706794,
        label: "Chaudière",
      },
      {
        id: 118427521,
        label: "Autre",
        credit: 10,
      },
    ],
  },
  {
    id: 415723906,
    type: "checkbox",
    label: "Quels travaux de plomberie sont à réaliser ?",
    options: [
      {
        label: "Drain bouché",
        credit: 8,
      },
      {
        label: "Tirer la chasse d'eau",
        credit: 5,
      },
      {
        label: "Robinet qui goutte",
        credit: 3,
      },
      {
        label: "Fuir",
        credit: 5,
      },
    ],
  },
  {
    id: 479161497,
    type: "checkbox",
    label: "Quels travaux sanitaires/plomberie faut-il réaliser ?",
    options: [
      {
        id: 889295302,
        label: "machine à laver",
      },
      {
        id: 362663787,
        label: "Lave-vaisselle",
      },
      {
        id: 214329292,
        label: "Autre",
      },
    ],
  },
  {
    id: 889295302,
    type: "checkbox",
    label: "De quel type d'appareil électroménager s'agit-il ?",
    options: [
      {
        label: "Installer ou remplacer",
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
    id: 362663787,
    type: "checkbox",
    label: "De quel type d'appareil électroménager s'agit-il ?",
    options: [
      {
        label: "Installer ou remplacer",
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
    id: 214329292,
    type: "checkbox",
    label: "De quel type d'appareil électroménager s'agit-il ?",
    options: [
      {
        label: "Installer ou remplacer",
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
    id: 366677345,
    type: "checkbox",
    label: "Quels travaux faut-il effectuer sur l'électroménager ?",
    options: [
      {
        id: 742233705,
        label: "Installer / remplacer",
      },
      {
        id: 411460503,
        label: "réparation",
      },
    ],
  },
  {
    id: 742233705,
    type: "multibox",
    label: "Que faut-il installer ou remplacer ?",
    mainId: 975610483,
    options: [
      {
        label: "Baignoire",
      },
      {
        label: "Douche",
      },
      {
        label: "Cabine de douche",
      },
      {
        label: "toilettes",
      },
      {
        label: "robinet",
      },
      {
        label: "lavabo",
      },
      {
        label: "bidet",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 975610483,
    type: "checkbox",
    label:
      "Combien d'appareils sanitaires doivent être installés ou remplacés au total ?",
    options: [
      {
        label: "1",
      },
      {
        label: "2 ou 3",
      },
      {
        label: "4 ou plus",
      },
    ],
  },
  {
    id: 411460503,
    type: "checkbox",
    label: "Y a-t-il une fuite (robinet qui goutte, etc.) ?",
    options: [
      {
        id: 122842505,
        label: "Oui",
      },
      {
        id: 751316864,
        label: "Non",
      },
    ],
  },
  {
    id: 122842505,
    type: "checkbox",
    label: "Y a-t-il une fuite (robinet qui goutte, etc.) ?",
    options: [
      {
        label: "Oui",
      },
      {
        label: "Non",
      },
    ],
  },
  {
    id: 751316864,
    type: "checkbox",
    label: "Y a-t-il une fuite (robinet qui goutte, etc.) ?",
    options: [
      {
        label: "Oui",
      },
      {
        label: "Non",
      },
    ],
  },
  {
    id: 273026338,
    type: "checkbox",
    label: "Quels travaux de plomberie sont à réaliser ?",
    options: [
      {
        id: 839057637,
        label: "Installer, personnaliser ou remplacer",
      },
      {
        id: 425823793,
        label: "réparation",
      },
      {
        id: 904089452,
        label: "Autre",
        credit: 5,
      },
    ],
  },
  {
    id: 839057637,
    type: "checkbox",
    label: "Quelle est l'ampleur des travaux de plomberie ?",
    options: [
      {
        label: "Petits travaux",
        des: "Par exemple, raccordement d'eau dans le jardin, installation d'un lavabo avec évacuation d'eau",
        credit: 10,
      },
      {
        label: "Une chambre",
        des: "Par exemple, remplacer une conduite d'eau dans la cuisine",
        credit: 10,
      },
      {
        label: "Plusieurs pièces",
        des: "Par exemple, la réinstallation complète des conduites d'eau dans la salle de bain et la cuisine",
        credit: 35,
      },
      {
        label: "Maison entière",
        credit: 55,
      },
    ],
  },
  {
    id: 425823793,
    type: "checkbox",
    label: "Quelle est l'ampleur des travaux de plomberie ?",
    options: [
      {
        label: "Petits travaux",
        des: "Par exemple, raccordement d'eau dans le jardin, installation d'un lavabo avec évacuation d'eau",
        credit: 10,
      },
      {
        label: "Une chambre",
        des: "Par exemple, remplacer une conduite d'eau dans la cuisine",
        credit: 10,
      },
      {
        label: "Plusieurs pièces",
        des: "Par exemple, la réinstallation complète des conduites d'eau dans la salle de bain et la cuisine",
        credit: 35,
      },
      {
        label: "Maison entière",
        credit: 5,
      },
    ],
  },
  {
    id: 904089452,
    type: "checkbox",
    label: "Quelle est l'ampleur des travaux de plomberie ?",
    options: [
      {
        label: "Petits travaux",
        des: "Par exemple, raccordement d'eau dans le jardin, installation d'un lavabo avec évacuation d'eau",
      },
      {
        label: "Une chambre",
        des: "Par exemple, remplacer une conduite d'eau dans la cuisine",
      },
      {
        label: "Plusieurs pièces",
        des: "Par exemple, la réinstallation complète des conduites d'eau dans la salle de bain et la cuisine",
      },
      {
        label: "Maison entière",
      },
    ],
  },
  {
    id: 762491314,
    type: "checkbox",
    label: "Quels travaux faut-il réaliser ?",
    options: [
      {
        id: 368526993,
        label: "Petits travaux (ventilation, chasse d'eau, etc.)",
      },
      {
        id: 441754733,
        label: "Déplacer ou remplacer",
      },
      {
        id: 753629662,
        label: "Autre",
        credit: 8,
      },
    ],
  },
  {
    id: 368526993,
    type: "checkbox",
    label: "Combien y a-t-il de radiateurs ?",
    options: [
      {
        label: "Une",
        credit: 8,
      },
      {
        label: "Plusieurs",
        credit: 20,
      },
    ],
  },
  {
    id: 441754733,
    type: "checkbox",
    label: "Combien de radiateurs doivent être déplacés ou remplacés ?",
    options: [
      {
        label: "1 radiateur",
        credit: 5,
      },
      {
        label: "2 à 4 radiateurs",
        credit: 10,
      },
      {
        label: "5 radiateurs ou plus",
        credit: 20,
      },
    ],
  },
  {
    id: 601706794,
    type: "checkbox",
    label: "De quel type de chaudière s'agit-il ?",
    options: [
      {
        id: 837853795,
        label: "Chaudière à gaz",
      },
      {
        id: 743433388,
        label: "Chaudière électrique",
      },
      {
        id: 684556806,
        label: "Chaudière à pompe à eau",
      },
      {
        id: 782803965,
        label: "Autre ou je ne suis pas sûr",
        credit: 10,
      },
    ],
  },
  {
    id: 837853795,
    type: "checkbox",
    label: "Quels travaux de plomberie sont à réaliser ?",
    options: [
      {
        label: "Détartrage",
        credit: 5,
      },
      {
        label: "réparation",
        credit: 10,
      },
      {
        label: "Service / Contrôle",
        credit: 10,
      },
      {
        label: "Installer / remplacer",
        credit: 45,
      },
    ],
  },
  {
    id: 743433388,
    type: "checkbox",
    label: "Quels travaux de plomberie sont à réaliser ?",
    options: [
      {
        label: "Détartrage",
        credit: 5,
      },
      {
        label: "réparation",
        credit: 20,
      },
      {
        label: "Service / Contrôle",
        credit: 20,
      },
      {
        label: "Installer / remplacer",
        credit: 45,
      },
    ],
  },
  {
    id: 684556806,
    type: "checkbox",
    label: "Quels travaux de plomberie sont à réaliser ?",
    options: [
      {
        label: "Détartrage",
        credit: 5,
      },
      {
        label: "réparation",
        credit: 20,
      },
      {
        label: "Service / Contrôle",
        credit: 15,
      },
      {
        label: "Installer / remplacer",
        credit: 35,
      },
    ],
  },
];

export default plumbing;
