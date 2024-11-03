import {
  approximately_how_many_meters_fence,
  approximately_how_many_meters_of_fence_is,
  how_many_need_be_installed,
  is_gate_be_installed_already,
} from "../../reuse-data";

const fencesGates = [
  {
    id: 1038904777,
    type: "checkbox",
    label: "Quel type de travaux de clôture sont nécessaires ?",
    options: [
      {
        id: 1234897135,
        label: "Installer une clôture",
      },
      {
        id: 1235282252,
        label: "Installer uniquement la porte",
      },
      {
        id: 1235520413,
        label: "Installer une clôture et un portail",
      },
      {
        id: 1237070168,
        label: "repair",
      },
      {
        id: 1237463511,
        label: "Autre",
      },
    ],
  },

  {
    id: 1234897135,
    type: "checkbox",
    label: "Combien de mètres de clôture environ représente-t-il ?",
    options: approximately_how_many_meters_of_fence_is,
  },
  {
    id: 1235282252,
    type: "checkbox",
    label: "Combien de portails faut-il installer ?",
    options: how_many_need_be_installed(1237726799, 1237796874, 1238462396),
  },
  {
    id: 1237726799,
    type: "checkbox",
    label: "Le portail à installer est-il déjà là ?",
    options: is_gate_be_installed_already,
  },
  {
    id: 1237796874,
    type: "checkbox",
    label: "Le portail à installer est-il déjà là ?",
    options: is_gate_be_installed_already,
  },
  {
    id: 1238462396,
    type: "checkbox",
    label: "Le portail à installer est-il déjà là ?",
    options: is_gate_be_installed_already,
  },

  {
    id: 1235520413,
    type: "checkbox",
    label: "Environ combien de portails faut-il installer ?",
    options: approximately_how_many_meters_fence,
  },
];

export default fencesGates;
