import {
  approximately_how_much_budget_for_this_project,
  have_you_already_contacted,
  how_many_bedrooms_are_affected,
  how_much_surrounding_area,
} from "../../reuse-data";

const conversion = [
  {
    id: 985800704,
    type: "multibox",
    mainId: 911571254,
    label: "Wie viele Küchen und Bäder sind betroffen ?",
    options: [
      {
        label: "Dachdecker, Dachdeckerarbeiten",
      },
      {
        label: "Fenster / Türen",
      },
      {
        label: "Gartenbau",
      },
      {
        label: "Heizung, Lüftung, Klima, Kälte",
      },
      {
        label: "Malerarbeiten, Verputzarbeiten",
      },
      {
        label: "Parkett, Laminat, Teppich",
      },
      {
        label: "Maurer, Putz, Beton, Fugen",
      },
      {
        label: "Klempnerarbeiten",
      },
      {
        label: "Ausgrabung",
      },
      {
        label: "Elektriker, Elektroinstallation",
      },
      {
        label: "Platten, Fliesen, Platten",
      },
      {
        label: "Dämmung, Abdichtung, Isolierung",
      },
      {
        label: "Zimmerei, Holzbau",
      },
      {
        label: "Abbruch, Durchbruch, Demontage, Entsorgung",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 911571254,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: [
      {
        id: 110010097,
        label: "0",
      },
      {
        id: 759397380,
        label: "1",
      },
      {
        id: 561441161,
        label: "2",
      },
      {
        id: 957728036,
        label: "3",
      },
      {
        id: 473968171,
        label: "4 oder mehr",
      },
    ],
  },

  //   1 start
  {
    id: 110010097,
    type: "checkbox",
    label: "Wie viele Wohn- und Schlafzimmer sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      443363263,
      639970457,
      852865092,
      318789491,
      514948225
    ),
  },
  //   1
  {
    id: 443363263,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth

  // 2
  {
    id: 639970457,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 2
  // 3
  {
    id: 852865092,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 3
  // 4
  {
    id: 318789491,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 4
  // 5
  {
    id: 514948225,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 5
  //   1 end

  //   2 start
  {
    id: 759397380,
    type: "checkbox",
    label: "Wie viele Wohn- und Schlafzimmer sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      443363263,
      639970457,
      852865092,
      318789491,
      514948225
    ),
  },
  //   1
  {
    id: 443363263,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth

  // 2
  {
    id: 639970457,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 2
  // 3
  {
    id: 852865092,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 3
  // 4
  {
    id: 318789491,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 4
  // 5
  {
    id: 514948225,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 5
  //   2 end

  // 3 start
  {
    id: 561441161,
    type: "checkbox",
    label: "Wie viele Wohn- und Schlafzimmer sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      443363263,
      639970457,
      852865092,
      318789491,
      514948225
    ),
  },
  //   1
  {
    id: 443363263,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth

  // 2
  {
    id: 639970457,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 2
  // 3
  {
    id: 852865092,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 3
  // 4
  {
    id: 318789491,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 4
  // 5
  {
    id: 514948225,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 5
  // 3 end

  // 4 start
  {
    id: 957728036,
    type: "checkbox",
    label: "Wie viele Wohn- und Schlafzimmer sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      443363263,
      639970457,
      852865092,
      318789491,
      514948225
    ),
  },
  //   1
  {
    id: 443363263,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth

  // 2
  {
    id: 639970457,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 2
  // 3
  {
    id: 852865092,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 3
  // 4
  {
    id: 318789491,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 4
  // 5
  {
    id: 514948225,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 5
  // 4 end

  // 5 start
  {
    id: 473968171,
    type: "checkbox",
    label: "Wie viele Wohn- und Schlafzimmer sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      443363263,
      639970457,
      852865092,
      318789491,
      514948225
    ),
  },
  //   1
  {
    id: 443363263,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth

  // 2
  {
    id: 639970457,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 2
  // 3
  {
    id: 852865092,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 3
  // 4
  {
    id: 318789491,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 4
  // 5
  {
    id: 514948225,
    type: "checkbox",
    label:
      "Wie viele Technikräume (z.B. Heizungs-/Waschküchen) sind betroffen ?",
    options: how_many_bedrooms_are_affected(
      819486803,
      456798312,
      578129122,
      992395140,
      565934176
    ),
  },

  //   first
  {
    id: 819486803,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  //   first
  // second
  {
    id: 456798312,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // second
  // third
  {
    id: 578129122,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // third
  // fourth
  {
    id: 992395140,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fourth
  // fifth
  {
    id: 565934176,
    type: "checkbox",
    label:
      "Inwieweit ist die Umgebung (z. B. Garten, Vorplatz etc.) betroffen ?",
    options: how_much_surrounding_area(
      498852668,
      278879234,
      557032021,
      739067021,
      388136326
    ),
  },
  {
    id: 498852668,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 278879234,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 557032021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 739067021,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 388136326,
    type: "checkbox",
    label: "Wie viel haben Sie ungefähr für dieses Projekt budgetiert ?",
    options: approximately_how_much_budget_for_this_project(
      818229856,
      940798090,
      645068335,
      919846952
    ),
  },
  {
    id: 818229856,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 940798090,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 645068335,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  {
    id: 919846952,
    type: "checkbox",
    label:
      "Haben Sie wegen eines eventuellen Bauantrags bereits Kontakt zu Ihrer Gemeinde aufgenommen ?",
    options: have_you_already_contacted,
  },
  // fifth
  // 5
  // 5 end
];

export default conversion;
