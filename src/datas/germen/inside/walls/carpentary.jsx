import {
  does_a_building_permit_submitted,
  does_the_subsurface_need_prepared,
  how_big_is_area_approximately,
  How_big_is_total_approximately,
  is_the_kit_available,
  what_performance_do_you_exactly_need,
} from "../../reuse-data";
import { doubleCarport } from "./double.carport";
import { singleCarport } from "./single-carport";
import { specialCarport } from "./special-carport";

const carpentry = [
  {
    id: 165713266,
    type: "checkbox",
    label: "Um welche Art von Gebäuden handelt es sich genau ?",
    options: [
      {
        id: 748816712,
        label: "Dachgaube / Oberlicht",
        des: "Einbau von Dachgauben, Austausch von Oberlichtern, etc.",
      },
      {
        id: 362369651,
        label: "Dach",
        des: "Dachbodenausbau, Dacherhöhung, Dachneubau, etc.",
      },
      {
        id: 931150072,
        label: "Kleine Holzgebäude",
        des: "Gartenhaus, Carport, Pergola, Katzenleiter, Sichtschutz, uvm.",
      },
      {
        id: 522258271,
        label: "Außenkonstruktion aus Holz",
        des: "Terrasse, Balkon, Fassaden etc.",
      },
      {
        id: 159142445,
        label: "Innenausstattung",
        des: "Treppe, Wand, Decke, Boden, Galerie, etc.",
      },
      {
        id: 208335502,
        label: "Sonstige Tischlerarbeiten",
        credit: 7,
      },
    ],
  },
  {
    id: 748816712,
    type: "checkbox",
    label: "Um welche Arbeiten handelt es sich genau ?",
    options: [
      {
        id: 702022671,
        label: "Einbau einer Dachgaube",
      },
      {
        id: 742582913,
        label: "Dachfenster einbauen",
      },
      {
        id: 266524811,
        label: "Renovierung / Reparatur von Dachfenstern",
      },
      {
        id: 776597214,
        label: "Andere",
        credit: 8,
      },
    ],
  },
  {
    id: 702022671,
    type: "checkbox",
    label: "Wie viele Dachgauben gibt es ?",
    options: [
      {
        id: 541911377,
        label: "1",
        credit: 8,
      },
      {
        id: 649201012,
        label: "2 oder 3",
        credit: 16,
      },
      {
        id: 977988918,
        label: "4 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 541911377,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 649201012,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977988918,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 742582913,
    type: "checkbox",
    label: "Wie viele Dachfenster gibt es ?",
    options: [
      {
        id: 541911377,
        label: "1",
        credit: 8,
      },
      {
        id: 649201012,
        label: "2 oder 3",
        credit: 16,
      },
      {
        id: 977988918,
        label: "4 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 541911377,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 649201012,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977988918,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 266524811,
    type: "checkbox",
    label: "Wie viele Dachgauben gibt es ?",
    options: [
      {
        id: 541911377,
        label: "1",
        credit: 8,
      },
      {
        id: 649201012,
        label: "2 oder 3",
        credit: 16,
      },
      {
        id: 977988918,
        label: "4 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 541911377,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 649201012,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977988918,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },

  {
    id: 362369651,
    type: "checkbox",
    label: "Um welche Dacharbeiten handelt es sich genau ?",
    options: [
      {
        id: 796684085,
        label: "Dach ausbauen / erweitern",
        credit: 35,
      },
      {
        id: 561166297,
        label: "Dach renovieren / reparieren",
      },
      {
        id: 604630328,
        label: "Neue Dachkonstruktion",
      },
      {
        id: 364610796,
        label: "Weitere Zimmererarbeiten am Dach",
        credit: 10,
      },
    ],
  },
  {
    id: 796684085,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 561166297,
    type: "checkbox",
    label: "Wie groß ist die Dachkonstruktion ungefähr ?",
    options: [
      {
        id: 2152616252,
        label: "Klein (Gartenhaus, Schuppen usw.)",
        credit: 10,
      },
      {
        id: 6813767946,
        label: "Medium (Garage, Anbau, etc.)",
        credit: 25,
      },
      {
        id: 9616246803,
        label: "Groß (Einfamilienhaus, Mehrfamilienhaus, etc.)",
        credit: 45,
      },
    ],
  },
  {
    id: 2152616252,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6813767946,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9616246803,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 604630328,
    type: "checkbox",
    label: "Wie groß ist die Dachkonstruktion ungefähr ?",
    options: [
      {
        id: 9995990584,
        label: "Klein (Gartenhaus, Schuppen usw.)",
        credit: 10,
      },
      {
        id: 6189498800,
        label: "Medium (Garage, Anbau, etc.)",
        credit: 25,
      },
      {
        id: 1638952848,
        label: "Groß (Einfamilienhaus, Mehrfamilienhaus, etc.)",
        credit: 45,
      },
    ],
  },
  {
    id: 9995990584,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6189498800,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1638952848,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 364610796,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  // Small wooden buildings
  {
    id: 931150072,
    type: "checkbox",
    label: "Um welche Arbeiten handelt es sich genau ?",
    options: [
      {
        id: 603177691,
        label: "Garden house / tool shed",
      },
      {
        id: 417809099,
        label: "Carport",
      },
      {
        id: 342848033,
        label: "Pergola",
        credit: 10,
      },
      {
        label: "Cat ladder / stairs / tree",
        credit: 6,
      },
      {
        label: "Privacy protection",
        credit: 8,
      },
      {
        id: 941276786,
        label: "Andere",
        credit: 6,
      },
    ],
  },

  //   garden
  {
    id: 603177691,
    type: "checkbox",
    label:
      "Muss der Untergrund vorbereitet werden (z.B. Fundament oder Bodenbelag) ?",
    options: does_the_subsurface_need_prepared(913072831, 423994696, 867359811),
  },
  {
    id: 913072831,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 423994696,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 867359811,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  //   garden
  // carport
  {
    id: 417809099,
    type: "checkbox",
    label: "What kind of carport do you need  ?",
    options: [
      {
        id: 2448608839,
        label: "Single carport",
        credit: 10,
      },
      {
        id: 4686068835,
        label: "Double carport",
        credit: 20,
      },
      {
        id: 8798558908,
        label: "Special sizes",
        credit: 15,
      },
      {
        label: "Repair carport",
        credit: 8,
      },
      {
        label: "Andere",
        credit: 5,
      },
    ],
  },
  // Single Carport

  // Single Carport

  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 423994696,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 867359811,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  // carport
  // pergola
  {
    id: 342848033,
    type: "checkbox",
    label:
      "Muss der Untergrund vorbereitet werden (z.B. Fundament oder Bodenbelag) ?",
    options: does_the_subsurface_need_prepared(913072831, 423994696, 867359811),
  },
  {
    id: 913072831,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 423994696,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 867359811,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  // pergola
  // catleader
  {
    id: 833036751,
    type: "checkbox",
    label:
      "Muss der Untergrund vorbereitet werden (z.B. Fundament oder Bodenbelag) ?",
    options: does_the_subsurface_need_prepared(913072831, 423994696, 867359811),
  },
  {
    id: 913072831,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 423994696,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 867359811,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  // catleader
  // privacy
  {
    id: 257949134,
    type: "checkbox",
    label:
      "Muss der Untergrund vorbereitet werden (z.B. Fundament oder Bodenbelag) ?",
    options: does_the_subsurface_need_prepared(913072831, 423994696, 867359811),
  },
  {
    id: 913072831,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 423994696,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 867359811,
    type: "checkbox",
    label: "Welche Leistung benötigst Du denn genau ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Ist das Kit schon verfügbar ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  // privacy
  // Small wooden buildings

  // exterior constructions
  {
    id: 522258271,
    type: "checkbox",
    label: "Um welche Konstruktionen handelt es sich genau ?",
    options: [
      {
        id: 224902235,
        label: "Terrasse",
      },
      {
        id: 412310308,
        label: "Balkon",
      },
      {
        id: 709028670,
        label: "Fassaden",
      },
      {
        id: 566637569,
        label: "Andere",
        credit: 8,
      },
    ],
  },
  {
    id: 224902235,
    type: "checkbox",
    label: "Welche Leistungen benötigen Sie genau ?",
    options: [
      {
        id: 911960820,
        label: "Bau einer neuen Terrasse",
      },
      {
        id: 367648003,
        label: "Terrasse renovieren / reparieren",
      },
      {
        id: 826979077,
        label: "Andere",
      },
    ],
  },
  {
    id: 224902235,
    type: "checkbox",
    label: "Wie groß ist die Fläche ungefähr ?",
    options: how_big_is_area_approximately(
      442301439,
      151202730,
      448695356,
      144160029,
      828034392
    ),
  },
  {
    id: 442301439,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 151202730,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 448695356,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 144160029,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 828034392,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 911960820,
    type: "checkbox",
    label: "Wie groß ist die Fläche ungefähr ?",
    options: how_big_is_area_approximately(
      442301439,
      151202730,
      448695356,
      144160029,
      828034392
    ),
  },
  {
    id: 367648003,
    type: "checkbox",
    label: "Wie groß ist die Fläche ungefähr ?",
    options: how_big_is_area_approximately(
      442301439,
      151202730,
      448695356,
      144160029,
      828034392
    ),
  },
  {
    id: 442301439,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 151202730,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 448695356,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 144160029,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 828034392,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 412310308,
    type: "checkbox",
    label: "Welche Leistungen benötigen Sie genau ?",
    options: [
      {
        id: 219964030,
        label: "Einen neuen Balkon bauen",
        credit: 25,
      },
      {
        id: 636753250,
        label: "Balkon erweitern / umgestalten",
        credit: 35,
      },
      {
        id: 641566111,
        label: "Balkon renovieren / reparieren",
        credit: 15,
      },
      {
        id: 520506940,
        label: "Andere",
        credit: 5,
      },
    ],
  },
  {
    id: 219964030,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 636753250,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 641566111,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 709028670,
    type: "checkbox",
    label: "Welche Leistungen benötigen Sie genau ?",
    options: [
      {
        id: 973274814,
        label: "Neue Fassade(n) erstellen",
      },
      {
        id: 614410789,
        label: "Fassade renovieren / reparieren",
      },
      {
        id: 739794316,
        label: "Andere",
        credit: 7,
      },
    ],
  },
  {
    id: 973274814,
    type: "checkbox",
    label: "Wie groß ist die gesamte Fassadenfläche ungefähr ?",
    options: [
      {
        id: 687457229,
        label: "Klein (Teilfläche einer Fassadenseite)",
        credit: 15,
      },
      {
        id: 836914140,
        label:
          "Mittelgroß (eine Seite eines Einfamilienhauses, kleiner Schuppen usw.)",
        credit: 20,
      },
      {
        id: 610040164,
        label: "Groß (Einfamilienhaus, Mehrfamilienhaus)",
        credit: 45,
      },
    ],
  },
  {
    id: 687457229,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 836914140,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 610040164,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 614410789,
    type: "checkbox",
    label: "Wie groß ist die gesamte Fassadenfläche ungefähr ?",
    options: [
      {
        id: 687457229,
        label: "Klein (Teilfläche einer Fassadenseite)",
        credit: 15,
      },
      {
        id: 836914140,
        label:
          "Mittelgroß (eine Seite eines Einfamilienhauses, kleiner Schuppen usw.)",
        credit: 20,
      },
      {
        id: 610040164,
        label: "Groß (Einfamilienhaus, Mehrfamilienhaus)",
        credit: 45,
      },
    ],
  },
  {
    id: 687457229,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 836914140,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 610040164,
    type: "checkbox",
    label: "Sind die Dachfenster schon vorhanden ?",
    options: does_a_building_permit_submitted,
  },
  // exterior constructions
  //   interior
  {
    id: 159142445,
    type: "checkbox",
    label: "Um welche Art von Gebäuden handelt es sich genau ?",
    options: [
      {
        id: 969866599,
        label: "Treppe",
      },
      {
        id: 569192146,
        label: "Wände",
      },
      {
        id: 373536920,
        label: "Abdeckung",
      },
      {
        id: 393125386,
        label: "Stockwerke",
      },
      {
        id: 762108002,
        label: "Galerien",
        credit: 7,
      },
      {
        id: 217183611,
        label: "Andere",
        credit: 7,
      },
    ],
  },
  {
    id: 969866599,
    type: "checkbox",
    label: "Was genau benötigen Sie im Bereich Treppenbau ?",
    options: [
      {
        label:
          "Kleinere Reparaturen/Renovierungen (z.B. einige kaputte Stufen)",
        credit: 8,
      },
      {
        label:
          "Größere Reparaturen / Sanierungen (z.B. Sanierung einer kompletten Treppe)",
        credit: 18,
      },
      {
        label: "Treppe neu bauen",
        credit: 30,
      },
      {
        label: "Andere",
        credit: 7,
      },
    ],
  },
  {
    id: 569192146,
    type: "checkbox",
    label: "Was genau benötigen Sie im Bereich Wände ?",
    options: [
      {
        id: 488896397,
        label: "Wände bauen (Trennwände usw.)",
      },
      {
        id: 889974984,
        label:
          "Anbringen von Wandverkleidungen (Paneele, Wandvertäfelungen usw.)",
      },
      {
        id: 802076801,
        label: "Andere wall constructions",
      },
    ],
  },
  {
    id: 488896397,
    type: "checkbox",
    label: "Wie groß ist die gesamte Wandfläche ungefähr ?",
    options: How_big_is_total_approximately,
  },
  {
    id: 889974984,
    type: "checkbox",
    label: "Wie groß ist die gesamte Wandfläche ungefähr ?",
    options: How_big_is_total_approximately,
  },
  {
    id: 802076801,
    type: "checkbox",
    label: "Wie groß ist die gesamte Wandfläche ungefähr ?",
    options: How_big_is_total_approximately,
  },
  {
    id: 373536920,
    type: "checkbox",
    label: "Wie groß ist die gesamte Wandfläche ungefähr ?",
    options: [
      {
        label: "Bis zu 19 m²",
        credit: 10,
      },
      {
        label: "20 bis 39 m²",
        credit: 20,
      },
      {
        label: "40 bis 79 m²",
        credit: 30,
      },
      {
        label: "80 oder mehr m²",
        credit: 50,
      },
      {
        label: "Weiß nicht",
        credit: 8,
      },
    ],
  },
  {
    id: 393125386,
    type: "checkbox",
    label: "Was genau benötigen Sie im Bereich Wände ?",
    options: [
      {
        id: 241290965,
        label: "Neuen Boden verlegen",
      },
      {
        label: "Böden renovieren / ausbessern",
        credit: 10,
      },
      {
        label: "Andere",
        credit: 7,
      },
    ],
  },
  {
    id: 241290965,
    type: "checkbox",
    label: "Wie groß ist die gesamte Wandfläche ungefähr ?",
    options: [
      {
        label: "Bis zu 14 m²",
        credit: 10,
      },
      {
        label: "15 bis 29 m²",
        credit: 20,
      },
      {
        label: "30 bis 59 m²",
        credit: 30,
      },
      {
        label: "60 oder mehr m²",
        credit: 50,
      },
      {
        label: "Weiß nicht",
        credit: 8,
      },
    ],
  },
  {
    id: 920042018,
    type: "checkbox",
    label: "Wie groß ist die gesamte Wandfläche ungefähr ?",
    options: How_big_is_total_approximately,
  },
  {
    id: 545722901,
    type: "checkbox",
    label: "Wie groß ist die gesamte Wandfläche ungefähr ?",
    options: How_big_is_total_approximately,
  },
  //   interior
];

const carpentaryAll = carpentry.concat(
  singleCarport,
  doubleCarport,
  specialCarport
);

export default carpentaryAll;
