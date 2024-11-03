import {
  does_the_subsurface_need_prepared,
  what_performance_you_exactly_need,
  is_the_kit_available,
  does_a_building_permit_submitted,
} from "../../reuse-data";

const gardenHouse = [
  {
    id: 1040398747,
    type: "checkbox",
    label: "What kind of small buildings are we talking about exactly ?",
    options: [
      {
        id: 1239680310,
        label: "Garden house / tool shed",
      },
      {
        id: 1239818286,
        label: "Carport",
      },
      {
        id: 1240244862,
        label: "pergola",
      },
      {
        id: 1240798049,
        label: "sauna",
      },
      {
        id: 1241025604,
        label: "other",
      },
    ],
  },
  {
    id: 1239818286,
    type: "checkbox",
    label: "What kind of carport do you need ?",
    options: [
      {
        id: 1248456884,
        label: "Single carport",
      },
      {
        id: 1249041972,
        label: "Double carport",
      },
      {
        id: 1249486441,
        label: "Special sizes",
      },
      {
        id: 1240798049,
        label: "repair",
      },
      {
        id: 1241025604,
        label: "other",
      },
    ],
  },
  {
    id: 1239680310,
    type: "checkbox",
    label:
      "Does the subsurface need to be prepared (e.g. foundation or floor covering) ?",
    options: does_the_subsurface_need_prepared(
      1241090983,
      1242237866,
      1242813447
    ),
  },
  // yes
  {
    id: 1241090983,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_you_exactly_need(
      1242991073,
      1243095351,
      1243659203
    ),
  },
  {
    id: 1242991073,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(1244909610, 1245438376),
  },
  {
    id: 1244909610,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1245438376,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1243095351,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1243659203,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_you_exactly_need(
      1245698824,
      1245790856,
      1245894481
    ),
  },
  {
    id: 1245698824,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(1246070289, 1246163686),
  },
  {
    id: 1246070289,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1246163686,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1245790856,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1245894481,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_you_exactly_need(
      1246790221,
      1247140031,
      1247291893
    ),
  },
  {
    id: 1246790221,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(1247382456, 1247719927),
  },
  {
    id: 1247382456,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1247719927,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1247140031,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1247291893,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1240244862,
    type: "checkbox",
    label:
      "Does the subsurface need to be prepared (e.g. foundation or floor covering) ?",
    options: does_the_subsurface_need_prepared(
      1241090983,
      1242237866,
      1242813447
    ),
  },
  // yes
  {
    id: 1241090983,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_you_exactly_need(
      1242991073,
      1243095351,
      1243659203
    ),
  },
  {
    id: 1242991073,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(1244909610, 1245438376),
  },
  {
    id: 1244909610,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1245438376,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1243095351,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1243659203,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_you_exactly_need(
      1245698824,
      1245790856,
      1245894481
    ),
  },
  {
    id: 1245698824,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(1246070289, 1246163686),
  },
  {
    id: 1246070289,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1246163686,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1245790856,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1245894481,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "What performance do you exactly need ?",
    options: what_performance_you_exactly_need(
      1246790221,
      1247140031,
      1247291893
    ),
  },
  {
    id: 1246790221,
    type: "checkbox",
    label: "Is the kit already available ?",
    options: is_the_kit_available(1247382456, 1247719927),
  },
  {
    id: 1247382456,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1247719927,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1247140031,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1247291893,
    type: "checkbox",
    label: "Does a building permit application still need to be submitted ?",
    options: does_a_building_permit_submitted,
  },
];

export default gardenHouse;
