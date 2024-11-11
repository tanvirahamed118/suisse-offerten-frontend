import { what_kind_glass_is_it, what_kind_glass_it } from "../reuse-data";

const glassConstrucion = [
  {
    id: 9531832783,
    type: "checkbox",
    label: "Quels services devraient être fournis ?",
    options: [
      {
        id: 2170895133,
        label: "Pose ou remplacement de vitres",
        des: "Par exemple pour les fenêtres, les portes, etc.",
      },
      {
        id: 1214554081,
        label: "Construction d'une structure en verre",
        des: "Par exemple pour les balustrades, les murs, les cloisons de séparation, les balcons, les terrasses, les jardins d'hiver, les toitures, etc.",
      },
      {
        id: 8139213539,
        label: "Installation d'une trappe pour animaux",
        credit: 10,
      },
      {
        id: 4080139996,
        label: "Découpe de verre",
        credit: 10,
      },
      {
        id: 2818775976,
        label: "Autre",
        credit: 10,
      },
    ],
  },
  {
    id: 2170895133,
    type: "checkbox",
    label: "Combien de vitres faut-il installer ou remplacer ?",
    options: [
      {
        id: 9610361512,
        label: "1",
        credit: 5,
      },
      {
        id: 1014134270,
        label: "2 à 3",
        credit: 10,
      },
      {
        id: 1552562420,
        label: "4 ou plus",
        credit: 15,
      },
    ],
  },
  //   1 start
  {
    id: 9610361512,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_it(5642337363, 6376206192, 9409845929, 4751808003),
  },
  {
    id: 5642337363,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 6376206192,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 9409845929,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 4751808003,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  //   1 end
  //   2 start
  {
    id: 1014134270,
    type: "checkbox",
    label: "Les vitres sont-elles identiques (en taille et en vitrage) ?",
    options: [{ label: "Oui", id: 4383194217 }, { label: "Non" }],
  },
  {
    id: 4383194217,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_it(5642337363, 6376206192, 9409845929, 4751808003),
  },
  {
    id: 5642337363,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 6376206192,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 9409845929,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 4751808003,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 487854228,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_it(5642337363, 6376206192, 9409845929, 4751808003),
  },
  {
    id: 5642337363,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 6376206192,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 9409845929,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 4751808003,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  //   2 end
  //   4 start
  {
    id: 1552562420,
    type: "checkbox",
    label: "Les vitres sont-elles identiques (en taille et en vitrage) ?",
    options: [{ label: "Oui", id: 4383194217 }, { label: "Non" }],
  },
  {
    id: 4383194217,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_it(5642337363, 6376206192, 9409845929, 4751808003),
  },
  {
    id: 5642337363,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 6376206192,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 9409845929,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 4751808003,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 487854228,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_it(5642337363, 6376206192, 9409845929, 4751808003),
  },
  {
    id: 5642337363,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 6376206192,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 9409845929,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 4751808003,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },

  //  constructions start
  {
    id: 1214554081,
    type: "checkbox",
    label: "Quel type de structure en verre ?",
    options: [
      { id: 6853366736, label: "Balustrade", credit: 15 },
      { id: 4050637144, label: "Cloison / séparation de pièce", credit: 15 },
      {
        id: 883145416,
        label: "Balcon / Terrasse / Jardin d'hiver",
        credit: 15,
      },
      { id: 2304019586, label: "Toiture", credit: 20 },
      { id: 950374485, label: "Autre", credit: 10 },
    ],
  },
  {
    id: 6853366736,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_it(5642337363, 6376206192, 9409845929, 4751808003),
  },
  {
    id: 5642337363,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 6376206192,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 9409845929,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 4751808003,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 4050637144,
    type: "checkbox",
    label: "Does it have a sliding element ?",
    options: [
      { label: "Oui", id: 4383194217 },
      { label: "Non", id: 487854228 },
    ],
  },
  {
    id: 4383194217,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_it(5642337363, 6376206192, 9409845929, 4751808003),
  },
  {
    id: 5642337363,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 6376206192,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 9409845929,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 4751808003,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 487854228,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_it(5642337363, 6376206192, 9409845929, 4751808003),
  },
  {
    id: 5642337363,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 6376206192,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 9409845929,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 4751808003,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 2304019586,
    type: "checkbox",
    label: "Does it have a sliding element",
    options: what_kind_glass_it(5642337363, 6376206192, 9409845929, 4751808003),
  },
  {
    id: 5642337363,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 6376206192,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 9409845929,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 4751808003,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  //  constructions end

  //   installation start
  {
    id: 8139213539,
    type: "checkbox",
    label: "Où doit être installée la trappe pour animaux ?",
    options: [
      { id: 9530653188, label: "Fenêtre" },
      { id: 9387356486, label: "Porte" },
      { id: 7513293756, label: "Mur" },
      { id: 3293964537, label: "Autre part" },
    ],
  },
  // Fenêtre
  {
    id: 9530653188,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_is_it(6661934350, 4321013931, 7392112377),
  },
  {
    id: 6661934350,
    type: "doubleInput",
    mainId: 3961210553,
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 4321013931,
    type: "doubleInput",
    mainId: 3961210553,
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 7392112377,
    type: "doubleInput",
    mainId: 3961210553,
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 3961210553,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: [
      { id: 1902139456, label: "Oui, the animal flap is already there" },
      {
        id: 2880213523,
        label: "Non, the animal flap still needs to be purchased",
      },
    ],
  },
  {
    id: 1902139456,
    type: "checkbox",
    label: "Pour quel animal est destinée la trappe à animaux ?",
    options: [{ label: "Chatte" }, { label: "Chienne" }, { label: "Autre" }],
  },
  {
    id: 2880213523,
    type: "checkbox",
    label: "Pour quel animal est destinée la trappe à animaux ?",
    options: [{ label: "Chatte" }, { label: "Chienne" }, { label: "Autre" }],
  },
  // Fenêtre
  // door
  {
    id: 9387356486,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_is_it(6661934350, 4321013931, 7392112377),
  },
  {
    id: 6661934350,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 4321013931,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 7392112377,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 3961210553,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [
      { id: 1902139456, label: "Oui, the animal flap is already there" },
      {
        id: 2880213523,
        label: "Non, the animal flap still needs to be purchased",
      },
    ],
  },
  {
    id: 1902139456,
    type: "checkbox",
    label: "Pour quel animal est destinée la trappe à animaux ?",
    options: [{ label: "Chatte" }, { label: "Chienne" }, { label: "Autre" }],
  },
  {
    id: 2880213523,
    type: "checkbox",
    label: "Pour quel animal est destinée la trappe à animaux ?",
    options: [{ label: "Chatte" }, { label: "Chienne" }, { label: "Autre" }],
  },
  // door
  // wall
  {
    id: 7513293756,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_is_it(6661934350, 4321013931, 7392112377),
  },
  {
    id: 6661934350,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 4321013931,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 7392112377,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 3961210553,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: [
      { id: 1902139456, label: "Oui, the animal flap is already there" },
      {
        id: 2880213523,
        label: "Non, the animal flap still needs to be purchased",
      },
    ],
  },
  {
    id: 1902139456,
    type: "checkbox",
    label: "Pour quel animal est destinée la trappe à animaux ?",
    options: [{ label: "Chatte" }, { label: "Chienne" }, { label: "Autre" }],
  },
  {
    id: 2880213523,
    type: "checkbox",
    label: "Pour quel animal est destinée la trappe à animaux ?",
    options: [{ label: "Chatte" }, { label: "Chienne" }, { label: "Autre" }],
  },
  // wall
  // Autre
  {
    id: 3293964537,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_glass_is_it(6661934350, 4321013931, 7392112377),
  },
  {
    id: 6661934350,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 4321013931,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 7392112377,
    type: "doubleInput",
    label: "De quel type de verre s'agit-il ?",
    options: [{ height: "Hauteur en cm", width: "Largeur en cm" }],
  },
  {
    id: 3961210553,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: [
      { id: 1902139456, label: "Oui, the animal flap is already there" },
      {
        id: 2880213523,
        label: "Non, the animal flap still needs to be purchased",
      },
    ],
  },
  {
    id: 1902139456,
    type: "checkbox",
    label: "Pour quel animal est destinée la trappe à animaux ?",
    options: [{ label: "Chatte" }, { label: "Chienne" }, { label: "Autre" }],
  },
  {
    id: 2880213523,
    type: "checkbox",
    label: "Pour quel animal est destinée la trappe à animaux ?",
    options: [{ label: "Chatte" }, { label: "Chienne" }, { label: "Autre" }],
  },
  // Autre
  // installation end

  // glass cutting
  {
    id: 4080139996,
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
