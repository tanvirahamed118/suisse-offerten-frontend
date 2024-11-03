import {
  what_type_want_to_install,
  what_material_be_made_of,
} from "../../reuse-data";

const installation = [
  {
    id: 431746179,
    type: "checkbox",
    label: "Quel type de toiture souhaitez-vous installer ?",
    options: what_type_want_to_install(
      695291036,
      296835684,
      411872572,
      263515402,
      510015251,
      132416115
    ),
  },
  //   flat roof
  {
    id: 695291036,
    type: "checkbox",
    label: "De quel matériau doit être fait le nouveau toit ?",
    options: what_material_be_made_of,
  },
  //   gable roof
  {
    id: 296835684,
    type: "checkbox",
    label: "De quel matériau doit être fait le nouveau toit ?",
    options: what_material_be_made_of,
  },
  //   hipped roof
  {
    id: 411872572,
    type: "checkbox",
    label: "De quel matériau doit être fait le nouveau toit ?",
    options: what_material_be_made_of,
  },

  //   mansard roof
  {
    id: 263515402,
    type: "checkbox",
    label: "De quel matériau doit être fait le nouveau toit ?",
    options: what_material_be_made_of,
  },
  //   lean to roof
  {
    id: 510015251,
    type: "checkbox",
    label: "De quel matériau doit être fait le nouveau toit ?",
    options: what_material_be_made_of,
  },
  //   iam not sure

  {
    id: 132416115,
    type: "checkbox",
    label: "De quel matériau doit être fait le nouveau toit ?",
    options: what_material_be_made_of,
  },
];

export default installation;
