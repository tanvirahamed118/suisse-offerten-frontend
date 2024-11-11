import roomFour from "./roomFour";
import roomOne from "./roomOne";
import roomThree from "./roomThree";
import roomTow from "./roomTow";

const movingCat = [
  {
    id: 3290426656,
    type: "checkbox",
    label: "Jusqu'où s'étend le déménagement ?",
    options: [
      {
        id: 1459730702,
        label: "Au sein de la communauté",
      },
      {
        id: 6792756807,
        label: "Dans le canton",
      },
      {
        id: 3414387464,
        label: "En Suisse",
      },
      {
        id: 1479083434,
        label: "En Europe",
      },
      {
        id: 1569163849,
        label: "Hors Europe",
      },
    ],
  },
  {
    id: 1459730702,
    type: "doubleInput",
    mainId: 1934954891,
    label: "D'où partent les transports et où vont-ils ?",
    options: [
      {
        width: "Depuis:",
        height: "Jusqu'à:",
        placeTow: "Par exemple 8003 Zurich",
        placeOne: "Par exemple 3011 Berne",
      },
    ],
  },
  {
    id: 1934954891,
    type: "multibox",
    mainId: 7066446326,
    label: "A quels étages se situe l'espace actuel ?",
    options: [
      {
        label: "cave",
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
    id: 7066446326,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [
      { label: "Oui", id: 8839120147 },
      { label: "Non", id: 9417832555 },
    ],
  },
  {
    id: 8839120147,
    type: "multibox",
    mainId: 1916689810,
    label: "On which floors is the new space ?",
    options: [
      {
        label: "cave",
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
    id: 1916689810,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible dans les nouveaux locaux ?",
    options: [
      { label: "Oui", id: 4003460057 },
      { label: "Non", id: 1591236716 },
    ],
  },
  {
    id: 4003460057,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 9185699424,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 9185699424,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 9185699424,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 9417832555,
    type: "multibox",
    mainId: 1916689810,
    label: "On which floors is the new space ?",
    options: [
      {
        label: "cave",
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
    id: 1916689810,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible dans les nouveaux locaux ?",
    options: [
      { label: "Oui", id: 221818400 },
      { label: "Non", id: 1591236716 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 6792756807,
    type: "doubleInput",
    mainId: 268310504,
    label: "D'où partent les transports et où vont-ils ?",
    options: [
      {
        width: "Depuis:",
        height: "Jusqu'à:",
        placeTow: "Par exemple 8003 Zurich",
        placeOne: "Par exemple 3011 Berne",
      },
    ],
  },
  {
    id: 268310504,
    type: "multibox",
    mainId: 7066446326,
    label: "A quels étages se situe l'espace actuel ?",
    options: [
      {
        label: "cave",
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
    id: 7066446326,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [
      { label: "Oui", id: 8839120147 },
      { label: "Non", id: 9417832555 },
    ],
  },
  {
    id: 8839120147,
    type: "multibox",
    mainId: 1916689810,
    label: "On which floors is the new space ?",
    options: [
      {
        label: "cave",
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
    id: 1916689810,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible dans les nouveaux locaux ?",
    options: [
      { label: "Oui", id: 221818400 },
      { label: "Non", id: 1591236716 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 9417832555,
    type: "multibox",
    mainId: 1916689810,
    label: "On which floors is the new space ?",
    options: [
      {
        label: "cave",
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
    id: 1916689810,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible dans les nouveaux locaux ?",
    options: [
      { label: "Oui", id: 221818400 },
      { label: "Non", id: 1591236716 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 3414387464,
    type: "doubleInput",
    mainId: 268310504,
    label: "D'où partent les transports et où vont-ils ?",
    options: [
      {
        width: "Depuis:",
        height: "Jusqu'à:",
        placeTow: "Par exemple 8003 Zurich",
        placeOne: "Par exemple 3011 Berne",
      },
    ],
  },
  {
    id: 268310504,
    type: "multibox",
    mainId: 7066446326,
    label: "A quels étages se situe l'espace actuel ?",
    options: [
      {
        label: "cave",
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
    id: 7066446326,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [
      { label: "Oui", id: 8839120147 },
      { label: "Non", id: 9417832555 },
    ],
  },
  {
    id: 8839120147,
    type: "multibox",
    mainId: 1916689810,
    label: "On which floors is the new space ?",
    options: [
      {
        label: "cave",
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
    id: 1916689810,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible dans les nouveaux locaux ?",
    options: [
      { label: "Oui", id: 221818400 },
      { label: "Non", id: 1591236716 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 9417832555,
    type: "multibox",
    mainId: 1916689810,
    label: "On which floors is the new space ?",
    options: [
      {
        label: "cave",
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
    id: 1916689810,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible dans les nouveaux locaux ?",
    options: [
      { label: "Oui", id: 221818400 },
      { label: "Non", id: 1591236716 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 1479083434,
    type: "doubleInput",
    mainId: 268310504,
    label: "D'où partent les transports et où vont-ils ?",
    options: [
      {
        width: "Depuis:",
        height: "Jusqu'à:",
        placeTow: "Par exemple 8003 Zurich",
        placeOne: "Par exemple 3011 Berne",
      },
    ],
  },
  {
    id: 268310504,
    type: "multibox",
    mainId: 7066446326,
    label: "A quels étages se situe l'espace actuel ?",
    options: [
      {
        label: "cave",
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
    id: 7066446326,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [
      { label: "Oui", id: 8839120147 },
      { label: "Non", id: 9417832555 },
    ],
  },
  {
    id: 8839120147,
    type: "multibox",
    mainId: 1916689810,
    label: "On which floors is the new space ?",
    options: [
      {
        label: "cave",
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
    id: 1916689810,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible dans les nouveaux locaux ?",
    options: [
      { label: "Oui", id: 221818400 },
      { label: "Non", id: 1591236716 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 9417832555,
    type: "multibox",
    mainId: 1916689810,
    label: "On which floors is the new space ?",
    options: [
      {
        label: "cave",
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
    id: 1916689810,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible dans les nouveaux locaux ?",
    options: [
      { label: "Oui", id: 221818400 },
      { label: "Non", id: 1591236716 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 1569163849,
    type: "doubleInput",
    mainId: 268310504,
    label: "D'où partent les transports et où vont-ils ?",
    options: [
      {
        width: "Depuis:",
        height: "Jusqu'à:",
        placeTow: "Par exemple 8003 Zurich",
        placeOne: "Par exemple 3011 Berne",
      },
    ],
  },
  {
    id: 268310504,
    type: "multibox",
    mainId: 7066446326,
    label: "A quels étages se situe l'espace actuel ?",
    options: [
      {
        label: "cave",
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
    id: 7066446326,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible au lieu de prise en charge ?",
    options: [
      { label: "Oui", id: 8839120147 },
      { label: "Non", id: 9417832555 },
    ],
  },
  {
    id: 8839120147,
    type: "multibox",
    mainId: 1916689810,
    label: "On which floors is the new space ?",
    options: [
      {
        label: "cave",
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
    id: 1916689810,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible dans les nouveaux locaux ?",
    options: [
      { label: "Oui", id: 221818400 },
      { label: "Non", id: 1591236716 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 9417832555,
    type: "multibox",
    mainId: 1916689810,
    label: "On which floors is the new space ?",
    options: [
      {
        label: "cave",
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
    id: 1916689810,
    type: "checkbox",
    label: "Y a-t-il un ascenseur disponible dans les nouveaux locaux ?",
    options: [
      { label: "Oui", id: 221818400 },
      { label: "Non", id: 1591236716 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "Quelle est la taille des chambres ?",
    options: [
      {
        id: 9185699424,
        label: "Jusqu'à 1,5 pièces",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 à 3.5 pièces",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 à 5.5 pièces",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 chambres ou plus",
        credit: 25,
      },
    ],
  },
];
const moving = movingCat.concat(roomOne, roomThree, roomTow, roomFour);
export default moving;
