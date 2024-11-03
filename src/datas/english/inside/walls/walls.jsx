import paintingImg from "../../../../assets/images/request/painting.png";
import parquetImg from "../../../../assets/images/request/parquet.png";
import windowImg from "../../../../assets/images/request/window.png";
import slabsImg from "../../../../assets/images/request/plates.png";
import briklayerImg from "../../../../assets/images/request/bricklayers.png";
import blindsImg from "../../../../assets/images/request/blinds.png";
import conversionImg from "../../../../assets/images/request/convertion.png";
import demolitionImg from "../../../../assets/images/request/demolition.png";
import carpentryImg from "../../../../assets/images/request/carpentry.png";
import glassImg from "../../../../assets/images/request/glass.png";
import insulationImg from "../../../../assets/images/request/isolation.png";
import painting from "./painting";
import parquet from "./parquet";
import windows from "./windows";
import slabs from "./slabs";
import bricklayer from "./bricklayer";
import blinds from "./blinds";
import conversion from "./conversion";
import demolition from "./demolition";
import glass from "./glass";
import insulation from "./insulation";
import carpentaryAll from "./carpentary";

const wallsCat = [
  {
    id: 204113564,
    type: "radio",
    label: "inside_walls_sub_services_categories",
    options: [
      {
        id: 456003475,
        label: "Painting, plastering",
        img: paintingImg,
      },
      {
        id: 147450429,
        label: "Parquet, laminate, carpet",
        img: parquetImg,
      },
      {
        id: 591422399,
        label: "Windows & Doors",
        img: windowImg,
      },
      {
        id: 563723534,
        label: "Slabs, tiles, slabs",
        img: slabsImg,
      },
      {
        id: 939997513,
        label: "Bricklayer, plaster, concrete, joints",
        img: briklayerImg,
      },
      {
        id: 125768399,
        label: "Blinds, roller shutters, awnings",
        img: blindsImg,
      },
      {
        id: 985800704,
        label: "Conversion, total renovation, extension",
        img: conversionImg,
      },
      {
        id: 329510117,
        label: "Demolition, breakthrough, dismantling",
        img: demolitionImg,
      },
      {
        id: 165713266,
        label: "Carpentry, timber construction",
        img: carpentryImg,
      },
      {
        id: 364958112,
        label: "Glass construction, glazing",
        img: glassImg,
      },
      {
        id: 854277929,
        label: "Insulation, sealing, insulation",
        img: insulationImg,
      },
    ],
  },
];

const walls = wallsCat.concat(
  painting,
  parquet,
  windows,
  slabs,
  bricklayer,
  blinds,
  conversion,
  demolition,
  carpentaryAll,
  glass,
  insulation
);

export default walls;
