import { approximately_how_big_affected_structure } from "../../reuse-data";

const architecture = [
  {
    id: 256319551,
    type: "checkbox",
    label: "What service do you need ?",
    options: [
      {
        id: 644833688,
        label: "Statics",
        des: "E.g. structural engineering report, breakthrough of a load-bearing wall, etc.",
      },
      {
        id: 939690592,
        label: "architecture",
        des: "E.g. study, floor plan, visualization, building submission, etc.",
      },
      {
        id: 299836718,
        label: "Report / proof / calculation etc.",
        des: "E.g. energy certificate, defect inspection, etc.",
      },
      {
        id: 257238238,
        label: "Construction management",
      },
      {
        label: "Other or more of the above",
        credit: 15,
      },
    ],
  },
  {
    id: 644833688,
    type: "multibox",
    mainId: 689042963,
    label: "Which statics service do you need ?",
    options: [
      {
        label: "Structural engineering report",
      },
      {
        label: "Breakthrough of a load-bearing wall",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 689042963,
    type: "checkbox",
    label: "How large is the affected area ?",
    options: approximately_how_big_affected_structure,
  },
  {
    id: 939690592,
    type: "multibox",
    mainId: 866189685,
    label: "What architectural service do you need ?",
    options: [
      {
        label: "Feasibility study / project study",
      },
      {
        label: "Measurements",
      },
      {
        label: "Drawing floor plan / plans",
      },
      {
        label: "Digitization / visualization of plans",
      },
      {
        label: "Building application",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 866189685,
    type: "checkbox",
    label: "How large is the affected area ?",
    options: approximately_how_big_affected_structure,
  },
  {
    id: 299836718,
    type: "multibox",
    mainId: 551559776,
    label: "What report or similar is required ?",
    options: [
      {
        label: "Energy / thermal insulation",
      },
      {
        label: "Inspection / defects (e.g. when buying a house)",
      },
      {
        label: "Sound / Noise",
      },
      {
        label: "Pollutant (e.g. asbestos)",
      },
      {
        label: "SIA control",
      },
      {
        label: "Light source",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 551559776,
    type: "checkbox",
    label: "How large is the affected area ?",
    options: approximately_how_big_affected_structure,
  },
  {
    id: 257238238,
    type: "checkbox",
    label: "How large is the affected area ?",
    options: approximately_how_big_affected_structure,
  },
];

export default architecture;
