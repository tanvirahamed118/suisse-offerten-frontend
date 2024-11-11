import {
  what_work_needs_done,
  how_trees_are_here,
  how_big_the_tree_one,
  approximately_how_many_meters_fence,
  how_many_need_be_installed,
  is_gate_be_installed_already,
  how_large_garden_designed,
  how_big_the_tree_tow,
  input,
  How_large_is_to_be_covered,
} from "../../reuse-data";

const gardenerHorteulture = [
  {
    id: 1031399466,
    type: "checkbox",
    label: "Welche Leistungen sollen erbracht werden ?",
    options: [
      {
        id: 1042583057,
        label: "Gartenpflege",
        des: "Z. B. Rasenmähen, Hecken schneiden, Pflanzen, Unkraut jäten usw.",
      },
      {
        id: 1043135631,
        label: "Baumpflege",
        des: "Z. B. Fällen oder Beschneiden von Bäumen, Entfernen von Wurzelstöcken usw.",
      },
      {
        id: 1047134931,
        label: "Gartengestaltung",
        des: "Z.B. Umgestaltung des Gartens, Verlegen von Rollrasen, Terrassen, Gartenflächen, Zäunen etc.",
      },
      {
        id: 1047518475,
        label: "Zäune, Tore, Sichtschutz",
      },
      {
        id: 1047842044,
        label: "Andere",
      },
    ],
  },

  // Gaden care
  {
    id: 1042583057,
    type: "checkbox",
    label: "Handelt es sich um eine einmalige oder wiederkehrende Bestellung ?",
    options: [
      {
        id: 1049279012,
        label: "Einzigartig",
        credit: 3,
      },
      {
        id: 1050245854,
        label: "Wiederkehrend",
        credit: 6,
      },
    ],
  },
  {
    id: 1049279012,
    type: "multibox",
    label: "Welche Arbeiten müssen erledigt werden ?",
    options: what_work_needs_done,
  },
  {
    id: 1050245854,
    type: "multibox",
    label: "Welche Arbeiten müssen erledigt werden ?",
    options: what_work_needs_done,
  },

  // Gaden care

  // Tree care
  {
    id: 1043135631,
    type: "checkbox",
    label: "Welche Art der Baumpflege benötigen Sie ?",
    options: [
      {
        id: 1050588928,
        label: "Kürzen oder schneiden",
      },
      {
        id: 1051700644,
        label: "Fälle",
      },
      {
        id: 1055563698,
        label: "Wurzelstock entfernen",
        credit: 3,
      },
      {
        id: 1057316697,
        label: "Beratung / Einschätzung",
        credit: 3,
      },
      {
        id: 1059605046,
        label: "Sträucher oder andere Gartenarbeiten",
        credit: 6,
      },
      {
        id: 1060016865,
        label: "Andere",
        credit: 3,
      },
    ],
  },
  {
    id: 1050588928,
    type: "checkbox",
    label: "Wie viele Bäume gibt es ?",
    options: how_trees_are_here(1062502204, 1063769131, 1065965018, 1066140720),
  },
  {
    id: 1062502204,
    type: "checkbox",
    label: "Wie viele Bäume gibt es ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1063769131,
    type: "checkbox",
    label: "Wie groß ist der höchste Baum ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1065965018,
    type: "checkbox",
    label: "Wie groß ist der höchste Baum ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1066140720,
    type: "checkbox",

    label: "Wie groß ist der höchste Baum ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1051700644,
    type: "checkbox",
    label: "Wie viele Bäume gibt es ?",
    options: how_trees_are_here(1067612524, 1071292174, 1075114987, 1076154642),
  },
  {
    id: 1067612524,
    type: "checkbox",
    label: "Wie viele Bäume gibt es ?",
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
    id: 1047134931,
    type: "checkbox",
    label:
      "Welche Art von Garten- und Landschaftsbauarbeiten sind erforderlich ?",
    options: [
      {
        id: 1076260145,
        label: "Gras säen / Rasen neu anlegen",
      },
      {
        id: 1076459992,
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
        label: "Andere",
        credit: 15,
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
    label: "Wie groß ist die Rasenfläche ?",
    options: how_big_the_tree_one,
  },
  {
    id: 1084026783,
    type: "checkbox",
    label: "Wie groß ist die Rasenfläche ?",
    options: how_big_the_tree_one,
  },

  {
    id: 1076459992,
    type: "checkbox",
    label: "Welche Art von Terrassenarbeiten werden benötigt ?",
    options: [
      {
        id: 1085596934,
        label: "Bau einer neuen Terrasse",
      },
      {
        label: "Vorhandene Terrasse reparieren",
        credit: 8,
      },
    ],
  },
  {
    id: 1085596934,
    type: "checkbox",
    label: "Vorhandene Terrasse reparieren",
    options: How_large_is_to_be_covered,
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
        label: "Reparieren",
        credit: 7,
      },
    ],
  },
  {
    id: 1085611170,
    type: "checkbox",
    label: "Wie viele Tore müssen ungefähr installiert werden ?",
    options: approximately_how_many_meters_fence,
  },
  {
    id: 1087235190,
    type: "checkbox",
    label: "Wie viele Tore müssen installiert werden ?",
    options: how_many_need_be_installed(1091891480, 1091956731, 1092426714),
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
        id: 9250085189,
        label: "Bis zu 9 m²",
        credit: 8,
      },
      {
        id: 3813678767,
        label: "10 Busse 24 m²",
        credit: 13,
      },
      {
        id: 5996228486,
        label: "25 bis 34 m²",
        credit: 18,
      },
      {
        id: 2175594599,
        label: "35 m² oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 9250085189,
    type: "checkbox",
    label: "Wie viele Tore müssen installiert werden ?",
    options: [
      {
        label: "1",
        credit: 5,
      },
      {
        label: "2",
        credit: 10,
      },
      {
        label: "3 oder mehr",
        credit: 18,
      },
    ],
  },
  {
    id: 3813678767,
    type: "checkbox",
    label: "Wie viele Tore müssen installiert werden ?",
    options: [
      {
        label: "1",
        credit: 5,
      },
      {
        label: "2",
        credit: 10,
      },
      {
        label: "3 oder mehr",
        credit: 18,
      },
    ],
  },
  {
    id: 5996228486,
    type: "checkbox",
    label: "Wie viele Tore müssen installiert werden ?",
    options: [
      {
        label: "1",
        credit: 5,
      },
      {
        label: "2",
        credit: 10,
      },
      {
        label: "3 oder mehr",
        credit: 18,
      },
    ],
  },
  {
    id: 2175594599,
    type: "checkbox",
    label: "Wie viele Tore müssen installiert werden ?",
    options: [
      {
        label: "1",
        credit: 5,
      },
      {
        label: "2",
        credit: 10,
      },
      {
        label: "3 oder mehr",
        credit: 18,
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
        credit: 20,
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
    label: "Wie groß soll der Gartensitzplatz sein ?",
    options: how_big_the_tree_tow,
  },
  // gerden seating area

  // garden design
  {
    id: 1079410883,
    type: "checkbox",
    label: "Wie groß ist die Fläche, für die der Garten angelegt werden soll ?",
    options: how_large_garden_designed,
  },

  // other
  input(1082529981),
  // other
];

export default gardenerHorteulture;
