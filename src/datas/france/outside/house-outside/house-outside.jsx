import Roofers from "../../../../assets/images/request/roofers.png";
import Facade from "../../../../assets/images/request/facade.png";
import Metal from "../../../../assets/images/request/metal.png";
import Blinds from "../../../../assets/images/request/blinds.png";
import Plumbing from "../../../../assets/images/request/plumbing.png";
import Solar from "../../../../assets/images/request/solar.png";
import Glass from "../../../../assets/images/request/glass.png";
import Demolition from "../../../../assets/images/request/demolition.png";
import Conversion from "../../../../assets/images/request/convertion.png";
import Excavation from "../../../../assets/images/request/excanvation.png";
import Other from "../../../../assets/images/request/other.png";
import installation from "./installation";
import repair from "./repair";
import singleFamily from "./single-family";
import facadeScaffolding from "./facade-scaffolding";
import apartmentBuilding from "./apartment-building";
import insulationSealing from "./insulation-sealing";
import paintingPlastering from "./painting-plastering";
import bricklayer from "./Bricklayer";
import metalConstruction from "./metal-construction";
import blindsRoller from "./blinds-roller";
import plumbingSheet from "./plumbing-sheet";
import solarPhotovoltaics from "./solar-photovoltaics";
import glassConstrucion from "./glass-construcion";
import demolitionBreak from "./demolition-break";
import excavationEartworks from "./excavation-eartworks";
import conversionTotal from "./conversion-total";

const houseOutside = [
  {
    id: 1028284475,
    type: "radio",
    label: "garden_sub_services_categories",
    options: [
      {
        id: 404433179,
        label: "Couvreurs, couverture de toit",
        img: Roofers,
      },
      {
        id: 566253155,
        label: "Façade et échafaudage",
        img: Facade,
      },
      {
        id: 467558696,
        label: "Construction métallique, travail des métaux, forge",
        img: Metal,
      },
      {
        id: 715426823,
        label: "Stores, volets roulants, auvents",
        img: Blinds,
      },
      {
        id: 126762922,
        label: "Ferblanterie, travail de la tôle",
        img: Plumbing,
      },
      {
        id: 780214185,
        label: "Solaire, photovoltaïque",
        img: Solar,
      },
      {
        id: 737145169,
        label: "Construction en verre, vitrage",
        img: Glass,
      },
      {
        id: 591219151,
        label: "Démolition, percée, démantèlement",
        img: Demolition,
      },
      {
        id: 166982408,
        label: "Excavation, terrassement, fondation",
        img: Excavation,
      },
      {
        id: 815049374,
        label: "Transformation, rénovation totale, extension",
        img: Conversion,
      },
      {
        label: "Autres travaux",
        img: Other,
        credit: 10,
      },
    ],
  },
  {
    id: 404433179,
    type: "checkbox",
    label: "Quel type de fondation ?",
    options: [
      {
        id: 431746179,
        label: "Pose ou remplacement d'une toiture",
        des: "Remplacer complètement le toit, construire un nouveau toit",
      },
      {
        id: 128976166,
        label: "Réparation ou inspection d'une toiture",
        des: "Remplacer plusieurs tuiles, boucher un trou dans le toit, réparer une gouttière",
      },
      {
        id: 335412947,
        label: "Nettoyer le toit ou la gouttière",
        credit: 15,
      },
      {
        id: 818282892,
        label: "Installation ou remplacement de fenêtres de toit",
        credit: 10,
      },
      {
        id: 406126319,
        label: "Autre",
        credit: 8,
      },
    ],
  },
];

const mainHouseOutside = houseOutside.concat(
  installation,
  repair,
  singleFamily,
  facadeScaffolding,
  apartmentBuilding,
  insulationSealing,
  paintingPlastering,
  bricklayer,
  metalConstruction,
  blindsRoller,
  plumbingSheet,
  solarPhotovoltaics,
  glassConstrucion,
  demolitionBreak,
  excavationEartworks,
  conversionTotal
);

export default mainHouseOutside;
