import { approximately_how_big_affected_structure } from "../../reuse-data";

const architecture = [
  {
    id: 256319551,
    type: "checkbox",
    label: "De quel service avez-vous besoin ?",
    options: [
      {
        id: 644833688,
        label: "Statique",
        des: "Par exemple, rapport d’ingénierie structurelle, percée d’un mur porteur, etc.",
      },
      {
        id: 939690592,
        label: "Architecture",
        des: "Par exemple, étude, plan d'étage, visualisation, soumission de bâtiment, etc.",
      },
      {
        id: 299836718,
        label: "Rapport / preuve / calcul etc.",
        des: "Par exemple, certificat énergétique, inspection des défauts, etc.",
      },
      {
        id: 257238238,
        label: "Gestion de chantier",
      },
      {
        label: "Autre ou plusieurs des réponses ci-dessus",
        credit: 15,
      },
    ],
  },
  {
    id: 644833688,
    type: "multibox",
    mainId: 689042963,
    label: "De quel service de statistique avez-vous besoin ?",
    options: [
      {
        label: "Rapport d'ingénierie structurelle",
      },
      {
        label: "Percée d'un mur porteur",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 689042963,
    type: "checkbox",
    label: "Quelle est la taille de la zone touchée ?",
    options: approximately_how_big_affected_structure,
  },
  {
    id: 939690592,
    type: "multibox",
    mainId: 866189685,
    label: "De quel service d'architecture avez-vous besoin ?",
    options: [
      {
        label: "Étude de faisabilité / étude de projet",
      },
      {
        label: "Mesures",
      },
      {
        label: "Dessiner un plan d'étage / des plans",
      },
      {
        label: "Numérisation / visualisation des plans",
      },
      {
        label: "Demande de permis de construire",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 866189685,
    type: "checkbox",
    label: "Quelle est la taille de la zone touchée ?",
    options: approximately_how_big_affected_structure,
  },
  {
    id: 299836718,
    type: "multibox",
    mainId: 551559776,
    label: "Quel rapport ou similaire est requis ?",
    options: [
      {
        label: "Isolation énergétique / thermique",
      },
      {
        label: "Isolation énergétique / thermique",
      },
      {
        label: "Son / Bruit",
      },
      {
        label: "Polluant (par exemple l'amiante)",
      },
      {
        label: "Contrôle SIA",
      },
      {
        label: "Source de lumière",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 551559776,
    type: "checkbox",
    label: "Quelle est la taille de la zone touchée ?",
    options: approximately_how_big_affected_structure,
  },
  {
    id: 257238238,
    type: "checkbox",
    label: "Quelle est la taille de la zone touchée ?",
    options: approximately_how_big_affected_structure,
  },
];

export default architecture;
