import { what_does_service_require } from "../../reuse-data";

const paving = [
  {
    id: 1036081080,
    type: "multibox",
    label: "What does a service require ?",
    mainId: 817529946,
    options: what_does_service_require,
  },
  {
    id: 817529946,
    type: "multibox",
    mainId: 957329759,
    label: "What should be done ?",
    options: [
      { label: "Re-covering / repairing the covering" },
      { label: "Rebuild completely" },
      { label: "Expand" },
      { label: "Straighten" },
      { label: "Other" },
    ],
  },
  {
    id: 957329759,
    type: "checkbox",
    label: "Do you have to bring your own building materials ?",
    options: [
      {
        id: 2551518717,
        label: "Yes",
      },
      {
        id: 6433374171,
        label: "No",
      },
      {
        id: 5112314975,
        label: "I do not know",
      },
    ],
  },
  {
    id: 2551518717,
    type: "checkbox",
    label: "How big is the desired end surface approximately ?",
    options: [
      {
        des: "Up to 14 m2",
        label: "Small",
        credit: 8,
      },
      {
        des: "15 to 99 m2",
        label: "Medium",
        credit: 13,
      },
      {
        des: "100 to 249 m2",
        label: "Large",
        credit: 18,
      },
      {
        des: "250 m2 and more",
        label: "Very large",
        credit: 25,
      },
    ],
  },
  {
    id: 6433374171,
    type: "checkbox",
    label: "How big is the desired end surface approximately ?",
    options: [
      {
        des: "Up to 14 m2",
        label: "Small",
        credit: 8,
      },
      {
        des: "15 to 99 m2",
        label: "Medium",
        credit: 13,
      },
      {
        des: "100 to 249 m2",
        label: "Large",
        credit: 18,
      },
      {
        des: "250 m2 and more",
        label: "Very large",
        credit: 25,
      },
    ],
  },
  {
    id: 5112314975,
    type: "checkbox",
    label: "How big is the desired end surface approximately ?",
    options: [
      {
        des: "Up to 14 m2",
        label: "Small",
        credit: 8,
      },
      {
        des: "15 to 99 m2",
        label: "Medium",
        credit: 13,
      },
      {
        des: "100 to 249 m2",
        label: "Large",
        credit: 18,
      },
      {
        des: "250 m2 and more",
        label: "Very large",
        credit: 25,
      },
    ],
  },
];

export default paving;
