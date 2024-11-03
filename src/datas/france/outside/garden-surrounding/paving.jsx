import { what_does_service_require } from "../../reuse-data";

const paving = [
  {
    id: 1036081080,
    type: "multibox",
    label: "Que nécessite un service ?",
    mainId: 817529946,
    options: what_does_service_require,
  },
  {
    id: 817529946,
    type: "multibox",
    mainId: 957329759,
    label: "Que faut-il faire ?",
    options: [
      { label: "Recouvrir/réparer le revêtement" },
      { label: "Reconstruire complètement" },
      { label: "Développer" },
      { label: "Redresser" },
      { label: "Autre" },
    ],
  },
  {
    id: 957329759,
    type: "checkbox",
    label: "Devez-vous apporter vos propres matériaux de construction ?",
    options: [
      {
        id: 2551518717,
        label: "Oui",
      },
      {
        id: 6433374171,
        label: "Non",
      },
      {
        id: 5112314975,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 2551518717,
    type: "checkbox",
    label:
      "Quelle est la taille approximative de la surface finale souhaitée ?",
    options: [
      {
        des: "Jusqu'à 14 m2",
        label: "Petite",
        credit: 8,
      },
      {
        des: "15 à 99 m2",
        label: "Moyen",
        credit: 13,
      },
      {
        des: "100 à 249 m2",
        label: "Grande",
        credit: 18,
      },
      {
        des: "250 m2 et plus",
        label: "Très grand",
        credit: 25,
      },
    ],
  },
  {
    id: 6433374171,
    type: "checkbox",
    label:
      "Quelle est la taille approximative de la surface finale souhaitée ?",
    options: [
      {
        des: "Jusqu'à 14 m2",
        label: "Petite",
        credit: 8,
      },
      {
        des: "15 à 99 m2",
        label: "Moyen",
        credit: 13,
      },
      {
        des: "100 à 249 m2",
        label: "Grande",
        credit: 18,
      },
      {
        des: "250 m2 et plus",
        label: "Très grand",
        credit: 25,
      },
    ],
  },
  {
    id: 5112314975,
    type: "checkbox",
    label:
      "Quelle est la taille approximative de la surface finale souhaitée ?",
    options: [
      {
        des: "Jusqu'à 14 m2",
        label: "Petite",
        credit: 8,
      },
      {
        des: "15 à 99 m2",
        label: "Moyen",
        credit: 13,
      },
      {
        des: "100 à 249 m2",
        label: "Grande",
        credit: 18,
      },
      {
        des: "250 m2 et plus",
        label: "Très grand",
        credit: 25,
      },
    ],
  },
];

export default paving;
