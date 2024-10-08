import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  choseCategory,
  choseLocation,
} from "../../redux/rtk/features/filter/leadFilterSlice";
import postalCode from "../../datas/locations.json";
import PropTypes from "prop-types";
import { useState } from "react";

function LeadsFilter({ setSortCriteria, sortCriteria, setJobNumber }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setJobNumber(value);
  };
  const handleDateSortToggle = () => {
    setSortCriteria((prev) => (prev === "date" ? "none" : "date"));
  };

  const handleBidSortToggle = () => {
    setSortCriteria((prev) => (prev === "bid" ? "none" : "bid"));
  };
  return (
    <div className="flex flex-col gap-5">
      <form
        action=""
        className="flex gap-3 items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="find by number"
          className="border border-gray-200 px-2 py-1 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 md:px-4"
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <button
          type="submit"
          className="text-black border border-gray-200 px-2 py-1 text-base font-normal rounded-md bg-[#ECECEC]"
        >
          {t("seek")}
        </button>
      </form>
      <div className="flex gap-5 w-full items-center md:w-8/12">
        <select
          name=""
          id=""
          className="md:w-full border border-gray-200 py-2 px-3 rounded-md outline-[#C3DEED] focus:outline outline-4 text-base text-black font-normal"
          onChange={(e) => dispatch(choseCategory(e.target.value))}
        >
          <option selected value="">
            {t("select_option")}
          </option>
          <option value="Inside">Inside</option>
          <option value="Outside">Outside</option>
          <option value="Planning & Consulting">Planning & Consulting</option>
          <option value="Car/Vehicles">Car/Vehicles</option>
          <option value="Moving, moving house">Moving, moving house</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Transport & Disposal">Transport & Disposal</option>
          <option value="Other">Other</option>
        </select>
        <select
          name=""
          id=""
          className="border md:w-full border-gray-200 py-2 px-3 rounded-md outline-[#C3DEED] focus:outline outline-4 text-base text-black font-normal"
          onChange={(e) => dispatch(choseLocation(e.target.value))}
        >
          <option value="">{t("select_option")}</option>
          {[...new Set(postalCode.locations?.map((item) => item.Kanton))].map(
            (kanton, index) => (
              <option key={index} value={kanton}>
                {kanton}
              </option>
            )
          )}
        </select>
      </div>
      <div className="flex space-x-4 mb-4">
        <button
          className={
            sortCriteria === "date"
              ? "text-black bg-[#ECECEC] hover:bg-[#ECECEC] py-2 px-5 rounded-full"
              : "text-black bg-[#f5f6f7] hover:bg-[#ECECEC] py-2 px-5 rounded-full"
          }
          onClick={handleDateSortToggle}
        >
          {t("new_leads")}
        </button>
        <button
          className={
            sortCriteria === "bid"
              ? "text-black bg-[#ECECEC] hover:bg-[#ECECEC] py-2 px-5 rounded-full"
              : "text-black bg-[#f5f6f7] hover:bg-[#ECECEC] py-2 px-5 rounded-full"
          }
          onClick={handleBidSortToggle}
        >
          {t("low_bid")}
        </button>
      </div>
    </div>
  );
}
LeadsFilter.propTypes = {
  setSortCriteria: PropTypes.any,
  sortCriteria: PropTypes.any,
  setJobNumber: PropTypes.any,
};
export default LeadsFilter;
