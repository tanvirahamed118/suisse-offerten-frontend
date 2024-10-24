import Scaffolding from "../../../assets/images/request/scaffoling.png";
import Insulation from "../../../assets/images/request/isolation.png";
import Painting from "../../../assets/images/request/painting.png";
import Bricklayer from "../../../assets/images/request/bricklayers.png";

const facadeScaffolding = [
  {
    id: 566253155,
    type: "radio",
    label: "garden_sub_services_categories",
    options: [
      {
        id: 317009963,
        label: "Scaffolding, scaffolding",
        img: Scaffolding,
      },
      {
        id: 584581882,
        label: "Insulation, sealing, insulation",
        img: Insulation,
      },
      {
        id: 778223551,
        label: "Painting, plastering",
        img: Painting,
      },
      {
        id: 809068343,
        label: "Bricklayer, plaster, concrete, joints",
        img: Bricklayer,
      },
    ],
  },
  {
    id: 317009963,
    type: "checkbox",
    label: "What kind of object is it ?",
    options: [
      {
        id: 819970984,
        label: "Single-family house",
      },
      {
        id: 170366635,
        label: "Apartment building",
      },
      {
        id: 509245653,
        label: "Other",
        credit: 15,
      },
    ],
  },
];

export default facadeScaffolding;
