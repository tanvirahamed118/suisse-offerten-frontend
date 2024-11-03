import Emptykitchens from "./0kitchen";
import onekitchens from "./1kitchen";
import towkitchens from "./2kitchen";
import threekitchens from "./3kitchen";
import fourkitchens from "./4kitchen";

const conversionTotalCat = [
  {
    id: 815049374,
    mainId: 983315535,
    type: "multibox",
    label: "De quels travaux avez-vous besoin pour votre projet ?",
    options: [
      {
        label: "Couvreurs, couverture de toit",
      },
      {
        label: "Fenêtres / Portes",
      },
      {
        label: "Horticulture",
      },
      {
        label: "Chauffage, ventilation, climatisation, réfrigération",
      },
      {
        label: "Peinture, plâtrage",
      },
      {
        label: "Parquet, stratifié, moquette",
      },
      {
        label: "Maçon, plâtre, béton, joints",
      },
      {
        label: "Travaux de plomberie",
      },
      {
        label: "Excavation",
      },
      {
        label: "Électricien, installation électrique",
      },
      {
        label: "Dalles, tuiles, dalles",
      },
      {
        label: "Isolation, étanchéité, isolation",
      },
      {
        label: "Charpenterie, construction en bois",
      },
      {
        label: "Démolition, percée, démantèlement, élimination",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 983315535,
    type: "checkbox",
    label: "Combien de cuisines et de salles de bains sont concernées ?",
    options: [
      {
        id: 769773381,
        label: "0",
      },
      {
        id: 708119719,
        label: "1",
      },
      {
        id: 829709154,
        label: "2",
      },
      {
        id: 240502862,
        label: "3",
      },
      {
        id: 526768791,
        label: "4 ou plus",
      },
    ],
  },

  // 4 technical rooms end
  // 4 living rooms
];
const conversionTotal = conversionTotalCat.concat(
  Emptykitchens,
  onekitchens,
  towkitchens,
  threekitchens,
  fourkitchens
);

export default conversionTotal;
