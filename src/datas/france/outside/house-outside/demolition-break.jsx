import {
  can_you_access_inside,
  how_extensive_order_approximately,
} from "../../reuse-data";

const demolitionBreak = [
  {
    id: 591219151,
    type: "checkbox",
    label: "Que faut-il faire ?",
    options: [
      {
        id: 675692216,
        label: "Démolition / Démantèlement",
      },
      {
        id: 725123056,
        label: "Percée du mur",
        credit: 20,
      },
      {
        id: 693242039,
        label: "Autre",
        credit: 10,
      },
    ],
  },
  {
    id: 675692216,
    type: "checkbox",
    label: "Quelle est l'ampleur approximative de la commande ?",
    options: how_extensive_order_approximately(
      548050480,
      845101161,
      355907232,
      322138074
    ),
  },
  {
    id: 548050480,
    type: "checkbox",
    label: "Y a-t-il des marchandises dangereuses ?",
    options: [
      {
        id: 487163933,
        label: "Oui",
      },
      {
        id: 633781436,
        label: "Non",
      },
    ],
  },
  {
    id: 487163933,
    type: "checkbox",
    label: "Y a-t-il des marchandises dangereuses ?",
    headline:
      "Exemples : réservoir d’huile/huile usagée, produits chimiques, feux d’artifice, peintures, pesticides, piles, appareils électriques/électroniques, bombes aérosols, médicaments.",
    options: can_you_access_inside,
  },
  {
    id: 633781436,
    type: "checkbox",
    label: "Y a-t-il des marchandises dangereuses ?",
    headline:
      "Exemples : réservoir d’huile/huile usagée, produits chimiques, feux d’artifice, peintures, pesticides, piles, appareils électriques/électroniques, bombes aérosols, médicaments.",
    options: can_you_access_inside,
  },
  {
    id: 845101161,
    type: "checkbox",
    label: "Y a-t-il des marchandises dangereuses ?",
    options: [
      {
        id: 487163933,
        label: "Oui",
      },
      {
        id: 633781436,
        label: "Non",
      },
    ],
  },
  {
    id: 487163933,
    type: "checkbox",
    label: "Y a-t-il des marchandises dangereuses ?",
    headline:
      "Exemples : réservoir d’huile/huile usagée, produits chimiques, feux d’artifice, peintures, pesticides, piles, appareils électriques/électroniques, bombes aérosols, médicaments.",
    options: can_you_access_inside,
  },
  {
    id: 633781436,
    type: "checkbox",
    label: "Y a-t-il des marchandises dangereuses ?",
    headline:
      "Exemples : réservoir d’huile/huile usagée, produits chimiques, feux d’artifice, peintures, pesticides, piles, appareils électriques/électroniques, bombes aérosols, médicaments.",
    options: can_you_access_inside,
  },
  {
    id: 355907232,
    type: "checkbox",
    label: "Y a-t-il des marchandises dangereuses ?",
    options: [
      {
        id: 487163933,
        label: "Oui",
      },
      {
        id: 633781436,
        label: "Non",
      },
    ],
  },
  {
    id: 487163933,
    type: "checkbox",
    label: "Y a-t-il des marchandises dangereuses ?",
    headline:
      "Exemples : réservoir d’huile/huile usagée, produits chimiques, feux d’artifice, peintures, pesticides, piles, appareils électriques/électroniques, bombes aérosols, médicaments.",
    options: can_you_access_inside,
  },
  {
    id: 633781436,
    type: "checkbox",
    label: "Y a-t-il des marchandises dangereuses ?",
    headline:
      "Exemples : réservoir d’huile/huile usagée, produits chimiques, feux d’artifice, peintures, pesticides, piles, appareils électriques/électroniques, bombes aérosols, médicaments.",
    options: can_you_access_inside,
  },
  {
    id: 322138074,
    type: "checkbox",
    label: "Y a-t-il des marchandises dangereuses ?",
    options: [
      {
        id: 487163933,
        label: "Oui",
      },
      {
        id: 633781436,
        label: "Non",
      },
    ],
  },
  {
    id: 487163933,
    type: "checkbox",
    label: "Y a-t-il des marchandises dangereuses ?",
    headline:
      "Exemples : réservoir d’huile/huile usagée, produits chimiques, feux d’artifice, peintures, pesticides, piles, appareils électriques/électroniques, bombes aérosols, médicaments.",
    options: can_you_access_inside,
  },
  {
    id: 633781436,
    type: "checkbox",
    label: "Y a-t-il des marchandises dangereuses ?",
    headline:
      "Exemples : réservoir d’huile/huile usagée, produits chimiques, feux d’artifice, peintures, pesticides, piles, appareils électriques/électroniques, bombes aérosols, médicaments.",
    options: can_you_access_inside,
  },
  {
    id: 725123056,
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

export default demolitionBreak;
