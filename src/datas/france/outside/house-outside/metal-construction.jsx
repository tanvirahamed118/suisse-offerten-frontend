import {
  how_big_is_approximately,
  how_big_is_metal_structure_approximately,
  how_many_goals,
  is_the_required_available,
} from "../../reuse-data";

const metalConstruction = [
  {
    id: 467558696,
    type: "checkbox",
    label: "Que nécessite un service ?",
    options: [
      {
        id: 425432382,
        label: "Balustrade",
        des: "Par exemple pour les escaliers, les balcons, etc.",
      },
      {
        id: 998833810,
        label: "Escaliers",
      },
      {
        id: 621442113,
        label: "Grille",
      },
      {
        id: 409898095,
        label: "Structure métallique sur mesure",
        des: "Par exemple, abri à vélos, sous-structure, mobilier, boîte aux lettres, etc.",
      },
      {
        id: 691649311,
        label: "Modification / Réparation",
        des: "Soudage, brasage, meulage, perçage, etc.",
        credit: 5,
      },
      {
        id: 943940507,
        label: "Autre",
        credit: 5,
      },
    ],
  },
  //   raling
  {
    id: 425432382,
    type: "checkbox",
    label: "Quelle est la taille approximative de l'escalier ?",
    options: how_big_is_approximately(
      787637825,
      953594623,
      880436176,
      649566233
    ),
  },
  {
    id: 787637825,
    type: "checkbox",
    label: "Le matériel requis est-il disponible ?",
    options: is_the_required_available,
  },
  {
    id: 953594623,
    type: "checkbox",
    label: "Le matériel requis est-il disponible ?",
    options: is_the_required_available,
  },
  {
    id: 880436176,
    type: "checkbox",
    label: "Le matériel requis est-il disponible ?",
    options: is_the_required_available,
  },
  {
    id: 649566233,
    type: "checkbox",
    label: "Le matériel requis est-il disponible ?",
    options: is_the_required_available,
  },
  //   raling
  //   stairs
  {
    id: 998833810,
    type: "checkbox",
    label: "Quelle est la taille approximative de l'escalier ?",
    options: how_big_is_approximately(
      787637825,
      953594623,
      880436176,
      649566233
    ),
  },
  {
    id: 787637825,
    type: "checkbox",
    label: "Le matériel requis est-il disponible ?",
    options: is_the_required_available,
  },
  {
    id: 953594623,
    type: "checkbox",
    label: "Le matériel requis est-il disponible ?",
    options: is_the_required_available,
  },
  {
    id: 880436176,
    type: "checkbox",
    label: "Le matériel requis est-il disponible ?",
    options: is_the_required_available,
  },
  {
    id: 649566233,
    type: "checkbox",
    label: "Le matériel requis est-il disponible ?",
    options: is_the_required_available,
  },
  //   stairs
  // goal
  {
    id: 621442113,
    type: "checkbox",
    label: "Combien de buts ?",
    options: how_many_goals(787637825, 953594623, 880436176, 649566233),
  },
  {
    id: 787637825,
    type: "checkbox",
    label: "Le matériel requis est-il disponible ?",
    options: is_the_required_available,
  },
  {
    id: 953594623,
    type: "checkbox",
    label: "Le matériel requis est-il disponible ?",
    options: is_the_required_available,
  },
  {
    id: 880436176,
    type: "checkbox",
    label: "Le matériel requis est-il disponible ?",
    options: is_the_required_available,
  },
  {
    id: 649566233,
    type: "checkbox",
    label: "Le matériel requis est-il disponible ?",
    options: is_the_required_available,
  },
  // goal
  // custom
  {
    id: 409898095,
    type: "checkbox",
    label:
      "Quelle est la taille approximative de la structure métallique sur mesure ?",
    options: how_big_is_metal_structure_approximately(
      787637825,
      953594623,
      880436176,
      649566233
    ),
  },
  {
    id: 787637825,
    type: "checkbox",
    label: "Le matériel requis est-il disponible ?",
    options: is_the_required_available,
  },
  {
    id: 953594623,
    type: "checkbox",
    label: "Le matériel requis est-il disponible ?",
    options: is_the_required_available,
  },
  {
    id: 880436176,
    type: "checkbox",
    label: "Le matériel requis est-il disponible ?",
    options: is_the_required_available,
  },
  {
    id: 649566233,
    type: "checkbox",
    label: "Le matériel requis est-il disponible ?",
    options: is_the_required_available,
  },
  // custom
  // modification
  {
    id: 691649311,
    type: "checkbox",
    label: "Que faut-il faire ?",
    options: [
      {
        label: "Soudage",
      },
      {
        label: "Souder",
      },
      {
        label: "Fléchissement",
      },
      {
        label: "Percer",
      },
    ],
  },

  // modification
];

export default metalConstruction;
