import { what_kind_glass_is_it, what_kind_glass_it } from "../../reuse-data";

const glassConstrucion = [
  {
    id: 364958112,
    type: "checkbox",
    label: "What services should be provided ?",
    options: [
      {
        id: 8257670115,
        label: "Installation or replacement of glass panes",
        des: "E.g. for windows, doors, etc.",
      },
      {
        id: 6635772854,
        label: "Construction of a glass structure",
        des: "E.g. for railings, walls, room dividers, balconies, terraces, winter gardens, roofing etc.",
      },
      {
        id: 8435824194,
        label: "Installation of an animal flap",
        credit: 10,
      },
      {
        id: 7504003442,
        label: "Glass cutting",
        credit: 10,
      },
      {
        id: 4971058345,
        label: "Other",
        credit: 10,
      },
    ],
  },
  {
    id: 8257670115,
    type: "checkbox",
    label: "How many panes of glass need to be installed or replaced ?",
    options: [
      {
        id: 4105124650,
        label: "1",
        credit: 5,
      },
      {
        id: 5533616166,
        label: "2 to 3",
        credit: 10,
      },
      {
        id: 3313215655,
        label: "4 or more",
        credit: 15,
      },
    ],
  },
  //   1 start
  {
    id: 4105124650,
    type: "checkbox",
    label: "What kind of glass it is ?",
    options: what_kind_glass_it(2305234357, 2553842790, 7121446540, 6535827937),
  },
  {
    id: 2305234357,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 2553842790,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 7121446540,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 6535827937,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  //   1 end
  //   2 start
  {
    id: 5533616166,
    type: "checkbox",
    label: "Are the glass panes identical (in size and glazing) ?",
    options: [{ label: "Yes", id: 613446522 }, { label: "No" }],
  },
  {
    id: 613446522,
    type: "checkbox",
    label: "What kind of glass it is ?",
    options: what_kind_glass_it(2305234357, 2553842790, 7121446540, 6535827937),
  },
  {
    id: 2305234357,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 2553842790,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 7121446540,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 6535827937,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 487854228,
    type: "checkbox",
    label: "What kind of glass it is ?",
    options: what_kind_glass_it(2305234357, 2553842790, 7121446540, 6535827937),
  },
  {
    id: 2305234357,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 2553842790,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 7121446540,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 6535827937,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  //   2 end
  //   4 start
  {
    id: 3313215655,
    type: "checkbox",
    label: "Are the glass panes identical (in size and glazing) ?",
    options: [{ label: "Yes", id: 613446522 }, { label: "No" }],
  },
  {
    id: 613446522,
    type: "checkbox",
    label: "What kind of glass it is ?",
    options: what_kind_glass_it(2305234357, 2553842790, 7121446540, 6535827937),
  },
  {
    id: 2305234357,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 2553842790,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 7121446540,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 6535827937,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 487854228,
    type: "checkbox",
    label: "What kind of glass it is ?",
    options: what_kind_glass_it(2305234357, 2553842790, 7121446540, 6535827937),
  },
  {
    id: 2305234357,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 2553842790,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 7121446540,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 6535827937,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },

  //  constructions start
  {
    id: 6635772854,
    type: "checkbox",
    label: "What kind of glass structure ?",
    options: [
      { id: 944845095, label: "railing", credit: 15 },
      { id: 569325115, label: "Wall / room divider", credit: 15 },
      { id: 883145416, label: "Balcony / Terrace / Winter garden", credit: 15 },
      { id: 725047458, label: "roof", credit: 20 },
      { id: 950374485, label: "Other", credit: 10 },
    ],
  },
  {
    id: 944845095,
    type: "checkbox",
    label: "What kind of glass it is ?",
    options: what_kind_glass_it(2305234357, 2553842790, 7121446540, 6535827937),
  },
  {
    id: 2305234357,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 2553842790,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 7121446540,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 6535827937,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 569325115,
    type: "checkbox",
    label: "Does it have a sliding element ?",
    options: [
      { label: "Yes", id: 613446522 },
      { label: "No", id: 487854228 },
    ],
  },
  {
    id: 613446522,
    type: "checkbox",
    label: "What kind of glass it is ?",
    options: what_kind_glass_it(2305234357, 2553842790, 7121446540, 6535827937),
  },
  {
    id: 2305234357,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 2553842790,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 7121446540,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 6535827937,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 487854228,
    type: "checkbox",
    label: "What kind of glass it is ?",
    options: what_kind_glass_it(2305234357, 2553842790, 7121446540, 6535827937),
  },
  {
    id: 2305234357,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 2553842790,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 7121446540,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 6535827937,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 725047458,
    type: "checkbox",
    label: "Does it have a sliding element",
    options: what_kind_glass_it(2305234357, 2553842790, 7121446540, 6535827937),
  },
  {
    id: 2305234357,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 2553842790,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 7121446540,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 6535827937,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  //  constructions end

  //   installation start
  {
    id: 8435824194,
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
    label: "What kind of glass it is ?",
    options: what_kind_glass_is_it(230627422, 619966390, 992165658),
  },
  {
    id: 230627422,
    type: "doubleInput",
    mainId: 869431863,
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 619966390,
    type: "doubleInput",
    mainId: 869431863,
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 992165658,
    type: "doubleInput",
    mainId: 869431863,
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 869431863,
    type: "checkbox",
    label: "What kind of glass it is ?",
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
    label: "What kind of glass it is ?",
    options: what_kind_glass_is_it(230627422, 619966390, 992165658),
  },
  {
    id: 230627422,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 619966390,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 992165658,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 869431863,
    type: "doubleInput",
    label: "What kind of glass it is ?",
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
    label: "What kind of glass it is ?",
    options: what_kind_glass_is_it(230627422, 619966390, 992165658),
  },
  {
    id: 230627422,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 619966390,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 992165658,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 869431863,
    type: "checkbox",
    label: "What kind of glass it is ?",
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
    label: "What kind of glass it is ?",
    options: what_kind_glass_is_it(230627422, 619966390, 992165658),
  },
  {
    id: 230627422,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 619966390,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 992165658,
    type: "doubleInput",
    label: "What kind of glass it is ?",
    options: [{ height: "Height in cm", width: "Width in cm" }],
  },
  {
    id: 869431863,
    type: "checkbox",
    label: "What kind of glass it is ?",
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
    id: 7504003442,
    type: "checkbox",
    label: "Is the glass that needs to be cut already there ?",
    options: [
      { label: "Yes, the glass is already there" },
      { label: "No, I need glass with exact dimensions" },
    ],
  },
  // glass cutting
];

export default glassConstrucion;
