import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function TabMenu({ setActiveTab, activeTab, data }) {
  const { placeBid, rejectBid } = data || {};
  const { t } = useTranslation();

  return (
    <ul className="flex flex-wrap border-b border-gray-300 my-10">
      <li
        className={`${
          activeTab === "Offering"
            ? "bg-white text-black border border-gray-300 border-b-white -mb-px block overflow-hidden"
            : "bg-[#f5f8fa] text-[#767676] hover:bg-[#D3E0E9] border border-transparent"
        }`}
      >
        <button
          onClick={() => setActiveTab("Offering")}
          className={`py-2 px-3 md:px-5 ${
            activeTab === "Offering"
              ? "bg-white text-black text-xs sm:text-sm md:text-base"
              : "bg-[#f5f8fa] text-[#767676] hover:bg-[#D3E0E9] text-xs sm:text-sm md:text-base"
          }`}
        >
          {t("offering")}
          <span className="bg-red-500 text-white rounded-full px-1 text-xs sm:text-sm ml-2">
            {placeBid ? placeBid : 0}
          </span>
        </button>
      </li>
      <li
        className={`${
          activeTab === "Rejected"
            ? "bg-white text-black border border-gray-300 border-b-white -mb-px block overflow-hidden"
            : "bg-[#f5f8fa] text-[#767676] hover:bg-[#D3E0E9] border border-transparent"
        }`}
      >
        <button
          onClick={() => setActiveTab("Rejected")}
          className={`py-2 px-3 md:px-5 ${
            activeTab === "Rejected"
              ? "bg-white text-black text-xs sm:text-sm md:text-base"
              : "bg-[#f5f8fa] text-[#767676] hover:bg-[#D3E0E9] text-xs sm:text-sm md:text-base"
          }`}
        >
          {t("rejected")}
          <span className="bg-red-500 text-white rounded-full px-1 text-xs sm:text-sm ml-2">
            {rejectBid ? rejectBid : 0}
          </span>
        </button>
      </li>
      <li
        className={`${
          activeTab === "Job Description"
            ? "bg-white text-black border border-gray-300 border-b-white -mb-px block overflow-hidden"
            : "bg-[#f5f8fa] text-[#767676] hover:bg-[#D3E0E9] border border-transparent"
        }`}
      >
        <button
          onClick={() => setActiveTab("Job Description")}
          className={`py-2 px-3 md:px-5 ${
            activeTab === "Job Description"
              ? "bg-white text-black text-xs sm:text-sm md:text-base"
              : "bg-[#f5f8fa] text-[#767676] hover:bg-[#D3E0E9] text-xs sm:text-sm md:text-base"
          }`}
        >
          {t("job_description")}
        </button>
      </li>
    </ul>
  );
}
TabMenu.propTypes = {
  setActiveTab: PropTypes.any,
  activeTab: PropTypes.any,
  data: PropTypes.any,
};
export default TabMenu;
