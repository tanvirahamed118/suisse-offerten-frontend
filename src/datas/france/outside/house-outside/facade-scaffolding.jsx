import Scaffolding from "../../../../assets/images/request/scaffoling.png";
import Insulation from "../../../../assets/images/request/isolation.png";
import Painting from "../../../../assets/images/request/painting.png";
import Bricklayer from "../../../../assets/images/request/bricklayers.png";

const facadeScaffolding = [
  {
    id: 566253155,
    type: "radio",
    label: "garden_sub_services_categories",
    options: [
      {
        id: 317009963,
        label: "Échafaudage, échafaudage",
        img: Scaffolding,
      },
      {
        id: 584581882,
        label: "Isolation, étanchéité, isolation",
        img: Insulation,
      },
      {
        id: 778223551,
        label: "Peinture, plâtrage",
        img: Painting,
      },
      {
        id: 809068343,
        label: "Maçon, plâtre, béton, joints",
        img: Bricklayer,
      },
    ],
  },
  {
    id: 317009963,
    type: "checkbox",
    label: "De quel genre d'objet s'agit-il ?",
    options: [
      {
        id: 819970984,
        label: "Maison individuelle",
      },
      {
        id: 170366635,
        label: "Immeuble d'appartements",
      },
      {
        id: 509245653,
        label: "Autre",
        credit: 15,
      },
    ],
  },
];

export default facadeScaffolding;
