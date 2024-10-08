export const what_work_needs_done = [
  {
    label: "mow the lawn",
  },
  {
    label: "Cleaning the terrace",
  },
  {
    label: "Weeding",
  },
  {
    label: "Pruning trees/shrubs",
  },
  {
    label: "Remove/plant plants",
  },
  {
    label: "Cleaning up the garden",
  },
  {
    label: "Other",
  },
];

export const how_big_the_tree_one = [
  {
    label: "Small",
    des: "Up to 3 m",
  },
  {
    label: "Medium",
    des: "4 to 7 m",
  },
  {
    label: "Large",
    des: "8 m or more",
  },
];

export const how_big_the_tree_tow = [
  {
    label: "Small",
    des: "Up to 14 m²",
  },
  {
    label: "Medium",
    des: "15 to 29 m²",
  },
  {
    label: "Large",
    des: "30 to 59 m²",
  },
  {
    label: "Very large",
    des: "60 m² or more",
  },
];

export const approximately_how_many_meters_fence = [
  {
    label: "Up to 9 m",
  },
  {
    label: "10 to 24 m",
  },
  {
    label: "25 to 34 m",
  },
  {
    label: "35 m or more",
  },
];
export const How_big_is_total_approximately = [
  {
    label: "Up to 9 m²",
  },
  {
    label: "10 to 19 m²",
  },
  {
    label: "20 to 39 m²",
  },
  {
    label: "40 or more m²",
  },
  {
    label: "I do not know",
  },
];

export const is_gate_be_installed_already = [
  {
    label: "Yes, the gate is there",
  },
  {
    label: "No, the gate still needs to be purchased",
  },
];

export const how_large_garden_designed = [
  {
    label: "Small",
    des: "Up to 99 m²",
  },
  {
    label: "Medium",
    des: "100 to 199 m²",
  },
  {
    label: "Large",
    des: "200 to 399 m²",
  },
  {
    label: "Very large",
    des: "400 m² or more",
  },
];

export const what_does_service_require = [
  {
    label: "Forecourt",
  },
  {
    label: "Parking space / parking space",
  },
  {
    label: "entrance",
  },
  {
    label: "Garden path",
  },
  {
    label: "terrace",
  },
  {
    label: "Public road",
  },
  {
    label: "Private road",
  },
  {
    label: "Other",
  },
];

export const how_do_garage_door = [
  {
    label: "Yes, it already exists",
  },
  {
    label: "No, it still needs to be procured",
  },
];
export const have_you_already_heating_system = [
  {
    label: "Yes, I have already obtained it.",
  },
  {
    label: "No, it still needs to be procured.",
  },
];

export const how_trees_are_here = (id1, id2, id3, id4) => {
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
      label: "4 or more",
    },
  ];
};

export const input = (id) => {
  return {
    id: id,
    type: "input",
  };
};

export const how_many_garage_doors = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "1",
    },
    {
      id: id2,
      label: "2 - 3",
    },
    {
      id: id3,
      label: "4 - 5",
    },
    {
      id: id4,
      label: "6 or more",
    },
  ];
};

export const what_type_garage_door_it = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Rolling shutter",
      des: "Garage door rolls up over the opening",
    },
    {
      id: id2,
      label: "Swing gate",
      des: "Garage door slides upwards and stays straight",
    },
    {
      id: id3,
      label: "(Side) sectional door",
      des: "Garage door rolls up or sideways around the corner, but is straight when fully opened",
    },
    {
      id: id4,
      label: "Swing gate",
      des: "Garage door opens like a normal door",
    },
    {
      id: id5,
      label: "Other",
    },
  ];
};

export const how_do_you_the_garage_door = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Only electric",
    },
    {
      id: id2,
      label: "Only by hand",
    },
    {
      id: id3,
      label: "Electric and manual",
    },
  ];
};

export const questionCheckboxItem = (id1, id2) => {
  return [
    {
      id: id1,
      label: "Yes",
    },
    {
      id: id2,
      label: "no",
    },
  ];
};

export const how_many_need_be_installed = (id1, id2, id3) => {
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
      label: "3 or more",
    },
  ];
};

export const does_the_subsurface_need_prepared = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Yes",
    },
    {
      id: id2,
      label: "No",
    },
    {
      id: id3,
      label: "Don't know / need advice",
    },
  ];
};
export const what_performance_you_exactly_need = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Assembly of a ready-made kit (e.g. from the hardware store)",
    },
    {
      id: id2,
      label: "Custom creation",
    },
    {
      id: id3,
      label: "Don't know / need advice",
    },
  ];
};
export const is_the_kit_available = (id1, id2) => {
  return [
    {
      id: id1,
      label: "Yes",
    },
    {
      id: id2,
      label: "No, it still needs to be procured",
    },
  ];
};
export const where_should_carport_be_located = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Freestanding",
    },
    {
      id: id2,
      label: "At the house",
    },
    {
      id: id3,
      label: "At the garage",
    },
  ];
};
export const what_kind_roof_shape_you_want = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "Gable roof",
    },
    {
      id: id2,
      label: "Flat roof",
    },
    {
      id: id3,
      label: "Lean-to roof",
    },
    {
      id: id4,
      label: "Other",
    },
  ];
};
export const do_you_need_additional_carport = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Storage space",
    },
    {
      id: id2,
      label: "Photovoltaic system",
    },
    {
      id: id3,
      label: "Green roof",
    },
    {
      id: id4,
      label: "Other",
    },
    {
      id: id5,
      label: "No, just need the carport",
    },
  ];
};
export const does_a_building_permit_submitted = [
  {
    label: "Yes",
  },
  {
    label: "No",
  },
  {
    label: "Don't know / need advice",
  },
];

export const what_excavation_you_need = [
  {
    label: "Excavation for a pool",
  },
  {
    label: "Excavation for another structure",
  },
  {
    label: "Disposal of excavated soil",
  },
  {
    label: "Other",
  },
];

export const what_type_want_to_install = (id1, id2, id3, id4, id5, id6) => {
  return [
    {
      id: id1,
      label: "Flat roof",
    },
    {
      id: id2,
      label: "Gable roof",
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
      label: "Lean-to roof",
    },
    {
      id: id6,
      label: "I'm not sure",
    },
  ];
};
export const what_type_do_you_need = (id1, id2, id3, id4, id5, id6) => {
  return [
    {
      id: id1,
      label: "General roof inspection",
    },
    {
      id: id2,
      label: "small spot (one or more bricks)",
    },
    {
      id: id3,
      label: "smaller part of the roof (or small roof)",
    },
    {
      id: id4,
      label: "larger part of the roof",
    },
    {
      id: id5,
      label: "whole roof",
    },
    {
      id: id6,
      label: "Other",
    },
  ];
};

export const where_do_you_replace_the_roof = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Whole house",
    },
    {
      id: id2,
      label: "Garage, extension or other part of the house",
    },
    {
      id: id3,
      label: "Veranda or outbuilding",
    },
  ];
};
export const what_material_be_made_of = [
  {
    label: "Clay bricks",
  },
  {
    label: "Concrete roof tiles",
  },
  {
    label: "Fibre cement",
  },
  {
    label: "Metal covering",
  },
  {
    label: "slate",
  },
  {
    label: "bitumen",
  },
  {
    label: "plastic",
  },
  {
    label: "Others, or I'm not sure",
  },
];

export const how_many_sides_the_building_should = (id1, id2, id3, id4) => {
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
      label: "All around",
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
      label: "5 or more",
    },
  ];
};
export const how_long_scaffolding_needed = [
  {
    label: "1 week",
  },
  {
    label: "2 weeks",
  },
  {
    label: "3 - 4 weeks",
  },
  {
    label: "1 - 2 months",
  },
  {
    label: "3 months or longer",
  },
];
export const in_how_floor_insulated = [
  {
    label: "1 to 2 rooms",
  },
  {
    label: "3 to 4 rooms",
  },
  {
    label: "5 or more rooms",
  },
];

export const how_large_is_approximately = [
  {
    des: "E.g. part of a wall etc.",
    label: "Small",
  },
  {
    des: "E.g. whole wall, room, floor etc.",
    label: "Medium",
  },
  {
    des: "E.g. garage, extension, basement, apartment etc.",
    label: "Large",
  },
  {
    des: "E.g. whole house etc.",
    label: "Very large",
  },
];
export const how_big_is_approximately = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      des: "Up to 4 m",
      label: "Small",
    },
    {
      id: id2,
      des: "5 to 9 m",
      label: "Medium",
    },
    {
      id: id3,
      des: "10 to 24 m",
      label: "Large",
    },
    {
      id: id4,
      des: "25 m or more",
      label: "Very large",
    },
  ];
};
export const is_the_required_available = [
  {
    label: "Yes, it already exists",
  },
  {
    label: "No, it still needs to be procured",
  },
];
export const how_many_goals = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "A small gate",
    },
    {
      id: id2,
      label: "A normal gate",
    },
    {
      id: id3,
      label: "2 to 3 goals",
    },
    {
      id: id4,
      label: "4 goals or more",
    },
  ];
};
export const how_many_blinds_shutters = [
  {
    label: "1",
  },
  {
    label: "2 to 3",
  },
  {
    label: "4 or more",
  },
];
export const what_type_blinds_are_they = [
  {
    label: "Awnings / sun blinds made of fabric",
  },
  {
    label: "Blinds / roller shutters (inside)",
  },
  {
    label: "Blinds / roller shutters (outside)",
  },
  {
    label: "Window shutter (outside)",
  },
  {
    label: "Other",
  },
];
export const what_is_the_order = [
  {
    label: "Up to 4 m",
  },
  {
    label: "5 to 14 m",
  },
  {
    label: "15 to 24 m",
  },
  {
    label: "25 m or more",
  },
];

export const how_many_be_cleaned = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "1 to 2",
    },
    {
      id: id2,
      label: "3 to 4",
    },
    {
      id: id3,
      label: "5 to 9",
    },
    {
      id: id4,
      label: "10 or more",
    },
  ];
};
export const ppproximately_how_big_is_covered_clad = [
  {
    des: "E.g. mailbox etc.",
    label: "Small",
  },
  {
    des: "E.g. bicycle shelter, canopy etc.",
    label: "Medium",
  },
  {
    des: "E.g. part of a house, shed etc.",
    label: "Large",
  },
  {
    des: "E.g. whole house etc.",
    label: "Very large",
  },
];
export const what_shape_is_the_roof = (id1, id2, id3, id4, id5, id6) => {
  return [
    {
      id: id1,
      label: "Gable roof",
    },
    {
      id: id2,
      label: "Flat roof",
    },
    {
      id: id3,
      label: "Hipped roof",
    },
    {
      id: id4,
      label: "Lean-to roof",
    },
    {
      id: id5,
      label: "Other",
    },
    {
      id: id6,
      label: "I do not know",
    },
  ];
};
export const what_material_roof_made_of = (id1) => {
  return [
    {
      id: id1,
      label: "Clay bricks",
    },
    {
      label: "bitumen",
    },
    {
      label: "Fibre cement",
    },
    {
      label: "plastic",
    },
    {
      label: "Metal covering",
    },
    {
      label: "Other",
    },
    {
      label: "I do not know",
    },
  ];
};
export const can_you_access_inside = [
  {
    label: "Yes",
  },
  {
    label: "No",
  },
  {
    label: "I do not know",
  },
];
export const what_kind_glass_it = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "Double glazing",
    },
    {
      id: id2,
      label: "Triple glazing",
    },
    {
      id: id3,
      label: "I do not know",
    },
    {
      id: id4,
      label: "Other glazing",
    },
  ];
};
export const what_kind_glass_is_it = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Double glazing",
    },
    {
      id: id2,
      label: "Triple glazing",
    },
    {
      id: id3,
      label: "Other glazing",
    },
  ];
};
export const how_extensive_order_approximately = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      des: "E.g. fireplace, playhouse, etc.",
      label: "Small",
    },
    {
      id: id2,
      des: "E.g. kitchen, bathroom, oil tank etc.",
      label: "Medium",
    },
    {
      id: id3,
      des: "E.g. garage, extension, apartment etc.",
      label: "Large",
    },
    {
      id: id4,
      des: "E.g. whole house, several properties, etc.",
      label: "Very large",
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
      label: "4 or more",
    },
  ];
};
export const how_much_surrounding_area = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "No",
    },
    {
      id: id2,
      label: "Up to 14 m²",
    },
    {
      id: id3,
      label: "15 to 99 m²",
    },
    {
      id: id4,
      label: "100 to 249 m²",
    },
    {
      id: id5,
      label: "250 m² or more",
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
      label: "Up to CHF 10,000",
    },
    {
      id: id2,
      label: "CHF 10,000 to 100,000",
    },
    {
      id: id3,
      label: "CHF 100,000 to 300,000",
    },
    {
      id: id4,
      label: "CHF 300,000 or more",
    },
  ];
};
export const have_you_already_contacted = [
  {
    label: "Yes, the building permit application has already been submitted",
  },
  {
    label:
      "Yes, but the building permit application still needs to be submitted",
  },
  {
    label: "Yes, but this project does not require a building permit",
  },
  {
    label: "No, I still need to contact the relevant municipality",
  },
  {
    label:
      "No, I know for sure that no building permit is required for this project",
  },
];
export const approximately_how_be_painted = (id1, id2, id3, id4, id5, id6) => {
  return [
    {
      id: id1,
      label: "Only a smaller area",
    },
    {
      id: id2,
      label: "Up to 5 walls / ceilings",
    },
    {
      id: id3,
      label: "6 to 10 walls / ceilings",
    },
    {
      id: id4,
      label: "11 to 20 walls / ceilings",
    },
    {
      id: id5,
      label: "21 to 30 walls / ceilings",
    },
    {
      id: id6,
      label: "31 or more walls / ceilings",
    },
  ];
};
export const what_type_should_be_laid = (id1, id2, id3, id4, id5, id6, id7) => {
  return [
    {
      id: id1,
      label: "parquet",
    },
    {
      id: id2,
      label: "Laminat",
    },
    {
      id: id3,
      label: "Vinyl / Linoleum",
    },
    {
      id: id4,
      label: "Carpet",
    },
    {
      id: id5,
      label: "PVC",
    },
    {
      id: id6,
      label: "Solid wood",
    },
    {
      id: id7,
      label: "Other",
    },
  ];
};
export const in_how_many_work_done = (id1, id2, id3, id4, id5, id6) => {
  return [
    {
      id: id1,
      label: "1 room",
    },
    {
      id: id2,
      label: "2 rooms",
    },
    {
      id: id3,
      label: "3 rooms",
    },
    {
      id: id4,
      label: "4 rooms",
    },
    {
      id: id5,
      label: "5 or more rooms",
    },
    {
      id: id6,
      label: "It is a commercial property",
    },
  ];
};
export const what_maintenance_work_is_required = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Sanding & sealing",
    },
    {
      id: id2,
      label: "Sanding & oiling",
    },
    {
      id: id3,
      label: "Clean & oil",
    },
    {
      id: id4,
      label: "Apply care oil",
    },
    {
      id: id5,
      label: "Other",
    },
  ];
};
export const is_the_flooring_already_in_place = (id1, id2) => {
  return [
    {
      id: id1,
      label: "Yes, already exists.",
    },
    {
      id: id2,
      label: "No, still needs to be procured.",
    },
  ];
};
export const is_the_window_already_in_place = [
  {
    label: "Yes, windows available",
  },
  {
    label: "No, still needs to be procured.",
  },
];

export const how_many_installed_replaced = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "1 to 2",
    },
    {
      id: id2,
      label: "3 to 5",
    },
    {
      id: id3,
      label: "6 to 9",
    },
    {
      id: id4,
      label: "10 or more",
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
      label: "Double glazing",
    },
    {
      id: id2,
      label: "Triple glazing",
    },
    {
      id: id3,
      label: "other glass",
    },
    {
      id: id4,
      label: "Wood",
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
      label: "I do not know",
    },
    {
      id: id8,
      label: "Other",
    },
  ];
};
export const what_kind_of_glass_is_it = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "Double glazing",
    },
    {
      id: id2,
      label: "Triple glazing",
    },
    {
      id: id3,
      label: "I do not know",
    },
    {
      id: id4,
      label: "Other",
    },
  ];
};
export const what_material_frame_made_of = [
  {
    label: "Wood",
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
    label: "I do not know",
  },
  {
    label: "Other",
  },
];
export const approximately_how_the_affected_area = [
  {
    label: "Up to 2 m²",
  },
  {
    label: "3 to 14 m²",
  },
  {
    label: "15 to 30 m²",
  },
  {
    label: "31 to 50 m²",
  },
  {
    label: "51 or more m²",
  },
  {
    label: "I do not know",
  },
];
export const how_manyshuttersare_there = [
  {
    label: "1",
  },
  {
    label: "2 to 3",
  },
  {
    label: "4 or more",
  },
];
export const what_performance_do_you_exactly_need = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Assembly of a prefabricated kit",
    },
    {
      id: id2,
      label: "Custom creation",
    },
    {
      id: id3,
      label: "Don't know / need advice",
    },
  ];
};

export const how_big_is_area_approximately = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Up to 14 m²",
    },
    {
      id: id2,
      label: "15 to 29 m²",
    },
    {
      id: id3,
      label: "30 to 59 m²",
    },
    {
      id: id4,
      label: "60 or more m²",
    },
    {
      id: id5,
      label: "I do not know",
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
      label: "Wood",
    },
    {
      id: id7,
      label: "I do not know",
    },
    {
      id: id8,
      label: "Other",
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
      label: "Other",
    },
    {
      id: id5,
      label: "I do not know",
    },
  ];
};
export const what_system_distribute_the_heat = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Radiator / Heater",
    },
    {
      id: id2,
      label: "Underfloor heating",
    },
    {
      id: id3,
      label: "Both",
    },
    {
      id: id4,
      label: "Other",
    },
    {
      id: id5,
      label: "I do not know",
    },
  ];
};
export const how_far_the_transport = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Within the community",
    },
    {
      id: id2,
      label: "Within the canton",
    },
    {
      id: id3,
      label: "Within Switzerland",
    },
    {
      id: id4,
      label: "Within Europe",
    },
    {
      id: id5,
      label: "Outside Europe",
    },
  ];
};
export const approximately_how_big_affected_structure = [
  {
    label: "Small",
    des: "E.g. a room, garden house etc.",
  },
  {
    label: "Medium",
    des: "E.g. a floor, an apartment, etc.",
  },
  {
    label: "Large",
    des: "E.g. a single-family house etc.",
  },
  {
    label: "Very large",
    des: "E.g. several single-family houses, an apartment building, etc.",
  },
];
