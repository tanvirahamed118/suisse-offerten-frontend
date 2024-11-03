import { in_how_floor_insulated } from "../../reuse-data";

const insulationSealing = [
  {
    id: 584581882,
    type: "checkbox",
    label: "What do you need insulation for ?",
    options: [
      {
        id: 367864171,
        label: "Floor",
        des: "Basement floor, living room floor, etc.",
      },
      {
        id: 843349467,
        label: "Wall",
        des: "Facades, interior walls, etc.",
      },
      {
        id: 794760366,
        label: "Screed or roof",
        credit: 25,
      },
      {
        id: 773220083,
        label: "Door / Window",
      },
      {
        id: 808199848,
        label: "Protection against sound / noise",
      },
      {
        id: 224629023,
        label: "Other or more of the above",
        credit: 7,
      },
    ],
  },
  {
    id: 367864171,
    type: "checkbox",
    label: "In how many rooms should the floor be insulated ?",
    options: in_how_floor_insulated,
  },
  {
    id: 843349467,
    type: "checkbox",
    label: "How many walls need to be insulated ?",
    options: [
      {
        label: "A wall",
        credit: 10,
      },
      {
        label: "Multiple walls",
        credit: 25,
      },
      {
        label: "Whole house",
        credit: 45,
      },
    ],
  },
  {
    id: 773220083,
    type: "checkbox",
    label: "How many doors and/or windows should be insulated in total ?",
    options: [
      {
        label: "1 to 2 doors / windows",
        credit: 5,
      },
      {
        label: "3 to 4 doors / windows",
        credit: 10,
      },
      {
        label: "5 or more doors / windows",
        credit: 15,
      },
    ],
  },
  {
    id: 808199848,
    type: "checkbox",
    label: "What needs to be soundproofed or noise-insulated ?",
    options: [
      {
        label: "A wall / ceiling / floor",
        credit: 2,
      },
      {
        label: "A room",
        credit: 3,
      },
      {
        label: "Multiple rooms",
        credit: 6,
      },
      {
        label: "Whole house",
        credit: 10,
      },
      {
        label: "Roof",
        credit: 8,
      },
      {
        label: "Other",
        credit: 5,
      },
    ],
  },
];

export default insulationSealing;
