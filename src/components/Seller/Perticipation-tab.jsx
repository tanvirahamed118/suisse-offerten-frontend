import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function PerticipationTab({ setActiveTab, activeTab }) {
  const { t } = useTranslation();
  return (
    <ul className="flex border-b border-gray-300 my-10">
      <li
        className={`${
          activeTab === "all"
            ? "bg-white text-black border border-gray-300 border-b-white -mb-px block overflow-hidden"
            : "bg-[#f5f8fa] text-[#767676] hover:bg-[#D3E0E9] border border-transparent"
        }`}
      >
        <button
          onClick={() => setActiveTab("all")}
          className={`py-2 px-5 ${
            activeTab === "Offering"
              ? "bg-white text-black "
              : "bg-[#f5f8fa] text-[#767676] hover:bg-[#D3E0E9]"
          }`}
        >
          {t("all")}
        </button>
      </li>
      <li
        className={`${
          activeTab === "archived"
            ? "bg-white text-black border border-gray-300 border-b-white -mb-px block overflow-hidden"
            : "bg-[#f5f8fa] text-[#767676] hover:bg-[#D3E0E9] border border-transparent"
        }`}
      >
        <button
          onClick={() => setActiveTab("archived")}
          className={`py-2 px-5 ${
            activeTab === "Rejected"
              ? "bg-white text-black "
              : "bg-[#f5f8fa] text-[#767676] hover:bg-[#D3E0E9]"
          }`}
        >
          {t("archived")}
        </button>
      </li>
    </ul>
  );
}
PerticipationTab.propTypes = {
  setActiveTab: PropTypes.any,
  activeTab: PropTypes.any,
  data: PropTypes.any,
};
export default PerticipationTab;
