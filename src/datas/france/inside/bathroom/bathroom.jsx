import plumbingImg from "../../../../assets/images/request/car-painting.png";
import slabsImg from "../../../../assets/images/request/plates.png";
import bathroomImg from "../../../../assets/images/request/bathroom-renovation.png";
import kitchenImg from "../../../../assets/images/request/kitchen.png";
import carpenterImg from "../../../../assets/images/request/furniture.png";
import foilsImg from "../../../../assets/images/request/foils.png";
import plumbing from "./plumbing";
import slabs from "./slabs";
import renovations from "./renovations";
import kitchen from "./kitchen";
import carpenter from "./carpentar";
import foils from "./foils";

const bathroomCat = [
  {
    id: 706746029,
    type: "radio",
    label: "inside_bathroom_sub_services_categories",
    options: [
      {
        id: 243131485,
        label: "Travaux de plomberie",
        img: plumbingImg,
      },
      {
        id: 603134044,
        label: "Dalles, tuiles, dalles",
        img: slabsImg,
      },
      {
        id: 683493762,
        label: "Rénovations de salle de bain",
        img: bathroomImg,
      },
      {
        id: 348659292,
        label: "Construction de cuisine",
        img: kitchenImg,
      },
      {
        id: 698157120,
        label: "Menuisier, ameublement, décoration intérieure",
        img: carpenterImg,
      },
      {
        id: 364545179,
        label: "Feuilles, étiquettes",
        img: foilsImg,
      },
    ],
  },
];

const bathroom = bathroomCat.concat(
  plumbing,
  slabs,
  renovations,
  kitchen,
  carpenter,
  foils
);

export default bathroom;
