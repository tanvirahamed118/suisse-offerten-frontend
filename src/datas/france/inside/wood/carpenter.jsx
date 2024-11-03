const carpenter = [
  {
    id: 213801317,
    type: "checkbox",
    label: "In which area do you need carpentry services ?",
    options: [
      {
        id: 6842066448,
        label: "Furniture",
        des: "Custom-made furniture, furniture restoration, assembly of ready-made furniture (IKEA, etc.)",
      },
      {
        id: 5664928063,
        label: "Windows / Doors / Floors",
        des: "Installing or repairing doors / windows / floors",
      },
      {
        id: 9746607194,
        label: "Kitchens",
        des: "Kitchen construction, kitchen assembly, kitchen modules, worktops",
      },
      {
        label: "Other carpentry work",
        des: "Partition walls, wooden ceilings, plasterboard, roof dormers, stairs, handrails, etc.",
        credit: 15,
      },
    ],
  },
  {
    id: 6842066448,
    type: "checkbox",
    label: "What type of furniture carpentry service do you need ?",
    options: [
      {
        id: 2797419531,
        label: "Custom-made furniture",
        des: "Built-in wardrobe, table, bed, shelf, sideboard, etc.",
      },
      {
        id: 4117026822,
        label: "Restoration / repair of furniture",
        des: "Sanding, oiling, varnishing, veneering, shortening, etc.",
      },
      {
        label: "Assembly / installation of furniture",
        des: "Assembly of ready-made furniture (IKEA, USM, etc.)",
        credit: 13,
      },
    ],
  },
  {
    id: 2797419531,
    type: "checkbox",
    label: "What type of custom-made furniture do you need ?",
    options: [
      {
        id: 8002983921,
        label: "Storage furniture",
        des: "Built-in cupboards, wardrobes, shelves, etc.",
        credit: 25,
      },
      {
        label: "Kitchen modules",
        des: "Cabinets, fronts, carcasses, etc.",
        credit: 20,
      },
      {
        label: "Other furniture / custom-made items",
        des: "Table, bench, bed, reception desk, etc.",
        credit: 15,
      },
    ],
  },
  {
    id: 8002983921,
    type: "checkbox",
    label: "What type of storage furniture do you need ?",
    options: [
      {
        label: "Built-in closet",
      },
      {
        label: "shelf",
      },
      {
        label: "Dresser",
      },
      {
        label: "Sideboard",
      },
      {
        label: "Other or more of the above",
      },
    ],
  },
  {
    id: 4117026822,
    type: "checkbox",
    label: "Is it a small or large repair job ?",
    options: [
      {
        label: "Small repair",
        des: "An all-rounder could also do the job (stabilize a wobbly table, remove small scratches, repair a torn hinge, etc.)",
        credit: 8,
      },
      {
        label: "Major repair / restoration",
        des: "I need a professional carpenter (sanding and oiling a solid wood table, replacing a broken chair leg, restoring antique furniture, etc.)",
        credit: 15,
      },
    ],
  },
  //   window
  {
    id: 5664928063,
    type: "checkbox",
    label: "In which area do you need the service ?",
    options: [
      {
        id: 7261522584,
        label: "Doors",
      },
      {
        id: 5149360031,
        label: "Frames",
      },
      {
        id: 6633063876,
        label: "Window",
      },
      {
        id: 1782405401,
        label: "Floors",
        credit: 13,
      },
      {
        label: "Something else, or several of the above",
        credit: 7,
      },
    ],
  },
  {
    id: 7261522584,
    type: "checkbox",
    label: "What door services do you need ?",
    options: [
      {
        id: 4887983061,
        label: "Installing doors",
      },
      {
        label: "Repair or adjust doors",
        credit: 5,
      },
      {
        label: "Other",
        credit: 8,
      },
    ],
  },
  {
    id: 4887983061,
    type: "checkbox",
    label: "How many doors are there ?",
    options: [
      {
        id: 170406791,
        label: "1 door",
        credit: 8,
      },
      {
        id: 307972501,
        label: "2 to 3 doors",
        credit: 25,
      },
      {
        id: 444388335,
        label: "4 or more doors",
        credit: 35,
      },
    ],
  },
  {
    id: 170406791,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 307972501,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 444388335,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 5149360031,
    type: "checkbox",
    label: "How many doors are there ?",
    options: [
      {
        label: "1 door",
        credit: 8,
      },
      {
        label: "2 to 3 doors",
        credit: 25,
      },
      {
        label: "4 or more doors",
        credit: 35,
      },
    ],
  },
  {
    id: 6633063876,
    type: "checkbox",
    label: "What door services do you need ?",
    options: [
      {
        id: 602639592,
        label: "Installing or replacing windows",
      },
      {
        label: "Repairing or customizing windows",
        credit: 13,
      },
      {
        label: "Other",
        credit: 8,
      },
    ],
  },
  {
    id: 602639592,
    type: "checkbox",
    label: "How many windows are there ?",
    options: [
      {
        id: 653395436,
        label: "1 to 2 windows",
        credit: 20,
      },
      {
        id: 477359243,
        label: "3 to 5 windows",
        credit: 30,
      },
      {
        id: 393536330,
        label: "6 to 9 windows",
        credit: 45,
      },
      {
        id: 956030516,
        label: "10 or more windows",
        credit: 80,
      },
    ],
  },
  {
    id: 653395436,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 477359243,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 393536330,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 956030516,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },

  {
    id: 1782405401,
    type: "checkbox",
    label: "What flooring services do you need ?",
    options: [
      {
        id: 377750590,
        label: "Laying the floor",
      },
      {
        id: 269830556,
        label: "Sanding / oiling / sealing floors",
      },
      {
        id: 941261816,
        label: "Repair / adjust floor",
      },
      {
        id: 223056452,
        label: "Other",
      },
    ],
  },
  //   laying
  {
    id: 377750590,
    type: "checkbox",
    label: "What kind of floor is it ?",
    options: [
      {
        id: 269499636,
        label: "Solid wood floorboards",
      },
      {
        id: 946739860,
        label: "parquet",
      },
      {
        id: 799417592,
        label: "Other",
      },
    ],
  },
  {
    id: 269499636,
    type: "checkbox",
    label: "How many rooms are there ?",
    options: [
      {
        id: 885796561,
        label: "1 to 2 rooms",
      },
      {
        id: 441659568,
        label: "3 to 4 rooms",
      },
      {
        id: 829910918,
        label: "5 or more rooms",
      },
      {
        id: 695487785,
        label: "It is a commercial property",
      },
    ],
  },
  {
    id: 885796561,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 441659568,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 829910918,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 695487785,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 946739860,
    type: "checkbox",
    label: "How many rooms are there ?",
    options: [
      {
        id: 885796561,
        label: "1 to 2 rooms",
      },
      {
        id: 441659568,
        label: "3 to 4 rooms",
      },
      {
        id: 829910918,
        label: "5 or more rooms",
      },
      {
        id: 695487785,
        label: "It is a commercial property",
      },
    ],
  },
  {
    id: 885796561,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 441659568,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 829910918,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 695487785,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  //   laying
  // sending
  {
    id: 269830556,
    type: "checkbox",
    label: "What kind of floor is it ?",
    options: [
      {
        id: 269499636,
        label: "Solid wood floorboards",
      },
      {
        id: 946739860,
        label: "parquet",
      },
      {
        id: 799417592,
        label: "Other",
      },
    ],
  },
  {
    id: 269499636,
    type: "checkbox",
    label: "How many rooms are there ?",
    options: [
      {
        id: 885796561,
        label: "1 to 2 rooms",
      },
      {
        id: 441659568,
        label: "3 to 4 rooms",
      },
      {
        id: 829910918,
        label: "5 or more rooms",
      },
      {
        id: 695487785,
        label: "It is a commercial property",
      },
    ],
  },
  {
    id: 885796561,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 441659568,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 829910918,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 695487785,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 946739860,
    type: "checkbox",
    label: "How many rooms are there ?",
    options: [
      {
        id: 885796561,
        label: "1 to 2 rooms",
      },
      {
        id: 441659568,
        label: "3 to 4 rooms",
      },
      {
        id: 829910918,
        label: "5 or more rooms",
      },
      {
        id: 695487785,
        label: "It is a commercial property",
      },
    ],
  },
  {
    id: 885796561,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 441659568,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 829910918,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 695487785,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  // sending
  // repire
  {
    id: 941261816,
    type: "checkbox",
    label: "What kind of floor is it ?",
    options: [
      {
        id: 269499636,
        label: "Solid wood floorboards",
      },
      {
        id: 946739860,
        label: "parquet",
      },
      {
        id: 799417592,
        label: "Other",
      },
    ],
  },
  {
    id: 269499636,
    type: "checkbox",
    label: "How many rooms are there ?",
    options: [
      {
        id: 885796561,
        label: "1 to 2 rooms",
      },
      {
        id: 441659568,
        label: "3 to 4 rooms",
      },
      {
        id: 829910918,
        label: "5 or more rooms",
      },
      {
        id: 695487785,
        label: "It is a commercial property",
      },
    ],
  },
  {
    id: 885796561,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 441659568,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 829910918,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 695487785,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 946739860,
    type: "checkbox",
    label: "How many rooms are there ?",
    options: [
      {
        id: 885796561,
        label: "1 to 2 rooms",
      },
      {
        id: 441659568,
        label: "3 to 4 rooms",
      },
      {
        id: 829910918,
        label: "5 or more rooms",
      },
      {
        id: 695487785,
        label: "It is a commercial property",
      },
    ],
  },
  {
    id: 885796561,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 441659568,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 829910918,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 695487785,
    type: "checkbox",
    label: "Are the doors already there ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  // repire
  //   window

  // kitchen
  {
    id: 9746607194,
    type: "checkbox",
    label: "What kitchen carpentry services do you need ?",
    options: [
      {
        id: 816112159,
        label: "Assembly of a prefabricated kitchen",
        credit: 25,
      },
      {
        label: "Restoring or adapting a kitchen",
        credit: 20,
      },
      {
        label: "Custom-made kitchen furniture or worktops",
        credit: 15,
      },
      {
        label: "Kitchen planning",
        credit: 45,
      },
      {
        label: "Other",
        credit: 15,
      },
    ],
  },
  {
    id: 816112159,
    type: "checkbox",
    label: "What services should be provided during assembly ?",
    options: [
      {
        label: "Assembly of a prefabricated kitchen",
      },
      {
        label: "Adjust / assemble worktop",
      },
      {
        label: "Dismantling old kitchen",
      },
      {
        label: "Disposal of old kitchen",
      },
      {
        label: "Transport of the kitchen",
      },
      {
        label: "Installation and connection of electrical appliances",
      },
      {
        label: "Dismantling and disconnecting electrical devices",
      },
    ],
  },
  // kitchen
];

export default carpenter;
