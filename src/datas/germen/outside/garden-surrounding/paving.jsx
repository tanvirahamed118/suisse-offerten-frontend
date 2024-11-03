import { what_does_service_require } from "../../reuse-data";

const paving = [
  {
    id: 1036081080,
    type: "multibox",
    label: "Was erfordert ein Dienst ?",
    mainId: 817529946,
    options: what_does_service_require,
  },
  {
    id: 817529946,
    type: "multibox",
    mainId: 957329759,
    label: "Was sollte getan werden ?",
    options: [
      { label: "Neubespannung / Reparatur des Belages" },
      { label: "Komplett neu aufbauen" },
      { label: "Expandieren" },
      { label: "Begradigen" },
      { label: "Andere" },
    ],
  },
  {
    id: 957329759,
    type: "checkbox",
    label: "Müssen Sie Ihre Baumaterialien selbst mitbringen ?",
    options: [
      {
        id: 2551518717,
        label: "Ja",
      },
      {
        id: 6433374171,
        label: "NEIN",
      },
      {
        id: 5112314975,
        label: "Ich weiß es nicht",
      },
    ],
  },
  {
    id: 2551518717,
    type: "checkbox",
    label: "Wie groß ist die gewünschte Abschlussfläche ungefähr ?",
    options: [
      {
        des: "Bis zu 14 m2",
        label: "Klein",
        credit: 8,
      },
      {
        des: "15 bis 99 m2",
        label: "Medium",
        credit: 13,
      },
      {
        des: "100 bis 249 m2",
        label: "Groß",
        credit: 18,
      },
      {
        des: "250 m2 und mehr",
        label: "Very Groß",
        credit: 25,
      },
    ],
  },
  {
    id: 6433374171,
    type: "checkbox",
    label: "Wie groß ist die gewünschte Abschlussfläche ungefähr ?",
    options: [
      {
        des: "Bis zu 14 m2",
        label: "Klein",
        credit: 8,
      },
      {
        des: "15 bis 99 m2",
        label: "Medium",
        credit: 13,
      },
      {
        des: "100 bis 249 m2",
        label: "Groß",
        credit: 18,
      },
      {
        des: "250 m2 und mehr",
        label: "Very Groß",
        credit: 25,
      },
    ],
  },
  {
    id: 5112314975,
    type: "checkbox",
    label: "Wie groß ist die gewünschte Abschlussfläche ungefähr ?",
    options: [
      {
        des: "Bis zu 14 m2",
        label: "Klein",
        credit: 8,
      },
      {
        des: "15 bis 99 m2",
        label: "Medium",
        credit: 13,
      },
      {
        des: "100 bis 249 m2",
        label: "Groß",
        credit: 18,
      },
      {
        des: "250 m2 und mehr",
        label: "Very Groß",
        credit: 25,
      },
    ],
  },
];

export default paving;
