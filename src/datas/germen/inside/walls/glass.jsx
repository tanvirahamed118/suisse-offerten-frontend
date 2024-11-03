import { questionCheckboxItem, what_kind_glass_it } from "../../reuse-data";

const glass = [
  {
    id: 364958112,
    type: "checkbox",
    label: "Welche Leistungen sollen erbracht werden ?",
    options: [
      {
        id: 674971520,
        label: "Einbau oder Austausch von Glasscheiben",
        des: "Z.B. für Fenster, Türen usw.",
      },
      {
        id: 418964952,
        label: "Bau einer Glaskonstruktion",
        des: "Z.B. für Geländer, Wände, Raumteiler, Balkone, Terrassen, Wintergärten, Überdachungen etc.",
      },
      {
        id: 677791754,
        label: "Einbau einer Tierklappe",
      },
      {
        id: 872235413,
        label: "Glasschneiden",
        credit: 8,
      },
      {
        id: 360147334,
        label: "Andere",
        credit: 5,
      },
    ],
  },
  {
    id: 674971520,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: [
      {
        id: 111602414,
        label: "1",
        credit: 6,
      },
      {
        id: 562318016,
        label: "2 bis 3",
        credit: 12,
      },
      {
        id: 939918080,
        label: "4 oder mehr",
        credit: 18,
      },
    ],
  },
  {
    id: 111602414,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 111602414,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 339687385,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 215763667,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 669030860,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 335413326,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 562318016,
    type: "checkbox",
    label: "Sind die Glasscheiben identisch ?",
    options: questionCheckboxItem(380687428, null),
  },
  {
    id: 380687428,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 339687385,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 215763667,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 669030860,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 335413326,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 871275869,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 339687385,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 215763667,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 669030860,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 335413326,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 939918080,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: questionCheckboxItem(380687428, null),
  },
  {
    id: 380687428,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 339687385,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 215763667,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 669030860,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 335413326,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 871275869,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 339687385,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 215763667,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 669030860,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 335413326,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },

  // construction of glass
  {
    id: 418964952,
    type: "checkbox",
    label: "Was für eine Glasstruktur ?",
    options: [
      {
        id: 649582213,
        label: "Geländer",
        credit: 10,
      },
      {
        id: 483870645,
        label: "Wand / Raumteiler",
        credit: 15,
      },
      {
        label: "Balkon / Terrasse / Wintergarten",
        credit: 15,
      },
      {
        id: 246136841,
        label: "canopy",
        credit: 25,
      },
      {
        id: 936541274,
        label: "Andere",
        credit: 8,
      },
    ],
  },
  {
    id: 649582213,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 339687385,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 215763667,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 669030860,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 335413326,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 483870645,
    type: "checkbox",
    label: "Verfügt die Wand über ein Schiebeelement ?",
    options: [
      {
        id: 8539217833,
        label: "Ja",
      },
      {
        label: "NEIN",
      },
    ],
  },
  {
    id: 8539217833,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 339687385,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 215763667,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 669030860,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 335413326,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 434878142,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 339687385,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 215763667,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 669030860,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 335413326,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 246136841,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 339687385,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 215763667,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 669030860,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 335413326,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  // construction of glass

  // installation of an animal flap
  {
    id: 677791754,
    type: "checkbox",
    label: "Wo soll die Tierklappe eingebaut werden ?",
    options: [
      {
        id: 943974459,
        label: "Fenster",
        credit: 6,
      },
      {
        id: 498687716,
        label: "Tür",
        credit: 8,
      },
      {
        id: 782946941,
        label: "Wand",
        credit: 13,
      },
      {
        id: 620875582,
        label: "Anderswo",
        credit: 8,
      },
    ],
  },
  {
    id: 943974459,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
    options: [
      {
        id: 331202180,
        label: "Doppelverglasung",
      },
      {
        id: 798133671,
        label: "Dreifachverglasung",
      },
      {
        id: 972174489,
        label: "Andere Verglasungen",
      },
    ],
  },
  {
    id: 331202180,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 798133671,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 972174489,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 498687716,
    type: "checkbox",
    label: "Was für eine Glasstruktur ?",
    options: [
      {
        id: 331202180,
        label: "Doppelverglasung",
      },
      {
        id: 798133671,
        label: "Dreifachverglasung",
      },
      {
        id: 972174489,
        label: "Andere Verglasungen",
      },
    ],
  },
  {
    id: 331202180,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 798133671,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 972174489,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 782946941,
    type: "checkbox",
    label: "Was für eine Glasstruktur ?",
    options: [
      {
        id: 331202180,
        label: "Doppelverglasung",
      },
      {
        id: 798133671,
        label: "Dreifachverglasung",
      },
      {
        id: 972174489,
        label: "Andere Verglasungen",
      },
    ],
  },
  {
    id: 331202180,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 798133671,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 972174489,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 620875582,
    type: "checkbox",
    label: "Was für eine Glasstruktur ?",
    options: [
      {
        id: 331202180,
        label: "Doppelverglasung",
      },
      {
        id: 798133671,
        label: "Dreifachverglasung",
      },
      {
        id: 972174489,
        label: "Andere Verglasungen",
      },
    ],
  },
  {
    id: 331202180,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 798133671,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 972174489,
    type: "doubleInput",
    label: "Ungefähre Maße des Glases (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  // installation of an animal flap

  // glass cutting
  {
    id: 872235413,
    type: "checkbox",
    label: "Liegt das zu schneidende Glas schon vor ?",
    options: [
      {
        label: "Ja, das Glas ist schon da",
      },
      {
        label: "NEIN, Ich benötige Glas mit genauen Maßen",
      },
    ],
  },
  // glass cutting
];

export default glass;
