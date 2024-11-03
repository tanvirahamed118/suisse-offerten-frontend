import doubleCarport from "./duble-carport";
import excavationEarthworks from "./excavation-earthworks";
import fencesGates from "./fences-gates";
import garageDoors from "./garage-ddors";
import gardenHouse from "./garden-house";
import gardenerHorteulture from "./gardener-horticulture";
import singleCarport from "./single-carport-tab";
import specialSize from "./special-size";
import pavingImg from "../../../../assets/images/request/paving.png";
import garage from "../../../../assets/images/request/garage.png";
import fences from "../../../../assets/images/request/fences.png";
import excavation from "../../../../assets/images/request/excanvation.png";
import gardenHouseimg from "../../../../assets/images/request/gardenHouse.png";
import gardener from "../../../../assets/images/request/gardener.png";
import other from "../../../../assets/images/request/other.png";
import paving from "./paving";
const gardenMain = [
  {
    id: 1025907639,
    type: "radio",
    label: "garden_sub_services_categories",
    options: [
      {
        id: 1031399466,
        label: "Gardener, Horticulture",
        img: gardener,
      },
      {
        id: 1036081080,
        label: "Paving, paths, roads",
        img: pavingImg,
      },
      {
        id: 1036517320,
        label: "Garage doors",
        img: garage,
      },
      {
        id: 1038904777,
        label: "Fences, gates, privacy screens",
        img: fences,
      },
      {
        id: 1040398747,
        label: "Garden house, carport, sauna",
        img: gardenHouseimg,
      },
      {
        id: 1041348437,
        label: "Excavation, earthworks, foundation",
        img: excavation,
      },
      {
        label: "Other work",
        img: other,
        credit: 8,
      },
    ],
  },
];

const gardenSurrounding = gardenMain.concat(
  doubleCarport,
  excavationEarthworks,
  fencesGates,
  garageDoors,
  gardenHouse,
  gardenerHorteulture,
  singleCarport,
  specialSize,
  paving
);

export default gardenSurrounding;
