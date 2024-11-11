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
    label: "Titre de la commande",
    type: "orderTitle",
    des: "Ex. : B. Peindre un appartement de 4,5 pièces",
    options: [{ id: 608571324 }],
  },
  {
    id: 608571324,
    type: "radio",
    label: "main_services_categories",
    options: [
      {
        id: 1004884940,
        label: "Dehors",
        img: outside,
        mainCatId: 8309555449,
      },
      {
        id: 1006566593,
        label: "À l'intérieur",
        img: insideImg,
        mainCatId: 2916927696,
      },
      {
        id: 1008649487,
        label: "Planification et conseil",
        img: planingImg,
        mainCatId: 5483121298,
      },
      {
        id: 1009692966,
        label: "Voiture / Véhicules",
        img: carImg,
        mainCatId: 2399755955,
      },
      {
        id: 3290426656,
        label: "Déménager, déménager",
        img: movingImg,
        mainCatId: 3777511571,
      },
      {
        id: 1014170444,
        label: "Nettoyage",
        img: cleaningImg,
        mainCatId: 3301890183,
      },
      {
        id: 6972719352,
        label: "Transport et élimination",
        img: transport,
        mainCatId: 6212784190,
      },
      {
        id: 1017268119,
        label: "Autre",
        img: otherImg,
        mainCatId: 7547356309,
      },
    ],
  },

  {
    id: 611913870,
    type: "otherBox",
    label: "Les bonnes descriptions attirent les bonnes entreprises.",
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
    label: "Est-il possible d'inspecter le site de commande ?",
    options: [
      { label: "Oui", id: 111133053 },
      { label: "Non", id: 878042431 },
    ],
  },
  {
    id: 111133053,
    type: "selectbox",
    mainId: 894169250,
    label: "Début des travaux souhaité",
    options: [
      { label: "Dès que possible" },
      { label: "Sur rendez-vous" },
      { label: "Dans 3 à 6 mois" },
      { label: "Dans plus de 6 mois" },
      { label: "Dans les 3 prochains mois" },
      { label: "Dans les 30 prochains jours" },
    ],
  },
  {
    id: 878042431,
    type: "selectbox",
    mainId: 894169250,
    label: "Début des travaux souhaité",
    options: [
      { label: "Dès que possible" },
      { label: "Sur rendez-vous" },
      { label: "Dans 3 à 6 mois" },
      { label: "Dans plus de 6 mois" },
      { label: "Dans les 3 prochains mois" },
      { label: "Dans les 30 prochains jours" },
    ],
  },
  {
    id: 894169250,
    type: "questionBox",
    label: "Souhaitez-vous ajouter une image ?",
    headline:
      "Grâce à des photos ou des plans d'étage, nos fournisseurs peuvent créer de meilleures offres.",
    options: [
      { label: "Oui", id: 433725485 },
      { label: "Non" },
      { label: "Peut-être plus tard" },
    ],
  },

  {
    id: 433725485,
    type: "imagebox",
    mainId: 457325240,
    label: "Souhaitez-vous ajouter une image ?",
    headline:
      "Grâce à des photos ou des plans d'étage, nos fournisseurs peuvent créer de meilleures offres.",
    options: [{ label: "" }],
  },
  {
    id: 457325240,
    type: "emailbox",
    options: [
      {
        label: "E-mail",
        tag: "Pour les notifications, veuillez saisir votre adresse e-mail.",
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
