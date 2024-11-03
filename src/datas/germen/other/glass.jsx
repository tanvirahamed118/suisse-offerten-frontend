import { what_kind_glass_is_it, what_kind_glass_it } from "../reuse-data";

const glassConstrucion = [
  {
    id: 9531832783,
    type: "checkbox",
    label: "Welche Leistungen sollen erbracht werden ?",
    options: [
      {
        id: 5018590533,
        label: "Einbau oder Austausch von Glasscheiben",
        des: "Z.B. für Fenster, Türen usw.",
      },
      {
        id: 1802496041,
        label: "Bau einer Glaskonstruktion",
        des: "Z.B. für Geländer, Wände, Raumteiler, Balkone, Terrassen, Wintergärten, Überdachungen etc.",
      },
      {
        id: 4092327922,
        label: "Einbau einer Tierklappe",
      },
      {
        id: 5629230190,
        label: "Glasschneiden",
        credit: 8,
      },
      {
        label: "Andere",
        credit: 5,
      },
    ],
  },
  {
    id: 5018590533,
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
    label: "Are the glass panes identical (in size and glazing)  ?",
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
    label: "Are the glass panes identical (in size and glazing)  ?",
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
    id: 1802496041,
    type: "checkbox",
    label: "Was für eine Glasstruktur ?",
    options: [
      { id: 944845095, label: "Geländer", credit: 7 },
      { id: 569325115, label: "Wand / Raumteiler", credit: 12 },
      { id: 883145416, label: "Balkon / Terrasse / Wintergarten", credit: 15 },
      { id: 725047458, label: "Dach", credit: 20 },
      { id: 950374485, label: "Andere", credit: 5 },
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
    label: "Verfügt es über ein Schiebeelement ?",
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
    label: "Does it have a sliding element",
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
    id: 4092327922,
    type: "checkbox",
    label: "Wo soll die Tierklappe eingebaut werden ?",
    options: [
      { id: 770964319, label: "Fenster", credit: 4 },
      { label: "Tür", credit: 7 },
      { label: "Wand", credit: 8 },
      { label: "Anderswo", credit: 5 },
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
      { id: 363711932, label: "Ja, die Tierklappe ist schon da" },
      {
        id: 511289464,
        label: "NEIN, die Tierklappe muss noch gekauft werden",
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
      { id: 363711932, label: "Ja, die Tierklappe ist schon da" },
      {
        id: 511289464,
        label: "NEIN, die Tierklappe muss noch gekauft werden",
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
      { id: 363711932, label: "Ja, die Tierklappe ist schon da" },
      {
        id: 511289464,
        label: "NEIN, die Tierklappe muss noch gekauft werden",
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
  // Andere
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
      { id: 363711932, label: "Ja, die Tierklappe ist schon da" },
      {
        id: 511289464,
        label: "NEIN, die Tierklappe muss noch gekauft werden",
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
  // Andere
  // installation end

  // glass cutting
  {
    id: 5629230190,
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
