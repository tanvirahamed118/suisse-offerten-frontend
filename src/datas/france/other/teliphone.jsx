const teliphones = [
  {
    id: 824814971,
    type: "checkbox",
    label: "Où avez-vous besoin d'un service ?",
    options: [
      {
        id: 748988738,
        label: "Connexion à Internet / TV / Téléphone",
        des: "Par exemple, la configuration d'une connexion Internet, de télévision numérique ou téléphonique",
        credit: 4,
      },
      {
        id: 846424479,
        label: "WLAN / Réseau / Câble",
        des: "Par exemple, la configuration d'un routeur, l'installation d'un système téléphonique, la configuration d'un réseau domestique, etc..",
        credit: 4,
      },
      {
        id: 137996772,
        label: "TV / Audio / Home Cinéma",
        des: "Par exemple, la configuration d'une Smart TV, l'installation d'un système satellite, l'installation d'un projecteur",
        credit: 5,
      },
      {
        id: 808157001,
        label: "Ordinateurs et logiciels",
        des: "Par exemple, l'installation de Windows, la configuration d'imprimantes, la configuration de logiciels, les mises à niveau, les solutions cloud, etc.",
        credit: 7,
      },
      {
        id: 510517012,
        label: "Réparation d'appareils électriques",
        des: "Par exemple, télévision, tablette, smartphone, etc.",
        credit: 7,
      },
      {
        id: 108868283,
        label: "Maison intelligente",
        des: "Par exemple, le contrôle de la maison, Google Home, etc.",
        credit: 5,
      },
      {
        id: 938596085,
        label: "Autre ou plusieurs des réponses ci-dessus",
        credit: 4,
      },
    ],
  },
  {
    id: 510517012,
    type: "checkbox",
    label: "Quel appareil ?",
    options: [
      {
        id: 407676395,
        label: "TV",
      },
      {
        id: 942681280,
        label: "Smartphones",
      },
      {
        id: 955390127,
        label: "Ordinateur portable/ordinateur",
      },
      {
        id: 484172037,
        label: "Autre",
      },
    ],
  },
  {
    id: 407676395,
    type: "checkbox",
    label: "Qu'est-ce qui doit être réparé ?",
    options: [
      {
        label: "Écran",
      },
      {
        label: "Logiciel",
      },
      {
        label: "Mécanique",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 942681280,
    type: "checkbox",
    label: "Qu'est-ce qui doit être réparé ?",
    options: [
      {
        label: "Écran",
      },
      {
        label: "Logiciel",
      },
      {
        label: "Mécanique",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 955390127,
    type: "checkbox",
    label: "Qu'est-ce qui doit être réparé ?",
    options: [
      {
        label: "Écran",
      },
      {
        label: "Logiciel",
      },
      {
        label: "Mécanique",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 484172037,
    type: "checkbox",
    label: "Qu'est-ce qui doit être réparé ?",
    options: [
      {
        label: "Écran",
      },
      {
        label: "Logiciel",
      },
      {
        label: "Mécanique",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 846424479,
    type: "checkbox",
    label: "Que nécessite un service ?",
    options: [
      {
        id: 367131319,
        label: "Wi-Fi",
      },
      {
        id: 658627804,
        label: "Réseau",
      },
      {
        id: 604937806,
        label: "Câble",
      },
      {
        id: 178283679,
        label: "Autre",
      },
    ],
  },
  {
    id: 367131319,
    type: "checkbox",
    label: "Quel type de réseau ?",
    options: [
      {
        id: 501522055,
        label: "Cuivre",
      },
      {
        id: 767106828,
        label: "Fibre optique",
      },
      {
        id: 802919843,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 501522055,
    type: "modelbox",
    label: "Longueur approximative du réseau :",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 767106828,
    type: "modelbox",
    label: "Longueur approximative du réseau :",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 802919843,
    type: "modelbox",
    label: "Longueur approximative du réseau :",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 658627804,
    type: "checkbox",
    label: "Quel type de réseau ?",
    options: [
      {
        id: 501522055,
        label: "Cuivre",
      },
      {
        id: 767106828,
        label: "Fibre optique",
      },
      {
        id: 802919843,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 501522055,
    type: "modelbox",
    label: "Longueur approximative du réseau :",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 767106828,
    type: "modelbox",
    label: "Longueur approximative du réseau :",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 802919843,
    type: "modelbox",
    label: "Longueur approximative du réseau :",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 604937806,
    type: "checkbox",
    label: "Quel type de réseau ?",
    options: [
      {
        id: 501522055,
        label: "Cuivre",
      },
      {
        id: 767106828,
        label: "Fibre optique",
      },
      {
        id: 802919843,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 501522055,
    type: "modelbox",
    label: "Longueur approximative du réseau :",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 767106828,
    type: "modelbox",
    label: "Longueur approximative du réseau :",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 802919843,
    type: "modelbox",
    label: "Longueur approximative du réseau :",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 178283679,
    type: "checkbox",
    label: "Quel type de réseau ?",
    options: [
      {
        id: 501522055,
        label: "Cuivre",
      },
      {
        id: 767106828,
        label: "Fibre optique",
      },
      {
        id: 802919843,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 501522055,
    type: "modelbox",
    label: "Longueur approximative du réseau :",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 767106828,
    type: "modelbox",
    label: "Longueur approximative du réseau :",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 802919843,
    type: "modelbox",
    label: "Longueur approximative du réseau :",
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
    label: "De quel service avez-vous besoin concernant l'activation ?",
    options: [
      {
        label: "Connexion Internet",
      },
      {
        label: "Connexion TV",
      },
      {
        label: "Connexion téléphonique",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 399454871,
    type: "checkbox",
    label: "Quel prestataire ?",
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
        label: "Autre",
      },
    ],
  },
  {
    id: 814129570,
    type: "datebox",
    label: "Quelle est la date d'activation ?",
    options: [{ label: "" }],
  },
  {
    id: 375789978,
    type: "datebox",
    label: "Quelle est la date d'activation ?",
    options: [{ label: "" }],
  },
  {
    id: 950027940,
    type: "datebox",
    label: "Quelle est la date d'activation ?",
    options: [{ label: "" }],
  },
  {
    id: 166037260,
    type: "datebox",
    label: "Quelle est la date d'activation ?",
    options: [{ label: "" }],
  },
  {
    id: 484310437,
    type: "datebox",
    label: "Quelle est la date d'activation ?",
    options: [{ label: "" }],
  },
  {
    id: 853966767,
    type: "datebox",
    label: "Quelle est la date d'activation ?",
    options: [{ label: "" }],
  },
  {
    id: 141424718,
    type: "datebox",
    label: "Quelle est la date d'activation ?",
    options: [{ label: "" }],
  },
  {
    id: 344343911,
    type: "datebox",
    label: "Quelle est la date d'activation ?",
    options: [{ label: "" }],
  },
  {
    id: 566798271,
    type: "datebox",
    label: "Quelle est la date d'activation ?",
    options: [{ label: "" }],
  },
  {
    id: 215497643,
    type: "datebox",
    label: "Quelle est la date d'activation ?",
    options: [{ label: "" }],
  },
  {
    id: 601635317,
    type: "datebox",
    label: "Quelle est la date d'activation ?",
    options: [{ label: "" }],
  },
  {
    id: 798822688,
    type: "datebox",
    label: "Quelle est la date d'activation ?",
    options: [{ label: "" }],
  },
  {
    id: 652278149,
    type: "datebox",
    label: "Quelle est la date d'activation ?",
    options: [{ label: "" }],
  },
  {
    id: 686031692,
    type: "datebox",
    label: "Quelle est la date d'activation ?",
    options: [{ label: "" }],
  },
  {
    id: 291692695,
    type: "datebox",
    label: "Quelle est la date d'activation ?",
    options: [{ label: "" }],
  },
];

export default teliphones;
