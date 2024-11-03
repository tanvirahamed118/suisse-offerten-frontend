const bricklayer = [
  {
    id: 939997513,
    type: "multibox",
    mainId: 234212078,
    label: "Was sollte getan werden ?",
    options: [
      {
        label: "Wand",
      },
      {
        label: "Boden",
      },
      {
        label: "Fenster Türen",
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
    id: 234212078,
    type: "multibox",
    mainId: 448580108,
    label: "Was sollte getan werden ?",
    options: [
      {
        label: "Gießen / Betonieren",
      },
      {
        label: "Abrasion / Plaster",
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
        label: "Reparieren",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 448580108,
    type: "checkbox",
    label: "Müssen die Baumaterialien selbst mitgebracht werden ?",
    options: [
      {
        id: 727159075,
        label: "Ja",
      },
      {
        id: 673821165,
        label: "NEIN",
      },
      { id: 359208739, label: "Ich weiß es nicht" },
    ],
  },
  {
    id: 727159075,
    type: "checkbox",
    label: "Wie groß ist das betroffene Gebiet ungefähr ?",
    options: [
      {
        label: "Klein",
        des: "Z. B. Teil eines Zauberstabs usw.",
        credit: 10,
      },
      {
        label: "Medium",
        des: "Z. B. ganzer Wand, Raum, Boden usw.",
        credit: 15,
      },
      {
        label: "Groß",
        des: "Z.B. Garage, Anbau, Keller, Wohnung etc.",
        credit: 25,
      },
      {
        label: "Very Groß",
        des: "Z.B. ganzes Haus usw.",
        credit: 35,
      },
    ],
  },
  {
    id: 673821165,
    type: "checkbox",
    label: "Wie groß ist das betroffene Gebiet ungefähr ?",
    options: [
      {
        label: "Klein",
        des: "Z. B. Teil eines Zauberstabs usw.",
        credit: 10,
      },
      {
        label: "Medium",
        des: "Z. B. ganzer Wand, Raum, Boden usw.",
        credit: 15,
      },
      {
        label: "Groß",
        des: "Z.B. Garage, Anbau, Keller, Wohnung etc.",
        credit: 25,
      },
      {
        label: "Very Groß",
        des: "Z.B. ganzes Haus usw.",
        credit: 35,
      },
    ],
  },
  {
    id: 359208739,
    type: "checkbox",
    label: "Wie groß ist das betroffene Gebiet ungefähr ?",
    options: [
      {
        label: "Klein",
        des: "Z. B. Teil eines Zauberstabs usw.",
        credit: 10,
      },
      {
        label: "Medium",
        des: "Z. B. ganzer Wand, Raum, Boden usw.",
        credit: 15,
      },
      {
        label: "Groß",
        des: "Z.B. Garage, Anbau, Keller, Wohnung etc.",
        credit: 25,
      },
      {
        label: "Very Groß",
        des: "Z.B. ganzes Haus usw.",
        credit: 35,
      },
    ],
  },
];
export default bricklayer;
