import { how_far_the_transport } from "../../reuse-data";

const transport = [
  {
    id: 659664297,
    type: "checkbox",
    label: "Welche Art von Transport benötigen Sie ?",
    options: [
      {
        id: 120679971,
        label: "Klaviertransport",
        credit: 5,
      },
      {
        id: 613357797,
        label: "Auto-/Motorradtransport",
        credit: 8,
      },
      {
        id: 760736843,
        label: "Möbeltransport",
        credit: 3,
      },
      {
        id: 270341747,
        label: "Lieferung und Abholung",
        credit: 4,
      },
      {
        id: 709022107,
        label: "Demontage und Entsorgung",
        credit: 5,
      },
      {
        id: 939344768,
        label: "Sonstiges",
        credit: 3,
      },
    ],
  },
  {
    id: 120679971,
    type: "checkbox",
    label: "Wie weit ist der Transport ?",
    options: how_far_the_transport(
      399206890,
      782293155,
      538989857,
      612833247,
      541477660
    ),
  },
  {
    id: 399206890,
    type: "doubleInput",
    mainId: 686111495,
    label: "Von und nach wo erfolgt der Transport ?",
    options: [{ width: "Aus:", height: "Bis:" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "Um welche Teile handelt es sich ?",
    options: [
      {
        label: "Keller",
      },
      {
        label: "Erdgeschoss",
      },
      {
        label: "1. Stock",
      },
      {
        label: "2. Stock",
      },
      {
        label: "3. Stock",
      },
      {
        label: "4. Stock",
      },
      {
        label: "5. Stock oder höher",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [
      { label: "Ja", id: 726372277 },
      { label: "NEIN", id: 640061636 },
    ],
  },
  {
    id: 726372277,
    type: "multibox",
    mainId: 459406632,
    label: "Auf welchen Etagen liegt das Ziel ?",
    options: [
      {
        label: "Keller",
      },
      {
        label: "Erdgeschoss",
      },
      {
        label: "1. Stock",
      },
      {
        label: "2. Stock",
      },
      {
        label: "3. Stock",
      },
      {
        label: "4. Stock",
      },
      {
        label: "5. Stock oder höher",
      },
    ],
  },
  {
    id: 459406632,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 363012132,
    label: "Auf welchen Etagen liegt das Ziel ?",
    options: [
      {
        label: "Keller",
      },
      {
        label: "Erdgeschoss",
      },
      {
        label: "1. Stock",
      },
      {
        label: "2. Stock",
      },
      {
        label: "3. Stock",
      },
      {
        label: "4. Stock",
      },
      {
        label: "5. Stock oder höher",
      },
    ],
  },
  {
    id: 363012132,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 613357797,
    type: "checkbox",
    label: "Wie weit ist der Transport ?",
    options: how_far_the_transport(
      399206890,
      782293155,
      538989857,
      612833247,
      541477660
    ),
  },
  {
    id: 399206890,
    type: "doubleInput",
    mainId: 686111495,
    label: "Von und nach wo erfolgt der Transport ?",
    options: [{ width: "Aus:", height: "Bis:" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 644565051,
    label: "Um welche Teile handelt es sich ?",
    options: [
      {
        label: "Keller",
      },
      {
        label: "Erdgeschoss",
      },
      {
        label: "1. Stock",
      },
      {
        label: "2. Stock",
      },
      {
        label: "3. Stock",
      },
      {
        label: "4. Stock",
      },
      {
        label: "5. Stock oder höher",
      },
    ],
  },
  {
    id: 644565051,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [
      { label: "Ja", id: 726372277 },
      { label: "NEIN", id: 640061636 },
    ],
  },
  {
    id: 726372277,
    type: "multibox",
    label: "Auf welchen Etagen liegt das Ziel ?",
    mainId: 147386648,
    options: [
      {
        label: "Keller",
      },
      {
        label: "Erdgeschoss",
      },
      {
        label: "1. Stock",
      },
      {
        label: "2. Stock",
      },
      {
        label: "3. Stock",
      },
      {
        label: "4. Stock",
      },
      {
        label: "5. Stock oder höher",
      },
    ],
  },
  {
    id: 147386648,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 944599198,
    label: "Auf welchen Etagen liegt das Ziel ?",
    options: [
      {
        label: "Keller",
      },
      {
        label: "Erdgeschoss",
      },
      {
        label: "1. Stock",
      },
      {
        label: "2. Stock",
      },
      {
        label: "3. Stock",
      },
      {
        label: "4. Stock",
      },
      {
        label: "5. Stock oder höher",
      },
    ],
  },
  {
    id: 944599198,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 760736843,
    type: "checkbox",
    label: "Wie weit ist der Transport ?",
    options: how_far_the_transport(
      399206890,
      782293155,
      538989857,
      612833247,
      541477660
    ),
  },
  {
    id: 399206890,
    type: "doubleInput",
    mainId: 686111495,
    label: "Von und nach wo erfolgt der Transport ?",
    options: [{ width: "Aus:", height: "Bis:" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "Um welche Teile handelt es sich ?",
    options: [
      {
        label: "Keller",
      },
      {
        label: "Erdgeschoss",
      },
      {
        label: "1. Stock",
      },
      {
        label: "2. Stock",
      },
      {
        label: "3. Stock",
      },
      {
        label: "4. Stock",
      },
      {
        label: "5. Stock oder höher",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [
      { label: "Ja", id: 726372277 },
      { label: "NEIN", id: 640061636 },
    ],
  },
  {
    id: 726372277,
    type: "multibox",
    mainId: 420190695,
    label: "Auf welchen Etagen liegt das Ziel ?",
    options: [
      {
        label: "Keller",
      },
      {
        label: "Erdgeschoss",
      },
      {
        label: "1. Stock",
      },
      {
        label: "2. Stock",
      },
      {
        label: "3. Stock",
      },
      {
        label: "4. Stock",
      },
      {
        label: "5. Stock oder höher",
      },
    ],
  },
  {
    id: 420190695,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 839428265,
    label: "Auf welchen Etagen liegt das Ziel ?",
    options: [
      {
        label: "Keller",
      },
      {
        label: "Erdgeschoss",
      },
      {
        label: "1. Stock",
      },
      {
        label: "2. Stock",
      },
      {
        label: "3. Stock",
      },
      {
        label: "4. Stock",
      },
      {
        label: "5. Stock oder höher",
      },
    ],
  },
  {
    id: 839428265,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 270341747,
    type: "checkbox",
    label: "Wie weit ist der Transport ?",
    options: how_far_the_transport(
      399206890,
      782293155,
      538989857,
      612833247,
      541477660
    ),
  },
  {
    id: 399206890,
    type: "doubleInput",
    mainId: 686111495,
    label: "Von und nach wo erfolgt der Transport ?",
    options: [{ width: "Aus:", height: "Bis:" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 441617407,
    label: "Um welche Teile handelt es sich ?",
    options: [
      {
        label: "Keller",
      },
      {
        label: "Erdgeschoss",
      },
      {
        label: "1. Stock",
      },
      {
        label: "2. Stock",
      },
      {
        label: "3. Stock",
      },
      {
        label: "4. Stock",
      },
      {
        label: "5. Stock oder höher",
      },
    ],
  },
  {
    id: 441617407,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [
      { label: "Ja", id: 726372277 },
      { label: "NEIN", id: 640061636 },
    ],
  },
  {
    id: 726372277,
    type: "multibox",
    mainId: 160216962,
    label: "Auf welchen Etagen liegt das Ziel ?",
    options: [
      {
        label: "Keller",
      },
      {
        label: "Erdgeschoss",
      },
      {
        label: "1. Stock",
      },
      {
        label: "2. Stock",
      },
      {
        label: "3. Stock",
      },
      {
        label: "4. Stock",
      },
      {
        label: "5. Stock oder höher",
      },
    ],
  },
  {
    id: 160216962,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 106299203,
    label: "Auf welchen Etagen liegt das Ziel ?",
    options: [
      {
        label: "Keller",
      },
      {
        label: "Erdgeschoss",
      },
      {
        label: "1. Stock",
      },
      {
        label: "2. Stock",
      },
      {
        label: "3. Stock",
      },
      {
        label: "4. Stock",
      },
      {
        label: "5. Stock oder höher",
      },
    ],
  },
  {
    id: 106299203,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 709022107,
    type: "checkbox",
    label: "Wie weit ist der Transport ?",
    options: how_far_the_transport(
      399206890,
      782293155,
      538989857,
      612833247,
      541477660
    ),
  },
  {
    id: 399206890,
    type: "doubleInput",
    mainId: 686111495,
    label: "Von und nach wo erfolgt der Transport ?",
    options: [{ width: "Aus:", height: "Bis:" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 819648441,
    label: "Um welche Teile handelt es sich ?",
    options: [
      {
        label: "Keller",
      },
      {
        label: "Erdgeschoss",
      },
      {
        label: "1. Stock",
      },
      {
        label: "2. Stock",
      },
      {
        label: "3. Stock",
      },
      {
        label: "4. Stock",
      },
      {
        label: "5. Stock oder höher",
      },
    ],
  },
  {
    id: 819648441,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [
      { label: "Ja", id: 726372277 },
      { label: "NEIN", id: 640061636 },
    ],
  },
  {
    id: 726372277,
    type: "multibox",
    mainId: 222000770,
    label: "Auf welchen Etagen liegt das Ziel ?",
    options: [
      {
        label: "Keller",
      },
      {
        label: "Erdgeschoss",
      },
      {
        label: "1. Stock",
      },
      {
        label: "2. Stock",
      },
      {
        label: "3. Stock",
      },
      {
        label: "4. Stock",
      },
      {
        label: "5. Stock oder höher",
      },
    ],
  },
  {
    id: 222000770,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 293350647,
    label: "Auf welchen Etagen liegt das Ziel ?",
    options: [
      {
        label: "Keller",
      },
      {
        label: "Erdgeschoss",
      },
      {
        label: "1. Stock",
      },
      {
        label: "2. Stock",
      },
      {
        label: "3. Stock",
      },
      {
        label: "4. Stock",
      },
      {
        label: "5. Stock oder höher",
      },
    ],
  },
  {
    id: 293350647,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 939344768,
    type: "checkbox",
    label: "Wie weit ist der Transport ?",
    options: how_far_the_transport(
      399206890,
      782293155,
      538989857,
      612833247,
      541477660
    ),
  },
  {
    id: 399206890,
    type: "doubleInput",
    mainId: 686111495,
    label: "Von und nach wo erfolgt der Transport ?",
    options: [{ width: "Aus:", height: "Bis:" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 441568963,
    label: "Um welche Teile handelt es sich ?",
    options: [
      {
        label: "Keller",
      },
      {
        label: "Erdgeschoss",
      },
      {
        label: "1. Stock",
      },
      {
        label: "2. Stock",
      },
      {
        label: "3. Stock",
      },
      {
        label: "4. Stock",
      },
      {
        label: "5. Stock oder höher",
      },
    ],
  },
  {
    id: 441568963,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [
      { label: "Ja", id: 726372277 },
      { label: "NEIN", id: 640061636 },
    ],
  },
  {
    id: 726372277,
    type: "multibox",
    mainId: 335344367,
    label: "Auf welchen Etagen liegt das Ziel ?",
    options: [
      {
        label: "Keller",
      },
      {
        label: "Erdgeschoss",
      },
      {
        label: "1. Stock",
      },
      {
        label: "2. Stock",
      },
      {
        label: "3. Stock",
      },
      {
        label: "4. Stock",
      },
      {
        label: "5. Stock oder höher",
      },
    ],
  },
  {
    id: 335344367,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 914344424,
    label: "Auf welchen Etagen liegt das Ziel ?",
    options: [
      {
        label: "Keller",
      },
      {
        label: "Erdgeschoss",
      },
      {
        label: "1. Stock",
      },
      {
        label: "2. Stock",
      },
      {
        label: "3. Stock",
      },
      {
        label: "4. Stock",
      },
      {
        label: "5. Stock oder höher",
      },
    ],
  },
  {
    id: 914344424,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
];

export default transport;
