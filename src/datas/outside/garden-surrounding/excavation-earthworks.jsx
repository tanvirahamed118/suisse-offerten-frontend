import { what_excavation_you_need } from "../../reuse-data";

const excavationEarthworks = [
  {
    id: 1041348437,
    type: "checkbox",
    label: "What work do you need ?",
    options: [
      {
        id: 966825649,
        label: "Excavation and earthworks",
        des: "E.g. excavation, drilling, pipes, etc.",
      },
      {
        id: 597433089,
        label: "Foundations",
      },
      {
        id: 229540874,
        label: "Other",
        credit: 20,
      },
    ],
  },
  {
    id: 966825649,
    type: "checkbox",
    label: "What excavation or earthworks do you need ?",
    options: [
      {
        id: 427491911,
        label: "Excavations and canals",
        credit: 25,
      },
      {
        id: 812661376,
        label: "Drilling",
        credit: 20,
      },
      {
        id: 289520657,
        label: "Excavation",
        credit: 30,
      },
      {
        id: 492119970,
        label: "Other",
        credit: 20,
      },
    ],
  },
  {
    id: 812661376,
    type: "checkbox",
    label: "What type of drilling do you need ?",
    options: [
      {
        id: 991771185,
        label: "Geothermal probe drilling",
      },
      {
        id: 430205530,
        label: "Well work",
      },
      {
        id: 376315925,
        label: "Other",
      },
    ],
  },
  {
    id: 430205530,
    type: "checkbox",
    label: "What well work do you need ?",
    options: [
      {
        label: "Drill",
      },
      {
        label: "Re-drilling",
      },
      {
        label: "Drying out",
      },
      {
        label: "Closing",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 289520657,
    type: "multibox",
    label: "What excavation work do you need ?",
    options: what_excavation_you_need,
  },
  {
    id: 597433089,
    type: "checkbox",
    label: "What type of foundation ?",
    options: [
      {
        id: 108292907,
        label: "Point foundation",
        credit: 10,
      },
      {
        id: 185206267,
        label: "Base plate, strip foundation",
        credit: 20,
      },
      {
        label: "Other",
        credit: 20,
      },
    ],
  },
  {
    id: 108292907,
    type: "multibox",
    label: "What point foundation work do you need ?",
    options: what_excavation_you_need,
  },
  {
    id: 185206267,
    type: "multibox",
    label: "What kind of slab or strip foundation work do you need ?",
    options: what_excavation_you_need,
  },
];

export default excavationEarthworks;
