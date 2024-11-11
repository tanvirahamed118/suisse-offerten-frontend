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
    label: "De quel type de bâtiments parle-t-on exactement ?",
    options: [
      {
        id: 748816712,
        label: "Lucarne de toit / puits de lumière",
        des: "Pose de lucarnes, remplacement de puits de lumière, etc.",
      },
      {
        id: 362369651,
        label: "Toiture",
        des: "Enlever le grenier, surélever le toit, construire un nouveau toit, etc.",
      },
      {
        id: 931150072,
        label: "Petits bâtiments en bois",
        des: "Abri de jardin, abri d'auto, pergola, échelle pour chat, brise-vue, etc.",
      },
      {
        id: 522258271,
        label: "Construction extérieure en bois",
        des: "Terrasse, balcon, façades, etc.",
      },
      {
        id: 159142445,
        label: "Aménagements intérieurs",
        des: "Escaliers, mur, plafond, sol, galerie, etc.",
      },
      {
        id: 208335502,
        label: "Autres travaux de menuiserie",
        credit: 7,
      },
    ],
  },
  {
    id: 748816712,
    type: "checkbox",
    label: "De quel type de travail s'agit-il exactement ?",
    options: [
      {
        id: 702022671,
        label: "Installation d'une lucarne de toit",
      },
      {
        id: 742582913,
        label: "Installation de fenêtres de toit",
      },
      {
        id: 266524811,
        label: "Rénovation/réparation de fenêtres de toit",
      },
      {
        id: 776597214,
        label: "Autre",
        credit: 8,
      },
    ],
  },
  {
    id: 702022671,
    type: "checkbox",
    label: "Combien y a-t-il de lucarnes ?",
    options: [
      {
        id: 541911377,
        label: "1",
        credit: 8,
      },
      {
        id: 649201012,
        label: "2 ou 3",
        credit: 16,
      },
      {
        id: 977988918,
        label: "4 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 541911377,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 649201012,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977988918,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 742582913,
    type: "checkbox",
    label: "Combien y a-t-il de fenêtres de toit ?",
    options: [
      {
        id: 541911377,
        label: "1",
        credit: 8,
      },
      {
        id: 649201012,
        label: "2 ou 3",
        credit: 16,
      },
      {
        id: 977988918,
        label: "4 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 541911377,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 649201012,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977988918,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 266524811,
    type: "checkbox",
    label: "Combien y a-t-il de lucarnes ?",
    options: [
      {
        id: 541911377,
        label: "1",
        credit: 8,
      },
      {
        id: 649201012,
        label: "2 ou 3",
        credit: 16,
      },
      {
        id: 977988918,
        label: "4 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 541911377,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 649201012,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977988918,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },

  {
    id: 362369651,
    type: "checkbox",
    label: "De quels types de travaux de toiture s'agit-il exactement ?",
    options: [
      {
        id: 796684085,
        label: "Extension / agrandissement du toit",
        credit: 35,
      },
      {
        id: 561166297,
        label: "Rénover / réparer la toiture",
      },
      {
        id: 604630328,
        label: "Construction d'un nouveau toit",
      },
      {
        id: 364610796,
        label: "Autres travaux de menuiserie on the roof",
        credit: 10,
      },
    ],
  },
  {
    id: 796684085,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 561166297,
    type: "checkbox",
    label: "Quelle est la taille approximative de la structure du toit ?",
    options: [
      {
        id: 2152616252,
        label: "Petit (maison de jardin, cabanon, etc.)",
        credit: 10,
      },
      {
        id: 6813767946,
        label: "Moyen (garage, culture, etc)",
        credit: 25,
      },
      {
        id: 9616246803,
        label: "Grande (maison individuelle, maison multifamiliale, etc.)",
        credit: 45,
      },
    ],
  },
  {
    id: 2152616252,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6813767946,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9616246803,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 604630328,
    type: "checkbox",
    label: "Quelle est la taille approximative de la structure du toit ?",
    options: [
      {
        id: 9995990584,
        label: "Petit (maison de jardin, cabanon, etc.)",
        credit: 10,
      },
      {
        id: 6189498800,
        label: "Moyen (garage, culture, etc)",
        credit: 25,
      },
      {
        id: 1638952848,
        label: "Grande (maison individuelle, maison multifamiliale, etc.)",
        credit: 45,
      },
    ],
  },
  {
    id: 9995990584,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6189498800,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1638952848,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 364610796,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  // Small wooden buildings
  {
    id: 931150072,
    type: "checkbox",
    label: "De quel type de travail s'agit-il exactement ?",
    options: [
      {
        id: 603177691,
        label: "Maison de jardin / remise à outils",
      },
      {
        id: 417809099,
        label: "Abri d'auto",
      },
      {
        id: 342848033,
        label: "Pergola",
        credit: 10,
      },
      {
        label: "Échelle / escalier / arbre pour chat",
        credit: 6,
      },
      {
        label: "Protection de la vie privée",
        credit: 8,
      },
      {
        id: 941276786,
        label: "Autre",
        credit: 6,
      },
    ],
  },

  //   garden
  {
    id: 603177691,
    type: "checkbox",
    label:
      "Le sous-sol doit-il être préparé (ex : fondation ou revêtement de sol) ?",
    options: does_the_subsurface_need_prepared(913072831, 423994696, 867359811),
  },
  {
    id: 913072831,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 423994696,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 867359811,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  //   garden
  // carport
  {
    id: 417809099,
    type: "checkbox",
    label: "De quel type de carport avez-vous besoin ?",
    options: [
      {
        id: 2448608839,
        label: "Carport simple",
        credit: 10,
      },
      {
        id: 4686068835,
        label: "Carport double",
        credit: 20,
      },
      {
        id: 8798558908,
        label: "Dimensions spéciales",
        credit: 15,
      },
      {
        label: "Réparation d'abri d'auto",
        credit: 8,
      },
      {
        label: "Autre",
        credit: 5,
      },
    ],
  },
  // Single Carport

  // Single Carport

  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 423994696,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 867359811,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  // carport
  // pergola
  {
    id: 342848033,
    type: "checkbox",
    label:
      "Le sous-sol doit-il être préparé (ex : fondation ou revêtement de sol) ?",
    options: does_the_subsurface_need_prepared(913072831, 423994696, 867359811),
  },
  {
    id: 913072831,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 423994696,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 867359811,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  // pergola
  // catleader
  {
    id: 833036751,
    type: "checkbox",
    label:
      "Le sous-sol doit-il être préparé (ex : fondation ou revêtement de sol) ?",
    options: does_the_subsurface_need_prepared(913072831, 423994696, 867359811),
  },
  {
    id: 913072831,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 423994696,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 867359811,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  // catleader
  // privacy
  {
    id: 257949134,
    type: "checkbox",
    label:
      "Le sous-sol doit-il être préparé (ex : fondation ou revêtement de sol) ?",
    options: does_the_subsurface_need_prepared(913072831, 423994696, 867359811),
  },
  {
    id: 913072831,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 423994696,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 867359811,
    type: "checkbox",
    label: "De quelles performances avez-vous exactement besoin ?",
    options: what_performance_do_you_exactly_need(
      532486877,
      693506383,
      395414013
    ),
  },
  {
    id: 532486877,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 693506383,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 395414013,
    type: "checkbox",
    label: "Le kit est-il déjà disponible ?",
    options: is_the_kit_available(198918874, 294007912),
  },
  {
    id: 198918874,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
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
        label: "Autre",
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
        label: "Autre",
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
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 151202730,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 448695356,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 144160029,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 828034392,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
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
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 151202730,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 448695356,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 144160029,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 828034392,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
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
        label: "Autre",
        credit: 5,
      },
    ],
  },
  {
    id: 219964030,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 636753250,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 641566111,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
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
        label: "Autre",
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
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 836914140,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 610040164,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
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
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 836914140,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 610040164,
    type: "checkbox",
    label: "Les fenêtres de toit sont-elles déjà là ?",
    options: does_a_building_permit_submitted,
  },
  // exterior constructions
  //   interior
  {
    id: 159142445,
    type: "checkbox",
    label: "De quel type de bâtiments parle-t-on exactement ?",
    options: [
      {
        id: 969866599,
        label: "Escaliers",
      },
      {
        id: 569192146,
        label: "Murs",
      },
      {
        id: 373536920,
        label: "Couverture",
      },
      {
        id: 393125386,
        label: "Planchers",
      },
      {
        id: 762108002,
        label: "Galeries",
        credit: 7,
      },
      {
        id: 217183611,
        label: "Autre",
        credit: 7,
      },
    ],
  },
  {
    id: 969866599,
    type: "checkbox",
    label:
      "De quoi avez-vous exactement besoin dans le domaine de la construction d'escaliers ?",
    options: [
      {
        label:
          "Réparations/rénovations mineures (par exemple quelques marches cassées)",
        credit: 8,
      },
      {
        label:
          "Réparations/rénovations majeures (ex. : rénover un escalier complet)",
        credit: 18,
      },
      {
        label: "Reconstruire les escaliers",
        credit: 30,
      },
      {
        label: "Autre",
        credit: 7,
      },
    ],
  },
  {
    id: 569192146,
    type: "checkbox",
    label: "De quoi avez-vous exactement besoin au niveau des murs ?",
    options: [
      {
        id: 488896397,
        label: "Construire des murs (cloisons, etc.)",
      },
      {
        id: 889974984,
        label: "Pose de revêtements muraux (panneaux, lambris, etc.)",
      },
      {
        id: 802076801,
        label: "Autre wall constructions",
      },
    ],
  },
  {
    id: 488896397,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface totale du mur ?",
    options: How_big_is_total_approximately,
  },
  {
    id: 889974984,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface totale du mur ?",
    options: How_big_is_total_approximately,
  },
  {
    id: 802076801,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface totale du mur ?",
    options: How_big_is_total_approximately,
  },
  {
    id: 373536920,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface totale du mur ?",
    options: [
      {
        label: "Jusqu'à 19 m²",
        credit: 10,
      },
      {
        label: "20 à 39 m²",
        credit: 20,
      },
      {
        label: "40 à 79 m²",
        credit: 30,
      },
      {
        label: "80 m² ou plus",
        credit: 50,
      },
      {
        label: "Je ne sais pas",
        credit: 8,
      },
    ],
  },
  {
    id: 393125386,
    type: "checkbox",
    label: "De quoi avez-vous exactement besoin au niveau des murs ?",
    options: [
      {
        id: 241290965,
        label: "Pose d'un nouveau plancher",
      },
      {
        label: "Rénover / réparer les sols",
        credit: 10,
      },
      {
        label: "Autre",
        credit: 7,
      },
    ],
  },
  {
    id: 241290965,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface totale du mur ?",
    options: [
      {
        label: "Jusqu'à 14 m²",
        credit: 10,
      },
      {
        label: "15 à 29 m²",
        credit: 20,
      },
      {
        label: "30 à 59 m²",
        credit: 30,
      },
      {
        label: "60 m² ou plus",
        credit: 50,
      },
      {
        label: "Je ne sais pas",
        credit: 8,
      },
    ],
  },
  {
    id: 920042018,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface totale du mur ?",
    options: How_big_is_total_approximately,
  },
  {
    id: 545722901,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface totale du mur ?",
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
