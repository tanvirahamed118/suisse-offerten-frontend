import { questionCheckboxItem, what_kind_glass_it } from "../../reuse-data";

const glass = [
  {
    id: 364958112,
    type: "checkbox",
    label: "What services should be provided ?",
    options: [
      {
        id: 674971520,
        label: "Installation or replacement of glass panes",
        des: "E.g. for windows, doors, etc.",
      },
      {
        id: 418964952,
        label: "Construction of a glass structure",
        des: "E.g. for railings, walls, room dividers, balconies, terraces, winter gardens, roofing etc.",
      },
      {
        id: 677791754,
        label: "Installation of an animal flap",
      },
      {
        id: 872235413,
        label: "Glass cutting",
        credit: 8,
      },
      {
        id: 360147334,
        label: "Other",
        credit: 5,
      },
    ],
  },
  {
    id: 674971520,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: [
      {
        id: 111602414,
        label: "1",
        credit: 6,
      },
      {
        id: 562318016,
        label: "2 to 3",
        credit: 12,
      },
      {
        id: 939918080,
        label: "4 or more",
        credit: 18,
      },
    ],
  },
  {
    id: 111602414,
    type: "checkbox",
    label: "What kind of glass it is ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 111602414,
    type: "checkbox",
    label: "What kind of glass it is ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 339687385,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 215763667,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 669030860,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 335413326,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 562318016,
    type: "checkbox",
    label: "Are the glass panes identical ?",
    options: questionCheckboxItem(380687428, null),
  },
  {
    id: 380687428,
    type: "checkbox",
    label: "What kind of glass it is ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 339687385,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 215763667,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 669030860,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 335413326,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 871275869,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 339687385,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 215763667,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 669030860,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 335413326,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 939918080,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: questionCheckboxItem(380687428, null),
  },
  {
    id: 380687428,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 339687385,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 215763667,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 669030860,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 335413326,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 871275869,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 339687385,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 215763667,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 669030860,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 335413326,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },

  // construction of glass
  {
    id: 418964952,
    type: "checkbox",
    label: "What kind of glass structure ?",
    options: [
      {
        id: 649582213,
        label: "railing",
        credit: 10,
      },
      {
        id: 483870645,
        label: "Wall / room divider",
        credit: 15,
      },
      {
        label: "Balcony / Terrace / Winter garden",
        credit: 15,
      },
      {
        id: 246136841,
        label: "canopy",
        credit: 25,
      },
      {
        id: 936541274,
        label: "Other",
        credit: 8,
      },
    ],
  },
  {
    id: 649582213,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 339687385,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 215763667,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 669030860,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 335413326,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 483870645,
    type: "checkbox",
    label: "Does the Wall have a sliding element ?",
    options: [
      {
        id: 8539217833,
        label: "Yes",
      },
      {
        label: "No",
      },
    ],
  },
  {
    id: 8539217833,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 339687385,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 215763667,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 669030860,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 335413326,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 434878142,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 339687385,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 215763667,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 669030860,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 335413326,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 246136841,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_it(339687385, 215763667, 669030860, 335413326),
  },
  {
    id: 339687385,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 215763667,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 669030860,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 335413326,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  // construction of glass

  // installation of an animal flap
  {
    id: 677791754,
    type: "checkbox",
    label: "Where should the animal flap be installed ?",
    options: [
      {
        id: 943974459,
        label: "Window",
        credit: 6,
      },
      {
        id: 498687716,
        label: "door",
        credit: 8,
      },
      {
        id: 782946941,
        label: "Wall",
        credit: 13,
      },
      {
        id: 620875582,
        label: "Elsewhere",
        credit: 8,
      },
    ],
  },
  {
    id: 943974459,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: [
      {
        id: 331202180,
        label: "Double glazing",
      },
      {
        id: 798133671,
        label: "Triple glazing",
      },
      {
        id: 972174489,
        label: "Other glazing",
      },
    ],
  },
  {
    id: 331202180,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 798133671,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 972174489,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 498687716,
    type: "checkbox",
    label: "What kind of glass structure ?",
    options: [
      {
        id: 331202180,
        label: "Double glazing",
      },
      {
        id: 798133671,
        label: "Triple glazing",
      },
      {
        id: 972174489,
        label: "Other glazing",
      },
    ],
  },
  {
    id: 331202180,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 798133671,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 972174489,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 782946941,
    type: "checkbox",
    label: "What kind of glass structure ?",
    options: [
      {
        id: 331202180,
        label: "Double glazing",
      },
      {
        id: 798133671,
        label: "Triple glazing",
      },
      {
        id: 972174489,
        label: "Other glazing",
      },
    ],
  },
  {
    id: 331202180,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 798133671,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 972174489,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 620875582,
    type: "checkbox",
    label: "What kind of glass structure ?",
    options: [
      {
        id: 331202180,
        label: "Double glazing",
      },
      {
        id: 798133671,
        label: "Triple glazing",
      },
      {
        id: 972174489,
        label: "Other glazing",
      },
    ],
  },
  {
    id: 331202180,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 798133671,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 972174489,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  // installation of an animal flap

  // glass cutting
  {
    id: 872235413,
    type: "checkbox",
    label: "Is the glass that needs to be cut already there ?",
    options: [
      {
        label: "Yes, the glass is already there",
      },
      {
        label: "No, I need glass with exact dimensions",
      },
    ],
  },
  // glass cutting
];

export default glass;
