const electrician = [
  {
    id: 255079093,
    type: "checkbox",
    label: "What services should be provided ?",
    options: [
      {
        id: 227970460,
        label: "Installing/removing lamps",
        des: "Lamps, ceiling lights, spots, etc.",
      },
      {
        id: 258158087,
        label: "Electrical installations in general",
        des: "Pulling in power cables, repairing light switches, moving sockets, etc.",
      },
      {
        id: 664443419,
        label: "Set up Internet/TV/telephone",
        des: "Connect to the Internet, lay fiber optic cables, replace Ethernet cables, etc.",
      },
      {
        id: 236255198,
        label: "Other",
      },
    ],
  },
  {
    id: 227970460,
    type: "checkbox",
    label: "How many lamps need to be installed/removed ?",
    options: [
      {
        id: 448069443,
        label: "1 to 3",
      },
      {
        id: 900518800,
        label: "4 to 6",
      },
      {
        id: 669375973,
        label: "7 to 9",
      },
      {
        id: 504909168,
        label: "10 or more",
      },
    ],
  },
  {
    id: 448069443,
    type: "inputBox",
    mainId: 482438246,
    label: "How high is the ceiling ?",
    options: [
      {
        label: "meter",
      },
    ],
  },
  {
    id: 900518800,
    type: "inputBox",
    mainId: 482438246,
    label: "How high is the ceiling ?",
    options: [
      {
        label: "meter",
      },
    ],
  },
  {
    id: 669375973,
    type: "inputBox",
    mainId: 482438246,
    label: "How high is the ceiling ?",
    options: [
      {
        label: "meter",
      },
    ],
  },
  {
    id: 504909168,
    type: "inputBox",
    mainId: 482438246,
    label: "How high is the ceiling ?",
    options: [
      {
        label: "meter",
      },
    ],
  },
  {
    id: 482438246,
    type: "multibox",
    mainId: 521184054,
    label: "What type of lamp is it ?",
    options: [
      { label: "Ceiling lamp" },
      { label: "Wall light" },
      { label: "Spotlights" },
      { label: "Hanging lamp" },
      { label: "chandelier" },
      { label: "Floor lamp" },
      { label: "Other" },
    ],
  },
  {
    id: 521184054,
    type: "inputBox",
    label: "On what date and at what time will the Internet be activated ?",
    options: [
      {
        label: "input",
      },
    ],
  },
  {
    id: 258158087,
    type: "multibox",
    mainId: 801489988,
    label: "What work exactly do you need ?",
    options: [
      {
        label: "Light switch",
      },
      { label: "Power outlet" },
      { label: "Cable" },
      { label: "Distributor" },
      { label: "Other" },
    ],
  },
  {
    id: 801489988,
    type: "checkbox",
    label: "Do you want proof of safety at work ?",
    headline:
      "A safety certificate certifies that the electrical installation complies with the requirements of the Low Voltage Installation Ordinance NIV Articles 3 and 4. The owner is responsible for having the safety certificate and keeping it up to date.",
    options: [
      {
        id: 249091099,
        label: "Yes",
      },
      {
        id: 683520304,
        label: "No",
      },
    ],
  },
  {
    id: 249091099,
    type: "inputBox",
    label:
      "In which year was the electrical installation installed in your house/apartment ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 683520304,
    type: "inputBox",
    label:
      "In which year was the electrical installation installed in your house/apartment ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 664443419,
    type: "checkbox",
    label: "What work exactly do you need ?",
    options: [
      {
        id: 279386903,
        label: "Set up Internet or change Internet provider",
      },
      {
        id: 513030561,
        label: "Installation TV",
      },
      {
        id: 451266050,
        label: "Other",
      },
    ],
  },
  {
    id: 279386903,
    type: "checkbox",
    label: "Which provider are you switching to ?",
    options: [
      {
        id: 709365061,
        label: "Swisscom",
      },
      {
        id: 803722682,
        label: "Sunrise",
      },
      {
        id: 420566275,
        label: "UPC Cablecom",
      },
      {
        id: 797296427,
        label: "Salt",
      },
      {
        id: 253331502,
        label: "Teleboy",
      },
      {
        id: 648734745,
        label: "Mytel",
      },
      {
        id: 560747342,
        label: "Yallo",
      },
      {
        id: 717595947,
        label: "VTX",
      },
      {
        id: 958313458,
        label: "Tele4U",
      },
      {
        id: 151710343,
        label: "green.ch",
      },
      {
        id: 758240630,
        label: "Sasag",
      },
      {
        id: 374636996,
        label: "Quickline",
      },
      {
        id: 414561374,
        label: "Citycable",
      },
      {
        id: 334912760,
        label: "broadband.ch",
      },
      {
        id: 545733669,
        label: "Other",
      },
    ],
  },
  {
    id: 709365061,
    type: "datebox",
    mainId: 793568090,
    label: "On what date and at what time will the Internet be activated ?",
    options: [
      {
        label: "input",
      },
    ],
  },

  {
    id: 793568090,
    type: "inputBox",
    mainId: 110857851,
    label: "What is the terminal number ?",
    options: [
      {
        label: "input",
      },
    ],
  },

  {
    id: 830552512,
    type: "inputBox",
    mainId: 916413474,
    label: "What is the terminal number ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 528353797,
    type: "inputBox",
    mainId: 963002516,
    label: "What is the terminal number ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 182466259,
    type: "inputBox",
    mainId: 773423423,
    label: "What is the terminal number ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 845830979,
    type: "inputBox",
    mainId: 831515365,
    label: "What is the terminal number ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 457976675,
    type: "inputBox",
    mainId: 192110839,
    label: "What is the terminal number ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 460518748,
    type: "inputBox",
    mainId: 624915575,
    label: "What is the terminal number ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 313765898,
    type: "inputBox",
    mainId: 178694068,
    label: "What is the terminal number ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 451722020,
    type: "inputBox",
    mainId: 619942697,
    label: "What is the terminal number ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 775656622,
    type: "inputBox",
    mainId: 867192152,
    label: "What is the terminal number ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 374469056,
    type: "inputBox",
    mainId: 907636913,
    label: "What is the terminal number ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 748888770,
    type: "inputBox",
    mainId: 364814151,
    label: "What is the terminal number ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 573674877,
    type: "inputBox",
    mainId: 326025855,
    label: "What is the terminal number ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 584292744,
    type: "inputBox",
    mainId: 331559268,
    label: "What is the terminal number ?",
    options: [
      {
        label: "",
      },
    ],
  },
  {
    id: 110857851,
    type: "checkbox",
    label: "What kind of connection is it ?",
    options: [
      {
        label: "Copper connection",
      },
      {
        label: "Fiber optic connection",
      },
      {
        label: "not specified",
      },
    ],
  },
  {
    id: 916413474,
    type: "checkbox",
    label: "What kind of connection is it ?",
    options: [
      {
        label: "Copper connection",
      },
      {
        label: "Fiber optic connection",
      },
      {
        label: "not specified",
      },
    ],
  },
  {
    id: 963002516,
    type: "checkbox",
    label: "What kind of connection is it ?",
    options: [
      {
        label: "Copper connection",
      },
      {
        label: "Fiber optic connection",
      },
      {
        label: "not specified",
      },
    ],
  },
  {
    id: 773423423,
    type: "checkbox",
    label: "What kind of connection is it ?",
    options: [
      {
        label: "Copper connection",
      },
      {
        label: "Fiber optic connection",
      },
      {
        label: "not specified",
      },
    ],
  },
  {
    id: 831515365,
    type: "checkbox",
    label: "What kind of connection is it ?",
    options: [
      {
        label: "Copper connection",
      },
      {
        label: "Fiber optic connection",
      },
      {
        label: "not specified",
      },
    ],
  },
  {
    id: 192110839,
    type: "checkbox",
    label: "What kind of connection is it ?",
    options: [
      {
        label: "Copper connection",
      },
      {
        label: "Fiber optic connection",
      },
      {
        label: "not specified",
      },
    ],
  },
  {
    id: 624915575,
    type: "checkbox",
    label: "What kind of connection is it ?",
    options: [
      {
        label: "Copper connection",
      },
      {
        label: "Fiber optic connection",
      },
      {
        label: "not specified",
      },
    ],
  },
  {
    id: 178694068,
    type: "checkbox",
    label: "What kind of connection is it ?",
    options: [
      {
        label: "Copper connection",
      },
      {
        label: "Fiber optic connection",
      },
      {
        label: "not specified",
      },
    ],
  },
  {
    id: 619942697,
    type: "checkbox",
    label: "What kind of connection is it ?",
    options: [
      {
        label: "Copper connection",
      },
      {
        label: "Fiber optic connection",
      },
      {
        label: "not specified",
      },
    ],
  },
  {
    id: 867192152,
    type: "checkbox",
    label: "What kind of connection is it ?",
    options: [
      {
        label: "Copper connection",
      },
      {
        label: "Fiber optic connection",
      },
      {
        label: "not specified",
      },
    ],
  },
  {
    id: 907636913,
    type: "checkbox",
    label: "What kind of connection is it ?",
    options: [
      {
        label: "Copper connection",
      },
      {
        label: "Fiber optic connection",
      },
      {
        label: "not specified",
      },
    ],
  },
  {
    id: 364814151,
    type: "checkbox",
    label: "What kind of connection is it ?",
    options: [
      {
        label: "Copper connection",
      },
      {
        label: "Fiber optic connection",
      },
      {
        label: "not specified",
      },
    ],
  },
  {
    id: 326025855,
    type: "checkbox",
    label: "What kind of connection is it ?",
    options: [
      {
        label: "Copper connection",
      },
      {
        label: "Fiber optic connection",
      },
      {
        label: "not specified",
      },
    ],
  },
  {
    id: 331559268,
    type: "checkbox",
    label: "What kind of connection is it ?",
    options: [
      {
        label: "Copper connection",
      },
      {
        label: "Fiber optic connection",
      },
      {
        label: "not specified",
      },
    ],
  },
];

export default electrician;
