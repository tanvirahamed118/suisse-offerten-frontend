import {
  approximately_how_many_meters_fence,
  approximately_how_many_meters_of_fence_is,
  how_many_need_be_installed,
  is_gate_be_installed_already,
} from "../../reuse-data";

const fencesGates = [
  {
    id: 1038904777,
    type: "checkbox",
    label: "Welche Art von Zaunarbeiten sind erforderlich ?",
    options: [
      {
        id: 1234897135,
        label: "Zaun installieren",
      },
      {
        id: 1235282252,
        label: "Nur Tor einbauen",
      },
      {
        id: 1235520413,
        label: "Zaun und Tor montieren",
      },
      {
        id: 1237070168,
        label: "reparieren",
      },
      {
        id: 1237463511,
        label: "Andere",
      },
    ],
  },

  {
    id: 1234897135,
    type: "checkbox",
    label: "Wie viele Meter Zaun sind es ungefähr ?",
    options: approximately_how_many_meters_of_fence_is,
  },
  {
    id: 1235282252,
    type: "checkbox",
    label: "Wie viele Tore müssen installiert werden ?",
    options: how_many_need_be_installed(1237726799, 1237796874, 1238462396),
  },
  {
    id: 1237726799,
    type: "checkbox",
    label: "Ist das Tor dort bereits zu montieren ?",
    options: is_gate_be_installed_already,
  },
  {
    id: 1237796874,
    type: "checkbox",
    label: "Ist das Tor dort bereits zu montieren ?",
    options: is_gate_be_installed_already,
  },
  {
    id: 1238462396,
    type: "checkbox",
    label: "Ist das Tor dort bereits zu montieren ?",
    options: is_gate_be_installed_already,
  },

  {
    id: 1235520413,
    type: "checkbox",
    label: "Wie viele Tore müssen ungefähr installiert werden ?",
    options: approximately_how_many_meters_fence,
  },
];

export default fencesGates;
