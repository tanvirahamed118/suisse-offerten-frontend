import SampleOne from "../../../../assets/sample-1.jpg";
import SampleTow from "../../../../assets/sample-2.jpg";

const carRepair = [
  {
    id: 897336554,
    type: "inputBox",
    mainId: 610389522,
    label: "Marke und Modell",
    options: [{ label: "" }],
  },

  {
    id: 610389522,
    type: "samplebox",
    mainId: 588584335,
    label: "Typgenehmigung",
    headline:
      "Die Typenscheinnummer finden Sie im Fahrzeugschein unter Feld 24",
    img: SampleOne,
    options: [{ label: "" }],
  },

  {
    id: 588584335,
    type: "samplebox",
    mainId: 527861383,
    label: "Fahrgestellnummer",
    img: SampleTow,
    headline:
      "Die Fahrgestellnummer (Fahrzeugidentifikationsnummer) finden Sie im Fahrzeugschein im Feld 23. Sie müssen nur die ersten 17 Zeichen eingeben.",
    options: [{ label: "" }],
  },

  {
    id: 527861383,
    type: "datebox",
    mainId: 328089644,
    label: "1. Inverkehrbringen",
    options: [{ label: "" }],
  },

  {
    id: 328089644,
    type: "checkbox",
    label: "Schalthebel",
    options: [
      { label: "Manuell", id: 260455785, credit: 10 },
      { label: "Maschine", id: 153275411, credit: 10 },
    ],
  },

  {
    id: 260455785,
    type: "modelbox",
    label: "Kilometerstand",
    headline: "km",
    options: [{ label: "" }],
  },
  {
    id: 153275411,
    type: "modelbox",
    headline: "km",
    label: "1. Inverkehrbringen",
    options: [{ label: "" }],
  },
];

export default carRepair;
