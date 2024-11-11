import { useDispatch } from "react-redux";
import {
  choseCategory,
  choseStar,
} from "../../redux/rtk/features/filter/reviewSlice";
import { useTranslation } from "react-i18next";

function ReviewFilter() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-3 py-2 w-full md:w-6/12">
      <select
        name=""
        id=""
        onChange={(e) => dispatch(choseStar(e.target.value))}
        className="border border-gray-200 px-2 py-3 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-2 md:px-4 w-6/12"
      >
        <option value="">{t("all_star")}</option>
        <option value="5">5 {t("star")}</option>
        <option value="4">4 {t("star")}</option>
        <option value="3">3 {t("star")}</option>
        <option value="2">2 {t("star")}</option>
        <option value="1">1 {t("star")}</option>
      </select>
      <select
        name=""
        id=""
        onChange={(e) => dispatch(choseCategory(e.target.value))}
        className="border border-gray-200 py-3 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-2 px-4 w-6/12"
      >
        <option value="">{t("all_category")}</option>
        <option value="inside">Inside</option>
        <option value="outside">Outside</option>
        <option value="planning & consulting">Planning & Consulting</option>
        <option value="car/vehicles">Car/Vehicles</option>
        <option value="moving, moving house">Moving, moving house</option>
        <option value="cleaning">Cleaning</option>
        <option value="transport & Disposal">Transport & Disposal</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}

export default ReviewFilter;
