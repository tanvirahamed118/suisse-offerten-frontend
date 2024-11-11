import { Link } from "react-router-dom";
import postalCode from "../datas/locations.json";
import { choseLocation } from "../redux/rtk/features/filter/jobFilterSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

function AllJobCategory() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleChose = (value) => {
    dispatch(choseLocation(value));
  };

  return (
    <ul className="flex flex-col gap-2">
      <h2
        className="text-gray-500 font-normal text-base hover:underline cursor-pointer"
        onClick={() => handleChose("")}
      >
        {t("all")}
      </h2>
      {[...new Set(postalCode.locations?.map((item) => item.Kanton))].map(
        (kanton, index) => (
          <li key={index}>
            <Link
              onClick={() => handleChose(kanton)}
              className="text-gray-500 font-normal text-base hover:underline"
            >
              {kanton}
            </Link>
          </li>
        )
      )}
    </ul>
  );
}

export default AllJobCategory;
