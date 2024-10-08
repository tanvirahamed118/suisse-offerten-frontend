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
      },
      {
        label: "Multiple walls",
      },
      {
        label: "Whole house",
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
      },
      {
        label: "3 to 4 doors / windows",
      },
      {
        label: "5 or more doors / windows",
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
      },
      {
        label: "A room",
      },
      {
        label: "Multiple rooms",
      },
      {
        label: "Whole house",
      },
      {
        label: "Roof",
      },
      {
        label: "Other",
      },
    ],
  },
];

export default insulationSealing;
