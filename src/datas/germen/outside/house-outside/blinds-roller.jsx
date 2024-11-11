import {
  how_many_be_cleaned,
  how_many_blinds_shutters,
  what_type_blinds_are_they,
} from "../../reuse-data";

const blindsRoller = [
  {
    id: 715426823,
    type: "checkbox",
    label: "Welchen Jalousie-/Rollladenservice benötigen Sie ?",
    options: [
      {
        id: 487849105,
        label: "Neumontage oder Austausch",
        des: "Montage von Sonnenschutzrollos, Austausch von Rollläden, etc.",
      },
      {
        id: 912321654,
        label: "Reparieren",
        des: "Zugschnur gerissen, Sonnenschutzstoff austauschen, Kurbel/Motor klemmt, etc.",
      },
      {
        id: 700590038,
        label: "Reinigung",
        des: "Reinigung von Markisen, Lamellen, Rollladenkästen etc.",
      },
      {
        id: 206178680,
        label: "Elektrische Nachrüstung",
        des: "Umstellung auf Elektrobetrieb",
      },
      {
        id: 614798495,
        label: "Andere",
        credit: 5,
      },
    ],
  },
  {
    id: 487849105,
    type: "checkbox",
    label: "Wie viele Jalousien / Rollläden sind vorhanden ?",
    options: how_many_blinds_shutters,
  },
  {
    id: 206178680,
    type: "checkbox",
    label: "Wie viele Jalousien / Rollläden sind vorhanden ?",
    options: how_many_blinds_shutters,
  },
  {
    id: 912321654,
    type: "multibox",
    mainId: 277043516,
    label: "Welchen Jalousie-/Rollladenservice benötigen Sie ?",
    options: [
      {
        label: "Sonnenschutzstoff ersetzen",
      },
      {
        label: "Bänderriss",
      },
      {
        label: "Lamellen defekt",
      },
      {
        label: "Schwierigkeiten beim Öffnen oder Schließen",
      },
      {
        label: "Elektroantrieb defekt",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 277043516,
    type: "checkbox",
    label: "Wie viele Jalousien / Rollläden sind vorhanden ?",
    options: how_many_blinds_shutters,
  },
  {
    id: 689289633,
    type: "checkbox",
    label: "Jalousien und Fenster reinigen ?",
    options: [
      {
        id: 791979535,
        label: "Nur Jalousien reinigen",
      },
      {
        id: 403175916,
        label: "Jalousien und Fenster reinigen",
      },
    ],
  },
  {
    id: 791979535,
    type: "checkbox",
    label: "Wie viele Jalousien/Rollläden sollen gereinigt werden ?",
    options: how_many_be_cleaned(502391050, 117385925, 685137619, 601813141),
  },
  {
    id: 502391050,
    type: "multibox",
    label: "Um welche Art von Jalousien handelt es sich ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 117385925,
    type: "multibox",
    label: "Um welche Art von Jalousien handelt es sich ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 685137619,
    type: "multibox",
    label: "Um welche Art von Jalousien handelt es sich ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 601813141,
    type: "multibox",
    label: "Um welche Art von Jalousien handelt es sich ?",
    options: what_type_blinds_are_they,
  },

  {
    id: 403175916,
    type: "checkbox",
    label: "Wie viele Fenster sollen geputzt werden ?",
    options: how_many_be_cleaned(502391050, 117385925, 685137619, 601813141),
  },
  {
    id: 502391050,
    type: "checkbox",
    label: "Um welche Art von Jalousien handelt es sich ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 117385925,
    type: "checkbox",
    label: "Um welche Art von Jalousien handelt es sich ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 685137619,
    type: "checkbox",
    label: "Um welche Art von Jalousien handelt es sich ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 601813141,
    type: "checkbox",
    label: "Um welche Art von Jalousien handelt es sich ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 700590038,
    type: "checkbox",
    label: "Wie viele Fenster sollen geputzt werden ?",
    options: [
      {
        id: 791979535,
        label: "Nur Jalousien reinigen",
      },
      {
        id: 403175916,
        label: "Jalousien und Fenster reinigen",
      },
    ],
  },
];

export default blindsRoller;
