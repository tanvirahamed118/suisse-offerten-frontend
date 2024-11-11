import { what_kind_glass_is_it, what_kind_glass_it } from "../../reuse-data";

const glassConstrucion = [
  {
    id: 364958112,
    type: "checkbox",
    label: "Quels services devraient être fournis ?",
    options: [
      {
        id: 626292318,
        label: "Pose ou remplacement de vitres",
        des: "Par exemple pour les fenêtres, les portes, etc.",
      },
      {
        id: 659731144,
        label: "Construction d'une structure en verre",
        des: "Par exemple pour les balustrades, les murs, les cloisons de séparation, les balcons, les terrasses, les jardins d'hiver, les toitures, etc.",
      },
      {
        id: 487244186,
        label: "Installation d'une trappe pour animaux",
        credit: 10,
      },
      {
        id: 566800064,
        label: "Découpe de verre",
        credit: 10,
      },
      {
        id: 963442728,
        label: "Autre",
        credit: 10,
      },
    ],
  },
  {
    id: 626292318,
    type: "checkbox",
    label: "Combien de vitres faut-il installer ou remplacer ?",
    options: [
      {
        id: 954851093,
        label: "1",
        credit: 5,
      },
      {
        id: 907349252,
        label: "2 à 3",
        credit: 10,
      },
      {
        id: 473639302,
        label: "4 ou plus",
        credit: 15,
      },
    ],
  },
  //   1 start
  {
    id: 954851093,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  //   1 end
  //   2 start
  {
    id: 907349252,
    type: "checkbox",
    label: "Les vitres sont-elles identiques (en taille et en vitrage) ?",
    options: [{ label: "Oui", id: 613446522 }, { label: "Non" }],
  },
  {
    id: 613446522,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 487854228,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  //   2 end
  //   4 start
  {
    id: 473639302,
    type: "checkbox",
    label: "Les vitres sont-elles identiques (en taille et en vitrage) ?",
    options: [{ label: "Oui", id: 613446522 }, { label: "Non" }],
  },
  {
    id: 613446522,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 487854228,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },

  //  constructions start
  {
    id: 659731144,
    type: "checkbox",
    label: "Quel type de structure en verre ?",
    options: [
      { id: 944845095, label: "Balustrade", credit: 15 },
      { id: 569325115, label: "Cloison / séparation de pièce", credit: 15 },
      {
        id: 883145416,
        label: "Balcon / Terrasse / Jardin d'hiver",
        credit: 15,
      },
      { id: 725047458, label: "Toiture", credit: 20 },
      { id: 950374485, label: "Autre", credit: 10 },
    ],
  },
  {
    id: 944845095,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 569325115,
    type: "checkbox",
    label: "Does it have a sliding element ?",
    options: [
      { label: "Oui", id: 613446522 },
      { label: "Non", id: 487854228 },
    ],
  },
  {
    id: 613446522,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 487854228,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 725047458,
    type: "checkbox",
    label: "Does it have a sliding element",
    options: what_kind_glass_it(717058743, 933359243, 330440496, 418110905),
  },
  {
    id: 717058743,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 933359243,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 330440496,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 418110905,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  //  constructions end

  //   installation start
  {
    id: 487244186,
    type: "checkbox",
    label: "Où doit être installée la trappe pour animaux ?",
    options: [
      { id: 770964319, label: "Fenêtre" },
      { id: 942592026, label: "Porte" },
      { id: 431772169, label: "Mur" },
      { id: 794779735, label: "Autre part" },
    ],
  },
  // Fenêtre
  {
    id: 770964319,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_is_it(230627422, 619966390, 992165658),
  },
  {
    id: 230627422,
    type: "doubleInput",
    mainId: 869431863,
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 619966390,
    type: "doubleInput",
    mainId: 869431863,
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 992165658,
    type: "doubleInput",
    mainId: 869431863,
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 869431863,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: [
      { id: 363711932, label: "Oui, the animal flap is already there" },
      {
        id: 511289464,
        label: "Non, the animal flap still needs to be purchased",
      },
    ],
  },
  {
    id: 363711932,
    type: "checkbox",
    label: "Pour quel animal est destinée la trappe à animaux ?",
    options: [{ label: "Chatte" }, { label: "Chienne" }, { label: "Autre" }],
  },
  {
    id: 511289464,
    type: "checkbox",
    label: "Pour quel animal est destinée la trappe à animaux ?",
    options: [{ label: "Chatte" }, { label: "Chienne" }, { label: "Autre" }],
  },
  // Fenêtre
  // door
  {
    id: 942592026,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_is_it(230627422, 619966390, 992165658),
  },
  {
    id: 230627422,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 619966390,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 992165658,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 869431863,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [
      { id: 363711932, label: "Oui, the animal flap is already there" },
      {
        id: 511289464,
        label: "Non, the animal flap still needs to be purchased",
      },
    ],
  },
  {
    id: 363711932,
    type: "checkbox",
    label: "Pour quel animal est destinée la trappe à animaux ?",
    options: [{ label: "Chatte" }, { label: "Chienne" }, { label: "Autre" }],
  },
  {
    id: 511289464,
    type: "checkbox",
    label: "Pour quel animal est destinée la trappe à animaux ?",
    options: [{ label: "Chatte" }, { label: "Chienne" }, { label: "Autre" }],
  },
  // door
  // wall
  {
    id: 431772169,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_is_it(230627422, 619966390, 992165658),
  },
  {
    id: 230627422,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 619966390,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 992165658,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 869431863,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: [
      { id: 363711932, label: "Oui, the animal flap is already there" },
      {
        id: 511289464,
        label: "Non, the animal flap still needs to be purchased",
      },
    ],
  },
  {
    id: 363711932,
    type: "checkbox",
    label: "Pour quel animal est destinée la trappe à animaux ?",
    options: [{ label: "Chatte" }, { label: "Chienne" }, { label: "Autre" }],
  },
  {
    id: 511289464,
    type: "checkbox",
    label: "Pour quel animal est destinée la trappe à animaux ?",
    options: [{ label: "Chatte" }, { label: "Chienne" }, { label: "Autre" }],
  },
  // wall
  // Autre
  {
    id: 794779735,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_is_it(230627422, 619966390, 992165658),
  },
  {
    id: 230627422,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 619966390,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 992165658,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 869431863,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: [
      { id: 363711932, label: "Oui, the animal flap is already there" },
      {
        id: 511289464,
        label: "Non, the animal flap still needs to be purchased",
      },
    ],
  },
  {
    id: 363711932,
    type: "checkbox",
    label: "Pour quel animal est destinée la trappe à animaux ?",
    options: [{ label: "Chatte" }, { label: "Chienne" }, { label: "Autre" }],
  },
  {
    id: 511289464,
    type: "checkbox",
    label: "Pour quel animal est destinée la trappe à animaux ?",
    options: [{ label: "Chatte" }, { label: "Chienne" }, { label: "Autre" }],
  },
  // Autre
  // installation end

  // glass cutting
  {
    id: 566800064,
    type: "checkbox",
    label: "Le verre à couper est-il déjà là ?",
    options: [
      { label: "Oui, le verre est déjà là" },
      { label: "Non, j'ai besoin de verre aux dimensions exactes" },
    ],
  },
  // glass cutting
];

export default glassConstrucion;
