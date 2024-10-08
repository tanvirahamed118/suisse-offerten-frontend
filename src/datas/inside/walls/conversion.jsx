import {
  approximately_how_much_budget_for_this_project,
  have_you_already_contacted,
  how_many_bedrooms_are_affected,
  how_much_surrounding_area,
} from "../../reuse-data";

const conversion = [
  {
    id: 985800704,
    type: "multibox",
    mainId: 911571254,
    label: "What work do you need for your project ?",
    options: [
      {
        label: "Roofers, roofing",
      },
      {
        label: "Windows / Doors",
      },
      {
        label: "horticulture",
      },
      {
        label: "Heating, ventilation, air conditioning, refrigeration",
      },
      {
        label: "Painting, plastering",
      },
      {
        label: "Parquet, laminate, carpet",
      },
      {
        label: "Bricklayer, plaster, concrete, joints",
      },
      {
        label: "Plumbing work",
      },
      {
        label: "Excavation",
      },
      {
        label: "Electrician, electrical installation",
      },
      {
        label: "Slabs, tiles, slabs",
      },
      {
        label: "Insulation, sealing, insulation",
      },
      {
        label: "Carpentry, timber construction",
      },
      {
        label: "Demolition, breakthrough, dismantling, disposal",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 911571254,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: [
      {
        id: 110010097,
        label: "0",
      },
      {
        id: 759397380,
        label: "1",
      },
      {
        id: 561441161,
        label: "2",
      },
      {
        id: 957728036,
        label: "3",
      },
      {
        id: 473968171,
        label: "4 or more",
      },
    ],
  },

  //   1 start
  {
    id: 110010097,
    type: "checkbox",
    label: "How many living rooms and bedrooms are affected ?",
    options: how_many_bedrooms_are_affected(
      443363263,
      639970457,
      852865092,
      318789491,
      514948225
    ),
  },
  //   1
  {
    id: 443363263,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth

  // 2
  {
    id: 639970457,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 2
  // 3
  {
    id: 852865092,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 3
  // 4
  {
    id: 318789491,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 4
  // 5
  {
    id: 514948225,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 5
  //   1 end

  //   2 start
  {
    id: 759397380,
    type: "checkbox",
    label: "How many living rooms and bedrooms are affected ?",
    options: how_many_bedrooms_are_affected(
      443363263,
      639970457,
      852865092,
      318789491,
      514948225
    ),
  },
  //   1
  {
    id: 443363263,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth

  // 2
  {
    id: 639970457,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 2
  // 3
  {
    id: 852865092,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 3
  // 4
  {
    id: 318789491,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 4
  // 5
  {
    id: 514948225,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 5
  //   2 end

  // 3 start
  {
    id: 561441161,
    type: "checkbox",
    label: "How many living rooms and bedrooms are affected ?",
    options: how_many_bedrooms_are_affected(
      443363263,
      639970457,
      852865092,
      318789491,
      514948225
    ),
  },
  //   1
  {
    id: 443363263,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth

  // 2
  {
    id: 639970457,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 2
  // 3
  {
    id: 852865092,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 3
  // 4
  {
    id: 318789491,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 4
  // 5
  {
    id: 514948225,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 5
  // 3 end

  // 4 start
  {
    id: 957728036,
    type: "checkbox",
    label: "How many living rooms and bedrooms are affected ?",
    options: how_many_bedrooms_are_affected(
      443363263,
      639970457,
      852865092,
      318789491,
      514948225
    ),
  },
  //   1
  {
    id: 443363263,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth

  // 2
  {
    id: 639970457,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 2
  // 3
  {
    id: 852865092,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 3
  // 4
  {
    id: 318789491,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 4
  // 5
  {
    id: 514948225,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 5
  // 4 end

  // 5 start
  {
    id: 473968171,
    type: "checkbox",
    label: "How many living rooms and bedrooms are affected ?",
    options: how_many_bedrooms_are_affected(
      443363263,
      639970457,
      852865092,
      318789491,
      514948225
    ),
  },
  //   1
  {
    id: 443363263,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth

  // 2
  {
    id: 639970457,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 2
  // 3
  {
    id: 852865092,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 3
  // 4
  {
    id: 318789491,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 4
  // 5
  {
    id: 514948225,
    type: "checkbox",
    label:
      "How many technical rooms (e.g. heating/laundry rooms) are affected ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "How much of the surrounding area (e.g. garden, forecourt, etc.) is affected ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Approximately how much did you budget for this project ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Have you already contacted your local authority regarding a possible building permit application ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 5
  // 5 end
];

export default conversion;
