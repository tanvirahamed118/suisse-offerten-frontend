import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { choseOffer } from "../../redux/rtk/features/filter/offerSlice";
import { useTranslation } from "react-i18next";

function ShortFilter({ bid, type }) {
  const dispatch = useDispatch();

  const { t } = useTranslation();
  return (
    <div className="flex justify-start md:justify-between flex-col md:flex-row ">
      <h2 className="text-2xl text-black font-normal w-full self-end">
        {type} {t("providers")} ({bid ? bid : 0})
      </h2>
      <form
        action=""
        className="flex items-center gap-2 w-full md:justify-end justify-start md:self-start"
      >
        <label
          htmlFor=""
          className="text-black text-base font-normal capitalize"
        >
          {t("sort_by")}
        </label>
        <select
          name=""
          onChange={(e) => dispatch(choseOffer(e.target.value))}
          id=""
          className="border border-gray-200 px-2 py-3 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 md:px-4"
        >
          <option value="" selected>
            {t("select_option")}
          </option>
          <option value="time of receipt">Time of receipt</option>
          <option value="best rating">Best rating</option>
          <option value="most review">Most Review</option>
        </select>
      </form>
    </div>
  );
}
ShortFilter.propTypes = {
  bid: PropTypes.any,
  type: PropTypes.any,
};
export default ShortFilter;
