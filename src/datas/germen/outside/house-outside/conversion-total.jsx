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
    label: "Welche Arbeiten benötigen Sie für Ihr Projekt ?",
    options: [
      {
        label: "Dachdecker, Dachdeckerarbeiten",
      },
      {
        label: "Fenster / Türen",
      },
      {
        label: "Gartenbau",
      },
      {
        label: "Heizung, Lüftung, Klima, Kälte",
      },
      {
        label: "Malerarbeiten, Verputzarbeiten",
      },
      {
        label: "Parkett, Laminat, Teppich",
      },
      {
        label: "Maurer, Putz, Beton, Fugen",
      },
      {
        label: "Klempnerarbeiten",
      },
      {
        label: "Ausgrabung",
      },
      {
        label: "Elektriker, Elektroinstallation",
      },
      {
        label: "Platten, Fliesen, Platten",
      },
      {
        label: "Dämmung, Abdichtung, Isolierung",
      },
      {
        label: "Zimmerei, Holzbau",
      },
      {
        label: "Abbruch, Durchbruch, Demontage, Entsorgung",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 983315535,
    type: "checkbox",
    label: "Wie viele Küchen und Bäder sind betroffen ?",
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
        label: "4 oder mehr",
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
