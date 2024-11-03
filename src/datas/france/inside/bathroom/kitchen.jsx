const kitchen = [
  {
    id: 348659292,
    type: "checkbox",
    label: "What kitchen construction services do you need ?",
    options: [
      {
        id: 817713234,
        label: "Assembling a kitchen",
        credit: 25,
      },
      {
        id: 104535911,
        label: "Adapt / renovate kitchen",
        credit: 20,
      },
      {
        id: 538785140,
        label: "Kitchen planning",
        credit: 35,
      },
      {
        id: 398274967,
        label: "Kitchen furniture and worktops",
        credit: 20,
      },
      {
        id: 819300304,
        label: "Kitchen appliances (oven, dishwasher, etc.)",
        credit: 10,
      },
      {
        id: 589518180,
        label: "Minor repairs",
        credit: 8,
      },
      {
        id: 285903068,
        label: "Other",
        credit: 5,
      },
    ],
  },
  {
    id: 817713234,
    type: "checkbox",
    label: "Is the kitchen already there ?",
    options: [
      {
        id: 824336378,
        label: "Yes, the kitchen is already there",
      },
      {
        id: 208200826,
        label: "No, the kitchen is not available yet",
      },
    ],
  },
  {
    id: 824336378,
    type: "multibox",
    mainId: 333233651,
    label: "What services should be provided during assembly ?",
    options: [
      {
        label: "Assembly of the kitchen",
      },
      {
        label: "Kitchen planning",
      },
      {
        label: "Adjust / assemble worktop",
      },
      {
        label: "Dismantling old kitchen",
      },
      {
        label: "Disposal of old kitchen",
      },
      {
        label: "Transport of the kitchen",
      },
      {
        label: "Connections electrical devices",
      },
      {
        label: "Sanitary connections",
      },
    ],
  },
  {
    id: 333233651,
    type: "checkbox",
    label:
      "Are other construction works necessary (demolishing walls, laying tiles, painting, etc.) ?",
    options: [
      {
        id: 337001323,
        label: "Yes",
      },
      {
        id: 217037466,
        label: "No",
      },
    ],
  },
  {
    id: 337001323,
    type: "checkbox",
    label: "What kind of construction work is involved ?",
    options: [
      {
        label: "Demolish / remove load-bearing wall",
      },
      {
        label: "Demolish / remove non-load-bearing wall",
      },
      {
        label: "Flooring work",
      },
      {
        label: "Panel work",
      },
      {
        label: "Painting work",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 208200826,
    type: "multibox",
    mainId: 333233651,
    label: "What services should be provided during assembly ?",
    options: [
      {
        id: 333233651,
        label: "Assembly of the kitchen",
      },
      {
        label: "Kitchen planning",
      },
      {
        label: "Adjust / assemble worktop",
      },
      {
        label: "Dismantling old kitchen",
      },
      {
        label: "Disposal of old kitchen",
      },
      {
        label: "Transport of the kitchen",
      },
      {
        label: "Connections electrical devices",
      },
      {
        label: "Sanitary connections",
      },
    ],
  },
  {
    id: 333233651,
    type: "checkbox",
    label:
      "Are other construction works necessary (demolishing walls, laying tiles, painting, etc.) ?",
    options: [
      {
        id: 337001323,
        label: "Yes",
      },
      {
        id: 217037466,
        label: "No",
      },
    ],
  },
  {
    id: 337001323,
    type: "multibox",
    mainId: 333233651,
    label: "What services should be provided during assembly ?",
    options: [
      {
        label: "Demolish / remove load-bearing wall",
      },
      {
        label: "Demolish / remove non-load-bearing wall",
      },
      {
        label: "Flooring work",
      },
      {
        label: "Panel work",
      },
      {
        label: "Painting work",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 398274967,
    type: "checkbox",
    label: "Do you need services for kitchen furniture or worktops ?",
    options: [
      {
        id: 716275113,
        label: "Kitchen furniture",
      },
      {
        id: 183478947,
        label: "Worktops",
      },
      {
        id: 793727632,
        label: "Kitchen furniture and worktops",
      },
    ],
  },
  {
    id: 183478947,
    type: "checkbox",
    label: "Which worktop material do you want ?",
    options: [
      {
        label: "Natural stone",
      },
      {
        label: "Artificial stone / quartz composite",
      },
      {
        label: "Laminat",
      },
      {
        label: "Ceramics / Tiles",
      },
      {
        label: "Wood",
      },
      {
        label: "stainless steel",
      },
      {
        label: "Other",
      },
      {
        label: "I am not sure / need advice",
      },
    ],
  },
  {
    id: 793727632,
    type: "checkbox",
    label: "Which worktop material do you want ?",
    options: [
      {
        label: "Natural stone",
      },
      {
        label: "Artificial stone / quartz composite",
      },
      {
        label: "Laminat",
      },
      {
        label: "Ceramics / Tiles",
      },
      {
        label: "Wood",
      },
      {
        label: "stainless steel",
      },
      {
        label: "Other",
      },
      {
        label: "I am not sure / need advice",
      },
    ],
  },
  {
    id: 819300304,
    type: "checkbox",
    label: "What kind of kitchen appliance is it ?",
    options: [
      {
        label: "oven",
      },
      {
        label: "Dishwasher",
      },
      {
        label: "Refrigerator / freezer",
      },
      {
        label: "Steam extractor",
      },
      {
        label: "lavabo",
      },
      {
        label: "Kitchen fittings",
      },
      {
        label: "Other",
      },
    ],
  },
];

export default kitchen;
