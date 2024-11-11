const bricklayer = [
  {
    id: 939997513,
    type: "multibox",
    mainId: 234212078,
    label: "Que faut-il faire ?",
    options: [
      {
        label: "Mur",
      },
      {
        label: "Sol",
      },
      {
        label: "Portes-fenêtres",
      },
      {
        label: "Façade",
      },
      {
        label: "Balcon / Jardin d'hiver",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 234212078,
    type: "multibox",
    mainId: 448580108,
    label: "Que faut-il faire ?",
    options: [
      {
        label: "Coulée / bétonnage",
      },
      {
        label: "Abrasion / Plâtre",
      },
      {
        label: "Articulations",
      },
      {
        label: "Reconstruire",
      },
      {
        label: "Démolition / percée",
      },
      {
        label: "Percer",
      },
      {
        label: "Réparation",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 448580108,
    type: "checkbox",
    label: "Devez-vous apporter vous-même le matériel de construction ?",
    options: [
      {
        id: 727159075,
        label: "Oui",
      },
      {
        id: 673821165,
        label: "Non",
      },
      { id: 359208739, label: "Je ne sais pas" },
    ],
  },
  {
    id: 727159075,
    type: "checkbox",
    label: "Quelle est la taille approximative de la zone touchée ?",
    options: [
      {
        label: "Petite",
        des: "Par exemple une partie d’un mur, etc.",
        credit: 10,
      },
      {
        label: "Moyen",
        des: "Par exemple, un mur entier, une pièce, un sol, etc.",
        credit: 15,
      },
      {
        label: "Grande",
        des: "Par exemple, garage, extension, sous-sol, appartement, etc.",
        credit: 25,
      },
      {
        label: "Très grand",
        des: "Par exemple, toute la maison, etc.",
        credit: 35,
      },
    ],
  },
  {
    id: 673821165,
    type: "checkbox",
    label: "What is the approximate size of the affected area ?",
    options: [
      {
        label: "Petite",
        des: "Par exemple une partie d’un mur, etc.",
        credit: 10,
      },
      {
        label: "Moyen",
        des: "Par exemple, un mur entier, une pièce, un sol, etc.",
        credit: 15,
      },
      {
        label: "Grande",
        des: "Par exemple, garage, extension, sous-sol, appartement, etc.",
        credit: 25,
      },
      {
        label: "Très grand",
        des: "Par exemple, toute la maison, etc.",
        credit: 35,
      },
    ],
  },
  {
    id: 359208739,
    type: "checkbox",
    label: "What is the approximate size of the affected area ?",
    options: [
      {
        label: "Petite",
        des: "Par exemple une partie d’un mur, etc.",
        credit: 10,
      },
      {
        label: "Moyen",
        des: "Par exemple, un mur entier, une pièce, un sol, etc.",
        credit: 15,
      },
      {
        label: "Grande",
        des: "Par exemple, garage, extension, sous-sol, appartement, etc.",
        credit: 25,
      },
      {
        label: "Très grand",
        des: "Par exemple, toute la maison, etc.",
        credit: 35,
      },
    ],
  },
];
export default bricklayer;
