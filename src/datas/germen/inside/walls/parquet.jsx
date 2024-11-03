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
    label: "Welche Bodenarbeiten benötigen Sie ?",
    options: [
      {
        id: 148083577,
        label: "Beschämt",
        des: "Verlegen neuer Holzböden, Vinyl, Teppich usw.",
      },
      {
        id: 647226157,
        label: "Pflegen",
        des: "Schleifen, Versiegeln, Ölen, Reinigen, etc.",
      },
      {
        id: 374867792,
        label: "Reparieren / einstellen",
        des: "Dellen/Kratzer ausbessern, Wasserschäden beheben, Teppich zuschneiden usw.",
        credit: 10,
      },
      {
        id: 908792547,
        label: "Andere",
        credit: 8,
      },
    ],
  },
  {
    id: 148083577,
    type: "checkbox",
    label: "Welcher Bodenbelag soll verlegt werden ?",
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
    label: "Ist der Bodenbelag schon verlegt ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 771636241,
    type: "checkbox",
    label: "Ist der Bodenbelag schon verlegt ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 505674779,
    type: "checkbox",
    label: "Ist der Bodenbelag schon verlegt ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 155729722,
    type: "checkbox",
    label: "Ist der Bodenbelag schon verlegt ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 627083597,
    type: "checkbox",
    label: "Ist der Bodenbelag schon verlegt ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 252135875,
    type: "checkbox",
    label: "Ist der Bodenbelag schon verlegt ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 274033257,
    type: "checkbox",
    label: "Ist der Bodenbelag schon verlegt ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 685933575,
    type: "checkbox",
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
    label: "Wie groß ist ungefähr die für die Arbeiten benötigte Grundfläche ?",
    options: [{ label: "Wohnfläche in m²" }],
  },
  {
    id: 119374264,
    type: "inputNumber",
    mainId: 601072886,
    label: "Wie groß ist ungefähr die für die Arbeiten benötigte Grundfläche ?",
    options: [{ label: "Wohnfläche in m²" }],
  },
  {
    id: 273307415,
    type: "inputNumber",
    mainId: 601072886,
    label: "Wie groß ist ungefähr die für die Arbeiten benötigte Grundfläche ?",
    options: [{ label: "Wohnfläche in m²" }],
  },
  {
    id: 656771972,
    type: "inputNumber",
    mainId: 601072886,
    label: "Wie groß ist ungefähr die für die Arbeiten benötigte Grundfläche ?",
    options: [{ label: "Wohnfläche in m²" }],
  },
  {
    id: 454792623,
    type: "inputNumber",
    mainId: 601072886,
    label: "Wie groß ist ungefähr die für die Arbeiten benötigte Grundfläche ?",
    options: [{ label: "Wohnfläche in m²" }],
  },
  {
    id: 317957200,
    type: "inputNumber",
    mainId: 601072886,
    label: "Wie groß ist ungefähr die für die Arbeiten benötigte Grundfläche ?",
    options: [{ label: "Wohnfläche in m²" }],
  },
  {
    id: 601072889,
    type: "checkbox",
    label: "Sollen auch Sockelleisten verbaut werden ?",
    options: [
      {
        label: "Ja, Sockelleisten sollten in allen Räumen angebracht werden",
      },
      {
        label: "Sockelleisten sind nur in einigen Räumen zu verlegen",
      },
      {
        label: "Nein, Sockelleisten sind nicht erforderlich",
      },
    ],
  },
  {
    id: 647226157,
    type: "checkbox",
    label: "Welche Art von Service wird benötigt ?",
    options: [
      {
        id: 592344238,
        label: "Parkett",
      },
      {
        id: 162668848,
        label: "Massivholz",
      },
      {
        id: 418572376,
        label: "Teppich",
      },

      {
        label: "Andere",
        credit: 8,
      },
    ],
  },
  //   parquet
  {
    id: 592344238,
    type: "checkbox",
    label: "Welcher Bodenbelag muss gepflegt werden ?",
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
    label: "In wie vielen Räumen sollen die Arbeiten durchgeführt werden ?",
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
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
    label: "Welcher Bodenbelag muss gepflegt werden ?",
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
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
    label: "Wie groß ist ungefähr die für die Arbeiten benötigte Grundfläche ?",
    options: [{ label: "Wohnfläche in m²" }],
  },
  {
    id: 2679416897,
    type: "inputNumber",
    label: "Wie groß ist ungefähr die für die Arbeiten benötigte Grundfläche ?",
    options: [{ label: "Wohnfläche in m²" }],
  },
  {
    id: 6321692515,
    type: "inputNumber",
    label: "Wie groß ist ungefähr die für die Arbeiten benötigte Grundfläche ?",
    options: [{ label: "Wohnfläche in m²" }],
  },
  {
    id: 3968385664,
    type: "inputNumber",
    label: "Wie groß ist ungefähr die für die Arbeiten benötigte Grundfläche ?",
    options: [{ label: "Wohnfläche in m²" }],
  },
  {
    id: 9536568502,
    type: "inputNumber",
    label: "Wie groß ist ungefähr die für die Arbeiten benötigte Grundfläche ?",
    options: [{ label: "Wohnfläche in m²" }],
  },
  {
    id: 3148202811,
    type: "inputNumber",
    label: "Wie groß ist ungefähr die für die Arbeiten benötigte Grundfläche ?",
    options: [{ label: "Wohnfläche in m²" }],
  },
  {
    id: 362485650,
    type: "checkbox",
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
  // Andere
  {
    id: 348107495,
    type: "checkbox",
    label: "Welcher Bodenbelag muss gepflegt werden ?",
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
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
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
    label: "In wie vielen Räumen müssen die Arbeiten durchgeführt werden ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  // Andere
  {
    id: 647726951,
    type: "inputNumber",
    mainId: 601072886,
    label: "Wie groß ist ungefähr die für die Arbeiten benötigte Grundfläche ?",
    options: [{ label: "Wohnfläche in m²" }],
  },
  {
    id: 601072886,
    type: "multibox",
    label: "Eigenschaften des verlegten Bodens",
    options: [
      { label: "Beschädigungen (z.B. Kratzer, Flecken, Verfärbungen)" },
      { label: "Wurde in der Vergangenheit geschliffen" },
      { label: "Abstände zwischen den einzelnen Elementen" },
      { label: "Fehlende Elemente" },
      { label: "Wackelige oder lose Elemente" },
      { label: "Parkett hat eine hohe Dicke" },
      { label: "Unebene Oberfläche oder erhöhte Bereiche des Bodenbelags" },
    ],
  },
  {
    id: 374867792,
    type: "checkbox",
    label: "Um was für einen Boden handelt es sich ?",
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
    label: "Wie groß ist ungefähr die für die Arbeiten benötigte Grundfläche ?",
    options: [{ label: "Wohnfläche in m²" }],
  },
];

export default parquet;
