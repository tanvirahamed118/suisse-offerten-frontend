import roomFour from "./roomFour";
import roomOne from "./roomOne";
import roomThree from "./roomThree";
import roomTow from "./roomTow";

const movingCat = [
  {
    id: 3290426656,
    type: "checkbox",
    label: "How far is the move ?",
    options: [
      {
        id: 1459730702,
        label: "Within the community",
      },
      {
        id: 6792756807,
        label: "Within the canton",
      },
      {
        id: 3414387464,
        label: "Within Switzerland",
      },
      {
        id: 1479083434,
        label: "Within Europe",
      },
      {
        id: 1569163849,
        label: "Outside Europe",
      },
    ],
  },
  {
    id: 1459730702,
    type: "doubleInput",
    mainId: 1934954891,
    label: "Where is the transport from and to ?",
    options: [
      {
        width: "From:",
        height: "Until:",
        placeTow: "ZB 8003 Zurich",
        placeOne: "ZB 3011 Bern",
      },
    ],
  },
  {
    id: 1934954891,
    type: "multibox",
    mainId: 7066446326,
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
    id: 7066446326,
    type: "checkbox",
    label: "Is there a lift available at the pick-up location ?",
    options: [
      { label: "Yes", id: 8839120147 },
      { label: "No", id: 9417832555 },
    ],
  },
  {
    id: 8839120147,
    type: "multibox",
    mainId: 1916689810,
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
    id: 1916689810,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 4003460057 },
      { label: "No", id: 1591236716 },
    ],
  },
  {
    id: 4003460057,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
  {
    id: 9417832555,
    type: "multibox",
    mainId: 1916689810,
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
    id: 1916689810,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 221818400 },
      { label: "No", id: 1591236716 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
  {
    id: 6792756807,
    type: "doubleInput",
    mainId: 268310504,
    label: "Where is the transport from and to ?",
    options: [
      {
        width: "From:",
        height: "Until:",
        placeTow: "ZB 8003 Zurich",
        placeOne: "ZB 3011 Bern",
      },
    ],
  },
  {
    id: 268310504,
    type: "multibox",
    mainId: 7066446326,
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
    id: 7066446326,
    type: "checkbox",
    label: "Is there a lift available at the pick-up location ?",
    options: [
      { label: "Yes", id: 8839120147 },
      { label: "No", id: 9417832555 },
    ],
  },
  {
    id: 8839120147,
    type: "multibox",
    mainId: 1916689810,
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
    id: 1916689810,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 221818400 },
      { label: "No", id: 1591236716 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
  {
    id: 9417832555,
    type: "multibox",
    mainId: 1916689810,
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
    id: 1916689810,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 221818400 },
      { label: "No", id: 1591236716 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
  {
    id: 3414387464,
    type: "doubleInput",
    mainId: 268310504,
    label: "Where is the transport from and to ?",
    options: [
      {
        width: "From:",
        height: "Until:",
        placeTow: "ZB 8003 Zurich",
        placeOne: "ZB 3011 Bern",
      },
    ],
  },
  {
    id: 268310504,
    type: "multibox",
    mainId: 7066446326,
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
    id: 7066446326,
    type: "checkbox",
    label: "Is there a lift available at the pick-up location ?",
    options: [
      { label: "Yes", id: 8839120147 },
      { label: "No", id: 9417832555 },
    ],
  },
  {
    id: 8839120147,
    type: "multibox",
    mainId: 1916689810,
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
    id: 1916689810,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 221818400 },
      { label: "No", id: 1591236716 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
  {
    id: 9417832555,
    type: "multibox",
    mainId: 1916689810,
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
    id: 1916689810,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 221818400 },
      { label: "No", id: 1591236716 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
  {
    id: 1479083434,
    type: "doubleInput",
    mainId: 268310504,
    label: "Where is the transport from and to ?",
    options: [
      {
        width: "From:",
        height: "Until:",
        placeTow: "ZB 8003 Zurich",
        placeOne: "ZB 3011 Bern",
      },
    ],
  },
  {
    id: 268310504,
    type: "multibox",
    mainId: 7066446326,
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
    id: 7066446326,
    type: "checkbox",
    label: "Is there a lift available at the pick-up location ?",
    options: [
      { label: "Yes", id: 8839120147 },
      { label: "No", id: 9417832555 },
    ],
  },
  {
    id: 8839120147,
    type: "multibox",
    mainId: 1916689810,
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
    id: 1916689810,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 221818400 },
      { label: "No", id: 1591236716 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
  {
    id: 9417832555,
    type: "multibox",
    mainId: 1916689810,
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
    id: 1916689810,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 221818400 },
      { label: "No", id: 1591236716 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
  {
    id: 1569163849,
    type: "doubleInput",
    mainId: 268310504,
    label: "Where is the transport from and to ?",
    options: [
      {
        width: "From:",
        height: "Until:",
        placeTow: "ZB 8003 Zurich",
        placeOne: "ZB 3011 Bern",
      },
    ],
  },
  {
    id: 268310504,
    type: "multibox",
    mainId: 7066446326,
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
    id: 7066446326,
    type: "checkbox",
    label: "Is there a lift available at the pick-up location ?",
    options: [
      { label: "Yes", id: 8839120147 },
      { label: "No", id: 9417832555 },
    ],
  },
  {
    id: 8839120147,
    type: "multibox",
    mainId: 1916689810,
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
    id: 1916689810,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 221818400 },
      { label: "No", id: 1591236716 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
  {
    id: 9417832555,
    type: "multibox",
    mainId: 1916689810,
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
    id: 1916689810,
    type: "checkbox",
    label: "Is there an elevator available in the new premises ?",
    options: [
      { label: "Yes", id: 221818400 },
      { label: "No", id: 1591236716 },
    ],
  },
  {
    id: 221818400,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
  {
    id: 1591236716,
    type: "checkbox",
    label: "How big are the rooms ?",
    options: [
      {
        id: 9185699424,
        label: "Up to 1.5 rooms",
        credit: 5,
      },
      {
        id: 8222222426,
        label: "2 to 3.5 rooms",
        credit: 8,
      },
      {
        id: 2162331403,
        label: "4 to 5.5 rooms",
        credit: 13,
      },
      {
        id: 6018510549,
        label: "6 or more rooms",
        credit: 25,
      },
    ],
  },
];
const moving = movingCat.concat(roomOne, roomThree, roomTow, roomFour);
export default moving;
