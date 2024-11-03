import { what_excavation_you_need } from "../../reuse-data";

const excavationEarthworks = [
  {
    id: 1041348437,
    type: "checkbox",
    label: "Welche Arbeit benötigen Sie ?",
    options: [
      {
        id: 966825649,
        label: "Aushub- und Erdarbeiten",
        des: "Z. B. Ausgrabungen, Bohrungen, Rohre usw.",
      },
      {
        id: 597433089,
        label: "Stiftungen",
      },
      {
        id: 229540874,
        label: "Andere",
        credit: 20,
      },
    ],
  },
  {
    id: 966825649,
    type: "checkbox",
    label: "Welche Aushub- oder Erdarbeiten benötigen Sie ?",
    options: [
      {
        id: 427491911,
        label: "Ausgrabungen und Kanäle",
        credit: 25,
      },
      {
        id: 812661376,
        label: "Bohren",
        credit: 20,
      },
      {
        id: 289520657,
        label: "Ausgrabung",
        credit: 30,
      },
      {
        id: 492119970,
        label: "Andere",
        credit: 20,
      },
    ],
  },
  {
    id: 812661376,
    type: "checkbox",
    label: "Welche Art von Bohrung benötigen Sie ?",
    options: [
      {
        id: 991771185,
        label: "Erdwärmesondenbohrung",
      },
      {
        id: 430205530,
        label: "Gute Arbeit",
      },
      {
        id: 376315925,
        label: "Andere",
      },
    ],
  },
  {
    id: 430205530,
    type: "checkbox",
    label: "Welche Brunnenarbeiten benötigen Sie ?",
    options: [
      {
        label: "Bohren",
      },
      {
        label: "Neubohrungen",
      },
      {
        label: "Austrocknen",
      },
      {
        label: "Schließen",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 289520657,
    type: "multibox",
    label: "Welche Erdarbeiten benötigen Sie ?",
    options: what_excavation_you_need,
  },
  {
    id: 597433089,
    type: "checkbox",
    label: "Welche Art von Fundament ?",
    options: [
      {
        id: 108292907,
        label: "Punktfundament",
        credit: 10,
      },
      {
        id: 185206267,
        label: "Bodenplatte, Streifenfundament",
        credit: 20,
      },
      {
        label: "Andere",
        credit: 20,
      },
    ],
  },
  {
    id: 108292907,
    type: "multibox",
    label: "Welche Punktfundamentarbeiten benötigen Sie ?",
    options: what_excavation_you_need,
  },
  {
    id: 185206267,
    type: "multibox",
    label: "Welche Platten- oder Streifenfundamentarbeiten benötigen Sie ?",
    options: what_excavation_you_need,
  },
];

export default excavationEarthworks;
