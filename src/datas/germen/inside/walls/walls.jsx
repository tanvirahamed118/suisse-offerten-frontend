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
        label: "Malerarbeiten, Verputzarbeiten",
        img: paintingImg,
      },
      {
        id: 147450429,
        label: "Parkett, Laminat, Teppich",
        img: parquetImg,
      },
      {
        id: 591422399,
        label: "Fenster & Türen",
        img: windowImg,
      },
      {
        id: 563723534,
        label: "Platten, Fliesen, Platten",
        img: slabsImg,
      },
      {
        id: 939997513,
        label: "Maurer, Putz, Beton, Fugen",
        img: briklayerImg,
      },
      {
        id: 125768399,
        label: "Jalousien, Rollläden, Markisen",
        img: blindsImg,
      },
      {
        id: 985800704,
        label: "Umbau, Totalsanierung, Erweiterung",
        img: conversionImg,
      },
      {
        id: 329510117,
        label: "Abbruch, Durchbruch, Demontage",
        img: demolitionImg,
      },
      {
        id: 165713266,
        label: "Zimmerei, Holzbau",
        img: carpentryImg,
      },
      {
        id: 364958112,
        label: "Glasbau, Verglasung",
        img: glassImg,
      },
      {
        id: 854277929,
        label: "Dämmung, Abdichtung, Isolierung",
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
