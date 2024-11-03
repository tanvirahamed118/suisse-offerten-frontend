import {
  how_big_is_approximately,
  how_big_is_metal_structure_approximately,
  how_many_goals,
  is_the_required_available,
} from "../../reuse-data";

const metalConstruction = [
  {
    id: 467558696,
    type: "checkbox",
    label: "Was erfordert ein Dienst ?",
    options: [
      {
        id: 425432382,
        label: "Geländer",
        des: "Z.B. für Treppen, Balkone etc.",
      },
      {
        id: 998833810,
        label: "Treppe",
      },
      {
        id: 621442113,
        label: "Tor",
      },
      {
        id: 409898095,
        label: "Maßgefertigte Metallkonstruktion",
        des: "Z.B. Fahrradunterstand, Unterbau, Möbel, Briefkasten etc.",
      },
      {
        id: 691649311,
        label: "Umbau / Reparatur",
        des: "Schweißen, Löten, Schleifen, Bohren etc.",
        credit: 5,
      },
      {
        id: 943940507,
        label: "Andere",
        credit: 5,
      },
    ],
  },
  //   raling
  {
    id: 425432382,
    type: "checkbox",
    label: "Wie groß ist die Treppe ungefähr ?",
    options: how_big_is_approximately(
      787637825,
      953594623,
      880436176,
      649566233
    ),
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
    id: 998833810,
    type: "checkbox",
    label: "Wie groß ist die Treppe ungefähr ?",
    options: how_big_is_approximately(
      787637825,
      953594623,
      880436176,
      649566233
    ),
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
    id: 621442113,
    type: "checkbox",
    label: "Wie viele Tore ?",
    options: how_many_goals(787637825, 953594623, 880436176, 649566233),
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
    id: 409898095,
    type: "checkbox",
    label: "Wie groß ist die Sonderanfertigung aus Metall ungefähr ?",
    options: how_big_is_metal_structure_approximately(
      787637825,
      953594623,
      880436176,
      649566233
    ),
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
    id: 691649311,
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

export default metalConstruction;
