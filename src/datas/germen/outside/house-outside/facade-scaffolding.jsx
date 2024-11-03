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
        label: "Gerüstbau, Gerüstbau",
        img: Scaffolding,
      },
      {
        id: 584581882,
        label: "Dämmung, Abdichtung, Isolierung",
        img: Insulation,
      },
      {
        id: 778223551,
        label: "Malerarbeiten, Verputzarbeiten",
        img: Painting,
      },
      {
        id: 809068343,
        label: "Maurer, Putz, Beton, Fugen",
        img: Bricklayer,
      },
    ],
  },
  {
    id: 317009963,
    type: "checkbox",
    label: "Um was für ein Objekt handelt es sich?",
    options: [
      {
        id: 819970984,
        label: "Einfamilienhaus",
      },
      {
        id: 170366635,
        label: "Mehrfamilienhaus",
      },
      {
        id: 509245653,
        label: "Andere",
        credit: 15,
      },
    ],
  },
];

export default facadeScaffolding;
