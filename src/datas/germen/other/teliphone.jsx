const teliphones = [
  {
    id: 824814971,
    type: "checkbox",
    label: "Wo benötigen Sie eine Dienstleistung ?",
    options: [
      {
        id: 748988738,
        label: "Verbindung zum Internet / Fernseher / Telefon herstellen",
        des: "Z. B. Einrichten eines Internet-, Digital-Fernseher- oder Telefonanschlusses",
        credit: 4,
      },
      {
        id: 846424479,
        label: "WLAN / Netzwerk / Kabel",
        des: "Z. B. Router einrichten, Telefonanlage installieren, Heimnetzwerk einrichten, etc.",
        credit: 4,
      },
      {
        id: 137996772,
        label: "Fernseher / Audio / Heimkino",
        des: "Z.B. Einrichten eines Smart TVs, Installieren einer Satellitenanlage, Installieren eines Projektors",
        credit: 5,
      },
      {
        id: 808157001,
        label: "Computer und Software",
        des: "Z. B. Windows installieren, Drucker einrichten, Software einrichten, Upgrades, Cloud-Lösungen usw.",
        credit: 7,
      },
      {
        id: 510517012,
        label: "Reparatur von Elektrogeräten",
        des: "Z. B. Fernseher, Tablet, Smartphone usw.",
        credit: 7,
      },
      {
        id: 108868283,
        label: "Smarthome",
        des: "Z. B. Haussteuerung, Google Home usw.",
        credit: 5,
      },
      {
        id: 938596085,
        label: "Andere oder mehrere der oben genannten",
        credit: 4,
      },
    ],
  },
  {
    id: 510517012,
    type: "checkbox",
    label: "Welches Gerät ?",
    options: [
      {
        id: 407676395,
        label: "Fernseher",
      },
      {
        id: 942681280,
        label: "Smartphones",
      },
      {
        id: 955390127,
        label: "Laptop / Computer",
      },
      {
        id: 484172037,
        label: "Andere",
      },
    ],
  },
  {
    id: 407676395,
    type: "checkbox",
    label: "Was muss repariert werden ?",
    options: [
      {
        label: "Bildschirm",
      },
      {
        label: "Software",
      },
      {
        label: "Mechanik",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 942681280,
    type: "checkbox",
    label: "Was muss repariert werden ?",
    options: [
      {
        label: "Bildschirm",
      },
      {
        label: "Software",
      },
      {
        label: "Mechanik",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 955390127,
    type: "checkbox",
    label: "Was muss repariert werden ?",
    options: [
      {
        label: "Bildschirm",
      },
      {
        label: "Software",
      },
      {
        label: "Mechanik",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 484172037,
    type: "checkbox",
    label: "Was muss repariert werden ?",
    options: [
      {
        label: "Bildschirm",
      },
      {
        label: "Software",
      },
      {
        label: "Mechanik",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 846424479,
    type: "checkbox",

    label: "Was erfordert ein Dienst ?",
    options: [
      {
        id: 367131319,
        label: "W-lan",
      },
      {
        id: 658627804,
        label: "Netzwerk",
      },
      {
        id: 604937806,
        label: "Kabel",
      },
      {
        id: 178283679,
        label: "Andere",
      },
    ],
  },
  {
    id: 367131319,
    type: "checkbox",
    label: "Was für ein Netzwerk ?",
    options: [
      {
        id: 501522055,
        label: "Kupfer",
      },
      {
        id: 767106828,
        label: "Glasfaser",
      },
      {
        id: 802919843,
        label: "Ich weiß es nicht",
      },
    ],
  },
  {
    id: 501522055,
    type: "modelbox",
    label: "Ungefähre Länge des Netzwerks:",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 767106828,
    type: "modelbox",
    label: "Ungefähre Länge des Netzwerks:",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 802919843,
    type: "modelbox",
    label: "Ungefähre Länge des Netzwerks:",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 658627804,
    type: "checkbox",
    label: "Was für ein Netzwerk ?",
    options: [
      {
        id: 501522055,
        label: "Kupfer",
      },
      {
        id: 767106828,
        label: "Glasfaser",
      },
      {
        id: 802919843,
        label: "Ich weiß es nicht",
      },
    ],
  },
  {
    id: 501522055,
    type: "modelbox",
    label: "Ungefähre Länge des Netzwerks:",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 767106828,
    type: "modelbox",
    label: "Ungefähre Länge des Netzwerks:",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 802919843,
    type: "modelbox",
    label: "Ungefähre Länge des Netzwerks:",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 604937806,
    type: "checkbox",
    label: "Was für ein Netzwerk ?",
    options: [
      {
        id: 501522055,
        label: "Kupfer",
      },
      {
        id: 767106828,
        label: "Glasfaser",
      },
      {
        id: 802919843,
        label: "Ich weiß es nicht",
      },
    ],
  },
  {
    id: 501522055,
    type: "modelbox",
    label: "Ungefähre Länge des Netzwerks:",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 767106828,
    type: "modelbox",
    label: "Ungefähre Länge des Netzwerks:",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 802919843,
    type: "modelbox",
    label: "Ungefähre Länge des Netzwerks:",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 178283679,
    type: "checkbox",
    label: "Was für ein Netzwerk ?",
    options: [
      {
        id: 501522055,
        label: "Kupfer",
      },
      {
        id: 767106828,
        label: "Glasfaser",
      },
      {
        id: 802919843,
        label: "Ich weiß es nicht",
      },
    ],
  },
  {
    id: 501522055,
    type: "modelbox",
    label: "Ungefähre Länge des Netzwerks:",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 767106828,
    type: "modelbox",
    label: "Ungefähre Länge des Netzwerks:",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 802919843,
    type: "modelbox",
    label: "Ungefähre Länge des Netzwerks:",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 748988738,
    type: "multibox",
    mainId: 399454871,
    label: "Welchen Service benötigen Sie zur Aktivierung ?",
    options: [
      {
        label: "Internetverbindung",
      },
      {
        label: "Fernsehanschluss",
      },
      {
        label: "Telefonanschluss",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 399454871,
    type: "checkbox",
    label: "Welcher Anbieter ?",
    options: [
      {
        id: 814129570,
        label: "Swisscom",
      },
      {
        id: 375789978,
        label: "Sunrise",
      },
      {
        id: 950027940,
        label: "UPC",
      },
      {
        id: 166037260,
        label: "Salt",
      },
      {
        id: 484310437,
        label: "Teleboy",
      },
      {
        id: 853966767,
        label: "MiaTel",
      },
      {
        id: 141424718,
        label: "yallo",
      },
      {
        id: 344343911,
        label: "VTX",
      },
      {
        id: 566798271,
        label: "Tele4u",
      },
      {
        id: 215497643,
        label: "green.ch",
      },
      {
        id: 601635317,
        label: "sasag",
      },
      {
        id: 798822688,
        label: "Quickline",
      },
      {
        id: 652278149,
        label: "Citycable",
      },
      {
        id: 686031692,
        label: "broadband.ch",
      },
      {
        id: 291692695,
        label: "Andere",
      },
    ],
  },
  {
    id: 814129570,
    type: "datebox",
    label: "Wann ist das Aktivierungsdatum ?",
    options: [{ label: "" }],
  },
  {
    id: 375789978,
    type: "datebox",
    label: "Wann ist das Aktivierungsdatum ?",
    options: [{ label: "" }],
  },
  {
    id: 950027940,
    type: "datebox",
    label: "Wann ist das Aktivierungsdatum ?",
    options: [{ label: "" }],
  },
  {
    id: 166037260,
    type: "datebox",
    label: "Wann ist das Aktivierungsdatum ?",
    options: [{ label: "" }],
  },
  {
    id: 484310437,
    type: "datebox",
    label: "Wann ist das Aktivierungsdatum ?",
    options: [{ label: "" }],
  },
  {
    id: 853966767,
    type: "datebox",
    label: "Wann ist das Aktivierungsdatum ?",
    options: [{ label: "" }],
  },
  {
    id: 141424718,
    type: "datebox",
    label: "Wann ist das Aktivierungsdatum ?",
    options: [{ label: "" }],
  },
  {
    id: 344343911,
    type: "datebox",
    label: "Wann ist das Aktivierungsdatum ?",
    options: [{ label: "" }],
  },
  {
    id: 566798271,
    type: "datebox",
    label: "Wann ist das Aktivierungsdatum ?",
    options: [{ label: "" }],
  },
  {
    id: 215497643,
    type: "datebox",
    label: "Wann ist das Aktivierungsdatum ?",
    options: [{ label: "" }],
  },
  {
    id: 601635317,
    type: "datebox",
    label: "Wann ist das Aktivierungsdatum ?",
    options: [{ label: "" }],
  },
  {
    id: 798822688,
    type: "datebox",
    label: "Wann ist das Aktivierungsdatum ?",
    options: [{ label: "" }],
  },
  {
    id: 652278149,
    type: "datebox",
    label: "Wann ist das Aktivierungsdatum ?",
    options: [{ label: "" }],
  },
  {
    id: 686031692,
    type: "datebox",
    label: "Wann ist das Aktivierungsdatum ?",
    options: [{ label: "" }],
  },
  {
    id: 291692695,
    type: "datebox",
    label: "Wann ist das Aktivierungsdatum ?",
    options: [{ label: "" }],
  },
];

export default teliphones;
