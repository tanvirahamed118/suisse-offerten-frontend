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
        label: "Gärtner, Gartenbau",
        img: gardener,
      },
      {
        id: 1036081080,
        label: "Pflaster, Wege, Straßen",
        img: pavingImg,
      },
      {
        id: 1036517320,
        label: "Garagentore",
        img: garage,
      },
      {
        id: 1038904777,
        label: "Zäune, Tore, Sichtschutz",
        img: fences,
      },
      {
        id: 1040398747,
        label: "Gartenhaus, Carport, Sauna",
        img: gardenHouseimg,
      },
      {
        id: 1041348437,
        label: "Aushubarbeiten, Erdarbeiten, Fundamente",
        img: excavation,
      },
      {
        label: "Andere Arbeit",
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
