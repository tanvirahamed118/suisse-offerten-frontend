import {
  can_you_access_inside,
  how_extensive_order_approximately,
  questionCheckboxItem,
} from "../../reuse-data";

const demolition = [
  {
    id: 329510117,
    type: "checkbox",
    label: "What should be done ?",
    options: [
      {
        id: 420597409,
        label: "Demolition / Dismantling",
      },
      {
        id: 314038231,
        label: "Wall breakthrough",
      },
      {
        id: 482771364,
        label: "Other",
      },
    ],
  },
  {
    id: 420597409,
    type: "checkbox",
    label: "How extensive is the order approximately ?",
    options: how_extensive_order_approximately(
      541297650,
      967554274,
      926585133,
      902521810
    ),
  },
  {
    id: 541297650,
    type: "checkbox",
    label: "Should it also be removed ?",
    options: questionCheckboxItem(515319036, 408078507),
  },
  {
    id: 515319036,
    type: "checkbox",
    label: "Are there any dangerous goods ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },
  {
    id: 408078507,
    type: "checkbox",
    label: "Are there any dangerous goods ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },
  {
    id: 967554274,
    type: "checkbox",
    label: "Should it also be removed ?",
    options: questionCheckboxItem(515319036, 408078507),
  },
  {
    id: 515319036,
    type: "checkbox",
    label: "Are there any dangerous goods ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },
  {
    id: 408078507,
    type: "checkbox",
    label: "Are there any dangerous goods ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },
  {
    id: 926585133,
    type: "checkbox",
    label: "Should it also be removed ?",
    options: questionCheckboxItem(515319036, 408078507),
  },
  {
    id: 515319036,
    type: "checkbox",
    label: "Are there any dangerous goods ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },
  {
    id: 408078507,
    type: "checkbox",
    label: "Are there any dangerous goods ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },
  {
    id: 902521810,
    type: "checkbox",
    label: "Should it also be removed ?",
    options: questionCheckboxItem(515319036, 408078507),
  },
  {
    id: 515319036,
    type: "checkbox",
    label: "Are there any dangerous goods ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },
  {
    id: 408078507,
    type: "checkbox",
    label: "Are there any dangerous goods ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },

  {
    id: 314038231,
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

export default demolition;
