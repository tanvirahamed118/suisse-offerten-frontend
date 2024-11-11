import {
  how_many_installed_replaced,
  is_the_window_already_in_place,
  questionCheckboxItem,
  what_kind_of_glass_is_it,
  what_material_frame_made_of,
  what_material_installed_made_of,
} from "../../reuse-data";

const windows = [
  {
    id: 591422399,
    type: "checkbox",
    label: "Quels services devraient être fournis ?",
    options: [
      {
        id: 943709669,
        label: "Installation de fenêtres/portes",
        des: "Installation ou remplacement de fenêtres ou de portes",
      },
      {
        id: 368707516,
        label: "Installation de trappes pour animaux",
        des: "Installation ou remplacement de chatières, de chatières pour chiens et autres animaux",
      },
      {
        id: 906534352,
        label: "Pose de vitres",
        des: "Pose ou remplacement de vitres",
      },
      {
        id: 963901589,
        label: "Autre",
        credit: 5,
      },
    ],
  },
  {
    id: 943709669,
    type: "checkbox",
    label: "Combien de fenêtres faut-il installer ou remplacer ?",
    options: [
      {
        id: 154976061,
        label: "Fenêtre",
      },
      {
        id: 562115506,
        label: "Porte",
      },
      {
        id: 855845855,
        label: "Fenêtres et portes",
      },
    ],
  },
  {
    id: 154976061,
    type: "checkbox",
    label: "Que faut-il installer ou remplacer ?",
    options: how_many_installed_replaced(
      634805499,
      881236497,
      231306793,
      356459869
    ),
  },
  {
    id: 634805499,
    type: "checkbox",
    label: "Les portes à installer sont-elles déjà là ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 881236497,
    type: "checkbox",
    label: "Les portes à installer sont-elles déjà là ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 231306793,
    type: "checkbox",
    label: "Les portes à installer sont-elles déjà là ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 356459869,
    type: "checkbox",
    label: "Les portes à installer sont-elles déjà là ?",
    options: is_the_window_already_in_place,
  },

  {
    id: 562115506,
    type: "checkbox",
    label: "Combien de portes faut-il installer ou remplacer ?",
    options: [
      {
        id: 592931443,
        label: "1",
        credit: 4,
      },
      {
        id: 953421574,
        label: "2",
        credit: 8,
      },
      {
        id: 495350087,
        label: "3",
        credit: 15,
      },
      {
        id: 979626402,
        label: "4 ou plus",
        credit: 35,
      },
    ],
  },
  {
    id: 592931443,
    type: "checkbox",
    label: "Les portes à installer sont-elles déjà là ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 953421574,
    type: "checkbox",
    label: "Les portes à installer sont-elles déjà là ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 495350087,
    type: "checkbox",
    label: "Les portes à installer sont-elles déjà là ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 979626402,
    type: "checkbox",
    label: "Les portes à installer sont-elles déjà là ?",
    options: is_the_window_already_in_place,
  },

  {
    id: 855845855,
    type: "checkbox",
    label: "Combien de fenêtres faut-il installer ou remplacer ?",
    options: how_many_installed_replaced(
      7741150106,
      8581468693,
      7404219931,
      2721396346
    ),
  },
  {
    id: 7741150106,
    type: "checkbox",
    label: "Combien de portes faut-il installer ou remplacer ?",
    options: [
      {
        id: 592931443,
        label: "1",
      },
      {
        id: 953421574,
        label: "2",
      },
      {
        id: 495350087,
        label: "3",
      },
      {
        id: 979626402,
        label: "4 ou plus",
      },
    ],
  },
  {
    id: 8581468693,
    type: "checkbox",
    label: "Combien de portes faut-il installer ou remplacer ?",
    options: [
      {
        id: 592931443,
        label: "1",
      },
      {
        id: 953421574,
        label: "2",
      },
      {
        id: 495350087,
        label: "3",
      },
      {
        id: 979626402,
        label: "4 ou plus",
      },
    ],
  },
  {
    id: 7404219931,
    type: "checkbox",
    label: "Combien de portes faut-il installer ou remplacer ?",
    options: [
      {
        id: 592931443,
        label: "1",
      },
      {
        id: 953421574,
        label: "2",
      },
      {
        id: 495350087,
        label: "3",
      },
      {
        id: 979626402,
        label: "4 ou plus",
      },
    ],
  },
  {
    id: 2721396346,
    type: "checkbox",
    label: "Combien de portes faut-il installer ou remplacer ?",
    options: [
      {
        id: 592931443,
        label: "1",
      },
      {
        id: 953421574,
        label: "2",
      },
      {
        id: 495350087,
        label: "3",
      },
      {
        id: 979626402,
        label: "4 ou plus",
      },
    ],
  },

  {
    id: 881236497,
    type: "checkbox",
    label: "Les portes à installer sont-elles déjà là ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 231306793,
    type: "checkbox",
    label: "Les portes à installer sont-elles déjà là ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 356459869,
    type: "checkbox",
    label: "Les portes à installer sont-elles déjà là ?",
    options: is_the_window_already_in_place,
  },

  {
    id: 368707516,
    type: "checkbox",
    label: "Où doit être installée la trappe pour animaux ?",
    options: [
      {
        id: 141307514,
        label: "Fenêtre",
        credit: 5,
      },
      {
        id: 278377893,
        label: "Porte",
        credit: 7,
      },
      {
        id: 708722645,
        label: "Mur",
        credit: 8,
      },
      {
        id: 198441917,
        label: "Autre",
        credit: 5,
      },
    ],
  },
  {
    id: 141307514,
    type: "checkbox",
    label:
      "De quel matériau est fait la zone dans laquelle le volet doit être installé ?",
    options: what_material_installed_made_of(
      217063871,
      776888704,
      384652415,
      527860570,
      706429911,
      237538847,
      673054258,
      622437047
    ),
  },
  {
    id: 278377893,
    type: "checkbox",
    label:
      "De quel matériau est fait la zone dans laquelle le volet doit être installé ?",
    options: what_material_installed_made_of(
      217063871,
      776888704,
      384652415,
      527860570,
      706429911,
      237538847,
      673054258,
      622437047
    ),
  },
  {
    id: 708722645,
    type: "checkbox",
    label:
      "De quel matériau est fait la zone dans laquelle le volet doit être installé ?",
    options: what_material_installed_made_of(
      217063871,
      776888704,
      384652415,
      527860570,
      706429911,
      237538847,
      673054258,
      622437047
    ),
  },
  {
    id: 198441917,
    type: "checkbox",
    label:
      "De quel matériau est fait la zone dans laquelle le volet doit être installé ?",
    options: what_material_installed_made_of(
      217063871,
      776888704,
      384652415,
      527860570,
      706429911,
      237538847,
      673054258,
      622437047
    ),
  },
  {
    id: 217063871,
    type: "doubleInput",
    mainId: 272228053,
    label: "Dimensions approximatives de la vitre (sans cadre)",
    options: [{ width: "Largeur en cm", height: "Hauteur en cm" }],
  },
  {
    id: 776888704,
    type: "doubleInput",
    mainId: 272228053,
    label: "Dimensions approximatives de la vitre (sans cadre)",
    options: [{ width: "Largeur en cm", height: "Hauteur en cm" }],
  },
  {
    id: 384652415,
    type: "doubleInput",
    mainId: 272228053,
    label: "Dimensions approximatives de la vitre (sans cadre)",
    options: [{ width: "Largeur en cm", height: "Hauteur en cm" }],
  },
  {
    id: 527860570,
    type: "checkbox",
    label: "La trappe pour animaux à installer est-elle déjà en place ?",
    options: [
      { label: "Oui, la trappe pour animaux est déjà là", id: 383250887 },
      {
        label: "Non, la trappe pour animaux doit toujours être achetée",
        id: 971808347,
      },
    ],
  },
  {
    id: 706429911,
    type: "checkbox",
    label: "La trappe pour animaux à installer est-elle déjà en place ?",
    options: [
      { label: "Oui, la trappe pour animaux est déjà là", id: 383250887 },
      {
        label: "Non, la trappe pour animaux doit toujours être achetée",
        id: 971808347,
      },
    ],
  },
  {
    id: 237538847,
    type: "checkbox",
    label: "La trappe pour animaux à installer est-elle déjà en place ?",
    options: [
      { label: "Oui, la trappe pour animaux est déjà là", id: 383250887 },
      {
        label: "Non, la trappe pour animaux doit toujours être achetée",
        id: 971808347,
      },
    ],
  },
  {
    id: 673054258,
    type: "checkbox",
    label: "La trappe pour animaux à installer est-elle déjà en place ?",
    options: [
      { label: "Oui, la trappe pour animaux est déjà là", id: 383250887 },
      {
        label: "Non, la trappe pour animaux doit toujours être achetée",
        id: 971808347,
      },
    ],
  },
  {
    id: 622437047,
    type: "checkbox",
    label: "La trappe pour animaux à installer est-elle déjà en place ?",
    options: [
      { label: "Oui, la trappe pour animaux est déjà là", id: 383250887 },
      {
        label: "Non, la trappe pour animaux doit toujours être achetée",
        id: 971808347,
      },
    ],
  },
  {
    id: 272228053,
    type: "checkbox",
    label: "La trappe pour animaux à installer est-elle déjà en place ?",
    options: [
      { label: "Oui, la trappe pour animaux est déjà là", id: 383250887 },
      {
        label: "Non, la trappe pour animaux doit toujours être achetée",
        id: 971808347,
      },
    ],
  },
  {
    id: 383250887,
    type: "checkbox",
    label: "A quel type d'animal est destiné le rabat ?",
    options: [{ label: "Chatte" }, { label: "Chienne" }, { label: "Autre" }],
  },
  {
    id: 971808347,
    type: "checkbox",
    label: "A quel type d'animal est destiné le rabat ?",
    options: [{ label: "Chatte" }, { label: "Chienne" }, { label: "Autre" }],
  },
  {
    id: 906534352,
    type: "checkbox",
    label: "Combien de vitres faut-il installer ou remplacer ?",
    options: [
      { label: "1", id: 913388258, credit: 6 },
      {
        label: "2 à 3",
        id: 211449697,
        credit: 15,
      },
      {
        label: "4 ou plus",
        id: 815354554,
        credit: 25,
      },
    ],
  },
  {
    id: 913388258,
    type: "checkbox",
    label: "De quel matériau est fait le cadre ?",
    options: what_kind_of_glass_is_it(
      550666794,
      457499850,
      688333930,
      344349515
    ),
  },
  {
    id: 550666794,
    type: "checkbox",
    label: "De quel matériau est fait le cadre ?",
    options: what_material_frame_made_of,
  },
  {
    id: 457499850,
    type: "checkbox",
    label: "De quel matériau est fait le cadre ?",
    options: what_material_frame_made_of,
  },
  {
    id: 688333930,
    type: "checkbox",
    label: "De quel matériau est fait le cadre ?",
    options: what_material_frame_made_of,
  },
  {
    id: 344349515,
    type: "checkbox",
    label: "De quel matériau est fait le cadre ?",
    options: what_material_frame_made_of,
  },
  {
    id: 211449697,
    type: "checkbox",
    label: "Est-ce que tous les panneaux sont identiques ?",
    options: questionCheckboxItem(898716305, 376748465),
  },
  {
    id: 898716305,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_of_glass_is_it(
      550666794,
      457499850,
      688333930,
      344349515
    ),
  },
  {
    id: 376748465,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_of_glass_is_it(
      550666794,
      457499850,
      688333930,
      344349515
    ),
  },
  {
    id: 815354554,
    type: "checkbox",
    label: "Est-ce que tous les panneaux sont identiques ?",
    options: questionCheckboxItem(898716305, 376748465),
  },
  {
    id: 898716305,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_of_glass_is_it(
      550666794,
      457499850,
      688333930,
      344349515
    ),
  },
  {
    id: 376748465,
    type: "checkbox",
    label: "De quel type de verre s'agit-il ?",
    options: what_kind_of_glass_is_it(
      550666794,
      457499850,
      688333930,
      344349515
    ),
  },
];

export default windows;
