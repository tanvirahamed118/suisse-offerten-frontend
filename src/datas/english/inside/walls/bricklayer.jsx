const bricklayer = [
  {
    id: 939997513,
    type: "multibox",
    mainId: 234212078,
    label: "What should be done ?",
    options: [
      {
        label: "Wall",
      },
      {
        label: "Floor",
      },
      {
        label: "Window Doors",
      },
      {
        label: "Facade",
      },
      {
        label: "Balcony / Winter Garden",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 234212078,
    type: "multibox",
    mainId: 448580108,
    label: "What should be done ?",
    options: [
      {
        label: "Casting / concreting",
      },
      {
        label: "Abrasion / Plaster",
      },
      {
        label: "Joints",
      },
      {
        label: "Rebuild",
      },
      {
        label: "Demolition / breakthrough",
      },
      {
        label: "Drill",
      },
      {
        label: "Repair",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 448580108,
    type: "checkbox",
    label: "Do you have to bring the building material yourself ?",
    options: [
      {
        id: 727159075,
        label: "Yes",
      },
      {
        id: 673821165,
        label: "No",
      },
      { id: 359208739, label: "I do not know" },
    ],
  },
  {
    id: 727159075,
    type: "checkbox",
    label: "What is the approximate size of the affected area ?",
    options: [
      {
        label: "Small",
        des: "E.g. part of a wall etc.",
        credit: 10,
      },
      {
        label: "Medium",
        des: "E.g. whole wall, room, floor etc.",
        credit: 15,
      },
      {
        label: "Larg",
        des: "E.g. garage, extension, basement, apartment etc.",
        credit: 25,
      },
      {
        label: "Very larg",
        des: "E.g. whole house etc.",
        credit: 35,
      },
    ],
  },
  {
    id: 673821165,
    type: "checkbox",
    label: "What is the approximate size of the affected area ?",
    options: [
      {
        label: "Small",
        des: "E.g. part of a wall etc.",
        credit: 10,
      },
      {
        label: "Medium",
        des: "E.g. whole wall, room, floor etc.",
        credit: 15,
      },
      {
        label: "Larg",
        des: "E.g. garage, extension, basement, apartment etc.",
        credit: 25,
      },
      {
        label: "Very larg",
        des: "E.g. whole house etc.",
        credit: 35,
      },
    ],
  },
  {
    id: 359208739,
    type: "checkbox",
    label: "What is the approximate size of the affected area ?",
    options: [
      {
        label: "Small",
        des: "E.g. part of a wall etc.",
        credit: 10,
      },
      {
        label: "Medium",
        des: "E.g. whole wall, room, floor etc.",
        credit: 15,
      },
      {
        label: "Larg",
        des: "E.g. garage, extension, basement, apartment etc.",
        credit: 25,
      },
      {
        label: "Very larg",
        des: "E.g. whole house etc.",
        credit: 35,
      },
    ],
  },
];
export default bricklayer;
