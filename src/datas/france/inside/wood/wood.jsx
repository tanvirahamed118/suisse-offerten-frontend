import carpenteryImg from "../../../../assets/images/request/carpentry.png";
import carpenterImg from "../../../../assets/images/request/carpenter-furniture-interior-design.png";
import upholsteryImg from "../../../../assets/images/request/upholstery.png";
import carpentry from "./carpentary";
import carpenter from "./carpenter";
import upholstery from "./upholstery";

const woodCat = [
  {
    id: 284228116,
    type: "radio",
    label: "inside_wood_sub_services_categories",
    options: [
      {
        id: 6680802649,
        label: "Charpenterie, construction en bois",
        img: carpenteryImg,
      },
      {
        id: 213801317,
        label: "Menuisier, ameublement, décoration intérieure",
        img: carpenterImg,
      },
      {
        id: 896194815,
        label: "Tapisserie, sellerie",
        img: upholsteryImg,
      },
    ],
  },
];

const wood = woodCat.concat(carpentry, carpenter, upholstery);

export default wood;
