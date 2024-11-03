import {
  does_a_building_permit_submitted,
  does_the_subsurface_need_prepared,
  How_big_is_total_approximately,
  is_the_kit_available,
  what_performance_do_you_exactly_need,
} from "../../reuse-data";

const carpentry = [
  {
    id: 6680802649,
    type: "checkbox",
    label: "Um welche Art von Gebäuden handelt es sich genau ?",
    options: [
      {
        id: 1031768564,
        label: "Dachgaube / Oberlicht",
        des: "Einbau von Dachgauben, Austausch von Oberlichtern, etc.",
      },
      {
        id: 6360802990,
        label: "Dach",
        des: "Dachbodenausbau, Dacherhöhung, Dachneubau, etc.",
      },
      {
        id: 1180152089,
        label: "Kleine Holzgebäude",
        des: "Gartenhaus, Carport, Pergola, Katzenleiter, Sichtschutz, uvm.",
      },
      {
        id: 4616963347,
        label: "Außenkonstruktion aus Holz",
        des: "Terrasse, Balkon, Fassaden etc.",
      },
      {
        id: 2503743486,
        label: "Innenausstattung",
        des: "Treppe, Wand, Decke, Boden, Galerie, etc.",
      },
      {
        id: 208335502,
        label: "Sonstige Tischlerarbeiten",
        credit: 15,
      },
    ],
  },
  {
    id: 1031768564,
    type: "checkbox",
    label: "Um welche Arbeiten handelt es sich genau ?",
    options: [
      {
        id: 5898004860,
        label: "Einbau einer Dachgaube",
      },
      {
        id: 742582913,
        label: "Dachfenster einbauen",
      },
      {
        id: 5259064596,
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
    id: 5898004860,
    type: "checkbox",
    label: "Wie viele Dachfenster gibt es ?",
    options: [
      {
        id: 541911377,
        label: "1",
        credit: 15,
      },
      {
        id: 649201012,
        label: "2 oder 3",
        credit: 35,
      },
      {
        id: 977988918,
        label: "4 oder mehr",
        credit: 55,
      },
    ],
  },
  {
    id: 541911377,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 649201012,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977988918,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
        credit: 15,
      },
      {
        id: 649201012,
        label: "2 oder 3",
        credit: 25,
      },
      {
        id: 977988918,
        label: "4 oder mehr",
        credit: 30,
      },
    ],
  },
  {
    id: 541911377,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 649201012,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977988918,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 5259064596,
    type: "checkbox",
    label: "Wie viele Dachfenster gibt es ?",
    options: [
      {
        id: 541911377,
        label: "1",
        credit: 15,
      },
      {
        id: 649201012,
        label: "2 oder 3",
        credit: 25,
      },
      {
        id: 977988918,
        label: "4 oder mehr",
        credit: 30,
      },
    ],
  },
  {
    id: 541911377,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 649201012,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977988918,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },

  {
    id: 6360802990,
    type: "checkbox",
    label: "Um welche Dacharbeiten handelt es sich genau ?",
    options: [
      {
        id: 796684085,
        label: "Dach ausbauen / erweitern",
        credit: 65,
      },
      {
        id: 1079614089,
        label: "Dach renovieren / reparieren",
      },
      {
        id: 9709296932,
        label: "Neue Dachkonstruktion",
      },
      {
        label: "Sonstige Tischlerarbeiten on the roof",
        credit: 10,
      },
    ],
  },
  {
    id: 796684085,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1079614089,
    type: "checkbox",
    label: "Wie groß ist die Dachkonstruktion ungefähr ?",
    options: [
      {
        id: 9614545787,
        label: "Wie groß ist die Dachkonstruktion ungefähr ?",
        credit: 25,
      },
      {
        id: 2192435980,
        label: "Mittel (Garage, Anbau etc.)",
        credit: 35,
      },
      {
        id: 7987805830,
        label: "Groß (Einfamilienhaus, Mehrfamilienhaus, etc.)",
        credit: 55,
      },
    ],
  },
  {
    id: 9709296932,
    type: "checkbox",
    label: "Wie groß ist die Dachkonstruktion ungefähr ?",
    options: [
      {
        id: 9614545787,
        label: "Wie groß ist die Dachkonstruktion ungefähr ?",
        credit: 25,
      },
      {
        id: 2192435980,
        label: "Mittel (Garage, Anbau etc.)",
        credit: 35,
      },
      {
        id: 7987805830,
        label: "Groß (Einfamilienhaus, Mehrfamilienhaus, etc.)",
        credit: 55,
      },
    ],
  },
  {
    id: 9614545787,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2192435980,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 7987805830,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 604630328,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 364610796,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // Klein wooden buildings
  {
    id: 1180152089,
    type: "checkbox",
    label: "Um welche Arbeiten handelt es sich genau ?",
    options: [
      {
        id: 603177691,
        label: "Gartenhaus / Geräteschuppen",
        credit: 25,
      },
      {
        id: 4892741016,
        label: "Carport",
        credit: 20,
      },
      {
        id: 342848033,
        label: "Pergola",
        credit: 15,
      },
      {
        id: 833036751,
        label: "Katzenleiter / Treppe / Baum",
        credit: 8,
      },
      {
        id: 257949134,
        label: "Datenschutz",
        credit: 10,
      },
      {
        id: 941276786,
        label: "Andere",
        credit: 7,
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  //   garden
  // Carport
  {
    id: 4892741016,
    type: "checkbox",
    label: "Welchen Carport benötigen Sie ?",
    options: [
      {
        id: 2448608839,
        label: "Einzelcarport",
      },
      {
        id: 4686068835,
        label: "Doppelcarport",
      },
      {
        id: 8798558908,
        label: "Sondergrößen",
      },
      {
        label: "Reparatur Carport",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 417809099,
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // Carport
  // Pergola
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // Pergola
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
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
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // privacy
  // Klein wooden buildings

  // exterior constructions
  {
    id: 4616963347,
    type: "checkbox",
    label: "Um welche Konstruktionen handelt es sich genau ?",
    options: [
      {
        id: 2289472628,
        label: "Terrasse",
      },
      {
        id: 8066012321,
        label: "Balkon",
      },
      {
        id: 9547934852,
        label: "Fassaden",
      },
      {
        id: 8524379704,
        label: "Andere",
        credit: 10,
      },
    ],
  },
  {
    id: 2289472628,
    type: "checkbox",
    label: "Welche Leistungen benötigen Sie genau ?",
    options: [
      {
        id: 7318445360,
        label: "Bau einer neuen Terrasse",
      },
      {
        id: 2991585766,
        label: "Terrasse renovieren / reparieren",
      },
      {
        id: 2925550101,
        label: "Andere",
        credit: 8,
      },
    ],
  },
  {
    id: 7318445360,
    type: "checkbox",
    label: "Wie groß ist die Fläche ungefähr ?",
    options: [
      {
        id: 8661355292,
        label: "Bis zu 14 m²",
        credit: 15,
      },
      {
        id: 2370932304,
        label: "15 bis 29 m²",
        credit: 25,
      },
      {
        id: 6181681493,
        label: "30 bis 59 m²",
        credit: 45,
      },
      {
        id: 5059907862,
        label: "60 oder mehr m²",
        credit: 65,
      },
      {
        id: 9192231361,
        label: "Ich weiß es nicht",
        credit: 10,
      },
    ],
  },
  {
    id: 8661355292,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2370932304,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6181681493,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 5059907862,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9192231361,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2991585766,
    type: "checkbox",
    label: "Wie groß ist die Fläche ungefähr ?",
    options: [
      {
        id: 442301439,
        label: "Bis zu 14 m²",
        credit: 15,
      },
      {
        id: 151202730,
        label: "15 bis 29 m²",
        credit: 25,
      },
      {
        id: 448695356,
        label: "30 bis 59 m²",
        credit: 45,
      },
      {
        id: 144160029,
        label: "60 oder mehr m²",
        credit: 65,
      },
      {
        id: 828034392,
        label: "Ich weiß es nicht",
        credit: 10,
      },
    ],
  },
  {
    id: 442301439,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 151202730,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 448695356,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 144160029,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 828034392,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 8066012321,
    type: "checkbox",
    label: "Welche Leistungen benötigen Sie genau ?",
    options: [
      {
        id: 219964030,
        label: "Build a new balcony",
        credit: 55,
      },
      {
        id: 636753250,
        label: "Extending / remodeling a balcony",
        credit: 45,
      },
      {
        id: 641566111,
        label: "Renovate / repair balcony",
        credit: 35,
      },
      {
        id: 520506940,
        label: "Andere",
        credit: 15,
      },
    ],
  },
  {
    id: 219964030,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 636753250,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 641566111,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9547934852,
    type: "checkbox",
    label: "Welche Leistungen benötigen Sie genau ?",
    options: [
      {
        id: 4511314722,
        label: "Neue Fassade(n) erstellen",
      },
      {
        id: 7368110882,
        label: "Fassade renovieren / reparieren",
      },
      {
        label: "Andere",
        credit: 10,
      },
    ],
  },
  {
    id: 4511314722,
    type: "checkbox",
    label: "Wie groß ist die gesamte Fassadenfläche ungefähr ?",
    options: [
      {
        id: 687457229,
        label: "Klein (Teilfläche einer Fassadenseite)",
        credit: 25,
      },
      {
        id: 836914140,
        label:
          "Mittelgroß (eine Seite eines Einfamilienhauses, kleiner Schuppen usw.)",
        credit: 35,
      },
      {
        id: 610040164,
        label: "Groß (Einfamilienhaus, Mehrfamilienhaus)",
        credit: 55,
      },
    ],
  },
  {
    id: 687457229,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 836914140,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 610040164,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 7368110882,
    type: "checkbox",
    label: "Wie groß ist die gesamte Fassadenfläche ungefähr ?",
    options: [
      {
        id: 687457229,
        label: "Klein (Teilfläche einer Fassadenseite)",
        credit: 25,
      },
      {
        id: 836914140,
        label:
          "Mittelgroß (eine Seite eines Einfamilienhauses, kleiner Schuppen usw.)",
        credit: 35,
      },
      {
        id: 610040164,
        label: "Groß (Einfamilienhaus, Mehrfamilienhaus)",
        credit: 55,
      },
    ],
  },
  {
    id: 687457229,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 836914140,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 610040164,
    type: "checkbox",
    label: "Muss ein Bauantrag gestellt werden ?",
    options: does_a_building_permit_submitted,
  },
  // exterior constructions
  //   interior
  {
    id: 2503743486,
    type: "checkbox",
    label: "Um welche Art von Gebäuden handelt es sich genau ?",
    options: [
      {
        id: 6216922902,
        label: "Treppe",
      },
      {
        id: 2330283960,
        label: "Wände",
      },
      {
        id: 4066801693,
        label: "Abdeckung",
      },
      {
        id: 2680859217,
        label: "Stockwerke",
      },
      {
        label: "Galleries",
        credit: 20,
      },
      {
        label: "Andere",
        credit: 15,
      },
    ],
  },
  {
    id: 6216922902,
    type: "checkbox",
    label: "Was genau benötigen Sie im Bereich Treppenbau ?",
    options: [
      {
        label:
          "Kleinere Reparaturen/Renovierungen (z.B. einige kaputte Stufen)",
        credit: 15,
      },
      {
        label:
          "Größere Reparaturen / Sanierungen (z.B. Sanierung einer kompletten Treppe)",
        credit: 35,
      },
      {
        label: "Treppe umbauen",
        credit: 55,
      },
      {
        label: "Andere",
        credit: 10,
      },
    ],
  },
  {
    id: 2330283960,
    type: "checkbox",
    label: "Was genau benötigen Sie im Bereich Wände ?",
    options: [
      {
        id: 7031613074,
        label: "Build Wände (partitions, etc.)",
      },
      {
        id: 7556458218,
        label:
          "Anbringen von Wandverkleidungen (Paneele, Wandvertäfelungen usw.)",
      },
      {
        id: 9985731780,
        label: "Andere wall constructions",
      },
    ],
  },
  {
    id: 7031613074,
    type: "checkbox",
    label: "Wie groß ist die gesamte Wandfläche ungefähr ?",
    options: [
      {
        label: "Bis zu 9 m²",
        credit: 15,
      },
      {
        label: "10 bis 19 m²",
        credit: 30,
      },
      {
        label: "20 bis 39 m²",
        credit: 45,
      },
      {
        label: "40 oder mehr m²",
        credit: 60,
      },
      {
        label: "Ich weiß es nicht",
        credit: 10,
      },
    ],
  },
  {
    id: 7556458218,
    type: "checkbox",
    label: "Wie groß ist die gesamte Wandfläche ungefähr ?",
    options: [
      {
        label: "Bis zu 9 m²",
        credit: 15,
      },
      {
        label: "10 bis 19 m²",
        credit: 30,
      },
      {
        label: "20 bis 39 m²",
        credit: 45,
      },
      {
        label: "40 oder mehr m²",
        credit: 60,
      },
      {
        label: "Ich weiß es nicht",
        credit: 10,
      },
    ],
  },
  {
    id: 9985731780,
    type: "checkbox",
    label: "Wie groß ist die gesamte Wandfläche ungefähr ?",
    options: How_big_is_total_approximately,
  },
  {
    id: 4066801693,
    type: "checkbox",
    label: "Wie groß ist die Gesamtgrundfläche ?",
    options: [
      {
        label: "Bis zu 14 m²",
        credit: 15,
      },
      {
        label: "15 bis 29 m²",
        credit: 30,
      },
      {
        label: "30 bis 59 m²",
        credit: 45,
      },
      {
        label: "60 oder mehr m²",
        credit: 60,
      },
      {
        label: "Ich weiß es nicht",
        credit: 10,
      },
    ],
  },
  {
    id: 2680859217,
    type: "checkbox",
    label: "Was genau benötigen Sie im Bereich Wände ?",
    options: [
      {
        id: 4209585610,
        label: "Neuen Boden verlegen",
      },
      {
        label: "Renovate / repair Stockwerke",
        credit: 45,
      },
      {
        label: "Andere",
        credit: 15,
      },
    ],
  },
  {
    id: 4209585610,
    type: "checkbox",
    label: "Wie groß ist die Deckenfläche insgesamt ?",
    options: [
      {
        label: "Klein",
        des: "Bis zu 14 m²",
        credit: 15,
      },
      {
        label: "Medium",
        des: "15 bis 29 m²",
        credit: 30,
      },
      {
        label: "Groß",
        des: "30 bis 59 m²",
        credit: 45,
      },
      {
        label: "Very Groß",
        des: "60 m² or more",
        credit: 60,
      },
    ],
  },
  {
    id: 920042018,
    type: "checkbox",
    label: "Wie groß ist die Deckenfläche insgesamt ?",
    options: How_big_is_total_approximately,
  },
  {
    id: 545722901,
    type: "checkbox",
    label: "Wie groß ist die Deckenfläche insgesamt ?",
    options: How_big_is_total_approximately,
  },
  //   interior
];

export default carpentry;
