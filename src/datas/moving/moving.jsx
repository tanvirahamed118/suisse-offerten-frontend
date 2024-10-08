import roomFour from "./roomFour";
import roomOne from "./roomOne";
import roomThree from "./roomThree";

const movingCat = [
  {
    id: 1010368261,
    type: "checkbox",
    label: "How far is the move ?",
    options: [
      {
        id: 582989261,
        label: "Within the community",
      },
      {
        id: 893684327,
        label: "Within the canton",
      },
      {
        id: 314851866,
        label: "Within Switzerland",
      },
      {
        id: 685331641,
        label: "Within Europe",
      },
      {
        id: 479529742,
        label: "Outside Europe",
      },
    ],
  },
  {
    id: 582989261,
    type: "doubleInput",
    mainId: 517710049,
    label: "Where is the transport from and to ?",
    options: [{ width: "From:", height: "Until:" }],
  },
  {
    id: 517710049,
    type: "multibox",
    mainId: 663521021,
    label: "On which floors is the current space ?",
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
    id: 663521021,
    type: "checkbox",
    label: "Is there a lift available at the pick-up location ?",
    options: [
      { label: "Yes", id: 243700482 },
      { label: "No", id: 944183546 },
    ],
  },
  {
    id: 243700482,
    type: "multibox",
    mainId: 172216716,
    label: "On which floors is the new space ?",
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
    id: 172216716,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 221818400 },
      { label: "No", id: 537963937 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
  {
    id: 537963937,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
  {
    id: 944183546,
    type: "multibox",
    mainId: 172216716,
    label: "On which floors is the new space ?",
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
    id: 172216716,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 221818400 },
      { label: "No", id: 537963937 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
  {
    id: 537963937,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
  {
    id: 893684327,
    type: "doubleInput",
    mainId: 268310504,
    label: "Where is the transport from and to ?",
    options: [{ width: "From:", height: "Until:" }],
  },
  {
    id: 268310504,
    type: "multibox",
    mainId: 663521021,
    label: "On which floors is the current space ?",
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
    id: 663521021,
    type: "checkbox",
    label: "Is there a lift available at the pick-up location ?",
    options: [
      { label: "Yes", id: 243700482 },
      { label: "No", id: 944183546 },
    ],
  },
  {
    id: 243700482,
    type: "multibox",
    mainId: 172216716,
    label: "On which floors is the new space ?",
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
    id: 172216716,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 221818400 },
      { label: "No", id: 537963937 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
  {
    id: 537963937,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
  {
    id: 944183546,
    type: "multibox",
    mainId: 172216716,
    label: "On which floors is the new space ?",
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
    id: 172216716,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 221818400 },
      { label: "No", id: 537963937 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
  {
    id: 537963937,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
  {
    id: 314851866,
    type: "doubleInput",
    mainId: 268310504,
    label: "Where is the transport from and to ?",
    options: [{ width: "From:", height: "Until:" }],
  },
  {
    id: 268310504,
    type: "multibox",
    mainId: 663521021,
    label: "On which floors is the current space ?",
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
    id: 663521021,
    type: "checkbox",
    label: "Is there a lift available at the pick-up location ?",
    options: [
      { label: "Yes", id: 243700482 },
      { label: "No", id: 944183546 },
    ],
  },
  {
    id: 243700482,
    type: "multibox",
    mainId: 172216716,
    label: "On which floors is the new space ?",
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
    id: 172216716,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 221818400 },
      { label: "No", id: 537963937 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
  {
    id: 537963937,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
  {
    id: 944183546,
    type: "multibox",
    mainId: 172216716,
    label: "On which floors is the new space ?",
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
    id: 172216716,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 221818400 },
      { label: "No", id: 537963937 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
  {
    id: 537963937,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
  {
    id: 685331641,
    type: "doubleInput",
    mainId: 268310504,
    label: "Where is the transport from and to ?",
    options: [{ width: "From:", height: "Until:" }],
  },
  {
    id: 268310504,
    type: "multibox",
    mainId: 663521021,
    label: "On which floors is the current space ?",
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
    id: 663521021,
    type: "checkbox",
    label: "Is there a lift available at the pick-up location ?",
    options: [
      { label: "Yes", id: 243700482 },
      { label: "No", id: 944183546 },
    ],
  },
  {
    id: 243700482,
    type: "multibox",
    mainId: 172216716,
    label: "On which floors is the new space ?",
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
    id: 172216716,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 221818400 },
      { label: "No", id: 537963937 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
  {
    id: 537963937,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
  {
    id: 944183546,
    type: "multibox",
    mainId: 172216716,
    label: "On which floors is the new space ?",
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
    id: 172216716,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 221818400 },
      { label: "No", id: 537963937 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
  {
    id: 537963937,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
  {
    id: 479529742,
    type: "doubleInput",
    mainId: 268310504,
    label: "Where is the transport from and to ?",
    options: [{ width: "From:", height: "Until:" }],
  },
  {
    id: 268310504,
    type: "multibox",
    mainId: 663521021,
    label: "On which floors is the current space ?",
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
    id: 663521021,
    type: "checkbox",
    label: "Is there a lift available at the pick-up location ?",
    options: [
      { label: "Yes", id: 243700482 },
      { label: "No", id: 944183546 },
    ],
  },
  {
    id: 243700482,
    type: "multibox",
    mainId: 172216716,
    label: "On which floors is the new space ?",
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
    id: 172216716,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 221818400 },
      { label: "No", id: 537963937 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
  {
    id: 537963937,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
  {
    id: 944183546,
    type: "multibox",
    mainId: 172216716,
    label: "On which floors is the new space ?",
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
    id: 172216716,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 221818400 },
      { label: "No", id: 537963937 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
  {
    id: 537963937,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 411345153,
        label: "Up to 1.5 rooms",
      },
      {
        id: 333252017,
        label: "2 to 3.5 rooms",
      },
      {
        id: 782617930,
        label: "4 to 5.5 rooms",
      },
      {
        id: 315344916,
        label: "6 or more rooms",
      },
    ],
  },
];
const moving = movingCat.concat(roomOne, roomThree, roomThree, roomFour);
export default moving;
