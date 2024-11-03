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
        label: "Roofers, roofing",
        img: Roofers,
      },
      {
        id: 566253155,
        label: "Facade & Scaffolding",
        img: Facade,
      },
      {
        id: 467558696,
        label: "Metal construction, metalworking, blacksmithing",
        img: Metal,
      },
      {
        id: 715426823,
        label: "Blinds, roller shutters, awnings",
        img: Blinds,
      },
      {
        id: 126762922,
        label: "Tinsmithing, sheet metal working",
        img: Plumbing,
      },
      {
        id: 780214185,
        label: "Solar, photovoltaics",
        img: Solar,
      },
      {
        id: 737145169,
        label: "Glass construction, glazing",
        img: Glass,
      },
      {
        id: 591219151,
        label: "Demolition, breakthrough, dismantling",
        img: Demolition,
      },
      {
        id: 166982408,
        label: "Excavation, earthworks, foundation",
        img: Excavation,
      },
      {
        id: 815049374,
        label: "Conversion, total renovation, extension",
        img: Conversion,
      },
      {
        label: "Other work",
        img: Other,
        credit: 10,
      },
    ],
  },
  {
    id: 404433179,
    type: "checkbox",
    label: "What type of foundation ?",
    options: [
      {
        id: 431746179,
        label: "Installation or replacement of a roof",
        des: "Replace roof completely, build new roof",
      },
      {
        id: 128976166,
        label: "Repair or inspection of a roof",
        des: "Replace several roof tiles, patch a hole in the roof, repair a gutter",
      },
      {
        id: 335412947,
        label: "Clean roof or gutter",
        credit: 15,
      },
      {
        id: 818282892,
        label: "Installing or replacing roof windows",
        credit: 10,
      },
      {
        id: 406126319,
        label: "Other",
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
