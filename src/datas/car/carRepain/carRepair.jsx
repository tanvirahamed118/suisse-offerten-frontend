import SampleOne from "../../../assets/sample-1.jpg";
import SampleTow from "../../../assets/sample-2.jpg";

const carRepair = [
  {
    id: 897336554,
    type: "inputBox",
    mainId: 610389522,
    label: "Make and model",
    options: [{ label: "" }],
  },

  {
    id: 610389522,
    type: "samplebox",
    mainId: 588584335,
    label: "Type approval",
    headline:
      "The type certificate number can be found in the vehicle registration document under field 24",
    img: SampleOne,
    options: [{ label: "" }],
  },

  {
    id: 588584335,
    type: "samplebox",
    mainId: 527861383,
    label: "Chassis number",
    img: SampleTow,
    headline:
      "The chassis number (vehicle identification number) can be found in the vehicle registration document in field 23. You only need to enter the first 17 characters.",
    options: [{ label: "" }],
  },

  {
    id: 527861383,
    type: "datebox",
    mainId: 328089644,
    label: "1. Placing on the market",
    options: [{ label: "" }],
  },

  {
    id: 328089644,
    type: "checkbox",
    label: "Gear shift",
    options: [
      { label: "Manually", id: 260455785 },
      { label: "Machine", id: 153275411 },
    ],
  },

  {
    id: 260455785,
    type: "modelbox",
    label: "Mileage",
    headline: "km",
    options: [{ label: "" }],
  },
  {
    id: 153275411,
    type: "modelbox",
    headline: "km",
    label: "1. Placing on the market",
    options: [{ label: "" }],
  },
];

export default carRepair;
