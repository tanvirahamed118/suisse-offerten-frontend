import {
  how_big_is_approximately,
  how_many_goals,
  is_the_required_available,
} from "../../reuse-data";

const metalWorking = [
  {
    id: 759709724,
    type: "checkbox",
    label: "What does a service require ?",
    options: [
      {
        id: 425432382,
        label: "railing",
        des: "E.g. for stairs, balconies etc.",
      },
      {
        id: 998833810,
        label: "Stairs",
      },
      {
        id: 621442113,
        label: "Goal",
      },
      {
        id: 409898095,
        label: "Custom-made metal structure",
        des: "E.g. bicycle shelter, substructure, furniture, mailbox etc.",
      },
      {
        id: 691649311,
        label: "Modification / Repair",
        des: "Welding, soldering, grinding, drilling etc.",
      },
      {
        id: 943940507,
        label: "Other",
      },
    ],
  },
  //   raling
  {
    id: 425432382,
    type: "checkbox",
    label: "How large is the affected area approximately ?",
    options: how_big_is_approximately(
      787637825,
      953594623,
      880436176,
      649566233
    ),
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
    id: 998833810,
    type: "checkbox",
    label: "How large is the affected area approximately ?",
    options: how_big_is_approximately(
      787637825,
      953594623,
      880436176,
      649566233
    ),
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
    id: 621442113,
    type: "checkbox",
    label: "How many goals ?",
    options: how_many_goals(787637825, 953594623, 880436176, 649566233),
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
    id: 409898095,
    type: "checkbox",
    label: "How large is the affected area approximately ?",
    options: how_big_is_approximately(
      787637825,
      953594623,
      880436176,
      649566233
    ),
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
    id: 691649311,
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
