import { approximately_how_the_affected_area } from "../../reuse-data";

const slabs = [
  {
    id: 603134044,
    type: "checkbox",
    label: "What kind of tiling services do you need ?",
    options: [
      {
        id: 6449724186,
        label: "Laying / replacing panels",
      },
      {
        id: 491847277,
        label: "Repairing plates",
        credit: 10,
      },
      {
        id: 514373759,
        label: "Renew joints",
        credit: 5,
      },
      {
        id: 176014696,
        label: "Other",
        credit: 5,
      },
    ],
  },
  {
    id: 6449724186,
    type: "checkbox",
    label: "Where should the panels be laid ?",
    options: [
      {
        id: 7492094461,
        label: "Bathroom / Toilet",
      },
      {
        id: 7246032159,
        label: "Winter garden",
      },
      {
        id: 1241477312,
        label: "veranda",
      },
      {
        id: 1181416948,
        label: "Balcony / Terrace",
      },
      {
        id: 7728965234,
        label: "Fireplace / fireplace",
      },
      {
        id: 8531777232,
        label: "Other",
      },
    ],
  },
  {
    id: 7492094461,
    type: "multibox",
    mainId: 2168682727,
    label: "Where in the bathroom / toilet should tiles be laid ?",
    options: [
      {
        label: "Walls",
      },
      {
        label: "Floor",
      },
      {
        label: "Shower",
      },
      {
        label: "Bath",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 2168682727,
    type: "checkbox",
    label: "Are the plates already there ?",
    options: [
      {
        id: 576329979,
        label: "Yes, it already exists",
      },
      {
        id: 724147813,
        label: "No, it still needs to be procured",
      },
    ],
  },
  {
    id: 576329979,
    type: "checkbox",
    label: "Where in the bathroom / toilet should tiles be laid ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 724147813,
    type: "checkbox",
    label: "Where in the bathroom / toilet should tiles be laid ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 7246032159,
    type: "multibox",
    mainId: 2168682727,
    label: "Where in the bathroom / toilet should tiles be laid ?",
    options: [
      {
        label: "Walls",
      },
      {
        label: "Floor",
      },
      {
        label: "Shower",
      },
      {
        label: "Bath",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 2168682727,
    type: "checkbox",
    label: "Are the plates already there ?",
    options: [
      {
        id: 576329979,
        label: "Yes, it already exists",
      },
      {
        id: 724147813,
        label: "No, it still needs to be procured",
      },
    ],
  },
  {
    id: 576329979,
    type: "checkbox",
    label: "Where in the bathroom / toilet should tiles be laid ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 724147813,
    type: "checkbox",
    label: "Where in the bathroom / toilet should tiles be laid ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 1241477312,
    type: "multibox",
    mainId: 2168682727,
    label: "Where in the bathroom / toilet should tiles be laid ?",
    options: [
      {
        label: "Walls",
      },
      {
        label: "Floor",
      },
      {
        label: "Shower",
      },
      {
        label: "Bath",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 2168682727,
    type: "checkbox",
    label: "Are the plates already there ?",
    options: [
      {
        id: 576329979,
        label: "Yes, it already exists",
      },
      {
        id: 724147813,
        label: "No, it still needs to be procured",
      },
    ],
  },
  {
    id: 576329979,
    type: "checkbox",
    label: "Where in the bathroom / toilet should tiles be laid ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 724147813,
    type: "checkbox",
    label: "Where in the bathroom / toilet should tiles be laid ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 1181416948,
    type: "checkbox",
    label: "Are the plates already there ?",
    options: [
      {
        id: 576329979,
        label: "Yes, it already exists",
      },
      {
        id: 724147813,
        label: "No, it still needs to be procured",
      },
    ],
  },
  {
    id: 576329979,
    type: "checkbox",
    label: "Where in the bathroom / toilet should tiles be laid ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 724147813,
    type: "checkbox",
    label: "Where in the bathroom / toilet should tiles be laid ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 7728965234,
    type: "checkbox",
    label: "Are the plates already there ?",
    options: [
      {
        id: 576329979,
        label: "Yes, it already exists",
      },
      {
        id: 724147813,
        label: "No, it still needs to be procured",
      },
    ],
  },
  {
    id: 576329979,
    type: "checkbox",
    label: "Where in the bathroom / toilet should tiles be laid ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 724147813,
    type: "checkbox",
    label: "Where in the bathroom / toilet should tiles be laid ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 8531777232,
    type: "checkbox",
    label: "Are the plates already there ?",
    options: [
      {
        id: 576329979,
        label: "Yes, it already exists",
      },
      {
        id: 724147813,
        label: "No, it still needs to be procured",
      },
    ],
  },
  {
    id: 576329979,
    type: "checkbox",
    label: "Where in the bathroom / toilet should tiles be laid ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 724147813,
    type: "checkbox",
    label: "Where in the bathroom / toilet should tiles be laid ?",
    options: approximately_how_the_affected_area,
  },
];

export default slabs;
