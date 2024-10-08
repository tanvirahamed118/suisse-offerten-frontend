import plumbingImg from "../../../assets/images/request/car-painting.png";
import slabsImg from "../../../assets/images/request/plates.png";
import bathroomImg from "../../../assets/images/request/bathroom.png";
import kitchenImg from "../../../assets/images/request/kitchen.png";
import carpenterImg from "../../../assets/images/request/furniture.png";
import foilsImg from "../../../assets/images/request/foils.png";
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
        label: "Plumbing work",
        img: plumbingImg,
      },
      {
        id: 603134044,
        label: "Slabs, tiles, slabs",
        img: slabsImg,
      },
      {
        id: 683493762,
        label: "Bathroom renovations",
        img: bathroomImg,
      },
      {
        id: 348659292,
        label: "Kitchen construction",
        img: kitchenImg,
      },
      {
        id: 698157120,
        label: "Carpenter, furniture, interior design",
        img: carpenterImg,
      },
      {
        id: 364545179,
        label: "Foils, labels",
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
