const plumbing = [
  {
    id: 243131485,
    type: "checkbox",
    label: "Wofür benötigen Sie einen Klempnerdienst ?",
    options: [
      {
        id: 415723906,
        label: "Verstopfungen und Lecks",
        des: "Verstopfte Rohre, tropfender Wasserhahn usw.",
      },
      {
        id: 479161497,
        label: "Haushaltsgeräte",
        des: "Waschmaschine, Geschirrspüler usw.",
        credit: 8,
      },
      {
        id: 366677345,
        label: "Sanitärobjekte & Armaturen",
        des: "Wasserhahn, Badewanne, Duschkopf, Dusche, Toilette usw.",
        credit: 10,
      },
      {
        id: 273026338,
        label: "Rohrleitungen & Abwasser",
        des: "Rohraustausch in der Küche, Wasseranschluss im Garten, etc.",
      },
      {
        id: 762491314,
        label: "Heizkörper / Heizung",
      },
      {
        id: 601706794,
        label: "Kessel",
      },
      {
        id: 118427521,
        label: "Andere",
        credit: 10,
      },
    ],
  },
  {
    id: 415723906,
    type: "checkbox",
    label: "Welche Klempnerarbeiten müssen durchgeführt werden ?",
    options: [
      {
        label: "Verstopfter Abfluss",
        credit: 8,
      },
      {
        label: "Die Toilette spülen",
        credit: 5,
      },
      {
        label: "Tropfender Wasserhahn",
        credit: 3,
      },
      {
        label: "Leck",
        credit: 5,
      },
    ],
  },
  {
    id: 479161497,
    type: "checkbox",
    label: "Welche Sanitär-/Klempnerarbeiten müssen durchgeführt werden ?",
    options: [
      {
        id: 889295302,
        label: "Waschmaschine",
      },
      {
        id: 362663787,
        label: "Spülmaschine",
      },
      {
        id: 214329292,
        label: "Andere",
      },
    ],
  },
  {
    id: 889295302,
    type: "checkbox",
    label: "Um was für ein Haushaltsgerät handelt es sich ?",
    options: [
      {
        label: "Installieren oder ersetzen",
      },
      {
        label: "reparieren",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 362663787,
    type: "checkbox",
    label: "Um was für ein Haushaltsgerät handelt es sich ?",
    options: [
      {
        label: "Installieren oder ersetzen",
      },
      {
        label: "reparieren",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 214329292,
    type: "checkbox",
    label: "Um was für ein Haushaltsgerät handelt es sich ?",
    options: [
      {
        label: "Installieren oder ersetzen",
      },
      {
        label: "reparieren",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 366677345,
    type: "checkbox",
    label: "What work needs to be done for the household appliance  ?",
    options: [
      {
        id: 742233705,
        label: "Installieren / ersetzen",
      },
      {
        id: 411460503,
        label: "reparieren",
      },
    ],
  },
  {
    id: 742233705,
    type: "multibox",
    label: "Was muss eingebaut oder ausgetauscht werden ?",
    mainId: 975610483,
    options: [
      {
        label: "Badewanne",
      },
      {
        label: "Dusche",
      },
      {
        label: "Duschkabine",
      },
      {
        label: "Toilette",
      },
      {
        label: "Wasserhahn",
      },
      {
        label: "Waschbecken",
      },
      {
        label: "Bidet",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 975610483,
    type: "checkbox",
    label:
      "Wie viele Sanitärobjekte müssen insgesamt installiert bzw. ausgetauscht werden ?",
    options: [
      {
        label: "1",
      },
      {
        label: "2 oder 3",
      },
      {
        label: "4 oder mehr",
      },
    ],
  },
  {
    id: 411460503,
    type: "checkbox",
    label: "Gibt es ein Leck (tropfender Wasserhahn usw.) ?",
    options: [
      {
        id: 122842505,
        label: "Ja",
      },
      {
        id: 751316864,
        label: "NEIN",
      },
    ],
  },
  {
    id: 122842505,
    type: "checkbox",
    label: "Gibt es ein Leck (tropfender Wasserhahn usw.) ?",
    options: [
      {
        label: "Ja",
      },
      {
        label: "NEIN",
      },
    ],
  },
  {
    id: 751316864,
    type: "checkbox",
    label: "Gibt es ein Leck (tropfender Wasserhahn usw.) ?",
    options: [
      {
        label: "Ja",
      },
      {
        label: "NEIN",
      },
    ],
  },
  {
    id: 273026338,
    type: "checkbox",
    label: "Welche Klempnerarbeiten müssen durchgeführt werden ?",
    options: [
      {
        id: 839057637,
        label: "Installieren, anpassen oder ersetzen",
      },
      {
        id: 425823793,
        label: "reparieren",
      },
      {
        id: 904089452,
        label: "Andere",
        credit: 5,
      },
    ],
  },
  {
    id: 839057637,
    type: "checkbox",
    label: "Wie umfangreich sind die Klempnerarbeiten ?",
    options: [
      {
        label: "Kleinere Aufträge",
        des: "Z.B. Wasseranschluss im Garten, Wasserablauf Waschbecken installieren",
        credit: 10,
      },
      {
        label: "Ein Zimmer",
        des: "Z. B. Wasserleitung in der Küche ersetzen",
        credit: 10,
      },
      {
        label: "Mehrere Räume",
        des: "Z.B. komplette Neuverlegung der Wasserleitungen in Bad und Küche",
        credit: 35,
      },
      {
        label: "Ganzes Haus",
        credit: 55,
      },
    ],
  },
  {
    id: 425823793,
    type: "checkbox",
    label: "Wie umfangreich sind die Klempnerarbeiten ?",
    options: [
      {
        label: "Kleinere Aufträge",
        des: "Z.B. Wasseranschluss im Garten, Wasserablauf Waschbecken installieren",
        credit: 10,
      },
      {
        label: "Ein Zimmer",
        des: "Z. B. Wasserleitung in der Küche ersetzen",
        credit: 10,
      },
      {
        label: "Mehrere Räume",
        des: "Z.B. komplette Neuverlegung der Wasserleitungen in Bad und Küche",
        credit: 35,
      },
      {
        label: "Ganzes Haus",
        credit: 5,
      },
    ],
  },
  {
    id: 904089452,
    type: "checkbox",
    label: "How extensive is the plumbing work  ?",
    options: [
      {
        label: "Kleinere Aufträge",
        des: "Z.B. Wasseranschluss im Garten, Wasserablauf Waschbecken installieren",
      },
      {
        label: "Ein Zimmer",
        des: "Z. B. Wasserleitung in der Küche ersetzen",
      },
      {
        label: "Mehrere Räume",
        des: "Z.B. komplette Neuverlegung der Wasserleitungen in Bad und Küche",
      },
      {
        label: "Ganzes Haus",
      },
    ],
  },
  {
    id: 762491314,
    type: "checkbox",
    label: "Welche Arbeiten müssen erledigt werden ?",
    options: [
      {
        id: 368526993,
        label: "Kleinere Arbeiten (Entlüften, Spülen etc.)",
      },
      {
        id: 441754733,
        label: "Verschieben oder ersetzen",
      },
      {
        id: 753629662,
        label: "Andere",
        credit: 8,
      },
    ],
  },
  {
    id: 368526993,
    type: "checkbox",
    label: "Wie viele Heizkörper gibt es ?",
    options: [
      {
        label: "Eins",
        credit: 8,
      },
      {
        label: "Mehrere",
        credit: 20,
      },
    ],
  },
  {
    id: 441754733,
    type: "checkbox",
    label: "Wie viele Heizkörper müssen versetzt oder ausgetauscht werden ?",
    options: [
      {
        label: "1 Heizkörper",
        credit: 5,
      },
      {
        label: "2 bis 4 Heizkörper",
        credit: 10,
      },
      {
        label: "5 oder mehr Heizkörper",
        credit: 20,
      },
    ],
  },
  {
    id: 601706794,
    type: "checkbox",
    label: "Um was für einen Kessel handelt es sich ?",
    options: [
      {
        id: 837853795,
        label: "Gaskessel",
      },
      {
        id: 743433388,
        label: "Elektrokessel",
      },
      {
        id: 684556806,
        label: "Wasserpumpenkessel",
      },
      {
        id: 782803965,
        label: "Andere oder ich bin nicht sicher",
        credit: 10,
      },
    ],
  },
  {
    id: 837853795,
    type: "checkbox",
    label: "Welche Klempnerarbeiten müssen durchgeführt werden ?",
    options: [
      {
        label: "Entkalkung",
        credit: 5,
      },
      {
        label: "reparieren",

        credit: 10,
      },
      {
        label: "Service / Kontrolle",
        credit: 10,
      },
      {
        label: "Installieren / ersetzen",
        credit: 45,
      },
    ],
  },
  {
    id: 743433388,
    type: "checkbox",
    label: "Welche Klempnerarbeiten müssen durchgeführt werden ?",
    options: [
      {
        label: "Entkalkung",
        credit: 5,
      },
      {
        label: "reparieren",
        credit: 20,
      },
      {
        label: "Service / Kontrolle",
        credit: 20,
      },
      {
        label: "Installieren / ersetzen",
        credit: 45,
      },
    ],
  },
  {
    id: 684556806,
    type: "checkbox",
    label: "Welche Klempnerarbeiten müssen durchgeführt werden ?",
    options: [
      {
        label: "Entkalkung",
        credit: 5,
      },
      {
        label: "reparieren",
        credit: 20,
      },
      {
        label: "Service / Kontrolle",
        credit: 15,
      },
      {
        label: "Installieren / ersetzen",
        credit: 35,
      },
    ],
  },
];

export default plumbing;
