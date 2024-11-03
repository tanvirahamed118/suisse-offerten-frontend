import {
  ppproximately_how_big_is_covered_clad,
  what_is_the_order,
} from "../../reuse-data";

const plumbingSheet = [
  {
    id: 126762922,
    type: "checkbox",
    label: "Was erfordert ein Dienst ?",
    options: [
      {
        id: 822001588,
        label: "Dachrinne / Fallrohr",
      },
      {
        id: 553375588,
        label: "Kleinerer Dachabschnitt",
        des: "Z. B. First, Überhang, Kante, Blitzschutzanlage etc.",
      },
      {
        id: 497443654,
        label: "Abdeckung / Blende",
      },
      {
        id: 371481781,
        label: "Kamin / Schornstein",
        credit: 10,
      },
      {
        id: 463565116,
        label: "Andere",
        credit: 10,
      },
    ],
  },
  {
    id: 822001588,
    type: "checkbox",
    label: "Was muss hinsichtlich der Dachrinne/des Fallrohrs getan werden ?",
    options: [
      {
        id: 112122992,
        label: "Sauber",
      },
      {
        id: 248117555,
        label: "Ersatz",
      },
      {
        id: 415310641,
        label: "Reparieren",
      },
      {
        id: 411698828,
        label: "Installieren",
      },
      {
        id: 246565523,
        label: "Andere",
      },
    ],
  },
  {
    id: 112122992,
    type: "checkbox",
    label: "Wie lange dauert die Bestellung ungefähr ?",
    options: what_is_the_order,
  },
  {
    id: 248117555,
    type: "checkbox",
    label: "Wie lange dauert die Bestellung ungefähr ?",
    options: what_is_the_order,
  },
  {
    id: 415310641,
    type: "checkbox",
    label: "Wie lange dauert die Bestellung ungefähr ?",
    options: what_is_the_order,
  },
  {
    id: 411698828,
    type: "checkbox",
    label: "Wie lange dauert die Bestellung ungefähr ?",
    options: what_is_the_order,
  },
  {
    id: 246565523,
    type: "checkbox",
    label: "Wie lange dauert die Bestellung ungefähr ?",
    options: what_is_the_order,
  },
  {
    id: 553375588,
    type: "checkbox",
    label: "Wie lange dauert die Bestellung ungefähr ?",
    options: what_is_the_order,
  },
  {
    id: 497443654,
    type: "checkbox",
    label: "Wie groß ist das zu verkleidende Bauwerk ungefähr ?",
    options: ppproximately_how_big_is_covered_clad,
  },
];

export default plumbingSheet;
