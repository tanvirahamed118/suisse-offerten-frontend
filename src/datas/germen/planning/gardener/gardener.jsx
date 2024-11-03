import {
  what_work_needs_done,
  how_big_the_tree_one,
  is_gate_be_installed_already,
  how_large_garden_designed,
  input,
} from "../../reuse-data";

const gardener = [
  {
    id: 8709238135,
    type: "checkbox",
    label: "Welche Leistungen sollen erbracht werden ?",
    options: [
      {
        id: 2446439750,
        label: "Gartenpflege",
        des: "Z. B. Rasenmähen, Hecken schneiden, Pflanzen, Unkraut jäten usw.",
      },
      {
        id: 7720464244,
        label: "Baumpflege",
        des: "Z. B. Fällen oder Beschneiden von Bäumen, Entfernen von Wurzelstöcken usw.",
      },
      {
        id: 2195573758,
        label: "Gartengestaltung",
        des: "Z.B. Umgestaltung des Gartens, Verlegen von Rollrasen, Terrassen, Gartenflächen, Zäunen etc.",
      },
      {
        id: 1047842044,
        label: "Andere",
        credit: 8,
      },
    ],
  },

  // Gaden care
  {
    id: 2446439750,
    type: "checkbox",
    label: "Handelt es sich um eine einmalige oder wiederkehrende Bestellung ?",
    options: [
      {
        id: 1049279012,
        label: "Einzigartig",
        credit: 15,
      },
      {
        id: 1050245854,
        label: "Wiederkehrend",
        credit: 25,
      },
    ],
  },
  {
    id: 1049279012,
    type: "checkbox",
    label: "Welche Arbeiten müssen erledigt werden ?",
    options: what_work_needs_done,
  },
  {
    id: 1050245854,
    type: "checkbox",
    label: "Welche Arbeiten müssen erledigt werden ?",
    options: what_work_needs_done,
  },
  // Gaden care

  // Tree care
  {
    id: 7720464244,
    type: "checkbox",
    label: "Welche Art der Baumpflege benötigen Sie ?",
    options: [
      {
        id: 7413834370,
        label: "Kürzen oder schneiden",
      },
      {
        id: 4649663332,
        label: "Fälle",
      },
      {
        id: 1055563698,
        label: "Wurzelstock entfernen",
        credit: 10,
      },
      {
        id: 1057316697,
        label: "Beratung / Einschätzung",
        credit: 5,
      },
      {
        id: 1059605046,
        label: "Sträucher oder andere Gartenarbeiten",
        credit: 15,
      },
      {
        id: 1060016865,
        label: "Andere",
        credit: 5,
      },
    ],
  },
  {
    id: 7413834370,
    type: "checkbox",
    label: "Wie viele Bäume gibt es ?",
    options: [
      {
        id: 2009996397,
        label: "1",
        credit: 5,
      },
      {
        id: 3775613421,
        label: "2",
        credit: 10,
      },
      {
        id: 3174100457,
        label: "3",
        credit: 15,
      },
      {
        id: 4356477230,
        label: "4 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 2009996397,
    type: "checkbox",
    label: "Wie groß ist der höchste Baum ?",
    options: how_big_the_tree_one,
  },
  {
    id: 3775613421,
    type: "checkbox",
    label: "Wie groß ist der höchste Baum ?",
    options: how_big_the_tree_one,
  },
  {
    id: 3174100457,
    type: "checkbox",
    label: "Wie groß ist der höchste Baum ?",
    options: how_big_the_tree_one,
  },
  {
    id: 4356477230,
    type: "checkbox",
    label: "Wie groß ist der höchste Baum ?",
    options: how_big_the_tree_one,
  },
  {
    id: 4649663332,
    type: "checkbox",
    label: "Wie viele Bäume gibt es ?",
    options: [
      {
        id: 1067612524,
        label: "1",
        credit: 5,
      },
      {
        id: 1071292174,
        label: "2",
        credit: 10,
      },
      {
        id: 1075114987,
        label: "3",
        credit: 15,
      },
      {
        id: 1076154642,
        label: "4 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 1067612524,
    type: "checkbox",
    label: "Wie groß ist der höchste Baum ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1071292174,
    type: "checkbox",
    label: "Wie groß ist der höchste Baum ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1075114987,
    type: "checkbox",
    label: "Wie groß ist der höchste Baum ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1076154642,
    type: "checkbox",
    label: "Wie groß ist der höchste Baum ?",
    options: how_big_the_tree_one,
  },

  // Tree care

  // Garden design
  {
    id: 2195573758,
    type: "checkbox",
    label: "Welche Art von Landschaftsbauarbeiten sind erforderlich ?",
    options: [
      {
        id: 1076260145,
        label: "Gras säen / Rasen neu anlegen",
      },
      {
        id: 4426550708,
        label: "Terrasse",
      },
      {
        id: 1076946635,
        label: "Zäune",
      },
      {
        id: 1078402200,
        label: "Gartensitzplatz",
      },
      {
        id: 1079410883,
        label: "Gartengestaltung",
      },
      {
        id: 1082529981,
        label: "Andere",
        credit: 5,
      },
    ],
  },
  {
    id: 1076260145,
    type: "checkbox",
    label: "Welche Art Rasen soll verlegt werden ?",
    options: [
      {
        id: 1082668570,
        label: "Naturrasen",
      },
      {
        id: 1084026783,
        label: "Kunstrasen",
      },
    ],
  },
  {
    id: 1082668570,
    type: "checkbox",
    label: "Wie groß ist der höchste Baum ?",
    options: [
      {
        label: "Klein",
        des: "Bis zu 3 m2",
        credit: 10,
      },
      {
        label: "Medium",
        des: "4 bis 7 m2",
        credit: 15,
      },
      {
        label: "Groß",
        des: "8 m oder mehr",
        credit: 20,
      },
    ],
  },
  {
    id: 1084026783,
    type: "checkbox",
    label: "Wie groß ist der höchste Baum ?",
    options: [
      {
        label: "Klein",
        des: "Bis zu 3 m2",
        credit: 10,
      },
      {
        label: "Medium",
        des: "4 bis 7 m2",
        credit: 15,
      },
      {
        label: "Groß",
        des: "8 m oder mehr",
        credit: 20,
      },
    ],
  },

  {
    id: 4426550708,
    type: "checkbox",
    label: "Welche Art von Terrassenarbeiten werden benötigt ?",
    options: [
      {
        id: 9616148751,
        label: "Bau einer neuen Terrasse",
      },
      {
        label: "Vorhandene Terrasse reparieren",
        credit: 5,
      },
    ],
  },
  {
    id: 9616148751,
    type: "checkbox",
    label: "Wie groß ist der höchste Baum ?",
    options: [
      {
        label: "Klein",
        des: "Up to 14 m²",
        credit: 10,
      },
      {
        label: "Medium",
        des: "15 to 29 m²",
        credit: 15,
      },
      {
        label: "Groß",
        des: "30 to 59 m²",
        credit: 20,
      },
      {
        label: "Very Groß",
        des: "60 m² or more",
        credit: 35,
      },
    ],
  },
  // fences
  {
    id: 1076946635,
    type: "checkbox",
    label: "Welche Art von Zaunarbeiten sind erforderlich ?",
    options: [
      {
        id: 1085611170,
        label: "Zaun installieren",
      },
      {
        id: 1087235190,
        label: "Nur Tor einbauen",
      },
      {
        id: 1087358787,
        label: "Zaun und Tor montieren",
      },
      {
        id: 1088253807,
        label: "reparieren",
        credit: 8,
      },
    ],
  },
  {
    id: 1085611170,
    type: "checkbox",
    label: "Wie viele Meter Zaun sind es ungefähr ?",
    options: [
      {
        label: "Bis zu 9 m2",
        credit: 10,
      },
      {
        label: "10 bis 24 m2",
        credit: 20,
      },
      {
        label: "25 bis 34 m2",
        credit: 25,
      },
      {
        label: "35 m2 oder mehr",
        credit: 35,
      },
    ],
  },
  {
    id: 1087235190,
    type: "checkbox",
    label: "Wie viele Tore müssen installiert werden ?",
    options: [
      {
        id: 1091891480,
        label: "1",
        credit: 10,
      },
      {
        id: 1091956731,
        label: "2",
        credit: 20,
      },
      {
        id: 1092426714,
        label: "3 oder mehr",
        credit: 30,
      },
    ],
  },
  {
    id: 1091891480,
    type: "checkbox",
    label: "Ist das Tor dort bereits zu montieren ?",
    options: is_gate_be_installed_already,
  },
  {
    id: 1091956731,
    type: "checkbox",
    label: "Ist das Tor dort bereits zu montieren ?",
    options: is_gate_be_installed_already,
  },
  {
    id: 1092426714,
    type: "checkbox",
    label: "Ist das Tor dort bereits zu montieren ?",
    options: is_gate_be_installed_already,
  },

  {
    id: 1087358787,
    type: "checkbox",
    label: "Wie viele Meter Zaun sind es ungefähr ?",
    options: [
      {
        label: "Bis zu 9 m2",
        credit: 15,
      },
      {
        label: "10 bis 24 m2",
        credit: 25,
      },
      {
        label: "25 bis 34 m2",
        credit: 30,
      },
      {
        label: "35 m2 oder mehr",
        credit: 35,
      },
    ],
  },
  // Garden design

  // gerden seating area
  {
    id: 1078402200,
    type: "checkbox",
    label: "Welche Arbeiten sind für den Gartensitzplatz nötig ?",
    options: [
      {
        id: 1093422821,
        label: "Einen neuen Sitzbereich im Garten schaffen",
      },
      {
        label: "Vorhandenen Gartensitzplatz umgestalten oder erweitern",
        credit: 40,
      },
      {
        label: "Vorhandenen Gartensitzplatz ausbessern",
        credit: 15,
      },
    ],
  },
  {
    id: 1093422821,
    type: "checkbox",
    label: "Wie groß ist der höchste Baum ?",
    options: [
      {
        label: "Klein",
        des: "Up to 14 m²",
        credit: 10,
      },
      {
        label: "Medium",
        des: "15 to 29 m²",
        credit: 15,
      },
      {
        label: "Groß",
        des: "30 to 59 m²",
        credit: 20,
      },
      {
        label: "Very Groß",
        des: "60 m² or more",
        credit: 35,
      },
    ],
  },
  // gerden seating area

  // garden design
  {
    id: 1079410883,
    type: "checkbox",
    label: "Wie groß ist die Fläche, für die der Garten angelegt werden soll ?",
    options: how_large_garden_designed,
  },

  // Andere
  input(1082529981),
  // Andere
];

export default gardener;
