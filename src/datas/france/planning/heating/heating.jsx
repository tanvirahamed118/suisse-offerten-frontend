import {
  have_you_already_heating_system,
  what_do_use_for_heating,
  what_do_you_the_water,
  what_system_distribute_the_heat,
} from "../../reuse-data";

const heating = [
  {
    id: 375609626,
    type: "checkbox",
    label: "De quel type de service avez-vous besoin ?",
    options: [
      {
        id: 1167747966,
        label: "Chauffage",
        des: "Installation de chauffage, révision de réservoir à mazout, chauffe-eau, entretien/réparation, etc.",
      },
      {
        id: 2309275327,
        label: "Ventilation",
        des: "Installation de systèmes d'alimentation/évacuation d'air, tuyaux de ventilation, entretien/réparation, etc.",
      },
      {
        id: 3944191165,
        label: "Climat",
        des: "Installation de climatisation, remplissage de liquide de refroidissement de climatisation, entretien/réparation, etc.",
      },
      {
        id: 8253315241,
        label: "Froide",
        des: "Installer un réfrigérateur/congélateur, remplir du liquide de refroidissement, effectuer un entretien/une réparation, etc.",
      },
      {
        id: 2312588727,
        label: "Autre",
        credit: 8,
      },
    ],
  },
  {
    id: 1167747966,
    type: "checkbox",
    label: "De quels services en technologie de chauffage avez-vous besoin ?",
    options: [
      {
        id: 4885090937,
        label: "Installation ou remplacement de radiateurs",
        des: "Mazout, gaz, électrique, bois, pompe à chaleur, etc.",
        credit: 45,
      },
      {
        id: 9485516439,
        label: "Installation ou remplacement de chauffe-eau",
        des: "Chaudière, chauffe-eau instantané, etc.",
        credit: 45,
      },
      {
        id: 7089175771,
        label:
          "Installation ou remplacement de systèmes de distribution de chaleur",
        des: "Chauffage par radiateur ou par le sol",
        credit: 45,
      },
      {
        id: 5678357136,
        label: "Service / Réparation",
        des: "Révision cuve à mazout, rinçage plancher chauffant, détartrage chaudière, etc.",
        credit: 20,
      },
      {
        id: 8781590683,
        label: "Démontage/élimination uniquement",
        des: "Démontage / élimination de réservoirs d'huile, radiateurs, etc.",
        credit: 20,
      },
      {
        id: 307575774,
        label: "Autre",
        credit: 10,
      },
    ],
  },
  {
    id: 9485516439,
    type: "checkbox",
    label: "Qu'utilisez-vous actuellement pour vous chauffer ?",
    options: what_do_use_for_heating(
      3737353330,
      7788640438,
      6811499742,
      2196731576,
      1006858568,
      3793171541,
      2362616305,
      7731850313
    ),
  },
  {
    id: 4885090937,
    type: "checkbox",
    label: "Qu'utilisez-vous actuellement pour vous chauffer ?",
    options: what_do_use_for_heating(
      3737353330,
      7788640438,
      6811499742,
      2196731576,
      1006858568,
      3793171541,
      2362616305,
      7731850313
    ),
  },
  {
    id: 3737353330,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: what_do_use_for_heating(
      4753959605,
      9338010645,
      7551968676,
      6377015285,
      9726802767,
      3581800040,
      8203248810,
      3583226964
    ),
  },
  {
    id: 4753959605,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9338010645,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 7551968676,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 6377015285,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9726802767,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3581800040,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 8203248810,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3583226964,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 7788640438,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: what_do_use_for_heating(
      4753959605,
      9338010645,
      7551968676,
      6377015285,
      9726802767,
      3581800040,
      8203248810,
      3583226964
    ),
  },
  {
    id: 4753959605,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9338010645,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 7551968676,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 6377015285,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9726802767,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3581800040,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 8203248810,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3583226964,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 6811499742,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: what_do_use_for_heating(
      4753959605,
      9338010645,
      7551968676,
      6377015285,
      9726802767,
      3581800040,
      8203248810,
      3583226964
    ),
  },
  {
    id: 4753959605,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9338010645,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 7551968676,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 6377015285,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9726802767,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3581800040,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 8203248810,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3583226964,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 2196731576,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: what_do_use_for_heating(
      4753959605,
      9338010645,
      7551968676,
      6377015285,
      9726802767,
      3581800040,
      8203248810,
      3583226964
    ),
  },
  {
    id: 4753959605,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9338010645,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 7551968676,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 6377015285,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9726802767,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3581800040,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 8203248810,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3583226964,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 1006858568,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: what_do_use_for_heating(
      4753959605,
      9338010645,
      7551968676,
      6377015285,
      9726802767,
      3581800040,
      8203248810,
      3583226964
    ),
  },
  {
    id: 4753959605,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9338010645,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 7551968676,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 6377015285,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9726802767,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3581800040,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 8203248810,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3583226964,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3793171541,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: what_do_use_for_heating(
      4753959605,
      9338010645,
      7551968676,
      6377015285,
      9726802767,
      3581800040,
      8203248810,
      3583226964
    ),
  },
  {
    id: 4753959605,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9338010645,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 7551968676,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 6377015285,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9726802767,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3581800040,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 8203248810,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3583226964,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 2362616305,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: what_do_use_for_heating(
      4753959605,
      9338010645,
      7551968676,
      6377015285,
      9726802767,
      3581800040,
      8203248810,
      3583226964
    ),
  },
  {
    id: 4753959605,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9338010645,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 7551968676,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 6377015285,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9726802767,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3581800040,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 8203248810,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3583226964,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 7731850313,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: what_do_use_for_heating(
      4753959605,
      9338010645,
      7551968676,
      6377015285,
      9726802767,
      3581800040,
      8203248810,
      3583226964
    ),
  },
  {
    id: 4753959605,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9338010645,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 7551968676,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 6377015285,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9726802767,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3581800040,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 8203248810,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3583226964,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },

  // Installing
  {
    id: 7089175771,
    type: "checkbox",
    label: "Qu'utilisez-vous actuellement pour chauffer l'eau ?",
    options: what_do_you_the_water(
      7251424382,
      9062397095,
      7710582917,
      4892430620,
      9646350577
    ),
  },
  {
    id: 7251424382,
    type: "checkbox",
    label: "Comment souhaitez-vous chauffer l'eau dans le futur ?",
    options: what_do_you_the_water(
      8843366487,
      3735773276,
      8411638227,
      5406651819,
      8213591155
    ),
  },
  {
    id: 8843366487,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3735773276,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 8411638227,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 5406651819,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 8213591155,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9062397095,
    type: "checkbox",
    label: "Comment souhaitez-vous chauffer l'eau dans le futur ?",
    options: what_do_you_the_water(
      8843366487,
      3735773276,
      8411638227,
      5406651819,
      8213591155
    ),
  },
  {
    id: 8843366487,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3735773276,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 8411638227,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 5406651819,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 8213591155,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 7710582917,
    type: "checkbox",
    label: "Comment souhaitez-vous chauffer l'eau dans le futur ?",
    options: what_do_you_the_water(
      8843366487,
      3735773276,
      8411638227,
      5406651819,
      8213591155
    ),
  },
  {
    id: 8843366487,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3735773276,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 8411638227,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 5406651819,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 8213591155,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 4892430620,
    type: "checkbox",
    label: "Comment souhaitez-vous chauffer l'eau dans le futur ?",
    options: what_do_you_the_water(
      8843366487,
      3735773276,
      8411638227,
      5406651819,
      8213591155
    ),
  },
  {
    id: 8843366487,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3735773276,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 8411638227,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 5406651819,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 8213591155,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9646350577,
    type: "checkbox",
    label: "Comment souhaitez-vous chauffer l'eau dans le futur ?",
    options: what_do_you_the_water(
      8843366487,
      3735773276,
      8411638227,
      5406651819,
      8213591155
    ),
  },
  {
    id: 8843366487,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 3735773276,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 8411638227,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 5406651819,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 8213591155,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  // Installing

  //   system
  {
    id: 7089175771,
    type: "checkbox",
    label: "What system do you currently use to distribute the heat ?",
    options: what_system_distribute_the_heat(
      5013037774,
      2053021320,
      6617559444,
      9609379457,
      1415201830
    ),
  },
  {
    id: 5013037774,
    type: "checkbox",
    label:
      "Which system would you like to use to distribute heat in the future ?",
    options: what_system_distribute_the_heat(
      7062415005,
      2012769283,
      5271255912,
      4583416520,
      4872761267
    ),
  },
  {
    id: 7062415005,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 2012769283,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 5271255912,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 4583416520,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 4872761267,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 2053021320,
    type: "checkbox",
    label:
      "Which system would you like to use to distribute heat in the future ?",
    options: what_system_distribute_the_heat(
      7062415005,
      2012769283,
      5271255912,
      4583416520,
      4872761267
    ),
  },
  {
    id: 7062415005,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 2012769283,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 5271255912,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 4583416520,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 4872761267,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 6617559444,
    type: "checkbox",
    label:
      "Which system would you like to use to distribute heat in the future ?",
    options: what_system_distribute_the_heat(
      7062415005,
      2012769283,
      5271255912,
      4583416520,
      4872761267
    ),
  },
  {
    id: 7062415005,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 2012769283,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 5271255912,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 4583416520,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 4872761267,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9609379457,
    type: "checkbox",
    label:
      "Which system would you like to use to distribute heat in the future ?",
    options: what_system_distribute_the_heat(
      7062415005,
      2012769283,
      5271255912,
      4583416520,
      4872761267
    ),
  },
  {
    id: 7062415005,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 2012769283,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 5271255912,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 4583416520,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 4872761267,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 1415201830,
    type: "checkbox",
    label:
      "Which system would you like to use to distribute heat in the future ?",
    options: what_system_distribute_the_heat(
      7062415005,
      2012769283,
      5271255912,
      4583416520,
      4872761267
    ),
  },
  {
    id: 7062415005,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 2012769283,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 5271255912,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 4583416520,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 4872761267,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },

  //   system

  // service

  {
    id: 5678357136,
    type: "checkbox",
    label: "De quel type de service/réparation avez-vous besoin ?",
    options: [
      {
        label: "Révision du réservoir d'huile",
      },
      {
        label: "Nettoyage de réservoir à mazout",
      },
      {
        label: "Rénovation de citerne à mazout",
      },
      {
        label: "Révision du chauffage par le sol",
      },
      {
        label: "Contrôle du radiateur/chauffage",
      },
      {
        label: "Détartrer la chaudière",
      },
      {
        label: "Autre",
      },
    ],
  },
  // service

  {
    id: 2309275327,
    type: "checkbox",
    label: "De quels services en technologie de ventilation avez-vous besoin ?",
    options: [
      {
        label: "Installation ou remplacement de systèmes de ventilation",
        des: "Systèmes d'alimentation/extraction d'air, hottes aspirantes, etc.",
        credit: 45,
      },
      {
        label: "Entretien/réparation de systèmes de ventilation",
        des: "Nettoyer les conduits de ventilation, remplacer les filtres, etc.",
        credit: 35,
      },
      {
        label: "Autre",
        credit: 15,
      },
    ],
  },
  {
    id: 3944191165,
    type: "checkbox",
    label: "De quels services de climatisation avez-vous besoin ?",
    options: [
      {
        id: 5756860661,
        label: "Installation ou remplacement de systèmes de climatisation",
        des: "Climatiseurs split, climatiseurs mobiles, etc.",
        credit: 35,
      },
      {
        id: 4417519361,
        label: "Entretien/réparation de systèmes de climatisation",
        des: "Faire l'appoint de liquide de refroidissement, remplacer les pièces usées, etc.",
        credit: 15,
      },
      {
        label: "Autre",
        credit: 8,
      },
    ],
  },
  {
    id: 5756860661,
    type: "checkbox",
    label: "De quel type de climatisation avez-vous besoin ?",
    options: [
      {
        id: 2309412270,
        label: "Climatisation split",
      },
      {
        id: 8681507031,
        label: "Climatisation mobile",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 2309412270,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 8681507031,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 4417519361,
    type: "checkbox",
    label:
      "De quel type de service/réparation avez-vous besoin dans le domaine de la climatisation ?",
    options: [
      {
        label: "Faire l'appoint de liquide de refroidissement",
      },
      {
        label: "Service général",
      },
      {
        label: "Analyse/réparation des erreurs",
      },
      {
        label: "Autre",
      },
    ],
  },

  {
    id: 8253315241,
    type: "checkbox",
    label: "De quels services de réfrigération avez-vous besoin ?",
    options: [
      {
        id: 9403830664,
        label: "Installation ou remplacement d'équipements de réfrigération",
        des: "Réfrigérateurs, comptoirs réfrigérés, congélateurs, etc.",
        credit: 35,
      },
      {
        id: 6387718996,
        label: "Entretien/réparation d'appareils de réfrigération",
        des: "Faire l'appoint de liquide de refroidissement, remplacer les pièces usées, etc.",
        credit: 15,
      },
      {
        label: "Autre",
        credit: 8,
      },
    ],
  },

  {
    id: 9403830664,
    type: "checkbox",
    label: "De quel type de réfrigérateur avez-vous besoin ?",
    options: [
      {
        id: 4571039982,
        label: "Réfrigérateur",
      },
      {
        id: 9552427419,
        label: "Congélateur",
      },
      {
        label: "Autre",
      },
    ],
  },

  {
    id: 4571039982,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 9552427419,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 6387718996,
    type: "checkbox",
    label:
      "De quel type de service/réparation avez-vous besoin dans le secteur de la réfrigération ?",
    options: [
      {
        label: "Faire l'appoint de liquide de refroidissement",
      },
      {
        label: "Service général",
      },
      {
        label: "Analyse/réparation des erreurs",
      },
      {
        label: "Autre",
      },
    ],
  },
];

export default heating;
