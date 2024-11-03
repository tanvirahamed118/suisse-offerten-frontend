import cleaningImg from "../../../assets/images/request/final.png";
import cleanerImg from "../../../assets/images/request/cleaning.png";
import final from "./final/final";
import cleaner from "./cleaner/cleaner";

const cleaningCat = [
  {
    id: 1014170444,
    type: "radio",
    label: "cleaning_sub_services_categories",
    options: [
      {
        id: 344685934,
        label: "Final cleaning, moving cleaning",
        img: cleaningImg,
      },
      {
        id: 638284007,
        label: "Cleaner, other cleaning",
        img: cleanerImg,
      },
    ],
  },
];

const cleaning = cleaningCat.concat(final, cleaner);

export default cleaning;
