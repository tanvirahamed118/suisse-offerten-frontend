const insulation = [
  {
    id: 854277929,
    type: "checkbox",
    label: "What do you need insulation for ?",
    options: [
      {
        id: 536262274,
        label: "Floor",
        des: "Basement floor, living room floor, etc.",
      },
      {
        id: 948721480,
        label: "Wall",
        des: "Facades, interior walls, etc.",
      },
      {
        id: 974052021,
        label: "Screed or roof",
        credit: 25,
      },
      {
        id: 811313434,
        label: "Door / Window",
      },
      {
        id: 312757265,
        label: "Protection against sound / noise",
      },
      {
        id: 675895081,
        label: "Other or more of the above",
        credit: 7,
      },
    ],
  },
  {
    id: 536262274,
    type: "checkbox",
    label: "In how many rooms should the floor be insulated ?",
    options: [
      {
        label: "1 to 2 rooms",
        credit: 10,
      },
      {
        label: "3 to 4 rooms",
        credit: 20,
      },
      {
        label: "5 or more rooms",
        credit: 35,
      },
    ],
  },
  {
    id: 948721480,
    type: "checkbox",
    label: "How many walls need to be insulated ?",
    options: [
      {
        label: "A wall",
        credit: 10,
      },
      {
        label: "Multiple walls",
        credit: 20,
      },
      {
        label: "Whole house",
        credit: 45,
      },
    ],
  },
  {
    id: 811313434,
    type: "checkbox",
    label: "How many doors and/or windows should be insulated in total ?",
    options: [
      {
        label: "1 to 2 doors / windows",
        credit: 8,
      },
      {
        label: "3 to 4 doors / windows",
        credit: 16,
      },
      {
        label: "5 or more doors / windows",
        credit: 35,
      },
    ],
  },
  {
    id: 312757265,
    type: "checkbox",
    label: "What needs to be soundproofed or noise-insulated ?",
    options: [
      {
        label: "A wall / ceiling / floor",
        credit: 10,
      },
      {
        label: "A room",
        credit: 5,
      },
      {
        label: "Multiple rooms",
        credit: 10,
      },
      {
        label: "Whole house",
        credit: 25,
      },
      {
        label: "Roof",
        credit: 25,
      },
      {
        label: "Other",
        credit: 7,
      },
    ],
  },
];

export default insulation;
