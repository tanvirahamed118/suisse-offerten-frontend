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
    label: "De quel type de petits bâtiments parle-t-on exactement ?",
    options: [
      {
        id: 1239680310,
        label: "Maison de jardin / remise à outils",
      },
      {
        id: 1239818286,
        label: "Abri d'auto",
      },
      {
        id: 1240244862,
        label: "Pergola",
      },
      {
        id: 1240798049,
        label: "Sauna",
      },
      {
        id: 1241025604,
        label: "Autre",
      },
    ],
  },
  {
    id: 1239818286,
    type: "checkbox",
    label: "De quel type de carport avez-vous besoin ?",
    options: [
      {
        id: 1248456884,
        label: "Carport simple",
      },
      {
        id: 1249041972,
        label: "Carport double",
      },
      {
        id: 1249486441,
        label: "Tailles spéciales",
      },
      {
        id: 1240798049,
        label: "Réparation",
      },
      {
        id: 1241025604,
        label: "Autre",
      },
    ],
  },
  {
    id: 1239680310,
    type: "checkbox",
    label:
      "Le sous-sol doit-il être préparé (ex : fondation ou revêtement de sol) ?",
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
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1242991073,
      1243095351,
      1243659203
    ),
  },
  {
    id: 1242991073,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1244909610, 1245438376),
  },
  {
    id: 1244909610,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1245438376,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1243095351,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1243659203,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1245698824,
      1245790856,
      1245894481
    ),
  },
  {
    id: 1245698824,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1246070289, 1246163686),
  },
  {
    id: 1246070289,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1246163686,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1245790856,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1245894481,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1246790221,
      1247140031,
      1247291893
    ),
  },
  {
    id: 1246790221,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1247382456, 1247719927),
  },
  {
    id: 1247382456,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1247719927,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1247140031,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1247291893,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1240244862,
    type: "checkbox",
    label:
      "Le sous-sol doit-il être préparé (ex : fondation ou revêtement de sol) ?",
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
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1242991073,
      1243095351,
      1243659203
    ),
  },
  {
    id: 1242991073,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1244909610, 1245438376),
  },
  {
    id: 1244909610,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1245438376,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1243095351,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1243659203,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // no
  {
    id: 1242237866,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1245698824,
      1245790856,
      1245894481
    ),
  },
  {
    id: 1245698824,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1246070289, 1246163686),
  },
  {
    id: 1246070289,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1246163686,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1245790856,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1245894481,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  // dont know
  {
    id: 1242813447,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_you_exactly_need(
      1246790221,
      1247140031,
      1247291893
    ),
  },
  {
    id: 1246790221,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(1247382456, 1247719927),
  },
  {
    id: 1247382456,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1247719927,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1247140031,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1247291893,
    type: "checkbox",
    label:
      "Une demande de permis de construire doit-elle encore être déposée ?",
    options: does_a_building_permit_submitted,
  },
];

export default gardenHouse;
