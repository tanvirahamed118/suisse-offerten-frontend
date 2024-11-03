const carpenter = [
  {
    id: 698157120,
    type: "checkbox",
    label: "In welchem ​​Bereich benötigen Sie Tischlerleistungen ?",
    options: [
      {
        id: 966244388,
        label: "Möbel",
        des: "Möbel nach Maß, Möbelrestaurierung, Montage von Fertigmöbeln (IKEA, etc.)",
      },
      {
        id: 724152666,
        label: "Fenster / Türen / Böden",
        des: "Einbau oder Reparatur von Türen / Fenstern / Böden",
      },
      {
        id: 745410794,
        label: "Küchen",
        des: "Küchenbau, Küchenmontage, Küchenmodule, Arbeitsplatten",
      },
      {
        id: 949164005,
        label: "Sonstige Tischlerarbeiten",
        des: "Trennwände, Holzdecken, Gipskartonplatten, Dachgauben, Treppen, Handläufe usw.",
        credit: 10,
      },
    ],
  },
  {
    id: 966244388,
    type: "checkbox",
    label: "Welche Art von Möbeltischlerdienst benötigen Sie ?",
    options: [
      {
        id: 884905726,
        label: "Möbel nach Maß",
        des: "Einbauschrank, Tisch, Bett, Regal, Sideboard, etc.",
        credit: 15,
      },
      {
        id: 935198970,
        label: "Restaurierung / Reparatur von Möbeln",
        des: "Schleifen, Ölen, Lackieren, Furnieren, Kürzen, etc.",
        credit: 10,
      },
      {
        id: 266431996,
        label: "Montage / Einbau von Möbeln",
        des: "Montage von Fertigmöbeln (IKEA, USM, etc.)",
        credit: 15,
      },
    ],
  },
  {
    id: 884905726,
    type: "checkbox",
    label: "Welche Art von maßgefertigten Möbeln benötigen Sie ?",
    options: [
      {
        id: 953062955,
        label: "Aufbewahrungsmöbel",
        des: "Einbauschränke, Garderoben, Regale, etc.",
      },
      {
        id: 655611146,
        label: "Küchenmodule",
        des: "Schränke, Fronten, Korpusse etc.",
      },
      {
        id: 843086607,
        label: "Sonstige Möbel / Sonderanfertigungen",
        des: "Tisch, Bank, Bett, Empfangstresen, etc.",
      },
    ],
  },
  {
    id: 953062955,
    type: "checkbox",
    label: "Welche Art von Lagermöbeln benötigen Sie ?",
    options: [
      {
        label: "Einbauschrank",
      },
      {
        label: "Regal",
      },
      {
        label: "Kommode",
      },
      {
        label: "Anrichte",
      },
      {
        label: "Andere oder mehrere der oben genannten",
      },
    ],
  },
  {
    id: 935198970,
    type: "checkbox",
    label: "Handelt es sich um eine kleine oder große Reparatur ?",
    options: [
      {
        label: "Kleine Reparatur",
        des: "Auch ein Allrounder könnte den Job erledigen (einen wackeligen Tisch stabilisieren, kleine Kratzer beseitigen, ein gerissenes Scharnier reparieren, etc.)",
      },
      {
        label: "Größere Reparatur / Restaurierung",
        des: "Ich benötige einen professionellen Schreiner (Massivholztisch schleifen und ölen, kaputtes Stuhlbein ersetzen, antike Möbel restaurieren etc.)",
      },
    ],
  },
  //   window
  {
    id: 724152666,
    type: "checkbox",
    label: "In welchem ​​Bereich benötigen Sie die Dienstleistung ?",
    options: [
      {
        id: 451838868,
        label: "Nr. Türen",
      },
      {
        id: 963063945,
        label: "Rahmen",
      },
      {
        id: 953542031,
        label: "Fenster",
      },
      {
        id: 998523758,
        label: "Stockwerke",
      },
      {
        id: 174907062,
        label: "Etwas anderes oder mehrere der oben genannten",
        credit: 7,
      },
    ],
  },
  {
    id: 451838868,
    type: "checkbox",
    label: "Welchen Türservice benötigen Sie ?",
    options: [
      {
        id: 924972706,
        label: "Türen einbauen",
      },
      {
        id: 582400275,
        label: "Türen reparieren oder anpassen",
        credit: 8,
      },
      {
        id: 236858189,
        label: "Andere",
        credit: 8,
      },
    ],
  },
  {
    id: 924972706,
    type: "checkbox",
    label: "Wie viele Türen gibt es ?",
    options: [
      {
        id: 170406791,
        label: "1 Tür",
        credit: 10,
      },
      {
        id: 307972501,
        label: "2 bis 3 Türen",
        credit: 20,
      },
      {
        id: 444388335,
        label: "4 oder mehr Türen",
        credit: 40,
      },
    ],
  },
  {
    id: 170406791,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 307972501,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 444388335,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 963063945,
    type: "checkbox",
    label: "Wie viele Türen gibt es ?",
    options: [
      {
        label: "1 Tür",
        credit: 10,
      },
      {
        label: "2 bis 3 Türen",
        credit: 20,
      },
      {
        label: "4 oder mehr Türen",
        credit: 40,
      },
    ],
  },
  {
    id: 953542031,
    type: "checkbox",
    label: "Welche Fensterdienste benötigen Sie ?",
    options: [
      {
        id: 602639592,
        label: "Einbau oder Austausch von Fenstern",
      },
      {
        label: "Reparieren oder Anpassen von Fenstern",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 602639592,
    type: "checkbox",
    label: "Sind die Fenster schon da ?",
    options: [
      {
        id: 653395436,
        label: "1 bis 2 Fenster",
        credit: 8,
      },
      {
        id: 477359243,
        label: "3 bis 5 Fenster",
        credit: 20,
      },
      {
        id: 393536330,
        label: "6 bis 9 Fenster",
        credit: 27,
      },
      {
        id: 956030516,
        label: "10 or more windows",
        credit: 45,
      },
    ],
  },
  {
    id: 653395436,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 477359243,
    type: "checkbox",
    label: "Is the material for the floor already available  ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 393536330,
    type: "checkbox",
    label: "Is the material for the floor already available  ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 956030516,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },

  {
    id: 998523758,
    type: "checkbox",
    label: "Welche Bodenbelagsdienstleistungen benötigen Sie ?",
    options: [
      {
        id: 377750590,
        label: "Boden verlegen",
      },
      {
        id: 269830556,
        label: "Böden schleifen / ölen / versiegeln",
      },
      {
        id: 941261816,
        label: "Boden reparieren / anpassen",
        credit: 10,
      },
      {
        id: 223056452,
        label: "Andere",
        credit: 7,
      },
    ],
  },
  //   laying
  {
    id: 377750590,
    type: "checkbox",
    label: "What kind of floor is it  ?",
    options: [
      {
        id: 269499636,
        label: "Massivholzdielen",
      },
      {
        id: 946739860,
        label: "Parkett",
      },
      {
        id: 799417592,
        label: "Andere",
        credit: 7,
      },
    ],
  },
  {
    id: 269499636,
    type: "checkbox",
    label: "Wie viele Zimmer gibt es ?",
    options: [
      {
        id: 4107193069,
        label: "1 bis 2 Zimmer",
        credit: 15,
      },
      {
        id: 441659568,
        label: "3 bis 4 Zimmer",
        credit: 25,
      },
      {
        id: 829910918,
        label: "5 oder mehr Zimmer",
        credit: 35,
      },
      {
        id: 695487785,
        label: "Es handelt sich um eine Gewerbeimmobilie",
        credit: 40,
      },
    ],
  },
  {
    id: 4107193069,
    type: "checkbox",
    label: "Is the material for the floor already available  ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 441659568,
    type: "checkbox",
    label: "Is the material for the floor already available  ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 829910918,
    type: "checkbox",
    label: "Is the material for the floor already available  ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 695487785,
    type: "checkbox",
    label: "Is the material for the floor already available  ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 946739860,
    type: "checkbox",
    label: "Wie viele Zimmer gibt es ?",
    options: [
      {
        id: 885796561,
        label: "1 bis 2 Zimmer",
        credit: 15,
      },
      {
        id: 441659568,
        label: "3 bis 4 Zimmer",
        credit: 25,
      },
      {
        id: 829910918,
        label: "5 oder mehr Zimmer",
        credit: 35,
      },
      {
        id: 695487785,
        label: "Es handelt sich um eine Gewerbeimmobilie",
        credit: 40,
      },
    ],
  },
  {
    id: 885796561,
    type: "checkbox",
    label: "Is the material for the floor already available  ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 441659568,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 829910918,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 695487785,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  //   laying
  // sending
  {
    id: 269830556,
    type: "checkbox",
    label: "What kind of floor is it  ?",
    options: [
      {
        id: 269499636,
        label: "Solid wood floorboards",
      },
      {
        id: 946739860,
        label: "parquet",
      },
      {
        id: 799417592,
        label: "Andere",
        credit: 7,
      },
    ],
  },
  {
    id: 269499636,
    type: "checkbox",
    label: "Wie viele Zimmer gibt es ?",
    options: [
      {
        id: 885796561,
        label: "1 bis 2 Zimmer",
        credit: 15,
      },
      {
        id: 441659568,
        label: "3 bis 4 Zimmer",
        credit: 25,
      },
      {
        id: 829910918,
        label: "5 oder mehr Zimmer",
        credit: 35,
      },
      {
        id: 695487785,
        label: "Es handelt sich um eine Gewerbeimmobilie",
        credit: 40,
      },
    ],
  },
  {
    id: 885796561,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 441659568,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 829910918,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 695487785,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 946739860,
    type: "checkbox",
    label: "Wie viele Zimmer gibt es ?",
    options: [
      {
        id: 885796561,
        label: "1 bis 2 Zimmer",
        credit: 15,
      },
      {
        id: 441659568,
        label: "3 bis 4 Zimmer",
        credit: 25,
      },
      {
        id: 829910918,
        label: "5 oder mehr Zimmer",
        credit: 35,
      },
      {
        id: 695487785,
        label: "Es handelt sich um eine Gewerbeimmobilie",
        credit: 40,
      },
    ],
  },
  {
    id: 885796561,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 441659568,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 829910918,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 695487785,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  // sending
  // repire
  {
    id: 941261816,
    type: "checkbox",
    label: "What kind of floor is it  ?",
    options: [
      {
        id: 269499636,
        label: "Solid wood floorboards",
      },
      {
        id: 946739860,
        label: "parquet",
      },
      {
        id: 799417592,
        label: "Andere",
        credit: 7,
      },
    ],
  },
  {
    id: 269499636,
    type: "checkbox",
    label: "Wie viele Zimmer gibt es ?",
    options: [
      {
        id: 885796561,
        label: "1 bis 2 Zimmer",
        credit: 15,
      },
      {
        id: 441659568,
        label: "3 bis 4 Zimmer",
        credit: 25,
      },
      {
        id: 829910918,
        label: "5 oder mehr Zimmer",
        credit: 35,
      },
      {
        id: 695487785,
        label: "Es handelt sich um eine Gewerbeimmobilie",
        credit: 40,
      },
    ],
  },
  {
    id: 885796561,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 441659568,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 829910918,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 695487785,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 946739860,
    type: "checkbox",
    label: "Wie viele Zimmer gibt es ?",
    options: [
      {
        id: 885796561,
        label: "1 bis 2 Zimmer",
        credit: 15,
      },
      {
        id: 441659568,
        label: "3 bis 4 Zimmer",
        credit: 25,
      },
      {
        id: 829910918,
        label: "5 oder mehr Zimmer",
        credit: 35,
      },
      {
        id: 695487785,
        label: "Es handelt sich um eine Gewerbeimmobilie",
        credit: 40,
      },
    ],
  },
  {
    id: 885796561,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 441659568,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 829910918,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  {
    id: 695487785,
    type: "checkbox",
    label: "Sind die Türen schon da ?",
    options: [
      {
        label: "Ja, existiert bereits.",
      },
      {
        label: "Nein, muss noch beschafft werden.",
      },
    ],
  },
  // repire
  //   window

  // kitchen
  {
    id: 745410794,
    type: "checkbox",
    label: "Welche Tischlerleistungen für die Küche benötigen Sie ?",
    options: [
      {
        id: 816112159,
        label: "Montage einer Fertigküche",
        credit: 20,
      },
      {
        label: "Restaurierung oder Umbau einer Küche",
        credit: 20,
      },
      {
        label: "Maßgefertigte Küchenmöbel oder Arbeitsplatten",
        credit: 35,
      },
      {
        label: "Küchenplanung",
        credit: 45,
      },
      {
        label: "Andere",
        credit: 8,
      },
    ],
  },
  {
    id: 816112159,
    type: "multibox",
    label: "Welche Leistungen sind bei der Montage zu erbringen ?",
    options: [
      {
        label: "Montage einer Fertigküche",
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
        label: "Installation und Anschluss von Elektrogeräten",
      },
      {
        label: "Demontage und Abschaltung elektrischer Geräte",
      },
    ],
  },
  // kitchen
];

export default carpenter;
