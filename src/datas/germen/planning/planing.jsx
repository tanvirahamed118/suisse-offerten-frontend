import architectureImg from "../../../assets/images/request/architecture.png";
import solarImg from "../../../assets/images/request/solar.png";
import heatingImg from "../../../assets/images/request/heating.png";
import gardenerImg from "../../../assets/images/request/gardener.png";
import other from "../../../assets/images/request/other.png";
import heating from "./heating/heating";
import gardener from "./gardener/gardener";
import solar from "./solar/solar";
import architecture from "./architecture/architecture";

const planingCat = [
  {
    id: 1008649487,
    type: "radio",
    label: "planing_sub_services_categories",
    options: [
      {
        id: 256319551,
        label: "Architektur, Planung, Statik",
        img: architectureImg,
      },
      {
        id: 3793680715,
        label: "Solar, Photovoltaik",
        img: solarImg,
      },
      {
        id: 375609626,
        label: "Heizung, Lüftung, Klima, Kälte",
        img: heatingImg,
      },
      {
        id: 8709238135,
        label: "Gärtner, Gartenbau",
        img: gardenerImg,
      },
      {
        label: "Andere Arbeit",
        img: other,
        credit: 10,
      },
    ],
  },
];

const planing = planingCat.concat(heating, gardener, solar, architecture);

export default planing;
