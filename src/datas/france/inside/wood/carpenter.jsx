const carpenter = [
  {
    id: 213801317,
    type: "checkbox",
    label: "Dans quel secteur avez-vous besoin de services de menuiserie ?",
    options: [
      {
        id: 1151915930,
        label: "Meubles",
        des: "Meubles sur mesure, restauration de meubles, montage de meubles prêts à poser (IKEA, etc.)",
      },
      {
        id: 2962828362,
        label: "Fenêtres / Portes / Planchers",
        des: "Installation ou réparation de portes / fenêtres / sols",
      },
      {
        id: 5974517553,
        label: "Cuisines",
        des: "Construction de cuisine, montage de cuisine, modules de cuisine, plans de travail",
      },
      {
        label: "Autres travaux de menuiserie",
        des: "Cloisons de séparation, plafonds en bois, plaques de plâtre, lucarnes, escaliers, rampes, etc.",
        credit: 10,
      },
    ],
  },
  {
    id: 1151915930,
    type: "checkbox",
    label:
      "De quel type de service de menuiserie de meubles avez-vous besoin ?",
    options: [
      {
        id: 7150672984,
        label: "Meubles sur mesure",
        des: "Armoire intégrée, table, lit, étagère, buffet, etc.",
        credit: 15,
      },
      {
        id: 3691775056,
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
    id: 7150672984,
    type: "checkbox",
    label: "De quel type de meuble sur mesure avez-vous besoin ?",
    options: [
      {
        id: 8458679060,
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
    id: 8458679060,
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
    id: 3691775056,
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
    id: 2962828362,
    type: "checkbox",
    label: "Dans quelle zone avez-vous besoin du service ?",
    options: [
      {
        id: 5603212423,
        label: "Portes",
      },
      {
        id: 5786790231,
        label: "Cadres",
      },
      {
        id: 4184456961,
        label: "Fenêtre",
      },
      {
        id: 6422566276,
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
    id: 5603212423,
    type: "checkbox",
    label: "De quels services de porte avez-vous besoin ?",
    options: [
      {
        id: 9913834126,
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
    id: 9913834126,
    type: "checkbox",
    label: "Combien y a-t-il de portes ?",
    options: [
      {
        id: 1725651380,
        label: "1 porte",
        credit: 10,
      },
      {
        id: 7868185975,
        label: "2 à 3 portes",
        credit: 20,
      },
      {
        id: 8045008460,
        label: "4 portes ou plus",
        credit: 40,
      },
    ],
  },
  {
    id: 1725651380,
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
    id: 7868185975,
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
    id: 8045008460,
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
    id: 5786790231,
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
    id: 4184456961,
    type: "checkbox",
    label: "De quels services de fenêtres avez-vous besoin ?",
    options: [
      {
        id: 9054054687,
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
    id: 9054054687,
    type: "checkbox",
    label: "Est-ce que les fenêtres sont déjà là ?",
    options: [
      {
        id: 9390956103,
        label: "1 à 2 fenêtres",
        credit: 8,
      },
      {
        id: 8563194684,
        label: "3 à 5 fenêtres",
        credit: 20,
      },
      {
        id: 3307431627,
        label: "6 à 9 fenêtres",
        credit: 27,
      },
      {
        id: 6294089866,
        label: "10 fenêtres ou plus",
        credit: 45,
      },
    ],
  },
  {
    id: 9390956103,
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
    id: 8563194684,
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
    id: 3307431627,
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
    id: 6294089866,
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
    id: 6422566276,
    type: "checkbox",
    label: "De quels services de revêtement de sol avez-vous besoin ?",
    options: [
      {
        id: 3109985509,
        label: "Pose du sol",
      },
      {
        id: 9966689785,
        label: "Ponçage / huilage / vitrification des sols",
      },
      {
        id: 2525069146,
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
    id: 3109985509,
    type: "checkbox",
    label: "De quel type de sol s'agit-il ?",
    options: [
      {
        id: 7176056078,
        label: "Planchers en bois massif",
      },
      {
        id: 4937604124,
        label: "Parquet",
      },
      {
        id: 7630332618,
        label: "Autre",
        credit: 7,
      },
    ],
  },
  {
    id: 7176056078,
    type: "checkbox",
    label: "Combien y a-t-il de pièces ?",
    options: [
      {
        id: 9485893692,
        label: "1 à 2 pièces",
        credit: 15,
      },
      {
        id: 1304372495,
        label: "3 à 4 pièces",
        credit: 25,
      },
      {
        id: 7955048509,
        label: "5 chambres ou plus",
        credit: 35,
      },
      {
        id: 4040558049,
        label: "C'est une propriété commerciale",
        credit: 40,
      },
    ],
  },
  {
    id: 9485893692,
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
    id: 1304372495,
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
    id: 7955048509,
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
    id: 4040558049,
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
    id: 4937604124,
    type: "checkbox",
    label: "Combien y a-t-il de pièces ?",
    options: [
      {
        id: 885796561,
        label: "1 à 2 pièces",
        credit: 15,
      },
      {
        id: 1304372495,
        label: "3 à 4 pièces",
        credit: 25,
      },
      {
        id: 7955048509,
        label: "5 chambres ou plus",
        credit: 35,
      },
      {
        id: 4040558049,
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
    id: 1304372495,
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
    id: 7955048509,
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
    id: 4040558049,
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
    id: 9966689785,
    type: "checkbox",
    label: "De quel type de sol s'agit-il ?",
    options: [
      {
        id: 7176056078,
        label: "Planchers en bois massif",
      },
      {
        id: 4937604124,
        label: "parquet",
      },
      {
        id: 7630332618,
        label: "Autre",
        credit: 7,
      },
    ],
  },
  {
    id: 7176056078,
    type: "checkbox",
    label: "Combien y a-t-il de pièces ?",
    options: [
      {
        id: 885796561,
        label: "1 à 2 pièces",
        credit: 15,
      },
      {
        id: 1304372495,
        label: "3 à 4 pièces",
        credit: 25,
      },
      {
        id: 7955048509,
        label: "5 chambres ou plus",
        credit: 35,
      },
      {
        id: 4040558049,
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
    id: 1304372495,
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
    id: 7955048509,
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
    id: 4040558049,
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
    id: 4937604124,
    type: "checkbox",
    label: "Combien y a-t-il de pièces ?",
    options: [
      {
        id: 885796561,
        label: "1 à 2 pièces",
        credit: 15,
      },
      {
        id: 1304372495,
        label: "3 à 4 pièces",
        credit: 25,
      },
      {
        id: 7955048509,
        label: "5 chambres ou plus",
        credit: 35,
      },
      {
        id: 4040558049,
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
    id: 1304372495,
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
    id: 7955048509,
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
    id: 4040558049,
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
    id: 2525069146,
    type: "checkbox",
    label: "De quel type de sol s'agit-il ?",
    options: [
      {
        id: 7176056078,
        label: "Planchers en bois massif",
      },
      {
        id: 4937604124,
        label: "parquet",
      },
      {
        id: 7630332618,
        label: "Autre",
        credit: 7,
      },
    ],
  },
  {
    id: 7176056078,
    type: "checkbox",
    label: "Combien y a-t-il de pièces ?",
    options: [
      {
        id: 885796561,
        label: "1 à 2 pièces",
        credit: 15,
      },
      {
        id: 1304372495,
        label: "3 à 4 pièces",
        credit: 25,
      },
      {
        id: 7955048509,
        label: "5 chambres ou plus",
        credit: 35,
      },
      {
        id: 4040558049,
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
    id: 1304372495,
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
    id: 7955048509,
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
    id: 4040558049,
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
    id: 4937604124,
    type: "checkbox",
    label: "Combien y a-t-il de pièces ?",
    options: [
      {
        id: 885796561,
        label: "1 à 2 pièces",
        credit: 15,
      },
      {
        id: 1304372495,
        label: "3 à 4 pièces",
        credit: 25,
      },
      {
        id: 7955048509,
        label: "5 chambres ou plus",
        credit: 35,
      },
      {
        id: 4040558049,
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
    id: 1304372495,
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
    id: 7955048509,
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
    id: 4040558049,
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
    id: 5974517553,
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
