import { approximately_how_the_affected_area } from "../../reuse-data";

const slabs = [
  {
    id: 563723534,
    type: "checkbox",
    label: "Wo sollen die Platten angebracht werden ?",
    options: [
      {
        id: 477111188,
        label: "Platten verlegen / austauschen",
        credit: 20,
      },
      {
        id: 491847277,
        label: "Platten reparieren",
        credit: 15,
      },
      {
        id: 514373759,
        label: "Fugen erneuern",
        credit: 5,
      },
      {
        label: "Andere",
        credit: 5,
      },
    ],
  },
  {
    id: 477111188,
    type: "checkbox",
    label: "Welche Leistungen sollen erbracht werden ?",
    options: [
      {
        id: 440239138,
        label: "Badezimmer / WC",
      },
      {
        id: 404925801,
        label: "Wintergarten",
      },
      {
        id: 209253756,
        label: "Veranda",
      },
      {
        id: 319057527,
        label: "Balkon / Terrasse",
      },
      {
        id: 212845915,
        label: "Kamin / Kaminofen",
      },
      {
        id: 360223002,
        label: "Andere",
      },
    ],
  },
  {
    id: 440239138,
    type: "multibox",
    mainId: 915998113,
    label: "Sind die zu verlegenden Fliesen/Platten schon vorhanden ?",
    options: [
      {
        label: "Wände",
      },
      {
        label: "Boden",
      },
      {
        label: "Dusche",
      },
      {
        label: "Bad",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 404925801,
    type: "multibox",
    mainId: 915998113,
    label: "Wie groß ist die betroffene Fläche ungefähr ?",
    options: [
      {
        label: "Wände",
      },
      {
        label: "Soil",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 209253756,
    type: "multibox",
    mainId: 915998113,
    label: "Sind die zu verlegenden Fliesen/Platten schon vorhanden ?",
    options: [
      {
        label: "Wände",
      },
      {
        label: "Boden",
      },
      {
        label: "Dusche",
      },
      {
        label: "Bad",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 319057527,
    type: "multibox",
    mainId: 915998113,
    label: "Sind die zu verlegenden Fliesen/Platten schon vorhanden ?",
    options: [
      {
        label: "Wände",
      },
      {
        label: "Boden",
      },
      {
        label: "Dusche",
      },
      {
        label: "Bad",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 212845915,
    type: "multibox",
    mainId: 915998113,
    label: "Sind die zu verlegenden Fliesen/Platten schon vorhanden ?",
    options: [
      {
        label: "Wände",
      },
      {
        label: "Boden",
      },
      {
        label: "Dusche",
      },
      {
        label: "Bad",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 360223002,
    type: "multibox",
    mainId: 915998113,
    label: "Sind die zu verlegenden Fliesen/Platten schon vorhanden ?",
    options: [
      {
        label: "Wände",
      },
      {
        label: "Boden",
      },
      {
        label: "Dusche",
      },
      {
        label: "Bad",
      },
      {
        label: "Andere",
      },
    ],
  },

  {
    id: 915998113,
    type: "checkbox",
    label: "Wo im Bad/WC sollen Fliesen verlegt werden ?",
    options: [
      {
        id: 576329979,
        label: "Ja, es existiert bereits",
      },
      {
        id: 724147813,
        label: "Nein, es muss noch beschafft werden",
      },
    ],
  },
  {
    id: 576329979,
    type: "checkbox",
    label: "Wie groß ist die betroffene Fläche ungefähr ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 724147813,
    type: "checkbox",
    label: "Wie groß ist die betroffene Fläche ungefähr ?",
    options: approximately_how_the_affected_area,
  },
];

export default slabs;
