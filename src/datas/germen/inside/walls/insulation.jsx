const insulation = [
  {
    id: 854277929,
    type: "checkbox",
    label: "Wofür benötigen Sie eine Isolierung ?",
    options: [
      {
        id: 536262274,
        label: "Boden",
        des: "Kellergeschoss, Wohnzimmergeschoss usw.",
      },
      {
        id: 948721480,
        label: "Wand",
        des: "Fassaden, Innenwände usw.",
      },
      {
        id: 974052021,
        label: "Estrich oder Dach",
        credit: 25,
      },
      {
        id: 811313434,
        label: "Tür / Fenster",
      },
      {
        id: 312757265,
        label: "Schutz vor Schall / Lärm",
      },
      {
        id: 675895081,
        label: "Andere oder mehrere der oben genannten",
        credit: 7,
      },
    ],
  },
  {
    id: 536262274,
    type: "checkbox",
    label: "In wie vielen Räumen soll der Fußboden gedämmt werden ?",
    options: [
      {
        label: "1 bis 2 Zimmer",
        credit: 10,
      },
      {
        label: "3 bis 4 Zimmer",
        credit: 20,
      },
      {
        label: "5 oder mehr Zimmer",
        credit: 35,
      },
    ],
  },
  {
    id: 948721480,
    type: "checkbox",
    label: "Wie viele Wände müssen gedämmt werden ?",
    options: [
      {
        label: "Eine Wand",
        credit: 10,
      },
      {
        label: "Mehrere Wände",
        credit: 20,
      },
      {
        label: "Ganzes Haus",
        credit: 45,
      },
    ],
  },
  {
    id: 811313434,
    type: "checkbox",
    label: "Wie viele Türen und/oder Fenster sollen insgesamt gedämmt werden ?",
    options: [
      {
        label: "1 bis 2 Türen / Fenster",
        credit: 8,
      },
      {
        label: "3 bis 4 Türen / Fenster",
        credit: 16,
      },
      {
        label: "5 oder mehr Türen / Fenster",
        credit: 35,
      },
    ],
  },
  {
    id: 312757265,
    type: "checkbox",
    label: "Was muss schallgedämmt bzw. lärmisoliert werden ?",
    options: [
      {
        label: "Eine Wand / Decke / Boden",
        credit: 10,
      },
      {
        label: "Ein Zimmer",
        credit: 5,
      },
      {
        label: "Mehrere Räume",
        credit: 10,
      },
      {
        label: "Ganzes Haus",
        credit: 25,
      },
      {
        label: "Dach",
        credit: 25,
      },
      {
        label: "Andere",
        credit: 7,
      },
    ],
  },
];

export default insulation;
