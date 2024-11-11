import {
  can_you_access_inside,
  what_material_roof_made_of,
  what_shape_is_the_roof,
} from "../../reuse-data";

const solarPhotovoltaics = [
  {
    id: 780214185,
    type: "checkbox",
    label: "What should be done ?",
    options: [
      {
        id: 8749406053,
        label: "Install solar/photovoltaic system",
        credit: 80,
      },
      {
        id: 6659961620,
        label: "Repair solar/photovoltaic system",
        credit: 50,
      },
      {
        id: 6235626221,
        label: "Other",
        credit: 10,
      },
    ],
  },
  {
    id: 8749406053,
    type: "inputBox",
    mainId: 6331911139,
    label: "How many floors does the building have ?",
    options: [{ label: "m2" }],
  },
  {
    id: 6331911139,
    type: "checkbox",
    label: "What is the shape oft he roof ?",
    options: [
      {
        id: 7368909849,
        label: "New building",
      },
      {
        id: 3462809725,
        label: "2010s",
      },
      {
        id: 3187184009,
        label: "2000s",
      },
      {
        id: 8714156256,
        label: "1990s",
      },
      {
        id: 5315356513,
        label: "1980s",
      },
      {
        id: 5871461347,
        label: "1970s",
      },
      {
        id: 1366324554,
        label: "1960s",
      },
      {
        id: 8180265493,
        label: "1950s",
      },
      {
        id: 7846785863,
        label: "Old building",
      },
      {
        id: 5404490378,
        label: "I do not know",
      },
    ],
  },
  // New building
  {
    id: 7368909849,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_shape_is_the_roof(
      9958889616,
      2471209868,
      5025418832,
      8741082857,
      3921099680,
      8705446077
    ),
  },
  {
    id: 9958889616,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 2471209868,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 5025418832,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8741082857,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 3921099680,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8705446077,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8568461304,
    type: "inputBox",
    mainId: 690514271,
    label: "How big is the roof area approximately ?",
    options: [{ label: "m2" }],
  },
  {
    id: 1282229279,
    type: "inputBox",
    mainId: 690514271,
    label: "How big is the roof area approximately ?",
    options: [{ label: "m2" }],
  },
  {
    id: 7764318025,
    type: "inputBox",
    mainId: 690514271,
    label: "How big is the roof area approximately ?",
    options: [{ label: "m2" }],
  },
  {
    id: 4882368761,
    type: "inputBox",
    mainId: 690514271,
    label: "How big is the roof area approximately ?",
    options: [{ label: "m2" }],
  },
  {
    id: 4897753851,
    type: "inputBox",
    mainId: 690514271,
    label: "How big is the roof area approximately ?",
    options: [{ label: "m2" }],
  },
  {
    id: 9521177916,
    type: "inputBox",
    mainId: 690514271,
    label: "How big is the roof area approximately ?",
    options: [{ label: "m2" }],
  },
  {
    id: 2792396007,
    type: "inputBox",
    mainId: 690514271,
    label: "How big is the roof area approximately ?",
    options: [{ label: "m2" }],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Is the roof facing south ?",
    options: [
      {
        id: 789110281,
        label: "Yes",
      },
      {
        id: 475661121,
        label: "No",
      },
      {
        id: 817068880,
        label: "In part",
      },
      {
        id: 297525506,
        label: "I do not know",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  // New building
  // 2010s
  {
    id: 3462809725,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_shape_is_the_roof(
      9958889616,
      2471209868,
      5025418832,
      8741082857,
      3921099680,
      8705446077
    ),
  },
  {
    id: 9958889616,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 2471209868,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 5025418832,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8741082857,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 3921099680,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8705446077,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "How big is the roof area approximately ?",
    options: [
      {
        id: 690514271,
        label: "m2",
      },
    ],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Is the roof facing south ?",
    options: [
      {
        id: 789110281,
        label: "Yes",
      },
      {
        id: 475661121,
        label: "No",
      },
      {
        id: 817068880,
        label: "In part",
      },
      {
        id: 297525506,
        label: "I do not know",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  // 2010s
  // 2000s
  {
    id: 3187184009,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_shape_is_the_roof(
      9958889616,
      2471209868,
      5025418832,
      8741082857,
      3921099680,
      8705446077
    ),
  },
  {
    id: 9958889616,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 2471209868,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 5025418832,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8741082857,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 3921099680,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8705446077,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "How big is the roof area approximately ?",
    options: [
      {
        id: 690514271,
        label: "m2",
      },
    ],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Is the roof facing south ?",
    options: [
      {
        id: 789110281,
        label: "Yes",
      },
      {
        id: 475661121,
        label: "No",
      },
      {
        id: 817068880,
        label: "In part",
      },
      {
        id: 297525506,
        label: "I do not know",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  // 2000s
  // 1990s
  {
    id: 8714156256,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_shape_is_the_roof(
      9958889616,
      2471209868,
      5025418832,
      8741082857,
      3921099680,
      8705446077
    ),
  },
  {
    id: 9958889616,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 2471209868,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 5025418832,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8741082857,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 3921099680,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8705446077,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "How big is the roof area approximately ?",
    options: [
      {
        id: 690514271,
        label: "m2",
      },
    ],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Is the roof facing south ?",
    options: [
      {
        id: 789110281,
        label: "Yes",
      },
      {
        id: 475661121,
        label: "No",
      },
      {
        id: 817068880,
        label: "In part",
      },
      {
        id: 297525506,
        label: "I do not know",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  // 1990s
  // 1980s
  {
    id: 5315356513,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_shape_is_the_roof(
      9958889616,
      2471209868,
      5025418832,
      8741082857,
      3921099680,
      8705446077
    ),
  },
  {
    id: 9958889616,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 2471209868,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 5025418832,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8741082857,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 3921099680,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8705446077,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "How big is the roof area approximately ?",
    options: [
      {
        id: 690514271,
        label: "m2",
      },
    ],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Is the roof facing south ?",
    options: [
      {
        id: 789110281,
        label: "Yes",
      },
      {
        id: 475661121,
        label: "No",
      },
      {
        id: 817068880,
        label: "In part",
      },
      {
        id: 297525506,
        label: "I do not know",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  // 1980s
  // 1970s
  {
    id: 5871461347,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_shape_is_the_roof(
      9958889616,
      2471209868,
      5025418832,
      8741082857,
      3921099680,
      8705446077
    ),
  },
  {
    id: 9958889616,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 2471209868,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 5025418832,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8741082857,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 3921099680,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8705446077,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "How big is the roof area approximately ?",
    options: [
      {
        id: 690514271,
        label: "m2",
      },
    ],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Is the roof facing south ?",
    options: [
      {
        id: 789110281,
        label: "Yes",
      },
      {
        id: 475661121,
        label: "No",
      },
      {
        id: 817068880,
        label: "In part",
      },
      {
        id: 297525506,
        label: "I do not know",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  // 1970s
  // 1960s
  {
    id: 1366324554,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_shape_is_the_roof(
      9958889616,
      2471209868,
      5025418832,
      8741082857,
      3921099680,
      8705446077
    ),
  },
  {
    id: 9958889616,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 2471209868,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 5025418832,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8741082857,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 3921099680,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8705446077,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "How big is the roof area approximately ?",
    options: [
      {
        id: 690514271,
        label: "m2",
      },
    ],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Is the roof facing south ?",
    options: [
      {
        id: 789110281,
        label: "Yes",
      },
      {
        id: 475661121,
        label: "No",
      },
      {
        id: 817068880,
        label: "In part",
      },
      {
        id: 297525506,
        label: "I do not know",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  // 1960s
  // 1950s
  {
    id: 8180265493,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_shape_is_the_roof(
      9958889616,
      2471209868,
      5025418832,
      8741082857,
      3921099680,
      8705446077
    ),
  },
  {
    id: 9958889616,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 2471209868,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 5025418832,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8741082857,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 3921099680,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8705446077,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "How big is the roof area approximately ?",
    options: [
      {
        id: 690514271,
        label: "m2",
      },
    ],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Is the roof facing south ?",
    options: [
      {
        id: 789110281,
        label: "Yes",
      },
      {
        id: 475661121,
        label: "No",
      },
      {
        id: 817068880,
        label: "In part",
      },
      {
        id: 297525506,
        label: "I do not know",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  // 1950s
  // old building
  {
    id: 7846785863,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_shape_is_the_roof(
      9958889616,
      2471209868,
      5025418832,
      8741082857,
      3921099680,
      8705446077
    ),
  },
  {
    id: 9958889616,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 2471209868,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 5025418832,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8741082857,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 3921099680,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8705446077,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "How big is the roof area approximately ?",
    options: [
      {
        id: 690514271,
        label: "m2",
      },
    ],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Is the roof facing south ?",
    options: [
      {
        id: 789110281,
        label: "Yes",
      },
      {
        id: 475661121,
        label: "No",
      },
      {
        id: 817068880,
        label: "In part",
      },
      {
        id: 297525506,
        label: "I do not know",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  // old building
  // I do not know
  {
    id: 5404490378,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_shape_is_the_roof(
      9958889616,
      2471209868,
      5025418832,
      8741082857,
      3921099680,
      8705446077
    ),
  },
  {
    id: 9958889616,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 2471209868,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 5025418832,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8741082857,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 3921099680,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 8705446077,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(
      8568461304,
      1282229279,
      7764318025,
      4882368761,
      4897753851,
      9521177916,
      2792396007
    ),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "How big is the roof area approximately ?",
    options: [
      {
        id: 690514271,
        label: "m2",
      },
    ],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Is the roof facing south ?",
    options: [
      {
        id: 789110281,
        label: "Yes",
      },
      {
        id: 475661121,
        label: "No",
      },
      {
        id: 817068880,
        label: "In part",
      },
      {
        id: 297525506,
        label: "I do not know",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Can you access the roof from the inside ?",
    options: can_you_access_inside,
  },
  // I do not know
  {
    id: 6235626221,
    type: "checkbox",
    label: "What should be done ?",
    options: [
      {
        label: "Working on a thermal solar system",
      },
      {
        label: "Cleaning solar system",
      },
      {
        label: "Dispose of solar system",
      },
      {
        label: "Connecting a solar system",
      },
      {
        label: "Working on a thermal solar system",
        des: "E.g. to the public network",
      },
      {
        label: "Advice",
      },
    ],
  },
];

export default solarPhotovoltaics;
