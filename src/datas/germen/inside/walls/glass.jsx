import { what_kind_glass_is_it, what_kind_glass_it } from "../../reuse-data";

const glassConstrucion = [
  {
    id: 364958112,
    type: "checkbox",
    label: "Welche Leistungen sollen erbracht werden ?",
    options: [
      {
        id: 626292318,
        label: "Einbau oder Austausch von Glasscheiben",
        des: "Z.B. für Fenster, Türen usw.",
      },
      {
        id: 659731144,
        label: "Bau einer Glaskonstruktion",
        des: "Z.B. für Geländer, Wände, Raumteiler, Balkone, Terrassen, Wintergärten, Überdachungen etc.",
      },
      {
        id: 487244186,
        label: "Einbau einer Tierklappe",
        credit: 10,
      },
      {
        id: 566800064,
        label: "Glasschneiden",
        credit: 10,
      },
      {
        id: 963442728,
        label: "Andere",
        credit: 10,
      },
    ],
  },
  {
    id: 626292318,
    type: "checkbox",
    label: "Wie viele Glasscheiben müssen eingebaut bzw. ausgetauscht werden ?",
    options: [
      {
        id: 954851093,
        label: "1",
        credit: 5,
      },
      {
        id: 907349252,
        label: "2 bis 3",
        credit: 10,
      },
      {
        id: 473639302,
        label: "4 oder mehr",
        credit: 15,
      },
    ],
  },
  //   1 start
  {
    id: 954851093,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  //   1 end
  //   2 start
  {
    id: 907349252,
    type: "checkbox",
    label: "Sind die Glasscheiben identisch (in Größe und Verglasung) ?",
    options: [{ label: "Ja", id: 613446522 }, { label: "NEIN" }],
  },
  {
    id: 613446522,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 487854228,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  //   2 end
  //   4 start
  {
    id: 473639302,
    type: "checkbox",
    label: "Sind die Glasscheiben identisch (in Größe und Verglasung) ?",
    options: [{ label: "Ja", id: 613446522 }, { label: "NEIN" }],
  },
  {
    id: 613446522,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 487854228,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },

  //  constructions start
  {
    id: 659731144,
    type: "checkbox",
    label: "Was für eine Glasstruktur ?",
    options: [
      { id: 944845095, label: "Geländer", credit: 15 },
      { id: 569325115, label: "Wand / Raumteiler", credit: 15 },
      { id: 883145416, label: "Balkon / Terrasse / Wintergarten", credit: 15 },
      { id: 725047458, label: "Dach", credit: 20 },
      { id: 950374485, label: "Andere", credit: 10 },
    ],
  },
  {
    id: 944845095,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 569325115,
    type: "checkbox",
    label: "Verfügt es über ein Schiebeelement ?  ?",
    options: [
      { label: "Ja", id: 613446522 },
      { label: "NEIN", id: 487854228 },
    ],
  },
  {
    id: 613446522,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 487854228,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 725047458,
    type: "checkbox",
    label: "Verfügt es über ein Schiebeelement ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  //  constructions end

  //   installation start
  {
    id: 487244186,
    type: "checkbox",
    label: "Wo soll die Tierklappe eingebaut werden ?",
    options: [
      { id: 770964319, label: "Fenster" },
      { id: 942592026, label: "Tür" },
      { id: 431772169, label: "Wand" },
      { id: 794779735, label: "Anderswo" },
    ],
  },
  // window
  {
    id: 770964319,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_is_it(230627422, 619966390, 992165658),
  },
  {
    id: 230627422,
    type: "doubleInput",
    mainId: 869431863,
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 619966390,
    type: "doubleInput",
    mainId: 869431863,
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 992165658,
    type: "doubleInput",
    mainId: 869431863,
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 869431863,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: [
      { id: 363711932, label: "Ja, the animal flap is already there" },
      {
        id: 511289464,
        label: "NEIN, the animal flap still needs to be purchased",
      },
    ],
  },
  {
    id: 363711932,
    type: "checkbox",
    label: "Für welches Tier ist die Tierklappe ?",
    options: [{ label: "Katze" }, { label: "Hund" }, { label: "Andere" }],
  },
  {
    id: 511289464,
    type: "checkbox",
    label: "Für welches Tier ist die Tierklappe ?",
    options: [{ label: "Katze" }, { label: "Hund" }, { label: "Andere" }],
  },
  // window
  // door
  {
    id: 942592026,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_is_it(230627422, 619966390, 992165658),
  },
  {
    id: 230627422,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 619966390,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 992165658,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 869431863,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [
      { id: 363711932, label: "Ja, the animal flap is already there" },
      {
        id: 511289464,
        label: "NEIN, the animal flap still needs to be purchased",
      },
    ],
  },
  {
    id: 363711932,
    type: "checkbox",
    label: "Für welches Tier ist die Tierklappe ?",
    options: [{ label: "Katze" }, { label: "Hund" }, { label: "Andere" }],
  },
  {
    id: 511289464,
    type: "checkbox",
    label: "Für welches Tier ist die Tierklappe ?",
    options: [{ label: "Katze" }, { label: "Hund" }, { label: "Andere" }],
  },
  // door
  // wall
  {
    id: 431772169,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_is_it(230627422, 619966390, 992165658),
  },
  {
    id: 230627422,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 619966390,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 992165658,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 869431863,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: [
      { id: 363711932, label: "Ja, the animal flap is already there" },
      {
        id: 511289464,
        label: "NEIN, the animal flap still needs to be purchased",
      },
    ],
  },
  {
    id: 363711932,
    type: "checkbox",
    label: "Für welches Tier ist die Tierklappe ?",
    options: [{ label: "Katze" }, { label: "Hund" }, { label: "Andere" }],
  },
  {
    id: 511289464,
    type: "checkbox",
    label: "Für welches Tier ist die Tierklappe ?",
    options: [{ label: "Katze" }, { label: "Hund" }, { label: "Andere" }],
  },
  // wall
  // other
  {
    id: 794779735,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_is_it(230627422, 619966390, 992165658),
  },
  {
    id: 230627422,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 619966390,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 992165658,
    type: "doubleInput",
    label: "Um was für ein Glas handelt es sich ?",
    options: [{ height: "Höhe in cm", width: "Breite in cm" }],
  },
  {
    id: 869431863,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: [
      { id: 363711932, label: "Ja, the animal flap is already there" },
      {
        id: 511289464,
        label: "NEIN, the animal flap still needs to be purchased",
      },
    ],
  },
  {
    id: 363711932,
    type: "checkbox",
    label: "Für welches Tier ist die Tierklappe ?",
    options: [{ label: "Katze" }, { label: "Hund" }, { label: "Andere" }],
  },
  {
    id: 511289464,
    type: "checkbox",
    label: "Für welches Tier ist die Tierklappe ?",
    options: [{ label: "Katze" }, { label: "Hund" }, { label: "Andere" }],
  },
  // other
  // installation end

  // glass cutting
  {
    id: 566800064,
    type: "checkbox",
    label: "Liegt das zu schneidende Glas schon vor ?",
    options: [
      { label: "Ja, das Glas ist schon da" },
      { label: "NEIN, ich brauche Glas mit genauen Maßen" },
    ],
  },
  // glass cutting
];

export default glassConstrucion;
