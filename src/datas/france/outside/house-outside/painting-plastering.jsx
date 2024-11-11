const paintingPlastering = [
  {
    id: 778223551,
    type: "checkbox",
    label: "Do you need work done indoors or outdoors ?",
    options: [
      {
        id: 530145643,
        label: "À l'intérieur",
      },
      {
        id: 302901023,
        label: "Dehors",
      },
      {
        id: 385420024,
        label: "Les deux",
      },
      {
        id: 598432534,
        label: "Autre",
        credit: 5,
      },
    ],
  },
  //   inside
  {
    id: 530145643,
    type: "checkbox",
    label:
      "Quelle est environ la surface de l'intérieur qui doit être peinte ?",
    options: [
      {
        id: 761250268,
        label: "Seulement une zone plus petite",
        credit: 2,
      },
      {
        id: 734067304,
        label: "Jusqu'à 5 murs / plafonds",
        credit: 7,
      },
      {
        id: 783577619,
        label: "6 à 10 murs/plafonds",
        credit: 12,
      },
      {
        id: 460418116,
        label: "11 à 20 murs/plafonds",
        credit: 17,
      },
      {
        id: 630867526,
        label: "21 à 30 murs/plafonds",
        credit: 22,
      },
      {
        id: 206749297,
        label: "31 murs/plafonds ou plus",
        credit: 35,
      },
    ],
  },
  {
    id: 761250268,
    type: "inputBox",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m2" }],
  },
  {
    id: 734067304,
    type: "inputBox",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m2" }],
  },
  {
    id: 783577619,
    type: "inputBox",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m2" }],
  },
  {
    id: 460418116,
    type: "inputBox",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m2" }],
  },
  {
    id: 630867526,
    type: "inputBox",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m2" }],
  },
  {
    id: 206749297,
    type: "inputBox",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m2" }],
  },
  //   inside
  // outside
  {
    id: 302901023,
    type: "checkbox",
    label: "Quels objets extérieurs faut-il travailler ?",
    options: [
      {
        id: 237163754,
        label: "Murs / Façades",
      },
      {
        id: 943070871,
        label: "Fenêtres / Portes",
      },
      {
        id: 815982709,
        label: "Toiture / parties de toiture",
      },
      {
        id: 562937386,
        label: "Autre or more",
        credit: 10,
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "Quelle partie de la façade faut-il peindre ?",
    options: [
      {
        id: 464762570,
        label: "Seulement une zone plus petite",
        credit: 2,
      },
      {
        id: 143484617,
        label: "Jusqu'à une page",
        credit: 5,
      },
      {
        id: 844079067,
        label: "2 à 3 pages",
        credit: 10,
      },
      {
        id: 576487974,
        label: "Une maison unifamiliale entière",
        credit: 35,
      },
      {
        id: 296294573,
        label: "Un immeuble entier",
        credit: 50,
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "inputBox",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m2" }],
  },
  {
    id: 498603127,
    type: "inputBox",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m2" }],
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "Combien de fenêtres / portes faut-il peindre ?",
    options: [
      {
        id: 970618046,
        label: "Une fenêtre / une porte",
        credit: 2,
      },
      {
        id: 166780055,
        label: "2 à 5 fenêtres/portes",
        credit: 5,
      },
      {
        id: 293307341,
        label: "6 fenêtres/portes ou plus",
        credit: 10,
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
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
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "Quelle est l'ampleur approximative de la commande ?",
    options: [
      {
        label: "Petit (par exemple peindre un mur, une fenêtre, etc.)",
      },
      {
        label: "Moyen (par exemple peindre deux pièces complètes)",
      },
      {
        label: "Grand (par exemple, point EFH sur tous les murs intérieurs)",
      },
      {
        label: "Très grand (ex : façades MFH entièrement peintes)",
      },
    ],
  },
  // outside
  //   both
  {
    id: 385420024,
    type: "checkbox",
    label:
      "Quelle est environ la surface de l'intérieur qui doit être peinte ?",
    options: [
      {
        id: 705930396,
        label: "Seulement une zone plus petite",
      },
      {
        id: 439249238,
        label: "Jusqu'à 5 murs / plafonds",
      },
      {
        id: 835156570,
        label: "6 à 10 murs/plafonds",
      },
      {
        id: 397339129,
        label: "11 à 20 murs/plafonds",
      },
      {
        id: 170503051,
        label: "21 à 30 murs/plafonds",
      },
      {
        id: 924910083,
        label: "31 murs/plafonds ou plus",
      },
    ],
  },

  //   Only a smaller area
  {
    id: 705930396,
    type: "checkbox",
    label: "Quels objets extérieurs faut-il travailler ?",
    options: [
      {
        id: 237163754,
        label: "Murs / Façades",
      },
      {
        id: 943070871,
        label: "Fenêtres / Portes",
      },
      {
        id: 815982709,
        label: "Toiture / parties de toiture",
      },
      {
        id: 562937386,
        label: "Autre or more",
        credit: 5,
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "Quelle partie de la façade faut-il peindre ?",
    options: [
      {
        id: 464762570,
        label: "Seulement une zone plus petite",
      },
      {
        id: 143484617,
        label: "Jusqu'à une page",
      },
      {
        id: 844079067,
        label: "2 à 3 pages",
      },
      {
        id: 576487974,
        label: "Une maison unifamiliale entière",
      },
      {
        id: 296294573,
        label: "Un immeuble entier",
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "Combien de fenêtres / portes faut-il peindre ?",
    options: [
      {
        id: 970618046,
        label: "Une fenêtre / une porte",
        credit: 5,
      },
      {
        id: 166780055,
        label: "2 à 5 fenêtres/portes",
        credit: 10,
      },
      {
        id: 293307341,
        label: "6 fenêtres/portes ou plus",
        credit: 10,
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
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
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "Quelle est l'ampleur approximative de la commande ?",
    options: [
      {
        label: "Petit (par exemple peindre un mur, une fenêtre, etc.)",
      },
      {
        label: "Moyen (par exemple peindre deux pièces complètes)",
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
    label: "Quels objets extérieurs faut-il travailler ?",
    options: [
      {
        id: 237163754,
        label: "Murs / Façades",
      },
      {
        id: 943070871,
        label: "Fenêtres / Portes",
      },
      {
        id: 815982709,
        label: "Toiture / parties de toiture",
      },
      {
        id: 562937386,
        label: "Autre or more",
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "Quelle partie de la façade faut-il peindre ?",
    options: [
      {
        id: 464762570,
        label: "Seulement une zone plus petite",
      },
      {
        id: 143484617,
        label: "Jusqu'à une page",
      },
      {
        id: 844079067,
        label: "2 à 3 pages",
      },
      {
        id: 576487974,
        label: "Une maison unifamiliale entière",
      },
      {
        id: 296294573,
        label: "Un immeuble entier",
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "Combien de fenêtres / portes faut-il peindre ?",
    options: [
      {
        id: 970618046,
        label: "Une fenêtre / une porte",
      },
      {
        id: 166780055,
        label: "2 à 5 fenêtres/portes",
      },
      {
        id: 293307341,
        label: "6 fenêtres/portes ou plus",
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
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
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "Quelle est l'ampleur approximative de la commande ?",
    options: [
      {
        label: "Petit (par exemple peindre un mur, une fenêtre, etc.)",
      },
      {
        label: "Moyen (par exemple peindre deux pièces complètes)",
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
    label: "Quels objets extérieurs faut-il travailler ?",
    options: [
      {
        id: 237163754,
        label: "Murs / Façades",
      },
      {
        id: 943070871,
        label: "Fenêtres / Portes",
      },
      {
        id: 815982709,
        label: "Toiture / parties de toiture",
      },
      {
        id: 562937386,
        label: "Autre or more",
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "Quelle partie de la façade faut-il peindre ?",
    options: [
      {
        id: 464762570,
        label: "Seulement une zone plus petite",
      },
      {
        id: 143484617,
        label: "Jusqu'à une page",
      },
      {
        id: 844079067,
        label: "2 à 3 pages",
      },
      {
        id: 576487974,
        label: "Une maison unifamiliale entière",
      },
      {
        id: 296294573,
        label: "Un immeuble entier",
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "Combien de fenêtres / portes faut-il peindre ?",
    options: [
      {
        id: 970618046,
        label: "Une fenêtre / une porte",
      },
      {
        id: 166780055,
        label: "2 à 5 fenêtres/portes",
      },
      {
        id: 293307341,
        label: "6 fenêtres/portes ou plus",
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
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
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "Quelle est l'ampleur approximative de la commande ?",
    options: [
      {
        label: "Petit (par exemple peindre un mur, une fenêtre, etc.)",
      },
      {
        label: "Moyen (par exemple peindre deux pièces complètes)",
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
    label: "Quels objets extérieurs faut-il travailler ?",
    options: [
      {
        id: 237163754,
        label: "Murs / Façades",
      },
      {
        id: 943070871,
        label: "Fenêtres / Portes",
      },
      {
        id: 815982709,
        label: "Toiture / parties de toiture",
      },
      {
        id: 562937386,
        label: "Autre or more",
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "Quelle partie de la façade faut-il peindre ?",
    options: [
      {
        id: 464762570,
        label: "Seulement une zone plus petite",
      },
      {
        id: 143484617,
        label: "Jusqu'à une page",
      },
      {
        id: 844079067,
        label: "2 à 3 pages",
      },
      {
        id: 576487974,
        label: "Une maison unifamiliale entière",
      },
      {
        id: 296294573,
        label: "Un immeuble entier",
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "Combien de fenêtres / portes faut-il peindre ?",
    options: [
      {
        id: 970618046,
        label: "Une fenêtre / une porte",
      },
      {
        id: 166780055,
        label: "2 à 5 fenêtres/portes",
      },
      {
        id: 293307341,
        label: "6 fenêtres/portes ou plus",
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
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
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "Quelle est l'ampleur approximative de la commande ?",
    options: [
      {
        label: "Petit (par exemple peindre un mur, une fenêtre, etc.)",
      },
      {
        label: "Moyen (par exemple peindre deux pièces complètes)",
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
    label: "Quels objets extérieurs faut-il travailler ?",
    options: [
      {
        id: 237163754,
        label: "Murs / Façades",
      },
      {
        id: 943070871,
        label: "Fenêtres / Portes",
      },
      {
        id: 815982709,
        label: "Toiture / parties de toiture",
      },
      {
        id: 562937386,
        label: "Autre or more",
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "Quelle partie de la façade faut-il peindre ?",
    options: [
      {
        id: 464762570,
        label: "Seulement une zone plus petite",
      },
      {
        id: 143484617,
        label: "Jusqu'à une page",
      },
      {
        id: 844079067,
        label: "2 à 3 pages",
      },
      {
        id: 576487974,
        label: "Une maison unifamiliale entière",
      },
      {
        id: 296294573,
        label: "Un immeuble entier",
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "Combien de fenêtres / portes faut-il peindre ?",
    options: [
      {
        id: 970618046,
        label: "Une fenêtre / une porte",
      },
      {
        id: 166780055,
        label: "2 à 5 fenêtres/portes",
      },
      {
        id: 293307341,
        label: "6 fenêtres/portes ou plus",
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
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
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "Quelle est l'ampleur approximative de la commande ?",
    options: [
      {
        label: "Petit (par exemple peindre un mur, une fenêtre, etc.)",
      },
      {
        label: "Moyen (par exemple peindre deux pièces complètes)",
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
    label: "Quels objets extérieurs faut-il travailler ?",
    options: [
      {
        id: 237163754,
        label: "Murs / Façades",
      },
      {
        id: 943070871,
        label: "Fenêtres / Portes",
      },
      {
        id: 815982709,
        label: "Toiture / parties de toiture",
      },
      {
        id: 562937386,
        label: "Autre or more",
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "Quelle partie de la façade faut-il peindre ?",
    options: [
      {
        id: 464762570,
        label: "Seulement une zone plus petite",
      },
      {
        id: 143484617,
        label: "Jusqu'à une page",
      },
      {
        id: 844079067,
        label: "2 à 3 pages",
      },
      {
        id: 576487974,
        label: "Une maison unifamiliale entière",
      },
      {
        id: 296294573,
        label: "Un immeuble entier",
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "Combien de fenêtres / portes faut-il peindre ?",
    options: [
      {
        id: 970618046,
        label: "Une fenêtre / une porte",
      },
      {
        id: 166780055,
        label: "2 à 5 fenêtres/portes",
      },
      {
        id: 293307341,
        label: "6 fenêtres/portes ou plus",
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
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
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: [
      {
        id: 274954248,
        label: "Oui",
      },
      {
        id: 498603127,
        label: "Non",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Quelle est la taille totale de la surface à peindre ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "Quelle est l'ampleur approximative de la commande ?",
    options: [
      {
        label: "Petit (par exemple peindre un mur, une fenêtre, etc.)",
      },
      {
        label: "Moyen (par exemple peindre deux pièces complètes)",
      },
      {
        label: "Large (e.g. single-family house, paint all interior walls)",
      },
    ],
  },
  // 31 to more walls / celling
  //   both
  // Autre
  {
    id: 598432534,
    type: "checkbox",
    label: "Quelle est l'ampleur approximative de la commande ?",
    options: [
      {
        label: "Petit (par exemple peindre un mur, une fenêtre, etc.)",
      },
      {
        label: "Moyen (par exemple peindre deux pièces complètes)",
      },
      {
        label: "Large (e.g. single-family house, paint all interior walls)",
      },
      {
        label:
          "Très grand (par exemple peindre entièrement les façades d'immeubles d'habitation)",
      },
    ],
  },
  // Autre
];

export default paintingPlastering;
