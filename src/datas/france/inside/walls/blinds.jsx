import { how_manyshuttersare_there } from "../../reuse-data";

const blinds = [
  {
    id: 125768399,
    type: "checkbox",
    label:
      "De quel type de service de stores / volets roulants avez-vous besoin ?",
    options: [
      {
        id: 371261802,
        label: "Remontage ou remplacement",
        des: "Pose de stores pare-soleil, remplacement de volets roulants, etc.",
      },
      {
        id: 269830997,
        label: "Réparation",
        des: "Cordon de traction déchiré, remplacer le tissu du store, manivelle/moteur bloqué, etc.",
      },
      {
        id: 518700481,
        label: "Nettoyage",
        des: "Nettoyage de stores pare-soleil, lames, coffres de volets roulants, etc.",
      },
      {
        id: 915717690,
        label: "Rénovation électrique",
        des: "Conversion to electric operation",
      },
      {
        id: 587723754,
        label: "Autre",
        credit: 5,
      },
    ],
  },
  {
    id: 371261802,
    type: "checkbox",
    label: "Combien y a-t-il de stores / volets ?",
    options: how_manyshuttersare_there,
  },
  {
    id: 269830997,
    type: "multibox",
    label: "Quels types de travaux de réparation sont nécessaires ?",
    mainId: 247188590,
    options: [
      { label: "Remplacer le tissu du store pare-soleil" },
      { label: "Ligaments déchirés" },
      { label: "Lattes défectueuses" },
      { label: "Difficulté à ouvrir ou à fermer" },
      { label: "Entraînement électrique défectueux" },
      { label: "Autre" },
    ],
  },
  {
    id: 247188590,
    type: "checkbox",
    label: "Combien y a-t-il de stores / volets ?",
    options: how_manyshuttersare_there,
  },
  {
    id: 915717690,
    type: "checkbox",
    label: "Combien y a-t-il de stores / volets ?",
    options: how_manyshuttersare_there,
  },
  {
    id: 518700481,
    type: "checkbox",
    label: "Combien de fenêtres faut-il nettoyer ?",
    options: [
      { id: 431897744, label: "Nettoyer uniquement les stores" },
      { id: 145979106, label: "Nettoyage des stores et des fenêtres" },
    ],
  },
  {
    id: 431897744,
    type: "checkbox",
    label: "Combien de stores/volets faut-il nettoyer ?",
    options: [
      { id: 870406207, label: "1 à 2", credit: 4 },
      { id: 443853640, label: "3 à 4", credit: 8 },
      { id: 970611313, label: "5 à 6", credit: 15 },
      { id: 159569508, label: "10 ou plus", credit: 35 },
    ],
  },
  {
    id: 145979106,
    type: "checkbox",
    label: "Combien de stores/volets faut-il nettoyer ?",
    options: [
      { id: 870406207, label: "1 à 2", credit: 4 },
      { id: 443853640, label: "3 à 4", credit: 8 },
      { id: 970611313, label: "5 à 6", credit: 15 },
      { id: 159569508, label: "10 ou plus", credit: 35 },
    ],
  },
  {
    id: 870406207,
    type: "multibox",
    label: "De quel type de stores s'agit-il ?",
    options: [
      { label: "Stores / stores pare-soleil en tissu" },
      { label: "Stores / volets roulants (intérieur)" },
      { label: "Stores / volets roulants (extérieur)" },
      { label: "Volet de fenêtre (extérieur)" },
      { label: "Autre" },
    ],
  },
  {
    id: 443853640,
    type: "multibox",
    label: "De quel type de stores s'agit-il ?",
    options: [
      { label: "Stores / stores pare-soleil en tissu" },
      { label: "Stores / volets roulants (intérieur)" },
      { label: "Stores / volets roulants (extérieur)" },
      { label: "Volet de fenêtre (extérieur)" },
      { label: "Autre" },
    ],
  },
  {
    id: 970611313,
    type: "multibox",
    label: "De quel type de stores s'agit-il ?",
    options: [
      { label: "Stores / stores pare-soleil en tissu" },
      { label: "Stores / volets roulants (intérieur)" },
      { label: "Stores / volets roulants (extérieur)" },
      { label: "Volet de fenêtre (extérieur)" },
      { label: "Autre" },
    ],
  },
  {
    id: 159569508,
    type: "multibox",
    label: "De quel type de stores s'agit-il ?",
    options: [
      { label: "Stores / stores pare-soleil en tissu" },
      { label: "Stores / volets roulants (intérieur)" },
      { label: "Stores / volets roulants (extérieur)" },
      { label: "Volet de fenêtre (extérieur)" },
      { label: "Autre" },
    ],
  },
];
export default blinds;
