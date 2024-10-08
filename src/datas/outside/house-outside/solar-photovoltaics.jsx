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
        id: 183630977,
        label: "Install solar/photovoltaic system",
      },
      {
        id: 345298295,
        label: "Repair solar/photovoltaic system",
      },
      {
        id: 218818167,
        label: "Other",
      },
    ],
  },
  {
    id: 183630977,
    type: "inputBox",
    mainId: 706151230,
    label: "How many floors does the building have ?",
    options: [{ label: "input" }],
  },
  {
    id: 706151230,
    type: "checkbox",
    label: "When was the building built ?",
    options: [
      {
        id: 446155837,
        label: "New building",
      },
      {
        id: 809035352,
        label: "2010s",
      },
      {
        id: 471525939,
        label: "2000s",
      },
      {
        id: 701097188,
        label: "1990s",
      },
      {
        id: 548018424,
        label: "1980s",
      },
      {
        id: 676123327,
        label: "1970s",
      },
      {
        id: 387561825,
        label: "1960s",
      },
      {
        id: 157795416,
        label: "1950s",
      },
      {
        id: 621259967,
        label: "Old building",
      },
      {
        id: 283532466,
        label: "I do not know",
      },
    ],
  },
  // New building
  {
    id: 446155837,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_shape_is_the_roof(
      448976889,
      716023639,
      817738360,
      875522887,
      477007408,
      313475640
    ),
  },
  {
    id: 448976889,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "inputBox",
    mainId: 690514271,
    label: "How big is the roof area approximately ?",
    options: [{ label: "input" }],
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
    id: 809035352,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_shape_is_the_roof(
      448976889,
      716023639,
      817738360,
      875522887,
      477007408,
      313475640
    ),
  },
  {
    id: 448976889,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "How big is the roof area approximately ?",
    options: [
      {
        id: 690514271,
        label: "input",
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
    id: 471525939,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_shape_is_the_roof(
      448976889,
      716023639,
      817738360,
      875522887,
      477007408,
      313475640
    ),
  },
  {
    id: 448976889,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "How big is the roof area approximately ?",
    options: [
      {
        id: 690514271,
        label: "input",
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
    id: 701097188,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_shape_is_the_roof(
      448976889,
      716023639,
      817738360,
      875522887,
      477007408,
      313475640
    ),
  },
  {
    id: 448976889,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "How big is the roof area approximately ?",
    options: [
      {
        id: 690514271,
        label: "input",
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
    id: 548018424,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_shape_is_the_roof(
      448976889,
      716023639,
      817738360,
      875522887,
      477007408,
      313475640
    ),
  },
  {
    id: 448976889,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "How big is the roof area approximately ?",
    options: [
      {
        id: 690514271,
        label: "input",
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
    id: 676123327,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_shape_is_the_roof(
      448976889,
      716023639,
      817738360,
      875522887,
      477007408,
      313475640
    ),
  },
  {
    id: 448976889,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "How big is the roof area approximately ?",
    options: [
      {
        id: 690514271,
        label: "input",
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
    id: 387561825,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_shape_is_the_roof(
      448976889,
      716023639,
      817738360,
      875522887,
      477007408,
      313475640
    ),
  },
  {
    id: 448976889,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "How big is the roof area approximately ?",
    options: [
      {
        id: 690514271,
        label: "input",
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
    id: 157795416,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_shape_is_the_roof(
      448976889,
      716023639,
      817738360,
      875522887,
      477007408,
      313475640
    ),
  },
  {
    id: 448976889,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "How big is the roof area approximately ?",
    options: [
      {
        id: 690514271,
        label: "input",
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
    id: 621259967,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_shape_is_the_roof(
      448976889,
      716023639,
      817738360,
      875522887,
      477007408,
      313475640
    ),
  },
  {
    id: 448976889,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "How big is the roof area approximately ?",
    options: [
      {
        id: 690514271,
        label: "input",
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
    id: 283532466,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_shape_is_the_roof(
      448976889,
      716023639,
      817738360,
      875522887,
      477007408,
      313475640
    ),
  },
  {
    id: 448976889,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "When was the building built ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "How big is the roof area approximately ?",
    options: [
      {
        id: 690514271,
        label: "input",
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
    id: 218818167,
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
