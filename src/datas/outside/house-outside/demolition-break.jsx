import {
  can_you_access_inside,
  how_extensive_order_approximately,
} from "../../reuse-data";

const demolitionBreak = [
  {
    id: 591219151,
    type: "checkbox",
    label: "What should be done ?",
    options: [
      {
        id: 675692216,
        label: "Demolition / Dismantlings",
      },
      {
        id: 725123056,
        label: "Wall breakthrough",
      },
      {
        id: 693242039,
        label: "Other",
      },
    ],
  },
  {
    id: 675692216,
    type: "checkbox",
    label: "How extensive is the order approximately ?",
    options: how_extensive_order_approximately(
      548050480,
      845101161,
      355907232,
      322138074
    ),
  },
  {
    id: 548050480,
    type: "checkbox",
    label: "Should it also be removed ?",
    options: [
      {
        id: 487163933,
        label: "Yes",
      },
      {
        id: 633781436,
        label: "No",
      },
    ],
  },
  {
    id: 487163933,
    type: "checkbox",
    label: "Should it also be removed ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },
  {
    id: 633781436,
    type: "checkbox",
    label: "Should it also be removed ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },
  {
    id: 845101161,
    type: "checkbox",
    label: "Should it also be removed ?",
    options: [
      {
        id: 487163933,
        label: "Yes",
      },
      {
        id: 633781436,
        label: "No",
      },
    ],
  },
  {
    id: 487163933,
    type: "checkbox",
    label: "Should it also be removed ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },
  {
    id: 633781436,
    type: "checkbox",
    label: "Should it also be removed ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },
  {
    id: 355907232,
    type: "checkbox",
    label: "Should it also be removed ?",
    options: [
      {
        id: 487163933,
        label: "Yes",
      },
      {
        id: 633781436,
        label: "No",
      },
    ],
  },
  {
    id: 487163933,
    type: "checkbox",
    label: "Should it also be removed ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },
  {
    id: 633781436,
    type: "checkbox",
    label: "Should it also be removed ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },
  {
    id: 322138074,
    type: "checkbox",
    label: "Should it also be removed ?",
    options: [
      {
        id: 487163933,
        label: "Yes",
      },
      {
        id: 633781436,
        label: "No",
      },
    ],
  },
  {
    id: 487163933,
    type: "checkbox",
    label: "Should it also be removed ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },
  {
    id: 633781436,
    type: "checkbox",
    label: "Should it also be removed ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },
  {
    id: 725123056,
    type: "checkbox",
    label: "What kind of wall is it ?",
    options: [
      {
        label: "Stud wall",
      },
      {
        label: "Non-load-bearing wall",
      },
      {
        label: "Load-bearing wall",
      },
      {
        label: "I do not know",
      },
    ],
  },
];

export default demolitionBreak;
