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
    label: "De quel type de bâtiments parle-t-on exactement ?",
    options: [
      {
        id: 1031768564,
        label: "Lucarne de toit / puits de lumière",
        des: "Pose de lucarnes, remplacement de puits de lumière, etc.",
      },
      {
        id: 6360802990,
        label: "Toiture",
        des: "Enlever le grenier, surélever le toit, construire un nouveau toit, etc.",
      },
      {
        id: 1180152089,
        label: "Petits bâtiments en bois",
        des: "Abri de jardin, abri d'auto, pergola, échelle pour chat, brise-vue, etc.",
      },
      {
        id: 4616963347,
        label: "Construction extérieure en bois",
        des: "Terrasse, balcon, façades, etc.",
      },
      {
        id: 2503743486,
        label: "Interior fittings",
        des: "Escaliers, mur, plafond, sol, galerie, etc.",
      },
      {
        id: 208335502,
        label: "Autres travaux de menuiserie",
        credit: 15,
      },
    ],
  },
  {
    id: 1031768564,
    type: "checkbox",
    label: "De quel type de travail s'agit-il exactement ?",
    options: [
      {
        id: 5898004860,
        label: "Installation d'une lucarne de toit",
      },
      {
        id: 742582913,
        label: "Installation de fenêtres de toit",
      },
      {
        id: 5259064596,
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
    id: 5898004860,
    type: "checkbox",
    label: "Combien y a-t-il de fenêtres de toit ?",
    options: [
      {
        id: 541911377,
        label: "1",
        credit: 15,
      },
      {
        id: 649201012,
        label: "2 ou 3",
        credit: 35,
      },
      {
        id: 977988918,
        label: "4 ou plus",
        credit: 55,
      },
    ],
  },
  {
    id: 541911377,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 649201012,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977988918,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
        credit: 15,
      },
      {
        id: 649201012,
        label: "2 ou 3",
        credit: 25,
      },
      {
        id: 977988918,
        label: "4 ou plus",
        credit: 30,
      },
    ],
  },
  {
    id: 541911377,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 649201012,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977988918,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 5259064596,
    type: "checkbox",
    label: "Combien y a-t-il de fenêtres de toit ?",
    options: [
      {
        id: 541911377,
        label: "1",
        credit: 15,
      },
      {
        id: 649201012,
        label: "2 ou 3",
        credit: 25,
      },
      {
        id: 977988918,
        label: "4 ou plus",
        credit: 30,
      },
    ],
  },
  {
    id: 541911377,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 649201012,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 977988918,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },

  {
    id: 6360802990,
    type: "checkbox",
    label: "De quels types de travaux de toiture s'agit-il exactement ?",
    options: [
      {
        id: 796684085,
        label: "Extension / agrandissement du toit",
        credit: 65,
      },
      {
        id: 1079614089,
        label: "Rénover/réparer la toiture",
      },
      {
        id: 9709296932,
        label: "Construction d'un nouveau toit",
      },
      {
        label: "Autres travaux de menuiserie on the roof",
        credit: 10,
      },
    ],
  },
  {
    id: 796684085,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 1079614089,
    type: "checkbox",
    label: "Quelle est la taille approximative de la structure du toit ?",
    options: [
      {
        id: 9614545787,
        label: "Petit (maison de jardin, cabanon, etc.)",
        credit: 25,
      },
      {
        id: 2192435980,
        label: "Moyens (garage, extension, etc.)",
        credit: 35,
      },
      {
        id: 7987805830,
        label: "Grande (maison unifamiliale, maison multifamiliale, etc.)",
        credit: 55,
      },
    ],
  },
  {
    id: 9709296932,
    type: "checkbox",
    label: "Quelle est la taille approximative de la structure du toit ?",
    options: [
      {
        id: 9614545787,
        label: "Petit (maison de jardin, cabanon, etc.)",
        credit: 25,
      },
      {
        id: 2192435980,
        label: "Moyens (garage, extension, etc.)",
        credit: 35,
      },
      {
        id: 7987805830,
        label: "Grande (maison unifamiliale, maison multifamiliale, etc.)",
        credit: 55,
      },
    ],
  },
  {
    id: 9614545787,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2192435980,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 7987805830,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 604630328,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 364610796,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  // Petite wooden buildings
  {
    id: 1180152089,
    type: "checkbox",
    label: "De quel type de travail s'agit-il exactement ?",
    options: [
      {
        id: 603177691,
        label: "Maison de jardin / remise à outils",
        credit: 25,
      },
      {
        id: 4892741016,
        label: "Abri d'auto",
        credit: 20,
      },
      {
        id: 342848033,
        label: "Pergola",
        credit: 15,
      },
      {
        id: 833036751,
        label: "Échelle / escalier / arbre pour chat",
        credit: 8,
      },
      {
        id: 257949134,
        label: "Protection de la vie privée",
        credit: 10,
      },
      {
        id: 941276786,
        label: "Autre",
        credit: 7,
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  //   garden
  // carport
  {
    id: 4892741016,
    type: "checkbox",
    label: "De quel type de carport avez-vous besoin ?",
    options: [
      {
        id: 2448608839,
        label: "Carport simple",
      },
      {
        id: 4686068835,
        label: "Carport double",
      },
      {
        id: 8798558908,
        label: "Dimensions spéciales",
      },
      {
        label: "Réparation d'abri d'auto",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 417809099,
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 294007912,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  // privacy
  // Petite wooden buildings

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
        label: "Autre",
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
        label: "Autre",
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
        label: "Jusqu'à 14 m²",
        credit: 15,
      },
      {
        id: 2370932304,
        label: "15 à 29 m²",
        credit: 25,
      },
      {
        id: 6181681493,
        label: "30 à 59 m²",
        credit: 45,
      },
      {
        id: 5059907862,
        label: "60 m² ou plus",
        credit: 65,
      },
      {
        id: 9192231361,
        label: "Je ne sais pas",
        credit: 10,
      },
    ],
  },
  {
    id: 8661355292,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2370932304,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 6181681493,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 5059907862,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 9192231361,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 2991585766,
    type: "checkbox",
    label: "How big is the area approximately ?",
    options: [
      {
        id: 442301439,
        label: "Jusqu'à 14 m²",
        credit: 15,
      },
      {
        id: 151202730,
        label: "15 à 29 m²",
        credit: 25,
      },
      {
        id: 448695356,
        label: "30 à 59 m²",
        credit: 45,
      },
      {
        id: 144160029,
        label: "60 m² ou plus",
        credit: 65,
      },
      {
        id: 828034392,
        label: "Je ne sais pas",
        credit: 10,
      },
    ],
  },
  {
    id: 442301439,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 151202730,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 448695356,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 144160029,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 828034392,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
        label: "Autre",
        credit: 15,
      },
    ],
  },
  {
    id: 219964030,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 636753250,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 641566111,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
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
        label: "Autre",
        credit: 10,
      },
    ],
  },
  {
    id: 4511314722,
    type: "checkbox",
    label:
      "Quelle est la taille approximative de la surface totale de la façade ?",
    options: [
      {
        id: 687457229,
        label: "Petit (zone partielle d'un côté de façade)",
        credit: 25,
      },
      {
        id: 836914140,
        label: "Moyen (un côté d'une maison unifamiliale, petit hangar, etc.)",
        credit: 35,
      },
      {
        id: 610040164,
        label: "Grande (maison individuelle, maison multifamiliale)",
        credit: 55,
      },
    ],
  },
  {
    id: 687457229,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 836914140,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 610040164,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 7368110882,
    type: "checkbox",
    label:
      "Quelle est la taille approximative de la surface totale de la façade ?",
    options: [
      {
        id: 687457229,
        label: "Petit (zone partielle d'un côté de façade)",
        credit: 25,
      },
      {
        id: 836914140,
        label: "Moyen (un côté d'une maison unifamiliale, petit hangar, etc.)",
        credit: 35,
      },
      {
        id: 610040164,
        label: "Grande (maison individuelle, maison multifamiliale)",
        credit: 55,
      },
    ],
  },
  {
    id: 687457229,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 836914140,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  {
    id: 610040164,
    type: "checkbox",
    label: "Faut-il déposer une demande de permis de construire ?",
    options: does_a_building_permit_submitted,
  },
  // exterior constructions
  //   interior
  {
    id: 2503743486,
    type: "checkbox",
    label: "De quel type de bâtiments parle-t-on exactement ?",
    options: [
      {
        id: 6216922902,
        label: "Escaliers",
      },
      {
        id: 2330283960,
        label: "Murs",
      },
      {
        id: 4066801693,
        label: "Couverture",
      },
      {
        id: 2680859217,
        label: "Planchers",
      },
      {
        label: "Galeries",
        credit: 20,
      },
      {
        label: "Autre",
        credit: 15,
      },
    ],
  },
  {
    id: 6216922902,
    type: "checkbox",
    label: "",
    options: [
      {
        label:
          "Réparations/rénovations mineures (par exemple quelques marches cassées)",
        credit: 15,
      },
      {
        label:
          "Réparations/rénovations majeures (ex. : rénover un escalier complet)",
        credit: 35,
      },
      {
        label: "Reconstruire les escaliers",
        credit: 55,
      },
      {
        label: "Autre",
        credit: 10,
      },
    ],
  },
  {
    id: 2330283960,
    type: "checkbox",
    label: "De quoi avez-vous exactement besoin au niveau des murs ?",
    options: [
      {
        id: 7031613074,
        label: "Construire des murs (cloisons, etc.)",
      },
      {
        id: 7556458218,
        label: "Pose de revêtements muraux (panneaux, lambris, etc.)",
      },
      {
        id: 9985731780,
        label: "Autre wall constructions",
      },
    ],
  },
  {
    id: 7031613074,
    type: "checkbox",
    label: "De quoi avez-vous exactement besoin au niveau des murs ?",
    options: [
      {
        label: "Jusqu'à 9 m²",
        credit: 15,
      },
      {
        label: "10 à 19 m²",
        credit: 30,
      },
      {
        label: "20 à 39 m²",
        credit: 45,
      },
      {
        label: "40 or more m²",
        credit: 60,
      },
      {
        label: "Je ne sais pas",
        credit: 10,
      },
    ],
  },
  {
    id: 7556458218,
    type: "checkbox",
    label: "De quoi avez-vous exactement besoin au niveau des murs ?",
    options: [
      {
        label: "Jusqu'à 9 m²",
        credit: 15,
      },
      {
        label: "10 à 19 m²",
        credit: 30,
      },
      {
        label: "20 à 39 m²",
        credit: 45,
      },
      {
        label: "40 or more m²",
        credit: 60,
      },
      {
        label: "Je ne sais pas",
        credit: 10,
      },
    ],
  },
  {
    id: 9985731780,
    type: "checkbox",
    label: "De quoi avez-vous exactement besoin au niveau des murs ?",
    options: How_big_is_total_approximately,
  },
  {
    id: 4066801693,
    type: "checkbox",
    label: "Quelle est la superficie totale du sol ?",
    options: [
      {
        label: "Jusqu'à 14 m²",
        credit: 15,
      },
      {
        label: "15 à 29 m²",
        credit: 30,
      },
      {
        label: "30 à 59 m²",
        credit: 45,
      },
      {
        label: "60 m² ou plus",
        credit: 60,
      },
      {
        label: "Je ne sais pas",
        credit: 10,
      },
    ],
  },
  {
    id: 2680859217,
    type: "checkbox",
    label: "De quoi avez-vous exactement besoin au niveau des murs ?",
    options: [
      {
        id: 4209585610,
        label: "Pose d'un nouveau plancher",
      },
      {
        label: "Rénover / réparer les sols",
        credit: 45,
      },
      {
        label: "Autre",
        credit: 15,
      },
    ],
  },
  {
    id: 4209585610,
    type: "checkbox",
    label: "Quelle est la superficie totale du plafond ?",
    options: [
      {
        label: "Petite",
        des: "Jusqu'à 14 m²",
        credit: 15,
      },
      {
        label: "Moyen",
        des: "15 à 29 m²",
        credit: 30,
      },
      {
        label: "Grande",
        des: "30 à 59 m²",
        credit: 45,
      },
      {
        label: "Très grand",
        des: "60 m² ou plus",
        credit: 60,
      },
    ],
  },
  {
    id: 920042018,
    type: "checkbox",
    label: "Quelle est la superficie totale du plafond ?",
    options: How_big_is_total_approximately,
  },
  {
    id: 545722901,
    type: "checkbox",
    label: "Quelle est la superficie totale du plafond ?",
    options: How_big_is_total_approximately,
  },
  //   interior
];

export default carpentry;
