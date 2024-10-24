const paintingPlastering = [
  {
    id: 778223551,
    type: "checkbox",
    label: "Do you need work done indoors or outdoors ?",
    options: [
      {
        id: 530145643,
        label: "Inside",
      },
      {
        id: 302901023,
        label: "Outside",
      },
      {
        id: 385420024,
        label: "Both",
      },
      {
        id: 598432534,
        label: "Other",
        credit: 5,
      },
    ],
  },
  //   inside
  {
    id: 530145643,
    type: "checkbox",
    label: "Approximately how much of the interior should be painted ?",
    options: [
      {
        id: 761250268,
        label: "Only a smaller area",
        credit: 2,
      },
      {
        id: 734067304,
        label: "Up to 5 walls / ceilings",
        credit: 7,
      },
      {
        id: 783577619,
        label: "6 to 10 walls / ceilings",
        credit: 12,
      },
      {
        id: 460418116,
        label: "11 to 20 walls / ceilings",
        credit: 17,
      },
      {
        id: 630867526,
        label: "21 to 30 walls / ceilings",
        credit: 22,
      },
      {
        id: 206749297,
        label: "31 or more walls / ceilings",
        credit: 35,
      },
    ],
  },
  {
    id: 761250268,
    type: "inputBox",
    label: "How large is the total area to be painted ?",
    options: [{ label: "m2" }],
  },
  {
    id: 734067304,
    type: "inputBox",
    label: "How large is the total area to be painted ?",
    options: [{ label: "m2" }],
  },
  {
    id: 783577619,
    type: "inputBox",
    label: "How large is the total area to be painted ?",
    options: [{ label: "m2" }],
  },
  {
    id: 460418116,
    type: "inputBox",
    label: "How large is the total area to be painted ?",
    options: [{ label: "m2" }],
  },
  {
    id: 630867526,
    type: "inputBox",
    label: "How large is the total area to be painted ?",
    options: [{ label: "m2" }],
  },
  {
    id: 206749297,
    type: "inputBox",
    label: "How large is the total area to be painted ?",
    options: [{ label: "m2" }],
  },
  //   inside
  // outside
  {
    id: 302901023,
    type: "checkbox",
    label: "Which outdoor objects should be worked on ?",
    options: [
      {
        id: 237163754,
        label: "Walls / Facades",
      },
      {
        id: 943070871,
        label: "Windows / Doors",
      },
      {
        id: 815982709,
        label: "Roof / roof parts",
      },
      {
        id: 562937386,
        label: "Other or more",
        credit: 10,
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "How much of the facade should be painted ?",
    options: [
      {
        id: 464762570,
        label: "Only a smaller area",
        credit: 2,
      },
      {
        id: 143484617,
        label: "Up to one page",
        credit: 5,
      },
      {
        id: 844079067,
        label: "2 to 3 pages",
        credit: 10,
      },
      {
        id: 576487974,
        label: "An entire single-family house",
        credit: 35,
      },
      {
        id: 296294573,
        label: "An entire apartment building",
        credit: 50,
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "inputBox",
    label: "How large is the total area to be painted ?",
    options: [{ label: "m2" }],
  },
  {
    id: 498603127,
    type: "inputBox",
    label: "How large is the total area to be painted ?",
    options: [{ label: "m2" }],
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "How many windows / doors should be painted ?",
    options: [
      {
        id: 970618046,
        label: "A window / a door",
        credit: 2,
      },
      {
        id: 166780055,
        label: "2 to 5 windows / doors",
        credit: 5,
      },
      {
        id: 293307341,
        label: "6 or more windows / doors",
        credit: 10,
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  //   Windows / Doors
  // Roof / roof parts
  {
    id: 815982709,
    type: "checkbox",
    label: "How many sides of the roof should be painted ?",
    options: [
      {
        id: 119723393,
        label: "On one side of the roof",
        credit: 5,
      },
      {
        id: 374016662,
        label: "On 2 to 3 sides of the roof",
        credit: 10,
      },
      {
        id: 786408353,
        label: "On all sides of the roof",
        credit: 25,
      },
    ],
  },
  {
    id: 119723393,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "How extensive is the order approximately ?",
    options: [
      {
        label: "Small (e.g. painting a wall, window, etc.)",
      },
      {
        label: "Medium (e.g. painting two complete rooms)",
      },
      {
        label: "Large (e.g. EFH point all interior walls)",
      },
      {
        label: "Very Large (e.g. MFH facades completely paint)",
      },
    ],
  },
  // outside
  //   both
  {
    id: 385420024,
    type: "checkbox",
    label: "Approximately how much of the interior should be painted ?",
    options: [
      {
        id: 705930396,
        label: "Only a smaller area",
      },
      {
        id: 439249238,
        label: "Up to 5 walls / ceilings",
      },
      {
        id: 835156570,
        label: "6 to 10 walls / ceilings",
      },
      {
        id: 397339129,
        label: "11 to 20 walls / ceilings",
      },
      {
        id: 170503051,
        label: "21 to 30 walls / ceilings",
      },
      {
        id: 924910083,
        label: "31 or more walls / ceilings",
      },
    ],
  },

  //   Only a smaller area
  {
    id: 705930396,
    type: "checkbox",
    label: "Which outdoor objects should be worked on ?",
    options: [
      {
        id: 237163754,
        label: "Walls / Facades",
      },
      {
        id: 943070871,
        label: "Windows / Doors",
      },
      {
        id: 815982709,
        label: "Roof / roof parts",
      },
      {
        id: 562937386,
        label: "Other or more",
        credit: 5,
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "How much of the facade should be painted ?",
    options: [
      {
        id: 464762570,
        label: "Only a smaller area",
      },
      {
        id: 143484617,
        label: "Up to one page",
      },
      {
        id: 844079067,
        label: "2 to 3 pages",
      },
      {
        id: 576487974,
        label: "An entire single-family house",
      },
      {
        id: 296294573,
        label: "An entire apartment building",
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "How many windows / doors should be painted ?",
    options: [
      {
        id: 970618046,
        label: "A window / a door",
        credit: 5,
      },
      {
        id: 166780055,
        label: "2 to 5 windows / doors",
        credit: 10,
      },
      {
        id: 293307341,
        label: "6 or more windows / doors",
        credit: 10,
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  //   Windows / Doors
  // Roof / roof parts
  {
    id: 815982709,
    type: "checkbox",
    label: "How many sides of the roof should be painted ?",
    options: [
      {
        id: 119723393,
        label: "On one side of the roof",
        credit: 5,
      },
      {
        id: 374016662,
        label: "On 2 to 3 sides of the roof",
        credit: 10,
      },
      {
        id: 786408353,
        label: "On all sides of the roof",
        credit: 25,
      },
    ],
  },
  {
    id: 119723393,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "How extensive is the order approximately ?",
    options: [
      {
        label: "Small (e.g. painting a wall, window, etc.)",
      },
      {
        label: "Medium (e.g. painting two complete rooms)",
      },
      {
        label: "Large (e.g. single-family house, paint all interior walls)",
      },
    ],
  },
  //   only a smaller area
  // up to 5 walls / cellings
  {
    id: 439249238,
    type: "checkbox",
    label: "Which outdoor objects should be worked on ?",
    options: [
      {
        id: 237163754,
        label: "Walls / Facades",
      },
      {
        id: 943070871,
        label: "Windows / Doors",
      },
      {
        id: 815982709,
        label: "Roof / roof parts",
      },
      {
        id: 562937386,
        label: "Other or more",
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "How much of the facade should be painted ?",
    options: [
      {
        id: 464762570,
        label: "Only a smaller area",
      },
      {
        id: 143484617,
        label: "Up to one page",
      },
      {
        id: 844079067,
        label: "2 to 3 pages",
      },
      {
        id: 576487974,
        label: "An entire single-family house",
      },
      {
        id: 296294573,
        label: "An entire apartment building",
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "How many windows / doors should be painted ?",
    options: [
      {
        id: 970618046,
        label: "A window / a door",
      },
      {
        id: 166780055,
        label: "2 to 5 windows / doors",
      },
      {
        id: 293307341,
        label: "6 or more windows / doors",
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  //   Windows / Doors
  // Roof / roof parts
  {
    id: 815982709,
    type: "checkbox",
    label: "How many sides of the roof should be painted ?",
    options: [
      {
        id: 119723393,
        label: "On one side of the roof",
      },
      {
        id: 374016662,
        label: "On 2 to 3 sides of the roof",
      },
      {
        id: 786408353,
        label: "On all sides of the roof",
      },
    ],
  },
  {
    id: 119723393,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "How extensive is the order approximately ?",
    options: [
      {
        label: "Small (e.g. painting a wall, window, etc.)",
      },
      {
        label: "Medium (e.g. painting two complete rooms)",
      },
      {
        label: "Large (e.g. single-family house, paint all interior walls)",
      },
    ],
  },
  // up to 5 walls / cellings
  // 6 to 10 walls / cellings
  {
    id: 835156570,
    type: "checkbox",
    label: "Which outdoor objects should be worked on ?",
    options: [
      {
        id: 237163754,
        label: "Walls / Facades",
      },
      {
        id: 943070871,
        label: "Windows / Doors",
      },
      {
        id: 815982709,
        label: "Roof / roof parts",
      },
      {
        id: 562937386,
        label: "Other or more",
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "How much of the facade should be painted ?",
    options: [
      {
        id: 464762570,
        label: "Only a smaller area",
      },
      {
        id: 143484617,
        label: "Up to one page",
      },
      {
        id: 844079067,
        label: "2 to 3 pages",
      },
      {
        id: 576487974,
        label: "An entire single-family house",
      },
      {
        id: 296294573,
        label: "An entire apartment building",
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "How many windows / doors should be painted ?",
    options: [
      {
        id: 970618046,
        label: "A window / a door",
      },
      {
        id: 166780055,
        label: "2 to 5 windows / doors",
      },
      {
        id: 293307341,
        label: "6 or more windows / doors",
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  //   Windows / Doors
  // Roof / roof parts
  {
    id: 815982709,
    type: "checkbox",
    label: "How many sides of the roof should be painted ?",
    options: [
      {
        id: 119723393,
        label: "On one side of the roof",
      },
      {
        id: 374016662,
        label: "On 2 to 3 sides of the roof",
      },
      {
        id: 786408353,
        label: "On all sides of the roof",
      },
    ],
  },
  {
    id: 119723393,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "How extensive is the order approximately ?",
    options: [
      {
        label: "Small (e.g. painting a wall, window, etc.)",
      },
      {
        label: "Medium (e.g. painting two complete rooms)",
      },
      {
        label: "Large (e.g. single-family house, paint all interior walls)",
      },
    ],
  },
  // 6 to 10 walls / cellings
  // 10 to 20 walls / celling
  {
    id: 397339129,
    type: "checkbox",
    label: "Which outdoor objects should be worked on ?",
    options: [
      {
        id: 237163754,
        label: "Walls / Facades",
      },
      {
        id: 943070871,
        label: "Windows / Doors",
      },
      {
        id: 815982709,
        label: "Roof / roof parts",
      },
      {
        id: 562937386,
        label: "Other or more",
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "How much of the facade should be painted ?",
    options: [
      {
        id: 464762570,
        label: "Only a smaller area",
      },
      {
        id: 143484617,
        label: "Up to one page",
      },
      {
        id: 844079067,
        label: "2 to 3 pages",
      },
      {
        id: 576487974,
        label: "An entire single-family house",
      },
      {
        id: 296294573,
        label: "An entire apartment building",
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "How many windows / doors should be painted ?",
    options: [
      {
        id: 970618046,
        label: "A window / a door",
      },
      {
        id: 166780055,
        label: "2 to 5 windows / doors",
      },
      {
        id: 293307341,
        label: "6 or more windows / doors",
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  //   Windows / Doors
  // Roof / roof parts
  {
    id: 815982709,
    type: "checkbox",
    label: "How many sides of the roof should be painted ?",
    options: [
      {
        id: 119723393,
        label: "On one side of the roof",
      },
      {
        id: 374016662,
        label: "On 2 to 3 sides of the roof",
      },
      {
        id: 786408353,
        label: "On all sides of the roof",
      },
    ],
  },
  {
    id: 119723393,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "How extensive is the order approximately ?",
    options: [
      {
        label: "Small (e.g. painting a wall, window, etc.)",
      },
      {
        label: "Medium (e.g. painting two complete rooms)",
      },
      {
        label: "Large (e.g. single-family house, paint all interior walls)",
      },
    ],
  },
  // 10 to 20 walls / celling
  // 21 to 30 walls / celling
  {
    id: 170503051,
    type: "checkbox",
    label: "Which outdoor objects should be worked on ?",
    options: [
      {
        id: 237163754,
        label: "Walls / Facades",
      },
      {
        id: 943070871,
        label: "Windows / Doors",
      },
      {
        id: 815982709,
        label: "Roof / roof parts",
      },
      {
        id: 562937386,
        label: "Other or more",
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "How much of the facade should be painted ?",
    options: [
      {
        id: 464762570,
        label: "Only a smaller area",
      },
      {
        id: 143484617,
        label: "Up to one page",
      },
      {
        id: 844079067,
        label: "2 to 3 pages",
      },
      {
        id: 576487974,
        label: "An entire single-family house",
      },
      {
        id: 296294573,
        label: "An entire apartment building",
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "How many windows / doors should be painted ?",
    options: [
      {
        id: 970618046,
        label: "A window / a door",
      },
      {
        id: 166780055,
        label: "2 to 5 windows / doors",
      },
      {
        id: 293307341,
        label: "6 or more windows / doors",
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  //   Windows / Doors
  // Roof / roof parts
  {
    id: 815982709,
    type: "checkbox",
    label: "How many sides of the roof should be painted ?",
    options: [
      {
        id: 119723393,
        label: "On one side of the roof",
      },
      {
        id: 374016662,
        label: "On 2 to 3 sides of the roof",
      },
      {
        id: 786408353,
        label: "On all sides of the roof",
      },
    ],
  },
  {
    id: 119723393,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "How extensive is the order approximately ?",
    options: [
      {
        label: "Small (e.g. painting a wall, window, etc.)",
      },
      {
        label: "Medium (e.g. painting two complete rooms)",
      },
      {
        label: "Large (e.g. single-family house, paint all interior walls)",
      },
    ],
  },
  // 21 to 30 walls / celling
  // 31 to more walls / celling
  {
    id: 924910083,
    type: "checkbox",
    label: "Which outdoor objects should be worked on ?",
    options: [
      {
        id: 237163754,
        label: "Walls / Facades",
      },
      {
        id: 943070871,
        label: "Windows / Doors",
      },
      {
        id: 815982709,
        label: "Roof / roof parts",
      },
      {
        id: 562937386,
        label: "Other or more",
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "How much of the facade should be painted ?",
    options: [
      {
        id: 464762570,
        label: "Only a smaller area",
      },
      {
        id: 143484617,
        label: "Up to one page",
      },
      {
        id: 844079067,
        label: "2 to 3 pages",
      },
      {
        id: 576487974,
        label: "An entire single-family house",
      },
      {
        id: 296294573,
        label: "An entire apartment building",
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "How many windows / doors should be painted ?",
    options: [
      {
        id: 970618046,
        label: "A window / a door",
      },
      {
        id: 166780055,
        label: "2 to 5 windows / doors",
      },
      {
        id: 293307341,
        label: "6 or more windows / doors",
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  //   Windows / Doors
  // Roof / roof parts
  {
    id: 815982709,
    type: "checkbox",
    label: "How many sides of the roof should be painted ?",
    options: [
      {
        id: 119723393,
        label: "On one side of the roof",
      },
      {
        id: 374016662,
        label: "On 2 to 3 sides of the roof",
      },
      {
        id: 786408353,
        label: "On all sides of the roof",
      },
    ],
  },
  {
    id: 119723393,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Is there already scaffolding in place ?",
    options: [
      {
        id: 274954248,
        label: "Yes",
      },
      {
        id: 498603127,
        label: "No",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "How large is the total area to be painted ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "How large is the total area to be painted ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "How extensive is the order approximately ?",
    options: [
      {
        label: "Small (e.g. painting a wall, window, etc.)",
      },
      {
        label: "Medium (e.g. painting two complete rooms)",
      },
      {
        label: "Large (e.g. single-family house, paint all interior walls)",
      },
    ],
  },
  // 31 to more walls / celling
  //   both
  // other
  {
    id: 598432534,
    type: "checkbox",
    label: "How extensive is the order approximately ?",
    options: [
      {
        label: "Small (e.g. painting a wall, window, etc.)",
      },
      {
        label: "Medium (e.g. painting two complete rooms)",
      },
      {
        label: "Large (e.g. single-family house, paint all interior walls)",
      },
    ],
  },
  // other
];

export default paintingPlastering;
