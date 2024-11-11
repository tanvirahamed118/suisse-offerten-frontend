import SampleOne from "../../../../assets/sample-1.jpg";
import SampleTow from "../../../../assets/sample-2.jpg";

const carRepair = [
  {
    id: 897336554,
    type: "inputBox",
    mainId: 610389522,
    label: "Marque et modèle",
    options: [{ label: "" }],
  },

  {
    id: 610389522,
    type: "samplebox",
    mainId: 588584335,
    label: "Homologation de type",
    headline:
      "Le numéro de certificat de type se trouve dans le document d'immatriculation du véhicule sous le champ 24",
    img: SampleOne,
    options: [{ label: "" }],
  },

  {
    id: 588584335,
    type: "samplebox",
    mainId: 527861383,
    label: "Numéro de châssis",
    img: SampleTow,
    headline:
      "Le numéro de châssis (numéro d'identification du véhicule) se trouve dans le document d'immatriculation du véhicule dans le champ 23. Vous n'avez besoin de saisir que les 17 premiers caractères.",
    options: [{ label: "" }],
  },

  {
    id: 527861383,
    type: "datebox",
    mainId: 328089644,
    label: "1. Mise sur le marché",
    options: [{ label: "" }],
  },

  {
    id: 328089644,
    type: "checkbox",
    label: "Changement de vitesse",
    options: [
      { label: "Manuellement", id: 260455785, credit: 10 },
      { label: "Machine", id: 153275411, credit: 10 },
    ],
  },

  {
    id: 260455785,
    type: "modelbox",
    label: "Kilométrage",
    headline: "km",
    options: [{ label: "" }],
  },
  {
    id: 153275411,
    type: "modelbox",
    headline: "km",
    label: "1. Mise sur le marché",
    options: [{ label: "" }],
  },
];

export default carRepair;
