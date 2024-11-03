const renovations = [
  {
    id: 683493762,
    type: "checkbox",
    label: "Welche Arbeiten müssen erledigt werden ?",
    options: [
      {
        id: 780693030,
        label: "Renovierung / Einbau eines Badezimmers",
        des: "Kompletter Austausch eines Badezimmers oder Austausch und Renovierung eines Badezimmers",
      },
      {
        id: 677229573,
        label: "Einbau oder Austausch einer Armatur",
        des: "Z. B. Austausch einer Dusche, Badewanne, Toilette, eines Waschbeckens usw.",
      },
      {
        id: 265742934,
        label: "reparieren",
        des: "Z. B. Rohrleitungen, Lecks, Abwasser, Platten usw.",
      },
      {
        id: 324202133,
        label: "Platten",
        des: "Fliesen Sie nur die Böden oder Wände",
      },
      {
        id: 163437092,
        label: "Andere",
        credit: 5,
      },
    ],
  },
  {
    id: 780693030,
    type: "checkbox",
    label: "Wie viele Bäder müssen renoviert/eingebaut werden ?",
    options: [
      {
        id: 328244547,
        label: "1",
      },
      {
        id: 953718027,
        label: "2 oder mehr",
      },
    ],
  },
  //   1
  {
    id: 328244547,
    type: "checkbox",
    label: "Was für ein Badezimmer ?",
    options: [
      {
        id: 458925628,
        label: "Hauptbadezimmer",
      },
      {
        id: 880710682,
        label: "privates Badezimmer",
      },
      {
        id: 884608829,
        label: "Gästebad",
      },
      {
        id: 797322370,
        label: "Andere",
      },
    ],
  },
  //   main
  {
    id: 458925628,
    type: "checkbox",
    label: "Wie umfangreich sind die Arbeiten ?",
    options: [
      {
        id: 146207066,
        label: "Umfassende Badsanierung",
        des: "Erneuern des Badezimmers und aller dazugehörigen Teile (z. B. Fliesen, Boden, Decke, Elektrik)",
      },
      {
        id: 941557853,
        label: "Ein Badezimmer ersetzen",
        des: "Ersetzen Sie das Badezimmer ohne Fliesen, Boden, Elektrik usw.",
      },
      {
        id: 413876972,
        label: "Kleinere Aufträge",
        des: "Ersetzen Sie nur eine Armatur, z. B. Dusche oder Badewanne",
      },
    ],
  },
  //   comprehensive
  {
    id: 146207066,
    type: "checkbox",
    label: "Sind alle Materialien bereits verfügbar ?",
    options: [
      {
        id: 381456876,
        label: "Ja",
      },
      {
        id: 133670142,
        label: "NEIN",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  //   comprehensive
  // replacion
  {
    id: 941557853,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 381456876,
        label: "Ja",
      },
      {
        id: 133670142,
        label: "NEIN",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  // replacion
  // smaller
  {
    id: 413876972,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 381456876,
        label: "Ja",
      },
      {
        id: 133670142,
        label: "NEIN",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  // smaller
  //   main
  // private
  {
    id: 880710682,
    type: "checkbox",
    label: "Wie umfangreich sind die Arbeiten ?",
    options: [
      {
        id: 146207066,
        label: "Umfassende Badsanierung",
        des: "Erneuern des Badezimmers und aller dazugehörigen Teile (z. B. Fliesen, Boden, Decke, Elektrik)",
      },
      {
        id: 941557853,
        label: "Ein Badezimmer ersetzen",
        des: "Ersetzen Sie das Badezimmer ohne Fliesen, Boden, Elektrik usw.",
      },
      {
        id: 413876972,
        label: "Kleinere Aufträge",
        des: "Ersetzen Sie nur eine Armatur, z. B. Dusche oder Badewanne",
      },
    ],
  },
  //   comprehensive
  {
    id: 146207066,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 381456876,
        label: "Ja",
      },
      {
        id: 133670142,
        label: "NEIN",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  //   comprehensive
  // replacion
  {
    id: 941557853,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 381456876,
        label: "Ja",
      },
      {
        id: 133670142,
        label: "NEIN",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  // replacion
  // smaller
  {
    id: 413876972,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 381456876,
        label: "Ja",
      },
      {
        id: 133670142,
        label: "NEIN",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  // smaller
  // private
  // guest
  {
    id: 884608829,
    type: "checkbox",
    label: "Wie umfangreich sind die Arbeiten ?",
    options: [
      {
        id: 146207066,
        label: "Umfassende Badsanierung",
        des: "Erneuern des Badezimmers und aller dazugehörigen Teile (z. B. Fliesen, Boden, Decke, Elektrik)",
      },
      {
        id: 941557853,
        label: "Ein Badezimmer ersetzen",
        des: "Ersetzen Sie das Badezimmer ohne Fliesen, Boden, Elektrik usw.",
      },
      {
        id: 413876972,
        label: "Kleinere Aufträge",
        des: "Ersetzen Sie nur eine Armatur, z. B. Dusche oder Badewanne",
      },
    ],
  },
  //   comprehensive
  {
    id: 146207066,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 381456876,
        label: "Ja",
      },
      {
        id: 133670142,
        label: "NEIN",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  //   comprehensive
  // replacion
  {
    id: 941557853,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 381456876,
        label: "Ja",
      },
      {
        id: 133670142,
        label: "NEIN",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  // replacion
  // smaller
  {
    id: 413876972,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 381456876,
        label: "Ja",
      },
      {
        id: 133670142,
        label: "NEIN",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  // smaller
  // guest
  //   1

  // 2
  {
    id: 953718027,
    type: "checkbox",
    label: "Was für ein Badezimmer ?",
    options: [
      {
        id: 458925628,
        label: "Hauptbadezimmer",
      },
      {
        id: 880710682,
        label: "privates Badezimmer",
      },
      {
        id: 884608829,
        label: "Gästebad",
      },
      {
        id: 797322370,
        label: "Andere",
      },
    ],
  },
  //   main
  {
    id: 458925628,
    type: "checkbox",
    label: "Wie umfangreich sind die Arbeiten ?",
    options: [
      {
        id: 146207066,
        label: "Umfassende Badsanierung",
        des: "Erneuern des Badezimmers und aller dazugehörigen Teile (z. B. Fliesen, Boden, Decke, Elektrik)",
      },
      {
        id: 941557853,
        label: "Ein Badezimmer ersetzen",
        des: "Ersetzen Sie das Badezimmer ohne Fliesen, Boden, Elektrik usw.",
      },
      {
        id: 413876972,
        label: "Kleinere Aufträge",
        des: "Ersetzen Sie nur eine Armatur, z. B. Dusche oder Badewanne",
      },
    ],
  },
  //   comprehensive
  {
    id: 146207066,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 381456876,
        label: "Ja",
      },
      {
        id: 133670142,
        label: "NEIN",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  //   comprehensive
  // replacion
  {
    id: 941557853,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 381456876,
        label: "Ja",
      },
      {
        id: 133670142,
        label: "NEIN",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  // replacion
  // smaller
  {
    id: 413876972,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 381456876,
        label: "Ja",
      },
      {
        id: 133670142,
        label: "NEIN",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  // smaller
  //   main
  // private
  {
    id: 880710682,
    type: "checkbox",
    label: "Wie umfangreich sind die Arbeiten ?",
    options: [
      {
        id: 146207066,
        label: "Umfassende Badsanierung",
        des: "Erneuern des Badezimmers und aller dazugehörigen Teile (z. B. Fliesen, Boden, Decke, Elektrik)",
      },
      {
        id: 941557853,
        label: "Ein Badezimmer ersetzen",
        des: "Ersetzen Sie das Badezimmer ohne Fliesen, Boden, Elektrik usw.",
      },
      {
        id: 413876972,
        label: "Kleinere Aufträge",
        des: "Ersetzen Sie nur eine Armatur, z. B. Dusche oder Badewanne",
      },
    ],
  },
  //   comprehensive
  {
    id: 146207066,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 381456876,
        label: "Ja",
      },
      {
        id: 133670142,
        label: "NEIN",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  //   comprehensive
  // replacion
  {
    id: 941557853,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 381456876,
        label: "Ja",
      },
      {
        id: 133670142,
        label: "NEIN",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  // replacion
  // smaller
  {
    id: 413876972,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 381456876,
        label: "Ja",
      },
      {
        id: 133670142,
        label: "NEIN",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  // smaller
  // private
  // guest
  {
    id: 884608829,
    type: "checkbox",
    label: "Wie umfangreich sind die Arbeiten ?",
    options: [
      {
        id: 146207066,
        label: "Umfassende Badsanierung",
        des: "Erneuern des Badezimmers und aller dazugehörigen Teile (z. B. Fliesen, Boden, Decke, Elektrik)",
      },
      {
        id: 941557853,
        label: "Ein Badezimmer ersetzen",
        des: "Ersetzen Sie das Badezimmer ohne Fliesen, Boden, Elektrik usw.",
      },
      {
        id: 413876972,
        label: "Kleinere Aufträge",
        des: "Ersetzen Sie nur eine Armatur, z. B. Dusche oder Badewanne",
      },
    ],
  },
  //   comprehensive
  {
    id: 146207066,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 381456876,
        label: "Ja",
      },
      {
        id: 133670142,
        label: "NEIN",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  //   comprehensive
  // replacion
  {
    id: 941557853,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 381456876,
        label: "Ja",
      },
      {
        id: 133670142,
        label: "NEIN",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  // replacion
  // smaller
  {
    id: 413876972,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 381456876,
        label: "Ja",
      },
      {
        id: 133670142,
        label: "NEIN",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Sind mit dem Auftrag größere Bauarbeiten verbunden ?",
    options: [
      {
        id: 725552152,
        label: "Ja, existiert bereits.",
      },
      {
        id: 697053991,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  // smaller
  // guest
  // 2

  // Installing
  {
    id: 677229573,
    type: "multibox",
    mainId: 465519550,
    label: "Welche Armaturen müssen ausgetauscht werden ?",
    options: [
      {
        label: "Badewanne",
      },
      {
        label: "Dusche",
      },
      {
        label: "Duschkabine",
      },
      {
        label: "Toilette",
      },
      {
        label: "Waschbecken",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 465519550,
    type: "checkbox",
    label: "Benötigen Sie zusätzliche Arbeit ?",
    options: [
      {
        id: 239743071,
        label: "Ja",
      },
      {
        id: 745496635,
        label: "NEIN",
      },
    ],
  },
  {
    id: 239743071,
    type: "checkbox",
    label:
      "Are sanitary facilities, tiles, etc. (materials) already in place  ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 745496635,
    type: "checkbox",
    label:
      "Are sanitary facilities, tiles, etc. (materials) already in place  ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  // Installing

  // repair
  {
    id: 465519550,
    type: "checkbox",
    label:
      "Are sanitary facilities, tiles, etc. (materials) already in place  ?",
    options: [
      {
        id: 561008128,
        label: "Ja, existiert bereits.",
      },
      {
        id: 559758229,
        label: "NEIN, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 561008128,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  {
    id: 559758229,
    type: "checkbox",
    label: "Ungefähre Badezimmergröße:",
    options: [
      {
        label: "bis zu 5m2",
        credit: 10,
      },
      {
        label: "5-10 Ma",
        credit: 15,
      },
      {
        label: "10m2 oder mehr",
        credit: 25,
      },
    ],
  },
  // repair

  // plates
  {
    id: 324202133,
    type: "checkbox",
    label: "Welche Plattenarbeiten benötigen Sie ?",
    options: [
      {
        label: "Fliesen neu verlegen / austauschen",
        credit: 20,
      },
      {
        label: "Fliesen reparieren",
        credit: 10,
      },
      {
        label: "Neuverfugung",
        credit: 10,
      },
      {
        label: "Andere",
        credit: 5,
      },
    ],
  },
  // plates
];

export default renovations;
