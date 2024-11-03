import { approximately_how_the_affected_area } from "../../reuse-data";

const slabs = [
  {
    id: 563723534,
    type: "checkbox",
    label: "Where should the plates be installed ?",
    options: [
      {
        id: 477111188,
        label: "Laying / replacing panels",
        credit: 20,
      },
      {
        id: 491847277,
        label: "Repairing plates",
        credit: 15,
      },
      {
        id: 514373759,
        label: "Renew joints",
        credit: 5,
      },
      {
        label: "Other",
        credit: 5,
      },
    ],
  },
  {
    id: 477111188,
    type: "checkbox",
    label: "What services should be provided ?",
    options: [
      {
        id: 440239138,
        label: "Bathroom / Toilet",
      },
      {
        id: 404925801,
        label: "Winter garden",
      },
      {
        id: 209253756,
        label: "Veranda",
      },
      {
        id: 319057527,
        label: "Balcony / Terrace",
      },
      {
        id: 212845915,
        label: "Fireplace / fireplace",
      },
      {
        id: 360223002,
        label: "Other",
      },
    ],
  },
  {
    id: 440239138,
    type: "multibox",
    mainId: 915998113,
    label: "Are the tiles/plates to be installed already there ?",
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
    id: 404925801,
    type: "multibox",
    mainId: 915998113,
    label: "Approximately how large is the affected area ?",
    options: [
      {
        label: "Walls",
      },
      {
        label: "Soil",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 209253756,
    type: "multibox",
    mainId: 915998113,
    label: "Are the tiles/plates to be installed already there ?",
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
    id: 319057527,
    type: "multibox",
    mainId: 915998113,
    label: "Are the tiles/plates to be installed already there ?",
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
    id: 212845915,
    type: "multibox",
    mainId: 915998113,
    label: "Are the tiles/plates to be installed already there ?",
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
    id: 360223002,
    type: "multibox",
    mainId: 915998113,
    label: "Are the tiles/plates to be installed already there ?",
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
    id: 915998113,
    type: "checkbox",
    label: "Where in the bathroom / toilet should tiles be laid ?",
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
    label: "Approximately how large is the affected area ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 724147813,
    type: "checkbox",
    label: "Approximately how large is the affected area ?",
    options: approximately_how_the_affected_area,
  },
];

export default slabs;
