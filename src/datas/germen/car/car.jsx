import carRepairImg from "../../../assets/images/request/car-repair.png";
import motorcycleImg from "../../../assets/images/request/motorcycle.png";
import foilsImg from "../../../assets/images/request/foiling-labeling.png";
import carPaintingImg from "../../../assets/images/request/car-painting-smart-repair.png";
import transportImg from "../../../assets/images/request/transport-small-transport.png";
import foils from "./foils/foils";
import carRepair from "./carRepain/carRepair";
import motorcycle from "./mororcycle/motorcycle";
import carPainting from "./carPainting/carPainting";
import transport from "./transport/transport";

const carCat = [
  {
    id: 1009692966,
    type: "radio",
    label: "car_sub_services_categories",
    options: [
      {
        id: 897336554,
        label: "Autoreparatur, Autoservice",
        img: carRepairImg,
      },
      {
        id: 741892374,
        label: "Motorrad, Vespa, Motorroller",
        img: motorcycleImg,
      },
      {
        id: 842619002,
        label: "Folien, Etiketten",
        img: foilsImg,
      },
      {
        id: 347333606,
        label: "Autolackierung, Smart Repair",
        img: carPaintingImg,
      },
      {
        id: 659664297,
        label: "Transporte, Kleintransporte",
        img: transportImg,
      },
    ],
  },
];

const car = carCat.concat(foils, carRepair, motorcycle, carPainting, transport);

export default car;