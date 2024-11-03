import { is_the_required_available } from "../../reuse-data";

const metalWorking = [
  {
    id: 759709724,
    type: "checkbox",
    label: "What does a service require ?",
    options: [
      {
        id: 9064676601,
        label: "railing",
        des: "E.g. for stairs, balconies etc.",
      },
      {
        id: 4173396498,
        label: "Stairs",
      },
      {
        id: 4716963594,
        label: "Goal",
      },
      {
        id: 7255343011,
        label: "Custom-made metal structure",
        des: "E.g. bicycle shelter, substructure, furniture, mailbox etc.",
      },
      {
        id: 7528094474,
        label: "Modification / Repair",
        des: "Welding, soldering, grinding, drilling etc.",
        credit: 10,
      },
      {
        label: "Other",
        credit: 10,
      },
    ],
  },
  //   raling
  {
    id: 9064676601,
    type: "checkbox",
    label: "How large is the affected area approximately ?",
    options: [
      {
        id: 787637825,
        des: "Up to 4 m",
        label: "Small",
        credit: 20,
      },
      {
        id: 953594623,
        des: "5 to 9 m",
        label: "Medium",
        credit: 30,
      },
      {
        id: 880436176,
        des: "10 to 24 m",
        label: "Large",
        credit: 40,
      },
      {
        id: 649566233,
        des: "25 m or more",
        label: "Very large",
        credit: 50,
      },
    ],
  },
  {
    id: 787637825,
    type: "checkbox",
    label: "Is the required material available ?",
    options: is_the_required_available,
  },
  {
    id: 953594623,
    type: "checkbox",
    label: "Is the required material available ?",
    options: is_the_required_available,
  },
  {
    id: 880436176,
    type: "checkbox",
    label: "Is the required material available ?",
    options: is_the_required_available,
  },
  {
    id: 649566233,
    type: "checkbox",
    label: "Is the required material available ?",
    options: is_the_required_available,
  },
  //   raling
  //   stairs
  {
    id: 4173396498,
    type: "checkbox",
    label: "How large is the affected area approximately ?",
    options: [
      {
        id: 787637825,
        des: "Up to 4 m",
        label: "Small",
        credit: 10,
      },
      {
        id: 953594623,
        des: "5 to 9 m",
        label: "Medium",
        credit: 30,
      },
      {
        id: 880436176,
        des: "10 to 24 m",
        label: "Large",
        credit: 50,
      },
      {
        id: 649566233,
        des: "25 m or more",
        label: "Very large",
        credit: 60,
      },
    ],
  },
  {
    id: 787637825,
    type: "checkbox",
    label: "Is the required material available ?",
    options: is_the_required_available,
  },
  {
    id: 953594623,
    type: "checkbox",
    label: "Is the required material available ?",
    options: is_the_required_available,
  },
  {
    id: 880436176,
    type: "checkbox",
    label: "Is the required material available ?",
    options: is_the_required_available,
  },
  {
    id: 649566233,
    type: "checkbox",
    label: "Is the required material available ?",
    options: is_the_required_available,
  },
  //   stairs
  // goal
  {
    id: 4716963594,
    type: "checkbox",
    label: "How many goals ?",
    options: [
      {
        id: 787637825,
        label: "A small gate",
        credit: 15,
      },
      {
        id: 953594623,
        label: "A normal gate",
        credit: 30,
      },
      {
        id: 880436176,
        label: "2 to 3 goals",
        credit: 50,
      },
      {
        id: 649566233,
        label: "4 goals or more",
        credit: 60,
      },
    ],
  },
  {
    id: 787637825,
    type: "checkbox",
    label: "Is the required material available ?",
    options: is_the_required_available,
  },
  {
    id: 953594623,
    type: "checkbox",
    label: "Is the required material available ?",
    options: is_the_required_available,
  },
  {
    id: 880436176,
    type: "checkbox",
    label: "Is the required material available ?",
    options: is_the_required_available,
  },
  {
    id: 649566233,
    type: "checkbox",
    label: "Is the required material available ?",
    options: is_the_required_available,
  },
  // goal
  // custom
  {
    id: 7255343011,
    type: "checkbox",
    label: "Approximately how big ist he custom-made structure ?",
    options: [
      {
        id: 787637825,
        des: "Up to 4 m",
        label: "Small",
        credit: 10,
      },
      {
        id: 953594623,
        des: "5 to 9 m",
        label: "Medium",
        credit: 30,
      },
      {
        id: 880436176,
        des: "10 to 24 m",
        label: "Large",
        credit: 50,
      },
      {
        id: 649566233,
        des: "25 m or more",
        label: "Very large",
        credit: 60,
      },
    ],
  },
  {
    id: 787637825,
    type: "checkbox",
    label: "Is the required material available ?",
    options: is_the_required_available,
  },
  {
    id: 953594623,
    type: "checkbox",
    label: "Is the required material available ?",
    options: is_the_required_available,
  },
  {
    id: 880436176,
    type: "checkbox",
    label: "Is the required material available ?",
    options: is_the_required_available,
  },
  {
    id: 649566233,
    type: "checkbox",
    label: "Is the required material available ?",
    options: is_the_required_available,
  },
  // custom
  // modification
  {
    id: 7528094474,
    type: "checkbox",
    label: "What should be done ?",
    options: [
      {
        label: "Welding",
      },
      {
        label: "Solder",
      },
      {
        label: "Flexing",
      },
      {
        label: "Drill",
      },
    ],
  },

  // modification
];

export default metalWorking;
