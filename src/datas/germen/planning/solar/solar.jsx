import {
  can_you_access_inside,
  what_material_roof_made_of,
  what_shape_is_the_roof,
} from "../../reuse-data";

const solar = [
  {
    id: 3793680715,
    type: "checkbox",
    label: "Was sollte getan werden ?",
    options: [
      {
        id: 5511649064,
        label: "Solar-/Photovoltaikanlage installieren",
        credit: 80,
      },
      {
        id: 345298295,
        label: "Reparatur Solar-/Photovoltaikanlage",
        credit: 50,
      },
      {
        id: 218925813,
        label: "Andere",
        credit: 10,
      },
    ],
  },
  {
    id: 5511649064,
    type: "inputBox",
    mainId: 5325963557,
    label: "Wie viele Stockwerke hat das Gebäude ?",
    options: [
      {
        label: "Etage(n)",
      },
    ],
  },
  {
    id: 5325963557,
    type: "checkbox",
    label: "What is the shape oft he roof ?",
    options: [
      {
        id: 6357454221,
        label: "Neubau",
      },
      {
        id: 7916364271,
        label: "2010er Jahre",
      },
      {
        id: 8578524161,
        label: "2000er Jahre",
      },
      {
        id: 8250978285,
        label: "1990er Jahre",
      },
      {
        id: 6398495153,
        label: "1980er Jahre",
      },
      {
        id: 4920166650,
        label: "1970er Jahre",
      },
      {
        id: 5735839282,
        label: "1960er Jahre",
      },
      {
        id: 7618322058,
        label: "1950er Jahre",
      },
      {
        id: 7216118691,
        label: "Altes Gebäude",
      },
      {
        id: 3260277122,
        label: "Ich weiß es nicht",
      },
    ],
  },
  // New building
  {
    id: 6357454221,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
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
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 6558630119,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 8916162257,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 9482198320,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 4562688947,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 6439852333,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Wie groß ist die Dachfläche ungefähr ?",
    options: [
      {
        id: 690514271,
        label: "Eingang",
      },
    ],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Ist das Dach nach Süden ausgerichtet ?",
    options: [
      {
        id: 789110281,
        label: "Ja",
      },
      {
        id: 475661121,
        label: "NEIN",
      },
      {
        id: 817068880,
        label: "Zum Teil",
      },
      {
        id: 297525506,
        label: "Ich weiß es nicht",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  // New building
  // 2010s
  {
    id: 7916364271,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
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
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Wie groß ist die Dachfläche ungefähr ?",
    options: [
      {
        id: 690514271,
        label: "Eingang",
      },
    ],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Ist das Dach nach Süden ausgerichtet ?",
    options: [
      {
        id: 789110281,
        label: "Ja",
      },
      {
        id: 475661121,
        label: "NEIN",
      },
      {
        id: 817068880,
        label: "Zum Teil",
      },
      {
        id: 297525506,
        label: "Ich weiß es nicht",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  // 2010s
  // 2000s
  {
    id: 8578524161,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
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
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Wie groß ist die Dachfläche ungefähr ?",
    options: [
      {
        id: 690514271,
        label: "Eingang",
      },
    ],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Ist das Dach nach Süden ausgerichtet ?",
    options: [
      {
        id: 789110281,
        label: "Ja",
      },
      {
        id: 475661121,
        label: "NEIN",
      },
      {
        id: 817068880,
        label: "Zum Teil",
      },
      {
        id: 297525506,
        label: "Ich weiß es nicht",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  // 2000s
  // 1990s
  {
    id: 8250978285,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
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
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Wie groß ist die Dachfläche ungefähr ?",
    options: [
      {
        id: 690514271,
        label: "Eingang",
      },
    ],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Ist das Dach nach Süden ausgerichtet ?",
    options: [
      {
        id: 789110281,
        label: "Ja",
      },
      {
        id: 475661121,
        label: "NEIN",
      },
      {
        id: 817068880,
        label: "Zum Teil",
      },
      {
        id: 297525506,
        label: "Ich weiß es nicht",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  // 1990s
  // 1980s
  {
    id: 6398495153,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
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
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Wie groß ist die Dachfläche ungefähr ?",
    options: [
      {
        id: 690514271,
        label: "Eingang",
      },
    ],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Ist das Dach nach Süden ausgerichtet ?",
    options: [
      {
        id: 789110281,
        label: "Ja",
      },
      {
        id: 475661121,
        label: "NEIN",
      },
      {
        id: 817068880,
        label: "Zum Teil",
      },
      {
        id: 297525506,
        label: "Ich weiß es nicht",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  // 1980s
  // 1970s
  {
    id: 4920166650,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
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
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Wie groß ist die Dachfläche ungefähr ?",
    options: [
      {
        id: 690514271,
        label: "Eingang",
      },
    ],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Ist das Dach nach Süden ausgerichtet ?",
    options: [
      {
        id: 789110281,
        label: "Ja",
      },
      {
        id: 475661121,
        label: "NEIN",
      },
      {
        id: 817068880,
        label: "Zum Teil",
      },
      {
        id: 297525506,
        label: "Ich weiß es nicht",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  // 1970s
  // 1960s
  {
    id: 5735839282,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
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
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Wie groß ist die Dachfläche ungefähr ?",
    options: [
      {
        id: 690514271,
        label: "Eingang",
      },
    ],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Ist das Dach nach Süden ausgerichtet ?",
    options: [
      {
        id: 789110281,
        label: "Ja",
      },
      {
        id: 475661121,
        label: "NEIN",
      },
      {
        id: 817068880,
        label: "Zum Teil",
      },
      {
        id: 297525506,
        label: "Ich weiß es nicht",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  // 1960s
  // 1950s
  {
    id: 7618322058,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
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
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Wie groß ist die Dachfläche ungefähr ?",
    options: [
      {
        id: 690514271,
        label: "Eingang",
      },
    ],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Ist das Dach nach Süden ausgerichtet ?",
    options: [
      {
        id: 789110281,
        label: "Ja",
      },
      {
        id: 475661121,
        label: "NEIN",
      },
      {
        id: 817068880,
        label: "Zum Teil",
      },
      {
        id: 297525506,
        label: "Ich weiß es nicht",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  // 1950s
  // old building
  {
    id: 7216118691,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
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
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Wie groß ist die Dachfläche ungefähr ?",
    options: [
      {
        id: 690514271,
        label: "Eingang",
      },
    ],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Ist das Dach nach Süden ausgerichtet ?",
    options: [
      {
        id: 789110281,
        label: "Ja",
      },
      {
        id: 475661121,
        label: "NEIN",
      },
      {
        id: 817068880,
        label: "Zum Teil",
      },
      {
        id: 297525506,
        label: "Ich weiß es nicht",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  // old building
  // Ich weiß es nicht
  {
    id: 3260277122,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
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
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht das Dach ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Wie groß ist die Dachfläche ungefähr ?",
    options: [
      {
        id: 690514271,
        label: "Eingang",
      },
    ],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Ist das Dach nach Süden ausgerichtet ?",
    options: [
      {
        id: 789110281,
        label: "Ja",
      },
      {
        id: 475661121,
        label: "NEIN",
      },
      {
        id: 817068880,
        label: "Zum Teil",
      },
      {
        id: 297525506,
        label: "Ich weiß es nicht",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Ist das Dach von innen zugänglich ?",
    options: can_you_access_inside,
  },
  // Ich weiß es nicht
  {
    id: 218925813,
    type: "checkbox",
    label: "Was sollte getan werden ?",
    options: [
      {
        label: "Arbeiten an einer thermischen Solaranlage",
      },
      {
        label: "Solaranlage reinigen",
      },
      {
        label: "Solaranlage entsorgen",
      },
      {
        label: "Connecting a solar system",
      },
      {
        label: "Arbeiten an einer thermischen Solaranlage",
        des: "Z.B. zum öffentlichen Netz",
      },
      {
        label: "Advice",
      },
    ],
  },
];

export default solar;
