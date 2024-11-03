import {
  how_many_be_cleaned,
  how_many_blinds_shutters,
  what_type_blinds_are_they,
} from "../../reuse-data";

const blindsRoller = [
  {
    id: 715426823,
    type: "checkbox",
    label:
      "De quel type de service de stores / volets roulants avez-vous besoin ?",
    options: [
      {
        id: 487849105,
        label: "Remontage ou remplacement",
        des: "Pose de stores pare-soleil, remplacement de volets roulants, etc.",
      },
      {
        id: 912321654,
        label: "Réparation",
        des: "Cordon de traction déchiré, remplacer le tissu du store, manivelle/moteur bloqué, etc.",
      },
      {
        id: 700590038,
        label: "Nettoyage",
        des: "Nettoyage de stores pare-soleil, lames, coffres de volets roulants, etc.",
      },
      {
        id: 206178680,
        label: "Rénovation électrique",
        des: "Conversion au fonctionnement électrique",
      },
      {
        id: 614798495,
        label: "Autre",
        credit: 5,
      },
    ],
  },
  {
    id: 487849105,
    type: "checkbox",
    label: "Combien y a-t-il de stores / volets ?",
    options: how_many_blinds_shutters,
  },
  {
    id: 206178680,
    type: "checkbox",
    label: "Combien y a-t-il de stores / volets ?",
    options: how_many_blinds_shutters,
  },
  {
    id: 912321654,
    type: "multibox",
    mainId: 277043516,
    label:
      "De quel type de service de stores / volets roulants avez-vous besoin ?",
    options: [
      {
        label: "Remplacer le tissu du store pare-soleil",
      },
      {
        label: "Ligaments déchirés",
      },
      {
        label: "Lattes défectueuses",
      },
      {
        label: "Difficulté à ouvrir ou à fermer",
      },
      {
        label: "Entraînement électrique défectueux",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 277043516,
    type: "checkbox",
    label: "Combien y a-t-il de stores / volets ?",
    options: how_many_blinds_shutters,
  },
  {
    id: 689289633,
    type: "checkbox",
    label: "Nettoyer les stores et les fenêtres ?",
    options: [
      {
        id: 791979535,
        label: "Nettoyer uniquement les stores",
      },
      {
        id: 403175916,
        label: "Nettoyage des stores et des fenêtres",
      },
    ],
  },
  {
    id: 791979535,
    type: "checkbox",
    label: "Combien de stores / volets faut-il nettoyer ?",
    options: how_many_be_cleaned(502391050, 117385925, 685137619, 601813141),
  },
  {
    id: 502391050,
    type: "multibox",
    label: "De quel type de stores s'agit-il ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 117385925,
    type: "multibox",
    label: "De quel type de stores s'agit-il ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 685137619,
    type: "multibox",
    label: "De quel type de stores s'agit-il ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 601813141,
    type: "multibox",
    label: "De quel type de stores s'agit-il ?",
    options: what_type_blinds_are_they,
  },

  {
    id: 403175916,
    type: "checkbox",
    label: "Nettoyer les stores et les fenêtres ?",
    options: how_many_be_cleaned(502391050, 117385925, 685137619, 601813141),
  },
  {
    id: 502391050,
    type: "checkbox",
    label: "De quel type de stores s'agit-il ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 117385925,
    type: "checkbox",
    label: "De quel type de stores s'agit-il ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 685137619,
    type: "checkbox",
    label: "De quel type de stores s'agit-il ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 601813141,
    type: "checkbox",
    label: "De quel type de stores s'agit-il ?",
    options: what_type_blinds_are_they,
  },
  {
    id: 700590038,
    type: "checkbox",
    label: "Combien de fenêtres faut-il nettoyer ?",
    options: [
      {
        id: 791979535,
        label: "Nettoyer uniquement les magasins",
      },
      {
        id: 403175916,
        label: "Nettoyage des stores et des fenêtres",
      },
    ],
  },
];

export default blindsRoller;
