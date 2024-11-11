export const what_work_needs_done = [
  {
    label: "tondre la pelouse",
  },
  {
    label: "Nettoyage de la terrasse",
  },
  {
    label: "Sarclage",
  },
  {
    label: "Taille des arbres/arbustes",
  },
  {
    label: "Enlever/planter des plantes",
  },
  {
    label: "Nettoyer le jardin",
  },
  {
    label: "Autre",
  },
];

export const how_big_the_tree_one = [
  {
    label: "Petite",
    des: "Jusqu'à 3 m",
    credit: 5,
  },
  {
    label: "Moyen",
    des: "4 à 7 m²",
    credit: 10,
  },
  {
    label: "Grande",
    des: "8 m² ou plus",
    credit: 15,
  },
];
export const How_large_is_to_be_covered = [
  {
    label: "Menue",
    credit: 5,
  },
  {
    label: "Moyen",
    credit: 13,
  },
  {
    label: "Grande",
    credit: 13,
  },
  {
    label: "Très grand",
    credit: 20,
  },
];

export const how_big_the_tree_tow = [
  {
    label: "Petite",
    des: "Jusqu'à 14 m²",
    credit: 10,
  },
  {
    label: "Moyen",
    des: "15 à 29 m²",
    credit: 15,
  },
  {
    label: "Grande",
    des: "30 à 59 m²",
    credit: 20,
  },
  {
    label: "Très grand",
    des: "60 m² ou plus",
    credit: 25,
  },
];

export const approximately_how_many_meters_fence = [
  {
    label: "Jusqu'à 9 m²",
    credit: 5,
  },
  {
    label: "10 à 24 m²",
    credit: 10,
  },
  {
    label: "25 à 34 m²",
    credit: 15,
  },
  {
    label: "35 m² ou plus",
    credit: 20,
  },
];
export const approximately_how_many_meters_of_fence_is = [
  {
    label: "Jusqu'à 9 m²",
    credit: 8,
  },
  {
    label: "10 à 24 m²",
    credit: 15,
  },
  {
    label: "25 à 34 m²",
    credit: 25,
  },
  {
    label: "35 m² ou plus",
    credit: 35,
  },
];
export const approximately_how_many_meters_fence_is_it = [
  {
    label: "Jusqu'à 9 m²",
    credit: 8,
  },
  {
    label: "10 à 24 m²",
    credit: 13,
  },
  {
    label: "25 à 34 m²",
    credit: 18,
  },
  {
    label: "35 m² ou plus",
    credit: 25,
  },
];
export const How_big_is_total_approximately = [
  {
    label: "Jusqu'à 9 m²",
    credit: 10,
  },
  {
    label: "10 à 19 m²",
    credit: 20,
  },
  {
    label: "20 à 39 m²",
    credit: 30,
  },
  {
    label: "40 m² ou plus",
    credit: 50,
  },
  {
    label: "Je ne sais pas",
    credit: 8,
  },
];

export const is_gate_be_installed_already = [
  {
    label: "Oui, la porte est là",
  },
  {
    label: "Non, la porte doit encore être achetée",
  },
];

export const how_large_garden_designed = [
  {
    label: "Petite",
    des: "Jusqu'à 99 m²",
    credit: 15,
  },
  {
    label: "Moyen",
    des: "100 à 199 m²",
    credit: 20,
  },
  {
    label: "Grande",
    des: "200 à 399 m²",
    credit: 25,
  },
  {
    label: "Très grand",
    des: "400 m² ou plus",
    credit: 35,
  },
];

export const what_does_service_require = [
  {
    label: "Parvis",
  },
  {
    label: "Place de parking / place de parking",
  },
  {
    label: "Entrée",
  },
  {
    label: "Chemin de jardin",
  },
  {
    label: "Terrasse",
  },
  {
    label: "Voie publique",
  },
  {
    label: "Chemin privé",
  },
  {
    label: "Autre",
  },
];

export const how_do_garage_door = [
  {
    label: "Oui, il existe déjà",
  },
  {
    label: "Non, il faut encore l'acquérir",
  },
];
export const have_you_already_heating_system = [
  {
    label: "Yes, I have already obtained it.",
  },
  {
    label: "Non, il faut encore l'acquérir.",
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
      label: "4 ou plus",
      credit: 8,
    },
  ];
};

export const input = (id) => {
  return {
    id: id,
    type: "saisir",
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
      label: "6 ou plus",
      credit: 40,
    },
  ];
};

export const what_type_garage_door_it = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Volet roulant",
      des: "La porte de garage s'enroule sur l'ouverture",
    },
    {
      id: id2,
      label: "Portail battant",
      des: "La porte de garage coulisse vers le haut et reste droite",
    },
    {
      id: id3,
      label: "Porte sectionnelle (latérale)",
      des: "La porte de garage s'enroule vers le haut ou sur le côté autour du coin, mais est droite lorsqu'elle est complètement ouverte",
    },
    {
      id: id4,
      label: "Portail battant",
      des: "La porte de garage s'ouvre comme une porte normale",
    },
    {
      id: id5,
      label: "Autre",
    },
  ];
};

export const how_do_you_the_garage_door = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Électrique uniquement",
    },
    {
      id: id2,
      label: "Uniquement à la main",
    },
    {
      id: id3,
      label: "Électrique et manuel",
    },
  ];
};
export const kit_already_available_carport = (id1, id2) => {
  return [
    {
      id: id1,
      label: "Oui",
    },
    {
      id: id2,
      label: "Non, il faut encore l'acquérir.",
    },
  ];
};

export const questionCheckboxItem = (id1, id2) => {
  return [
    {
      id: id1,
      label: "Oui",
    },
    {
      id: id2,
      label: "Non",
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
      label: "3 ou plus",
      credit: 18,
    },
  ];
};

export const does_the_subsurface_need_prepared = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Oui",
    },
    {
      id: id2,
      label: "Non",
    },
    {
      id: id3,
      label: "Je ne sais pas / j'ai besoin de conseils",
    },
  ];
};
export const what_performance_you_exactly_need = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Montage d'un kit prêt à l'emploi (par exemple en quincaillerie)",
      credit: 25,
    },
    {
      id: id2,
      label: "Création sur mesure",
      credit: 35,
    },
    {
      id: id3,
      label: "Je ne sais pas / j'ai besoin de conseils",
      credit: 20,
    },
  ];
};
export const is_the_kit_available = (id1, id2) => {
  return [
    {
      id: id1,
      label: "Oui",
    },
    {
      id: id2,
      label: "Non, il faut encore l'acquérir",
    },
  ];
};
export const where_should_carport_be_located = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Autoportante",
    },
    {
      id: id2,
      label: "À la maison",
    },
    {
      id: id3,
      label: "Au garage",
    },
  ];
};
export const what_kind_roof_shape_you_want = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "Toit à pignon",
    },
    {
      id: id2,
      label: "Toit plat",
    },
    {
      id: id3,
      label: "Toiture en appentis",
    },
    {
      id: id4,
      label: "Autre",
    },
  ];
};
export const do_you_need_additional_carport = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Espace de stockage",
    },
    {
      id: id2,
      label: "Installation photovoltaïque",
    },
    {
      id: id3,
      label: "Toiture verte",
    },
    {
      id: id4,
      label: "Autre",
    },
    {
      id: id5,
      label: "Non, j'ai juste besoin du carport",
    },
  ];
};
export const does_a_building_permit_submitted = [
  {
    label: "Oui",
  },
  {
    label: "Non",
  },
  {
    label: "Je ne sais pas / j'ai besoin de conseils",
  },
];

export const what_excavation_you_need = [
  {
    label: "Excavation pour une piscine",
  },
  {
    label: "Excavation pour une autre structure",
  },
  {
    label: "Élimination des terres excavées",
  },
  {
    label: "Autre",
  },
];

export const what_type_want_to_install = (id1, id2, id3, id4, id5, id6) => {
  return [
    {
      id: id1,
      label: "Toit plat",
    },
    {
      id: id2,
      label: "Toit à pignon",
    },
    {
      id: id3,
      label: "Toit en croupe",
    },
    {
      id: id4,
      label: "Toit mansardé",
    },
    {
      id: id5,
      label: "Toiture en appentis",
    },
    {
      id: id6,
      label: "Je ne suis pas sûr",
    },
  ];
};
export const what_type_do_you_need = (id1, id2, id3, id4, id5, id6) => {
  return [
    {
      id: id1,
      label: "Inspection générale de la toiture",
      credit: 10,
    },
    {
      id: id2,
      label: "Petite tache (une ou plusieurs briques)",
      credit: 8,
    },
    {
      id: id3,
      label: "Petite partie du toit (ou petit toit)",
      credit: 8,
    },
    {
      id: id4,
      label: "Une plus grande partie du toit",
      credit: 20,
    },
    {
      id: id5,
      label: "Toiture entière",
      credit: 30,
    },
    {
      id: id6,
      label: "Autre",
      credit: 10,
    },
  ];
};

export const where_do_you_replace_the_roof = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Maison entière",
    },
    {
      id: id2,
      label: "Garage, extension ou autre partie de la maison",
    },
    {
      id: id3,
      label: "Véranda ou dépendance",
    },
  ];
};
export const what_performance_you_exactly_need_carport = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Montage d'un kit carport préfabriqué",
    },
    {
      id: id2,
      label: "Construction d'un nouveau carport sur mesure",
    },
    {
      id: id3,
      label: "Je ne sais pas / j'ai besoin de conseils",
    },
  ];
};
export const what_material_be_made_of = [
  {
    label: "Briques d'argile",
  },
  {
    label: "Tuiles en béton",
  },
  {
    label: "Fibrociment",
  },
  {
    label: "Revêtement métallique",
  },
  {
    label: "Ardoise",
  },
  {
    label: "Bitume",
  },
  {
    label: "Plastique",
  },
  {
    label: "Others, or Je ne suis pas sûr",
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
      label: "Tout autour",
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
      label: "Tout autour",
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
      label: "5 ou plus",
    },
  ];
};
export const how_long_scaffolding_needed = [
  {
    label: "1 semaine",
  },
  {
    label: "2 semaines",
  },
  {
    label: "3 - 4 semaines",
  },
  {
    label: "1 - 2 mois",
  },
  {
    label: "3 mois ou plus",
  },
];
export const in_how_floor_insulated = [
  {
    label: "1 à 2 pièces",
    credit: 8,
  },
  {
    label: "1 à 2 pièces",
    credit: 15,
  },
  {
    label: "5 ou plus rooms",
    credit: 20,
  },
];

export const how_large_is_approximately = [
  {
    des: "Par exemple une partie d’un mur, etc.",
    label: "Petite",
    credit: 4,
  },
  {
    des: "Par exemple, un mur entier, une pièce, un sol, etc.",
    label: "Moyen",
    credit: 10,
  },
  {
    des: "Par exemple, garage, extension, sous-sol, appartement, etc.",
    label: "Grande",
    credit: 25,
  },
  {
    des: "Par exemple, toute la maison, etc.",
    label: "Très grand",
    credit: 40,
  },
];
export const how_big_is_approximately = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      des: "Jusqu'à 4 m²",
      label: "Petite",
      credit: 3,
    },
    {
      id: id2,
      des: "5 à 9 m²",
      label: "Moyen",
      credit: 8,
    },
    {
      id: id3,
      des: "10 à 24 m²",
      label: "Grande",
      credit: 15,
    },
    {
      id: id4,
      des: "25 m² ou plus",
      label: "Très grand",
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
      des: "Jusqu'à 4 m²",
      label: "Petite",
      credit: 6,
    },
    {
      id: id2,
      des: "5 à 9 m²",
      label: "Moyen",
      credit: 15,
    },
    {
      id: id3,
      des: "10 à 24 m²",
      label: "Grande",
      credit: 20,
    },
    {
      id: id4,
      des: "25 m² ou plus",
      label: "Très grand",
      credit: 30,
    },
  ];
};
export const is_the_required_available = [
  {
    label: "Oui, il existe déjà",
  },
  {
    label: "Non, il faut encore l'acquérir",
  },
];
export const how_many_goals = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "Une petite porte",
      credit: 6,
    },
    {
      id: id2,
      label: "Une porte normale",
      credit: 15,
    },
    {
      id: id3,
      label: "2 à 3 buts",
      credit: 25,
    },
    {
      id: id4,
      label: "4 buts ou plus",
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
    label: "2 à 3",
    credit: 10,
  },
  {
    label: "4 ou plus",
    credit: 20,
  },
];
export const what_type_blinds_are_they = [
  {
    label: "Stores / stores pare-soleil en tissu",
  },
  {
    label: "Stores / volets roulants (intérieur)",
  },
  {
    label: "Stores / volets roulants (extérieur)",
  },
  {
    label: "Volet de fenêtre (extérieur)",
  },
  {
    label: "Autre",
  },
];
export const what_is_the_order = [
  {
    label: "Jusqu'à 4 m²",
    credit: 5,
  },
  {
    label: "5 à 14 m²",
    credit: 10,
  },
  {
    label: "15 à 24 m²",
    credit: 15,
  },
  {
    label: "25 m² ou plus",
    credit: 20,
  },
];

export const how_many_be_cleaned = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "1 à 2",
      credit: 3,
    },
    {
      id: id2,
      label: "3 à 4",
      credit: 6,
    },
    {
      id: id3,
      label: "5 à 9",
      credit: 12,
    },
    {
      id: id4,
      label: "10 ou plus",
      credit: 15,
    },
  ];
};
export const ppproximately_how_big_is_covered_clad = [
  {
    des: "Par exemple, boîte aux lettres, etc.",
    label: "Petite",
    credit: 3,
  },
  {
    des: "Par exemple, abri à vélos, auvent, etc.",
    label: "Moyen",
    credit: 10,
  },
  {
    des: "Par exemple, une partie d’une maison, un hangar, etc.",
    label: "Grande",
    credit: 25,
  },
  {
    des: "Par exemple, toute la maison, etc.",
    label: "Très grand",
    credit: 35,
  },
];
export const what_shape_is_the_roof = (id1, id2, id3, id4, id5, id6) => {
  return [
    {
      id: id1,
      label: "Toit à pignon",
    },
    {
      id: id2,
      label: "Toit plat",
    },
    {
      id: id3,
      label: "Toit en croupe",
    },
    {
      id: id4,
      label: "Toiture en appentis",
    },
    {
      id: id5,
      label: "Autre",
    },
    {
      id: id6,
      label: "Je ne sais pas",
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
      label: "Briques d'argile",
    },
    {
      id: id2,
      label: "Bitume",
    },
    {
      id: id3,
      label: "Fibrociment",
    },
    {
      id: id4,
      label: "Plastique",
    },
    {
      id: id5,
      label: "Revêtement métallique",
    },
    {
      id: id6,
      label: "Autre",
    },
    {
      id: id7,
      label: "Je ne sais pas",
    },
  ];
};
export const can_you_access_inside = [
  {
    label: "Oui",
  },
  {
    label: "Non",
  },
  {
    label: "Je ne sais pas",
  },
];
export const what_kind_glass_it = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "Double vitrage",
    },
    {
      id: id2,
      label: "Triple vitrage",
    },
    {
      id: id3,
      label: "Je ne sais pas",
    },
    {
      id: id4,
      label: "Autre glazing",
    },
  ];
};
export const what_kind_glass_is_it = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Double vitrage",
    },
    {
      id: id2,
      label: "Triple vitrage",
    },
    {
      id: id3,
      label: "Autre glazing",
    },
  ];
};
export const how_extensive_order_approximately = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      des: "Par exemple, cheminée, maisonnette, etc.",
      label: "Petite",
      credit: 5,
    },
    {
      id: id2,
      des: "Par exemple, cuisine, salle de bain, réservoir à mazout, etc.",
      label: "Moyen",
      credit: 10,
    },
    {
      id: id3,
      des: "Par exemple garage, extension, appartement, etc.",
      label: "Grande",
      credit: 25,
    },
    {
      id: id4,
      des: "Par exemple, une maison entière, plusieurs propriétés, etc.",
      label: "Très grand",
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
      label: "4 ou plus",
    },
  ];
};
export const how_much_surrounding_area = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Non",
    },
    {
      id: id2,
      label: "Jusqu'à 14 m²",
    },
    {
      id: id3,
      label: "15 à 99 m²",
    },
    {
      id: id4,
      label: "100 à 249 m²",
    },
    {
      id: id5,
      label: "250 m² ou plus",
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
      label: "Jusqu'à CHF 10 000",
      credit: 40,
    },
    {
      id: id2,
      label: "CHF 10 000 à 100 000",
      credit: 60,
    },
    {
      id: id3,
      label: "CHF 100 000 à 300 000",
      credit: 90,
    },
    {
      id: id4,
      label: "CHF 300 000 ou plus",
      credit: 120,
    },
  ];
};
export const have_you_already_contacted = [
  {
    label: "Oui, la demande de permis de construire a déjà été déposée",
  },
  {
    label:
      "Oui, mais la demande de permis de construire doit encore être déposée",
  },
  {
    label: "Oui, mais ce projet ne nécessite pas de permis de construire",
  },
  {
    label: "Oui, mais ce projet ne nécessite pas de permis de construire",
  },
  {
    label:
      "Non, je sais avec certitude qu'aucun permis de construire n'est requis pour ce projet",
  },
];
export const approximately_how_be_painted = (id1, id2, id3, id4, id5, id6) => {
  return [
    {
      id: id1,
      label: "Seulement une zone plus petite",
      credit: 5,
    },
    {
      id: id2,
      label: "Jusqu'à 5 murs / plafonds",
      credit: 15,
    },
    {
      id: id3,
      label: "6 à 10 murs/plafonds",
      credit: 25,
    },
    {
      id: id4,
      label: "11 à 20 murs/plafonds",
      credit: 35,
    },
    {
      id: id5,
      label: "21 à 30 murs/plafonds",
      credit: 45,
    },
    {
      id: id6,
      label: "31 murs/plafonds ou plus",
      credit: 55,
    },
  ];
};
export const how_much_facade_should_be_painted = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Seulement une zone plus petite",
      credit: 5,
    },
    {
      id: id2,
      label: "Jusqu'à une page",
      credit: 10,
    },
    {
      id: id3,
      label: "2 à 3 pages",
      credit: 20,
    },
    {
      id: id4,
      label: "Une maison unifamiliale entière",
      credit: 45,
    },
    {
      id: id5,
      label: "Un immeuble entier",
      credit: 65,
    },
  ];
};
export const how_windows_doors_be_painted = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Une fenêtre / une porte",
      credit: 5,
    },
    {
      id: id2,
      label: "2 à 5 fenêtres/portes",
      credit: 15,
    },
    {
      id: id3,
      label: "6 ou plus fenêtres / portes",
      credit: 25,
    },
  ];
};
export const how_many_sides_roof_painted = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "D'un côté du toit",
      credit: 10,
    },
    {
      id: id2,
      label: "Sur 2 à 3 côtés du toit",
      credit: 30,
    },
    {
      id: id3,
      label: "Sur tous les côtés du toit",
      credit: 50,
    },
  ];
};
export const what_type_should_be_laid = (id1, id2, id3, id4, id5, id6, id7) => {
  return [
    {
      id: id1,
      label: "Parquet",
    },
    {
      id: id2,
      label: "Stratifié",
    },
    {
      id: id3,
      label: "Vinyle / Linoléum",
    },
    {
      id: id4,
      label: "Tapis",
    },
    {
      id: id5,
      label: "PVC",
    },
    {
      id: id6,
      label: "Bois massif",
    },
    {
      id: id7,
      label: "Autre",
      credit: 5,
    },
  ];
};
export const in_how_many_work_done = (id1, id2, id3, id4, id5, id6) => {
  return [
    {
      id: id1,
      label: "1 chambre",
      credit: 8,
    },
    {
      id: id2,
      label: "2 pièces",
      credit: 16,
    },
    {
      id: id3,
      label: "3 pièces",
      credit: 24,
    },
    {
      id: id4,
      label: "4 pièces",
      credit: 30,
    },
    {
      id: id5,
      label: "5 ou plus rooms",
      credit: 40,
    },
    {
      id: id6,
      label: "C'est une propriété commerciale",
      credit: 50,
    },
  ];
};
export const what_maintenance_work_is_required = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Ponçage et scellement",
    },
    {
      id: id2,
      label: "Ponçage et huilage",
    },
    {
      id: id3,
      label: "Nettoyer et huiler",
    },
    {
      id: id4,
      label: "Appliquer l'huile de soin",
    },
    {
      id: id5,
      label: "Autre",
    },
  ];
};
export const is_the_flooring_already_in_place = (id1, id2) => {
  return [
    {
      id: id1,
      label: "Oui, ça existe déjà.",
    },
    {
      id: id2,
      label: "Non, il faut encore l'acheter.",
    },
  ];
};
export const is_the_window_already_in_place = [
  {
    label: "Oui, ça existe déjà.",
  },
  {
    label: "Non, il faut encore l'acheter.",
  },
];

export const how_many_installed_replaced = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "1 à 2",
      credit: 4,
    },
    {
      id: id2,
      label: "3 à 5",
      credit: 8,
    },
    {
      id: id3,
      label: "6 à 9",
      credit: 15,
    },
    {
      id: id4,
      label: "10 ou plus",
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
      label: "Double vitrage",
    },
    {
      id: id2,
      label: "Triple vitrage",
    },
    {
      id: id3,
      label: "Autre verre",
    },
    {
      id: id4,
      label: "Bois",
    },
    {
      id: id5,
      label: "Plastique",
    },
    {
      id: id6,
      label: "Maçonnerie/Béton",
    },
    {
      id: id7,
      label: "Je ne sais pas",
    },
    {
      id: id8,
      label: "Autre",
    },
  ];
};
export const what_kind_of_glass_is_it = (id1, id2, id3, id4) => {
  return [
    {
      id: id1,
      label: "Double vitrage",
    },
    {
      id: id2,
      label: "Triple vitrage",
    },
    {
      id: id3,
      label: "Je ne sais pas",
    },
    {
      id: id4,
      label: "Autre",
    },
  ];
};
export const what_material_frame_made_of = [
  {
    label: "Bois",
  },
  {
    label: "Plastique",
  },
  {
    label: "Métal",
  },
  {
    label: "Bois/Métal",
  },
  {
    label: "Plastique/Métal",
  },
  {
    label: "Je ne sais pas",
  },
  {
    label: "Autre",
  },
];
export const approximately_how_the_affected_area = [
  {
    label: "Jusqu'à 2 m²",
    credit: 4,
  },
  {
    label: "3 à 14 m²",
    credit: 9,
  },
  {
    label: "15 à 30 m²",
    credit: 14,
  },
  {
    label: "31 à 50 m²",
    credit: 20,
  },
  {
    label: "51 m² ou plus",
    credit: 25,
  },
  {
    label: "Je ne sais pas",
    credit: 8,
  },
];
export const how_manyshuttersare_there = [
  {
    label: "1",
    credit: 6,
  },
  {
    label: "2 à 3",
    credit: 15,
  },
  {
    label: "4 ou plus",
    credit: 25,
  },
];
export const what_performance_do_you_exactly_need = (id1, id2, id3) => {
  return [
    {
      id: id1,
      label: "Montage d'un kit préfabriqué",
      credit: 15,
    },
    {
      id: id2,
      label: "Création sur mesure",
      credit: 25,
    },
    {
      id: id3,
      label: "Je ne sais pas / j'ai besoin de conseils",
      credit: 7,
    },
  ];
};

export const how_big_is_area_approximately = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Jusqu'à 14 m²",
      credit: 8,
    },
    {
      id: id2,
      label: "15 à 29 m²",
      credit: 15,
    },
    {
      id: id3,
      label: "30 à 59 m²",
      credit: 25,
    },
    {
      id: id4,
      label: "60 m² ou plus",
      credit: 35,
    },
    {
      id: id5,
      label: "Je ne sais pas",
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
      label: "Huile",
    },
    {
      id: id2,
      label: "Gaz",
    },
    {
      id: id3,
      label: "Pompe à chaleur (sonde de sol)",
    },
    {
      id: id4,
      label: "Pompe à chaleur (air/eau)",
    },
    {
      id: id5,
      label: "Électrique",
    },
    {
      id: id6,
      label: "Bois",
    },
    {
      id: id7,
      label: "Je ne sais pas",
    },
    {
      id: id8,
      label: "Autre",
    },
  ];
};
export const what_do_you_the_water = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Chaudière électrique",
    },
    {
      id: id2,
      label: "Pompes à eau chaudière",
    },
    {
      id: id3,
      label: "Chauffe-eau instantané",
    },
    {
      id: id4,
      label: "Autre",
    },
    {
      id: id5,
      label: "Je ne sais pas",
    },
  ];
};
export const what_system_distribute_the_heat = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Radiateur / Chauffage",
    },
    {
      id: id2,
      label: "Chauffage par le sol",
    },
    {
      id: id3,
      label: "Les deux",
    },
    {
      id: id4,
      label: "Autre",
    },
    {
      id: id5,
      label: "Je ne sais pas",
    },
  ];
};
export const how_far_the_transport = (id1, id2, id3, id4, id5) => {
  return [
    {
      id: id1,
      label: "Au sein de la communauté",
    },
    {
      id: id2,
      label: "Dans le canton",
    },
    {
      id: id3,
      label: "En Suisse",
    },
    {
      id: id4,
      label: "En Europe",
    },
    {
      id: id5,
      label: "Hors Europe",
    },
  ];
};
export const approximately_how_big_affected_structure = [
  {
    label: "Petite",
    des: "Par exemple une pièce, une maison de jardin, etc.",
    credit: 15,
  },
  {
    label: "Moyen",
    des: "Par exemple un étage, un appartement, etc.",
    credit: 25,
  },
  {
    label: "Grande",
    des: "Par exemple une maison unifamiliale, etc.",
    credit: 35,
  },
  {
    label: "Très grand",
    des: "Par exemple plusieurs maisons unifamiliales, un immeuble d’appartements, etc.",
    credit: 50,
  },
];
