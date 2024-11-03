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
    label: "Order Title",
    type: "orderTitle",
    des: "E.G:  B. Paint a 4.5 room apartment",
    options: [{ id: 608571324 }],
  },
  {
    id: 608571324,
    type: "radio",
    label: "main_services_categories",
    options: [
      {
        id: 1004884940,
        label: "Outside",
        img: outside,
      },
      {
        id: 1006566593,
        label: "Inside",
        img: insideImg,
      },
      {
        id: 1008649487,
        label: "Planning & Consulting",
        img: planingImg,
      },
      {
        id: 1009692966,
        label: "Car / Vehicles",
        img: carImg,
      },
      {
        id: 3290426656,
        label: "Moving, moving house",
        img: movingImg,
      },
      {
        id: 1014170444,
        label: "Cleaning",
        img: cleaningImg,
      },
      {
        id: 6972719352,
        label: "Transport & Disposal",
        img: transport,
      },
      {
        id: 1017268119,
        label: "Other",
        img: otherImg,
      },
    ],
  },

  {
    id: 611913870,
    type: "otherBox",
    label: "Good descriptions attract good companies.",
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
    label: "Is it possible to inspect the order site ?",
    options: [
      { label: "Yes", id: 111133053 },
      { label: "No", id: 878042431 },
    ],
  },
  {
    id: 111133053,
    type: "selectbox",
    mainId: 894169250,
    label: "Desired start of work",
    options: [
      { label: "As soon as possible" },
      { label: "By appointment" },
      { label: "In 3 to 6 months" },
      { label: "In more than 6 months" },
      { label: "In the next 3 months" },
      { label: "Within the next 30 days" },
    ],
  },
  {
    id: 878042431,
    type: "selectbox",
    mainId: 894169250,
    label: "Desired start of work",
    options: [
      { label: "As soon as possible" },
      { label: "By appointment" },
      { label: "In 3 to 6 months" },
      { label: "In more than 6 months" },
      { label: "In the next 3 months" },
      { label: "Within the next 30 days" },
    ],
  },
  {
    id: 894169250,
    type: "questionBox",
    label: "Would you like to add an image ?",
    headline:
      "With photos or floor plans, our providers can create better offers.",
    options: [
      { label: "Yes", id: 433725485 },
      { label: "No" },
      { label: "Maybe later" },
    ],
  },

  {
    id: 433725485,
    type: "imagebox",
    mainId: 457325240,
    label: "Would you like to add an image ?",
    headline:
      "With photos or floor plans, our providers can create better offers.",
    options: [{ label: "" }],
  },
  {
    id: 457325240,
    type: "emailbox",
    options: [
      {
        label: "E-mail",
        tag: "For notifications please enter your email address.",
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
