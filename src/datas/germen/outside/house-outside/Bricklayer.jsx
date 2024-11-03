import { how_large_is_approximately } from "../../reuse-data";

const bricklayer = [
  {
    id: 809068343,
    type: "multibox",
    mainId: 981359683,
    label: "Was erfordert ein Dienst ?",
    options: [
      {
        label: "Wand",
      },
      {
        label: "Boden",
      },
      {
        label: "Fenster / Tür",
      },
      {
        label: "Fassade",
      },
      {
        label: "Balkon / Wintergarten",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 981359683,
    type: "multibox",
    mainId: 166208888,
    label: "Was sollte getan werden ?",
    options: [
      {
        label: "Gießen / Betonieren",
      },
      {
        label: "Abrieb / Gips",
      },
      {
        label: "Gelenke",
      },
      {
        label: "Neuaufbau",
      },
      {
        label: "Abbruch / Durchbruch",
      },
      {
        label: "Bohren",
      },
      {
        label: "reparieren",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 166208888,
    type: "checkbox",
    label: "Müssen Sie Ihre Baumaterialien selbst mitbringen ?",
    options: [
      {
        id: 881792098,
        label: "Ja",
      },
      {
        id: 286160689,
        label: "NEIN",
      },
      {
        id: 575869854,
        label: "Ich weiß es nicht",
      },
    ],
  },
  {
    id: 881792098,
    type: "checkbox",
    label: "Wie groß ist die betroffene Fläche ungefähr ?",
    options: how_large_is_approximately,
  },
  {
    id: 286160689,
    type: "checkbox",
    label: "Wie groß ist die betroffene Fläche ungefähr ?",
    options: how_large_is_approximately,
  },
  {
    id: 575869854,
    type: "checkbox",
    label: "Wie groß ist die betroffene Fläche ungefähr ?",
    options: how_large_is_approximately,
  },
];

export default bricklayer;
