const plumbing = [
  {
    id: 243131485,
    type: "checkbox",
    label: "What do you need a plumbing service for ?",
    options: [
      {
        id: 415723906,
        label: "Blockages & Leaks",
        des: "Clogged pipes, dripping faucet, etc.",
      },
      {
        id: 479161497,
        label: "Household appliances",
        des: "Washing machine, dishwasher, etc.",
        credit: 8,
      },
      {
        id: 366677345,
        label: "Sanitary objects & fittings",
        des: "Faucet, bathtub, shower head, shower, toilet, etc.",
        credit: 10,
      },
      {
        id: 273026338,
        label: "Pipelines & sewage",
        des: "Replacing pipes in the kitchen, water connection in the garden, etc.",
      },
      {
        id: 762491314,
        label: "Radiator / Heater",
      },
      {
        id: 601706794,
        label: "Boiler",
      },
      {
        id: 118427521,
        label: "Other",
        credit: 10,
      },
    ],
  },
  {
    id: 415723906,
    type: "checkbox",
    label: "What plumbing work needs to be done ?",
    options: [
      {
        label: "Clogged drain",
        credit: 8,
      },
      {
        label: "Flush the toilet",
        credit: 5,
      },
      {
        label: "Dripping faucet",
        credit: 3,
      },
      {
        label: "Leak",
        credit: 5,
      },
    ],
  },
  {
    id: 479161497,
    type: "checkbox",
    label: "What sanitary/plumbing work should be done ?",
    options: [
      {
        id: 889295302,
        label: "washing machine",
      },
      {
        id: 362663787,
        label: "Dishwasher",
      },
      {
        id: 214329292,
        label: "Other",
      },
    ],
  },
  {
    id: 889295302,
    type: "checkbox",
    label: "What kind of household appliance is it ?",
    options: [
      {
        label: "Install or Replace",
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
    id: 362663787,
    type: "checkbox",
    label: "What kind of household appliance is it ?",
    options: [
      {
        label: "Install or Replace",
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
    id: 214329292,
    type: "checkbox",
    label: "What kind of household appliance is it ?",
    options: [
      {
        label: "Install or Replace",
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
    id: 366677345,
    type: "checkbox",
    label: "What work needs to be done for the household appliance ?",
    options: [
      {
        id: 742233705,
        label: "Install / replace",
      },
      {
        id: 411460503,
        label: "repair",
      },
    ],
  },
  {
    id: 742233705,
    type: "multibox",
    label: "What needs to be installed or replaced ?",
    mainId: 975610483,
    options: [
      {
        label: "Bathtub",
      },
      {
        label: "Shower",
      },
      {
        label: "Shower cubicle",
      },
      {
        label: "toilet",
      },
      {
        label: "faucet",
      },
      {
        label: "lavabo",
      },
      {
        label: "bidet",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 975610483,
    type: "checkbox",
    label:
      "How many sanitary fixtures need to be installed or replaced in total ?",
    options: [
      {
        label: "1",
      },
      {
        label: "2 o 3",
      },
      {
        label: "4 or more",
      },
    ],
  },
  {
    id: 411460503,
    type: "checkbox",
    label: "Is there a leak (dripping faucet, etc.) ?",
    options: [
      {
        id: 122842505,
        label: "Yes",
      },
      {
        id: 751316864,
        label: "No",
      },
    ],
  },
  {
    id: 122842505,
    type: "checkbox",
    label: "Is there a leak (dripping faucet, etc.) ?",
    options: [
      {
        label: "Yes",
      },
      {
        label: "No",
      },
    ],
  },
  {
    id: 751316864,
    type: "checkbox",
    label: "Is there a leak (dripping faucet, etc.) ?",
    options: [
      {
        label: "Yes",
      },
      {
        label: "No",
      },
    ],
  },
  {
    id: 273026338,
    type: "checkbox",
    label: "What plumbing work needs to be done ?",
    options: [
      {
        id: 839057637,
        label: "Install, customize or replace",
      },
      {
        id: 425823793,
        label: "Repair",
      },
      {
        id: 904089452,
        label: "Other",
        credit: 5,
      },
    ],
  },
  {
    id: 839057637,
    type: "checkbox",
    label: "How extensive is the plumbing work ?",
    options: [
      {
        label: "Smaller jobs",
        des: "E.g. water connection in the garden, install water drain washbasin",
        credit: 10,
      },
      {
        label: "A room",
        des: "E.g. replacing water pipe in kitchen",
        credit: 10,
      },
      {
        label: "Multiple rooms",
        des: "E.g. completely re-laying water pipes in bathroom and kitchen",
        credit: 35,
      },
      {
        label: "Whole house",
        credit: 55,
      },
    ],
  },
  {
    id: 425823793,
    type: "checkbox",
    label: "How extensive is the plumbing work ?",
    options: [
      {
        label: "Smaller jobs",
        des: "E.g. water connection in the garden, install water drain washbasin",
        credit: 10,
      },
      {
        label: "A room",
        des: "E.g. replacing water pipe in kitchen",
        credit: 10,
      },
      {
        label: "Multiple rooms",
        des: "E.g. completely re-laying water pipes in bathroom and kitchen",
        credit: 35,
      },
      {
        label: "Whole house",
        credit: 5,
      },
    ],
  },
  {
    id: 904089452,
    type: "checkbox",
    label: "How extensive is the plumbing work ?",
    options: [
      {
        label: "Smaller jobs",
        des: "E.g. water connection in the garden, install water drain washbasin",
      },
      {
        label: "A room",
        des: "E.g. replacing water pipe in kitchen",
      },
      {
        label: "Multiple rooms",
        des: "E.g. completely re-laying water pipes in bathroom and kitchen",
      },
      {
        label: "Whole house",
      },
    ],
  },
  {
    id: 762491314,
    type: "checkbox",
    label: "What work needs to be done ?",
    options: [
      {
        id: 368526993,
        label: "Minor jobs (venting, flushing, etc.)",
      },
      {
        id: 441754733,
        label: "Move or replace",
      },
      {
        id: 753629662,
        label: "Other",
        credit: 8,
      },
    ],
  },
  {
    id: 368526993,
    type: "checkbox",
    label: "How many radiators are there ?",
    options: [
      {
        label: "One",
        credit: 8,
      },
      {
        label: "Several",
        credit: 20,
      },
    ],
  },
  {
    id: 441754733,
    type: "checkbox",
    label: "How many radiators need to be moved or replaced ?",
    options: [
      {
        label: "1 radiator",
        credit: 5,
      },
      {
        label: "2 to 4 radiators",
        credit: 10,
      },
      {
        label: "5 or more radiators",
        credit: 20,
      },
    ],
  },
  {
    id: 601706794,
    type: "checkbox",
    label: "What kind of boiler is it ?",
    options: [
      {
        id: 837853795,
        label: "Gas boiler",
      },
      {
        id: 743433388,
        label: "Electric boiler",
      },
      {
        id: 684556806,
        label: "Water pump boiler",
      },
      {
        id: 782803965,
        label: "Other or I'm not sure",
        credit: 10,
      },
    ],
  },
  {
    id: 837853795,
    type: "checkbox",
    label: "What plumbing work needs to be done ?",
    options: [
      {
        label: "Descaling",
        credit: 5,
      },
      {
        label: "repair",

        credit: 10,
      },
      {
        label: "Service / Control",
        credit: 10,
      },
      {
        label: "Install / replace",
        credit: 45,
      },
    ],
  },
  {
    id: 743433388,
    type: "checkbox",
    label: "What plumbing work needs to be done ?",
    options: [
      {
        label: "Descaling",
        credit: 5,
      },
      {
        label: "repair",
        credit: 20,
      },
      {
        label: "Service / Control",
        credit: 20,
      },
      {
        label: "Install / replace",
        credit: 45,
      },
    ],
  },
  {
    id: 684556806,
    type: "checkbox",
    label: "What plumbing work needs to be done ?",
    options: [
      {
        label: "Descaling",
        credit: 5,
      },
      {
        label: "repair",
        credit: 20,
      },
      {
        label: "Service / Control",
        credit: 15,
      },
      {
        label: "Install / replace",
        credit: 35,
      },
    ],
  },
];

export default plumbing;
