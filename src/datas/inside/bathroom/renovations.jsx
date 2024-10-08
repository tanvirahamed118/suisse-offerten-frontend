const renovations = [
  {
    id: 683493762,
    type: "checkbox",
    label: "What work needs to be done ?",
    options: [
      {
        id: 780693030,
        label: "Renovation / installation of a bathroom",
        des: "Complete change of a bathroom, or replacing a bathroom and renovating",
      },
      {
        id: 677229573,
        label: "Installing or replacing a fitting",
        des: "e.g. replacing a shower, bathtub, toilet, sink, etc.",
      },
      {
        id: 265742934,
        label: "repair",
        des: "e.g. pipelines, leaks, sewage, panels, etc.",
      },
      {
        id: 324202133,
        label: "Plates",
        des: "Only tile the floors or walls",
      },
      {
        id: 163437092,
        label: "Other",
      },
    ],
  },
  {
    id: 780693030,
    type: "checkbox",
    label: "How many bathrooms need to be renovated/installed ?",
    options: [
      {
        id: 328244547,
        label: "1",
      },
      {
        id: 953718027,
        label: "2 or more",
      },
    ],
  },
  //   1
  {
    id: 328244547,
    type: "checkbox",
    label: "What kind of bathroom ?",
    options: [
      {
        id: 458925628,
        label: "Main bathroom",
      },
      {
        id: 880710682,
        label: "private bathroom",
      },
      {
        id: 884608829,
        label: "Guest bathroom",
      },
      {
        id: 797322370,
        label: "Other",
      },
    ],
  },
  //   main
  {
    id: 458925628,
    type: "checkbox",
    label: "How extensive is the work ?",
    options: [
      {
        id: 146207066,
        label: "Comprehensive bathroom renovation",
        des: "Replace the bathroom and everything associated with it (e.g. tiles, floor, ceiling, electrics)",
      },
      {
        id: 941557853,
        label: "Replacing a bathroom",
        des: "Replace the bathroom without tiles, floor, electrics, etc.",
      },
      {
        id: 413876972,
        label: "Smaller jobs",
        des: "Replace only one fitting, e.g. shower or bathtub",
      },
    ],
  },
  //   comprehensive
  {
    id: 146207066,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 381456876,
        label: "Yes",
      },
      {
        id: 133670142,
        label: "No",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  //   comprehensive
  // replacion
  {
    id: 941557853,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 381456876,
        label: "Yes",
      },
      {
        id: 133670142,
        label: "No",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  // replacion
  // smaller
  {
    id: 413876972,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 381456876,
        label: "Yes",
      },
      {
        id: 133670142,
        label: "No",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  // smaller
  //   main
  // private
  {
    id: 880710682,
    type: "checkbox",
    label: "How extensive is the work ?",
    options: [
      {
        id: 146207066,
        label: "Comprehensive bathroom renovation",
        des: "Replace the bathroom and everything associated with it (e.g. tiles, floor, ceiling, electrics)",
      },
      {
        id: 941557853,
        label: "Replacing a bathroom",
        des: "Replace the bathroom without tiles, floor, electrics, etc.",
      },
      {
        id: 413876972,
        label: "Smaller jobs",
        des: "Replace only one fitting, e.g. shower or bathtub",
      },
    ],
  },
  //   comprehensive
  {
    id: 146207066,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 381456876,
        label: "Yes",
      },
      {
        id: 133670142,
        label: "No",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  //   comprehensive
  // replacion
  {
    id: 941557853,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 381456876,
        label: "Yes",
      },
      {
        id: 133670142,
        label: "No",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  // replacion
  // smaller
  {
    id: 413876972,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 381456876,
        label: "Yes",
      },
      {
        id: 133670142,
        label: "No",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  // smaller
  // private
  // guest
  {
    id: 884608829,
    type: "checkbox",
    label: "How extensive is the work ?",
    options: [
      {
        id: 146207066,
        label: "Comprehensive bathroom renovation",
        des: "Replace the bathroom and everything associated with it (e.g. tiles, floor, ceiling, electrics)",
      },
      {
        id: 941557853,
        label: "Replacing a bathroom",
        des: "Replace the bathroom without tiles, floor, electrics, etc.",
      },
      {
        id: 413876972,
        label: "Smaller jobs",
        des: "Replace only one fitting, e.g. shower or bathtub",
      },
    ],
  },
  //   comprehensive
  {
    id: 146207066,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 381456876,
        label: "Yes",
      },
      {
        id: 133670142,
        label: "No",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  //   comprehensive
  // replacion
  {
    id: 941557853,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 381456876,
        label: "Yes",
      },
      {
        id: 133670142,
        label: "No",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  // replacion
  // smaller
  {
    id: 413876972,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 381456876,
        label: "Yes",
      },
      {
        id: 133670142,
        label: "No",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  // smaller
  // guest
  //   1

  // 2
  {
    id: 953718027,
    type: "checkbox",
    label: "What kind of bathroom ?",
    options: [
      {
        id: 458925628,
        label: "Main bathroom",
      },
      {
        id: 880710682,
        label: "private bathroom",
      },
      {
        id: 884608829,
        label: "Guest bathroom",
      },
      {
        id: 797322370,
        label: "Other",
      },
    ],
  },
  //   main
  {
    id: 458925628,
    type: "checkbox",
    label: "How extensive is the work ?",
    options: [
      {
        id: 146207066,
        label: "Comprehensive bathroom renovation",
        des: "Replace the bathroom and everything associated with it (e.g. tiles, floor, ceiling, electrics)",
      },
      {
        id: 941557853,
        label: "Replacing a bathroom",
        des: "Replace the bathroom without tiles, floor, electrics, etc.",
      },
      {
        id: 413876972,
        label: "Smaller jobs",
        des: "Replace only one fitting, e.g. shower or bathtub",
      },
    ],
  },
  //   comprehensive
  {
    id: 146207066,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 381456876,
        label: "Yes",
      },
      {
        id: 133670142,
        label: "No",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  //   comprehensive
  // replacion
  {
    id: 941557853,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 381456876,
        label: "Yes",
      },
      {
        id: 133670142,
        label: "No",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  // replacion
  // smaller
  {
    id: 413876972,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 381456876,
        label: "Yes",
      },
      {
        id: 133670142,
        label: "No",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  // smaller
  //   main
  // private
  {
    id: 880710682,
    type: "checkbox",
    label: "How extensive is the work ?",
    options: [
      {
        id: 146207066,
        label: "Comprehensive bathroom renovation",
        des: "Replace the bathroom and everything associated with it (e.g. tiles, floor, ceiling, electrics)",
      },
      {
        id: 941557853,
        label: "Replacing a bathroom",
        des: "Replace the bathroom without tiles, floor, electrics, etc.",
      },
      {
        id: 413876972,
        label: "Smaller jobs",
        des: "Replace only one fitting, e.g. shower or bathtub",
      },
    ],
  },
  //   comprehensive
  {
    id: 146207066,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 381456876,
        label: "Yes",
      },
      {
        id: 133670142,
        label: "No",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  //   comprehensive
  // replacion
  {
    id: 941557853,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 381456876,
        label: "Yes",
      },
      {
        id: 133670142,
        label: "No",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  // replacion
  // smaller
  {
    id: 413876972,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 381456876,
        label: "Yes",
      },
      {
        id: 133670142,
        label: "No",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  // smaller
  // private
  // guest
  {
    id: 884608829,
    type: "checkbox",
    label: "How extensive is the work ?",
    options: [
      {
        id: 146207066,
        label: "Comprehensive bathroom renovation",
        des: "Replace the bathroom and everything associated with it (e.g. tiles, floor, ceiling, electrics)",
      },
      {
        id: 941557853,
        label: "Replacing a bathroom",
        des: "Replace the bathroom without tiles, floor, electrics, etc.",
      },
      {
        id: 413876972,
        label: "Smaller jobs",
        des: "Replace only one fitting, e.g. shower or bathtub",
      },
    ],
  },
  //   comprehensive
  {
    id: 146207066,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 381456876,
        label: "Yes",
      },
      {
        id: 133670142,
        label: "No",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  //   comprehensive
  // replacion
  {
    id: 941557853,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 381456876,
        label: "Yes",
      },
      {
        id: 133670142,
        label: "No",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  // replacion
  // smaller
  {
    id: 413876972,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 381456876,
        label: "Yes",
      },
      {
        id: 133670142,
        label: "No",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Does the contract involve major construction work ?",
    options: [
      {
        id: 725552152,
        label: "Yes, already exists.",
      },
      {
        id: 697053991,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  // smaller
  // guest
  // 2

  // Installing
  {
    id: 677229573,
    type: "multibox",
    mainId: 465519550,
    label: "Which fittings need to be replaced ?",
    options: [
      {
        label: "Bathtub",
      },
      {
        label: "Shower",
      },
      {
        label: "Shower cubicle",
      },
      {
        label: "toilet",
      },
      {
        label: "Bathroom sink",
      },
      {
        label: "Other",
      },
    ],
  },
  {
    id: 465519550,
    type: "checkbox",
    label: "Do you need additional work ?",
    options: [
      {
        id: 239743071,
        label: "Yes",
      },
      {
        id: 745496635,
        label: "No",
      },
    ],
  },
  {
    id: 239743071,
    type: "checkbox",
    label:
      "Are sanitary facilities, tiles, etc. (materials) already in place ?",
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
    id: 745496635,
    type: "checkbox",
    label:
      "Are sanitary facilities, tiles, etc. (materials) already in place ?",
    options: [
      {
        label: "Yes, already exists.",
      },
      {
        label: "No, still need to be procured.",
      },
    ],
  },
  // Installing

  // repair
  {
    id: 465519550,
    type: "checkbox",
    label:
      "Are sanitary facilities, tiles, etc. (materials) already in place ?",
    options: [
      {
        id: 561008128,
        label: "Yes, already exists.",
      },
      {
        id: 559758229,
        label: "No, still need to be procured.",
      },
    ],
  },
  {
    id: 561008128,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  {
    id: 559758229,
    type: "checkbox",
    label: "Approximate bathroom size:",
    options: [
      {
        label: "up to 5m2",
      },
      {
        label: "5-10 m2",
      },
      {
        label: "10m2 or more",
      },
    ],
  },
  // repair

  // plates
  {
    id: 324202133,
    type: "checkbox",
    label: "What kind of panel work do you need ?",
    options: [
      {
        label: "Re-laying / replacing tiles",
      },
      {
        label: "Repair tiles",
      },
      {
        label: "Re-grouting",
      },
      {
        label: "Other",
      },
    ],
  },
  // plates
];

export default renovations;
