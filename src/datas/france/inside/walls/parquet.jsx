import {
  in_how_many_work_done,
  is_the_flooring_already_in_place,
  what_maintenance_work_is_required,
  what_type_should_be_laid,
} from "../../reuse-data";

const parquet = [
  {
    id: 147450429,
    type: "checkbox",
    label: "De quel type de travaux de revêtement de sol avez-vous besoin ?",
    options: [
      {
        id: 148083577,
        label: "Gênée",
        des: "Pose de parquets neufs, vinyle, moquette, etc.",
      },
      {
        id: 647226157,
        label: "Maintenir",
        des: "Ponçage, scellement, huilage, nettoyage, etc.",
      },
      {
        id: 374867792,
        label: "Réparer / régler",
        des: "Réparer les bosses/rayures, réparer les dégâts d'eau, tailler les tapis, etc.",
        credit: 10,
      },
      {
        id: 908792547,
        label: "Autre",
        credit: 8,
      },
    ],
  },
  {
    id: 148083577,
    type: "checkbox",
    label: "Quel type de revêtement de sol faut-il poser ?",
    options: what_type_should_be_laid(
      745644994,
      771636241,
      505674779,
      155729722,
      627083597,
      252135875,
      274033257
    ),
  },
  {
    id: 745644994,
    type: "checkbox",
    label: "Le revêtement de sol est-il déjà en place ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 771636241,
    type: "checkbox",
    label: "Le revêtement de sol est-il déjà en place ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 505674779,
    type: "checkbox",
    label: "Le revêtement de sol est-il déjà en place ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 155729722,
    type: "checkbox",
    label: "Le revêtement de sol est-il déjà en place ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 627083597,
    type: "checkbox",
    label: "Le revêtement de sol est-il déjà en place ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 252135875,
    type: "checkbox",
    label: "Le revêtement de sol est-il déjà en place ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 274033257,
    type: "checkbox",
    label: "Le revêtement de sol est-il déjà en place ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 685933575,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      614797205,
      119374264,
      273307415,
      656771972,
      454792623,
      317957200
    ),
  },
  {
    id: 910471184,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      614797205,
      119374264,
      273307415,
      656771972,
      454792623,
      317957200
    ),
  },
  {
    id: 614797205,
    type: "inputNumber",
    mainId: 601072886,
    label:
      "Quelle est approximativement la superficie de la surface au sol requise pour les travaux ?",
    options: [{ label: "Surface habitable en m²" }],
  },
  {
    id: 119374264,
    type: "inputNumber",
    mainId: 601072886,
    label:
      "Quelle est approximativement la superficie de la surface au sol requise pour les travaux ?",
    options: [{ label: "Surface habitable en m²" }],
  },
  {
    id: 273307415,
    type: "inputNumber",
    mainId: 601072886,
    label:
      "Quelle est approximativement la superficie de la surface au sol requise pour les travaux ?",
    options: [{ label: "Surface habitable en m²" }],
  },
  {
    id: 656771972,
    type: "inputNumber",
    mainId: 601072886,
    label:
      "Quelle est approximativement la superficie de la surface au sol requise pour les travaux ?",
    options: [{ label: "Surface habitable en m²" }],
  },
  {
    id: 454792623,
    type: "inputNumber",
    mainId: 601072886,
    label:
      "Quelle est approximativement la superficie de la surface au sol requise pour les travaux ?",
    options: [{ label: "Surface habitable en m²" }],
  },
  {
    id: 317957200,
    type: "inputNumber",
    mainId: 601072886,
    label:
      "Quelle est approximativement la superficie de la surface au sol requise pour les travaux ?",
    options: [{ label: "Surface habitable en m²" }],
  },
  {
    id: 601072889,
    type: "checkbox",
    label: "Faut-il également installer des plinthes ?",
    options: [
      {
        label:
          "Oui, des plinthes doivent être installées dans toutes les pièces",
      },
      {
        label:
          "Les plinthes ne doivent être installées que dans certaines pièces",
      },
      {
        label: "Non, les plinthes ne sont pas nécessaires",
      },
    ],
  },
  {
    id: 647226157,
    type: "checkbox",
    label: "Quel type de service est nécessaire ?",
    options: [
      {
        id: 592344238,
        label: "Parquet",
      },
      {
        id: 162668848,
        label: "Bois massif",
      },
      {
        id: 418572376,
        label: "Tapis",
      },

      {
        label: "Autre",
        credit: 8,
      },
    ],
  },
  //   parquet
  {
    id: 592344238,
    type: "checkbox",
    label: "Quel type de sol faut-il entretenir ?",
    options: what_maintenance_work_is_required(
      786785618,
      362485650,
      793550051,
      659741359,
      552234277
    ),
  },
  {
    id: 786785618,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  {
    id: 362485650,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  {
    id: 793550051,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  {
    id: 659741359,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  {
    id: 552234277,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  //   parquet
  // solid wood
  {
    id: 162668848,
    type: "checkbox",
    label: "Quel type de sol faut-il entretenir ?",
    options: what_maintenance_work_is_required(
      786785618,
      362485650,
      793550051,
      659741359,
      552234277
    ),
  },
  {
    id: 786785618,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  {
    id: 362485650,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  {
    id: 793550051,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  {
    id: 659741359,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  {
    id: 552234277,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  // solid wood
  // carport

  {
    id: 418572376,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      1952627539,
      2679416897,
      6321692515,
      3968385664,
      9536568502,
      3148202811
    ),
  },
  {
    id: 1952627539,
    type: "inputNumber",
    label:
      "Quelle est approximativement la superficie de la surface au sol requise pour les travaux ?",
    options: [{ label: "Surface habitable en m²" }],
  },
  {
    id: 2679416897,
    type: "inputNumber",
    label:
      "Quelle est approximativement la superficie de la surface au sol requise pour les travaux ?",
    options: [{ label: "Surface habitable en m²" }],
  },
  {
    id: 6321692515,
    type: "inputNumber",
    label:
      "Quelle est approximativement la superficie de la surface au sol requise pour les travaux ?",
    options: [{ label: "Surface habitable en m²" }],
  },
  {
    id: 3968385664,
    type: "inputNumber",
    label:
      "Quelle est approximativement la superficie de la surface au sol requise pour les travaux ?",
    options: [{ label: "Surface habitable en m²" }],
  },
  {
    id: 9536568502,
    type: "inputNumber",
    label:
      "Quelle est approximativement la superficie de la surface au sol requise pour les travaux ?",
    options: [{ label: "Surface habitable en m²" }],
  },
  {
    id: 3148202811,
    type: "inputNumber",
    label:
      "Quelle est approximativement la superficie de la surface au sol requise pour les travaux ?",
    options: [{ label: "Surface habitable en m²" }],
  },
  {
    id: 362485650,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  {
    id: 793550051,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  {
    id: 659741359,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  {
    id: 552234277,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  // carport
  // Autre
  {
    id: 348107495,
    type: "checkbox",
    label: "Quel type de sol faut-il entretenir ?",
    options: what_maintenance_work_is_required(
      786785618,
      362485650,
      793550051,
      659741359,
      552234277
    ),
  },
  {
    id: 786785618,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  {
    id: 362485650,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  {
    id: 793550051,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  {
    id: 659741359,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  {
    id: 552234277,
    type: "checkbox",
    label: "Dans combien de pièces souhaitez-vous effectuer des travaux ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  // Autre
  {
    id: 647726951,
    type: "inputNumber",
    mainId: 601072886,
    label:
      "Quelle est approximativement la superficie de la surface au sol requise pour les travaux ?",
    options: [{ label: "Surface habitable en m²" }],
  },
  {
    id: 601072886,
    type: "multibox",
    label: "Caractéristiques du plancher installé",
    options: [
      { label: "Dommages (par exemple rayures, taches, décoloration)" },
      { label: "A été poncé dans le passé" },
      { label: "Écarts entre les éléments individuels" },
      { label: "Éléments manquants" },
      { label: "Éléments bancals ou lâches" },
      { label: "Le parquet a une épaisseur élevée" },
      {
        label: "Surface irrégulière ou parties surélevées du revêtement de sol",
      },
    ],
  },
  {
    id: 374867792,
    type: "checkbox",
    label: "De quel type de sol s'agit-il ?",
    options: what_type_should_be_laid(
      520684255,
      134165098,
      935315742,
      879653963,
      881446737,
      399677090,
      524186274
    ),
  },
  {
    id: 520684255,
    type: "inputNumber",
    label:
      "Quelle est approximativement la superficie de la surface au sol requise pour les travaux ?",
    options: [{ label: "Surface habitable en m²" }],
  },
];

export default parquet;
