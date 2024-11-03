const carpenter = [
  {
    id: 213801317,
    type: "checkbox",
    label: "In welchem ​​Bereich benötigen Sie Tischlerleistungen ?",
    options: [
      {
        id: 6842066448,
        label: "Möbel",
        des: "Möbel nach Maß, Möbelrestaurierung, Montage von Fertigmöbeln (IKEA, etc.)",
      },
      {
        id: 5664928063,
        label: "Fenster / Türen / Böden",
        des: "Einbau oder Reparatur von Türen / Fenstern / Böden",
      },
      {
        id: 9746607194,
        label: "Küchen",
        des: "Küchenbau, Küchenmontage, Küchenmodule, Arbeitsplatten",
      },
      {
        label: "Sonstige Tischlerarbeiten",
        des: "Trennwände, Holzdecken, Gipskartonplatten, Dachgauben, Treppen, Handläufe usw.",
        credit: 15,
      },
    ],
  },
  {
    id: 6842066448,
    type: "checkbox",
    label: "Welche Art von Möbeltischlerdienst benötigen Sie ?",
    options: [
      {
        id: 2797419531,
        label: "Möbel nach Maß",
        des: "Einbauschrank, Tisch, Bett, Regal, Sideboard, etc.",
      },
      {
        id: 4117026822,
        label: "Restaurierung / Reparatur von Möbeln",
        des: "Schleifen, Ölen, Lackieren, Furnieren, Kürzen, etc.",
      },
      {
        label: "Montage / Einbau von Möbeln",
        des: "Montage von Fertigmöbeln (IKEA, USM, etc.)",
        credit: 13,
      },
    ],
  },
  {
    id: 2797419531,
    type: "checkbox",
    label: "Welche Art von maßgefertigten Möbeln benötigen Sie ?",
    options: [
      {
        id: 8002983921,
        label: "Aufbewahrungsmöbel",
        des: "Einbauschränke, Garderoben, Regale, etc.",
        credit: 25,
      },
      {
        label: "Küchenmodule",
        des: "Schränke, Fronten, Korpusse etc.",
        credit: 20,
      },
      {
        label: "Sonstige Möbel / Sonderanfertigungen",
        des: "Tisch, Bank, Bett, Empfangstresen, etc.",
        credit: 15,
      },
    ],
  },
  {
    id: 8002983921,
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
    id: 4117026822,
    type: "checkbox",
    label: "Handelt es sich um eine kleine oder große Reparatur ?",
    options: [
      {
        label: "Kleine Reparatur",
        des: "Auch ein Allrounder könnte den Job erledigen (einen wackeligen Tisch stabilisieren, kleine Kratzer beseitigen, ein gerissenes Scharnier reparieren, etc.)",
        credit: 8,
      },
      {
        label: "Größere Reparatur / Restaurierung",
        des: "Ich benötige einen professionellen Schreiner (Massivholztisch schleifen und ölen, kaputtes Stuhlbein ersetzen, antike Möbel restaurieren etc.)",
        credit: 15,
      },
    ],
  },
  //   window
  {
    id: 5664928063,
    type: "checkbox",
    label: "In welchem ​​Bereich benötigen Sie die Dienstleistung ?",
    options: [
      {
        id: 7261522584,
        label: "Nr. Türen",
      },
      {
        id: 5149360031,
        label: "Rahmen",
      },
      {
        id: 6633063876,
        label: "Fenster",
      },
      {
        id: 1782405401,
        label: "Stockwerke",
        credit: 13,
      },
      {
        label: "Etwas anderes oder mehrere der oben genannten",
        credit: 7,
      },
    ],
  },
  {
    id: 7261522584,
    type: "checkbox",
    label: "Welchen Türservice benötigen Sie ?",
    options: [
      {
        id: 4887983061,
        label: "Türen einbauen",
      },
      {
        label: "Türen reparieren oder anpassen",
        credit: 5,
      },
      {
        label: "Andere",
        credit: 8,
      },
    ],
  },
  {
    id: 4887983061,
    type: "checkbox",
    label: "Wie viele Türen gibt es ?",
    options: [
      {
        id: 170406791,
        label: "1 Tür",
        credit: 8,
      },
      {
        id: 307972501,
        label: "2 bis 3 Türen",
        credit: 25,
      },
      {
        id: 444388335,
        label: "4 oder mehr Türen",
        credit: 35,
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
    id: 5149360031,
    type: "checkbox",
    label: "Wie viele Türen gibt es ?",
    options: [
      {
        label: "1 Tür",
        credit: 8,
      },
      {
        label: "2 bis 3 Türen",
        credit: 25,
      },
      {
        label: "4 oder mehr Türen",
        credit: 35,
      },
    ],
  },
  {
    id: 6633063876,
    type: "checkbox",
    label: "Welchen Türservice benötigen Sie ?",
    options: [
      {
        id: 602639592,
        label: "Einbau oder Austausch von Fenstern",
      },
      {
        label: "Reparieren oder Anpassen von Fenstern",
        credit: 13,
      },
      {
        label: "Andere",
        credit: 8,
      },
    ],
  },
  {
    id: 602639592,
    type: "checkbox",
    label: "Wie viele Fenster gibt es ?",
    options: [
      {
        id: 653395436,
        label: "1 bis 2 Fenster",
        credit: 20,
      },
      {
        id: 477359243,
        label: "3 bis 5 Fenster",
        credit: 30,
      },
      {
        id: 393536330,
        label: "6 to 9 windows",
        credit: 45,
      },
      {
        id: 956030516,
        label: "10 oder mehr Fenster",
        credit: 80,
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
    id: 393536330,
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
    id: 1782405401,
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
      },
      {
        id: 223056452,
        label: "Andere",
      },
    ],
  },
  //   laying
  {
    id: 377750590,
    type: "checkbox",
    label: "Um was für einen Boden handelt es sich ?",
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
      },
      {
        id: 441659568,
        label: "3 bis 4 Zimmer",
      },
      {
        id: 829910918,
        label: "5 oder mehr Zimmer",
      },
      {
        id: 695487785,
        label: "Es handelt sich um eine Gewerbeimmobilie",
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
      },
      {
        id: 441659568,
        label: "3 bis 4 Zimmer",
      },
      {
        id: 829910918,
        label: "5 oder mehr Zimmer",
      },
      {
        id: 695487785,
        label: "Es handelt sich um eine Gewerbeimmobilie",
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
  //   laying
  // sending
  {
    id: 269830556,
    type: "checkbox",
    label: "Um was für einen Boden handelt es sich ?",
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
      },
      {
        id: 441659568,
        label: "3 bis 4 Zimmer",
      },
      {
        id: 829910918,
        label: "5 oder mehr Zimmer",
      },
      {
        id: 695487785,
        label: "Es handelt sich um eine Gewerbeimmobilie",
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
      },
      {
        id: 441659568,
        label: "3 bis 4 Zimmer",
      },
      {
        id: 829910918,
        label: "5 oder mehr Zimmer",
      },
      {
        id: 695487785,
        label: "Es handelt sich um eine Gewerbeimmobilie",
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
    label: "Um was für einen Boden handelt es sich ?",
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
      },
      {
        id: 441659568,
        label: "3 bis 4 Zimmer",
      },
      {
        id: 829910918,
        label: "5 oder mehr Zimmer",
      },
      {
        id: 695487785,
        label: "Es handelt sich um eine Gewerbeimmobilie",
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
      },
      {
        id: 441659568,
        label: "3 bis 4 Zimmer",
      },
      {
        id: 829910918,
        label: "5 oder mehr Zimmer",
      },
      {
        id: 695487785,
        label: "Es handelt sich um eine Gewerbeimmobilie",
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
    id: 9746607194,
    type: "checkbox",
    label: "Welche Tischlerleistungen für die Küche benötigen Sie ?",
    options: [
      {
        id: 816112159,
        label: "Montage einer Fertigküche",
        credit: 25,
      },
      {
        label: "Restaurierung oder Umbau einer Küche",
        credit: 20,
      },
      {
        label: "Maßgefertigte Küchenmöbel oder Arbeitsplatten",
        credit: 15,
      },
      {
        label: "Küchenplanung",
        credit: 45,
      },
      {
        label: "Andere",
        credit: 15,
      },
    ],
  },
  {
    id: 816112159,
    type: "checkbox",
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
