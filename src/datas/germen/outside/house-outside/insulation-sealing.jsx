import { in_how_floor_insulated } from "../../reuse-data";

const insulationSealing = [
  {
    id: 584581882,
    type: "checkbox",
    label: "Wofür benötigen Sie eine Isolierung ?",
    options: [
      {
        id: 367864171,
        label: "Boden",
        des: "Kellergeschoss, Wohnzimmergeschoss usw.",
      },
      {
        id: 843349467,
        label: "Wand",
        des: "Fassaden, Innenwände usw.",
      },
      {
        id: 794760366,
        label: "Estrich oder Dach",
        credit: 25,
      },
      {
        id: 773220083,
        label: "Tür / Fenster",
      },
      {
        id: 808199848,
        label: "Schutz vor Schall / Lärm",
      },
      {
        id: 224629023,
        label: "Andere oder mehrere der oben genannten",
        credit: 7,
      },
    ],
  },
  {
    id: 367864171,
    type: "checkbox",
    label: "In wie vielen Räumen soll der Fußboden gedämmt werden ?",
    options: in_how_floor_insulated,
  },
  {
    id: 843349467,
    type: "checkbox",
    label: "Wie viele Wände müssen gedämmt werden ?",
    options: [
      {
        label: "Eine Wand",
        credit: 10,
      },
      {
        label: "Mehrere Wände",
        credit: 25,
      },
      {
        label: "Ganzes Haus",
        credit: 45,
      },
    ],
  },
  {
    id: 773220083,
    type: "checkbox",
    label: "Wie viele Türen und/oder Fenster sollen insgesamt gedämmt werden ?",
    options: [
      {
        label: "1 bis 2 Türen / Fenster",
        credit: 5,
      },
      {
        label: "3 bis 4 Türen / Fenster",
        credit: 10,
      },
      {
        label: "5 oder mehr Türen / Fenster",
        credit: 15,
      },
    ],
  },
  {
    id: 808199848,
    type: "checkbox",
    label: "Was muss schallgedämmt bzw. lärmisoliert werden ?",
    options: [
      {
        label: "Eine Wand / Decke / Boden",
        credit: 2,
      },
      {
        label: "Ein Zimmer",
        credit: 3,
      },
      {
        label: "Mehrere Räume",
        credit: 6,
      },
      {
        label: "Ganzes Haus",
        credit: 10,
      },
      {
        label: "Dach",
        credit: 8,
      },
      {
        label: "Andere",
        credit: 5,
      },
    ],
  },
];

export default insulationSealing;
