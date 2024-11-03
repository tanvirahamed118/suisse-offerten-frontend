import { can_you_access_inside, questionCheckboxItem } from "../../reuse-data";

const demolition = [
  {
    id: 329510117,
    type: "checkbox",
    label: "Was sollte getan werden ?",
    options: [
      {
        id: 420597409,
        label: "Abbruch / Demontage",
      },
      {
        id: 314038231,
        label: "Mauerdurchbruch",
        credit: 20,
      },
      {
        id: 482771364,
        label: "Andere",
        credit: 10,
      },
    ],
  },
  {
    id: 420597409,
    type: "checkbox",
    label: "Wie umfangreich ist der Auftrag ungefähr ?",
    options: [
      {
        id: 541297650,
        des: "Z.B. Kamin, Spielhaus, etc.",
        label: "Klein",
        credit: 10,
      },
      {
        id: 967554274,
        des: "Z. B. Küche, Bad, Öltank usw.",
        label: "Medium",
        credit: 25,
      },
      {
        id: 926585133,
        des: "Z.B. Garage, Anbau, Wohnung etc.",
        label: "Groß",
        credit: 35,
      },
      {
        id: 902521810,
        des: "Z.B. ganzes Haus, mehrere Grundstücke, etc.",
        label: "Sehr groß",
        credit: 55,
      },
    ],
  },
  {
    id: 541297650,
    type: "checkbox",
    label: "Soll es auch entfernt werden ?",
    options: questionCheckboxItem(515319036, 408078507),
  },
  {
    id: 515319036,
    type: "checkbox",
    label: "Soll es auch entfernt werden ?",
    headline:
      "Beispiele: Öltanks/Altöl, Chemikalien, Feuerwerkskörper, Farben, Pestizide, Batterien, elektrische/elektronische Geräte, Spraydosen, Medikamente.",
    options: can_you_access_inside,
  },
  {
    id: 408078507,
    type: "checkbox",
    label: "Soll es auch entfernt werden ?",
    headline:
      "Beispiele: Öltanks/Altöl, Chemikalien, Feuerwerkskörper, Farben, Pestizide, Batterien, elektrische/elektronische Geräte, Spraydosen, Medikamente.",
    options: can_you_access_inside,
  },
  {
    id: 967554274,
    type: "checkbox",
    label: "Soll es auch entfernt werden ?",
    options: questionCheckboxItem(515319036, 408078507),
  },
  {
    id: 515319036,
    type: "checkbox",
    label: "Soll es auch entfernt werden ?",
    headline:
      "Beispiele: Öltanks/Altöl, Chemikalien, Feuerwerkskörper, Farben, Pestizide, Batterien, elektrische/elektronische Geräte, Spraydosen, Medikamente.",
    options: can_you_access_inside,
  },
  {
    id: 408078507,
    type: "checkbox",
    label: "Soll es auch entfernt werden ?",
    headline:
      "Beispiele: Öltanks/Altöl, Chemikalien, Feuerwerkskörper, Farben, Pestizide, Batterien, elektrische/elektronische Geräte, Spraydosen, Medikamente.",
    options: can_you_access_inside,
  },
  {
    id: 926585133,
    type: "checkbox",
    label: "Soll es auch entfernt werden ?",
    options: questionCheckboxItem(515319036, 408078507),
  },
  {
    id: 515319036,
    type: "checkbox",
    label: "Soll es auch entfernt werden ?",
    headline:
      "Beispiele: Öltanks/Altöl, Chemikalien, Feuerwerkskörper, Farben, Pestizide, Batterien, elektrische/elektronische Geräte, Spraydosen, Medikamente.",
    options: can_you_access_inside,
  },
  {
    id: 408078507,
    type: "checkbox",
    label: "Soll es auch entfernt werden ?",
    headline:
      "Beispiele: Öltanks/Altöl, Chemikalien, Feuerwerkskörper, Farben, Pestizide, Batterien, elektrische/elektronische Geräte, Spraydosen, Medikamente.",
    options: can_you_access_inside,
  },
  {
    id: 902521810,
    type: "checkbox",
    label: "Soll es auch entfernt werden ?",
    options: questionCheckboxItem(515319036, 408078507),
  },
  {
    id: 515319036,
    type: "checkbox",
    label: "Soll es auch entfernt werden ?",
    headline:
      "Beispiele: Öltanks/Altöl, Chemikalien, Feuerwerkskörper, Farben, Pestizide, Batterien, elektrische/elektronische Geräte, Spraydosen, Medikamente.",
    options: can_you_access_inside,
  },
  {
    id: 408078507,
    type: "checkbox",
    label: "Soll es auch entfernt werden ?",
    headline:
      "Beispiele: Öltanks/Altöl, Chemikalien, Feuerwerkskörper, Farben, Pestizide, Batterien, elektrische/elektronische Geräte, Spraydosen, Medikamente.",
    options: can_you_access_inside,
  },

  {
    id: 314038231,
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

export default demolition;
