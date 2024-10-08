import {
  what_type_want_to_install,
  where_do_you_replace_the_roof,
  what_material_be_made_of,
  what_type_do_you_need,
} from "../../reuse-data";

const repair = [
  {
    id: 128976166,
    type: "checkbox",
    label: "What type of roof do you want to install ?",
    options: what_type_want_to_install(
      234305256,
      378755402,
      449544719,
      257212821,
      177361675,
      339626318
    ),
  },

  {
    id: 234305256,
    type: "checkbox",
    label: "What type of repair do you need ?",
    options: what_type_do_you_need(
      695291036,
      296835684,
      411872572,
      263515402,
      510015251,
      132416115
    ),
  },
  {
    id: 378755402,
    type: "checkbox",
    label: "What type of repair do you need ?",
    options: what_type_do_you_need(
      695291036,
      296835684,
      411872572,
      263515402,
      510015251,
      132416115
    ),
  },
  {
    id: 449544719,
    type: "checkbox",
    label: "What type of repair do you need ?",
    options: what_type_do_you_need(
      695291036,
      296835684,
      411872572,
      263515402,
      510015251,
      132416115
    ),
  },
  {
    id: 257212821,
    type: "checkbox",
    label: "What type of repair do you need ?",
    options: what_type_do_you_need(
      695291036,
      296835684,
      411872572,
      263515402,
      510015251,
      132416115
    ),
  },
  {
    id: 177361675,
    type: "checkbox",
    label: "What type of repair do you need ?",
    options: what_type_do_you_need(
      695291036,
      296835684,
      411872572,
      263515402,
      510015251,
      132416115
    ),
  },
  {
    id: 339626318,
    type: "checkbox",
    label: "What type of repair do you need ?",
    options: what_type_do_you_need(
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
    label: "Where do you want to install or replace the roof ?",
    options: where_do_you_replace_the_roof(145405531, 694790857, 126871040),
  },
  {
    id: 695291036,
    type: "checkbox",
    label: "What material should the new roof be made of ?",
    options: what_material_be_made_of,
  },
  {
    id: 694790857,
    type: "checkbox",
    label: "What material should the new roof be made of ?",
    options: what_material_be_made_of,
  },
  {
    id: 126871040,
    type: "checkbox",
    label: "What material should the new roof be made of ?",
    options: what_material_be_made_of,
  },
  //   gable roof
  {
    id: 296835684,
    type: "checkbox",
    label: "Where do you want to install or replace the roof ?",
    options: where_do_you_replace_the_roof(825665396, 221300610, 321882638),
  },
  {
    id: 825665396,
    type: "checkbox",
    label: "What material should the new roof be made of ?",
    options: what_material_be_made_of,
  },
  {
    id: 221300610,
    type: "checkbox",
    label: "What material should the new roof be made of ?",
    options: what_material_be_made_of,
  },
  {
    id: 321882638,
    type: "checkbox",
    label: "What material should the new roof be made of ?",
    options: what_material_be_made_of,
  },
  //   hipped roof
  {
    id: 411872572,
    type: "checkbox",
    label: "Where do you want to install or replace the roof ?",
    options: where_do_you_replace_the_roof(335629748, 639622277, 517534984),
  },
  {
    id: 335629748,
    type: "checkbox",
    label: "What material should the new roof be made of ?",
    options: what_material_be_made_of,
  },
  {
    id: 639622277,
    type: "checkbox",
    label: "What material should the new roof be made of ?",
    options: what_material_be_made_of,
  },
  {
    id: 517534984,
    type: "checkbox",
    label: "What material should the new roof be made of ?",
    options: what_material_be_made_of,
  },

  //   mansard roof
  {
    id: 263515402,
    type: "checkbox",
    label: "Where do you want to install or replace the roof ?",
    options: where_do_you_replace_the_roof(136800355, 572662710, 101282194),
  },
  {
    id: 136800355,
    type: "checkbox",
    label: "What material should the new roof be made of ?",
    options: what_material_be_made_of,
  },
  {
    id: 572662710,
    type: "checkbox",
    label: "What material should the new roof be made of ?",
    options: what_material_be_made_of,
  },
  {
    id: 101282194,
    type: "checkbox",
    label: "What material should the new roof be made of ?",
    options: what_material_be_made_of,
  },
  //   lean to roof
  {
    id: 510015251,
    type: "checkbox",
    label: "Where do you want to install or replace the roof ?",
    options: where_do_you_replace_the_roof(718253102, 872561399, 227277699),
  },
  {
    id: 718253102,
    type: "checkbox",
    label: "What material should the new roof be made of ?",
    options: what_material_be_made_of,
  },
  {
    id: 872561399,
    type: "checkbox",
    label: "What material should the new roof be made of ?",
    options: what_material_be_made_of,
  },
  {
    id: 227277699,
    type: "checkbox",
    label: "What material should the new roof be made of ?",
    options: what_material_be_made_of,
  },
  //   iam not sure
  {
    id: 132416115,
    type: "checkbox",
    label: "Where do you want to install or replace the roof ?",
    options: where_do_you_replace_the_roof(963151767, 658492671, 269455824),
  },
  {
    id: 963151767,
    type: "checkbox",
    label: "What material should the new roof be made of ?",
    options: what_material_be_made_of,
  },
  {
    id: 658492671,
    type: "checkbox",
    label: "What material should the new roof be made of ?",
    options: what_material_be_made_of,
  },
  {
    id: 269455824,
    type: "checkbox",
    label: "What material should the new roof be made of ?",
    options: what_material_be_made_of,
  },
];

export default repair;
