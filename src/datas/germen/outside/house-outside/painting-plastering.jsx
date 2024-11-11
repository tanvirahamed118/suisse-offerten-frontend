const paintingPlastering = [
  {
    id: 778223551,
    type: "checkbox",
    label:
      "Müssen die Arbeiten im Innen- oder Außenbereich durchgeführt werden ?",
    options: [
      {
        id: 530145643,
        label: "Innen",
      },
      {
        id: 302901023,
        label: "Draußen",
      },
      {
        id: 385420024,
        label: "Beide",
      },
      {
        id: 598432534,
        label: "Andere",
        credit: 5,
      },
    ],
  },
  //   inside
  {
    id: 530145643,
    type: "checkbox",
    label:
      "Wie viel von der Innenausstattung soll ungefähr gestrichen werden ?",
    options: [
      {
        id: 761250268,
        label: "Nur ein kleinerer Bereich",
        credit: 2,
      },
      {
        id: 734067304,
        label: "Bis zu 5 Wände / Decken",
        credit: 7,
      },
      {
        id: 783577619,
        label: "6 bis 10 Wände / Decken",
        credit: 12,
      },
      {
        id: 460418116,
        label: "11 bis 20 Wände / Decken",
        credit: 17,
      },
      {
        id: 630867526,
        label: "21 bis 30 Wände / Decken",
        credit: 22,
      },
      {
        id: 206749297,
        label: "31 oder mehr Wände / Decken",
        credit: 35,
      },
    ],
  },
  {
    id: 761250268,
    type: "inputBox",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
    options: [{ label: "m2" }],
  },
  {
    id: 734067304,
    type: "inputBox",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
    options: [{ label: "m2" }],
  },
  {
    id: 783577619,
    type: "inputBox",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
    options: [{ label: "m2" }],
  },
  {
    id: 460418116,
    type: "inputBox",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
    options: [{ label: "m2" }],
  },
  {
    id: 630867526,
    type: "inputBox",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
    options: [{ label: "m2" }],
  },
  {
    id: 206749297,
    type: "inputBox",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
    options: [{ label: "m2" }],
  },
  //   inside
  // outside
  {
    id: 302901023,
    type: "checkbox",
    label: "Welche Outdoor-Objekte sollen bearbeitet werden ?",
    options: [
      {
        id: 237163754,
        label: "Wände / Fassaden",
      },
      {
        id: 943070871,
        label: "Fenster / Türen",
      },
      {
        id: 815982709,
        label: "Dach / Dachteile",
      },
      {
        id: 562937386,
        label: "Andere oder mehr",
        credit: 10,
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "Wie viel von der Fassade soll gestrichen werden ?",
    options: [
      {
        id: 464762570,
        label: "Nur ein kleinerer Bereich",
        credit: 2,
      },
      {
        id: 143484617,
        label: "Bis zu einer Seite",
        credit: 5,
      },
      {
        id: 844079067,
        label: "2 bis 3 Seiten",
        credit: 10,
      },
      {
        id: 576487974,
        label: "Ein ganzes Einfamilienhaus",
        credit: 35,
      },
      {
        id: 296294573,
        label: "Ein ganzes Mehrfamilienhaus",
        credit: 50,
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "inputBox",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
    options: [{ label: "m2" }],
  },
  {
    id: 498603127,
    type: "inputBox",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
    options: [{ label: "m2" }],
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "Wie viele Fenster/Türen sollen gestrichen werden ?",
    options: [
      {
        id: 970618046,
        label: "Ein Fenster / eine Tür",
        credit: 2,
      },
      {
        id: 166780055,
        label: "2 bis 5 Fenster / Türen",
        credit: 5,
      },
      {
        id: 293307341,
        label: "6 oder mehr Fenster / Türen",
        credit: 10,
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  //   Windows / Doors
  // Roof / roof parts
  {
    id: 815982709,
    type: "checkbox",
    label: "Wie viele Dachseiten sollen gestrichen werden ?",
    options: [
      {
        id: 119723393,
        label: "Auf einer Seite des Daches",
        credit: 5,
      },
      {
        id: 374016662,
        label: "Auf 2 bis 3 Seiten des Daches",
        credit: 10,
      },
      {
        id: 786408353,
        label: "Auf allen Seiten des Daches",
        credit: 25,
      },
    ],
  },
  {
    id: 119723393,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "Wie umfangreich ist der Auftrag ungefähr ?",
    options: [
      {
        label: "Klein (z. B. Streichen einer Wand, eines Fensters usw.)",
      },
      {
        label: "Mittel (z. B. zwei komplette Räume streichen)",
      },
      {
        label: "Groß (z.B. EFH Punkt alle Innenwände)",
      },
      {
        label: "Sehr groß (z.B. MFH Fassaden komplett streichen)",
      },
    ],
  },
  // outside
  //   both
  {
    id: 385420024,
    type: "checkbox",
    label:
      "Wie viel von der Innenausstattung soll ungefähr gestrichen werden ?",
    options: [
      {
        id: 705930396,
        label: "Nur ein kleinerer Bereich",
      },
      {
        id: 439249238,
        label: "Bis zu 5 Wände / Decken",
      },
      {
        id: 835156570,
        label: "6 bis 10 Wände / Decken",
      },
      {
        id: 397339129,
        label: "11 bis 20 Wände / Decken",
      },
      {
        id: 170503051,
        label: "21 bis 30 Wände / Decken",
      },
      {
        id: 924910083,
        label: "31 oder mehr Wände / Decken",
      },
    ],
  },

  //   Only a smaller area
  {
    id: 705930396,
    type: "checkbox",
    label: "Welche Outdoor-Objekte sollen bearbeitet werden ?",
    options: [
      {
        id: 237163754,
        label: "Wände / Fassaden",
      },
      {
        id: 943070871,
        label: "Fenster / Türen",
      },
      {
        id: 815982709,
        label: "Dach / Dachteile",
      },
      {
        id: 562937386,
        label: "Andere oder mehr",
        credit: 5,
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "Wie viel von der Fassade soll gestrichen werden ?",
    options: [
      {
        id: 464762570,
        label: "Nur ein kleinerer Bereich",
      },
      {
        id: 143484617,
        label: "Bis zu einer Seite",
      },
      {
        id: 844079067,
        label: "2 bis 3 Seiten",
      },
      {
        id: 576487974,
        label: "Ein ganzes Einfamilienhaus",
      },
      {
        id: 296294573,
        label: "Ein ganzes Mehrfamilienhaus",
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "Wie viele Fenster/Türen sollen gestrichen werden ?",
    options: [
      {
        id: 970618046,
        label: "Ein Fenster / eine Tür",
        credit: 5,
      },
      {
        id: 166780055,
        label: "2 bis 5 Fenster / Türen",
        credit: 10,
      },
      {
        id: 293307341,
        label: "6 oder mehr Fenster / Türen",
        credit: 10,
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  //   Windows / Doors
  // Roof / roof parts
  {
    id: 815982709,
    type: "checkbox",
    label: "Wie viele Dachseiten sollen gestrichen werden ?",
    options: [
      {
        id: 119723393,
        label: "Auf einer Seite des Daches",
        credit: 5,
      },
      {
        id: 374016662,
        label: "Auf 2 bis 3 Seiten des Daches",
        credit: 10,
      },
      {
        id: 786408353,
        label: "Auf allen Seiten des Daches",
        credit: 25,
      },
    ],
  },
  {
    id: 119723393,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "Wie umfangreich ist der Auftrag ungefähr ?",
    options: [
      {
        label: "Klein (z. B. Streichen einer Wand, eines Fensters usw.)",
      },
      {
        label: "Mittel (z. B. zwei komplette Räume streichen)",
      },
      {
        label: "Groß (z.B. Einfamilienhaus, alle Innenwände streichen)",
      },
    ],
  },
  //   only a smaller area
  // up to 5 walls / cellings
  {
    id: 439249238,
    type: "checkbox",
    label: "Welche Outdoor-Objekte sollen bearbeitet werden ?",
    options: [
      {
        id: 237163754,
        label: "Wände / Fassaden",
      },
      {
        id: 943070871,
        label: "Fenster / Türen",
      },
      {
        id: 815982709,
        label: "Dach / Dachteile",
      },
      {
        id: 562937386,
        label: "Andere oder mehr",
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "Wie viel von der Fassade soll gestrichen werden ?",
    options: [
      {
        id: 464762570,
        label: "Nur ein kleinerer Bereich",
      },
      {
        id: 143484617,
        label: "Bis zu einer Seite",
      },
      {
        id: 844079067,
        label: "2 bis 3 Seiten",
      },
      {
        id: 576487974,
        label: "Ein ganzes Einfamilienhaus",
      },
      {
        id: 296294573,
        label: "Ein ganzes Mehrfamilienhaus",
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "Wie viele Fenster/Türen sollen gestrichen werden ?",
    options: [
      {
        id: 970618046,
        label: "Ein Fenster / eine Tür",
      },
      {
        id: 166780055,
        label: "2 bis 5 Fenster / Türen",
      },
      {
        id: 293307341,
        label: "6 oder mehr Fenster / Türen",
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  //   Windows / Doors
  // Roof / roof parts
  {
    id: 815982709,
    type: "checkbox",
    label: "Wie viele Dachseiten sollen gestrichen werden ?",
    options: [
      {
        id: 119723393,
        label: "Auf einer Seite des Daches",
      },
      {
        id: 374016662,
        label: "Auf 2 bis 3 Seiten des Daches",
      },
      {
        id: 786408353,
        label: "Auf allen Seiten des Daches",
      },
    ],
  },
  {
    id: 119723393,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "Wie umfangreich ist der Auftrag ungefähr ?",
    options: [
      {
        label: "Klein (z. B. Streichen einer Wand, eines Fensters usw.)",
      },
      {
        label: "Mittel (z. B. zwei komplette Räume streichen)",
      },
      {
        label: "Groß (z.B. Einfamilienhaus, alle Innenwände streichen)",
      },
    ],
  },
  // up to 5 walls / cellings
  // 6 to 10 walls / cellings
  {
    id: 835156570,
    type: "checkbox",
    label: "Welche Outdoor-Objekte sollen bearbeitet werden ?",
    options: [
      {
        id: 237163754,
        label: "Wände / Fassaden",
      },
      {
        id: 943070871,
        label: "Fenster / Türen",
      },
      {
        id: 815982709,
        label: "Dach / Dachteile",
      },
      {
        id: 562937386,
        label: "Andere oder mehr",
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "Wie viel von der Fassade soll gestrichen werden ?",
    options: [
      {
        id: 464762570,
        label: "Nur ein kleinerer Bereich",
      },
      {
        id: 143484617,
        label: "Bis zu einer Seite",
      },
      {
        id: 844079067,
        label: "2 bis 3 Seiten",
      },
      {
        id: 576487974,
        label: "Ein ganzes Einfamilienhaus",
      },
      {
        id: 296294573,
        label: "Ein ganzes Mehrfamilienhaus",
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "Wie viele Fenster/Türen sollen gestrichen werden ?",
    options: [
      {
        id: 970618046,
        label: "Ein Fenster / eine Tür",
      },
      {
        id: 166780055,
        label: "2 bis 5 Fenster / Türen",
      },
      {
        id: 293307341,
        label: "6 oder mehr Fenster / Türen",
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  //   Windows / Doors
  // Roof / roof parts
  {
    id: 815982709,
    type: "checkbox",
    label: "Wie viele Dachseiten sollen gestrichen werden ?",
    options: [
      {
        id: 119723393,
        label: "Auf einer Seite des Daches",
      },
      {
        id: 374016662,
        label: "Auf 2 bis 3 Seiten des Daches",
      },
      {
        id: 786408353,
        label: "Auf allen Seiten des Daches",
      },
    ],
  },
  {
    id: 119723393,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "Wie umfangreich ist der Auftrag ungefähr ?",
    options: [
      {
        label: "Klein (z. B. Streichen einer Wand, eines Fensters usw.)",
      },
      {
        label: "Mittel (z. B. zwei komplette Räume streichen)",
      },
      {
        label: "Groß (z.B. Einfamilienhaus, alle Innenwände streichen)",
      },
    ],
  },
  // 6 to 10 walls / cellings
  // 10 to 20 walls / celling
  {
    id: 397339129,
    type: "checkbox",
    label: "Welche Outdoor-Objekte sollen bearbeitet werden ?",
    options: [
      {
        id: 237163754,
        label: "Wände / Fassaden",
      },
      {
        id: 943070871,
        label: "Fenster / Türen",
      },
      {
        id: 815982709,
        label: "Dach / Dachteile",
      },
      {
        id: 562937386,
        label: "Andere oder mehr",
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "Wie viel von der Fassade soll gestrichen werden ?",
    options: [
      {
        id: 464762570,
        label: "Nur ein kleinerer Bereich",
      },
      {
        id: 143484617,
        label: "Bis zu einer Seite",
      },
      {
        id: 844079067,
        label: "2 bis 3 Seiten",
      },
      {
        id: 576487974,
        label: "Ein ganzes Einfamilienhaus",
      },
      {
        id: 296294573,
        label: "Ein ganzes Mehrfamilienhaus",
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "Wie viele Fenster/Türen sollen gestrichen werden ?",
    options: [
      {
        id: 970618046,
        label: "Ein Fenster / eine Tür",
      },
      {
        id: 166780055,
        label: "2 bis 5 Fenster / Türen",
      },
      {
        id: 293307341,
        label: "6 oder mehr Fenster / Türen",
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  //   Windows / Doors
  // Roof / roof parts
  {
    id: 815982709,
    type: "checkbox",
    label: "Wie viele Dachseiten sollen gestrichen werden ?",
    options: [
      {
        id: 119723393,
        label: "Auf einer Seite des Daches",
      },
      {
        id: 374016662,
        label: "Auf 2 bis 3 Seiten des Daches",
      },
      {
        id: 786408353,
        label: "Auf allen Seiten des Daches",
      },
    ],
  },
  {
    id: 119723393,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "Wie umfangreich ist der Auftrag ungefähr ?",
    options: [
      {
        label: "Klein (z. B. Streichen einer Wand, eines Fensters usw.)",
      },
      {
        label: "Mittel (z. B. zwei komplette Räume streichen)",
      },
      {
        label: "Groß (z.B. Einfamilienhaus, alle Innenwände streichen)",
      },
    ],
  },
  // 10 to 20 walls / celling
  // 21 to 30 walls / celling
  {
    id: 170503051,
    type: "checkbox",
    label: "Welche Outdoor-Objekte sollen bearbeitet werden ?",
    options: [
      {
        id: 237163754,
        label: "Wände / Fassaden",
      },
      {
        id: 943070871,
        label: "Fenster / Türen",
      },
      {
        id: 815982709,
        label: "Dach / Dachteile",
      },
      {
        id: 562937386,
        label: "Andere oder mehr",
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "Wie viel von der Fassade soll gestrichen werden ?",
    options: [
      {
        id: 464762570,
        label: "Nur ein kleinerer Bereich",
      },
      {
        id: 143484617,
        label: "Bis zu einer Seite",
      },
      {
        id: 844079067,
        label: "2 bis 3 Seiten",
      },
      {
        id: 576487974,
        label: "Ein ganzes Einfamilienhaus",
      },
      {
        id: 296294573,
        label: "Ein ganzes Mehrfamilienhaus",
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "Wie viele Fenster/Türen sollen gestrichen werden ?",
    options: [
      {
        id: 970618046,
        label: "Ein Fenster / eine Tür",
      },
      {
        id: 166780055,
        label: "2 bis 5 Fenster / Türen",
      },
      {
        id: 293307341,
        label: "6 oder mehr Fenster / Türen",
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  //   Windows / Doors
  // Roof / roof parts
  {
    id: 815982709,
    type: "checkbox",
    label: "Wie viele Dachseiten sollen gestrichen werden ?",
    options: [
      {
        id: 119723393,
        label: "Auf einer Seite des Daches",
      },
      {
        id: 374016662,
        label: "Auf 2 bis 3 Seiten des Daches",
      },
      {
        id: 786408353,
        label: "Auf allen Seiten des Daches",
      },
    ],
  },
  {
    id: 119723393,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "Wie umfangreich ist der Auftrag ungefähr ?",
    options: [
      {
        label: "Klein (z. B. Streichen einer Wand, eines Fensters usw.)",
      },
      {
        label: "Mittel (z. B. zwei komplette Räume streichen)",
      },
      {
        label: "Groß (z.B. Einfamilienhaus, alle Innenwände streichen)",
      },
    ],
  },
  // 21 to 30 walls / celling
  // 31 to more walls / celling
  {
    id: 924910083,
    type: "checkbox",
    label: "Welche Outdoor-Objekte sollen bearbeitet werden ?",
    options: [
      {
        id: 237163754,
        label: "Wände / Fassaden",
      },
      {
        id: 943070871,
        label: "Fenster / Türen",
      },
      {
        id: 815982709,
        label: "Dach / Dachteile",
      },
      {
        id: 562937386,
        label: "Andere oder mehr",
      },
    ],
  },
  //   Walls / Facades
  {
    id: 237163754,
    type: "checkbox",
    label: "Wie viel von der Fassade soll gestrichen werden ?",
    options: [
      {
        id: 464762570,
        label: "Nur ein kleinerer Bereich",
      },
      {
        id: 143484617,
        label: "Bis zu einer Seite",
      },
      {
        id: 844079067,
        label: "2 bis 3 Seiten",
      },
      {
        id: 576487974,
        label: "Ein ganzes Einfamilienhaus",
      },
      {
        id: 296294573,
        label: "Ein ganzes Mehrfamilienhaus",
      },
    ],
  },
  {
    id: 464762570,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 143484617,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 844079067,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 576487974,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 296294573,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  //   Walls / Facades
  // Windows / Doors
  {
    id: 943070871,
    type: "checkbox",
    label: "Wie viele Fenster/Türen sollen gestrichen werden ?",
    options: [
      {
        id: 970618046,
        label: "Ein Fenster / eine Tür",
      },
      {
        id: 166780055,
        label: "2 bis 5 Fenster / Türen",
      },
      {
        id: 293307341,
        label: "6 oder mehr Fenster / Türen",
      },
    ],
  },
  {
    id: 970618046,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 166780055,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 293307341,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  //   Windows / Doors
  // Roof / roof parts
  {
    id: 815982709,
    type: "checkbox",
    label: "Wie viele Dachseiten sollen gestrichen werden ?",
    options: [
      {
        id: 119723393,
        label: "Auf einer Seite des Daches",
      },
      {
        id: 374016662,
        label: "Auf 2 bis 3 Seiten des Daches",
      },
      {
        id: 786408353,
        label: "Auf allen Seiten des Daches",
      },
    ],
  },
  {
    id: 119723393,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 374016662,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 786408353,
    type: "checkbox",
    label: "Steht bereits ein Gerüst ?",
    options: [
      {
        id: 274954248,
        label: "Ja",
      },
      {
        id: 498603127,
        label: "NEIN",
      },
    ],
  },
  {
    id: 274954248,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },
  {
    id: 498603127,
    type: "number",
    label: "Wie groß ist die zu streichende Gesamtfläche ?",
  },

  {
    id: 562937386,
    type: "checkbox",
    label: "Wie umfangreich ist der Auftrag ungefähr ?",
    options: [
      {
        label: "Klein (z. B. Streichen einer Wand, eines Fensters usw.)",
      },
      {
        label: "Mittel (z. B. zwei komplette Räume streichen)",
      },
      {
        label: "Groß (z.B. Einfamilienhaus, alle Innenwände streichen)",
      },
    ],
  },
  // 31 to more walls / celling
  //   both
  // other
  {
    id: 598432534,
    type: "checkbox",
    label: "Wie umfangreich ist der Auftrag ungefähr ?",
    options: [
      {
        label: "Klein (z. B. Streichen einer Wand, eines Fensters usw.)",
      },
      {
        label: "Mittel (z. B. zwei komplette Räume streichen)",
      },
      {
        label: "Groß (z.B. Einfamilienhaus, alle Innenwände streichen)",
      },
      {
        label:
          "Sehr groß (z. B. komplette Fassadenbemalung von Mehrfamilienhäusern)",
      },
    ],
  },
  // other
];

export default paintingPlastering;
