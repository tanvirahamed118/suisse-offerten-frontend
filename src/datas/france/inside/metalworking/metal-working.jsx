import { is_the_required_available } from "../../reuse-data";

const metalWorking = [
  {
    id: 759709724,
    type: "checkbox",
    label: "Que nécessite un service ?",
    options: [
      {
        id: 9064676601,
        label: "Balustrade",
        des: "Par exemple pour les escaliers, les balcons, etc.",
      },
      {
        id: 4173396498,
        label: "Escaliers",
      },
      {
        id: 4716963594,
        label: "But",
      },
      {
        id: 7255343011,
        label: "Structure métallique sur mesure",
        des: "Par exemple, abri à vélos, sous-structure, mobilier, boîte aux lettres, etc.",
      },
      {
        id: 7528094474,
        label: "Modification / Réparation",
        des: "Soudage, brasage, meulage, perçage, etc.",
        credit: 10,
      },
      {
        label: "Autre",
        credit: 10,
      },
    ],
  },
  //   raling
  {
    id: 9064676601,
    type: "checkbox",
    label: "Quelle est la taille approximative de la zone touchée ?",
    options: [
      {
        id: 787637825,
        des: "Jusqu'à 4 m2",
        label: "Petite",
        credit: 20,
      },
      {
        id: 953594623,
        des: "5 à 9 m2",
        label: "Moyen",
        credit: 30,
      },
      {
        id: 880436176,
        des: "10 à 24 m2",
        label: "Grande",
        credit: 40,
      },
      {
        id: 649566233,
        des: "25 m2 ou plus",
        label: "Très grand",
        credit: 50,
      },
    ],
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
    id: 4173396498,
    type: "checkbox",
    label: "Quelle est la taille approximative de la zone touchée ?",
    options: [
      {
        id: 787637825,
        des: "Jusqu'à 4 m2",
        label: "Petite",
        credit: 10,
      },
      {
        id: 953594623,
        des: "5 à 9 m2",
        label: "Moyen",
        credit: 30,
      },
      {
        id: 880436176,
        des: "10 à 24 m2",
        label: "Grande",
        credit: 50,
      },
      {
        id: 649566233,
        des: "25 m2 ou plus",
        label: "Très grand",
        credit: 60,
      },
    ],
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
    id: 4716963594,
    type: "checkbox",
    label: "How many goals ?",
    options: [
      {
        id: 787637825,
        label: "A Petite gate",
        credit: 15,
      },
      {
        id: 953594623,
        label: "A normal gate",
        credit: 30,
      },
      {
        id: 880436176,
        label: "2 to 3 goals",
        credit: 50,
      },
      {
        id: 649566233,
        label: "4 goals or more",
        credit: 60,
      },
    ],
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
    id: 7255343011,
    type: "checkbox",
    label: "Approximately how big ist he custom-made structure ?",
    options: [
      {
        id: 787637825,
        des: "Jusqu'à 4 m2",
        label: "Petite",
        credit: 10,
      },
      {
        id: 953594623,
        des: "5 à 9 m2",
        label: "Moyen",
        credit: 30,
      },
      {
        id: 880436176,
        des: "10 à 24 m2",
        label: "Grande",
        credit: 50,
      },
      {
        id: 649566233,
        des: "25 m2 ou plus",
        label: "Très grand",
        credit: 60,
      },
    ],
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
    id: 7528094474,
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

export default metalWorking;
