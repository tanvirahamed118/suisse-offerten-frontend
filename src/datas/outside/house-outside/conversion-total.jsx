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
    label: "What work do you need for your project ?",
    options: [
      {
        label: "Roofers, roofing",
      },
      {
        label: "Windows / Doors",
      },
      {
        label: "horticulture",
      },
      {
        label: "Heating, ventilation, air conditioning, refrigeration",
      },
      {
        label: "Painting, plastering",
      },
      {
        label: "Parquet, laminate, carpet",
      },
      {
        label: "Bricklayer, plaster, concrete, joints",
      },
      {
        label: "Plumbing work",
      },
      {
        label: "Excavation",
      },
      {
        label: "Electrician, electrical installation",
      },
      {
        label: "Slabs, tiles, slabs",
      },
      {
        label: "Insulation, sealing, insulation",
      },
      {
        label: "Carpentry, timber construction",
      },
      {
        label: "Demolition, breakthrough, dismantling, disposal",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 983315535,
    type: "checkbox",
    label: "How many kitchens and bathrooms are affected ?",
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
        label: "4 or more",
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
