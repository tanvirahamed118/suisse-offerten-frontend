import {
  approximately_how_be_painted,
  how_many_sides_roof_painted,
  how_much_facade_should_be_painted,
  how_windows_doors_be_painted,
  questionCheckboxItem,
} from "../../reuse-data";

const painting = [
  {
    id: 456003475,
    type: "checkbox",
    label: "Avez-vous besoin de travaux à l'intérieur ou à l'extérieur ?",
    options: [
      {
        id: 371993087,
        label: "À l'intérieur",
      },
      {
        id: 337017813,
        label: "Dehors",
      },
      {
        id: 579728643,
        label: "Les deux",
      },
      {
        id: 823529625,
        label: "Autre",
        credit: 8,
      },
    ],
  },
  {
    id: 371993087,
    type: "checkbox",
    label:
      "Quelle est environ la surface de l'intérieur qui doit être peinte ?",
    options: approximately_how_be_painted(
      337427819,
      476044913,
      116064328,
      375438194,
      463529902,
      319308657
    ),
  },
  {
    id: 337427819,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 476044913,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 116064328,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 375438194,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 463529902,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 319308657,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 337017813,
    type: "checkbox",
    label: "Sur quels objets extérieurs travailler ?",
    options: [
      {
        id: 884033695,
        label: "Murs / Façades",
      },
      {
        id: 633114179,
        label: "Fenêtres / Portes",
      },
      {
        id: 306272571,
        label: "Toiture / parties de toiture",
      },
      {
        id: 916337039,
        label: "Autre ou plus",
        credit: 10,
      },
    ],
  },
  {
    id: 884033695,
    type: "checkbox",
    label: "Quelle partie de la façade faut-il peindre ?",
    options: how_much_facade_should_be_painted(
      707861797,
      212291551,
      683667360,
      500179643,
      249027990
    ),
  },
  {
    id: 707861797,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(355535528, 290628084),
  },
  {
    id: 355535528,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 290628084,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 212291551,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(307154444, 446857697),
  },
  {
    id: 307154444,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 446857697,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 683667360,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(961307442, 671567440),
  },
  {
    id: 961307442,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 671567440,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 500179643,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 249027990,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },

  {
    id: 633114179,
    type: "checkbox",
    label: "Combien de Fenêtres / Portes doivent être peintes ?",
    options: how_windows_doors_be_painted(202110263, 572983031, 224276824),
  },
  {
    id: 202110263,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 572983031,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 224276824,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 306272571,
    type: "checkbox",
    label: "Combien de côtés du toit faut-il peindre ?",
    options: how_many_sides_roof_painted(594329555, 954081566, 367467860),
  },
  {
    id: 594329555,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 954081566,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 367467860,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 916337039,
    type: "checkbox",
    label: "Quelle est l'ampleur approximative de la commande ?",
    options: [
      {
        label: "Petit (par exemple peindre un mur, une fenêtre, etc.)",
      },
      {
        label: "Moyen (par exemple peindre deux pièces complètes)",
      },
      {
        label:
          "Grand (par exemple, maison unifamiliale, peindre tous les murs intérieurs)",
      },
      {
        label:
          "Très grande taille (par exemple peindre les façades d'immeubles d'habitation)",
      },
    ],
  },
  //  outside
  //   both
  {
    id: 579728643,
    type: "checkbox",
    label: "Quelle est l'ampleur approximative de la commande ?",
    options: approximately_how_be_painted(
      327749512,
      822984558,
      998020876,
      128610529,
      855715728,
      330183729
    ),
  },
  //   only
  {
    id: 327749512,
    type: "checkbox",
    label: "Sur quels objets extérieurs travailler ?",
    options: [
      {
        id: 884033695,
        label: "Murs / Façades",
      },
      {
        id: 633114179,
        label: "Fenêtres / Portes",
      },
      {
        id: 306272571,
        label: "Toiture / parties de toiture",
      },
      {
        id: 916337039,
        label: "Autre ou plus",
        credit: 8,
      },
    ],
  },
  {
    id: 884033695,
    type: "checkbox",
    label: "Quelle partie de la façade faut-il peindre ?",
    options: how_much_facade_should_be_painted(
      707861797,
      212291551,
      683667360,
      500179643,
      249027990
    ),
  },
  {
    id: 707861797,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(355535528, 290628084),
  },
  {
    id: 355535528,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 290628084,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 212291551,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: questionCheckboxItem(307154444, 446857697),
  },
  {
    id: 307154444,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 446857697,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 683667360,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: questionCheckboxItem(961307442, 671567440),
  },
  {
    id: 961307442,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 671567440,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 500179643,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 249027990,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 633114179,
    type: "checkbox",
    label: "Combien de Fenêtres / Portes doivent être peintes ?",
    options: how_windows_doors_be_painted(202110263, 572983031, 224276824),
  },
  {
    id: 202110263,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 572983031,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 224276824,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 306272571,
    type: "checkbox",
    label: "Combien de côtés du toit faut-il peindre ?",
    options: how_many_sides_roof_painted(594329555, 954081566, 367467860),
  },
  {
    id: 594329555,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 954081566,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 367467860,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "checkbox",
    label: "Quelle est la taille totale de la surface à peindre ? ?",
    options: [{ label: "m²" }],
  },
  {
    id: 916337039,
    type: "checkbox",
    label: "Quelle est l'ampleur approximative de la commande ?",
    options: [
      {
        label: "Petit (par exemple peindre un mur, une fenêtre, etc.)",
      },
      {
        label: "Moyen (par exemple peindre deux pièces complètes)",
      },
      {
        label:
          "Grand (par exemple, maison unifamiliale, peindre tous les murs intérieurs)",
      },
      {
        label:
          "Très grande taille (par exemple peindre les façades d'immeubles d'habitation)",
      },
    ],
  },
  //   only
  // up to 5
  {
    id: 822984558,
    type: "checkbox",
    label: "Sur quels objets extérieurs travailler ?",
    options: [
      {
        id: 884033695,
        label: "Murs / Façades",
      },
      {
        id: 633114179,
        label: "Fenêtres / Portes",
      },
      {
        id: 306272571,
        label: "Toiture / parties de toiture",
      },
      {
        id: 916337039,
        label: "Autre ou plus",
      },
    ],
  },
  {
    id: 884033695,
    type: "checkbox",
    label: "Quelle partie de la façade faut-il peindre ?",
    options: how_much_facade_should_be_painted(
      707861797,
      212291551,
      683667360,
      500179643,
      249027990
    ),
  },
  {
    id: 707861797,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(355535528, 290628084),
  },
  {
    id: 355535528,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 290628084,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 212291551,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(307154444, 446857697),
  },
  {
    id: 307154444,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 446857697,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 683667360,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(961307442, 671567440),
  },
  {
    id: 961307442,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 671567440,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 500179643,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 249027990,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 633114179,
    type: "checkbox",
    label: "Combien de Fenêtres / Portes doivent être peintes ?",
    options: how_windows_doors_be_painted(202110263, 572983031, 224276824),
  },
  {
    id: 202110263,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 572983031,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 224276824,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 306272571,
    type: "checkbox",
    label: "Combien de côtés du toit faut-il peindre ?",
    options: how_many_sides_roof_painted(594329555, 954081566, 367467860),
  },
  {
    id: 594329555,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 954081566,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 367467860,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 916337039,
    type: "checkbox",
    label: "Quelle est l'ampleur approximative de la commande ?",
    options: [
      {
        label: "Petit (par exemple peindre un mur, une fenêtre, etc.)",
      },
      {
        label: "Moyen (par exemple peindre deux pièces complètes)",
      },
      {
        label:
          "Grand (par exemple, maison unifamiliale, peindre tous les murs intérieurs)",
      },
      {
        label:
          "Très grande taille (par exemple peindre les façades d'immeubles d'habitation)",
      },
    ],
  },
  // up to 5
  // up to 6
  {
    id: 998020876,
    type: "checkbox",
    label: "Sur quels objets extérieurs travailler ?",
    options: [
      {
        id: 884033695,
        label: "Murs / Façades",
      },
      {
        id: 633114179,
        label: "Fenêtres / Portes",
      },
      {
        id: 306272571,
        label: "Toiture / parties de toiture",
      },
      {
        id: 916337039,
        label: "Autre ou plus",
      },
    ],
  },
  {
    id: 884033695,
    type: "checkbox",
    label: "Quelle partie de la façade faut-il peindre ?",
    options: how_much_facade_should_be_painted(
      707861797,
      212291551,
      683667360,
      500179643,
      249027990
    ),
  },
  {
    id: 707861797,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(355535528, 290628084),
  },
  {
    id: 355535528,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 290628084,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 212291551,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(307154444, 446857697),
  },
  {
    id: 307154444,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 446857697,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 683667360,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(961307442, 671567440),
  },
  {
    id: 961307442,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 671567440,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 500179643,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 249027990,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 633114179,
    type: "checkbox",
    label: "Combien de Fenêtres / Portes doivent être peintes ?",
    options: how_windows_doors_be_painted(202110263, 572983031, 224276824),
  },
  {
    id: 202110263,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 572983031,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 224276824,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 306272571,
    type: "checkbox",
    label: "Combien de côtés du toit faut-il peindre ?",
    options: how_many_sides_roof_painted(594329555, 954081566, 367467860),
  },
  {
    id: 594329555,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 954081566,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 367467860,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 916337039,
    type: "checkbox",
    label: "Quelle est l'ampleur approximative de la commande ?",
    options: [
      {
        label: "Petit (par exemple peindre un mur, une fenêtre, etc.)",
      },
      {
        label: "Moyen (par exemple peindre deux pièces complètes)",
      },
      {
        label:
          "Grand (par exemple, maison unifamiliale, peindre tous les murs intérieurs)",
      },
      {
        label:
          "Très grande taille (par exemple peindre les façades d'immeubles d'habitation)",
      },
    ],
  },
  // up to 6
  // up to 11
  {
    id: 128610529,
    type: "checkbox",
    label: "Sur quels objets extérieurs travailler ?",
    options: [
      {
        id: 884033695,
        label: "Murs / Façades",
      },
      {
        id: 633114179,
        label: "Fenêtres / Portes",
      },
      {
        id: 306272571,
        label: "Toiture / parties de toiture",
      },
      {
        id: 916337039,
        label: "Autre ou plus",
      },
    ],
  },
  {
    id: 884033695,
    type: "checkbox",
    label: "Quelle partie de la façade faut-il peindre ?",
    options: how_much_facade_should_be_painted(
      707861797,
      212291551,
      683667360,
      500179643,
      249027990
    ),
  },
  {
    id: 707861797,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(355535528, 290628084),
  },
  {
    id: 355535528,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 290628084,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 212291551,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(307154444, 446857697),
  },
  {
    id: 307154444,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 446857697,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 683667360,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(961307442, 671567440),
  },
  {
    id: 961307442,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 671567440,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 500179643,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 249027990,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 633114179,
    type: "checkbox",
    label: "Combien de Fenêtres / Portes doivent être peintes ?",
    options: how_windows_doors_be_painted(202110263, 572983031, 224276824),
  },
  {
    id: 202110263,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 572983031,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 224276824,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 306272571,
    type: "checkbox",
    label: "Combien de côtés du toit faut-il peindre ?",
    options: how_many_sides_roof_painted(594329555, 954081566, 367467860),
  },
  {
    id: 594329555,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 954081566,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 367467860,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 916337039,
    type: "checkbox",
    label: "Quelle est l'ampleur approximative de la commande ?",
    options: [
      {
        label: "Petit (par exemple peindre un mur, une fenêtre, etc.)",
      },
      {
        label: "Moyen (par exemple peindre deux pièces complètes)",
      },
      {
        label:
          "Grand (par exemple, maison unifamiliale, peindre tous les murs intérieurs)",
      },
      {
        label:
          "Très grande taille (par exemple peindre les façades d'immeubles d'habitation)",
      },
    ],
  },
  // up to 11
  // up to 21
  {
    id: 855715728,
    type: "checkbox",
    label: "Sur quels objets extérieurs travailler ?",
    options: [
      {
        id: 884033695,
        label: "Murs / Façades",
      },
      {
        id: 633114179,
        label: "Fenêtres / Portes",
      },
      {
        id: 306272571,
        label: "Toiture / parties de toiture",
      },
      {
        id: 916337039,
        label: "Autre ou plus",
      },
    ],
  },
  {
    id: 884033695,
    type: "checkbox",
    label: "Quelle partie de la façade faut-il peindre ?",
    options: how_much_facade_should_be_painted(
      707861797,
      212291551,
      683667360,
      500179643,
      249027990
    ),
  },
  {
    id: 707861797,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(355535528, 290628084),
  },
  {
    id: 355535528,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 290628084,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 212291551,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(307154444, 446857697),
  },
  {
    id: 307154444,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 446857697,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 683667360,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(961307442, 671567440),
  },
  {
    id: 961307442,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 671567440,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 500179643,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 249027990,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 633114179,
    type: "checkbox",
    label: "Combien de Fenêtres / Portes doivent être peintes ?",
    options: how_windows_doors_be_painted(202110263, 572983031, 224276824),
  },
  {
    id: 202110263,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 572983031,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 224276824,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 306272571,
    type: "checkbox",
    label: "Combien de côtés du toit faut-il peindre ?",
    options: how_many_sides_roof_painted(594329555, 954081566, 367467860),
  },
  {
    id: 594329555,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 954081566,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 367467860,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 916337039,
    type: "checkbox",
    label: "Quelle est l'ampleur approximative de la commande ?",
    options: [
      {
        label: "Petit (par exemple peindre un mur, une fenêtre, etc.)",
      },
      {
        label: "Moyen (par exemple peindre deux pièces complètes)",
      },
      {
        label:
          "Grand (par exemple, maison unifamiliale, peindre tous les murs intérieurs)",
      },
      {
        label:
          "Très grande taille (par exemple peindre les façades d'immeubles d'habitation)",
      },
    ],
  },
  // up to 21
  // up to 31
  {
    id: 330183729,
    type: "checkbox",
    label: "Sur quels objets extérieurs travailler ?",
    options: [
      {
        id: 884033695,
        label: "Murs / Façades",
      },
      {
        id: 633114179,
        label: "Fenêtres / Portes",
      },
      {
        id: 306272571,
        label: "Toiture / parties de toiture",
      },
      {
        id: 916337039,
        label: "Autre ou plus",
      },
    ],
  },
  {
    id: 884033695,
    type: "checkbox",
    label: "Quelle partie de la façade faut-il peindre ?",
    options: how_much_facade_should_be_painted(
      707861797,
      212291551,
      683667360,
      500179643,
      249027990
    ),
  },
  {
    id: 707861797,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(355535528, 290628084),
  },
  {
    id: 355535528,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 290628084,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 212291551,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(307154444, 446857697),
  },
  {
    id: 307154444,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 446857697,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 683667360,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(961307442, 671567440),
  },
  {
    id: 961307442,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 671567440,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 500179643,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 249027990,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 633114179,
    type: "checkbox",
    label: "Combien de Fenêtres / Portes doivent être peintes ?",
    options: how_windows_doors_be_painted(202110263, 572983031, 224276824),
  },
  {
    id: 202110263,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 572983031,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 224276824,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 306272571,
    type: "checkbox",
    label: "Combien de côtés du toit faut-il peindre ?",
    options: how_many_sides_roof_painted(594329555, 954081566, 367467860),
  },
  {
    id: 594329555,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 954081566,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 367467860,
    type: "checkbox",
    label: "Y a-t-il déjà un échafaudage en place ?",
    options: questionCheckboxItem(195895199, 341834912),
  },
  {
    id: 195895199,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 341834912,
    type: "inputNumber",
    label: "Quelle est la taille totale de la surface à peindre ?",
    options: [{ label: "m²" }],
  },
  {
    id: 916337039,
    type: "checkbox",
    label: "Quelle est l'ampleur approximative de la commande ?",
    options: [
      {
        label: "Petit (par exemple peindre un mur, une fenêtre, etc.)",
      },
      {
        label: "Moyen (par exemple peindre deux pièces complètes)",
      },
      {
        label:
          "Grand (par exemple, maison unifamiliale, peindre tous les murs intérieurs)",
      },
      {
        label:
          "Très grande taille (par exemple peindre les façades d'immeubles d'habitation)",
      },
    ],
  },
  // up to 31
  //   both
  // other
  // other
];

export default painting;
