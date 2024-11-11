const carpenter = [
  {
    id: 698157120,
    type: "checkbox",
    label: "Dans quel secteur avez-vous besoin de services de menuiserie ?",
    options: [
      {
        id: 966244388,
        label: "Meubles",
        des: "Meubles sur mesure, restauration de meubles, montage de meubles prêts à poser (IKEA, etc.)",
      },
      {
        id: 724152666,
        label: "Fenêtres / Portes / Planchers",
        des: "Installation ou réparation de portes / fenêtres / sols",
      },
      {
        id: 745410794,
        label: "Cuisines",
        des: "Construction de cuisine, montage de cuisine, modules de cuisine, plans de travail",
      },
      {
        id: 949164005,
        label: "Autres travaux de menuiserie",
        des: "Cloisons de séparation, plafonds en bois, plaques de plâtre, lucarnes, escaliers, rampes, etc.",
        credit: 10,
      },
    ],
  },
  {
    id: 966244388,
    type: "checkbox",
    label:
      "De quel type de service de menuiserie de meubles avez-vous besoin ?",
    options: [
      {
        id: 884905726,
        label: "Meubles sur mesure",
        des: "Armoire intégrée, table, lit, étagère, buffet, etc.",
        credit: 15,
      },
      {
        id: 935198970,
        label: "Restauration/réparation de meubles",
        des: "Ponçage, huilage, vernissage, placage, raccourcissement, etc.",
        credit: 10,
      },
      {
        id: 266431996,
        label: "Montage / installation de meubles",
        des: "Montage de meubles préfabriqués (IKEA, USM, etc.)",
        credit: 15,
      },
    ],
  },
  {
    id: 884905726,
    type: "checkbox",
    label: "De quel type de meuble sur mesure avez-vous besoin ?",
    options: [
      {
        id: 953062955,
        label: "Meubles de rangement",
        des: "Placards intégrés, penderies, étagères, etc.",
      },
      {
        id: 655611146,
        label: "Modules de cuisine",
        des: "Armoires, façades, carcasses, etc.",
      },
      {
        id: 843086607,
        label: "Autres meubles / objets sur mesure",
        des: "Table, banc, lit, bureau d'accueil, etc.",
      },
    ],
  },
  {
    id: 953062955,
    type: "checkbox",
    label: "De quel type de Meubles de rangement avez-vous besoin ?",
    options: [
      {
        label: "Placard intégré",
      },
      {
        label: "Étagère",
      },
      {
        label: "Buffet",
      },
      {
        label: "Buffet",
      },
      {
        label: "Autre ou plusieurs des réponses ci-dessus",
      },
    ],
  },
  {
    id: 935198970,
    type: "checkbox",
    label: "S'agit-il d'un petit ou d'un gros travail de réparation ?",
    options: [
      {
        label: "Petite réparation",
        des: "Un outil polyvalent pourrait également faire l'affaire (stabiliser une table bancale, enlever de petites rayures, réparer une charnière déchirée, etc.)",
      },
      {
        label: "Réparation/restauration majeure",
        des: "",
      },
    ],
  },
  //   window
  {
    id: 724152666,
    type: "checkbox",
    label: "Dans quelle zone avez-vous besoin du service ?",
    options: [
      {
        id: 451838868,
        label: "Portes",
      },
      {
        id: 963063945,
        label: "Cadres",
      },
      {
        id: 953542031,
        label: "Fenêtre",
      },
      {
        id: 998523758,
        label: "Planchers",
      },
      {
        id: 174907062,
        label: "Autre chose, ou plusieurs des éléments ci-dessus",
        credit: 7,
      },
    ],
  },
  {
    id: 451838868,
    type: "checkbox",
    label: "De quels services de porte avez-vous besoin ?",
    options: [
      {
        id: 924972706,
        label: "Installation de portes",
      },
      {
        id: 582400275,
        label: "Réparer ou régler les portes",
        credit: 8,
      },
      {
        id: 236858189,
        label: "Autre",
        credit: 8,
      },
    ],
  },
  {
    id: 924972706,
    type: "checkbox",
    label: "Combien y a-t-il de portes ?",
    options: [
      {
        id: 170406791,
        label: "1 porte",
        credit: 10,
      },
      {
        id: 307972501,
        label: "2 à 3 portes",
        credit: 20,
      },
      {
        id: 444388335,
        label: "4 portes ou plus",
        credit: 40,
      },
    ],
  },
  {
    id: 170406791,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 307972501,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 444388335,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 963063945,
    type: "checkbox",
    label: "Combien y a-t-il de portes ?",
    options: [
      {
        label: "1 porte",
        credit: 10,
      },
      {
        label: "2 à 3 portes",
        credit: 20,
      },
      {
        label: "4 portes ou plus",
        credit: 40,
      },
    ],
  },
  {
    id: 953542031,
    type: "checkbox",
    label: "De quels services de fenêtres avez-vous besoin ?",
    options: [
      {
        id: 602639592,
        label: "Installation ou remplacement de fenêtres",
      },
      {
        label: "Réparation ou personnalisation de fenêtres",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 602639592,
    type: "checkbox",
    label: "Est-ce que les fenêtres sont déjà là ?",
    options: [
      {
        id: 653395436,
        label: "1 à 2 fenêtres",
        credit: 8,
      },
      {
        id: 477359243,
        label: "3 à 5 fenêtres",
        credit: 20,
      },
      {
        id: 393536330,
        label: "6 à 9 fenêtres",
        credit: 27,
      },
      {
        id: 956030516,
        label: "10 fenêtres ou plus",
        credit: 45,
      },
    ],
  },
  {
    id: 653395436,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 477359243,
    type: "checkbox",
    label: "Le matériel pour le sol est-il déjà disponible ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 393536330,
    type: "checkbox",
    label: "Le matériel pour le sol est-il déjà disponible ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 956030516,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },

  {
    id: 998523758,
    type: "checkbox",
    label: "De quels services de revêtement de sol avez-vous besoin ?",
    options: [
      {
        id: 377750590,
        label: "Pose du sol",
      },
      {
        id: 269830556,
        label: "Ponçage / huilage / vitrification des sols",
      },
      {
        id: 941261816,
        label: "Réparer/ajuster le sol",
        credit: 10,
      },
      {
        id: 223056452,
        label: "Autre",
        credit: 7,
      },
    ],
  },
  //   laying
  {
    id: 377750590,
    type: "checkbox",
    label: "De quel type de sol s'agit-il ?",
    options: [
      {
        id: 269499636,
        label: "Planchers en bois massif",
      },
      {
        id: 946739860,
        label: "Parquet",
      },
      {
        id: 799417592,
        label: "Autre",
        credit: 7,
      },
    ],
  },
  {
    id: 269499636,
    type: "checkbox",
    label: "Combien y a-t-il de pièces ?",
    options: [
      {
        id: 4107193069,
        label: "1 à 2 pièces",
        credit: 15,
      },
      {
        id: 441659568,
        label: "3 à 4 pièces",
        credit: 25,
      },
      {
        id: 829910918,
        label: "5 chambres ou plus",
        credit: 35,
      },
      {
        id: 695487785,
        label: "C'est une propriété commerciale",
        credit: 40,
      },
    ],
  },
  {
    id: 4107193069,
    type: "checkbox",
    label: "Le matériel pour le sol est-il déjà disponible ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 441659568,
    type: "checkbox",
    label: "Le matériel pour le sol est-il déjà disponible ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 829910918,
    type: "checkbox",
    label: "Le matériel pour le sol est-il déjà disponible ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 695487785,
    type: "checkbox",
    label: "Le matériel pour le sol est-il déjà disponible ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 946739860,
    type: "checkbox",
    label: "Combien y a-t-il de pièces ?",
    options: [
      {
        id: 885796561,
        label: "1 à 2 pièces",
        credit: 15,
      },
      {
        id: 441659568,
        label: "3 à 4 pièces",
        credit: 25,
      },
      {
        id: 829910918,
        label: "5 chambres ou plus",
        credit: 35,
      },
      {
        id: 695487785,
        label: "C'est une propriété commerciale",
        credit: 40,
      },
    ],
  },
  {
    id: 885796561,
    type: "checkbox",
    label: "Le matériel pour le sol est-il déjà disponible ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 441659568,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 829910918,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 695487785,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  //   laying
  // sending
  {
    id: 269830556,
    type: "checkbox",
    label: "De quel type de sol s'agit-il ?",
    options: [
      {
        id: 269499636,
        label: "Planchers en bois massif",
      },
      {
        id: 946739860,
        label: "parquet",
      },
      {
        id: 799417592,
        label: "Autre",
        credit: 7,
      },
    ],
  },
  {
    id: 269499636,
    type: "checkbox",
    label: "Combien y a-t-il de pièces ?",
    options: [
      {
        id: 885796561,
        label: "1 à 2 pièces",
        credit: 15,
      },
      {
        id: 441659568,
        label: "3 à 4 pièces",
        credit: 25,
      },
      {
        id: 829910918,
        label: "5 chambres ou plus",
        credit: 35,
      },
      {
        id: 695487785,
        label: "C'est une propriété commerciale",
        credit: 40,
      },
    ],
  },
  {
    id: 885796561,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 441659568,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 829910918,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 695487785,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 946739860,
    type: "checkbox",
    label: "Combien y a-t-il de pièces ?",
    options: [
      {
        id: 885796561,
        label: "1 à 2 pièces",
        credit: 15,
      },
      {
        id: 441659568,
        label: "3 à 4 pièces",
        credit: 25,
      },
      {
        id: 829910918,
        label: "5 chambres ou plus",
        credit: 35,
      },
      {
        id: 695487785,
        label: "C'est une propriété commerciale",
        credit: 40,
      },
    ],
  },
  {
    id: 885796561,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 441659568,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 829910918,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 695487785,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  // sending
  // repire
  {
    id: 941261816,
    type: "checkbox",
    label: "De quel type de sol s'agit-il ?",
    options: [
      {
        id: 269499636,
        label: "Planchers en bois massif",
      },
      {
        id: 946739860,
        label: "parquet",
      },
      {
        id: 799417592,
        label: "Autre",
        credit: 7,
      },
    ],
  },
  {
    id: 269499636,
    type: "checkbox",
    label: "Combien y a-t-il de pièces ?",
    options: [
      {
        id: 885796561,
        label: "1 à 2 pièces",
        credit: 15,
      },
      {
        id: 441659568,
        label: "3 à 4 pièces",
        credit: 25,
      },
      {
        id: 829910918,
        label: "5 chambres ou plus",
        credit: 35,
      },
      {
        id: 695487785,
        label: "C'est une propriété commerciale",
        credit: 40,
      },
    ],
  },
  {
    id: 885796561,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 441659568,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 829910918,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 695487785,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 946739860,
    type: "checkbox",
    label: "Combien y a-t-il de pièces ?",
    options: [
      {
        id: 885796561,
        label: "1 à 2 pièces",
        credit: 15,
      },
      {
        id: 441659568,
        label: "3 à 4 pièces",
        credit: 25,
      },
      {
        id: 829910918,
        label: "5 chambres ou plus",
        credit: 35,
      },
      {
        id: 695487785,
        label: "C'est une propriété commerciale",
        credit: 40,
      },
    ],
  },
  {
    id: 885796561,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 441659568,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 829910918,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 695487785,
    type: "checkbox",
    label: "Les portes sont déjà là ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  // repire
  //   window

  // kitchen
  {
    id: 745410794,
    type: "checkbox",
    label: "De quels services de menuiserie de cuisine avez-vous besoin ?",
    options: [
      {
        id: 816112159,
        label: "Montage d'une cuisine préfabriquée",
        credit: 20,
      },
      {
        label: "Restaurer ou adapter une cuisine",
        credit: 20,
      },
      {
        label: "Restaurer ou adapter une cuisine",
        credit: 35,
      },
      {
        label: "Planification de cuisine",
        credit: 45,
      },
      {
        label: "Autre",
        credit: 8,
      },
    ],
  },
  {
    id: 816112159,
    type: "multibox",
    label: "Quels services doivent être fournis lors du montage ?",
    options: [
      {
        label: "Montage d'une cuisine préfabriquée",
      },
      {
        label: "Ajuster/assembler le plan de travail",
      },
      {
        label: "Démontage d'une ancienne cuisine",
      },
      {
        label: "Élimination de l'ancienne cuisine",
      },
      {
        label: "Transport de la cuisine",
      },
      {
        label: "Installation et raccordement d'appareils électriques",
      },
      {
        label: "Démontage et déconnexion des appareils électriques",
      },
    ],
  },
  // kitchen
];

export default carpenter;
