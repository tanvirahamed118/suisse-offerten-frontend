import {
  can_you_access_inside,
  what_material_roof_made_of,
  what_shape_is_the_roof,
} from "../../reuse-data";

const solarPhotovoltaics = [
  {
    id: 780214185,
    type: "checkbox",
    label: "Que faut-il faire ?",
    options: [
      {
        id: 183630977,
        label: "Installer un système solaire/photovoltaïque",
        credit: 80,
      },
      {
        id: 345298295,
        label: "Réparer un système solaire/photovoltaïque",
        credit: 50,
      },
      {
        id: 218818167,
        label: "Autre",
        credit: 10,
      },
    ],
  },
  {
    id: 183630977,
    type: "inputBox",
    mainId: 706151230,
    label: "Combien d'étages compte le bâtiment ?",
    options: [{ label: "m2" }],
  },
  {
    id: 706151230,
    type: "checkbox",
    label: "Quelle est la forme du toit ?",
    options: [
      {
        id: 446155837,
        label: "Nouveau bâtiment",
      },
      {
        id: 809035352,
        label: "Années 2010",
      },
      {
        id: 471525939,
        label: "Années 2000",
      },
      {
        id: 701097188,
        label: "Années 1990",
      },
      {
        id: 548018424,
        label: "Années 1980",
      },
      {
        id: 676123327,
        label: "Années 1970",
      },
      {
        id: 387561825,
        label: "Années 1960",
      },
      {
        id: 157795416,
        label: "Années 1950",
      },
      {
        id: 621259967,
        label: "Bâtiment ancien",
      },
      {
        id: 283532466,
        label: "Je ne sais pas",
      },
    ],
  },
  // New building
  {
    id: 446155837,
    type: "checkbox",
    label: "De quel matériau est fait le toit ?",
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
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "inputBox",
    mainId: 690514271,
    label: "Quelle est la taille approximative de la surface du toit ?",
    options: [{ label: "m2" }],
  },
  {
    id: 690514271,
    type: "checkbox",
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 789110281,
        label: "Oui",
      },
      {
        id: 475661121,
        label: "Non",
      },
      {
        id: 817068880,
        label: "En partie",
      },
      {
        id: 297525506,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // New building
  // 2010s
  {
    id: 809035352,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
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
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface du toit ?",
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
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 789110281,
        label: "Oui",
      },
      {
        id: 475661121,
        label: "Non",
      },
      {
        id: 817068880,
        label: "En partie",
      },
      {
        id: 297525506,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // 2010s
  // 2000s
  {
    id: 471525939,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
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
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface du toit ?",
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
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 789110281,
        label: "Oui",
      },
      {
        id: 475661121,
        label: "Non",
      },
      {
        id: 817068880,
        label: "En partie",
      },
      {
        id: 297525506,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // 2000s
  // 1990s
  {
    id: 701097188,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
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
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface du toit ?",
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
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 789110281,
        label: "Oui",
      },
      {
        id: 475661121,
        label: "Non",
      },
      {
        id: 817068880,
        label: "En partie",
      },
      {
        id: 297525506,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // 1990s
  // 1980s
  {
    id: 548018424,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
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
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface du toit ?",
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
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 789110281,
        label: "Oui",
      },
      {
        id: 475661121,
        label: "Non",
      },
      {
        id: 817068880,
        label: "En partie",
      },
      {
        id: 297525506,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // 1980s
  // 1970s
  {
    id: 676123327,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
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
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface du toit ?",
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
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 789110281,
        label: "Oui",
      },
      {
        id: 475661121,
        label: "Non",
      },
      {
        id: 817068880,
        label: "En partie",
      },
      {
        id: 297525506,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // 1970s
  // 1960s
  {
    id: 387561825,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
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
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface du toit ?",
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
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 789110281,
        label: "Oui",
      },
      {
        id: 475661121,
        label: "Non",
      },
      {
        id: 817068880,
        label: "En partie",
      },
      {
        id: 297525506,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // 1960s
  // 1950s
  {
    id: 157795416,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
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
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface du toit ?",
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
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 789110281,
        label: "Oui",
      },
      {
        id: 475661121,
        label: "Non",
      },
      {
        id: 817068880,
        label: "En partie",
      },
      {
        id: 297525506,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // 1950s
  // old building
  {
    id: 621259967,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
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
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface du toit ?",
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
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 789110281,
        label: "Oui",
      },
      {
        id: 475661121,
        label: "Non",
      },
      {
        id: 817068880,
        label: "En partie",
      },
      {
        id: 297525506,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // old building
  // Je ne sais pas
  {
    id: 283532466,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
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
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 716023639,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 817738360,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 875522887,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 477007408,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 313475640,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(775228686),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface du toit ?",
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
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 789110281,
        label: "Oui",
      },
      {
        id: 475661121,
        label: "Non",
      },
      {
        id: 817068880,
        label: "En partie",
      },
      {
        id: 297525506,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 789110281,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 475661121,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 817068880,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 297525506,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // Je ne sais pas
  {
    id: 218818167,
    type: "checkbox",
    label: "Que faut-il faire ?",
    options: [
      {
        label: "Travailler sur un système solaire thermique",
      },
      {
        label: "Nettoyage du système solaire",
      },
      {
        label: "Éliminer le système solaire",
      },
      {
        label: "Connecter un système solaire",
      },
      {
        label: "Travailler sur un système solaire thermique",
        des: "Par exemple vers le réseau public",
      },
      {
        label: "Advice",
      },
    ],
  },
];

export default solarPhotovoltaics;
