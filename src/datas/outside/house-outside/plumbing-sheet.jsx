import {
  ppproximately_how_big_is_covered_clad,
  what_is_the_order,
} from "../../reuse-data";

const plumbingSheet = [
  {
    id: 126762922,
    type: "checkbox",
    label: "What does a service require ?",
    options: [
      {
        id: 822001588,
        label: "Gutter / downpipe",
      },
      {
        id: 553375588,
        label: "Smaller roof section",
        des: "E.g. ridge, overhang, edge, lightning protection system, etc.",
      },
      {
        id: 497443654,
        label: "Cover / panel",
      },
      {
        id: 371481781,
        label: "Fireplace / chimney",
        credit: 10,
      },
      {
        id: 463565116,
        label: "other",
        credit: 10,
      },
    ],
  },
  {
    id: 822001588,
    type: "checkbox",
    label: "What needs to be done about the gutter/downpipe ?",
    options: [
      {
        id: 112122992,
        label: "Clean",
      },
      {
        id: 248117555,
        label: "Substitute",
      },
      {
        id: 415310641,
        label: "Repair",
      },
      {
        id: 411698828,
        label: "Install",
      },
      {
        id: 246565523,
        label: "other",
      },
    ],
  },
  {
    id: 112122992,
    type: "checkbox",
    label: "What is the approximate length of the order ?",
    options: what_is_the_order,
  },
  {
    id: 248117555,
    type: "checkbox",
    label: "What is the approximate length of the order ?",
    options: what_is_the_order,
  },
  {
    id: 415310641,
    type: "checkbox",
    label: "What is the approximate length of the order ?",
    options: what_is_the_order,
  },
  {
    id: 411698828,
    type: "checkbox",
    label: "What is the approximate length of the order ?",
    options: what_is_the_order,
  },
  {
    id: 246565523,
    type: "checkbox",
    label: "What is the approximate length of the order ?",
    options: what_is_the_order,
  },
  {
    id: 553375588,
    type: "checkbox",
    label: "What is the approximate length of the order ?",
    options: what_is_the_order,
  },
  {
    id: 497443654,
    type: "checkbox",
    label: "How large ist he structure that is to be covered approximately ?",
    options: ppproximately_how_big_is_covered_clad,
  },
];

export default plumbingSheet;
