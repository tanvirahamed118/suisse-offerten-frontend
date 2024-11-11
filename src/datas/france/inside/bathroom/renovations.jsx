const renovations = [
  {
    id: 683493762,
    type: "checkbox",
    label: "Quels travaux faut-il réaliser ?",
    options: [
      {
        id: 780693030,
        label: "Quels travaux faut-il réaliser ?",
        des: "Rénovation / installation d'une salle de bain",
      },
      {
        id: 677229573,
        label:
          "Changement complet d'une salle de bain, ou remplacement d'une salle de bain et rénovation",
        des: "par exemple remplacer une douche, une baignoire, des toilettes, un lavabo, etc.",
      },
      {
        id: 265742934,
        label: "Réparation",
        des: "Par exemple, canalisations, fuites, eaux usées, panneaux, etc.",
      },
      {
        id: 324202133,
        label: "Plaques",
        des: "Carreler uniquement les sols ou les murs",
      },
      {
        id: 163437092,
        label: "Autre",
        credit: 5,
      },
    ],
  },
  {
    id: 780693030,
    type: "checkbox",
    label: "Combien de salles de bain doivent être rénovées/installées ?",
    options: [
      {
        id: 328244547,
        label: "1",
      },
      {
        id: 953718027,
        label: "2 ou plus",
      },
    ],
  },
  //   1
  {
    id: 328244547,
    type: "checkbox",
    label: "Quel type de salle de bain ?",
    options: [
      {
        id: 458925628,
        label: "Salle de bain principale",
      },
      {
        id: 880710682,
        label: "salle de bain privée",
      },
      {
        id: 884608829,
        label: "Salle de bain pour invités",
      },
      {
        id: 797322370,
        label: "Autre",
      },
    ],
  },
  //   main
  {
    id: 458925628,
    type: "checkbox",
    label: "Quelle est l'ampleur des travaux ?",
    options: [
      {
        id: 146207066,
        label: "Rénovation complète de salle de bain",
        des: "Remplacer la salle de bain et tout ce qui y est associé (par exemple, le carrelage, le sol, le plafond, l'électricité)",
      },
      {
        id: 941557853,
        label: "Remplacement d'une salle de bain",
        des: "Remplacer la salle de bain sans carrelage, plancher, électricité, etc.",
      },
      {
        id: 413876972,
        label: "Petits travaux",
        des: "Remplacer un seul équipement, par exemple une douche ou une baignoire",
      },
    ],
  },
  //   comprehensive
  {
    id: 146207066,
    type: "checkbox",
    label: "Est-ce que tous les matériaux sont déjà disponibles ?",
    options: [
      {
        id: 381456876,
        label: "Oui",
      },
      {
        id: 133670142,
        label: "Non",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  //   comprehensive
  // replacion
  {
    id: 941557853,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 381456876,
        label: "Oui",
      },
      {
        id: 133670142,
        label: "Non",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  // replacion
  // smaller
  {
    id: 413876972,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 381456876,
        label: "Oui",
      },
      {
        id: 133670142,
        label: "Non",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  // smaller
  //   main
  // private
  {
    id: 880710682,
    type: "checkbox",
    label: "Quelle est l'ampleur des travaux ?",
    options: [
      {
        id: 146207066,
        label: "Rénovation complète de salle de bain",
        des: "Remplacer la salle de bain et tout ce qui y est associé (par exemple, le carrelage, le sol, le plafond, l'électricité)",
      },
      {
        id: 941557853,
        label: "Remplacement d'une salle de bain",
        des: "Remplacer la salle de bain sans carrelage, plancher, électricité, etc.",
      },
      {
        id: 413876972,
        label: "Petits travaux",
        des: "Remplacer un seul équipement, par exemple une douche ou une baignoire",
      },
    ],
  },
  //   comprehensive
  {
    id: 146207066,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 381456876,
        label: "Oui",
      },
      {
        id: 133670142,
        label: "Non",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  //   comprehensive
  // replacion
  {
    id: 941557853,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 381456876,
        label: "Oui",
      },
      {
        id: 133670142,
        label: "Non",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  // replacion
  // smaller
  {
    id: 413876972,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 381456876,
        label: "Oui",
      },
      {
        id: 133670142,
        label: "Non",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  // smaller
  // private
  // guest
  {
    id: 884608829,
    type: "checkbox",
    label: "Quelle est l'ampleur des travaux ?",
    options: [
      {
        id: 146207066,
        label: "Rénovation complète de salle de bain",
        des: "Remplacer la salle de bain et tout ce qui y est associé (par exemple, le carrelage, le sol, le plafond, l'électricité)",
      },
      {
        id: 941557853,
        label: "Remplacement d'une salle de bain",
        des: "Remplacer la salle de bain sans carrelage, plancher, électricité, etc.",
      },
      {
        id: 413876972,
        label: "Petits travaux",
        des: "Remplacer un seul équipement, par exemple une douche ou une baignoire",
      },
    ],
  },
  //   comprehensive
  {
    id: 146207066,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 381456876,
        label: "Oui",
      },
      {
        id: 133670142,
        label: "Non",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  //   comprehensive
  // replacion
  {
    id: 941557853,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 381456876,
        label: "Oui",
      },
      {
        id: 133670142,
        label: "Non",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  // replacion
  // smaller
  {
    id: 413876972,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 381456876,
        label: "Oui",
      },
      {
        id: 133670142,
        label: "Non",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  // smaller
  // guest
  //   1

  // 2
  {
    id: 953718027,
    type: "checkbox",
    label: "Quel type de salle de bain ?",
    options: [
      {
        id: 458925628,
        label: "Salle de bain principale",
      },
      {
        id: 880710682,
        label: "salle de bain privée",
      },
      {
        id: 884608829,
        label: "Salle de bain pour invités",
      },
      {
        id: 797322370,
        label: "Autre",
      },
    ],
  },
  //   main
  {
    id: 458925628,
    type: "checkbox",
    label: "Quelle est l'ampleur des travaux ?",
    options: [
      {
        id: 146207066,
        label: "Rénovation complète de salle de bain",
        des: "Remplacer la salle de bain et tout ce qui y est associé (par exemple, le carrelage, le sol, le plafond, l'électricité)",
      },
      {
        id: 941557853,
        label: "Remplacement d'une salle de bain",
        des: "Remplacer la salle de bain sans carrelage, plancher, électricité, etc.",
      },
      {
        id: 413876972,
        label: "Petits travaux",
        des: "Remplacer un seul équipement, par exemple une douche ou une baignoire",
      },
    ],
  },
  //   comprehensive
  {
    id: 146207066,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 381456876,
        label: "Oui",
      },
      {
        id: 133670142,
        label: "Non",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  //   comprehensive
  // replacion
  {
    id: 941557853,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 381456876,
        label: "Oui",
      },
      {
        id: 133670142,
        label: "Non",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  // replacion
  // smaller
  {
    id: 413876972,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 381456876,
        label: "Oui",
      },
      {
        id: 133670142,
        label: "Non",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  // smaller
  //   main
  // private
  {
    id: 880710682,
    type: "checkbox",
    label: "Quelle est l'ampleur des travaux ?",
    options: [
      {
        id: 146207066,
        label: "Rénovation complète de salle de bain",
        des: "Remplacer la salle de bain et tout ce qui y est associé (par exemple, le carrelage, le sol, le plafond, l'électricité)",
      },
      {
        id: 941557853,
        label: "Remplacement d'une salle de bain",
        des: "Remplacer la salle de bain sans carrelage, plancher, électricité, etc.",
      },
      {
        id: 413876972,
        label: "Petits travaux",
        des: "Remplacer un seul équipement, par exemple une douche ou une baignoire",
      },
    ],
  },
  //   comprehensive
  {
    id: 146207066,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 381456876,
        label: "Oui",
      },
      {
        id: 133670142,
        label: "Non",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  //   comprehensive
  // replacion
  {
    id: 941557853,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 381456876,
        label: "Oui",
      },
      {
        id: 133670142,
        label: "Non",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  // replacion
  // smaller
  {
    id: 413876972,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 381456876,
        label: "Oui",
      },
      {
        id: 133670142,
        label: "Non",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  // smaller
  // private
  // guest
  {
    id: 884608829,
    type: "checkbox",
    label: "Quelle est l'ampleur des travaux ?",
    options: [
      {
        id: 146207066,
        label: "Rénovation complète de salle de bain",
        des: "Remplacer la salle de bain et tout ce qui y est associé (par exemple, le carrelage, le sol, le plafond, l'électricité)",
      },
      {
        id: 941557853,
        label: "Remplacement d'une salle de bain",
        des: "Remplacer la salle de bain sans carrelage, plancher, électricité, etc.",
      },
      {
        id: 413876972,
        label: "Petits travaux",
        des: "Remplacer un seul équipement, par exemple une douche ou une baignoire",
      },
    ],
  },
  //   comprehensive
  {
    id: 146207066,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 381456876,
        label: "Oui",
      },
      {
        id: 133670142,
        label: "Non",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  //   comprehensive
  // replacion
  {
    id: 941557853,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 381456876,
        label: "Oui",
      },
      {
        id: 133670142,
        label: "Non",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  // replacion
  // smaller
  {
    id: 413876972,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 381456876,
        label: "Oui",
      },
      {
        id: 133670142,
        label: "Non",
      },
    ],
  },
  {
    id: 381456876,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 133670142,
    type: "checkbox",
    label: "Le contrat implique-t-il des travaux de construction importants ?",
    options: [
      {
        id: 725552152,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 697053991,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 725552152,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 697053991,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  // smaller
  // guest
  // 2

  // Installing
  {
    id: 677229573,
    type: "multibox",
    mainId: 465519550,
    label: "Quels accessoires doivent être remplacés ?",
    options: [
      {
        label: "Baignoire",
      },
      {
        label: "Douche",
      },
      {
        label: "Cabine de douche",
      },
      {
        label: "toilettes",
      },
      {
        label: "Lavabo de salle de bain",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 465519550,
    type: "checkbox",
    label: "Avez-vous besoin de travaux supplémentaires ?",
    options: [
      {
        id: 239743071,
        label: "Oui",
      },
      {
        id: 745496635,
        label: "Non",
      },
    ],
  },
  {
    id: 239743071,
    type: "checkbox",
    label:
      "Les sanitaires, carrelages, etc. (matériaux) sont-ils déjà en place ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 745496635,
    type: "checkbox",
    label:
      "Les sanitaires, carrelages, etc. (matériaux) sont-ils déjà en place ?",
    options: [
      {
        label: "Oui, ça existe déjà.",
      },
      {
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  // Installing

  // repair
  {
    id: 465519550,
    type: "checkbox",
    label:
      "Les sanitaires, carrelages, etc. (matériaux) sont-ils déjà en place ?",
    options: [
      {
        id: 561008128,
        label: "Oui, ça existe déjà.",
      },
      {
        id: 559758229,
        label: "Non, il faut encore se le procurer.",
      },
    ],
  },
  {
    id: 561008128,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  {
    id: 559758229,
    type: "checkbox",
    label: "Taille approximative de la salle de bain :",
    options: [
      {
        label: "jusqu'à 5m2",
        credit: 10,
      },
      {
        label: "5-10 m2",
        credit: 15,
      },
      {
        label: "10m2 ou plus",
        credit: 25,
      },
    ],
  },
  // repair

  // plates
  {
    id: 324202133,
    type: "checkbox",
    label: "De quel type de travaux de panneau avez-vous besoin ?",
    options: [
      {
        label: "Repose/remplacement de carrelage",
        credit: 20,
      },
      {
        label: "Réparation de tuiles",
        credit: 10,
      },
      {
        label: "Rejointoiement",
        credit: 10,
      },
      {
        label: "Autre",
        credit: 5,
      },
    ],
  },
  // plates
];

export default renovations;
