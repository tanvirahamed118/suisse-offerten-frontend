import {
  how_many_be_cleaned,
  how_many_blinds_shutters,
  what_type_blinds_are_they,
} from "../../reuse-data";

const blindsRoller = [
  {
    id: 715426823,
    type: "checkbox",
    label: "What type of blinds / roller shutter service do you need ?",
    options: [
      {
        id: 487849105,
        label: "Reassembly or replacement",
        des: "Installing sun blinds, replacing roller shutters, etc.",
      },
      {
        id: 912321654,
        label: "repair",
        des: "Pull cord torn, replace sun blind fabric, crank/motor jammed, etc.",
      },
      {
        id: 700590038,
        label: "cleaning",
        des: "Cleaning of sun blinds, slats, roller shutter boxes, etc.",
      },
      {
        id: 206178680,
        label: "Electrical retrofitting",
        des: "Conversion to electric operation",
      },
      {
        id: 614798495,
        label: "other",
      },
    ],
  },
  {
    id: 487849105,
    type: "checkbox",
    label: "How many blinds / shutters are there ?",
    options: how_many_blinds_shutters,
  },
  {
    id: 206178680,
    type: "checkbox",
    label: "How many blinds / shutters are there ?",
    options: how_many_blinds_shutters,
  },
  {
    id: 912321654,
    type: "multibox",
    mainId: 277043516,
    label: "What type of blinds / roller shutter service do you need ?",
    options: [
      {
        label: "Replace sun blind fabric",
      },
      {
        label: "Torn ligaments",
      },
      {
        label: "Slats defective",
      },
      {
        label: "Difficulty opening or closing",
      },
      {
        label: "Electric drive defective",
      },
      {
        label: "other",
      },
    ],
  },
  {
    id: 277043516,
    type: "checkbox",
    label: "How many blinds / shutters are there ?",
    options: how_many_blinds_shutters,
  },
  {
    id: 689289633,
    type: "checkbox",
    label: "Clean blinds and windows ?",
    options: [
      {
        id: 791979535,
        label: "Only clean blinds",
      },
      {
        id: 403175916,
        label: "Cleaning blinds and windows",
      },
    ],
  },
  {
    id: 791979535,
    type: "checkbox",
    label: "Clean blinds and windows ?",
    options: how_many_be_cleaned(502391050, 117385925, 685137619, 601813141),
  },
  {
    id: 502391050,
    type: "multibox",
    label: "What type of blinds are they ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 117385925,
    type: "multibox",
    label: "What type of blinds are they ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 685137619,
    type: "multibox",
    label: "What type of blinds are they ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 601813141,
    type: "multibox",
    label: "What type of blinds are they ?",
    options: what_type_blinds_are_they,
  },

  {
    id: 403175916,
    type: "checkbox",
    label: "Clean blinds and windows ?",
    options: how_many_be_cleaned(502391050, 117385925, 685137619, 601813141),
  },
  {
    id: 502391050,
    type: "checkbox",
    label: "What type of blinds are they ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 117385925,
    type: "checkbox",
    label: "What type of blinds are they ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 685137619,
    type: "checkbox",
    label: "What type of blinds are they ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 601813141,
    type: "checkbox",
    label: "What type of blinds are they ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 700590038,
    type: "checkbox",
    label: "Clean blinds and windows ?",
    options: [
      {
        id: 791979535,
        label: "Only clean blinds",
      },
      {
        id: 403175916,
        label: "Cleaning blinds and windows",
      },
    ],
  },
];

export default blindsRoller;
