import {
  can_you_access_inside,
  what_material_roof_made_of,
  what_shape_is_the_roof,
} from "../../reuse-data";

const solarPhotovoltaics = [
  {
    id: 3793680715,
    type: "checkbox",
    label: "Que faut-il faire ?",
    options: [
      {
        id: 4342892675,
        label: "Installer un système solaire/photovoltaïque",
        credit: 80,
      },
      {
        id: 4783423545,
        label: "Réparer un système solaire/photovoltaïque",
        credit: 50,
      },
      {
        id: 4908509460,
        label: "Autre",
        credit: 10,
      },
    ],
  },
  {
    id: 4342892675,
    type: "inputBox",
    mainId: 7532667884,
    label: "Combien d'étages compte le bâtiment ?",
    options: [{ label: "m2" }],
  },
  {
    id: 7532667884,
    type: "checkbox",
    label: "Quelle est la forme du toit ?",
    options: [
      {
        id: 4254296390,
        label: "Nouveau bâtiment",
      },
      {
        id: 5282564123,
        label: "Années 2010",
      },
      {
        id: 2804827647,
        label: "Années 2000",
      },
      {
        id: 4877894903,
        label: "Années 1990",
      },
      {
        id: 9250400474,
        label: "Années 1980",
      },
      {
        id: 5601362875,
        label: "Années 1970",
      },
      {
        id: 6724855695,
        label: "Années 1960",
      },
      {
        id: 7008872079,
        label: "Années 1950",
      },
      {
        id: 5050273322,
        label: "Bâtiment ancien",
      },
      {
        id: 4315943237,
        label: "Je ne sais pas",
      },
    ],
  },
  // New building
  {
    id: 4254296390,
    type: "checkbox",
    label: "De quel matériau est fait le toit ?",
    options: what_shape_is_the_roof(
      9569024758,
      1452471871,
      8267038820,
      8498545476,
      7878967483,
      7669607785
    ),
  },
  {
    id: 9569024758,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 1452471871,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8267038820,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8498545476,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7878967483,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7669607785,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 4731058275,
    type: "inputBox",
    mainId: 8938818396,
    label: "Quelle est la taille approximative de la surface du toit ?",
    options: [{ label: "m2" }],
  },
  {
    id: 1137365868,
    type: "inputBox",
    mainId: 8938818396,
    label: "Quelle est la taille approximative de la surface du toit ?",
    options: [{ label: "m2" }],
  },
  {
    id: 9225675460,
    type: "inputBox",
    mainId: 8938818396,
    label: "Quelle est la taille approximative de la surface du toit ?",
    options: [{ label: "m2" }],
  },
  {
    id: 7392190388,
    type: "inputBox",
    mainId: 8938818396,
    label: "Quelle est la taille approximative de la surface du toit ?",
    options: [{ label: "m2" }],
  },
  {
    id: 5531644328,
    type: "inputBox",
    mainId: 8938818396,
    label: "Quelle est la taille approximative de la surface du toit ?",
    options: [{ label: "m2" }],
  },
  {
    id: 7565109024,
    type: "inputBox",
    mainId: 8938818396,
    label: "Quelle est la taille approximative de la surface du toit ?",
    options: [{ label: "m2" }],
  },
  {
    id: 8971120933,
    type: "inputBox",
    mainId: 8938818396,
    label: "Quelle est la taille approximative de la surface du toit ?",
    options: [{ label: "m2" }],
  },
  {
    id: 8938818396,
    type: "checkbox",
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 1829594924,
        label: "Oui",
      },
      {
        id: 3282497942,
        label: "Non",
      },
      {
        id: 3076662090,
        label: "En partie",
      },
      {
        id: 9887335185,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 1829594924,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3282497942,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3076662090,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 9887335185,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // New building
  // 2010s
  {
    id: 5282564123,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_shape_is_the_roof(
      9569024758,
      1452471871,
      8267038820,
      8498545476,
      7878967483,
      7669607785
    ),
  },
  {
    id: 9569024758,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 1452471871,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8267038820,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8498545476,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7878967483,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7669607785,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface du toit ?",
    options: [
      {
        id: 8938818396,
        label: "m2",
      },
    ],
  },
  {
    id: 8938818396,
    type: "checkbox",
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 1829594924,
        label: "Oui",
      },
      {
        id: 3282497942,
        label: "Non",
      },
      {
        id: 3076662090,
        label: "En partie",
      },
      {
        id: 9887335185,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 1829594924,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3282497942,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3076662090,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 9887335185,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // 2010s
  // 2000s
  {
    id: 2804827647,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_shape_is_the_roof(
      9569024758,
      1452471871,
      8267038820,
      8498545476,
      7878967483,
      7669607785
    ),
  },
  {
    id: 9569024758,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 1452471871,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8267038820,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8498545476,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7878967483,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7669607785,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface du toit ?",
    options: [
      {
        id: 8938818396,
        label: "m2",
      },
    ],
  },
  {
    id: 8938818396,
    type: "checkbox",
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 1829594924,
        label: "Oui",
      },
      {
        id: 3282497942,
        label: "Non",
      },
      {
        id: 3076662090,
        label: "En partie",
      },
      {
        id: 9887335185,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 1829594924,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3282497942,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3076662090,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 9887335185,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // 2000s
  // 1990s
  {
    id: 4877894903,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_shape_is_the_roof(
      9569024758,
      1452471871,
      8267038820,
      8498545476,
      7878967483,
      7669607785
    ),
  },
  {
    id: 9569024758,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 1452471871,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8267038820,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8498545476,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7878967483,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7669607785,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface du toit ?",
    options: [
      {
        id: 8938818396,
        label: "m2",
      },
    ],
  },
  {
    id: 8938818396,
    type: "checkbox",
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 1829594924,
        label: "Oui",
      },
      {
        id: 3282497942,
        label: "Non",
      },
      {
        id: 3076662090,
        label: "En partie",
      },
      {
        id: 9887335185,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 1829594924,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3282497942,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3076662090,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 9887335185,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // 1990s
  // 1980s
  {
    id: 9250400474,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_shape_is_the_roof(
      9569024758,
      1452471871,
      8267038820,
      8498545476,
      7878967483,
      7669607785
    ),
  },
  {
    id: 9569024758,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 1452471871,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8267038820,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8498545476,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7878967483,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7669607785,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface du toit ?",
    options: [
      {
        id: 8938818396,
        label: "m2",
      },
    ],
  },
  {
    id: 8938818396,
    type: "checkbox",
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 1829594924,
        label: "Oui",
      },
      {
        id: 3282497942,
        label: "Non",
      },
      {
        id: 3076662090,
        label: "En partie",
      },
      {
        id: 9887335185,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 1829594924,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3282497942,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3076662090,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 9887335185,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // 1980s
  // 1970s
  {
    id: 5601362875,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_shape_is_the_roof(
      9569024758,
      1452471871,
      8267038820,
      8498545476,
      7878967483,
      7669607785
    ),
  },
  {
    id: 9569024758,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 1452471871,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8267038820,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8498545476,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7878967483,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7669607785,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface du toit ?",
    options: [
      {
        id: 8938818396,
        label: "m2",
      },
    ],
  },
  {
    id: 8938818396,
    type: "checkbox",
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 1829594924,
        label: "Oui",
      },
      {
        id: 3282497942,
        label: "Non",
      },
      {
        id: 3076662090,
        label: "En partie",
      },
      {
        id: 9887335185,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 1829594924,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3282497942,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3076662090,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 9887335185,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // 1970s
  // 1960s
  {
    id: 6724855695,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_shape_is_the_roof(
      9569024758,
      1452471871,
      8267038820,
      8498545476,
      7878967483,
      7669607785
    ),
  },
  {
    id: 9569024758,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 1452471871,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8267038820,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8498545476,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7878967483,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7669607785,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface du toit ?",
    options: [
      {
        id: 8938818396,
        label: "m2",
      },
    ],
  },
  {
    id: 8938818396,
    type: "checkbox",
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 1829594924,
        label: "Oui",
      },
      {
        id: 3282497942,
        label: "Non",
      },
      {
        id: 3076662090,
        label: "En partie",
      },
      {
        id: 9887335185,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 1829594924,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3282497942,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3076662090,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 9887335185,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // 1960s
  // 1950s
  {
    id: 7008872079,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_shape_is_the_roof(
      9569024758,
      1452471871,
      8267038820,
      8498545476,
      7878967483,
      7669607785
    ),
  },
  {
    id: 9569024758,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 1452471871,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8267038820,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8498545476,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7878967483,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7669607785,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface du toit ?",
    options: [
      {
        id: 8938818396,
        label: "m2",
      },
    ],
  },
  {
    id: 8938818396,
    type: "checkbox",
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 1829594924,
        label: "Oui",
      },
      {
        id: 3282497942,
        label: "Non",
      },
      {
        id: 3076662090,
        label: "En partie",
      },
      {
        id: 9887335185,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 1829594924,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3282497942,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3076662090,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 9887335185,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // 1950s
  // old building
  {
    id: 5050273322,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_shape_is_the_roof(
      9569024758,
      1452471871,
      8267038820,
      8498545476,
      7878967483,
      7669607785
    ),
  },
  {
    id: 9569024758,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 1452471871,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8267038820,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8498545476,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7878967483,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7669607785,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface du toit ?",
    options: [
      {
        id: 8938818396,
        label: "m2",
      },
    ],
  },
  {
    id: 8938818396,
    type: "checkbox",
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 1829594924,
        label: "Oui",
      },
      {
        id: 3282497942,
        label: "Non",
      },
      {
        id: 3076662090,
        label: "En partie",
      },
      {
        id: 9887335185,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 1829594924,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3282497942,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3076662090,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 9887335185,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // old building
  // Je ne sais pas
  {
    id: 4315943237,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_shape_is_the_roof(
      9569024758,
      1452471871,
      8267038820,
      8498545476,
      7878967483,
      7669607785
    ),
  },
  {
    id: 9569024758,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 1452471871,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8267038820,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 8498545476,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7878967483,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 7669607785,
    type: "checkbox",
    label: "Quand le bâtiment a-t-il été construit ?",
    options: what_material_roof_made_of(
      4731058275,
      1137365868,
      9225675460,
      7392190388,
      5531644328,
      7565109024,
      8971120933
    ),
  },
  {
    id: 775228686,
    type: "checkbox",
    label: "Quelle est la taille approximative de la surface du toit ?",
    options: [
      {
        id: 8938818396,
        label: "m2",
      },
    ],
  },
  {
    id: 8938818396,
    type: "checkbox",
    label: "Le toit est-il orienté au sud ?",
    options: [
      {
        id: 1829594924,
        label: "Oui",
      },
      {
        id: 3282497942,
        label: "Non",
      },
      {
        id: 3076662090,
        label: "En partie",
      },
      {
        id: 9887335185,
        label: "Je ne sais pas",
      },
    ],
  },
  {
    id: 1829594924,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3282497942,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 3076662090,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  {
    id: 9887335185,
    type: "checkbox",
    label: "Peut-on accéder au toit depuis l'intérieur ?",
    options: can_you_access_inside,
  },
  // Je ne sais pas
  {
    id: 4908509460,
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
