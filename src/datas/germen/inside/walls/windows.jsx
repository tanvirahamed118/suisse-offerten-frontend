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
    label: "Welche Leistungen sollen erbracht werden ?",
    options: [
      {
        id: 943709669,
        label: "Einbau von Fenstern/Türen",
        des: "Einbau oder Austausch von Fenstern oder Türen",
      },
      {
        id: 368707516,
        label: "Einbau von Tierklappen",
        des: "Einbau oder Austausch von Katzen-, Hunde- und anderen Tierklappen",
      },
      {
        id: 906534352,
        label: "Einbau von Glasscheiben",
        des: "Einbau oder Austausch von Glasscheiben",
      },
      {
        id: 963901589,
        label: "Andere",
        credit: 5,
      },
    ],
  },
  {
    id: 943709669,
    type: "checkbox",
    label: "Wie viele Fenster sollen eingebaut bzw. ausgetauscht werden ?",
    options: [
      {
        id: 154976061,
        label: "Fenster",
      },
      {
        id: 562115506,
        label: "Tür",
      },
      {
        id: 855845855,
        label: "Fenster und Türen",
      },
    ],
  },
  {
    id: 154976061,
    type: "checkbox",
    label: "Was muss eingebaut oder ausgetauscht werden ?",
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
    label: "Sind die einzubauenden Türen schon vorhanden ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 881236497,
    type: "checkbox",
    label: "Sind die einzubauenden Türen schon vorhanden ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 231306793,
    type: "checkbox",
    label: "Sind die einzubauenden Türen schon vorhanden ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 356459869,
    type: "checkbox",
    label: "Sind die einzubauenden Türen schon vorhanden ?",
    options: is_the_window_already_in_place,
  },

  {
    id: 562115506,
    type: "checkbox",
    label: "Wie viele Türen sollen eingebaut bzw. ausgetauscht werden ?",
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
        label: "4 oder mehr",
        credit: 35,
      },
    ],
  },
  {
    id: 592931443,
    type: "checkbox",
    label: "Sind die einzubauenden Türen schon vorhanden ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 953421574,
    type: "checkbox",
    label: "Sind die einzubauenden Türen schon vorhanden ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 495350087,
    type: "checkbox",
    label: "Sind die einzubauenden Türen schon vorhanden ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 979626402,
    type: "checkbox",
    label: "Sind die einzubauenden Türen schon vorhanden ?",
    options: is_the_window_already_in_place,
  },

  {
    id: 855845855,
    type: "checkbox",
    label: "Wie viele Fenster sollen eingebaut bzw. ausgetauscht werden ?",
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
    label: "Wie viele Türen sollen eingebaut bzw. ausgetauscht werden ?",
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
        label: "4 oder mehr",
      },
    ],
  },
  {
    id: 8581468693,
    type: "checkbox",
    label: "Wie viele Türen sollen eingebaut bzw. ausgetauscht werden ?",
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
        label: "4 oder mehr",
      },
    ],
  },
  {
    id: 7404219931,
    type: "checkbox",
    label: "Wie viele Türen sollen eingebaut bzw. ausgetauscht werden ?",
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
        label: "4 oder mehr",
      },
    ],
  },
  {
    id: 2721396346,
    type: "checkbox",
    label: "Wie viele Türen sollen eingebaut bzw. ausgetauscht werden ?",
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
        label: "4 oder mehr",
      },
    ],
  },

  {
    id: 881236497,
    type: "checkbox",
    label: "Sind die einzubauenden Türen schon vorhanden ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 231306793,
    type: "checkbox",
    label: "Sind die einzubauenden Türen schon vorhanden ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 356459869,
    type: "checkbox",
    label: "Sind die einzubauenden Türen schon vorhanden ?",
    options: is_the_window_already_in_place,
  },

  {
    id: 368707516,
    type: "checkbox",
    label: "Wo soll die Tierklappe eingebaut werden ?",
    options: [
      {
        id: 141307514,
        label: "Fenster",
        credit: 5,
      },
      {
        id: 278377893,
        label: "Tür",
        credit: 7,
      },
      {
        id: 708722645,
        label: "Wand",
        credit: 8,
      },
      {
        id: 198441917,
        label: "Andere",
        credit: 5,
      },
    ],
  },
  {
    id: 141307514,
    type: "checkbox",
    label:
      "What material is the area in which the flap should be installed made of  ?",
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
      "What material is the area in which the flap should be installed made of  ?",
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
      "What material is the area in which the flap should be installed made of  ?",
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
      "What material is the area in which the flap should be installed made of  ?",
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
    label: "Ungefähre Maße der Glasscheibe (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 776888704,
    type: "doubleInput",
    mainId: 272228053,
    label: "Ungefähre Maße der Glasscheibe (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 384652415,
    type: "doubleInput",
    mainId: 272228053,
    label: "Ungefähre Maße der Glasscheibe (ohne Rahmen)",
    options: [{ width: "Breite in cm", height: "Höhe in cm" }],
  },
  {
    id: 527860570,
    type: "checkbox",
    label: "Ist die zu montierende Tierklappe bereits vorhanden ?",
    options: [
      { label: "Ja die Tierklappe ist schon da", id: 383250887 },
      {
        label: "Nein, die Tierklappe muss noch gekauft werden",
        id: 971808347,
      },
    ],
  },
  {
    id: 706429911,
    type: "checkbox",
    label: "Ist die zu montierende Tierklappe bereits vorhanden ?",
    options: [
      { label: "Ja die Tierklappe ist schon da", id: 383250887 },
      {
        label: "Nein, die Tierklappe muss noch gekauft werden",
        id: 971808347,
      },
    ],
  },
  {
    id: 237538847,
    type: "checkbox",
    label: "Ist die zu montierende Tierklappe bereits vorhanden ?",
    options: [
      { label: "Ja die Tierklappe ist schon da", id: 383250887 },
      {
        label: "Nein, die Tierklappe muss noch gekauft werden",
        id: 971808347,
      },
    ],
  },
  {
    id: 673054258,
    type: "checkbox",
    label: "Ist die zu montierende Tierklappe bereits vorhanden ?",
    options: [
      { label: "Ja die Tierklappe ist schon da", id: 383250887 },
      {
        label: "Nein, die Tierklappe muss noch gekauft werden",
        id: 971808347,
      },
    ],
  },
  {
    id: 622437047,
    type: "checkbox",
    label: "Ist die zu montierende Tierklappe bereits vorhanden ?",
    options: [
      { label: "Ja die Tierklappe ist schon da", id: 383250887 },
      {
        label: "Nein, die Tierklappe muss noch gekauft werden",
        id: 971808347,
      },
    ],
  },
  {
    id: 272228053,
    type: "checkbox",
    label: "Ist die zu montierende Tierklappe bereits vorhanden ?",
    options: [
      { label: "Ja die Tierklappe ist schon da", id: 383250887 },
      {
        label: "Nein, die Tierklappe muss noch gekauft werden",
        id: 971808347,
      },
    ],
  },
  {
    id: 383250887,
    type: "checkbox",
    label: "Für welches Tier ist die Klappe gedacht ?",
    options: [{ label: "Katze" }, { label: "Hund" }, { label: "Andere" }],
  },
  {
    id: 971808347,
    type: "checkbox",
    label: "Für welches Tier ist die Klappe gedacht ?",
    options: [{ label: "Katze" }, { label: "Hund" }, { label: "Andere" }],
  },
  {
    id: 906534352,
    type: "checkbox",
    label: "Wie viele Glasscheiben sollen eingebaut bzw. ausgetauscht werden ?",
    options: [
      { label: "1", id: 913388258, credit: 6 },
      {
        label: "2 bis 3",
        id: 211449697,
        credit: 15,
      },
      {
        label: "4 oder mehr",
        id: 815354554,
        credit: 25,
      },
    ],
  },
  {
    id: 913388258,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht der Rahmen ?",
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
    label: "Aus welchem ​​Material besteht der Rahmen ?",
    options: what_material_frame_made_of,
  },
  {
    id: 457499850,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht der Rahmen ?",
    options: what_material_frame_made_of,
  },
  {
    id: 688333930,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht der Rahmen ?",
    options: what_material_frame_made_of,
  },
  {
    id: 344349515,
    type: "checkbox",
    label: "Aus welchem ​​Material besteht der Rahmen ?",
    options: what_material_frame_made_of,
  },
  {
    id: 211449697,
    type: "checkbox",
    label: "Sind alle Scheiben identisch ?",
    options: questionCheckboxItem(898716305, 376748465),
  },
  {
    id: 898716305,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
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
    label: "Um was für ein Glas handelt es sich ?",
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
    label: "Sind alle Scheiben identisch ?",
    options: questionCheckboxItem(898716305, 376748465),
  },
  {
    id: 898716305,
    type: "checkbox",
    label: "Um was für ein Glas handelt es sich ?",
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
    label: "Um was für ein Glas handelt es sich ?",
    options: what_kind_of_glass_is_it(
      550666794,
      457499850,
      688333930,
      344349515
    ),
  },
];

export default windows;
