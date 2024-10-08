import disposalImg from "../../assets/images/request/disposal.png";
import Other from "../../assets/images/request/other.png";
import transportImg from "../../assets/images/request/transport.png";
import disposal from "./disposal/disposal";
import small from "./small/small";

const transportCat = [
  {
    id: 1014243614,
    type: "radio",
    label: "transport_sub_services_categories",
    options: [
      {
        id: 455461357,
        label: "Transports, small transports",
        img: transportImg,
      },
      {
        id: 428497448,
        label: "Disposal, clearing out",
        img: disposalImg,
      },
      {
        label: "Other work",
        img: Other,
      },
    ],
  },
];

const transported = transportCat.concat(small, disposal);

export default transported;
