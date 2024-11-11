import {
  approximately_how_much_budget_for_this_project,
  have_you_already_contacted,
  how_many_bedrooms_are_affected,
  how_much_surrounding_area,
} from "../../reuse-data";

// 0 living rooms
const towkitchens = [
  {
    id: 829709154,
    type: "checkbox",
    label:
      "    label: Combien de pièces à vivre et de chambres sont concernées ?",
    options: how_many_bedrooms_are_affected(
      997496694,
      637335606,
      235602695,
      734630481,
      122026725
    ),
  },
  {
    id: 997496694,
    type: "checkbox",
    label:
      "Combien de locaux techniques (chaufferie, buanderie, etc.) sont concernés ?",
    options: how_many_bedrooms_are_affected(
      230041357,
      275310097,
      427341321,
      477723247,
      221170405
    ),
  },

  // 0 technical rooms start

  {
    id: 230041357,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 250 to
  // 0 technical rooms end

  // 1 technical rooms start
  {
    id: 275310097,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 1 technical rooms end
  // 2 technical rooms start
  {
    id: 427341321,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 2 technical rooms end

  // 3 technical rooms start
  {
    id: 477723247,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 3 technical rooms end
  // 4 technical rooms start
  {
    id: 221170405,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 4 technical rooms end
  // 0 living rooms

  // 1 living rooms
  {
    id: 637335606,
    type: "checkbox",
    label:
      "Combien de locaux techniques (chaufferie, buanderie, etc.) sont concernés ?",
    options: how_many_bedrooms_are_affected(
      230041357,
      275310097,
      427341321,
      477723247,
      221170405
    ),
  },

  // 0 technical rooms start

  {
    id: 230041357,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 250 to
  // 0 technical rooms end

  // 1 technical rooms start
  {
    id: 275310097,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 1 technical rooms end
  // 2 technical rooms start
  {
    id: 427341321,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 2 technical rooms end

  // 3 technical rooms start
  {
    id: 477723247,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 3 technical rooms end
  // 4 technical rooms start
  {
    id: 221170405,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 4 technical rooms end
  // 1 living rooms

  // 2 living rooms
  {
    id: 235602695,
    type: "checkbox",
    label:
      "Combien de locaux techniques (chaufferie, buanderie, etc.) sont concernés ?",
    options: how_many_bedrooms_are_affected(
      230041357,
      275310097,
      427341321,
      477723247,
      221170405
    ),
  },

  // 0 technical rooms start

  {
    id: 230041357,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 250 to
  // 0 technical rooms end

  // 1 technical rooms start
  {
    id: 275310097,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 1 technical rooms end
  // 2 technical rooms start
  {
    id: 427341321,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 2 technical rooms end

  // 3 technical rooms start
  {
    id: 477723247,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 3 technical rooms end
  // 4 technical rooms start
  {
    id: 221170405,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 4 technical rooms end
  // 2 living rooms

  // 3 living rooms
  {
    id: 734630481,
    type: "checkbox",
    label:
      "Combien de locaux techniques (chaufferie, buanderie, etc.) sont concernés ?",
    options: how_many_bedrooms_are_affected(
      230041357,
      275310097,
      427341321,
      477723247,
      221170405
    ),
  },

  // 0 technical rooms start

  {
    id: 230041357,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 250 to
  // 0 technical rooms end

  // 1 technical rooms start
  {
    id: 275310097,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 1 technical rooms end
  // 2 technical rooms start
  {
    id: 427341321,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 2 technical rooms end

  // 3 technical rooms start
  {
    id: 477723247,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 3 technical rooms end
  // 4 technical rooms start
  {
    id: 221170405,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 4 technical rooms end
  // 3 living rooms

  // 4 living rooms
  {
    id: 122026725,
    type: "checkbox",
    label:
      "Combien de locaux techniques (chaufferie, buanderie, etc.) sont concernés ?",
    options: how_many_bedrooms_are_affected(
      230041357,
      275310097,
      427341321,
      477723247,
      221170405
    ),
  },

  // 0 technical rooms start

  {
    id: 230041357,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 250 to
  // 0 technical rooms end

  // 1 technical rooms start
  {
    id: 275310097,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 1 technical rooms end
  // 2 technical rooms start
  {
    id: 427341321,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 2 technical rooms end

  // 3 technical rooms start
  {
    id: 477723247,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 3 technical rooms end
  // 4 technical rooms start
  {
    id: 221170405,
    type: "checkbox",
    label:
      "Quelle partie de la zone environnante (par exemple, jardin, parvis, etc.) est affectée ?",
    options: how_much_surrounding_area(
      943529651,
      760858854,
      829545168,
      631927590,
      692562990
    ),
  },
  //   no start
  {
    id: 943529651,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  //   no end
  // up to 14

  {
    id: 760858854,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // up to 14

  // 15 to
  {
    id: 829545168,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 15 to

  // 100 to
  {
    id: 631927590,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  // 100 to
  // 250 to
  {
    id: 692562990,
    type: "checkbox",
    label: "Quel est approximativement votre budget pour ce projet ?",
    options: approximately_how_much_budget_for_this_project(
      303424821,
      774189114,
      180670951,
      886830737
    ),
  },
  {
    id: 303424821,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 774189114,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 180670951,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
  {
    id: 886830737,
    type: "checkbox",
    label:
      "Avez-vous déjà effectué une demande de permis de construire auprès de votre commune ?",
    options: have_you_already_contacted,
  },
];

export default towkitchens;
