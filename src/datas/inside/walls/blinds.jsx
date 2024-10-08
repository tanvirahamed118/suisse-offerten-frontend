import { how_manyshuttersare_there } from "../../reuse-data";

const blinds = [
  {
    id: 125768399,
    type: "checkbox",
    label: "What type of blinds / roller shutter service do you need ?",
    options: [
      {
        id: 371261802,
        label: "Reassembly or replacement",
        des: "Installing sun blinds, replacing roller shutters, etc.",
      },
      {
        id: 269830997,
        label: "repair",
        des: "Pull cord torn, replace sun blind fabric, crank/motor jammed, etc.",
      },
      {
        id: 518700481,
        label: "cleaning",
        des: "Cleaning of sun blinds, slats, roller shutter boxes, etc.",
      },
      {
        id: 915717690,
        label: "Electrical retrofitting",
        des: "Conversion to electric operation",
      },
      {
        id: 587723754,
        label: "Other",
      },
    ],
  },
  {
    id: 371261802,
    type: "checkbox",
    label: "How many blinds / shutters are there",
    options: how_manyshuttersare_there,
  },
  {
    id: 269830997,
    type: "multibox",
    label: "What kind of repair work is involved ?",
    mainId: 247188590,
    options: [
      { label: "Replace sun blind fabric" },
      { label: "Torn ligaments" },
      { label: "Slats defective" },
      { label: "Difficulty opening or closing" },
      { label: "Electric drive defective" },
      { label: "Other" },
    ],
  },
  {
    id: 247188590,
    type: "checkbox",
    label: "How many blinds / shutters are there",
    options: how_manyshuttersare_there,
  },
  {
    id: 915717690,
    type: "checkbox",
    label: "How many blinds / shutters are there",
    options: how_manyshuttersare_there,
  },
  {
    id: 518700481,
    type: "checkbox",
    label: "Clean blinds and windows ?",
    options: [
      { id: 431897744, label: "Only clean blinds" },
      { id: 145979106, label: "Cleaning blinds and windows" },
    ],
  },
  {
    id: 431897744,
    type: "checkbox",
    label: "Clean blinds and windows ?",
    options: [
      { id: 870406207, label: "1 to 2" },
      { id: 443853640, label: "3 to 4" },
      { id: 970611313, label: "5 to 6" },
      { id: 159569508, label: "10 or more" },
    ],
  },
  {
    id: 145979106,
    type: "checkbox",
    label: "Clean blinds and windows ?",
    options: [
      { id: 870406207, label: "1 to 2" },
      { id: 443853640, label: "3 to 4" },
      { id: 970611313, label: "5 to 6" },
      { id: 159569508, label: "10 or more" },
    ],
  },
  {
    id: 870406207,
    type: "multibox",
    label: "What type of blinds are they ?",
    options: [
      { label: "Awnings / sun blinds made of fabric" },
      { label: "Blinds / roller shutters (inside)" },
      { label: "Blinds / roller shutters (outside)" },
      { label: "Window shutter (outside)" },
      { label: "Other" },
    ],
  },
  {
    id: 443853640,
    type: "multibox",
    label: "What type of blinds are they ?",
    options: [
      { label: "Awnings / sun blinds made of fabric" },
      { label: "Blinds / roller shutters (inside)" },
      { label: "Blinds / roller shutters (outside)" },
      { label: "Window shutter (outside)" },
      { label: "Other" },
    ],
  },
  {
    id: 970611313,
    type: "multibox",
    label: "What type of blinds are they ?",
    options: [
      { label: "Awnings / sun blinds made of fabric" },
      { label: "Blinds / roller shutters (inside)" },
      { label: "Blinds / roller shutters (outside)" },
      { label: "Window shutter (outside)" },
      { label: "Other" },
    ],
  },
  {
    id: 159569508,
    type: "multibox",
    label: "What type of blinds are they ?",
    options: [
      { label: "Awnings / sun blinds made of fabric" },
      { label: "Blinds / roller shutters (inside)" },
      { label: "Blinds / roller shutters (outside)" },
      { label: "Window shutter (outside)" },
      { label: "Other" },
    ],
  },
];
export default blinds;
