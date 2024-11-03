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
    label: "What kind of buildings are we talking about exactly ?",
    options: [
      {
        id: 1031768564,
        label: "Roof dormer / skylight",
        des: "Installation of roof dormers, replacement of skylights, etc.",
      },
      {
        id: 6360802990,
        label: "Roof",
        des: "Remove attic, raise roof, new roof construction, etc.",
      },
      {
        id: 1180152089,
        label: "Small wooden buildings",
        des: "Garden house, carport, pergola, cat ladder, privacy screen, etc.",
      },
      {
        id: 4616963347,
        label: "Exterior construction made of wood",
        des: "Terrace, balcony, facades, etc.",
      },
      {
        id: 2503743486,
        label: "Interior fittings",
        des: "Stairs, wall, ceiling, floor, gallery, etc.",
      },
      {
        id: 208335502,
        label: "Other carpentry work",
        credit: 15,
      },
    ],
  },
  {
    id: 1031768564,
    type: "checkbox",
    label: "What kind of work is involved exactly ?",
    options: [
      {
        id: 5898004860,
        label: "Installing a roof dormer",
      },
      {
        id: 742582913,
        label: "Installing roof windows",
      },
      {
        id: 5259064596,
        label: "Renovation / repair of roof windows",
      },
      {
        id: 776597214,
        label: "Other",
        credit: 8,
      },
    ],
  },
  {
    id: 5898004860,
    type: "checkbox",
    label: "How many roof windows are there ?",
    options: [
      {
        id: 541911377,
        label: "1",
        credit: 15,
      },
      {
        id: 649201012,
        label: "2 or 3",
        credit: 35,
      },
      {
        id: 977988918,
        label: "4 or more",
        credit: 55,
      },
    ],
  },
  {
    id: 541911377,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 649201012,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977988918,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 742582913,
    type: "checkbox",
    label: "How many roof windows are there ?",
    options: [
      {
        id: 541911377,
        label: "1",
        credit: 15,
      },
      {
        id: 649201012,
        label: "2 or 3",
        credit: 25,
      },
      {
        id: 977988918,
        label: "4 or more",
        credit: 30,
      },
    ],
  },
  {
    id: 541911377,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 649201012,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977988918,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 5259064596,
    type: "checkbox",
    label: "How many roof windows are there ?",
    options: [
      {
        id: 541911377,
        label: "1",
        credit: 15,
      },
      {
        id: 649201012,
        label: "2 or 3",
        credit: 25,
      },
      {
        id: 977988918,
        label: "4 or more",
        credit: 30,
      },
    ],
  },
  {
    id: 541911377,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 649201012,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977988918,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },

  {
    id: 6360802990,
    type: "checkbox",
    label: "What kind of roof work is involved exactly ?",
    options: [
      {
        id: 796684085,
        label: "Extending / extending the roof",
        credit: 65,
      },
      {
        id: 1079614089,
        label: "Renovate / repair roof",
      },
      {
        id: 9709296932,
        label: "New roof construction",
      },
      {
        label: "Other carpentry work on the roof",
        credit: 10,
      },
    ],
  },
  {
    id: 796684085,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1079614089,
    type: "checkbox",
    label: "How big is the roof structure approximately ?",
    options: [
      {
        id: 9614545787,
        label: "Small (garden house, shed, etc.)",
        credit: 25,
      },
      {
        id: 2192435980,
        label: "means (garage, extension, etc.)",
        credit: 35,
      },
      {
        id: 7987805830,
        label: "Large (single-family house, multi-family house, etc.)",
        credit: 55,
      },
    ],
  },
  {
    id: 9709296932,
    type: "checkbox",
    label: "How big is the roof structure approximately ?",
    options: [
      {
        id: 9614545787,
        label: "Small (garden house, shed, etc.)",
        credit: 25,
      },
      {
        id: 2192435980,
        label: "means (garage, extension, etc.)",
        credit: 35,
      },
      {
        id: 7987805830,
        label: "Large (single-family house, multi-family house, etc.)",
        credit: 55,
      },
    ],
  },
  {
    id: 9614545787,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2192435980,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 7987805830,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 604630328,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 364610796,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  // Small wooden buildings
  {
    id: 1180152089,
    type: "checkbox",
    label: "What kind of work is involved exactly ?",
    options: [
      {
        id: 603177691,
        label: "Garden house / tool shed",
        credit: 25,
      },
      {
        id: 4892741016,
        label: "Carport",
        credit: 20,
      },
      {
        id: 342848033,
        label: "pergola",
        credit: 15,
      },
      {
        id: 833036751,
        label: "Cat ladder / stairs / tree",
        credit: 8,
      },
      {
        id: 257949134,
        label: "Privacy protection",
        credit: 10,
      },
      {
        id: 941276786,
        label: "Other",
        credit: 7,
      },
    ],
  },

  //   garden
  {
    id: 603177691,
    type: "checkbox",
    label:
      "Does the subsurface need to be prepared (e.g. foundation or floor covering) ?",
    options: does_the_subsurface_need_prepared(913072831, 423994696, 867359811),
  },
  {
    id: 913072831,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 423994696,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 867359811,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  //   garden
  // carport
  {
    id: 4892741016,
    type: "checkbox",
    label: "What kind of carport do you need ?",
    options: [
      {
        id: 2448608839,
        label: "Single Carport",
      },
      {
        id: 4686068835,
        label: "Double carport",
      },
      {
        id: 8798558908,
        label: "Special sizes",
      },
      {
        label: "Repair carport",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 417809099,
    type: "checkbox",
    label:
      "Does the subsurface need to be prepared (e.g. foundation or floor covering) ?",
    options: does_the_subsurface_need_prepared(913072831, 423994696, 867359811),
  },
  {
    id: 913072831,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 423994696,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 867359811,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  // carport
  // pergola
  {
    id: 342848033,
    type: "checkbox",
    label:
      "Does the subsurface need to be prepared (e.g. foundation or floor covering) ?",
    options: does_the_subsurface_need_prepared(913072831, 423994696, 867359811),
  },
  {
    id: 913072831,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 423994696,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 867359811,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  // pergola
  // catleader
  {
    id: 833036751,
    type: "checkbox",
    label:
      "Does the subsurface need to be prepared (e.g. foundation or floor covering) ?",
    options: does_the_subsurface_need_prepared(913072831, 423994696, 867359811),
  },
  {
    id: 913072831,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 423994696,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 867359811,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  // catleader
  // privacy
  {
    id: 257949134,
    type: "checkbox",
    label:
      "Does the subsurface need to be prepared (e.g. foundation or floor covering) ?",
    options: does_the_subsurface_need_prepared(913072831, 423994696, 867359811),
  },
  {
    id: 913072831,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 423994696,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 867359811,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  // privacy
  // Small wooden buildings

  // exterior constructions
  {
    id: 4616963347,
    type: "checkbox",
    label: "What kind of constructions are we talking about exactly ?",
    options: [
      {
        id: 2289472628,
        label: "terrace",
      },
      {
        id: 8066012321,
        label: "balcony",
      },
      {
        id: 9547934852,
        label: "Facades",
      },
      {
        id: 8524379704,
        label: "Other",
        credit: 10,
      },
    ],
  },
  {
    id: 2289472628,
    type: "checkbox",
    label: "What services do you exactly need ?",
    options: [
      {
        id: 7318445360,
        label: "Building a new terrace",
      },
      {
        id: 2991585766,
        label: "Renovate / repair terrace",
      },
      {
        id: 2925550101,
        label: "Other",
        credit: 8,
      },
    ],
  },
  {
    id: 7318445360,
    type: "checkbox",
    label: "How big is the area approximately ?",
    options: [
      {
        id: 8661355292,
        label: "Up to 14 m²",
        credit: 15,
      },
      {
        id: 2370932304,
        label: "15 to 29 m²",
        credit: 25,
      },
      {
        id: 6181681493,
        label: "30 to 59 m²",
        credit: 45,
      },
      {
        id: 5059907862,
        label: "60 or more m²",
        credit: 65,
      },
      {
        id: 9192231361,
        label: "I do not know",
        credit: 10,
      },
    ],
  },
  {
    id: 8661355292,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2370932304,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6181681493,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 5059907862,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9192231361,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2991585766,
    type: "checkbox",
    label: "How big is the area approximately ?",
    options: [
      {
        id: 442301439,
        label: "Up to 14 m²",
        credit: 15,
      },
      {
        id: 151202730,
        label: "15 to 29 m²",
        credit: 25,
      },
      {
        id: 448695356,
        label: "30 to 59 m²",
        credit: 45,
      },
      {
        id: 144160029,
        label: "60 or more m²",
        credit: 65,
      },
      {
        id: 828034392,
        label: "I do not know",
        credit: 10,
      },
    ],
  },
  {
    id: 442301439,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 151202730,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 448695356,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 144160029,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 828034392,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 8066012321,
    type: "checkbox",
    label: "What services do you exactly need ?",
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
        label: "Other",
        credit: 15,
      },
    ],
  },
  {
    id: 219964030,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 636753250,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 641566111,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9547934852,
    type: "checkbox",
    label: "What services do you exactly need ?",
    options: [
      {
        id: 4511314722,
        label: "Create new facade(s)",
      },
      {
        id: 7368110882,
        label: "Renovate / repair facade",
      },
      {
        label: "Other",
        credit: 10,
      },
    ],
  },
  {
    id: 4511314722,
    type: "checkbox",
    label: "How big is the total facade area approximately ?",
    options: [
      {
        id: 687457229,
        label: "Small (partial area of a facade side)",
        credit: 25,
      },
      {
        id: 836914140,
        label: "Medium (one side of a single-family home, small shed, etc.)",
        credit: 35,
      },
      {
        id: 610040164,
        label: "Large (single-family house, multi-family house)",
        credit: 55,
      },
    ],
  },
  {
    id: 687457229,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 836914140,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 610040164,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 7368110882,
    type: "checkbox",
    label: "How big is the total facade area approximately ?",
    options: [
      {
        id: 687457229,
        label: "Small (partial area of a facade side)",
        credit: 25,
      },
      {
        id: 836914140,
        label: "Medium (one side of a single-family home, small shed, etc.)",
        credit: 35,
      },
      {
        id: 610040164,
        label: "Large (single-family house, multi-family house)",
        credit: 55,
      },
    ],
  },
  {
    id: 687457229,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 836914140,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 610040164,
    type: "checkbox",
    label: "Does a building permit application have to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  // exterior constructions
  //   interior
  {
    id: 2503743486,
    type: "checkbox",
    label: "What kind of buildings are we talking about exactly ?",
    options: [
      {
        id: 6216922902,
        label: "Stairs",
      },
      {
        id: 2330283960,
        label: "Walls",
      },
      {
        id: 4066801693,
        label: "Cover",
      },
      {
        id: 2680859217,
        label: "Floors",
      },
      {
        label: "Galleries",
        credit: 20,
      },
      {
        label: "Other",
        credit: 15,
      },
    ],
  },
  {
    id: 6216922902,
    type: "checkbox",
    label: "What exactly do you need in the area of staircase construction ?",
    options: [
      {
        label: "Minor repairs / renovations (e.g. some broken steps)",
        credit: 15,
      },
      {
        label:
          "Major repairs / renovations (e.g. renovating a complete staircase)",
        credit: 35,
      },
      {
        label: "Rebuild stairs",
        credit: 55,
      },
      {
        label: "Other",
        credit: 10,
      },
    ],
  },
  {
    id: 2330283960,
    type: "checkbox",
    label: "What exactly do you need in the area of walls ?",
    options: [
      {
        id: 7031613074,
        label: "Build walls (partitions, etc.)",
      },
      {
        id: 7556458218,
        label: "Install wall coverings (panels, wainscoting, etc.)",
      },
      {
        id: 9985731780,
        label: "Other wall constructions",
      },
    ],
  },
  {
    id: 7031613074,
    type: "checkbox",
    label: "How big is the total wall area approximately ?",
    options: [
      {
        label: "Up to 9 m²",
        credit: 15,
      },
      {
        label: "10 to 19 m²",
        credit: 30,
      },
      {
        label: "20 to 39 m²",
        credit: 45,
      },
      {
        label: "40 or more m²",
        credit: 60,
      },
      {
        label: "I do not know",
        credit: 10,
      },
    ],
  },
  {
    id: 7556458218,
    type: "checkbox",
    label: "How big is the total wall area approximately ?",
    options: [
      {
        label: "Up to 9 m²",
        credit: 15,
      },
      {
        label: "10 to 19 m²",
        credit: 30,
      },
      {
        label: "20 to 39 m²",
        credit: 45,
      },
      {
        label: "40 or more m²",
        credit: 60,
      },
      {
        label: "I do not know",
        credit: 10,
      },
    ],
  },
  {
    id: 9985731780,
    type: "checkbox",
    label: "How big is the total wall area approximately ?",
    options: How_big_is_total_approximately,
  },
  {
    id: 4066801693,
    type: "checkbox",
    label: "How large is the total floor area ?",
    options: [
      {
        label: "Up to 14 m²",
        credit: 15,
      },
      {
        label: "15 to 29 m²",
        credit: 30,
      },
      {
        label: "30 to 59 m²",
        credit: 45,
      },
      {
        label: "60 or more m²",
        credit: 60,
      },
      {
        label: "I do not know",
        credit: 10,
      },
    ],
  },
  {
    id: 2680859217,
    type: "checkbox",
    label: "What exactly do you need in the area of walls ?",
    options: [
      {
        id: 4209585610,
        label: "Laying new floor",
      },
      {
        label: "Renovate / repair floors",
        credit: 45,
      },
      {
        label: "Other",
        credit: 15,
      },
    ],
  },
  {
    id: 4209585610,
    type: "checkbox",
    label: "How big is the celling area in total ?",
    options: [
      {
        label: "Small",
        des: "Up to 14 m²",
        credit: 15,
      },
      {
        label: "Medium",
        des: "15 to 29 m²",
        credit: 30,
      },
      {
        label: "Large",
        des: "30 to 59 m²",
        credit: 45,
      },
      {
        label: "Very large",
        des: "60 m² or more",
        credit: 60,
      },
    ],
  },
  {
    id: 920042018,
    type: "checkbox",
    label: "How big is the celling area in total ?",
    options: How_big_is_total_approximately,
  },
  {
    id: 545722901,
    type: "checkbox",
    label: "How big is the celling area in total ?",
    options: How_big_is_total_approximately,
  },
  //   interior
];

export default carpentry;
