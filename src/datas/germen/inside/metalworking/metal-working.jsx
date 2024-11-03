import { is_the_required_available } from "../../reuse-data";

const metalWorking = [
  {
    id: 759709724,
    type: "checkbox",
    label: "Was erfordert ein Dienst ?",
    options: [
      {
        id: 9064676601,
        label: "Geländer",
        des: "Z.B. für Treppen, Balkone etc.",
      },
      {
        id: 4173396498,
        label: "Treppe",
      },
      {
        id: 4716963594,
        label: "Ziel",
      },
      {
        id: 7255343011,
        label: "Maßgefertigte Metallkonstruktion",
        des: "Z.B. Fahrradunterstand, Unterbau, Möbel, Briefkasten etc.",
      },
      {
        id: 7528094474,
        label: "Umbau / Reparatur",
        des: "Schweißen, Löten, Schleifen, Bohren etc.",
        credit: 10,
      },
      {
        label: "Andere",
        credit: 10,
      },
    ],
  },
  //   raling
  {
    id: 9064676601,
    type: "checkbox",
    label: "Wie groß ist die betroffene Fläche ungefähr ?",
    options: [
      {
        id: 787637825,
        des: "Up to 4 m2",
        label: "Klein",
        credit: 20,
      },
      {
        id: 953594623,
        des: "5 bis 9 m2",
        label: "Medium",
        credit: 30,
      },
      {
        id: 880436176,
        des: "10 bis 24 m2",
        label: "Groß",
        credit: 40,
      },
      {
        id: 649566233,
        des: "25 m2 oder mehr",
        label: "Very Groß",
        credit: 50,
      },
    ],
  },
  {
    id: 787637825,
    type: "checkbox",
    label: "Ist das benötigte Material vorhanden ?",
    options: is_the_required_available,
  },
  {
    id: 953594623,
    type: "checkbox",
    label: "Ist das benötigte Material vorhanden ?",
    options: is_the_required_available,
  },
  {
    id: 880436176,
    type: "checkbox",
    label: "Ist das benötigte Material vorhanden ?",
    options: is_the_required_available,
  },
  {
    id: 649566233,
    type: "checkbox",
    label: "Ist das benötigte Material vorhanden ?",
    options: is_the_required_available,
  },
  //   raling
  //   stairs
  {
    id: 4173396498,
    type: "checkbox",
    label: "Wie groß ist die betroffene Fläche ungefähr ?",
    options: [
      {
        id: 787637825,
        des: "Bis zu 4 m2",
        label: "Klein",
        credit: 10,
      },
      {
        id: 953594623,
        des: "5 bis 9 m2",
        label: "Medium",
        credit: 30,
      },
      {
        id: 880436176,
        des: "10 bis 24 m2",
        label: "Groß",
        credit: 50,
      },
      {
        id: 649566233,
        des: "25 m2 oder mehr",
        label: "Very Groß",
        credit: 60,
      },
    ],
  },
  {
    id: 787637825,
    type: "checkbox",
    label: "Ist das benötigte Material vorhanden ?",
    options: is_the_required_available,
  },
  {
    id: 953594623,
    type: "checkbox",
    label: "Ist das benötigte Material vorhanden ?",
    options: is_the_required_available,
  },
  {
    id: 880436176,
    type: "checkbox",
    label: "Ist das benötigte Material vorhanden ?",
    options: is_the_required_available,
  },
  {
    id: 649566233,
    type: "checkbox",
    label: "Ist das benötigte Material vorhanden ?",
    options: is_the_required_available,
  },
  //   stairs
  // goal
  {
    id: 4716963594,
    type: "checkbox",
    label: "Wie viele Tore ?",
    options: [
      {
        id: 787637825,
        label: "Ein Klein-Tor",
        credit: 15,
      },
      {
        id: 953594623,
        label: "Ein normales Tor",
        credit: 30,
      },
      {
        id: 880436176,
        label: "2 bis 3 Tore",
        credit: 50,
      },
      {
        id: 649566233,
        label: "4 Tore oder mehr",
        credit: 60,
      },
    ],
  },
  {
    id: 787637825,
    type: "checkbox",
    label: "Ist das benötigte Material vorhanden ?",
    options: is_the_required_available,
  },
  {
    id: 953594623,
    type: "checkbox",
    label: "Ist das benötigte Material vorhanden ?",
    options: is_the_required_available,
  },
  {
    id: 880436176,
    type: "checkbox",
    label: "Ist das benötigte Material vorhanden ?",
    options: is_the_required_available,
  },
  {
    id: 649566233,
    type: "checkbox",
    label: "Ist das benötigte Material vorhanden ?",
    options: is_the_required_available,
  },
  // goal
  // custom
  {
    id: 7255343011,
    type: "checkbox",
    label: "Wie groß ist die Sonderanfertigung ungefähr ?",
    options: [
      {
        id: 787637825,
        des: "Bis zu 4 m2",
        label: "Klein",
        credit: 10,
      },
      {
        id: 953594623,
        des: "5 bis 9 m2",
        label: "Medium",
        credit: 30,
      },
      {
        id: 880436176,
        des: "10 bis 24 m2",
        label: "Groß",
        credit: 50,
      },
      {
        id: 649566233,
        des: "25 m2 oder mehr",
        label: "Very Groß",
        credit: 60,
      },
    ],
  },
  {
    id: 787637825,
    type: "checkbox",
    label: "Ist das benötigte Material vorhanden ?",
    options: is_the_required_available,
  },
  {
    id: 953594623,
    type: "checkbox",
    label: "Ist das benötigte Material vorhanden ?",
    options: is_the_required_available,
  },
  {
    id: 880436176,
    type: "checkbox",
    label: "Ist das benötigte Material vorhanden ?",
    options: is_the_required_available,
  },
  {
    id: 649566233,
    type: "checkbox",
    label: "Ist das benötigte Material vorhanden ?",
    options: is_the_required_available,
  },
  // custom
  // modification
  {
    id: 7528094474,
    type: "checkbox",
    label: "Was sollte getan werden ?",
    options: [
      {
        label: "Schweißen",
      },
      {
        label: "Lot",
      },
      {
        label: "Biegen",
      },
      {
        label: "Bohren",
      },
    ],
  },

  // modification
];

export default metalWorking;
