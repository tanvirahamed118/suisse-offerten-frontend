import disposalImg from "../../../assets/images/request/disposal.png";
import Other from "../../../assets/images/request/other.png";
import transportImg from "../../../assets/images/request/transport-small-transport.png";
import disposal from "./disposal/disposal";
import small from "./small/small";

const transportCat = [
  {
    id: 6972719352,
    type: "radio",
    label: "transport_sub_services_categories",
    options: [
      {
        id: 1529840539,
        label: "Transporte, Kleintransporte",
        img: transportImg,
      },
      {
        id: 428497448,
        label: "Entsorgung, Entrümpelung",
        img: disposalImg,
      },
      {
        label: "Andere Arbeit",
        img: Other,
        credit: 7,
      },
    ],
  },
];

const transported = transportCat.concat(small, disposal);

export default transported;
