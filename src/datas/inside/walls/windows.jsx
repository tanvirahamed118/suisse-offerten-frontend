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
    label: "What services should be provided ?",
    options: [
      {
        id: 943709669,
        label: "Installation of windows/doors",
        des: "Installation or replacement of windows or doors",
      },
      {
        id: 368707516,
        label: "Installation of animal flaps",
        des: "Installation or replacement of cat, dog and other animal flaps",
      },
      {
        id: 906534352,
        label: "Installation of glass panes",
        des: "Installation or replacement of glass panes",
      },
      {
        id: 963901589,
        label: "Other",
      },
    ],
  },
  {
    id: 943709669,
    type: "checkbox",
    label: "What needs to be installed or replaced ?",
    options: [
      {
        id: 154976061,
        label: "Window",
      },
      {
        id: 562115506,
        label: "Doors",
      },
      {
        id: 855845855,
        label: "Windows and doors",
      },
    ],
  },
  {
    id: 154976061,
    type: "checkbox",
    label: "What needs to be installed or replaced ?",
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
    label: "Is the window to be installed already there ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 881236497,
    type: "checkbox",
    label: "Is the window to be installed already there ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 231306793,
    type: "checkbox",
    label: "Is the window to be installed already there ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 356459869,
    type: "checkbox",
    label: "Is the window to be installed already there ?",
    options: is_the_window_already_in_place,
  },

  {
    id: 562115506,
    type: "checkbox",
    label: "How many doors should be installed or replaced ?",
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
        label: "4 or more",
      },
    ],
  },
  {
    id: 592931443,
    type: "checkbox",
    label: "Is the window to be installed already there ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 953421574,
    type: "checkbox",
    label: "Is the window to be installed already there ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 495350087,
    type: "checkbox",
    label: "Is the window to be installed already there ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 979626402,
    type: "checkbox",
    label: "Is the window to be installed already there ?",
    options: is_the_window_already_in_place,
  },

  {
    id: 855845855,
    type: "checkbox",
    label: "What needs to be installed or replaced ?",
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
    label: "Is the window to be installed already there ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 881236497,
    type: "checkbox",
    label: "Is the window to be installed already there ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 231306793,
    type: "checkbox",
    label: "Is the window to be installed already there ?",
    options: is_the_window_already_in_place,
  },
  {
    id: 356459869,
    type: "checkbox",
    label: "Is the window to be installed already there ?",
    options: is_the_window_already_in_place,
  },

  {
    id: 368707516,
    type: "checkbox",
    label: "Where should the animal flap be installed ?",
    options: [
      {
        id: 141307514,
        label: "Window",
      },
      {
        id: 278377893,
        label: "Door",
      },
      {
        id: 708722645,
        label: "Wall",
      },
      {
        id: 198441917,
        label: "Other",
      },
    ],
  },
  {
    id: 141307514,
    type: "checkbox",
    label:
      "What material is the area in which the flap should be installed made of ?",
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
      "What material is the area in which the flap should be installed made of ?",
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
      "What material is the area in which the flap should be installed made of ?",
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
      "What material is the area in which the flap should be installed made of ?",
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
    label: "Approximate dimensions of the glass pane (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 776888704,
    type: "doubleInput",
    mainId: 272228053,
    label: "Approximate dimensions of the glass pane (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 384652415,
    type: "doubleInput",
    mainId: 272228053,
    label: "Approximate dimensions of the glass pane (without frame)",
    options: [{ width: "Width in cm", height: "Height in cm" }],
  },
  {
    id: 527860570,
    type: "checkbox",
    label: "Is the animal flap to be installed already in place ?",
    options: [
      { label: "Yes, the animal flap is already there", id: 383250887 },
      {
        label: "No, the animal flap still needs to be purchased",
        id: 971808347,
      },
    ],
  },
  {
    id: 706429911,
    type: "checkbox",
    label: "Is the animal flap to be installed already in place ?",
    options: [
      { label: "Yes, the animal flap is already there", id: 383250887 },
      {
        label: "No, the animal flap still needs to be purchased",
        id: 971808347,
      },
    ],
  },
  {
    id: 237538847,
    type: "checkbox",
    label: "Is the animal flap to be installed already in place ?",
    options: [
      { label: "Yes, the animal flap is already there", id: 383250887 },
      {
        label: "No, the animal flap still needs to be purchased",
        id: 971808347,
      },
    ],
  },
  {
    id: 673054258,
    type: "checkbox",
    label: "Is the animal flap to be installed already in place ?",
    options: [
      { label: "Yes, the animal flap is already there", id: 383250887 },
      {
        label: "No, the animal flap still needs to be purchased",
        id: 971808347,
      },
    ],
  },
  {
    id: 622437047,
    type: "checkbox",
    label: "Is the animal flap to be installed already in place ?",
    options: [
      { label: "Yes, the animal flap is already there", id: 383250887 },
      {
        label: "No, the animal flap still needs to be purchased",
        id: 971808347,
      },
    ],
  },
  {
    id: 272228053,
    type: "checkbox",
    label: "Is the animal flap to be installed already in place ?",
    options: [
      { label: "Yes, the animal flap is already there", id: 383250887 },
      {
        label: "No, the animal flap still needs to be purchased",
        id: 971808347,
      },
    ],
  },
  {
    id: 383250887,
    type: "checkbox",
    label: "What kind of animal is the flap for ?",
    options: [{ label: "Cat" }, { label: "Dog" }, { label: "Other" }],
  },
  {
    id: 971808347,
    type: "checkbox",
    label: "What kind of animal is the flap for ?",
    options: [{ label: "Cat" }, { label: "Dog" }, { label: "Other" }],
  },
  {
    id: 906534352,
    type: "checkbox",
    label: "How many panes of glass should be installed or replaced ?",
    options: [
      { label: "1", id: 913388258 },
      {
        label: "2 to 3",
        id: 211449697,
      },
      {
        label: "4 or more",
        id: 815354554,
      },
    ],
  },
  {
    id: 913388258,
    type: "checkbox",
    label: "What kind of glass is it ?",
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
    label: "What kind of glass is it ?",
    options: what_material_frame_made_of,
  },
  {
    id: 457499850,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_material_frame_made_of,
  },
  {
    id: 688333930,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_material_frame_made_of,
  },
  {
    id: 344349515,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: what_material_frame_made_of,
  },
  {
    id: 211449697,
    type: "checkbox",
    label: "What kind of glass is it ?",
    options: questionCheckboxItem(898716305, 376748465),
  },
  {
    id: 898716305,
    type: "checkbox",
    label: "What kind of glass is it ?",
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
    label: "What kind of glass is it ?",
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
    label: "What kind of glass is it ?",
    options: questionCheckboxItem(898716305, 376748465),
  },
  {
    id: 898716305,
    type: "checkbox",
    label: "What kind of glass is it ?",
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
    label: "What kind of glass is it ?",
    options: what_kind_of_glass_is_it(
      550666794,
      457499850,
      688333930,
      344349515
    ),
  },
];

export default windows;
