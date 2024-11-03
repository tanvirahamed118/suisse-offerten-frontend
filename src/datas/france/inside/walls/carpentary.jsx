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
    label: "What kind of buildings are we talking about exactly ?",
    options: [
      {
        id: 748816712,
        label: "Roof dormer / skylight",
        des: "Installation of roof dormers, replacement of skylights, etc.",
      },
      {
        id: 362369651,
        label: "Roof",
        des: "Remove attic, raise roof, new roof construction, etc.",
      },
      {
        id: 931150072,
        label: "Small wooden buildings",
        des: "Garden house, carport, pergola, cat ladder, privacy screen, etc.",
      },
      {
        id: 522258271,
        label: "Exterior construction made of wood",
        des: "Terrace, balcony, facades, etc.",
      },
      {
        id: 159142445,
        label: "Interior fittings",
        des: "Stairs, wall, ceiling, floor, gallery, etc.",
      },
      {
        id: 208335502,
        label: "Other carpentry work",
        credit: 7,
      },
    ],
  },
  {
    id: 748816712,
    type: "checkbox",
    label: "What kind of work is involved exactly ?",
    options: [
      {
        id: 702022671,
        label: "Installing a roof dormer",
      },
      {
        id: 742582913,
        label: "Installing roof windows",
      },
      {
        id: 266524811,
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
    id: 702022671,
    type: "checkbox",
    label: "How many dormer windows are there ?",
    options: [
      {
        id: 541911377,
        label: "1",
        credit: 8,
      },
      {
        id: 649201012,
        label: "2 or 3",
        credit: 16,
      },
      {
        id: 977988918,
        label: "4 or more",
        credit: 25,
      },
    ],
  },
  {
    id: 541911377,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 649201012,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977988918,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
        credit: 8,
      },
      {
        id: 649201012,
        label: "2 or 3",
        credit: 16,
      },
      {
        id: 977988918,
        label: "4 or more",
        credit: 25,
      },
    ],
  },
  {
    id: 541911377,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 649201012,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977988918,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 266524811,
    type: "checkbox",
    label: "How many dormer windows are there ?",
    options: [
      {
        id: 541911377,
        label: "1",
        credit: 8,
      },
      {
        id: 649201012,
        label: "2 or 3",
        credit: 16,
      },
      {
        id: 977988918,
        label: "4 or more",
        credit: 25,
      },
    ],
  },
  {
    id: 541911377,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 649201012,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977988918,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },

  {
    id: 362369651,
    type: "checkbox",
    label: "What kind of roof work is involved exactly ?",
    options: [
      {
        id: 796684085,
        label: "Extending / extending the roof",
        credit: 35,
      },
      {
        id: 561166297,
        label: "Renovate / repair roof",
      },
      {
        id: 604630328,
        label: "New roof construction",
      },
      {
        id: 364610796,
        label: "Other carpentry work on the roof",
        credit: 10,
      },
    ],
  },
  {
    id: 796684085,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 561166297,
    type: "checkbox",
    label: "How large is the roof structure approximately ?",
    options: [
      {
        id: 2152616252,
        label: "Small (garden house, shed,etc)",
        credit: 10,
      },
      {
        id: 6813767946,
        label: "Medium (garage, cultivation, etc)",
        credit: 25,
      },
      {
        id: 9616246803,
        label: "Large (single-family house, multi-family house, etc)",
        credit: 45,
      },
    ],
  },
  {
    id: 2152616252,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6813767946,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9616246803,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 604630328,
    type: "checkbox",
    label: "How large is the roof structure approximately ?",
    options: [
      {
        id: 9995990584,
        label: "Small (garden house, shed,etc)",
        credit: 10,
      },
      {
        id: 6189498800,
        label: "Medium (garage, cultivation, etc)",
        credit: 25,
      },
      {
        id: 1638952848,
        label: "Large (single-family house, multi-family house, etc)",
        credit: 45,
      },
    ],
  },
  {
    id: 9995990584,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6189498800,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1638952848,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 364610796,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  // Small wooden buildings
  {
    id: 931150072,
    type: "checkbox",
    label: "What kind of work is involved exactly ?",
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
        label: "Other",
        credit: 6,
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  //   garden
  // carport
  {
    id: 417809099,
    type: "checkbox",
    label: "What kind of carport do you need ?",
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
        label: "Other",
        credit: 5,
      },
    ],
  },
  // Single Carport

  // Single Carport

  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  // privacy
  // Small wooden buildings

  // exterior constructions
  {
    id: 522258271,
    type: "checkbox",
    label: "What kind of constructions are we talking about exactly ?",
    options: [
      {
        id: 224902235,
        label: "Terrace",
      },
      {
        id: 412310308,
        label: "Balcony",
      },
      {
        id: 709028670,
        label: "Facades",
      },
      {
        id: 566637569,
        label: "Other",
        credit: 8,
      },
    ],
  },
  {
    id: 224902235,
    type: "checkbox",
    label: "What services do you exactly need ?",
    options: [
      {
        id: 911960820,
        label: "Building a new terrace",
      },
      {
        id: 367648003,
        label: "Renovate / repair terrace",
      },
      {
        id: 826979077,
        label: "Other",
      },
    ],
  },
  {
    id: 224902235,
    type: "checkbox",
    label: "How big is the area approximately ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 151202730,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 448695356,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 144160029,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 828034392,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 911960820,
    type: "checkbox",
    label: "How big is the area approximately ?",
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
    label: "How big is the area approximately ?",
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
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 151202730,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 448695356,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 144160029,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 828034392,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 412310308,
    type: "checkbox",
    label: "What services do you exactly need ?",
    options: [
      {
        id: 219964030,
        label: "Build a new balcony",
        credit: 25,
      },
      {
        id: 636753250,
        label: "Extending / remodeling a balcony",
        credit: 35,
      },
      {
        id: 641566111,
        label: "Renovate / repair balcony",
        credit: 15,
      },
      {
        id: 520506940,
        label: "Other",
        credit: 5,
      },
    ],
  },
  {
    id: 219964030,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 636753250,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 641566111,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 709028670,
    type: "checkbox",
    label: "What services do you exactly need ?",
    options: [
      {
        id: 973274814,
        label: "Create new facade(s)",
      },
      {
        id: 614410789,
        label: "Renovate / repair facade",
      },
      {
        id: 739794316,
        label: "Other",
        credit: 7,
      },
    ],
  },
  {
    id: 973274814,
    type: "checkbox",
    label: "How big is the total facade area approximately ?",
    options: [
      {
        id: 687457229,
        label: "Small (partial area of a facade side)",
        credit: 15,
      },
      {
        id: 836914140,
        label: "Medium (one side of a single-family home, small shed, etc.)",
        credit: 20,
      },
      {
        id: 610040164,
        label: "Large (single-family house, multi-family house)",
        credit: 45,
      },
    ],
  },
  {
    id: 687457229,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 836914140,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 610040164,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 614410789,
    type: "checkbox",
    label: "How big is the total facade area approximately ?",
    options: [
      {
        id: 687457229,
        label: "Small (partial area of a facade side)",
        credit: 15,
      },
      {
        id: 836914140,
        label: "Medium (one side of a single-family home, small shed, etc.)",
        credit: 20,
      },
      {
        id: 610040164,
        label: "Large (single-family house, multi-family house)",
        credit: 45,
      },
    ],
  },
  {
    id: 687457229,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 836914140,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 610040164,
    type: "checkbox",
    label: "Are the roof windows already there ?",
    options: does_a_building_permit_submitted,
  },
  // exterior constructions
  //   interior
  {
    id: 159142445,
    type: "checkbox",
    label: "What kind of buildings are we talking about exactly ?",
    options: [
      {
        id: 969866599,
        label: "Stairs",
      },
      {
        id: 569192146,
        label: "Walls",
      },
      {
        id: 373536920,
        label: "Cover",
      },
      {
        id: 393125386,
        label: "Floors",
      },
      {
        id: 762108002,
        label: "Galleries",
        credit: 7,
      },
      {
        id: 217183611,
        label: "Other",
        credit: 7,
      },
    ],
  },
  {
    id: 969866599,
    type: "checkbox",
    label: "What exactly do you need in the area of staircase construction ?",
    options: [
      {
        label: "Minor repairs / renovations (e.g. some broken steps)",
        credit: 8,
      },
      {
        label:
          "Major repairs / renovations (e.g. renovating a complete staircase)",
        credit: 18,
      },
      {
        label: "Rebuild stairs",
        credit: 30,
      },
      {
        label: "Other",
        credit: 7,
      },
    ],
  },
  {
    id: 569192146,
    type: "checkbox",
    label: "What exactly do you need in the area of walls ?",
    options: [
      {
        id: 488896397,
        label: "Build walls (partitions, etc.)",
      },
      {
        id: 889974984,
        label: "Install wall coverings (panels, wainscoting, etc.)",
      },
      {
        id: 802076801,
        label: "Other wall constructions",
      },
    ],
  },
  {
    id: 488896397,
    type: "checkbox",
    label: "How big is the total wall area approximately ?",
    options: How_big_is_total_approximately,
  },
  {
    id: 889974984,
    type: "checkbox",
    label: "How big is the total wall area approximately ?",
    options: How_big_is_total_approximately,
  },
  {
    id: 802076801,
    type: "checkbox",
    label: "How big is the total wall area approximately ?",
    options: How_big_is_total_approximately,
  },
  {
    id: 373536920,
    type: "checkbox",
    label: "How big is the total wall area approximately ?",
    options: [
      {
        label: "Up to 19 m²",
        credit: 10,
      },
      {
        label: "20 to 39 m²",
        credit: 20,
      },
      {
        label: "40 to 79 m²",
        credit: 30,
      },
      {
        label: "80 or more m²",
        credit: 50,
      },
      {
        label: "Don't know",
        credit: 8,
      },
    ],
  },
  {
    id: 393125386,
    type: "checkbox",
    label: "What exactly do you need in the area of walls ?",
    options: [
      {
        id: 241290965,
        label: "Laying new floor",
      },
      {
        label: "Renovate / repair floors",
        credit: 10,
      },
      {
        label: "Other",
        credit: 7,
      },
    ],
  },
  {
    id: 241290965,
    type: "checkbox",
    label: "How big is the total wall area approximately ?",
    options: [
      {
        label: "Up to 14 m²",
        credit: 10,
      },
      {
        label: "15 to 29 m²",
        credit: 20,
      },
      {
        label: "30 to 59 m²",
        credit: 30,
      },
      {
        label: "60 or more m²",
        credit: 50,
      },
      {
        label: "Don't know",
        credit: 8,
      },
    ],
  },
  {
    id: 920042018,
    type: "checkbox",
    label: "How big is the total wall area approximately ?",
    options: How_big_is_total_approximately,
  },
  {
    id: 545722901,
    type: "checkbox",
    label: "How big is the total wall area approximately ?",
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
