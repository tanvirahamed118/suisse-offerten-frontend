const excavationEartworks = [
  {
    id: 166982408,
    type: "checkbox",
    label: "What work do you need ?",
    options: [
      {
        id: 819212399,
        label: "Excavation and earthworks",
        des: "E.g. excavation, drilling, pipes, etc.",
      },
      {
        id: 943622027,
        label: "Foundations",
        credit: 25,
      },
      {
        id: 170988534,
        label: "Other",
        credit: 10,
      },
    ],
  },
  {
    id: 819212399,
    type: "checkbox",
    label: "What excavation or earthworks do you need ?",
    options: [
      {
        id: 181493541,
        label: "Excavations and canals",
        credit: 25,
      },
      {
        id: 288144357,
        label: "Drilling",
        credit: 15,
      },
      {
        id: 469645397,
        label: "Excavation",
        credit: 35,
      },
      {
        id: 671878275,
        label: "Other",
        credit: 10,
      },
    ],
  },
  {
    id: 288144357,
    type: "checkbox",
    label: "What type of drilling do you need ?",
    options: [
      {
        id: 112184441,
        label: "Geothermal probe drillings",
      },
      {
        id: 275582482,
        label: "Well work",
      },
      {
        id: 337167578,
        label: "Other",
      },
    ],
  },
  {
    id: 275582482,
    type: "multibox",
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
    id: 469645397,
    type: "multibox",
    label: "What excavation work do you need ?",
    options: [
      {
        label: "Excavation for a pool",
      },
      {
        label: "Excavation for another structure",
      },
      {
        label: "Disposal of excavated soil",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 943622027,
    type: "checkbox",
    label: "What type of foundation ?",
    options: [
      {
        id: 731972868,
        label: "Point foundation",
      },
      {
        id: 373088895,
        label: "Base plate, strip foundation",
      },
      {
        id: 888655639,
        label: "Other",
      },
    ],
  },
  {
    id: 731972868,
    type: "multibox",
    label: "What point foundation work do you need ?",
    options: [
      {
        label: "pouring the foundation",
      },
      {
        label: "digging earth for the foundation",
      },
      {
        label: "dispose of excavated soil",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 373088895,
    type: "multibox",
    label: "Which floor slab or strip foundation work do you need ?",
    options: [
      {
        label: "pouring the foundation",
      },
      {
        label: "digging earth for the foundation",
      },
      {
        label: "insulating the foundation",
      },
      {
        label: "dispose of excavated soil",
      },
      {
        label: "Other",
      },
    ],
  },
];

export default excavationEartworks;
