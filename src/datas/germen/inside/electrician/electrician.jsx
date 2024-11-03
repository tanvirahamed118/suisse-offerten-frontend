const electrician = [
  {
    id: 255079093,
    type: "checkbox",
    label: "Welche Leistungen sollen erbracht werden ?",
    options: [
      {
        id: 227970460,
        label: "Lampen einbauen/entfernen",
        des: "Lampen, Deckenleuchten, Spots, etc.",
      },
      {
        id: 258158087,
        label: "Elektroinstallationen allgemein",
        des: "Stromkabel einziehen, Lichtschalter reparieren, Steckdosen versetzen, etc.",
        credit: 20,
      },
      {
        id: 664443419,
        label: "Internet/TV/Telefon einrichten",
        des: "Anbindung ans Internet, Verlegung von Glasfaserkabeln, Ethernet-Kabel austauschen, etc.",
        credit: 10,
      },
      {
        id: 236255198,
        label: " Andere",
        credit: 7,
      },
    ],
  },
  {
    id: 227970460,
    type: "checkbox",
    label: "Wie viele Lampen müssen installiert/entfernt werden ?",
    options: [
      {
        id: 448069443,
        label: "1 bis 3",
        credit: 5,
      },
      {
        id: 900518800,
        label: "4 bis 6",
        credit: 8,
      },
      {
        id: 669375973,
        label: "7 bis 9",
        credit: 13,
      },
      {
        id: 504909168,
        label: "10 oder mehr",
        credit: 18,
      },
    ],
  },
  {
    id: 448069443,
    type: "inputBox",
    mainId: 482438246,
    label: "Wie hoch ist die Deckenhöhe ?",
    options: [
      {
        label: "Meter",
      },
    ],
  },
  {
    id: 900518800,
    type: "inputBox",
    mainId: 482438246,
    label: " Wie hoch ist die Decke ?",
    options: [
      {
        label: "Meter",
      },
    ],
  },
  {
    id: 669375973,
    type: "inputBox",
    mainId: 482438246,
    label: " Wie hoch ist die Decke ?",
    options: [
      {
        label: "Meter",
      },
    ],
  },
  {
    id: 504909168,
    type: "inputBox",
    mainId: 482438246,
    label: " Wie hoch ist die Decke ?",
    options: [
      {
        label: "Meter",
      },
    ],
  },
  {
    id: 482438246,
    type: "multibox",
    mainId: 521184054,
    label: "Um welchen Lampentyp handelt es sich ?",
    options: [
      { label: "Deckenlampe" },
      { label: "Wandleuchte" },
      { label: "Scheinwerfer" },
      { label: "Hängelampe" },
      { label: "Kronleuchter" },
      { label: "Stehlampe" },
      { label: "Andere" },
    ],
  },
  {
    id: 521184054,
    type: "inputBox",
    label:
      "In welchem ​​Jahr wurde die Elektroinstallation in Ihrem Haus/Ihrer Wohnung installiert ?",
    options: [
      {
        label: "Eingang",
      },
    ],
  },
  {
    id: 258158087,
    type: "multibox",
    mainId: 801489988,
    label: "Welche Arbeit benötigen Sie genau ?",
    options: [
      {
        label: "Lichtschalter",
      },
      { label: "Steckdose" },
      { label: "Kabel" },
      { label: "Verteilerin" },
      { label: "Andere" },
    ],
  },
  {
    id: 801489988,
    type: "checkbox",
    label: "Sie wollen einen Nachweis zur Arbeitssicherheit ?",
    headline:
      "Ein Sicherheitszertifikat bescheinigt, dass die elektrische Anlage den Anforderungen der Niederspannungsinstallationsverordnung NIV Artikel 3 und 4 entspricht. Der Eigentümer ist dafür verantwortlich, dass das Sicherheitszertifikat vorhanden ist und auf dem neuesten Stand gehalten wird.",
    options: [
      {
        id: 249091099,
        label: "Ja",
      },
      {
        id: 683520304,
        label: "NEIN",
      },
    ],
  },
  {
    id: 249091099,
    type: "inputBox",
    label:
      "In welchem ​​Jahr wurde die Elektroinstallation in Ihrem Haus/Ihrer Wohnung installiert ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 683520304,
    type: "inputBox",
    label:
      "In welchem ​​Jahr wurde die Elektroinstallation in Ihrem Haus/Ihrer Wohnung installiert ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 664443419,
    type: "checkbox",
    label: "Welche Arbeit benötigen Sie genau ?",
    options: [
      {
        id: 279386903,
        label: "Set up Internet or change Internet provider",
      },
      {
        id: 513030561,
        label: "Installation TV",
      },
      {
        id: 451266050,
        label: "Andere",
      },
    ],
  },
  {
    id: 279386903,
    type: "checkbox",
    label: "Zu welchem ​​Anbieter wechselst du ?",
    options: [
      {
        id: 709365061,
        label: "Swisscom",
      },
      {
        id: 803722682,
        label: "Sunrise",
      },
      {
        id: 420566275,
        label: "UPC Cablecom",
      },
      {
        id: 797296427,
        label: "Salt",
      },
      {
        id: 253331502,
        label: "Teleboy",
      },
      {
        id: 648734745,
        label: "Mytel",
      },
      {
        id: 560747342,
        label: "Yallo",
      },
      {
        id: 717595947,
        label: "VTX",
      },
      {
        id: 958313458,
        label: "Tele4U",
      },
      {
        id: 151710343,
        label: "green.ch",
      },
      {
        id: 758240630,
        label: "Sasag",
      },
      {
        id: 374636996,
        label: "Quickline",
      },
      {
        id: 414561374,
        label: "Citycable",
      },
      {
        id: 334912760,
        label: "broadband.ch",
      },
      {
        id: 545733669,
        label: "Andere",
      },
    ],
  },
  {
    id: 709365061,
    type: "datebox",
    mainId: 793568090,
    label:
      "An welchem ​​Datum und zu welcher Uhrzeit wird das Internet freigeschaltet ?",
    options: [
      {
        label: "Eingang",
      },
    ],
  },

  {
    id: 793568090,
    type: "inputBox",
    mainId: 110857851,
    label: "Wie lautet die Terminalnummer ?",
    options: [
      {
        label: "Eingang",
      },
    ],
  },

  {
    id: 830552512,
    type: "inputBox",
    mainId: 916413474,
    label: "Wie lautet die Terminalnummer ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 528353797,
    type: "inputBox",
    mainId: 963002516,
    label: "Wie lautet die Terminalnummer ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 182466259,
    type: "inputBox",
    mainId: 773423423,
    label: "Wie lautet die Terminalnummer ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 845830979,
    type: "inputBox",
    mainId: 831515365,
    label: "Wie lautet die Terminalnummer ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 457976675,
    type: "inputBox",
    mainId: 192110839,
    label: "Wie lautet die Terminalnummer ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 460518748,
    type: "inputBox",
    mainId: 624915575,
    label: "Wie lautet die Terminalnummer ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 313765898,
    type: "inputBox",
    mainId: 178694068,
    label: "Wie lautet die Terminalnummer ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 451722020,
    type: "inputBox",
    mainId: 619942697,
    label: "Wie lautet die Terminalnummer ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 775656622,
    type: "inputBox",
    mainId: 867192152,
    label: "Wie lautet die Terminalnummer ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 374469056,
    type: "inputBox",
    mainId: 907636913,
    label: "Wie lautet die Terminalnummer ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 748888770,
    type: "inputBox",
    mainId: 364814151,
    label: "Wie lautet die Terminalnummer ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 573674877,
    type: "inputBox",
    mainId: 326025855,
    label: "Wie lautet die Terminalnummer ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 584292744,
    type: "inputBox",
    mainId: 331559268,
    label: "Wie lautet die Terminalnummer ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 110857851,
    type: "checkbox",
    label: "Um welche Art von Verbindung handelt es sich ?",
    options: [
      {
        label: "Kupferanschluss",
      },
      {
        label: "Glasfaseranschluss",
      },
      {
        label: "nicht angegeben",
      },
    ],
  },
  {
    id: 916413474,
    type: "checkbox",
    label: "Um welche Art von Verbindung handelt es sich ?",
    options: [
      {
        label: "Kupferanschluss",
      },
      {
        label: "Glasfaseranschluss",
      },
      {
        label: "nicht angegeben",
      },
    ],
  },
  {
    id: 963002516,
    type: "checkbox",
    label: "Um welche Art von Verbindung handelt es sich ?",
    options: [
      {
        label: "Kupferanschluss",
      },
      {
        label: "Glasfaseranschluss",
      },
      {
        label: "nicht angegeben",
      },
    ],
  },
  {
    id: 773423423,
    type: "checkbox",
    label: "Um welche Art von Verbindung handelt es sich ?",
    options: [
      {
        label: "Kupferanschluss",
      },
      {
        label: "Glasfaseranschluss",
      },
      {
        label: "nicht angegeben",
      },
    ],
  },
  {
    id: 831515365,
    type: "checkbox",
    label: "Um welche Art von Verbindung handelt es sich ?",
    options: [
      {
        label: "Kupferanschluss",
      },
      {
        label: "Glasfaseranschluss",
      },
      {
        label: "nicht angegeben",
      },
    ],
  },
  {
    id: 192110839,
    type: "checkbox",
    label: "Um welche Art von Verbindung handelt es sich ?",
    options: [
      {
        label: "Kupferanschluss",
      },
      {
        label: "Glasfaseranschluss",
      },
      {
        label: "nicht angegeben",
      },
    ],
  },
  {
    id: 624915575,
    type: "checkbox",
    label: "Um welche Art von Verbindung handelt es sich ?",
    options: [
      {
        label: "Kupferanschluss",
      },
      {
        label: "Glasfaseranschluss",
      },
      {
        label: "nicht angegeben",
      },
    ],
  },
  {
    id: 178694068,
    type: "checkbox",
    label: "Um welche Art von Verbindung handelt es sich ?",
    options: [
      {
        label: "Kupferanschluss",
      },
      {
        label: "Glasfaseranschluss",
      },
      {
        label: "nicht angegeben",
      },
    ],
  },
  {
    id: 619942697,
    type: "checkbox",
    label: "Um welche Art von Verbindung handelt es sich ?",
    options: [
      {
        label: "Kupferanschluss",
      },
      {
        label: "Glasfaseranschluss",
      },
      {
        label: "nicht angegeben",
      },
    ],
  },
  {
    id: 867192152,
    type: "checkbox",
    label: "Um welche Art von Verbindung handelt es sich ?",
    options: [
      {
        label: "Kupferanschluss",
      },
      {
        label: "Glasfaseranschluss",
      },
      {
        label: "nicht angegeben",
      },
    ],
  },
  {
    id: 907636913,
    type: "checkbox",
    label: "Um welche Art von Verbindung handelt es sich ?",
    options: [
      {
        label: "Kupferanschluss",
      },
      {
        label: "Glasfaseranschluss",
      },
      {
        label: "nicht angegeben",
      },
    ],
  },
  {
    id: 364814151,
    type: "checkbox",
    label: "Um welche Art von Verbindung handelt es sich ?",
    options: [
      {
        label: "Kupferanschluss",
      },
      {
        label: "Glasfaseranschluss",
      },
      {
        label: "nicht angegeben",
      },
    ],
  },
  {
    id: 326025855,
    type: "checkbox",
    label: "Um welche Art von Verbindung handelt es sich ?",
    options: [
      {
        label: "Kupferanschluss",
      },
      {
        label: "Glasfaseranschluss",
      },
      {
        label: "nicht angegeben",
      },
    ],
  },
  {
    id: 331559268,
    type: "checkbox",
    label: "Um welche Art von Verbindung handelt es sich ?",
    options: [
      {
        label: "Kupferanschluss",
      },
      {
        label: "Glasfaseranschluss",
      },
      {
        label: "nicht angegeben",
      },
    ],
  },
];

export default electrician;
