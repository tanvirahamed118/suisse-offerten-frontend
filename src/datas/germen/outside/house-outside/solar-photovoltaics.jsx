import {
  can_you_access_inside,
  what_material_roof_made_of,
  what_shape_is_the_roof,
} from "../../reuse-data";

const solarPhotovoltaics = [
  {
    id: 780214185,
    type: "checkbox",
    label: "Was sollte getan werden ?",
    options: [
      {
        id: 183630977,
        label: "Solar-/Photovoltaikanlage installieren",
        credit: 80,
      },
      {
        id: 345298295,
        label: "Reparatur Solar-/Photovoltaikanlage",
        credit: 50,
      },
      {
        id: 218818167,
        label: "Andere",
        credit: 10,
      },
    ],
  },
  {
    id: 183630977,
    type: "inputBox",
    mainId: 706151230,
    label: "Wie viele Stockwerke hat das Gebäude ?",
    options: [{ label: "m2" }],
  },
  {
    id: 706151230,
    type: "checkbox",
    label: "Welche Form hat das Dach ?",
    options: [
      {
        id: 446155837,
        label: "Neubau",
      },
      {
        id: 809035352,
        label: "2010er Jahre",
      },
      {
        id: 471525939,
        label: "2000er Jahre",
      },
      {
        id: 701097188,
        label: "1990er Jahre",
      },
      {
        id: 548018424,
        label: "1980er Jahre",
      },
      {
        id: 676123327,
        label: "1970er Jahre",
      },
      {
        id: 387561825,
        label: "1960er Jahre",
      },
      {
        id: 157795416,
        label: "1950er Jahre",
      },
      {
        id: 621259967,
        label: "Altes Gebäude",
      },
      {
        id: 283532466,
        label: "Ich weiß es nicht",
      },
    ],
  },
  // New building
  {
    id: 446155837,
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
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "inputBox",
    mainId: 690514271,
    label: "Wie groß ist die Dachfläche ungefähr ?",
    options: [{ label: "m2" }],
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
    id: 809035352,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
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
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Wie groß ist die Dachfläche ungefähr ?",
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
    id: 471525939,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
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
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Wie groß ist die Dachfläche ungefähr ?",
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
    id: 701097188,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
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
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Wie groß ist die Dachfläche ungefähr ?",
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
    id: 548018424,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
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
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Wie groß ist die Dachfläche ungefähr ?",
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
    id: 676123327,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
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
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Wie groß ist die Dachfläche ungefähr ?",
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
    id: 387561825,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
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
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Wie groß ist die Dachfläche ungefähr ?",
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
    id: 157795416,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
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
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Wie groß ist die Dachfläche ungefähr ?",
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
    id: 621259967,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
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
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Wie groß ist die Dachfläche ungefähr ?",
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
    id: 283532466,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
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
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Wann wurde das Gebäude gebaut ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Wie groß ist die Dachfläche ungefähr ?",
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
    id: 218818167,
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
        label: "Anschluss einer Solaranlage",
      },
      {
        label: "Arbeiten an einer thermischen Solaranlage",
        des: "Z.B. zum öffentlichen Netz",
      },
      {
        label: "Beratung",
      },
    ],
  },
];

export default solarPhotovoltaics;
