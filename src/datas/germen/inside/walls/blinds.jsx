import { how_manyshuttersare_there } from "../../reuse-data";

const blinds = [
  {
    id: 125768399,
    type: "checkbox",
    label: "Welchen Jalousie-/Rollladenservice benötigen Sie ?",
    options: [
      {
        id: 371261802,
        label: "Neumontage oder Austausch",
        des: "Montage von Sonnenschutzrollos, Austausch von Rollläden, etc.",
      },
      {
        id: 269830997,
        label: "Reparieren",
        des: "Zugschnur gerissen, Sonnenschutzstoff austauschen, Kurbel/Motor klemmt, etc.",
      },
      {
        id: 518700481,
        label: "Reinigung",
        des: "Reinigung von Markisen, Lamellen, Rollladenkästen etc.",
      },
      {
        id: 915717690,
        label: "Elektrische Nachrüstung",
        des: "Umstellung auf Elektrobetrieb",
      },
      {
        id: 587723754,
        label: "Andere",
        credit: 5,
      },
    ],
  },
  {
    id: 371261802,
    type: "checkbox",
    label: "Wie viele Jalousien / Rollläden sind vorhanden ?",
    options: how_manyshuttersare_there,
  },
  {
    id: 269830997,
    type: "multibox",
    label: "Welche Reparaturarbeiten sind erforderlich ?",
    mainId: 247188590,
    options: [
      { label: "Sonnenschutzstoff ersetzen" },
      { label: "Torn ligaments" },
      { label: "Lamellen defekt" },
      { label: "Schwierigkeiten beim Öffnen oder Schließen" },
      { label: "Elektroantrieb defekt" },
      { label: "Andere" },
    ],
  },
  {
    id: 247188590,
    type: "checkbox",
    label: "Wie viele Jalousien / Rollläden sind vorhanden ?",
    options: how_manyshuttersare_there,
  },
  {
    id: 915717690,
    type: "checkbox",
    label: "Wie viele Jalousien / Rollläden sind vorhanden ?",
    options: how_manyshuttersare_there,
  },
  {
    id: 518700481,
    type: "checkbox",
    label: "Wie viele Fenster sollen geputzt werden ?",
    options: [
      { id: 431897744, label: "Nur Jalousien reinigen" },
      { id: 145979106, label: "Jalousien und Fenster reinigen" },
    ],
  },
  {
    id: 431897744,
    type: "checkbox",
    label: "Wie viele Jalousien/Rollläden sollen gereinigt werden ?",
    options: [
      { id: 870406207, label: "1 bis 2", credit: 4 },
      { id: 443853640, label: "3 bis 4", credit: 8 },
      { id: 970611313, label: "5 bis 6", credit: 15 },
      { id: 159569508, label: "10 oder mehr", credit: 35 },
    ],
  },
  {
    id: 145979106,
    type: "checkbox",
    label: "Wie viele Jalousien/Rollläden sollen gereinigt werden ?",
    options: [
      { id: 870406207, label: "1 bis 2", credit: 4 },
      { id: 443853640, label: "3 bis 4", credit: 8 },
      { id: 970611313, label: "5 bis 6", credit: 15 },
      { id: 159569508, label: "10 oder mehr", credit: 35 },
    ],
  },
  {
    id: 870406207,
    type: "multibox",
    label: "Um welche Art von Jalousien handelt es sich ?",
    options: [
      { label: "Markisen / Sonnenschutz aus Stoff" },
      { label: "Jalousien / Rollläden (innen)" },
      { label: "Jalousien / Rollläden (außen)" },
      { label: "Fensterladen (außen)" },
      { label: "Andere" },
    ],
  },
  {
    id: 443853640,
    type: "multibox",
    label: "Um welche Art von Jalousien handelt es sich ?",
    options: [
      { label: "Markisen / Sonnenschutz aus Stoff" },
      { label: "Jalousien / Rollläden (innen)" },
      { label: "Jalousien / Rollläden (außen)" },
      { label: "Fensterladen (außen)" },
      { label: "Andere" },
    ],
  },
  {
    id: 970611313,
    type: "multibox",
    label: "Um welche Art von Jalousien handelt es sich ?",
    options: [
      { label: "Markisen / Sonnenschutz aus Stoff" },
      { label: "Jalousien / Rollläden (innen)" },
      { label: "Jalousien / Rollläden (außen)" },
      { label: "Fensterladen (außen)" },
      { label: "Andere" },
    ],
  },
  {
    id: 159569508,
    type: "multibox",
    label: "Um welche Art von Jalousien handelt es sich ?",
    options: [
      { label: "Markisen / Sonnenschutz aus Stoff" },
      { label: "Jalousien / Rollläden (innen)" },
      { label: "Jalousien / Rollläden (außen)" },
      { label: "Fensterladen (außen)" },
      { label: "Andere" },
    ],
  },
];
export default blinds;
