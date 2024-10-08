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
    label: "What kind of flooring work do you need ?",
    options: [
      {
        id: 148083577,
        label: "Embarrassed",
        des: "Laying new wood floors, vinyl, carpet, etc.",
      },
      {
        id: 647226157,
        label: "Maintain",
        des: "Sanding, sealing, oiling, cleaning, etc.",
      },
      {
        id: 374867792,
        label: "Repair / adjust",
        des: "Repair dents / scratches, repair water damage, trim carpet, etc.",
      },
      {
        id: 908792547,
        label: "Other",
      },
    ],
  },
  {
    id: 148083577,
    type: "checkbox",
    label: "What type of flooring should be laid ?",
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
    label: "Is the flooring already in place ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 771636241,
    type: "checkbox",
    label: "Is the flooring already in place ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 505674779,
    type: "checkbox",
    label: "Is the flooring already in place ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 155729722,
    type: "checkbox",
    label: "Is the flooring already in place ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 627083597,
    type: "checkbox",
    label: "Is the flooring already in place ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 252135875,
    type: "checkbox",
    label: "Is the flooring already in place ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 274033257,
    type: "checkbox",
    label: "Is the flooring already in place ?",
    options: is_the_flooring_already_in_place(685933575, 910471184),
  },
  {
    id: 685933575,
    type: "checkbox",
    label: "In how many rooms do you need the work done ?",
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
    label: "In how many rooms do you need the work done ?",
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
    label: "Approximately how large is the floor area required for the work ?",
    options: [{ label: "Floor area in m²" }],
  },
  {
    id: 119374264,
    type: "inputNumber",
    mainId: 601072886,
    label: "Approximately how large is the floor area required for the work ?",
    options: [{ label: "Floor area in m²" }],
  },
  {
    id: 273307415,
    type: "inputNumber",
    mainId: 601072886,
    label: "Approximately how large is the floor area required for the work ?",
    options: [{ label: "Floor area in m²" }],
  },
  {
    id: 656771972,
    type: "inputNumber",
    mainId: 601072886,
    label: "Approximately how large is the floor area required for the work ?",
    options: [{ label: "Floor area in m²" }],
  },
  {
    id: 454792623,
    type: "inputNumber",
    mainId: 601072886,
    label: "Approximately how large is the floor area required for the work ?",
    options: [{ label: "Floor area in m²" }],
  },
  {
    id: 317957200,
    type: "inputNumber",
    mainId: 601072886,
    label: "Approximately how large is the floor area required for the work ?",
    options: [{ label: "Floor area in m²" }],
  },
  {
    id: 601072886,
    type: "checkbox",
    label: "Should skirting boards also be installed ?",
    options: [
      {
        label: "Yes, skirting boards should be installed in all rooms",
      },
      {
        label: "Skirting boards are to be installed only in some of the rooms",
      },
      {
        label: "No, skirting boards are not required",
      },
    ],
  },
  {
    id: 647226157,
    type: "checkbox",
    label: "What kind of floor needs to be cared for ?",
    options: [
      {
        id: 592344238,
        label: "parquet",
      },
      {
        id: 162668848,
        label: "Solid wood",
      },
      {
        id: 418572376,
        label: "Carpet",
      },

      {
        id: 348107495,
        label: "Other",
      },
    ],
  },
  //   parquet
  {
    id: 592344238,
    type: "checkbox",
    label: "What kind of floor needs to be cared for ?",
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
    label: "In how many rooms do you need the work done ?",
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
    label: "In how many rooms do you need the work done ?",
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
    label: "In how many rooms do you need the work done ?",
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
    label: "In how many rooms do you need the work done ?",
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
    label: "In how many rooms do you need the work done ?",
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
    label: "What kind of floor needs to be cared for ?",
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
    label: "In how many rooms do you need the work done ?",
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
    label: "In how many rooms do you need the work done ?",
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
    label: "In how many rooms do you need the work done ?",
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
    label: "In how many rooms do you need the work done ?",
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
    label: "In how many rooms do you need the work done ?",
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
    label: "What kind of floor needs to be cared for ?",
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
    label: "In how many rooms do you need the work done ?",
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
    label: "In how many rooms do you need the work done ?",
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
    label: "In how many rooms do you need the work done ?",
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
    label: "In how many rooms do you need the work done ?",
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
    label: "In how many rooms do you need the work done ?",
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
  // other
  {
    id: 348107495,
    type: "checkbox",
    label: "What kind of floor needs to be cared for ?",
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
    label: "In how many rooms do you need the work done ?",
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
    label: "In how many rooms do you need the work done ?",
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
    label: "In how many rooms do you need the work done ?",
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
    label: "In how many rooms do you need the work done ?",
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
    label: "In how many rooms do you need the work done ?",
    options: in_how_many_work_done(
      647726951,
      122085212,
      185189374,
      118096520,
      525720322,
      308109075
    ),
  },
  // other
  {
    id: 647726951,
    type: "inputNumber",
    mainId: 601072886,
    label: "Approximately how large is the floor area required for the work ?",
    options: [{ label: "Floor area in m²" }],
  },
  {
    id: 993178078,
    type: "checkbox",
    label: "Characteristics of the installed floor",
    options: [
      { label: "Damage (e.g. scratches, stains, discoloration)" },
      { label: "Has been sanded in the past" },
      { label: "Gaps between the individual elements" },
      { label: "Missing elements" },
      { label: "Wobbly or loose elements" },
      { label: "Parquet has a high thickness" },
      { label: "Parquet has a high thickness" },
      { label: "Uneven surface or raised sections of the flooring" },
    ],
  },
  {
    id: 374867792,
    type: "checkbox",
    label: "Characteristics of the installed floor",
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
    mainId: 601072886,
    label: "Approximately how large is the floor area required for the work ?",
    options: [{ label: "Floor area in m²" }],
  },
];

export default parquet;
