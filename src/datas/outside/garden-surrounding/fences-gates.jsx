import {
  approximately_how_many_meters_fence,
  how_many_need_be_installed,
  is_gate_be_installed_already,
} from "../../reuse-data";

const fencesGates = [
  {
    id: 1038904777,
    type: "checkbox",
    label: "What type of fencing work is required ?",
    options: [
      {
        id: 1234897135,
        label: "Install fence",
      },
      {
        id: 1235282252,
        label: "Only install gate",
      },
      {
        id: 1235520413,
        label: "Install fence and gate",
      },
      {
        id: 1237070168,
        label: "repair",
      },
      {
        id: 1237463511,
        label: "other",
      },
    ],
  },

  {
    id: 1234897135,
    type: "checkbox",
    label: "Approximately how many meters of fence is it ?",
    options: approximately_how_many_meters_fence,
  },
  {
    id: 1235282252,
    type: "checkbox",
    label: "How many gates need to be installed ?",
    options: how_many_need_be_installed(1237726799, 1237796874, 1238462396),
  },
  {
    id: 1237726799,
    type: "checkbox",
    label: "Is the gate to be installed already there ?",
    options: is_gate_be_installed_already,
  },
  {
    id: 1237796874,
    type: "checkbox",
    label: "Is the gate to be installed already there ?",
    options: is_gate_be_installed_already,
  },
  {
    id: 1238462396,
    type: "checkbox",
    label: "Is the gate to be installed already there ?",
    options: is_gate_be_installed_already,
  },

  {
    id: 1235520413,
    type: "checkbox",
    label: "Approximately how many meters of fence is it ?",
    options: approximately_how_many_meters_fence,
  },
];

export default fencesGates;
