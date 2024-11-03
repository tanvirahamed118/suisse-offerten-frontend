import { how_far_the_transport } from "../../reuse-data";

const small = [
  {
    id: 1529840539,
    type: "checkbox",
    label: "What kind of transport do you need ?",
    options: [
      {
        id: 8745161830,
        label: "Piano transport",
        credit: 5,
      },
      {
        id: 7568795465,
        label: "Car / motorcycle transport",
        credit: 8,
      },
      {
        id: 4721712231,
        label: "Furniture transport",
        credit: 3,
      },
      {
        id: 7396035660,
        label: "Delivery and collection",
        credit: 4,
      },
      {
        id: 7821475897,
        label: "Removal and disposal",
        credit: 5,
      },
      {
        label: "Others",
        credit: 3,
      },
    ],
  },
  {
    id: 8745161830,
    type: "checkbox",
    label: "How far is the transport ?",
    options: how_far_the_transport(
      6159716830,
      782293155,
      538989857,
      612833247,
      541477660
    ),
  },
  {
    id: 6159716830,
    type: "doubleInput",
    mainId: 7568795465,
    label: "On which floors is the pick-up location ?",
    options: [
      {
        width: "From:",
        height: "Until:",
        placeOne: "ZB 3011 Bern",
        placeTow: "ZB 8003 Zurich",
      },
    ],
  },
  {
    id: 7568795465,
    type: "multibox",
    mainId: 4721712231,
    label: "On which floors is the pick-up location ?",
    options: [
      {
        label: "cellar",
      },
      {
        label: "Ground floor",
      },
      {
        label: "1st floor",
      },
      {
        label: "2nd floor",
      },
      {
        label: "3rd floor",
      },
      {
        label: "4th floor",
      },
      {
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 4721712231,
    type: "checkbox",
    label: "Is there a lift available at the pick-up location ?",
    options: [
      { label: "Yes", id: 726372277 },
      { label: "No", id: 640061636 },
    ],
  },
  {
    id: 726372277,
    type: "multibox",
    mainId: 565108776,
    label: "On which floors is the destination ?",
    options: [
      {
        label: "cellar",
      },
      {
        label: "Ground floor",
      },
      {
        label: "1st floor",
      },
      {
        label: "2nd floor",
      },
      {
        label: "3rd floor",
      },
      {
        label: "4th floor",
      },
      {
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 565108776,
    label: "On which floors is the destination ?",
    options: [
      {
        label: "cellar",
      },
      {
        label: "Ground floor",
      },
      {
        label: "1st floor",
      },
      {
        label: "2nd floor",
      },
      {
        label: "3rd floor",
      },
      {
        label: "4th floor",
      },
      {
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 7568795465,
    type: "checkbox",
    label: "How far is the transport ?",
    options: how_far_the_transport(
      399206890,
      782293155,
      538989857,
      612833247,
      541477660
    ),
  },
  {
    id: 399206890,
    type: "doubleInput",
    mainId: 686111495,
    label: "On which floors is the pick-up location ?",
    options: [{ label: "" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "On which floors is the pick-up location ?",
    options: [
      {
        label: "cellar",
      },
      {
        label: "Ground floor",
      },
      {
        label: "1st floor",
      },
      {
        label: "2nd floor",
      },
      {
        label: "3rd floor",
      },
      {
        label: "4th floor",
      },
      {
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Is there a lift available at the pick-up location ?",
    options: [
      { label: "Yes", id: 726372277 },
      { label: "No", id: 640061636 },
    ],
  },
  {
    id: 726372277,
    type: "multibox",
    mainId: 565108776,
    label: "On which floors is the destination ?",
    options: [
      {
        label: "cellar",
      },
      {
        label: "Ground floor",
      },
      {
        label: "1st floor",
      },
      {
        label: "2nd floor",
      },
      {
        label: "3rd floor",
      },
      {
        label: "4th floor",
      },
      {
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 565108776,
    label: "On which floors is the destination ?",
    options: [
      {
        label: "cellar",
      },
      {
        label: "Ground floor",
      },
      {
        label: "1st floor",
      },
      {
        label: "2nd floor",
      },
      {
        label: "3rd floor",
      },
      {
        label: "4th floor",
      },
      {
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 4721712231,
    type: "checkbox",
    label: "How far is the transport ?",
    options: how_far_the_transport(
      399206890,
      782293155,
      538989857,
      612833247,
      541477660
    ),
  },
  {
    id: 399206890,
    type: "doubleInput",
    mainId: 686111495,
    label: "On which floors is the pick-up location ?",
    options: [{ label: "" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "On which floors is the pick-up location ?",
    options: [
      {
        label: "cellar",
      },
      {
        label: "Ground floor",
      },
      {
        label: "1st floor",
      },
      {
        label: "2nd floor",
      },
      {
        label: "3rd floor",
      },
      {
        label: "4th floor",
      },
      {
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Is there a lift available at the pick-up location ?",
    options: [
      { label: "Yes", id: 726372277 },
      { label: "No", id: 640061636 },
    ],
  },
  {
    id: 726372277,
    type: "multibox",
    mainId: 565108776,
    label: "On which floors is the destination ?",
    options: [
      {
        label: "cellar",
      },
      {
        label: "Ground floor",
      },
      {
        label: "1st floor",
      },
      {
        label: "2nd floor",
      },
      {
        label: "3rd floor",
      },
      {
        label: "4th floor",
      },
      {
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 565108776,
    label: "On which floors is the destination ?",
    options: [
      {
        label: "cellar",
      },
      {
        label: "Ground floor",
      },
      {
        label: "1st floor",
      },
      {
        label: "2nd floor",
      },
      {
        label: "3rd floor",
      },
      {
        label: "4th floor",
      },
      {
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 7396035660,
    type: "checkbox",
    label: "How far is the transport ?",
    options: how_far_the_transport(
      399206890,
      782293155,
      538989857,
      612833247,
      541477660
    ),
  },
  {
    id: 399206890,
    type: "doubleInput",
    mainId: 686111495,
    label: "On which floors is the pick-up location ?",
    options: [{ label: "" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "On which floors is the pick-up location ?",
    options: [
      {
        label: "cellar",
      },
      {
        label: "Ground floor",
      },
      {
        label: "1st floor",
      },
      {
        label: "2nd floor",
      },
      {
        label: "3rd floor",
      },
      {
        label: "4th floor",
      },
      {
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Is there a lift available at the pick-up location ?",
    options: [
      { label: "Yes", id: 726372277 },
      { label: "No", id: 640061636 },
    ],
  },
  {
    id: 726372277,
    type: "multibox",
    mainId: 565108776,
    label: "On which floors is the destination ?",
    options: [
      {
        label: "cellar",
      },
      {
        label: "Ground floor",
      },
      {
        label: "1st floor",
      },
      {
        label: "2nd floor",
      },
      {
        label: "3rd floor",
      },
      {
        label: "4th floor",
      },
      {
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 565108776,
    label: "On which floors is the destination ?",
    options: [
      {
        label: "cellar",
      },
      {
        label: "Ground floor",
      },
      {
        label: "1st floor",
      },
      {
        label: "2nd floor",
      },
      {
        label: "3rd floor",
      },
      {
        label: "4th floor",
      },
      {
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 7821475897,
    type: "checkbox",
    label: "Hoch much should be transportet ?",
    options: [
      { label: "A car charge" },
      { label: "A van load" },
      { label: "Multiple transport loads" },
      { label: "A truck load or more" },
    ],
  },
  {
    id: 399206890,
    type: "doubleInput",
    mainId: 686111495,
    label: "On which floors is the pick-up location ?",
    options: [{ label: "" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "On which floors is the pick-up location ?",
    options: [
      {
        label: "cellar",
      },
      {
        label: "Ground floor",
      },
      {
        label: "1st floor",
      },
      {
        label: "2nd floor",
      },
      {
        label: "3rd floor",
      },
      {
        label: "4th floor",
      },
      {
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Is there a lift available at the pick-up location ?",
    options: [
      { label: "Yes", id: 726372277 },
      { label: "No", id: 640061636 },
    ],
  },
  {
    id: 726372277,
    type: "multibox",
    mainId: 565108776,
    label: "On which floors is the destination ?",
    options: [
      {
        label: "cellar",
      },
      {
        label: "Ground floor",
      },
      {
        label: "1st floor",
      },
      {
        label: "2nd floor",
      },
      {
        label: "3rd floor",
      },
      {
        label: "4th floor",
      },
      {
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 565108776,
    label: "On which floors is the destination ?",
    options: [
      {
        label: "cellar",
      },
      {
        label: "Ground floor",
      },
      {
        label: "1st floor",
      },
      {
        label: "2nd floor",
      },
      {
        label: "3rd floor",
      },
      {
        label: "4th floor",
      },
      {
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 3154518546,
    type: "checkbox",
    label: "How far is the transport ?",
    options: how_far_the_transport(
      399206890,
      782293155,
      538989857,
      612833247,
      541477660
    ),
  },
  {
    id: 399206890,
    type: "doubleInput",
    mainId: 686111495,
    label: "On which floors is the pick-up location ?",
    options: [{ label: "" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "On which floors is the pick-up location ?",
    options: [
      {
        label: "cellar",
      },
      {
        label: "Ground floor",
      },
      {
        label: "1st floor",
      },
      {
        label: "2nd floor",
      },
      {
        label: "3rd floor",
      },
      {
        label: "4th floor",
      },
      {
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Is there a lift available at the pick-up location ?",
    options: [
      { label: "Yes", id: 726372277 },
      { label: "No", id: 640061636 },
    ],
  },
  {
    id: 726372277,
    type: "multibox",
    mainId: 565108776,
    label: "On which floors is the destination ?",
    options: [
      {
        label: "cellar",
      },
      {
        label: "Ground floor",
      },
      {
        label: "1st floor",
      },
      {
        label: "2nd floor",
      },
      {
        label: "3rd floor",
      },
      {
        label: "4th floor",
      },
      {
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 565108776,
    label: "On which floors is the destination ?",
    options: [
      {
        label: "cellar",
      },
      {
        label: "Ground floor",
      },
      {
        label: "1st floor",
      },
      {
        label: "2nd floor",
      },
      {
        label: "3rd floor",
      },
      {
        label: "4th floor",
      },
      {
        label: "5th floor or higher",
      },
    ],
  },
  {
    id: 713783365,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
];

export default small;
