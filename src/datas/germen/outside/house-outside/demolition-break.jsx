import {
  can_you_access_inside,
  how_extensive_order_approximately,
} from "../../reuse-data";

const demolitionBreak = [
  {
    id: 591219151,
    type: "checkbox",
    label: "Was sollte getan werden ?",
    options: [
      {
        id: 675692216,
        label: "Abbruch / Demontage",
      },
      {
        id: 725123056,
        label: "Mauerdurchbruch",
        credit: 20,
      },
      {
        id: 693242039,
        label: "Andere",
        credit: 10,
      },
    ],
  },
  {
    id: 675692216,
    type: "checkbox",
    label: "Wie umfangreich ist der Auftrag ungefähr ?",
    options: how_extensive_order_approximately(
      548050480,
      845101161,
      355907232,
      322138074
    ),
  },
  {
    id: 548050480,
    type: "checkbox",
    label: "Handelt es sich um Gefahrgut ?",
    options: [
      {
        id: 487163933,
        label: "Ja",
      },
      {
        id: 633781436,
        label: "NEIN",
      },
    ],
  },
  {
    id: 487163933,
    type: "checkbox",
    label: "Handelt es sich um Gefahrgut ?",
    headline:
      "Beispiele: Öltanks/Altöl, Chemikalien, Feuerwerkskörper, Farben, Pestizide, Batterien, elektrische/elektronische Geräte, Spraydosen, Medikamente.",
    options: can_you_access_inside,
  },
  {
    id: 633781436,
    type: "checkbox",
    label: "Handelt es sich um Gefahrgut ?",
    headline:
      "Beispiele: Öltanks/Altöl, Chemikalien, Feuerwerkskörper, Farben, Pestizide, Batterien, elektrische/elektronische Geräte, Spraydosen, Medikamente.",
    options: can_you_access_inside,
  },
  {
    id: 845101161,
    type: "checkbox",
    label: "Handelt es sich um Gefahrgut ?",
    options: [
      {
        id: 487163933,
        label: "Ja",
      },
      {
        id: 633781436,
        label: "NEIN",
      },
    ],
  },
  {
    id: 487163933,
    type: "checkbox",
    label: "Handelt es sich um Gefahrgut ?",
    headline:
      "Beispiele: Öltanks/Altöl, Chemikalien, Feuerwerkskörper, Farben, Pestizide, Batterien, elektrische/elektronische Geräte, Spraydosen, Medikamente.",
    options: can_you_access_inside,
  },
  {
    id: 633781436,
    type: "checkbox",
    label: "Handelt es sich um Gefahrgut ?",
    headline:
      "Beispiele: Öltanks/Altöl, Chemikalien, Feuerwerkskörper, Farben, Pestizide, Batterien, elektrische/elektronische Geräte, Spraydosen, Medikamente.",
    options: can_you_access_inside,
  },
  {
    id: 355907232,
    type: "checkbox",
    label: "Handelt es sich um Gefahrgut ?",
    options: [
      {
        id: 487163933,
        label: "Ja",
      },
      {
        id: 633781436,
        label: "NEIN",
      },
    ],
  },
  {
    id: 487163933,
    type: "checkbox",
    label: "Handelt es sich um Gefahrgut ?",
    headline:
      "Beispiele: Öltanks/Altöl, Chemikalien, Feuerwerkskörper, Farben, Pestizide, Batterien, elektrische/elektronische Geräte, Spraydosen, Medikamente.",
    options: can_you_access_inside,
  },
  {
    id: 633781436,
    type: "checkbox",
    label: "Handelt es sich um Gefahrgut ?",
    headline:
      "Beispiele: Öltanks/Altöl, Chemikalien, Feuerwerkskörper, Farben, Pestizide, Batterien, elektrische/elektronische Geräte, Spraydosen, Medikamente.",
    options: can_you_access_inside,
  },
  {
    id: 322138074,
    type: "checkbox",
    label: "Handelt es sich um Gefahrgut ?",
    options: [
      {
        id: 487163933,
        label: "Ja",
      },
      {
        id: 633781436,
        label: "NEIN",
      },
    ],
  },
  {
    id: 487163933,
    type: "checkbox",
    label: "Handelt es sich um Gefahrgut ?",
    headline:
      "Beispiele: Öltanks/Altöl, Chemikalien, Feuerwerkskörper, Farben, Pestizide, Batterien, elektrische/elektronische Geräte, Spraydosen, Medikamente.",
    options: can_you_access_inside,
  },
  {
    id: 633781436,
    type: "checkbox",
    label: "Handelt es sich um Gefahrgut ?",
    headline:
      "Beispiele: Öltanks/Altöl, Chemikalien, Feuerwerkskörper, Farben, Pestizide, Batterien, elektrische/elektronische Geräte, Spraydosen, Medikamente.",
    options: can_you_access_inside,
  },
  {
    id: 725123056,
    type: "checkbox",
    label: "Um was für eine Wand handelt es sich ?",
    options: [
      {
        label: "Ständerwand",
      },
      {
        label: "Nichttragende Wand",
      },
      {
        label: "Tragende Wand",
      },
      {
        label: "Ich weiß es nicht",
      },
    ],
  },
];

export default demolitionBreak;
