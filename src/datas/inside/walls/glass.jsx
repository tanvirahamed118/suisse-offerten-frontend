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
      },
      {
        id: 360147334,
        label: "Other",
      },
    ],
  },
  {
    id: 674971520,
    type: "checkbox",
    label: "How many panes of glass need to be installed or replaced ?",
    options: [
      {
        id: 111602414,
        label: "1",
      },
      {
        id: 562318016,
        label: "2 to 3",
      },
      {
        id: 939918080,
        label: "4 or more",
      },
    ],
  },
  {
    id: 111602414,
    type: "checkbox",
    label: "How many panes of glass need to be installed or replaced ?",
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
    label: "How many panes of glass need to be installed or replaced ?",
    options: questionCheckboxItem(380687428, 871275869),
  },
  {
    id: 380687428,
    type: "checkbox",
    label: "How many panes of glass need to be installed or replaced ?",
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
    label: "How many panes of glass need to be installed or replaced ?",
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
    label: "How many panes of glass need to be installed or replaced ?",
    options: questionCheckboxItem(380687428, 871275869),
  },
  {
    id: 380687428,
    type: "checkbox",
    label: "How many panes of glass need to be installed or replaced ?",
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
    label: "How many panes of glass need to be installed or replaced ?",
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
      },
      {
        id: 483870645,
        label: "Wall / room divider",
      },
      {
        id: 434878142,
        label: "Balcony / Terrace / Winter garden",
      },
      {
        id: 246136841,
        label: "canopy",
      },
      {
        id: 936541274,
        label: "Other",
      },
    ],
  },
  {
    id: 649582213,
    type: "checkbox",
    label: "How many panes of glass need to be installed or replaced ?",
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
    label: "How many panes of glass need to be installed or replaced ?",
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
    label: "How many panes of glass need to be installed or replaced ?",
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
    label: "How many panes of glass need to be installed or replaced ?",
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
    label: "What kind of glass structure ?",
    options: [
      {
        id: 943974459,
        label: "Window",
      },
      {
        id: 498687716,
        label: "door",
      },
      {
        id: 782946941,
        label: "Wall",
      },
      {
        id: 620875582,
        label: "Elsewhere",
      },
    ],
  },
  {
    id: 943974459,
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
