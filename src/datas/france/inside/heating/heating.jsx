import {
  have_you_already_heating_system,
  what_do_use_for_heating,
  what_do_you_the_water,
  what_system_distribute_the_heat,
} from "../../reuse-data";

const heating = [
  {
    id: 572041104,
    type: "checkbox",
    label: "De quel type de service avez-vous besoin ?",
    options: [
      {
        id: 591325650,
        label: "Chauffage",
        des: "Installation de chauffage, révision de réservoir à mazout, chauffe-eau, entretien/réparation, etc.",
      },
      {
        id: 528962151,
        label: "Ventilation",
        des: "Installation de systèmes d'alimentation/évacuation d'air, tuyaux de ventilation, entretien/réparation, etc.",
      },
      {
        id: 875206902,
        label: "Climat",
        des: "Installation de climatisation, remplissage de liquide de refroidissement de climatisation, entretien/réparation, etc.",
      },
      {
        id: 970513467,
        label: "Froide",
        des: "Installer un réfrigérateur/congélateur, remplir du liquide de refroidissement, effectuer un entretien/une réparation, etc.",
      },
      {
        id: 420967737,
        label: "Autre",
        credit: 8,
      },
    ],
  },
  {
    id: 591325650,
    type: "checkbox",
    label: "De quels services en technologie de chauffage avez-vous besoin ?",
    options: [
      {
        id: 942559954,
        label: "Installation ou remplacement de radiateurs",
        des: "Mazout, gaz, électrique, bois, pompe à chaleur, etc.",
        credit: 45,
      },
      {
        id: 148561218,
        label: "Installation ou remplacement de chauffe-eau",
        des: "Chaudière, chauffe-eau instantané, etc.",
        credit: 45,
      },
      {
        id: 380250796,
        label:
          "Installation ou remplacement de systèmes de distribution de chaleur",
        des: "Chauffage par radiateur ou par le sol",
        credit: 45,
      },
      {
        id: 103909421,
        label: "Service / Réparation",
        des: "Révision cuve à mazout, rinçage plancher chauffant, détartrage chaudière, etc.",
        credit: 20,
      },
      {
        id: 529528166,
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
    id: 148561218,
    type: "checkbox",
    label: "Qu'utilisez-vous actuellement pour vous chauffer ?",
    options: what_do_use_for_heating(
      869301123,
      794909268,
      944517440,
      873235193,
      380511997,
      271719672,
      903982921,
      349888078
    ),
  },
  {
    id: 942559954,
    type: "checkbox",
    label: "Qu'utilisez-vous actuellement pour vous chauffer ?",
    options: what_do_use_for_heating(
      869301123,
      794909268,
      944517440,
      873235193,
      380511997,
      271719672,
      903982921,
      349888078
    ),
  },
  {
    id: 869301123,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: what_do_use_for_heating(
      152748177,
      514858987,
      502826453,
      600869427,
      860155374,
      283940218,
      174421283,
      271755434
    ),
  },
  {
    id: 152748177,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 514858987,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 502826453,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 600869427,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 860155374,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 283940218,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 174421283,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 271755434,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 794909268,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: what_do_use_for_heating(
      152748177,
      514858987,
      502826453,
      600869427,
      860155374,
      283940218,
      174421283,
      271755434
    ),
  },
  {
    id: 152748177,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 514858987,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 502826453,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 600869427,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 860155374,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 283940218,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 174421283,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 271755434,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 944517440,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: what_do_use_for_heating(
      152748177,
      514858987,
      502826453,
      600869427,
      860155374,
      283940218,
      174421283,
      271755434
    ),
  },
  {
    id: 152748177,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 514858987,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 502826453,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 600869427,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 860155374,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 283940218,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 174421283,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 271755434,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 873235193,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: what_do_use_for_heating(
      152748177,
      514858987,
      502826453,
      600869427,
      860155374,
      283940218,
      174421283,
      271755434
    ),
  },
  {
    id: 152748177,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 514858987,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 502826453,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 600869427,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 860155374,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 283940218,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 174421283,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 271755434,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 380511997,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: what_do_use_for_heating(
      152748177,
      514858987,
      502826453,
      600869427,
      860155374,
      283940218,
      174421283,
      271755434
    ),
  },
  {
    id: 152748177,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 514858987,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 502826453,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 600869427,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 860155374,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 283940218,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 174421283,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 271755434,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 271719672,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: what_do_use_for_heating(
      152748177,
      514858987,
      502826453,
      600869427,
      860155374,
      283940218,
      174421283,
      271755434
    ),
  },
  {
    id: 152748177,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 514858987,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 502826453,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 600869427,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 860155374,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 283940218,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 174421283,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 271755434,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 903982921,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: what_do_use_for_heating(
      152748177,
      514858987,
      502826453,
      600869427,
      860155374,
      283940218,
      174421283,
      271755434
    ),
  },
  {
    id: 152748177,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 514858987,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 502826453,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 600869427,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 860155374,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 283940218,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 174421283,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 271755434,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 349888078,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: what_do_use_for_heating(
      152748177,
      514858987,
      502826453,
      600869427,
      860155374,
      283940218,
      174421283,
      271755434
    ),
  },
  {
    id: 152748177,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 514858987,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 502826453,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 600869427,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 860155374,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 283940218,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 174421283,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },
  {
    id: 271755434,
    type: "checkbox",
    label: "Le nouveau système de chauffage est-il déjà là ?",
    options: have_you_already_heating_system,
  },

  // Installing
  {
    id: 380250796,
    type: "checkbox",
    label: "Qu'utilisez-vous actuellement pour chauffer l'eau ?",
    options: what_do_you_the_water(
      976723454,
      827180104,
      262723274,
      916159383,
      737251437
    ),
  },
  {
    id: 976723454,
    type: "checkbox",
    label: "Comment souhaitez-vous chauffer l'eau dans le futur ?",
    options: what_do_you_the_water(
      289888244,
      263326897,
      555764659,
      764866734,
      616732745
    ),
  },
  {
    id: 289888244,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 263326897,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 555764659,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 764866734,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 616732745,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 827180104,
    type: "checkbox",
    label: "Comment souhaitez-vous chauffer l'eau dans le futur ?",
    options: what_do_you_the_water(
      289888244,
      263326897,
      555764659,
      764866734,
      616732745
    ),
  },
  {
    id: 289888244,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 263326897,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 555764659,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 764866734,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 616732745,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 262723274,
    type: "checkbox",
    label: "Comment souhaitez-vous chauffer l'eau dans le futur ?",
    options: what_do_you_the_water(
      289888244,
      263326897,
      555764659,
      764866734,
      616732745
    ),
  },
  {
    id: 289888244,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 263326897,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 555764659,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 764866734,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 616732745,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 916159383,
    type: "checkbox",
    label: "Comment souhaitez-vous chauffer l'eau dans le futur ?",
    options: what_do_you_the_water(
      289888244,
      263326897,
      555764659,
      764866734,
      616732745
    ),
  },
  {
    id: 289888244,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 263326897,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 555764659,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 764866734,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 616732745,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 737251437,
    type: "checkbox",
    label: "Comment souhaitez-vous chauffer l'eau dans le futur ?",
    options: what_do_you_the_water(
      289888244,
      263326897,
      555764659,
      764866734,
      616732745
    ),
  },
  {
    id: 289888244,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 263326897,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 555764659,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 764866734,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 616732745,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  // Installing

  //   system
  {
    id: 380250796,
    type: "checkbox",
    label: "What system do you currently use to distribute the heat ?",
    options: what_system_distribute_the_heat(
      668322910,
      808595399,
      568550754,
      451553304,
      999551860
    ),
  },
  {
    id: 668322910,
    type: "checkbox",
    label:
      "Which system would you like to use to distribute heat in the future ?",
    options: what_system_distribute_the_heat(
      133105907,
      183741613,
      562457150,
      385782572,
      686236029
    ),
  },
  {
    id: 133105907,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 183741613,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 562457150,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 385782572,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 686236029,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 808595399,
    type: "checkbox",
    label:
      "Which system would you like to use to distribute heat in the future ?",
    options: what_system_distribute_the_heat(
      133105907,
      183741613,
      562457150,
      385782572,
      686236029
    ),
  },
  {
    id: 133105907,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 183741613,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 562457150,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 385782572,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 686236029,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 568550754,
    type: "checkbox",
    label:
      "Which system would you like to use to distribute heat in the future ?",
    options: what_system_distribute_the_heat(
      133105907,
      183741613,
      562457150,
      385782572,
      686236029
    ),
  },
  {
    id: 133105907,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 183741613,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 562457150,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 385782572,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 686236029,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 451553304,
    type: "checkbox",
    label:
      "Which system would you like to use to distribute heat in the future ?",
    options: what_system_distribute_the_heat(
      133105907,
      183741613,
      562457150,
      385782572,
      686236029
    ),
  },
  {
    id: 133105907,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 183741613,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 562457150,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 385782572,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 686236029,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 999551860,
    type: "checkbox",
    label:
      "Which system would you like to use to distribute heat in the future ?",
    options: what_system_distribute_the_heat(
      133105907,
      183741613,
      562457150,
      385782572,
      686236029
    ),
  },
  {
    id: 133105907,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 183741613,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 562457150,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 385782572,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 686236029,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },

  //   system

  // service

  {
    id: 103909421,
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
    id: 528962151,
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
    id: 875206902,
    type: "checkbox",
    label: "De quels services de climatisation avez-vous besoin ?",
    options: [
      {
        id: 395156349,
        label: "Installation ou remplacement de systèmes de climatisation",
        des: "Climatiseurs split, climatiseurs mobiles, etc.",
        credit: 35,
      },
      {
        id: 964121108,
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
    id: 395156349,
    type: "checkbox",
    label: "De quel type de climatisation avez-vous besoin ?",
    options: [
      {
        id: 255133701,
        label: "Climatisation split",
      },
      {
        id: 494086994,
        label: "Climatisation mobile",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 255133701,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 494086994,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 964121108,
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
    id: 970513467,
    type: "checkbox",
    label: "De quels services de réfrigération avez-vous besoin ?",
    options: [
      {
        id: 852795866,
        label: "Installation ou remplacement d'équipements de réfrigération",
        des: "Réfrigérateurs, comptoirs réfrigérés, congélateurs, etc.",
        credit: 35,
      },
      {
        id: 171239704,
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
    id: 852795866,
    type: "checkbox",
    label: "De quel type de réfrigérateur avez-vous besoin ?",
    options: [
      {
        id: 728268992,
        label: "Réfrigérateur",
      },
      {
        id: 791977842,
        label: "Congélateur",
      },
      {
        label: "Autre",
      },
    ],
  },

  {
    id: 728268992,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 791977842,
    type: "checkbox",
    label: "Avez-vous déjà acheté le nouveau système de chauffage de l'eau ?",
    options: have_you_already_heating_system,
  },
  {
    id: 171239704,
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
