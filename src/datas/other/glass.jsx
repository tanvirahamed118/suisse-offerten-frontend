import { what_kind_glass_is_it, what_kind_glass_it } from "../reuse-data";

const glass = [
  {
    id: 236133413,
    type: "checkbox",
    label: "What services should be provided ?",
    options: [
      {
        id: 626292318,
        label: "Installation or replacement of glass panes",
        des: "E.g. for windows, doors, etc.",
      },
      {
        id: 659731144,
        label: "Construction of a glass structure",
        des: "E.g. for railings, walls, room dividers, balconies, terraces, winter gardens, roofing etc.",
      },
      {
        id: 487244186,
        label: "Installation of an animal flap",
      },
      {
        id: 566800064,
        label: "Glass cutting",
      },
      {
        id: 963442728,
        label: "Other",
      },
    ],
  },
  {
    id: 626292318,
    type: "checkbox",
    label: "How many panes of glass need to be installed or replaced ?",
    options: [
      {
        id: 954851093,
        label: "1",
      },
      {
        id: 907349252,
        label: "2 to 3",
      },
      {
        id: 473639302,
        label: "4 or more",
      },
    ],
  },
  //   1 start
  {
    id: 954851093,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  //   1 end
  //   2 start
  {
    id: 907349252,
    type: "checkbox",
    label: "re the glass panes identical (in size and glazing) ?",
    options: [
      { label: "Yes", id: 613446522 },
      { label: "No", id: 487854228 },
    ],
  },
  {
    id: 613446522,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 487854228,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  //   2 end
  //   4 start
  {
    id: 473639302,
    type: "checkbox",
    label: "re the glass panes identical (in size and glazing) ?",
    options: [
      { label: "Yes", id: 613446522 },
      { label: "No", id: 487854228 },
    ],
  },
  {
    id: 613446522,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 487854228,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },

  //  constructions start
  {
    id: 659731144,
    type: "checkbox",
    label: "What kind of glass structure ?",
    options: [
      { id: 944845095, label: "railing" },
      { id: 569325115, label: "Wall / room divider" },
      { id: 883145416, label: "Balcony / Terrace / Winter garden" },
      { id: 725047458, label: "canopy" },
      { id: 950374485, label: "Other" },
    ],
  },
  {
    id: 944845095,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 569325115,
    type: "checkbox",
    label: "re the glass panes identical (in size and glazing) ?",
    options: [
      { label: "Yes", id: 613446522 },
      { label: "No", id: 487854228 },
    ],
  },
  {
    id: 613446522,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 487854228,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 725047458,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "Approximate dimensions of the glass (without frame",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  //  constructions end

  //   installation start
  {
    id: 487244186,
    type: "checkbox",
    label: "Where should the animal flap be installed ?",
    options: [
      { id: 770964319, label: "Window" },
      { id: 942592026, label: "door" },
      { id: 431772169, label: "Wall" },
      { id: 794779735, label: "Elsewhere" },
    ],
  },
  // window
  {
    id: 770964319,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_is_it(230627422, 619966390, 992165658),
  },
  {
    id: 230627422,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: [{ id: 869431863, label: "input" }],
  },
  {
    id: 619966390,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: [{ id: 869431863, label: "input" }],
  },
  {
    id: 992165658,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: [{ id: 869431863, label: "input" }],
  },
  {
    id: 869431863,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: [
      { id: 363711932, label: "Yes, the animal flap is already there" },
      {
        id: 511289464,
        label: "No, the animal flap still needs to be purchased",
      },
    ],
  },
  {
    id: 363711932,
    type: "checkbox",
    label: "Which animal is the animal flap for ?",
    options: [{ label: "Cat" }, { label: "Dog" }, { label: "Other" }],
  },
  {
    id: 511289464,
    type: "checkbox",
    label: "Which animal is the animal flap for ?",
    options: [{ label: "Cat" }, { label: "Dog" }, { label: "Other" }],
  },
  // window
  // door
  {
    id: 942592026,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_is_it(230627422, 619966390, 992165658),
  },
  {
    id: 230627422,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: [{ id: 869431863, label: "input" }],
  },
  {
    id: 619966390,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: [{ id: 869431863, label: "input" }],
  },
  {
    id: 992165658,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: [{ id: 869431863, label: "input" }],
  },
  {
    id: 869431863,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: [
      { id: 363711932, label: "Yes, the animal flap is already there" },
      {
        id: 511289464,
        label: "No, the animal flap still needs to be purchased",
      },
    ],
  },
  {
    id: 363711932,
    type: "checkbox",
    label: "Which animal is the animal flap for ?",
    options: [{ label: "Cat" }, { label: "Dog" }, { label: "Other" }],
  },
  {
    id: 511289464,
    type: "checkbox",
    label: "Which animal is the animal flap for ?",
    options: [{ label: "Cat" }, { label: "Dog" }, { label: "Other" }],
  },
  // door
  // wall
  {
    id: 431772169,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_is_it(230627422, 619966390, 992165658),
  },
  {
    id: 230627422,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: [{ id: 869431863, label: "input" }],
  },
  {
    id: 619966390,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: [{ id: 869431863, label: "input" }],
  },
  {
    id: 992165658,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: [{ id: 869431863, label: "input" }],
  },
  {
    id: 869431863,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: [
      { id: 363711932, label: "Yes, the animal flap is already there" },
      {
        id: 511289464,
        label: "No, the animal flap still needs to be purchased",
      },
    ],
  },
  {
    id: 363711932,
    type: "checkbox",
    label: "Which animal is the animal flap for ?",
    options: [{ label: "Cat" }, { label: "Dog" }, { label: "Other" }],
  },
  {
    id: 511289464,
    type: "checkbox",
    label: "Which animal is the animal flap for ?",
    options: [{ label: "Cat" }, { label: "Dog" }, { label: "Other" }],
  },
  // wall
  // other
  {
    id: 794779735,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_kind_glass_is_it(230627422, 619966390, 992165658),
  },
  {
    id: 230627422,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: [{ id: 869431863, label: "input" }],
  },
  {
    id: 619966390,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: [{ id: 869431863, label: "input" }],
  },
  {
    id: 992165658,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: [{ id: 869431863, label: "input" }],
  },
  {
    id: 869431863,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: [
      { id: 363711932, label: "Yes, the animal flap is already there" },
      {
        id: 511289464,
        label: "No, the animal flap still needs to be purchased",
      },
    ],
  },
  {
    id: 363711932,
    type: "checkbox",
    label: "Which animal is the animal flap for ?",
    options: [{ label: "Cat" }, { label: "Dog" }, { label: "Other" }],
  },
  {
    id: 511289464,
    type: "checkbox",
    label: "Which animal is the animal flap for ?",
    options: [{ label: "Cat" }, { label: "Dog" }, { label: "Other" }],
  },
  // other
  // installation end

  // glass cutting
  {
    id: 566800064,
    type: "checkbox",
    label: "Is the glass that needs to be cut already there ?",
    options: [
      { label: "Yes, the glass is already there" },
      { label: "No, I need glass with exact dimensions" },
    ],
  },
  // glass cutting
];

export default glass;