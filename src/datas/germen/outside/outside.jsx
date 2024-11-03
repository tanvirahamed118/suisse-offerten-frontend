import gardenSurrounding from "./garden-surrounding/garden-cat";
import mainHouseOutside from "./house-outside/house-outside";
import garden from "../../../assets/images/request/garden.png";
import houseOutsideImg from "../../../assets/images/request/house.png";

const outSideCat = [
  {
    id: 1004884940,
    type: "radio",
    label: "outside_sub_services_categories",
    options: [
      {
        id: 1025907639,
        label: "Garten & Umgebung",
        img: garden,
      },
      {
        id: 1028284475,
        label: "Haus außen",
        img: houseOutsideImg,
      },
    ],
  },
];

const outSide = outSideCat.concat(mainHouseOutside, gardenSurrounding);

export default outSide;
