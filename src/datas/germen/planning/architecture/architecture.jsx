import { approximately_how_big_affected_structure } from "../../reuse-data";

const architecture = [
  {
    id: 256319551,
    type: "checkbox",
    label: "Welchen Service benötigen Sie ?",
    options: [
      {
        id: 644833688,
        label: "Statik",
        des: "Z. B. Statikgutachten, Durchbruch einer tragenden Wand, etc.",
      },
      {
        id: 939690592,
        label: "Architektur",
        des: "Z.B. Studie, Grundriss, Visualisierung, Baueingabe, etc.",
      },
      {
        id: 299836718,
        label: "Gutachten / Nachweis / Berechnung etc.",
        des: "Z.B. Energieausweis, Mängelbesichtigung, etc.",
      },
      {
        id: 257238238,
        label: "Baumanagement",
      },
      {
        label: "Andere oder mehrere der oben genannten",
        credit: 15,
      },
    ],
  },
  {
    id: 644833688,
    type: "multibox",
    mainId: 689042963,
    label: "Welchen Statistikdienst benötigen Sie ?",
    options: [
      {
        label: "Baustatik-Bericht",
      },
      {
        label: "Durchbruch einer tragenden Wand",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 689042963,
    type: "checkbox",
    label: "Wie groß ist das betroffene Gebiet ?",
    options: approximately_how_big_affected_structure,
  },
  {
    id: 939690592,
    type: "multibox",
    mainId: 866189685,
    label: "Welche Architekturleistungen benötigen Sie ?",
    options: [
      {
        label: "Machbarkeitsstudie / Projektstudie",
      },
      {
        label: "Messungen",
      },
      {
        label: "Zeichnung Grundriss / Pläne",
      },
      {
        label: "Digitalisierung / Visualisierung von Plänen",
      },
      {
        label: "Bauantrag",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 866189685,
    type: "checkbox",
    label: "Wie groß ist das betroffene Gebiet ?",
    options: approximately_how_big_affected_structure,
  },
  {
    id: 299836718,
    type: "multibox",
    mainId: 551559776,
    label: "Welches Gutachten o.ä. wird benötigt ?",
    options: [
      {
        label: "Energie / Wärmedämmung",
      },
      {
        label: "Besichtigung / Mängel (zB. beim Hauskauf)",
      },
      {
        label: "Ton / Geräusch",
      },
      {
        label: "Schadstoffe (z. B. Asbest)",
      },
      {
        label: "SIA-Steuerung",
      },
      {
        label: "Lichtquelle",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 551559776,
    type: "checkbox",
    label: "Wie groß ist das betroffene Gebiet ?",
    options: approximately_how_big_affected_structure,
  },
  {
    id: 257238238,
    type: "checkbox",
    label: "Wie groß ist das betroffene Gebiet ?",
    options: approximately_how_big_affected_structure,
  },
];

export default architecture;
