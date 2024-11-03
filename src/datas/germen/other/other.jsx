import telephoneImg from "../../../assets/images/request/teliphones.png";
import glassImg from "../../../assets/images/request/glass.png";
import foilsImg from "../../../assets/images/request/foils.png";
import otherImg from "../../../assets/images/request/other.png";
import glass from "./glass";
import foils from "./foils";
import teliphones from "./teliphone";

const otherCat = [
  {
    id: 1017268119,
    type: "radio",
    label: "other_sub_services_categories",
    options: [
      {
        id: 824814971,
        label: "Telefon, Internet, Multimedia",
        img: telephoneImg,
      },
      {
        id: 9531832783,
        label: "Glasbau, Verglasung",
        img: glassImg,
      },
      {
        id: 521411467,
        label: "Folien, Etiketten",
        img: foilsImg,
      },
      {
        label: "Andere Arbeit",
        img: otherImg,
        credit: 6,
      },
    ],
  },
];

const other = otherCat.concat(glass, foils, teliphones);

export default other;
