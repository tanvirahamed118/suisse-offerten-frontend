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
    label: "Welche Art von Service benötigen Sie ?",
    options: [
      {
        id: 8878753628,
        label: "Heizung",
        des: "Heizung einbauen, Öltankrevision, Warmwasserbereiter, Wartung/Reparatur, usw.",
      },
      {
        id: 5362023545,
        label: "Belüftung",
        des: "Installieren von Zu-/Abluftsystemen, Lüftungsleitungen, Wartung/Reparatur usw.",
        credit: 25,
      },
      {
        id: 7225818131,
        label: "Klima",
        des: "Klimaanlage einbauen, Klimaanlagen-Kühlmittel nachfüllen, Wartung/Reparatur, etc.",
        credit: 25,
      },
      {
        label: "kalt",
        des: "Kühl-/Gefrierschrank einbauen, Kühlmittel nachfüllen, Wartung/Reparatur etc.",
        credit: 25,
      },
      {
        label: "Andere",
        credit: 15,
      },
    ],
  },
  {
    id: 8878753628,
    type: "checkbox",
    label: "Welche Leistungen im Bereich Heiztechnik benötigen Sie ?",
    options: [
      {
        id: 942559954,
        label: "Heizungen installieren oder ersetzen",
        des: "Öl, Gas, Strom, Holz, Wärmepumpe usw.",
        credit: 50,
      },
      {
        id: 148561218,
        label: "Installation oder Austausch von Warmwasserbereitern",
        des: "Boiler, Durchlauferhitzer, etc.",
        credit: 50,
      },
      {
        id: 380250796,
        label: "Wärmeverteilsysteme installieren oder ersetzen",
        des: "Heizkörper oder Fußbodenheizung",
        credit: 50,
      },
      {
        id: 103909421,
        label: "Service / Reparatur",
        des: "Öltankrevision, Fußbodenheizungsspülung, Boilerentkalkung, usw.",
        credit: 20,
      },
      {
        id: 529528166,
        label: "Nur Demontage / Entsorgung",
        des: "Demontage/Entsorgung von Öltanks, Kühlern etc.",
        credit: 20,
      },
      {
        id: 307575774,
        label: "Andere",
        credit: 10,
      },
    ],
  },
  {
    id: 942559954,
    type: "checkbox",
    label: "Womit heizen Sie aktuell ?",
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
    label: "Wie möchten Sie in Zukunft heizen ?",
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
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 514858987,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 502826453,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 600869427,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 860155374,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 283940218,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 174421283,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 271755434,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 794909268,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
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
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 514858987,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 502826453,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 600869427,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 860155374,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 283940218,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 174421283,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 271755434,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 944517440,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
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
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 514858987,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 502826453,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 600869427,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 860155374,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 283940218,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 174421283,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 271755434,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 873235193,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
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
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 514858987,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 502826453,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 600869427,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 860155374,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 283940218,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 174421283,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 271755434,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 380511997,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
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
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 514858987,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 502826453,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 600869427,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 860155374,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 283940218,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 174421283,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 271755434,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 271719672,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
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
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 514858987,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 502826453,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 600869427,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 860155374,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 283940218,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 174421283,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 271755434,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 903982921,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
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
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 514858987,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 502826453,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 600869427,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 860155374,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 283940218,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 174421283,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 271755434,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 349888078,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
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
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 514858987,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 502826453,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 600869427,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 860155374,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 283940218,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 174421283,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },
  {
    id: 271755434,
    type: "checkbox",
    label: "Wie möchten Sie in Zukunft heizen ?",
    options: have_you_already_heating_system,
  },

  // Installing
  {
    id: 380250796,
    type: "checkbox",
    label: "Womit erhitzen Sie derzeit das Wasser ?",
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
    label: "Wie möchten Sie künftig das Wasser erhitzen ?",
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
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 263326897,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 555764659,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 764866734,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 616732745,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 827180104,
    type: "checkbox",
    label: "Wie möchten Sie künftig das Wasser erhitzen ?",
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
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 263326897,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 555764659,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 764866734,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 616732745,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 262723274,
    type: "checkbox",
    label: "Wie möchten Sie künftig das Wasser erhitzen ?",
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
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 263326897,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 555764659,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 764866734,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 616732745,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 916159383,
    type: "checkbox",
    label: "Wie möchten Sie künftig das Wasser erhitzen ?",
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
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 263326897,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 555764659,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 764866734,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 616732745,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 737251437,
    type: "checkbox",
    label: "Wie möchten Sie künftig das Wasser erhitzen ?",
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
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 263326897,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 555764659,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 764866734,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 616732745,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  // Installing

  //   system
  {
    id: 380250796,
    type: "checkbox",
    label: "Welches System nutzen Sie derzeit zur Wärmeverteilung ?",
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
    label: "Mit welchem ​​System möchten Sie künftig Wärme verteilen ?",
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
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 183741613,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 562457150,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 385782572,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 686236029,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 808595399,
    type: "checkbox",
    label: "Mit welchem ​​System möchten Sie künftig Wärme verteilen ?",
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
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 183741613,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 562457150,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 385782572,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 686236029,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 568550754,
    type: "checkbox",
    label: "Mit welchem ​​System möchten Sie künftig Wärme verteilen ?",
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
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 183741613,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 562457150,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 385782572,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 686236029,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 451553304,
    type: "checkbox",
    label: "Mit welchem ​​System möchten Sie künftig Wärme verteilen ?",
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
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 183741613,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 562457150,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 385782572,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 686236029,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 999551860,
    type: "checkbox",
    label: "Mit welchem ​​System möchten Sie künftig Wärme verteilen ?",
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
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 183741613,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 562457150,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 385782572,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 686236029,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },

  //   system

  // service

  {
    id: 103909421,
    type: "checkbox",
    label: "Welche Art von Service/Reparatur benötigen Sie ?",
    options: [
      {
        label: "Öltankrevision",
      },
      {
        label: "Öltankreinigung",
      },
      {
        label: "Sanierung eines Öltanks",
      },
      {
        label: "Renovierung der Fußbodenheizung",
      },
      {
        label: "Heizkörper-/Heizungssteuerung",
      },
      {
        label: "Boiler entkalken",
      },
      {
        label: "Andere",
      },
    ],
  },
  // service

  {
    id: 5362023545,
    type: "checkbox",
    label: "Welche Leistungen im Bereich Lüftungstechnik benötigen Sie ?",
    options: [
      {
        label: "Einbau oder Austausch von Lüftungsanlagen",
        des: "Zu-/Abluftanlagen, Dunstabzugshauben, etc.",
      },
      {
        label: "Wartung / Reparatur von Lüftungsanlagen",
        des: "Lüftungskanäle reinigen, Filter austauschen usw.",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 7225818131,
    type: "checkbox",
    label: "Welchen Klimaservice benötigen Sie ?",
    options: [
      {
        id: 395156349,
        label: "Klimaanlagen einbauen oder austauschen",
        des: "Split Klimageräte, mobile Klimageräte, etc.",
      },
      {
        id: 964121108,
        label: "Wartung/Reparatur Klimaanlagen",
        des: "Kühlmittel nachfüllen, verschlissene Teile ersetzen usw.",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 395156349,
    type: "checkbox",
    label: "Welche Art von Klimaanlage benötigen Sie ?",
    options: [
      {
        id: 255133701,
        label: "Split-Klimaanlage",
      },
      {
        id: 494086994,
        label: "Mobile Klimaanlage",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 255133701,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 494086994,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 964121108,
    type: "checkbox",
    label: "Welchen Service/welche Reparatur benötigen Sie im Klimabereich ?",
    options: [
      {
        label: "Kühlmittel nachfüllen",
      },
      {
        label: "Allgemeiner Service",
      },
      {
        label: "Fehleranalyse / Behebung",
      },
      {
        label: "Andere",
      },
    ],
  },

  {
    id: 5362023545,
    type: "checkbox",
    label: "Welche Kältedienstleistungen benötigen Sie ?",
    options: [
      {
        id: 852795866,
        label: "Einbau oder Austausch von Kälteanlagen",
        des: "Kühlschränke, Kühltheken, Gefrierschränke usw.",
      },
      {
        id: 171239704,
        label: "Service / Reparatur von Kühlgeräten",
        des: "Kühlmittel nachfüllen, verschlissene Teile ersetzen usw.",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 852795866,
    type: "checkbox",
    label: "Welchen Kühlschranktyp benötigen Sie ?",
    options: [
      {
        id: 728268992,
        label: "Kühlschrank",
      },
      {
        id: 791977842,
        label: "Gefrierschrank",
      },
      {
        label: "Andere",
      },
    ],
  },

  {
    id: 728268992,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 791977842,
    type: "checkbox",
    label: "Haben Sie die neue Warmwasseraufbereitungsanlage bereits gekauft ?",
    options: have_you_already_heating_system,
  },
  {
    id: 171239704,
    type: "checkbox",
    label: "Welchen Service/welche Reparatur benötigen Sie im Kältebereich ?",
    options: [
      {
        label: "Kühlmittel nachfüllen",
      },
      {
        label: "Allgemeiner Service",
      },
      {
        label: "Fehleranalyse / Behebung",
      },
      {
        label: "Andere",
      },
    ],
  },
];

export default heating;
