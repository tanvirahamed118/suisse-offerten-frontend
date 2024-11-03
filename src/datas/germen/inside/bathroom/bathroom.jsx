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
        label: "Klempnerarbeiten",
        img: plumbingImg,
      },
      {
        id: 603134044,
        label: "Platten, Fliesen, Platten",
        img: slabsImg,
      },
      {
        id: 683493762,
        label: "Badezimmerrenovierungen",
        img: bathroomImg,
      },
      {
        id: 348659292,
        label: "Küchenbau",
        img: kitchenImg,
      },
      {
        id: 698157120,
        label: "Tischlerei, Möbelbau, Innenausbau",
        img: carpenterImg,
      },
      {
        id: 364545179,
        label: "Folien, Etiketten",
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
