const kitchen = [
  {
    id: 348659292,
    type: "checkbox",
    label: "Welche Küchenbau-Leistungen benötigen Sie ?",
    options: [
      {
        id: 817713234,
        label: "Eine Küche zusammenbauen",
        credit: 25,
      },
      {
        id: 104535911,
        label: "Küche anpassen / renovieren",
        credit: 20,
      },
      {
        id: 538785140,
        label: "Küchenplanung",
        credit: 35,
      },
      {
        id: 398274967,
        label: "Küchenmöbel und Arbeitsplatten",
        credit: 20,
      },
      {
        id: 819300304,
        label: "Küchengeräte (Backofen, Spülmaschine, etc.)",
        credit: 10,
      },
      {
        id: 589518180,
        label: "Kleinere Reparaturen",
        credit: 8,
      },
      {
        id: 285903068,
        label: "Andere",
        credit: 5,
      },
    ],
  },
  {
    id: 817713234,
    type: "checkbox",
    label: "Ist die Küche schon da ?",
    options: [
      {
        id: 824336378,
        label: "Ja, die Küche ist schon da",
      },
      {
        id: 208200826,
        label: "Nein, die Küche ist noch nicht verfügbar",
      },
    ],
  },
  {
    id: 824336378,
    type: "multibox",
    mainId: 333233651,
    label: "Welche Leistungen sind bei der Montage zu erbringen ?",
    options: [
      {
        label: "Montage der Küche",
      },
      {
        label: "Küchenplanung",
      },
      {
        label: "Arbeitsplatte anpassen / montieren",
      },
      {
        label: "Demontage der alten Küche",
      },
      {
        label: "Entsorgung der alten Küche",
      },
      {
        label: "Transport der Küche",
      },
      {
        label: "Anschlüsse elektrische Geräte",
      },
      {
        label: "Sanitäranschlüsse",
      },
    ],
  },
  {
    id: 333233651,
    type: "checkbox",
    label:
      "Sind weitere Bauarbeiten notwendig (Wände abreißen, Fliesen verlegen, Malerarbeiten etc.) ?",
    options: [
      {
        id: 337001323,
        label: "Ja",
      },
      {
        id: 217037466,
        label: "NEIN",
      },
    ],
  },
  {
    id: 337001323,
    type: "checkbox",
    label: "Um welche Bauarbeiten handelt es sich ?",
    options: [
      {
        label: "Tragende Wand abreißen/entfernen",
      },
      {
        label: "Nichttragende Wand abreißen/entfernen",
      },
      {
        label: "Bodenbelagsarbeiten",
      },
      {
        label: "Plattenarbeiten",
      },
      {
        label: "Malerarbeiten",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 208200826,
    type: "multibox",
    mainId: 333233651,
    label: "Welche Leistungen sind bei der Montage zu erbringen ?",
    options: [
      {
        id: 333233651,
        label: "Montage der Küche",
      },
      {
        label: "Küchenplanung",
      },
      {
        label: "Arbeitsplatte anpassen / montieren",
      },
      {
        label: "Demontage der alten Küche",
      },
      {
        label: "Entsorgung der alten Küche",
      },
      {
        label: "Transport der Küche",
      },
      {
        label: "Anschlüsse elektrische Geräte",
      },
      {
        label: "Sanitäranschlüsse",
      },
    ],
  },
  {
    id: 333233651,
    type: "checkbox",
    label:
      "Sind weitere Bauarbeiten notwendig (Wände abreißen, Fliesen verlegen, Malerarbeiten etc.) ?",
    options: [
      {
        id: 337001323,
        label: "Ja",
      },
      {
        id: 217037466,
        label: "NEIN",
      },
    ],
  },
  {
    id: 337001323,
    type: "multibox",
    mainId: 333233651,
    label: "Welche Leistungen sind bei der Montage zu erbringen ?",
    options: [
      {
        label: "Tragende Wand abreißen/entfernen",
      },
      {
        label: "Nichttragende Wand abreißen/entfernen",
      },
      {
        label: "Bodenbelagsarbeiten",
      },
      {
        label: "Plattenarbeiten",
      },
      {
        label: "Malerarbeiten",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 398274967,
    type: "checkbox",
    label:
      "Sie benötigen Serviceleistungen für Küchenmöbel oder Arbeitsplatten ?",
    options: [
      {
        id: 716275113,
        label: "Küchenmöbel",
      },
      {
        id: 183478947,
        label: "Arbeitsplatten",
      },
      {
        id: 793727632,
        label: "Küchenmöbel und Arbeitsplatten",
      },
    ],
  },
  {
    id: 183478947,
    type: "checkbox",
    label: "Welches Arbeitsplattenmaterial wünschen Sie ?",
    options: [
      {
        label: "Naturstein",
      },
      {
        label: "Kunststein/Quarzkomposit",
      },
      {
        label: "Laminieren",
      },
      {
        label: "Keramik / Fliesen",
      },
      {
        label: "Holz",
      },
      {
        label: "Edelstahl",
      },
      {
        label: "Andere",
      },
      {
        label: "Ich bin mir nicht sicher / brauche Rat",
      },
    ],
  },
  {
    id: 793727632,
    type: "checkbox",
    label: "Welches Arbeitsplattenmaterial wünschen Sie ?",
    options: [
      {
        label: "Naturstein",
      },
      {
        label: "Kunststein/Quarzkomposit",
      },
      {
        label: "Laminieren",
      },
      {
        label: "Keramik / Fliesen",
      },
      {
        label: "Holz",
      },
      {
        label: "Edelstahl",
      },
      {
        label: "Andere",
      },
      {
        label: "Ich bin mir nicht sicher / brauche Rat",
      },
    ],
  },
  {
    id: 819300304,
    type: "checkbox",
    label: "Um was für ein Küchengerät handelt es sich ?",
    options: [
      {
        label: "Ofen",
      },
      {
        label: "Spülmaschine",
      },
      {
        label: "Kühl-/Gefrierschrank",
      },
      {
        label: "Dampfentsafter",
      },
      {
        label: "Waschbecken",
      },
      {
        label: "Küchenausstattung",
      },
      {
        label: "Andere",
      },
    ],
  },
];

export default kitchen;
