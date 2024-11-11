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
  const filterValue = (value) => {
    return value
      ?.split(/\s*[,.&\s]+\s*/g)
      .filter(Boolean)
      .join("_");
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
          className="text-black border border-gray-200 px-2 py-1 text-md font-bold rounded-md bg-[#FFAA00]"
        >
          {t("seek")}
        </button>
      </form>
      <div className="flex md:flex-row flex-col gap-5 w-full items-center md:w-8/12">
        <select
          name=""
          id=""
          className="w-full border border-gray-200 py-2 px-3 rounded-md outline-[#C3DEED] focus:outline outline-4 text-base text-black font-normal"
          onChange={(e) => dispatch(choseCategory(e.target.value))}
          defaultValue=""
        >
          <option value="">{t("select_option")}</option>
          <option value={t("inside")}>{t("inside")}</option>
          <option value={t("outside")}>{t("outside")}</option>
          <option value={filterValue(t("planning_consulting"))}>
            {t("planning_consulting")}
          </option>
          <option value={t("car_vehicles")}>{t("car_vehicles")}</option>
          <option value={filterValue(t("moving_moving_house"))}>
            {t("moving_moving_house")}
          </option>
          <option value={filterValue(t("cleaning"))}>{t("cleaning")}</option>
          <option value={filterValue(t("transport_disposal"))}>
            {t("transport_disposal")}
          </option>
          <option value={filterValue(t("other"))}>{t("other")}</option>
        </select>
        <select
          name=""
          id=""
          className="border w-full border-gray-200 py-2 px-3 rounded-md outline-[#C3DEED] focus:outline outline-4 text-base text-black font-normal"
          onChange={(e) => dispatch(choseLocation(e.target.value))}
          defaultValue=""
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
              ? "text-black bg-[#FFAA00] py-2 px-5 rounded-full text-md font-bold"
              : "text-black bg-[#f5f6f7] py-2 px-5 rounded-full text-md font-bold"
          }
          onClick={handleDateSortToggle}
        >
          {t("new_leads")}
        </button>
        <button
          className={
            sortCriteria === "bid"
              ? "text-black bg-[#FFAA00] py-2 px-5 rounded-full text-md font-bold"
              : "text-black bg-[#f5f6f7] py-2 px-5 rounded-full text-md font-bold"
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
