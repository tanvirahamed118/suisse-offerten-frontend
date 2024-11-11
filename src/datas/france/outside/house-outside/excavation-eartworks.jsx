const excavationEartworks = [
  {
    id: 166982408,
    type: "checkbox",
    label: "De quel travail avez-vous besoin ?",
    options: [
      {
        id: 819212399,
        label: "Travaux d'excavation et de terrassement",
        des: "Par exemple, excavation, forage, canalisations, etc.",
      },
      {
        id: 943622027,
        label: "Fondations",
        credit: 25,
      },
      {
        id: 170988534,
        label: "Autre",
        credit: 10,
      },
    ],
  },
  {
    id: 819212399,
    type: "checkbox",
    label:
      "De quels travaux d'excavation ou de terrassement avez-vous besoin ?",
    options: [
      {
        id: 181493541,
        label: "Fouilles et canaux",
        credit: 25,
      },
      {
        id: 288144357,
        label: "Forage",
        credit: 15,
      },
      {
        id: 469645397,
        label: "Excavation",
        credit: 35,
      },
      {
        id: 671878275,
        label: "Autre",
        credit: 10,
      },
    ],
  },
  {
    id: 288144357,
    type: "checkbox",
    label: "De quel type de perçage avez-vous besoin ?",
    options: [
      {
        id: 112184441,
        label: "Forages de sondes géothermiques",
      },
      {
        id: 275582482,
        label: "Bon travail",
      },
      {
        id: 337167578,
        label: "Autre",
      },
    ],
  },
  {
    id: 275582482,
    type: "multibox",
    label: "De quels travaux de puits avez-vous besoin ?",
    options: [
      {
        label: "Percer",
      },
      {
        label: "Reperçage",
      },
      {
        label: "Séchage",
      },
      {
        label: "Clôture",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 469645397,
    type: "multibox",
    label: "De quels travaux d'excavation avez-vous besoin ?",
    options: [
      {
        label: "Excavation pour une piscine",
      },
      {
        label: "Excavation pour une autre structure",
      },
      {
        label: "Élimination des terres excavées",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 943622027,
    type: "checkbox",
    label: "Quel type de fondation ?",
    options: [
      {
        id: 731972868,
        label: "Fondation ponctuelle",
      },
      {
        id: 373088895,
        label: "Plaque de base, fondation en bande",
      },
      {
        id: 888655639,
        label: "Autre",
      },
    ],
  },
  {
    id: 731972868,
    type: "multibox",
    label: "De quels travaux de fondation avez-vous besoin ?",
    options: [
      {
        label: "couler les fondations",
      },
      {
        label: "creuser la terre pour la fondation",
      },
      {
        label: "éliminer les terres excavées",
      },
      {
        label: "autre",
      },
    ],
  },
  {
    id: 373088895,
    type: "multibox",
    label:
      "De quels travaux de dalle ou de fondation filante avez-vous besoin ?",
    options: [
      {
        label: "couler les fondations",
      },
      {
        label: "creuser la terre pour la fondation",
      },
      {
        label: "isoler les fondations",
      },
      {
        label: "éliminer les terres excavées",
      },
      {
        label: "autre",
      },
    ],
  },
];

export default excavationEartworks;
