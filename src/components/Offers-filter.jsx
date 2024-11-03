import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  choseCategory,
  choseLocation,
} from "../redux/rtk/features/filter/jobFilterSlice";
import postalCode from "../datas/locations.json";

function OffersFilter() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <section>
      <div className="container md:py-6 py-2">
        <h2 className="text-black font-bold text-2xl md:text-2xl md:block hidden">
          {t("on_this_page_craftsmen_the_area")}
        </h2>
        <h2 className="text-black font-bold text-xl md:hidden">
          {t("find_orders_in_Switzerland")}
        </h2>
        <form action="" className="py-5 flex flex-col gap-2 w-full md:w-5/12">
          <div className="flex flex-col gap-5 md:flex-row md:justify-between">
            <select
              name=""
              id=""
              className="md:w-full border border-gray-200 py-2 px-3 rounded-md outline-[#C3DEED] focus:outline outline-4 text-base text-black font-normal"
              onChange={(e) => dispatch(choseCategory(e.target.value))}
              defaultValue=""
            >
              <option value="">{t("select_option")}</option>
              <option value="Inside">Inside</option>
              <option value="Outside">Outside</option>
              <option value="Planning & Consulting">
                Planning & Consulting
              </option>
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
              defaultValue=""
            >
              <option value="">{t("select_option")}</option>
              {[
                ...new Set(postalCode.locations?.map((item) => item.Kanton)),
              ].map((kanton, index) => (
                <option key={index} value={kanton}>
                  {kanton}
                </option>
              ))}
            </select>
          </div>
        </form>
        <p className="text-black text-base font-normal hidden md:block">
          {t("order_only_des")}
        </p>
      </div>
    </section>
  );
}

export default OffersFilter;
