import outside from "../../assets/images/request/outside.png";
import insideImg from "../../assets/images/request/inside.png";
import planingImg from "../../assets/images/request/planing.png";
import carImg from "../../assets/images/request/car.png";
import movingImg from "../../assets/images/request/moving.png";
import cleaningImg from "../../assets/images/request/cleaning.png";
import transport from "../../assets/images/request/transport.png";
import otherImg from "../../assets/images/request/other.png";
import outSide from "./outside/outside";
import inside from "./inside/inside";
import planing from "./planning/planing";
import car from "./car/car";
import moving from "./moving/moving";
import cleaning from "./cleaning/cleaning";
import transported from "./transport/transport";
import other from "./other/other";

const questions = [
  {
    id: 392164430,
    label: "Bestelltitel",
    type: "orderTitle",
    des: "Z.B.: 4,5 Zimmerwohnung streichen",
    options: [{ id: 608571324 }],
  },
  {
    id: 608571324,
    type: "radio",
    label: "main_services_categories",
    options: [
      {
        id: 1004884940,
        label: "Draußen",
        img: outside,
      },
      {
        id: 1006566593,
        label: "Innen",
        img: insideImg,
      },
      {
        id: 1008649487,
        label: "Planung & Beratung",
        img: planingImg,
      },
      {
        id: 1009692966,
        label: "Auto / Fahrzeuge",
        img: carImg,
      },
      {
        id: 3290426656,
        label: "Umzug, Wohnungswechsel",
        img: movingImg,
      },
      {
        id: 1014170444,
        label: "Reinigung",
        img: cleaningImg,
      },
      {
        id: 6972719352,
        label: "Transport & Entsorgung",
        img: transport,
      },
      {
        id: 1017268119,
        label: "Andere",
        img: otherImg,
      },
    ],
  },

  {
    id: 611913870,
    type: "otherBox",
    label: "Gute Beschreibungen ziehen gute Unternehmen an.",
    options: [{ id: 335989887 }],
  },
  {
    id: 335989887,
    type: "postBox",
    mainId: 847973948,
    options: [{ label: "" }],
  },
  {
    id: 847973948,
    type: "orderbox",
    label: "Ist es möglich, die Bestellseite einzusehen?",
    options: [
      { label: "Ja", id: 111133053 },
      { label: "NEIN", id: 878042431 },
    ],
  },
  {
    id: 111133053,
    type: "selectbox",
    mainId: 894169250,
    label: "Gewünschter Arbeitsbeginn",
    options: [
      { label: "So schnell wie möglich" },
      { label: "Nach Vereinbarung" },
      { label: "In 3 bis 6 Monaten" },
      { label: "In mehr als 6 Monaten" },
      { label: "In den nächsten 3 Monaten" },
      { label: "Innerhalb der nächsten 30 Tage" },
    ],
  },
  {
    id: 878042431,
    type: "selectbox",
    mainId: 894169250,
    label: "Gewünschter Arbeitsbeginn",
    options: [
      { label: "So schnell wie möglich" },
      { label: "Nach Vereinbarung" },
      { label: "In 3 bis 6 Monaten" },
      { label: "In mehr als 6 Monaten" },
      { label: "In den nächsten 3 Monaten" },
      { label: "Innerhalb der nächsten 30 Tage" },
    ],
  },
  {
    id: 894169250,
    type: "questionBox",
    label: "Möchten Sie ein Bild hinzufügen?",
    headline:
      "Mit Fotos oder Grundrissen können unsere Anbieter bessere Angebote erstellen.",
    options: [
      { label: "Ja", id: 433725485 },
      { label: "NEIN" },
      { label: "Vielleicht später" },
    ],
  },

  {
    id: 433725485,
    type: "imagebox",
    mainId: 457325240,
    label: "Möchten Sie ein Bild hinzufügen?",
    headline:
      "Mit Fotos oder Grundrissen können unsere Anbieter bessere Angebote erstellen.",
    options: [{ label: "" }],
  },
  {
    id: 457325240,
    type: "emailbox",
    options: [
      {
        label: "E-mail",
        tag: "Für Benachrichtigungen geben Sie bitte Ihre E-Mail-Adresse ein.",
      },
    ],
  },
];

const allQuestions = questions.concat(
  outSide,
  inside,
  planing,
  car,
  moving,
  cleaning,
  transported,
  other
);

export default allQuestions;
