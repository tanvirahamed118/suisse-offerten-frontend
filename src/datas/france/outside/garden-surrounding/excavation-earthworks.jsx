import { what_excavation_you_need } from "../../reuse-data";

const excavationEarthworks = [
  {
    id: 1041348437,
    type: "checkbox",
    label: "De quel travail avez-vous besoin ?",
    options: [
      {
        id: 966825649,
        label: "Travaux d'Excavation et de terrassement",
        des: "Par exemple, Excavation, forage, canalisations, etc.",
      },
      {
        id: 597433089,
        label: "Fondations",
      },
      {
        id: 229540874,
        label: "Autre",
        credit: 20,
      },
    ],
  },
  {
    id: 966825649,
    type: "checkbox",
    label:
      "De quels travaux d'Excavation ou de terrassement avez-vous besoin ?",
    options: [
      {
        id: 427491911,
        label: "Fouilles et canaux",
        credit: 25,
      },
      {
        id: 812661376,
        label: "Forage",
        credit: 20,
      },
      {
        id: 289520657,
        label: "Excavation",
        credit: 30,
      },
      {
        id: 492119970,
        label: "Autre",
        credit: 20,
      },
    ],
  },
  {
    id: 812661376,
    type: "checkbox",
    label: "De quel type de fourrage avez-vous besoin ?",
    options: [
      {
        id: 991771185,
        label: "Sonde géothermique Forage",
      },
      {
        id: 430205530,
        label: "Bon travail",
      },
      {
        id: 376315925,
        label: "Autre",
      },
    ],
  },
  {
    id: 430205530,
    type: "checkbox",
    label: "De quels travaux de puits avez-vous besoin ?",
    options: [
      {
        label: "Percer",
      },
      {
        label: "Re-fourrage",
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
    id: 289520657,
    type: "multibox",
    label: "De quels travaux d'excavation avez-vous besoin ?",
    options: what_excavation_you_need,
  },
  {
    id: 597433089,
    type: "checkbox",
    label: "Quel type de fondation ?",
    options: [
      {
        id: 108292907,
        label: "Fondation ponctuellen",
        credit: 10,
      },
      {
        id: 185206267,
        label: "Plaque de base, fondation en bande",
        credit: 20,
      },
      {
        label: "Autre",
        credit: 20,
      },
    ],
  },
  {
    id: 108292907,
    type: "multibox",
    label: "De quels travaux de fondation avez-vous besoin ?",
    options: what_excavation_you_need,
  },
  {
    id: 185206267,
    type: "multibox",
    label:
      "De quel type de travaux de fondation sur dalle ou bande avez-vous besoin ?",
    options: what_excavation_you_need,
  },
];

export default excavationEarthworks;
