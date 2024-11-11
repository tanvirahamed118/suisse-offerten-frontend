const kitchen = [
  {
    id: 348659292,
    type: "checkbox",
    label: "De quels services de construction de cuisine avez-vous besoin ?",
    options: [
      {
        id: 817713234,
        label: "Assemblage d'une cuisine",
        credit: 25,
      },
      {
        id: 104535911,
        label: "Adapter/rénover la cuisine",
        credit: 20,
      },
      {
        id: 538785140,
        label: "Planification de cuisine",
        credit: 35,
      },
      {
        id: 398274967,
        label: "Meubles de cuisine et plans de travail",
        credit: 20,
      },
      {
        id: 819300304,
        label: "Appareils de cuisine (four, lave-vaisselle, etc.)",
        credit: 10,
      },
      {
        id: 589518180,
        label: "Réparations mineures",
        credit: 8,
      },
      {
        id: 285903068,
        label: "Autre",
        credit: 5,
      },
    ],
  },
  {
    id: 817713234,
    type: "checkbox",
    label: "La cuisine est déjà là ?",
    options: [
      {
        id: 824336378,
        label: "Oui, la cuisine est déjà là",
      },
      {
        id: 208200826,
        label: "Non, la cuisine n'est pas encore disponible",
      },
    ],
  },
  {
    id: 824336378,
    type: "multibox",
    mainId: 333233651,
    label: "Quels services doivent être fournis lors du montage ?",
    options: [
      {
        label: "Montage de la cuisine",
      },
      {
        label: "Planification de cuisine",
      },
      {
        label: "Ajuster/assembler le plan de travail",
      },
      {
        label: "Démontage d'une ancienne cuisine",
      },
      {
        label: "Élimination de l'ancienne cuisine",
      },
      {
        label: "Transport de la cuisine",
      },
      {
        label: "Connexions d'appareils électriques",
      },
      {
        label: "Raccordements sanitaires",
      },
    ],
  },
  {
    id: 333233651,
    type: "checkbox",
    label:
      "D'autres travaux de construction sont-ils nécessaires (démolition de murs, pose de carrelage, peinture, etc.) ?",
    options: [
      {
        id: 337001323,
        label: "Oui",
      },
      {
        id: 217037466,
        label: "Non",
      },
    ],
  },
  {
    id: 337001323,
    type: "checkbox",
    label: "De quels types de travaux de construction s'agit-il ?",
    options: [
      {
        label: "Démolir / enlever le mur porteur",
      },
      {
        label: "Démolir / enlever un mur non porteur",
      },
      {
        label: "Travaux de revêtement de sol",
      },
      {
        label: "Travail du panneau",
      },
      {
        label: "Travaux de peinture",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 208200826,
    type: "multibox",
    mainId: 333233651,
    label: "Quels services doivent être fournis lors du montage ?",
    options: [
      {
        id: 333233651,
        label: "Montage de la cuisine",
      },
      {
        label: "Planification de cuisine",
      },
      {
        label: "Ajuster/assembler le plan de travail",
      },
      {
        label: "Démontage d'une ancienne cuisine",
      },
      {
        label: "Élimination de l'ancienne cuisine",
      },
      {
        label: "Transport de la cuisine",
      },
      {
        label: "Connexions d'appareils électriques",
      },
      {
        label: "Raccordements sanitaires",
      },
    ],
  },
  {
    id: 333233651,
    type: "checkbox",
    label:
      "D'autres travaux de construction sont-ils nécessaires (démolition de murs, pose de carrelage, peinture, etc.) ?",
    options: [
      {
        id: 337001323,
        label: "Oui",
      },
      {
        id: 217037466,
        label: "Non",
      },
    ],
  },
  {
    id: 337001323,
    type: "multibox",
    mainId: 333233651,
    label: "Quels services doivent être fournis lors du montage ?",
    options: [
      {
        label: "Démolir / enlever le mur porteur",
      },
      {
        label: "Démolir / enlever un mur non porteur",
      },
      {
        label: "Travaux de revêtement de sol",
      },
      {
        label: "Travail du panneau",
      },
      {
        label: "Travaux de peinture",
      },
      {
        label: "Autre",
      },
    ],
  },
  {
    id: 398274967,
    type: "checkbox",
    label:
      "Avez-vous besoin de services pour des meubles de cuisine ou des plans de travail ?",
    options: [
      {
        id: 716275113,
        label: "Meubles de cuisine",
      },
      {
        id: 183478947,
        label: "Plans de travail",
      },
      {
        id: 793727632,
        label: "Meubles de cuisine et plans de travail",
      },
    ],
  },
  {
    id: 183478947,
    type: "checkbox",
    label: "Quel matériau de plan de travail désirez-vous ?",
    options: [
      {
        label: "Pierre naturelle",
      },
      {
        label: "Pierre artificielle / composite de quartz",
      },
      {
        label: "Stratifié",
      },
      {
        label: "Céramiques / Carreaux",
      },
      {
        label: "Bois",
      },
      {
        label: "Acier inoxydable",
      },
      {
        label: "Autre",
      },
      {
        label: "Je ne suis pas sûr/j'ai besoin de conseils",
      },
    ],
  },
  {
    id: 793727632,
    type: "checkbox",
    label: "Quel matériau de plan de travail désirez-vous ?",
    options: [
      {
        label: "Pierre naturelle",
      },
      {
        label: "Pierre artificielle / composite de quartz",
      },
      {
        label: "Stratifié",
      },
      {
        label: "Céramiques / Carreaux",
      },
      {
        label: "Bois",
      },
      {
        label: "Acier inoxydable",
      },
      {
        label: "Autre",
      },
      {
        label: "Je ne suis pas sûr/j'ai besoin de conseils",
      },
    ],
  },
  {
    id: 819300304,
    type: "checkbox",
    label: "De quel type d'appareil de cuisine s'agit-il ?",
    options: [
      {
        label: "Four",
      },
      {
        label: "Lave-vaisselle",
      },
      {
        label: "Réfrigérateur / congélateur",
      },
      {
        label: "Extracteur de vapeur",
      },
      {
        label: "lavabo",
      },
      {
        label: "Aménagement de cuisine",
      },
      {
        label: "Autre",
      },
    ],
  },
];

export default kitchen;
