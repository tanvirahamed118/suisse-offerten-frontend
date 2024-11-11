const electrician = [
  {
    id: 255079093,
    type: "checkbox",
    label: "Quels services devraient être fournis ?",
    options: [
      {
        id: 227970460,
        label: "Installation/retrait des lampes",
        des: "Lampes, plafonniers, spots, etc.",
      },
      {
        id: 258158087,
        label: "Installations électriques en général",
        des: "Tirer des câbles électriques, réparer des interrupteurs, déplacer des prises, etc.",
        credit: 20,
      },
      {
        id: 664443419,
        label: "Configurer Internet/TV/téléphone",
        des: "Se connecter à Internet, poser des câbles à fibre optique, remplacer des câbles Ethernet, etc.",
        credit: 10,
      },
      {
        id: 236255198,
        label: "Autre",
        credit: 7,
      },
    ],
  },
  {
    id: 227970460,
    type: "checkbox",
    label: "Combien de lampes faut-il installer/retirer ?",
    options: [
      {
        id: 448069443,
        label: "1 à 3",
        credit: 5,
      },
      {
        id: 900518800,
        label: "4 à 6",
        credit: 8,
      },
      {
        id: 669375973,
        label: "7 à 9",
        credit: 13,
      },
      {
        id: 504909168,
        label: "10 ou plus",
        credit: 18,
      },
    ],
  },
  {
    id: 448069443,
    type: "inputBox",
    mainId: 482438246,
    label: "Quelle est la hauteur du plafond ?",
    options: [
      {
        label: "mètre",
      },
    ],
  },
  {
    id: 900518800,
    type: "inputBox",
    mainId: 482438246,
    label: "Quelle est la hauteur du plafond ?",
    options: [
      {
        label: "mètre",
      },
    ],
  },
  {
    id: 669375973,
    type: "inputBox",
    mainId: 482438246,
    label: "Quelle est la hauteur du plafond ?",
    options: [
      {
        label: "mètre",
      },
    ],
  },
  {
    id: 504909168,
    type: "inputBox",
    mainId: 482438246,
    label: "Quelle est la hauteur du plafond ?",
    options: [
      {
        label: "mètre",
      },
    ],
  },
  {
    id: 482438246,
    type: "multibox",
    mainId: 521184054,
    label: "De quel type de lampe s'agit-il ?",
    options: [
      { label: "Lampe de plafond" },
      { label: "Applique murale" },
      { label: "Pleins feux" },
      { label: "Lampe suspendue" },
      { label: "Lustre" },
      { label: "Lampadaire" },
      { label: "Autre" },
    ],
  },
  {
    id: 521184054,
    type: "inputBox",
    label:
      "En quelle année l'installation électrique a-t-elle été installée dans votre maison/appartement ?",
    options: [
      {
        label: "saisir",
      },
    ],
  },
  {
    id: 258158087,
    type: "multibox",
    mainId: 801489988,
    label: "De quel travail avez-vous besoin exactement ?",
    options: [
      {
        label: "Interrupteur d'éclairage",
      },
      { label: "Prise de courant" },
      { label: "Câble" },
      { label: "Distributrice" },
      { label: "Autre" },
    ],
  },
  {
    id: 801489988,
    type: "checkbox",
    label: "Voulez-vous une preuve de sécurité au travail ?",
    headline:
      "Un certificat de sécurité certifie que l'installation électrique est conforme aux exigences des articles 3 et 4 de l'ordonnance sur les installations à basse tension NIV. Le propriétaire est responsable de la possession du certificat de sécurité et de sa mise à jour.",
    options: [
      {
        id: 249091099,
        label: "Oui",
      },
      {
        id: 683520304,
        label: "Non",
      },
    ],
  },
  {
    id: 249091099,
    type: "inputBox",
    label:
      "En quelle année l'installation électrique a-t-elle été installée dans votre maison/appartement ?",
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
      "En quelle année l'installation électrique a-t-elle été installée dans votre maison/appartement ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 664443419,
    type: "checkbox",
    label: "De quel travail avez-vous besoin exactement ?",
    options: [
      {
        id: 279386903,
        label: "Configurer Internet ou changer de fournisseur Internet",
      },
      {
        id: 513030561,
        label: "Installation TV",
      },
      {
        id: 451266050,
        label: "Autre",
      },
    ],
  },
  {
    id: 279386903,
    type: "checkbox",
    label: "Vers quel fournisseur allez-vous changer ?",
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
        label: "Autre",
      },
    ],
  },
  {
    id: 709365061,
    type: "datebox",
    mainId: 793568090,
    label: "A quelle date et à quelle heure Internet sera activé ?",
    options: [
      {
        label: "saisir",
      },
    ],
  },

  {
    id: 793568090,
    type: "inputBox",
    mainId: 110857851,
    label: "Quel est le numéro du terminal ?",
    options: [
      {
        label: "saisir",
      },
    ],
  },

  {
    id: 830552512,
    type: "inputBox",
    mainId: 916413474,
    label: "Quel est le numéro du terminal ?",
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
    label: "Quel est le numéro du terminal ?",
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
    label: "Quel est le numéro du terminal ?",
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
    label: "Quel est le numéro du terminal ?",
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
    label: "Quel est le numéro du terminal ?",
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
    label: "Quel est le numéro du terminal ?",
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
    label: "Quel est le numéro du terminal ?",
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
    label: "Quel est le numéro du terminal ?",
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
    label: "Quel est le numéro du terminal ?",
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
    label: "Quel est le numéro du terminal ?",
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
    label: "Quel est le numéro du terminal ?",
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
    label: "Quel est le numéro du terminal ?",
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
    label: "Quel est le numéro du terminal ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 110857851,
    type: "checkbox",
    label: "De quel type de connexion s'agit-il ?",
    options: [
      {
        label: "Connexion en cuivre",
      },
      {
        label: "Connexion fibre optique",
      },
      {
        label: "Non spécifié",
      },
    ],
  },
  {
    id: 916413474,
    type: "checkbox",
    label: "De quel type de connexion s'agit-il ?",
    options: [
      {
        label: "Connexion en cuivre",
      },
      {
        label: "Connexion fibre optique",
      },
      {
        label: "Non spécifié",
      },
    ],
  },
  {
    id: 963002516,
    type: "checkbox",
    label: "De quel type de connexion s'agit-il ?",
    options: [
      {
        label: "Connexion en cuivre",
      },
      {
        label: "Connexion fibre optique",
      },
      {
        label: "Non spécifié",
      },
    ],
  },
  {
    id: 773423423,
    type: "checkbox",
    label: "De quel type de connexion s'agit-il ?",
    options: [
      {
        label: "Connexion en cuivre",
      },
      {
        label: "Connexion fibre optique",
      },
      {
        label: "Non spécifié",
      },
    ],
  },
  {
    id: 831515365,
    type: "checkbox",
    label: "De quel type de connexion s'agit-il ?",
    options: [
      {
        label: "Connexion en cuivre",
      },
      {
        label: "Connexion fibre optique",
      },
      {
        label: "Non spécifié",
      },
    ],
  },
  {
    id: 192110839,
    type: "checkbox",
    label: "De quel type de connexion s'agit-il ?",
    options: [
      {
        label: "Connexion en cuivre",
      },
      {
        label: "Connexion fibre optique",
      },
      {
        label: "Non spécifié",
      },
    ],
  },
  {
    id: 624915575,
    type: "checkbox",
    label: "De quel type de connexion s'agit-il ?",
    options: [
      {
        label: "Connexion en cuivre",
      },
      {
        label: "Connexion fibre optique",
      },
      {
        label: "Non spécifié",
      },
    ],
  },
  {
    id: 178694068,
    type: "checkbox",
    label: "De quel type de connexion s'agit-il ?",
    options: [
      {
        label: "Connexion en cuivre",
      },
      {
        label: "Connexion fibre optique",
      },
      {
        label: "Non spécifié",
      },
    ],
  },
  {
    id: 619942697,
    type: "checkbox",
    label: "De quel type de connexion s'agit-il ?",
    options: [
      {
        label: "Connexion en cuivre",
      },
      {
        label: "Connexion fibre optique",
      },
      {
        label: "Non spécifié",
      },
    ],
  },
  {
    id: 867192152,
    type: "checkbox",
    label: "De quel type de connexion s'agit-il ?",
    options: [
      {
        label: "Connexion en cuivre",
      },
      {
        label: "Connexion fibre optique",
      },
      {
        label: "Non spécifié",
      },
    ],
  },
  {
    id: 907636913,
    type: "checkbox",
    label: "De quel type de connexion s'agit-il ?",
    options: [
      {
        label: "Connexion en cuivre",
      },
      {
        label: "Connexion fibre optique",
      },
      {
        label: "Non spécifié",
      },
    ],
  },
  {
    id: 364814151,
    type: "checkbox",
    label: "De quel type de connexion s'agit-il ?",
    options: [
      {
        label: "Connexion en cuivre",
      },
      {
        label: "Connexion fibre optique",
      },
      {
        label: "Non spécifié",
      },
    ],
  },
  {
    id: 326025855,
    type: "checkbox",
    label: "De quel type de connexion s'agit-il ?",
    options: [
      {
        label: "Connexion en cuivre",
      },
      {
        label: "Connexion fibre optique",
      },
      {
        label: "Non spécifié",
      },
    ],
  },
  {
    id: 331559268,
    type: "checkbox",
    label: "De quel type de connexion s'agit-il ?",
    options: [
      {
        label: "Connexion en cuivre",
      },
      {
        label: "Connexion fibre optique",
      },
      {
        label: "Non spécifié",
      },
    ],
  },
];

export default electrician;
