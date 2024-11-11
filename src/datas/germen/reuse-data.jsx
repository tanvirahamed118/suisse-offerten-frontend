export const what_work_needs_done = [
  {
    label: "den Rasen mähen",
  },
  {
    label: "Reinigung der Terrasse",
  },
  {
    label: "Unkraut jäten",
  },
  {
    label: "Bäume/Sträucher beschneiden",
  },
  {
    label: "Pflanzen entfernen/pflanzen",
  },
  {
    label: "Den Garten aufräumen",
  },
  {
    label: "Andere",
  },
];

export const how_big_the_tree_one = [
  {
    label: "Klein",
    des: "Bis zu 3 m²",
    credit: 5,
  },
  {
    label: "Medium",
    des: "4 bis 7 m²",
    credit: 10,
  },
  {
    label: "Groß",
    des: "8 m or more",
    credit: 15,
  },
];
export const How_large_is_to_be_covered = [
  {
    label: "Klein",
    credit: 5,
  },
  {
    label: "Medium",
    credit: 13,
  },
  {
    label: "Groß",
    credit: 13,
  },
  {
    label: "Sehr groß",
    credit: 20,
  },
];

export const how_big_the_tree_tow = [
  {
    label: "Klein",
    des: "Bis zu 14 m²",
    credit: 10,
  },
  {
    label: "Medium",
    des: "15 bis 29 m²",
    credit: 15,
  },
  {
    label: "Groß",
    des: "30 bis 59 m²",
    credit: 20,
  },
  {
    label: "Sehr groß",
    des: "60 m² oder mehr",
    credit: 25,
  },
];

export const approximately_how_many_meters_fence = [
  {
    label: "Bis zu 9 m²",
    credit: 5,
  },
  {
    label: "10 Busse 24 m²",
    credit: 10,
  },
  {
    label: "25 bis 34 m²",
    credit: 15,
  },
  {
    label: "35 m² oder mehr",
    credit: 20,
  },
];
export const approximately_how_many_meters_of_fence_is = [
  {
    label: "Bis zu 9 m²",
    credit: 8,
  },
  {
    label: "10 Busse 24 m²",
    credit: 15,
  },
  {
    label: "25 bis 34 m²",
    credit: 25,
  },
  {
    label: "35 m² oder mehr",
    credit: 35,
  },
];
export const approximately_how_many_meters_fence_is_it = [
  {
    label: "Bis zu 9 m²",
    credit: 8,
  },
  {
    label: "10 Busse 24 m²",
    credit: 13,
  },
  {
    label: "25 bis 34 m²",
    credit: 18,
  },
  {
    label: "35 m² oder mehr",
    credit: 25,
  },
];
export const How_big_is_total_approximately = [
  {
    label: "Bis zu 9 m²",
    credit: 10,
  },
  {
    label: "10 bis 19 m²",
    credit: 20,
  },
  {
    label: "20 bis 39 m²",
    credit: 30,
  },
  {
    label: "40 oder mehr m²",
    credit: 50,
  },
  {
    label: "Ich weiß es nicht",
    credit: 8,
  },
];

export const is_gate_be_installed_already = [
  {
    label: "Ja, das Tor ist da",
  },
  {
    label: "Nein, das Tor muss noch gekauft werden",
  },
];

export const how_large_garden_designed = [
  {
    label: "Klein",
    des: "Bis zu 99 m²",
    credit: 15,
  },
  {
    label: "Medium",
    des: "100 bis 199 m²",
    credit: 20,
  },
  {
    label: "Groß",
    des: "200 bis 399 m²",
    credit: 25,
  },
  {
    label: "Sehr groß",
    des: "400 m² oder mehr",
    credit: 35,
  },
];

export const what_does_service_require = [
  {
    label: "Vorhof",
  },
  {
    label: "Stellplatz / Parkplatz",
  },
  {
    label: "Eingang",
  },
  {
    label: "Gartenweg",
  },
  {
    label: "Terrasse",
  },
  {
    label: "Öffentliche Straße",
  },
  {
    label: "Privatstraße",
  },
  {
    label: "Andere",
  },
];

export const how_do_garage_door = [
  {
    label: "Ja, es existiert bereits",
  },
  {
    label: "Nein, es muss noch beschafft werden",
  },
];
export const have_you_already_heating_system = [
  {
    label: "Ja, ich habe es bereits erhalten",
  },
  {
    label: "Nein, es muss noch beschafft werden.",
  },
];

export const how_trees_are_here = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "1",
      credit: 2,
    },
    {
      id: id2,
      label: "2",
      credit: 4,
    },
    {
      id: id3,
      label: "3",
      credit: 6,
    },
    {
      id: id4,
      label: "4 oder mehr",
      credit: 8,
    },
  ];
};

export const input = (id) => {
  return {
    id: id,
    type: "Eingang",
  };
};

export const how_many_garage_doors = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "1",
      credit: 8,
    },
    {
      id: id2,
      label: "2 - 3",
      credit: 20,
    },
    {
      id: id3,
      label: "4 - 5",
      credit: 30,
    },
    {
      id: id4,
      label: "6 oder mehr",
      credit: 40,
    },
  ];
};

export const what_type_garage_door_it = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Rollladen",
      des: "Garagentor rollt über die Öffnung",
    },
    {
      id: id2,
      label: "Schwingtor",
      des: "Garagentor gleitet nach oben und bleibt gerade",
    },
    {
      id: id3,
      label: "(Seiten-)Sektionaltor",
      des: "Das Garagentor rollt nach oben oder seitwärts um die Ecke, steht aber gerade, wenn es vollständig geöffnet ist",
    },
    {
      id: id4,
      label: "Schwingtor",
      des: "Garagentor öffnet sich wie eine normale Tür",
    },
    {
      id: id5,
      label: "Andere",
    },
  ];
};

export const how_do_you_the_garage_door = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Nur elektrisch",
    },
    {
      id: id2,
      label: "Nur von Hand",
    },
    {
      id: id3,
      label: "Elektrisch und manuell",
    },
  ];
};
export const kit_already_available_carport = (id1, id2) => {
  return [
    {
      id: id1,
      label: "Ja",
    },
    {
      id: id2,
      label: "Nein, es muss noch beschafft werden",
    },
  ];
};

export const questionCheckboxItem = (id1, id2) => {
  return [
    {
      id: id1,
      label: "Ja",
    },
    {
      id: id2,
      label: "NEIN",
    },
  ];
};

export const how_many_need_be_installed = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "1",
      credit: 5,
    },
    {
      id: id2,
      label: "2",
      credit: 10,
    },
    {
      id: id3,
      label: "3 oder mehr",
      credit: 18,
    },
  ];
};

export const does_the_subsurface_need_prepared = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Ja",
    },
    {
      id: id2,
      label: "NEIN",
    },
    {
      id: id3,
      label: "Weiß nicht / brauche Rat",
    },
  ];
};
export const what_performance_you_exactly_need = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Zusammenbau eines Fertigbausatzes (z.B. aus dem Baumarkt)",
      credit: 25,
    },
    {
      id: id2,
      label: "Kundenspezifische Erstellung",
      credit: 35,
    },
    {
      id: id3,
      label: "Weiß nicht / brauche Rat",
      credit: 20,
    },
  ];
};
export const is_the_kit_available = (id1, id2) => {
  return [
    {
      id: id1,
      label: "Ja",
    },
    {
      id: id2,
      label: "Nein, es muss noch beschafft werden",
    },
  ];
};
export const where_should_carport_be_located = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Freistehend",
    },
    {
      id: id2,
      label: "Im Haus",
    },
    {
      id: id3,
      label: "In der Garage",
    },
  ];
};
export const what_kind_roof_shape_you_want = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "Satteldach",
    },
    {
      id: id2,
      label: "Flachdach",
    },
    {
      id: id3,
      label: "Pultdach",
    },
    {
      id: id4,
      label: "Andere",
    },
  ];
};
export const do_you_need_additional_carport = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Stauraum",
    },
    {
      id: id2,
      label: "Photovoltaikanlage",
    },
    {
      id: id3,
      label: "Gründach",
    },
    {
      id: id4,
      label: "Andere",
    },
    {
      id: id5,
      label: "Nein, brauche nur den Carport",
    },
  ];
};
export const does_a_building_permit_submitted = [
  {
    label: "Ja",
  },
  {
    label: "NEIN",
  },
  {
    label: "Weiß nicht / brauche Rat",
  },
];

export const what_excavation_you_need = [
  {
    label: "Aushubarbeiten für einen Pool",
  },
  {
    label: "Aushubarbeiten für ein weiteres Bauwerk",
  },
  {
    label: "Entsorgung von Aushub",
  },
  {
    label: "Andere",
  },
];

export const what_type_want_to_install = (id1, id2, id3, id4, id5, id6) => {
  return [
    {
      id: id1,
      label: "Flachdach",
    },
    {
      id: id2,
      label: "Satteldach",
    },
    {
      id: id3,
      label: "Hipped roof",
    },
    {
      id: id4,
      label: "Mansard roof",
    },
    {
      id: id5,
      label: "Pultdach",
    },
    {
      id: id6,
      label: "Ich bin mir nicht sicher",
    },
  ];
};
export const what_type_do_you_need = (id1, id2, id3, id4, id5, id6) => {
  return [
    {
      id: id1,
      label: "Allgemeine Dachinspektion",
      credit: 10,
    },
    {
      id: id2,
      label: "Kleiner Fleck (ein oder mehrere Steine)",
      credit: 8,
    },
    {
      id: id3,
      label: "kleinerer Teil des Daches (oder Kleindach)",
      credit: 8,
    },
    {
      id: id4,
      label: "größerer Teil des Daches",
      credit: 20,
    },
    {
      id: id5,
      label: "ganzes Dach",
      credit: 30,
    },
    {
      id: id6,
      label: "Andere",
      credit: 10,
    },
  ];
};

export const where_do_you_replace_the_roof = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Ganzes Haus",
    },
    {
      id: id2,
      label: "Garage, Anbau oder anderer Hausteil",
    },
    {
      id: id3,
      label: "Veranda or outbuilding",
    },
  ];
};
export const what_performance_you_exactly_need_carport = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Montage eines Carport Fertigbausatzes",
    },
    {
      id: id2,
      label: "Bau eines neuen Carports nach Maß",
    },
    {
      id: id3,
      label: "Weiß nicht / brauche Rat",
    },
  ];
};
export const what_material_be_made_of = [
  {
    label: "Ziegel",
  },
  {
    label: "Betondachziegel",
  },
  {
    label: "Faserzement",
  },
  {
    label: "Metallverkleidung",
  },
  {
    label: "Schiefer",
  },
  {
    label: "Bitumen",
  },
  {
    label: "Plastik",
  },
  {
    label: "Andere, oder Ich bin mir nicht sicher",
  },
];

export const how_many_sides_the_building_should = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "1",
      credit: 10,
    },
    {
      id: id2,
      label: "2",
      credit: 15,
    },
    {
      id: id3,
      label: "3",
      credit: 20,
    },
    {
      id: id4,
      label: "Ringsum",
      credit: 30,
    },
  ];
};
export const how_many_sides_the_building_should_2 = (
  id1,
  id2,
  id3,
  id4,
  id5
) => {
  return [
    {
      id: id1,
      label: "1",
      credit: 10,
    },
    {
      id: id2,
      label: "2",
      credit: 15,
    },
    {
      id: id3,
      label: "3",
      credit: 20,
    },
    {
      id: id4,
      label: "4",
      credit: 25,
    },
    {
      id: id5,
      label: "Ringsum",
      credit: 30,
    },
  ];
};
export const How_many_the_building_have = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "1",
    },
    {
      id: id2,
      label: "2",
    },
    {
      id: id3,
      label: "3",
    },
    {
      id: id4,
      label: "4",
    },
    {
      id: id5,
      label: "5 oder mehr",
    },
  ];
};
export const how_long_scaffolding_needed = [
  {
    label: "1 Woche",
  },
  {
    label: "2 Wochen",
  },
  {
    label: "3 - 4 Wochen",
  },
  {
    label: "1 - 2 Monate",
  },
  {
    label: "3 Monate oder länger",
  },
];
export const in_how_floor_insulated = [
  {
    label: "1 bis 2 Zimmer",
    credit: 8,
  },
  {
    label: "3 bis 4 Zimmer",
    credit: 15,
  },
  {
    label: "5 oder mehr Zimmer",
    credit: 20,
  },
];

export const how_large_is_approximately = [
  {
    des: "Z.B. Teil einer Wand etc.",
    label: "Klein",
    credit: 4,
  },
  {
    des: "Z. B. ganze Wand, Raum, Boden usw.",
    label: "Medium",
    credit: 10,
  },
  {
    des: "Z.B. Garage, Anbau, Keller, Wohnung etc.",
    label: "Groß",
    credit: 25,
  },
  {
    des: "Z.B. Ganze Häuser usw.",
    label: "Sehr groß",
    credit: 40,
  },
];
export const how_big_is_approximately = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      des: "Bis zu 4 m²",
      label: "Klein",
      credit: 3,
    },
    {
      id: id2,
      des: "5 bis 9 m²",
      label: "Medium",
      credit: 8,
    },
    {
      id: id3,
      des: "10 Busse 24 m²",
      label: "Groß",
      credit: 15,
    },
    {
      id: id4,
      des: "25 m² oder mehr",
      label: "Sehr groß",
      credit: 25,
    },
  ];
};
export const how_big_is_metal_structure_approximately = (
  id1,
  id2,
  id3,
  id4
) => {
  return [
    {
      id: id1,
      des: "Bis zu 4 m²",
      label: "Klein",
      credit: 6,
    },
    {
      id: id2,
      des: "5 bis 9 m²",
      label: "Medium",
      credit: 15,
    },
    {
      id: id3,
      des: "10 Busse 24 m²",
      label: "Groß",
      credit: 20,
    },
    {
      id: id4,
      des: "25 m² oder mehr",
      label: "Sehr groß",
      credit: 30,
    },
  ];
};
export const is_the_required_available = [
  {
    label: "Ja, es existiert bereits",
  },
  {
    label: "Nein, es muss noch beschafft werden",
  },
];
export const how_many_goals = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "Ein Klein-Tor",
      credit: 6,
    },
    {
      id: id2,
      label: "Ein normales Tor",
      credit: 15,
    },
    {
      id: id3,
      label: "2 bis 3 Tore",
      credit: 25,
    },
    {
      id: id4,
      label: "4 Tore oder mehr",
      credit: 30,
    },
  ];
};
export const how_many_blinds_shutters = [
  {
    label: "1",
    credit: 5,
  },
  {
    label: "2 bis 3",
    credit: 10,
  },
  {
    label: "4 oder mehr",
    credit: 20,
  },
];
export const what_type_blinds_are_they = [
  {
    label: "Markisen / Sonnenschutz aus Stoff",
  },
  {
    label: "Jalousien / Rollläden (innen)",
  },
  {
    label: "Jalousien / Rollläden (außen)",
  },
  {
    label: "Fensterladen (außen)",
  },
  {
    label: "Andere",
  },
];
export const what_is_the_order = [
  {
    label: "Bis zu 4 m²",
    credit: 5,
  },
  {
    label: "5 bis 14 m²",
    credit: 10,
  },
  {
    label: "15 bis 24 m²",
    credit: 15,
  },
  {
    label: "25 m² oder mehr",
    credit: 20,
  },
];

export const how_many_be_cleaned = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "1 bis 2",
      credit: 3,
    },
    {
      id: id2,
      label: "3 bis 4",
      credit: 6,
    },
    {
      id: id3,
      label: "5 bis 9",
      credit: 12,
    },
    {
      id: id4,
      label: "10 oder mehr",
      credit: 15,
    },
  ];
};
export const ppproximately_how_big_is_covered_clad = [
  {
    des: "Z.B. Briefkasten etc.",
    label: "Klein",
    credit: 3,
  },
  {
    des: "Z.B. Fahrradunterstand, Überdachung etc.",
    label: "Medium",
    credit: 10,
  },
  {
    des: "Z.B. Hausteil, Schuppen etc.",
    label: "Groß",
    credit: 25,
  },
  {
    des: "Z.B. Ganze Häuser usw.",
    label: "Sehr groß",
    credit: 35,
  },
];
export const what_shape_is_the_roof = (id1, id2, id3, id4, id5, id6) => {
  return [
    {
      id: id1,
      label: "Satteldach",
    },
    {
      id: id2,
      label: "Flachdach",
    },
    {
      id: id3,
      label: "Hipped roof",
    },
    {
      id: id4,
      label: "Pultdach",
    },
    {
      id: id5,
      label: "Andere",
    },
    {
      id: id6,
      label: "Ich weiß es nicht",
    },
  ];
};
export const what_material_roof_made_of = (
  id1,
  id2,
  id3,
  id4,
  id5,
  id6,
  id7
) => {
  return [
    {
      id: id1,
      label: "Clay bricks",
    },
    {
      id: id2,
      label: "bitumen",
    },
    {
      id: id3,
      label: "Fibre cement",
    },
    {
      id: id4,
      label: "plastic",
    },
    {
      id: id5,
      label: "Metal covering",
    },
    {
      id: id6,
      label: "Andere",
    },
    {
      id: id7,
      label: "Ich weiß es nicht",
    },
  ];
};
export const can_you_access_inside = [
  {
    label: "Ja",
  },
  {
    label: "NEIN",
  },
  {
    label: "Ich weiß es nicht",
  },
];
export const what_kind_glass_it = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "Doppelverglasung",
    },
    {
      id: id2,
      label: "Dreifachverglasung",
    },
    {
      id: id3,
      label: "Ich weiß es nicht",
    },
    {
      id: id4,
      label: "Andere glazing",
    },
  ];
};
export const what_kind_glass_is_it = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Doppelverglasung",
    },
    {
      id: id2,
      label: "Dreifachverglasung",
    },
    {
      id: id3,
      label: "Andere glazing",
    },
  ];
};
export const how_extensive_order_approximately = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      des: "Z.B. Kamin, Spielhaus, etc.",
      label: "Klein",
      credit: 5,
    },
    {
      id: id2,
      des: "Z. B. Küche, Bad, Öltank usw.",
      label: "Medium",
      credit: 10,
    },
    {
      id: id3,
      des: "Z.B. Garage, Anbau, Wohnung etc.",
      label: "Groß",
      credit: 25,
    },
    {
      id: id4,
      des: "Z.B. Ganzes Haus, mehrere Grundstücke usw.",
      label: "Sehr groß",
      credit: 35,
    },
  ];
};
export const how_many_bedrooms_are_affected = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "0",
    },
    {
      id: id2,
      label: "1",
    },
    {
      id: id3,
      label: "2",
    },
    {
      id: id4,
      label: "3",
    },
    {
      id: id5,
      label: "4 oder mehr",
    },
  ];
};
export const how_much_surrounding_area = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "NEIN",
    },
    {
      id: id2,
      label: "Bis zu 14 m²",
    },
    {
      id: id3,
      label: "15 bis 99 m²",
    },
    {
      id: id4,
      label: "100 bis 249 m²",
    },
    {
      id: id5,
      label: "250 m² oder mehr",
    },
  ];
};
export const approximately_how_much_budget_for_this_project = (
  id1,
  id2,
  id3,
  id4
) => {
  return [
    {
      id: id1,
      label: "Bis CHF 10'000",
      credit: 40,
    },
    {
      id: id2,
      label: "CHF 10'000 bis 100'000",
      credit: 60,
    },
    {
      id: id3,
      label: "CHF 100'000 bis 300'000",
      credit: 90,
    },
    {
      id: id4,
      label: "CHF 300'000 oder mehr",
      credit: 120,
    },
  ];
};
export const have_you_already_contacted = [
  {
    label: "Ja, der Bauantrag ist bereits eingereicht",
  },
  {
    label: "Ja, aber der Bauantrag muss noch eingereicht werden",
  },
  {
    label: "Ja, aber für dieses Projekt ist keine Baugenehmigung erforderlich",
  },
  {
    label: "Nein, ich muss mich noch an die zuständige Gemeinde wenden",
  },
  {
    label:
      "Nein, ich weiß mit Sicherheit, dass für dieses Projekt keine Baugenehmigung erforderlich ist",
  },
];
export const approximately_how_be_painted = (id1, id2, id3, id4, id5, id6) => {
  return [
    {
      id: id1,
      label: "Nur ein kleinerer Bereich",
      credit: 5,
    },
    {
      id: id2,
      label: "Bis zu 5 Wände / Decken",
      credit: 15,
    },
    {
      id: id3,
      label: "6 bis 10 Wände / Decken",
      credit: 25,
    },
    {
      id: id4,
      label: "11 bis 20 Wände / Decken",
      credit: 35,
    },
    {
      id: id5,
      label: "21 bis 30 Wände / Decken",
      credit: 45,
    },
    {
      id: id6,
      label: "31 oder mehr Wände / Decken",
      credit: 55,
    },
  ];
};
export const how_much_facade_should_be_painted = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Nur ein kleinerer Bereich",
      credit: 5,
    },
    {
      id: id2,
      label: "Bis zu einer Seite",
      credit: 10,
    },
    {
      id: id3,
      label: "2 bis 3 Seiten",
      credit: 20,
    },
    {
      id: id4,
      label: "Ein ganzes Einfamilienhaus",
      credit: 45,
    },
    {
      id: id5,
      label: "Ein ganzes Mehrfamilienhaus",
      credit: 65,
    },
  ];
};
export const how_windows_doors_be_painted = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Ein Fenster / eine Tür",
      credit: 5,
    },
    {
      id: id2,
      label: "2 bis 5 Fenster / Türen",
      credit: 15,
    },
    {
      id: id3,
      label: "6 oder mehr windows / doors",
      credit: 25,
    },
  ];
};
export const how_many_sides_roof_painted = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Auf einer Seite des Daches",
      credit: 10,
    },
    {
      id: id2,
      label: "Auf 2 bis 3 Seiten des Daches",
      credit: 30,
    },
    {
      id: id3,
      label: "Auf allen Seiten des Daches",
      credit: 50,
    },
  ];
};
export const what_type_should_be_laid = (id1, id2, id3, id4, id5, id6, id7) => {
  return [
    {
      id: id1,
      label: "Parkett",
    },
    {
      id: id2,
      label: "Laminieren",
    },
    {
      id: id3,
      label: "Vinyl / Linoleum",
    },
    {
      id: id4,
      label: "Teppich",
    },
    {
      id: id5,
      label: "aus PVC",
    },
    {
      id: id6,
      label: "Massivholz",
    },
    {
      id: id7,
      label: "Andere",
      credit: 5,
    },
  ];
};
export const in_how_many_work_done = (id1, id2, id3, id4, id5, id6) => {
  return [
    {
      id: id1,
      label: "1 Zimmer",
      credit: 8,
    },
    {
      id: id2,
      label: "2 Zimmer",
      credit: 16,
    },
    {
      id: id3,
      label: "3 Zimmer",
      credit: 24,
    },
    {
      id: id4,
      label: "4 Zimmer",
      credit: 30,
    },
    {
      id: id5,
      label: "5 oder mehr rooms",
      credit: 40,
    },
    {
      id: id6,
      label: "Es handelt sich um eine Gewerbeimmobilie",
      credit: 50,
    },
  ];
};
export const what_maintenance_work_is_required = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Schleifen & Versiegeln",
    },
    {
      id: id2,
      label: "Schleifen und Ölen",
    },
    {
      id: id3,
      label: "Reinigen & Ölen",
    },
    {
      id: id4,
      label: "Pflegeöl auftragen",
    },
    {
      id: id5,
      label: "Andere",
    },
  ];
};
export const is_the_flooring_already_in_place = (id1, id2) => {
  return [
    {
      id: id1,
      label: "Ja, existiert bereits.",
    },
    {
      id: id2,
      label: "Nein, muss noch beschafft werden.",
    },
  ];
};
export const is_the_window_already_in_place = [
  {
    label: "Ja, Fenster vorhanden",
  },
  {
    label: "Nein, muss noch beschafft werden.",
  },
];

export const how_many_installed_replaced = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "1 bis 2",
      credit: 4,
    },
    {
      id: id2,
      label: "3 to 5",
      credit: 8,
    },
    {
      id: id3,
      label: "6 to 9",
      credit: 15,
    },
    {
      id: id4,
      label: "10 oder mehr",
      credit: 35,
    },
  ];
};
export const what_material_installed_made_of = (
  id1,
  id2,
  id3,
  id4,
  id5,
  id6,
  id7,
  id8
) => {
  return [
    {
      id: id1,
      label: "Doppelverglasung",
    },
    {
      id: id2,
      label: "Dreifachverglasung",
    },
    {
      id: id3,
      label: "Andere glass",
    },
    {
      id: id4,
      label: "Holz",
    },
    {
      id: id5,
      label: "plastic",
    },
    {
      id: id6,
      label: "Masonry/Concrete",
    },
    {
      id: id7,
      label: "Ich weiß es nicht",
    },
    {
      id: id8,
      label: "Andere",
    },
  ];
};
export const what_kind_of_glass_is_it = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "Doppelverglasung",
    },
    {
      id: id2,
      label: "Dreifachverglasung",
    },
    {
      id: id3,
      label: "Ich weiß es nicht",
    },
    {
      id: id4,
      label: "Andere",
    },
  ];
};
export const what_material_frame_made_of = [
  {
    label: "Holz",
  },
  {
    label: "plastic",
  },
  {
    label: "metal",
  },
  {
    label: "Wood/Metal",
  },
  {
    label: "Plastic/Metal",
  },
  {
    label: "Ich weiß es nicht",
  },
  {
    label: "Andere",
  },
];
export const approximately_how_the_affected_area = [
  {
    label: "Up to 2 m²",
    credit: 4,
  },
  {
    label: "3 to 14 m²",
    credit: 9,
  },
  {
    label: "15 to 30 m²",
    credit: 14,
  },
  {
    label: "31 to 50 m²",
    credit: 20,
  },
  {
    label: "51 or more m²",
    credit: 25,
  },
  {
    label: "Ich weiß es nicht",
    credit: 8,
  },
];
export const how_manyshuttersare_there = [
  {
    label: "1",
    credit: 6,
  },
  {
    label: "2 bis 3",
    credit: 15,
  },
  {
    label: "4 oder mehr",
    credit: 25,
  },
];
export const what_performance_do_you_exactly_need = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Assembly of a prefabricated kit",
      credit: 15,
    },
    {
      id: id2,
      label: "Kundenspezifische Erstellung",
      credit: 25,
    },
    {
      id: id3,
      label: "Weiß nicht / brauche Rat",
      credit: 7,
    },
  ];
};

export const how_big_is_area_approximately = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Bis zu 14 m²",
      credit: 8,
    },
    {
      id: id2,
      label: "15 bis 29 m²",
      credit: 15,
    },
    {
      id: id3,
      label: "30 bis 59 m²",
      credit: 25,
    },
    {
      id: id4,
      label: "60 or more m²",
      credit: 35,
    },
    {
      id: id5,
      label: "Ich weiß es nicht",
      credit: 5,
    },
  ];
};
export const what_do_use_for_heating = (
  id1,
  id2,
  id3,
  id4,
  id5,
  id6,
  id7,
  id8
) => {
  return [
    {
      id: id1,
      label: "oil",
    },
    {
      id: id2,
      label: "gas",
    },
    {
      id: id3,
      label: "Heat pump (ground probe)",
    },
    {
      id: id4,
      label: "Heat pump (air / water)",
    },
    {
      id: id5,
      label: "Electric",
    },
    {
      id: id6,
      label: "Holz",
    },
    {
      id: id7,
      label: "Ich weiß es nicht",
    },
    {
      id: id8,
      label: "Andere",
    },
  ];
};
export const what_do_you_the_water = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Electric boiler",
    },
    {
      id: id2,
      label: "Water pumps boiler",
    },
    {
      id: id3,
      label: "Instantaneous water heater",
    },
    {
      id: id4,
      label: "Andere",
    },
    {
      id: id5,
      label: "Ich weiß es nicht",
    },
  ];
};
export const what_system_distribute_the_heat = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Heizkörper / Heizung",
    },
    {
      id: id2,
      label: "Fußbodenheizung",
    },
    {
      id: id3,
      label: "Beide",
    },
    {
      id: id4,
      label: "Andere",
    },
    {
      id: id5,
      label: "Ich weiß es nicht",
    },
  ];
};
export const how_far_the_transport = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Innerhalb der Gemeinschaft",
    },
    {
      id: id2,
      label: "Innerhalb des Kantons",
    },
    {
      id: id3,
      label: "Innerhalb der Schweiz",
    },
    {
      id: id4,
      label: "Innerhalb Europas",
    },
    {
      id: id5,
      label: "Außerhalb Europas",
    },
  ];
};
export const approximately_how_big_affected_structure = [
  {
    label: "Klein",
    des: "Z.B. ein Zimmer, Gartenhaus etc.",
    credit: 15,
  },
  {
    label: "Medium",
    des: "Z. B. eine Etage, eine Wohnung usw.",
    credit: 25,
  },
  {
    label: "Groß",
    des: "Z.B. ein Einfamilienhaus etc.",
    credit: 35,
  },
  {
    label: "Sehr groß",
    des: "Z.B. mehrere Einfamilienhäuser, ein Mehrfamilienhaus, etc.",
    credit: 50,
  },
];
