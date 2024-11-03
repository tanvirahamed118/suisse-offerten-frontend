import { how_far_the_transport } from "../../reuse-data";

const small = [
  {
    id: 1529840539,
    type: "checkbox",
    label: "Welche Art von Transport benötigen Sie ?",
    options: [
      {
        id: 8745161830,
        label: "Klaviertransport",
        credit: 5,
      },
      {
        id: 7568795465,
        label: "Auto-/Motorradtransport",
        credit: 8,
      },
      {
        id: 4721712231,
        label: "Möbeltransport",
        credit: 3,
      },
      {
        id: 7396035660,
        label: "Lieferung und Abholung",
        credit: 4,
      },
      {
        id: 7821475897,
        label: "Demontage und Entsorgung",
        credit: 5,
      },
      {
        label: "Andere",
        credit: 3,
      },
    ],
  },
  {
    id: 8745161830,
    type: "checkbox",
    label: "Wie weit ist der Transport ?",
    options: how_far_the_transport(
      6159716830,
      782293155,
      538989857,
      612833247,
      541477660
    ),
  },
  {
    id: 6159716830,
    type: "doubleInput",
    mainId: 7568795465,
    label: "Auf welchen Etagen befindet sich der Abholort ?",
    options: [
      {
        width: "Aus:",
        height: "Bis:",
        placeOne: "ZB 3011 Bern",
        placeTow: "ZB 8003 Zurich",
      },
    ],
  },
  {
    id: 7568795465,
    type: "multibox",
    mainId: 4721712231,
    label: "Auf welchen Etagen befindet sich der Abholort ?",
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
    id: 4721712231,
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
    mainId: 565108776,
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
    id: 713783365,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 565108776,
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
    id: 713783365,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 7568795465,
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
    label: "Auf welchen Etagen befindet sich der Abholort ?",
    options: [{ label: "" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "Auf welchen Etagen befindet sich der Abholort ?",
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
    mainId: 565108776,
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
    id: 713783365,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 565108776,
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
    id: 713783365,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 4721712231,
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
    label: "Auf welchen Etagen befindet sich der Abholort ?",
    options: [{ label: "" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "Auf welchen Etagen befindet sich der Abholort ?",
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
    mainId: 565108776,
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
    id: 713783365,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 565108776,
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
    id: 713783365,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 7396035660,
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
    label: "Auf welchen Etagen befindet sich der Abholort ?",
    options: [{ label: "" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "Auf welchen Etagen befindet sich der Abholort ?",
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
    mainId: 565108776,
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
    id: 713783365,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 565108776,
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
    id: 713783365,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 7821475897,
    type: "checkbox",
    label: "Hoch much should be transportet  ?",
    options: [
      { label: "A car charge" },
      { label: "A van load" },
      { label: "Multiple transport loads" },
      { label: "A truck load or more" },
    ],
  },
  {
    id: 399206890,
    type: "doubleInput",
    mainId: 686111495,
    label: "Auf welchen Etagen befindet sich der Abholort ?",
    options: [{ label: "" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "Auf welchen Etagen befindet sich der Abholort ?",
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
    mainId: 565108776,
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
    id: 713783365,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 565108776,
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
    id: 713783365,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 3154518546,
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
    label: "Auf welchen Etagen befindet sich der Abholort ?",
    options: [{ label: "" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "Auf welchen Etagen befindet sich der Abholort ?",
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
    mainId: 565108776,
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
    id: 713783365,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 565108776,
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
    id: 713783365,
    type: "checkbox",
    label: "Gibt es am Abholort einen Aufzug ?",
    options: [{ label: "Ja" }, { label: "NEIN" }],
  },
];

export default small;
