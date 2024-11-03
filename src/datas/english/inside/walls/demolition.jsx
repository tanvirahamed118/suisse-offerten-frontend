import { can_you_access_inside, questionCheckboxItem } from "../../reuse-data";

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
        credit: 20,
      },
      {
        id: 482771364,
        label: "Other",
        credit: 10,
      },
    ],
  },
  {
    id: 420597409,
    type: "checkbox",
    label: "How comprehensive is the order approximately ?",
    options: [
      {
        id: 541297650,
        des: "E.g. fireplace, playhouse, etc.",
        label: "Small",
        credit: 10,
      },
      {
        id: 967554274,
        des: "E.g. kitchen, bathroom, oil tank etc.",
        label: "Medium",
        credit: 25,
      },
      {
        id: 926585133,
        des: "E.g. garage, extension, apartment etc.",
        label: "Large",
        credit: 35,
      },
      {
        id: 902521810,
        des: "E.g. whole house, several properties, etc.",
        label: "Very Larg",
        credit: 55,
      },
    ],
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
    label: "Should it also be removed ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },
  {
    id: 408078507,
    type: "checkbox",
    label: "Should it also be removed ?",
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
    label: "Should it also be removed ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },
  {
    id: 408078507,
    type: "checkbox",
    label: "Should it also be removed ?",
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
    label: "Should it also be removed ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },
  {
    id: 408078507,
    type: "checkbox",
    label: "Should it also be removed ?",
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
    label: "Should it also be removed ?",
    headline:
      "Examples: oil tank/used oil, chemicals, fireworks, paints, pesticides, batteries, electrical/electronic devices, spray cans, medicines.",
    options: can_you_access_inside,
  },
  {
    id: 408078507,
    type: "checkbox",
    label: "Should it also be removed ?",
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
