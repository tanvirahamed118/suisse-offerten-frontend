import garden from "../../../assets/images/request/walls.png";
import bathroomImg from "../../../assets/images/request/bathroom.png";
import electricianImg from "../../../assets/images/request/electrician.png";
import woodImg from "../../../assets/images/request/wood.png";
import heatingImg from "../../../assets/images/request/heating.png";
import metal from "../../../assets/images/request/metal.png";
import lockingImg from "../../../assets/images/request/locking.png";
import fireplaceImg from "../../../assets/images/request/fireplace.png";
import pest from "../../../assets/images/request/pest.png";
import other from "../../../assets/images/request/other.png";
import walls from "./walls/walls";
import bathroom from "./bathroom/bathroom";
import wood from "./wood/wood";
import electrician from "./electrician/electrician";
import metalWorking from "./metalworking/metal-working";
import heating from "./heating/heating";
import locking from "./locking/locking";
import fireplace from "./fireplace/fireplace";
import pastcontroll from "./pastcontroll/pastcontroll";

const insideCat = [
  {
    id: 1006566593,
    type: "radio",
    label: "inside_sub_services_categories",
    options: [
      {
        id: 204113564,
        label: "Murs, sols, fenêtres",
        img: garden,
      },
      {
        id: 706746029,
        label: "Salle de bain et cuisine",
        img: bathroomImg,
      },
      {
        id: 255079093,
        label: "Électricien, installation électrique",
        img: electricianImg,
      },
      {
        id: 284228116,
        label: "Bois et meubles",
        img: woodImg,
      },
      {
        id: 572041104,
        label: "Chauffage, ventilation, climatisation, réfrigération",
        img: heatingImg,
      },
      {
        id: 759709724,
        label: "Construction métallique, travail des métaux, forge",
        img: metal,
      },
      {
        id: 651345501,
        label: "Systèmes de verrouillage, systèmes d'alarme",
        img: lockingImg,
      },
      {
        id: 186682500,
        label: "Cheminée, Cheminée, Cheminée",
        img: fireplaceImg,
      },
      {
        id: 996551091,
        label: "Lutte antiparasitaire",
        img: pest,
      },
      {
        label: "Autres travaux",
        img: other,
        credit: 10,
      },
    ],
  },
];

const inside = insideCat.concat(
  walls,
  bathroom,
  wood,
  electrician,
  metalWorking,
  heating,
  locking,
  fireplace,
  pastcontroll
);

export default inside;
