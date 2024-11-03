import { approximately_how_the_affected_area } from "../../reuse-data";

const slabs = [
  {
    id: 603134044,
    type: "checkbox",
    label: "Welche Fliesenlegerarbeiten benötigen Sie ?",
    options: [
      {
        id: 6449724186,
        label: "Platten verlegen / austauschen",
      },
      {
        id: 491847277,
        label: "Platten reparieren",
        credit: 10,
      },
      {
        id: 514373759,
        label: "Fugen erneuern",
        credit: 5,
      },
      {
        id: 176014696,
        label: "Andere",
        credit: 5,
      },
    ],
  },
  {
    id: 6449724186,
    type: "checkbox",
    label: "Wo sollen die Paneele verlegt werden ?",
    options: [
      {
        id: 7492094461,
        label: "Badezimmer / WC",
      },
      {
        id: 7246032159,
        label: "Wintergarten",
      },
      {
        id: 1241477312,
        label: "veranda",
      },
      {
        id: 1181416948,
        label: "Balkon / Terrasse",
      },
      {
        id: 7728965234,
        label: "Kamin / Kaminofen",
      },
      {
        id: 8531777232,
        label: "Andere",
      },
    ],
  },
  {
    id: 7492094461,
    type: "multibox",
    mainId: 2168682727,
    label: "Wo im Bad/WC sollen Fliesen verlegt werden ?",
    options: [
      {
        label: "Wände",
      },
      {
        label: "Boden",
      },
      {
        label: "Dusche",
      },
      {
        label: "Bad",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 2168682727,
    type: "checkbox",
    label: "Sind die Platten schon da ?",
    options: [
      {
        id: 576329979,
        label: "Ja, es existiert bereits",
      },
      {
        id: 724147813,
        label: "Nein, es muss noch beschafft werden",
      },
    ],
  },
  {
    id: 576329979,
    type: "checkbox",
    label: "Wo im Bad/WC sollen Fliesen verlegt werden ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 724147813,
    type: "checkbox",
    label: "Wo im Bad/WC sollen Fliesen verlegt werden ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 7246032159,
    type: "multibox",
    mainId: 2168682727,
    label: "Wo im Bad/WC sollen Fliesen verlegt werden ?",
    options: [
      {
        label: "Wände",
      },
      {
        label: "Boden",
      },
      {
        label: "Dusche",
      },
      {
        label: "Bad",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 2168682727,
    type: "checkbox",
    label: "Sind die Platten schon da ?",
    options: [
      {
        id: 576329979,
        label: "Ja, es existiert bereits",
      },
      {
        id: 724147813,
        label: "Nein, es muss noch beschafft werden",
      },
    ],
  },
  {
    id: 576329979,
    type: "checkbox",
    label: "Wo im Bad/WC sollen Fliesen verlegt werden ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 724147813,
    type: "checkbox",
    label: "Wo im Bad/WC sollen Fliesen verlegt werden ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 1241477312,
    type: "multibox",
    mainId: 2168682727,
    label: "Wo im Bad/WC sollen Fliesen verlegt werden ?",
    options: [
      {
        label: "Wände",
      },
      {
        label: "Boden",
      },
      {
        label: "Dusche",
      },
      {
        label: "Bad",
      },
      {
        label: "Andere",
      },
    ],
  },
  {
    id: 2168682727,
    type: "checkbox",
    label: "Sind die Platten schon da ?",
    options: [
      {
        id: 576329979,
        label: "Ja, es existiert bereits",
      },
      {
        id: 724147813,
        label: "Nein, es muss noch beschafft werden",
      },
    ],
  },
  {
    id: 576329979,
    type: "checkbox",
    label: "Wo im Bad/WC sollen Fliesen verlegt werden ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 724147813,
    type: "checkbox",
    label: "Wo im Bad/WC sollen Fliesen verlegt werden ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 1181416948,
    type: "checkbox",
    label: "Sind die Platten schon da ?",
    options: [
      {
        id: 576329979,
        label: "Ja, es existiert bereits",
      },
      {
        id: 724147813,
        label: "Nein, es muss noch beschafft werden",
      },
    ],
  },
  {
    id: 576329979,
    type: "checkbox",
    label: "Wo im Bad/WC sollen Fliesen verlegt werden ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 724147813,
    type: "checkbox",
    label: "Wo im Bad/WC sollen Fliesen verlegt werden ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 7728965234,
    type: "checkbox",
    label: "Sind die Platten schon da ?",
    options: [
      {
        id: 576329979,
        label: "Ja, es existiert bereits",
      },
      {
        id: 724147813,
        label: "Nein, es muss noch beschafft werden",
      },
    ],
  },
  {
    id: 576329979,
    type: "checkbox",
    label: "Wo im Bad/WC sollen Fliesen verlegt werden ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 724147813,
    type: "checkbox",
    label: "Wo im Bad/WC sollen Fliesen verlegt werden ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 8531777232,
    type: "checkbox",
    label: "Sind die Platten schon da ?",
    options: [
      {
        id: 576329979,
        label: "Ja, es existiert bereits",
      },
      {
        id: 724147813,
        label: "Nein, es muss noch beschafft werden",
      },
    ],
  },
  {
    id: 576329979,
    type: "checkbox",
    label: "Wo im Bad/WC sollen Fliesen verlegt werden ?",
    options: approximately_how_the_affected_area,
  },
  {
    id: 724147813,
    type: "checkbox",
    label: "Wo im Bad/WC sollen Fliesen verlegt werden ?",
    options: approximately_how_the_affected_area,
  },
];

export default slabs;
