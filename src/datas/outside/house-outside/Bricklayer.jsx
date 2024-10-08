import { how_large_is_approximately } from "../../reuse-data";

const bricklayer = [
  {
    id: 809068343,
    type: "multibox",
    mainId: 981359683,
    label: "What does a service require ?",
    options: [
      {
        label: "Wall",
      },
      {
        label: "Floor",
      },
      {
        label: "Window / Door",
      },
      {
        label: "facade",
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
    id: 981359683,
    type: "multibox",
    mainId: 166208888,
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
        label: "Joints",
      },
      {
        label: "Demolition / breakthrough",
      },
      {
        label: "Drill",
      },
      {
        label: "repair",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 166208888,
    type: "checkbox",
    label: "Do you have to bring your own building materials ?",
    options: [
      {
        id: 881792098,
        label: "Yes",
      },
      {
        id: 286160689,
        label: "No",
      },
      {
        id: 575869854,
        label: "I do not know",
      },
    ],
  },
  {
    id: 881792098,
    type: "checkbox",
    label: "How large is the affected area approximately ?",
    options: how_large_is_approximately,
  },
  {
    id: 286160689,
    type: "checkbox",
    label: "How large is the affected area approximately ?",
    options: how_large_is_approximately,
  },
  {
    id: 575869854,
    type: "checkbox",
    label: "How large is the affected area approximately ?",
    options: how_large_is_approximately,
  },
];

export default bricklayer;
