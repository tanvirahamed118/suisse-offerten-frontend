import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  choseCategory,
  choseLocation,
} from "../redux/rtk/features/filter/jobFilterSlice";
import postalCode from "../datas/locations.json";
import grquestions from "../datas/germen/request-data";
import enquestions from "../datas/english/request-data";
import frquestions from "../datas/france/request-data";

function LocationFilter() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  let allQuestions;
  if (i18n.language === "gr") {
    allQuestions = grquestions;
  } else if (i18n.language === "en") {
    allQuestions = enquestions;
  } else {
    allQuestions = frquestions;
  }
  const filterMainCat = allQuestions.find(
    (item) => item.label === "main_services_categories"
  );

  return (
    <section className="w-full lg:w-3/12">
      <div className="md:py-6 py-2">
        <h2 className="text-black font-bold text-4xl md:text-2xl md:block hidden">
          {t("on_this_page_craftsmen_the_area")}
        </h2>

        <form action="" className="py-5 flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-5 lg:gap-8 md:justify-between">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-xl font-bold text-[#111111]">
                {t("your_category")}
              </label>
              <select
                name=""
                id=""
                className="md:w-full border border-gray-200 py-2 px-3 rounded-md outline-[#C3DEED] focus:outline outline-4 text-base text-black font-normal"
                onChange={(e) => dispatch(choseCategory(e.target.value))}
                defaultValue=""
              >
                <option value="">{t("select_option")}</option>
                {filterMainCat.options.map((option, index) => {
                  const itemId = option.id ?? `fallback-key-${index}`;

                  return (
                    <option value={option.mainCatId} key={itemId}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-xl font-bold text-[#111111]">
                {t("your_location")}
              </label>
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
          </div>
        </form>
      </div>
    </section>
  );
}

export default LocationFilter;
