import { can_you_access_inside, questionCheckboxItem } from "../../reuse-data";

const demolition = [
  {
    id: 329510117,
    type: "checkbox",
    label: "Que faut-il faire ?",
    options: [
      {
        id: 420597409,
        label: "Démolition / Démantèlement",
      },
      {
        id: 314038231,
        label: "Percée du mur",
        credit: 20,
      },
      {
        id: 482771364,
        label: "Autre",
        credit: 10,
      },
    ],
  },
  {
    id: 420597409,
    type: "checkbox",
    label:
      "Dans quelle mesure la commande est-elle approximativement complète ?",
    options: [
      {
        id: 541297650,
        des: "Par exemple, cheminée, maisonnette, etc.",
        label: "Petite",
        credit: 10,
      },
      {
        id: 967554274,
        des: "Par exemple, cuisine, salle de bain, réservoir à mazout, etc.",
        label: "Moyen",
        credit: 25,
      },
      {
        id: 926585133,
        des: "E.g. garage, extension, apartment etc.",
        label: "Grande",
        credit: 35,
      },
      {
        id: 902521810,
        des: "Par exemple, une maison entière, plusieurs propriétés, etc.",
        label: "Très grand",
        credit: 55,
      },
    ],
  },
  {
    id: 541297650,
    type: "checkbox",
    label: "Faut-il le supprimer également ?",
    options: questionCheckboxItem(515319036, 408078507),
  },
  {
    id: 515319036,
    type: "checkbox",
    label: "Faut-il le supprimer également ?",
    headline:
      "Exemples : réservoir d’huile/huile usagée, produits chimiques, feux d’artifice, peintures, pesticides, piles, appareils électriques/électroniques, bombes aérosols, médicaments.",
    options: can_you_access_inside,
  },
  {
    id: 408078507,
    type: "checkbox",
    label: "Faut-il le supprimer également ?",
    headline:
      "Exemples : réservoir d’huile/huile usagée, produits chimiques, feux d’artifice, peintures, pesticides, piles, appareils électriques/électroniques, bombes aérosols, médicaments.",
    options: can_you_access_inside,
  },
  {
    id: 967554274,
    type: "checkbox",
    label: "Faut-il le supprimer également ?",
    options: questionCheckboxItem(515319036, 408078507),
  },
  {
    id: 515319036,
    type: "checkbox",
    label: "Faut-il le supprimer également ?",
    headline:
      "Exemples : réservoir d’huile/huile usagée, produits chimiques, feux d’artifice, peintures, pesticides, piles, appareils électriques/électroniques, bombes aérosols, médicaments.",
    options: can_you_access_inside,
  },
  {
    id: 408078507,
    type: "checkbox",
    label: "Faut-il le supprimer également ?",
    headline:
      "Exemples : réservoir d’huile/huile usagée, produits chimiques, feux d’artifice, peintures, pesticides, piles, appareils électriques/électroniques, bombes aérosols, médicaments.",
    options: can_you_access_inside,
  },
  {
    id: 926585133,
    type: "checkbox",
    label: "Faut-il le supprimer également ?",
    options: questionCheckboxItem(515319036, 408078507),
  },
  {
    id: 515319036,
    type: "checkbox",
    label: "Faut-il le supprimer également ?",
    headline:
      "Exemples : réservoir d’huile/huile usagée, produits chimiques, feux d’artifice, peintures, pesticides, piles, appareils électriques/électroniques, bombes aérosols, médicaments.",
    options: can_you_access_inside,
  },
  {
    id: 408078507,
    type: "checkbox",
    label: "Faut-il le supprimer également ?",
    headline:
      "Exemples : réservoir d’huile/huile usagée, produits chimiques, feux d’artifice, peintures, pesticides, piles, appareils électriques/électroniques, bombes aérosols, médicaments.",
    options: can_you_access_inside,
  },
  {
    id: 902521810,
    type: "checkbox",
    label: "Faut-il le supprimer également ?",
    options: questionCheckboxItem(515319036, 408078507),
  },
  {
    id: 515319036,
    type: "checkbox",
    label: "Faut-il le supprimer également ?",
    headline:
      "Exemples : réservoir d’huile/huile usagée, produits chimiques, feux d’artifice, peintures, pesticides, piles, appareils électriques/électroniques, bombes aérosols, médicaments.",
    options: can_you_access_inside,
  },
  {
    id: 408078507,
    type: "checkbox",
    label: "Faut-il le supprimer également ?",
    headline:
      "Exemples : réservoir d’huile/huile usagée, produits chimiques, feux d’artifice, peintures, pesticides, piles, appareils électriques/électroniques, bombes aérosols, médicaments.",
    options: can_you_access_inside,
  },

  {
    id: 314038231,
    type: "checkbox",
    label: "De quel type de mur s'agit-il ?",
    options: [
      {
        label: "Cloison à ossature bois",
      },
      {
        label: "Mur non porteur",
      },
      {
        label: "Mur porteur",
      },
      {
        label: "Je ne sais pas",
      },
    ],
  },
];

export default demolition;
