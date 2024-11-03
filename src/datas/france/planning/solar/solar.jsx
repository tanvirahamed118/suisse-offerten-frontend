import {
  can_you_access_inside,
  what_material_roof_made_of,
  what_shape_is_the_roof,
} from "../../reuse-data";

const solar = [
  {
    id: 3793680715,
    type: "checkbox",
    label: "What should be done ?",
    options: [
      {
        id: 5511649064,
        label: "Install solar/photovoltaic system",
        credit: 80,
      },
      {
        id: 345298295,
        label: "Repair solar/photovoltaic system",
        credit: 50,
      },
      {
        id: 218925813,
        label: "Other",
        credit: 10,
      },
    ],
  },
  {
    id: 5511649064,
    type: "inputBox",
    mainId: 5325963557,
    label: "How many floors does the building have ?",
    options: [
      {
        label: "Floor(s)",
      },
    ],
  },
  {
    id: 5325963557,
    type: "checkbox",
    label: "What is the shape oft he roof?",
    options: [
      {
        id: 6357454221,
        label: "New building",
      },
      {
        id: 7916364271,
        label: "2010s",
      },
      {
        id: 8578524161,
        label: "2000s",
      },
      {
        id: 8250978285,
        label: "1990s",
      },
      {
        id: 6398495153,
        label: "1980s",
      },
      {
        id: 4920166650,
        label: "1970s",
      },
      {
        id: 5735839282,
        label: "1960s",
      },
      {
        id: 7618322058,
        label: "1950s",
      },
      {
        id: 7216118691,
        label: "Old building",
      },
      {
        id: 3260277122,
        label: "I do not know",
      },
    ],
  },
  // New building
  {
    id: 6357454221,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_shape_is_the_roof(
      3651467938,
      6558630119,
      8916162257,
      9482198320,
      4562688947,
      6439852333
    ),
  },
  {
    id: 3651467938,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 6558630119,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 8916162257,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 9482198320,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 4562688947,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 6439852333,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
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
  // New building
  // 2010s
  {
    id: 7916364271,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
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
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
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
    id: 8578524161,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
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
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
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
    id: 8250978285,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
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
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
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
    id: 6398495153,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
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
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
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
    id: 4920166650,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
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
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
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
    id: 5735839282,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
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
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
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
    id: 7618322058,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
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
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
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
    id: 7216118691,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
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
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
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
    id: 3260277122,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
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
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "What is the Material the roof is made of ?",
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
    id: 218925813,
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

export default solar;
