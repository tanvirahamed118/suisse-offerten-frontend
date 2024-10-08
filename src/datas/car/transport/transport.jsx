import { how_far_the_transport } from "../../reuse-data";

const transport = [
  {
    id: 659664297,
    type: "checkbox",
    label: "What kind of transport do you need ?",
    options: [
      {
        id: 120679971,
        label: "Piano transport",
      },
      {
        id: 613357797,
        label: "Car / motorcycle transport",
      },
      {
        id: 760736843,
        label: "Furniture transport",
      },
      {
        id: 270341747,
        label: "Delivery and collection",
      },
      {
        id: 709022107,
        label: "Removal and disposal",
      },
      {
        id: 939344768,
        label: "Others",
      },
    ],
  },
  {
    id: 120679971,
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
    label: "Where is the transport from and to ?",
    options: [{ width: "From:", height: "Until:" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "Which parts are involved ?",
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
    mainId: 459406632,
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
    id: 459406632,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 363012132,
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
    id: 363012132,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 613357797,
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
    label: "Where is the transport from and to ?",
    options: [{ width: "From:", height: "Until:" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 644565051,
    label: "Which parts are involved ?",
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
    id: 644565051,
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
    label: "On which floors is the destination ?",
    mainId: 147386648,
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
    id: 147386648,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 944599198,
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
    id: 944599198,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 760736843,
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
    label: "Where is the transport from and to ?",
    options: [{ width: "From:", height: "Until:" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 713783365,
    label: "Which parts are involved ?",
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
    mainId: 420190695,
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
    id: 420190695,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 839428265,
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
    id: 839428265,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 270341747,
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
    label: "Where is the transport from and to ?",
    options: [{ width: "From:", height: "Until:" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 441617407,
    label: "Which parts are involved ?",
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
    id: 441617407,
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
    mainId: 160216962,
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
    id: 160216962,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 106299203,
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
    id: 106299203,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 709022107,
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
    label: "Where is the transport from and to ?",
    options: [{ width: "From:", height: "Until:" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 819648441,
    label: "Which parts are involved ?",
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
    id: 819648441,
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
    mainId: 222000770,
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
    id: 222000770,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 293350647,
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
    id: 293350647,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 939344768,
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
    label: "Where is the transport from and to ?",
    options: [{ width: "From:", height: "Until:" }],
  },
  {
    id: 686111495,
    type: "multibox",
    mainId: 441568963,
    label: "Which parts are involved ?",
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
    id: 441568963,
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
    mainId: 335344367,
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
    id: 335344367,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
  {
    id: 640061636,
    type: "multibox",
    mainId: 914344424,
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
    id: 914344424,
    type: "checkbox",
    label: "Is there a lift available at the pick-up destination ?",
    options: [{ label: "Yes" }, { label: "No" }],
  },
];

export default transport;
