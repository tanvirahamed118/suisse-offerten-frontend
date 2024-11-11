import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function ProposalTab({ setActiveTab, activeTab }) {
  const { t } = useTranslation();
  return (
    <ul className="flex flex-wrap border-b border-gray-300 my-10">
      <li
        onClick={() => setActiveTab("news")}
        className={`${
          activeTab === "news"
            ? "bg-white text-black border border-gray-300 border-b-white -mb-px overflow-hidden flex items-center gap-2 px-3 md:px-5 py-2 cursor-pointer"
            : "bg-[#f5f8fa] text-[#767676] hover:bg-[#D3E0E9] border border-transparent flex items-center gap-2 px-3 md:px-5 py-2 cursor-pointer"
        } text-sm md:text-base`}
      >
        <i className="fa-regular fa-envelope"></i>
        <button>{t("news")}</button>
      </li>
      <li
        onClick={() => setActiveTab("profile")}
        className={`${
          activeTab === "profile"
            ? "bg-white text-black border border-gray-300 border-b-white -mb-px overflow-hidden flex items-center gap-2 px-3 md:px-5 py-2 cursor-pointer"
            : "bg-[#f5f8fa] text-[#767676] hover:bg-[#D3E0E9] border border-transparent flex items-center gap-2 px-3 md:px-5 py-2 cursor-pointer"
        } text-sm md:text-base`}
      >
        <i className="fa-regular fa-user"></i>
        <button>{t("profile")}</button>
      </li>
      <li
        onClick={() => setActiveTab("reviews")}
        className={`${
          activeTab === "reviews"
            ? "bg-white text-black border border-gray-300 border-b-white -mb-px overflow-hidden flex items-center gap-2 px-3 md:px-5 py-2 cursor-pointer"
            : "bg-[#f5f8fa] text-[#767676] hover:bg-[#D3E0E9] border border-transparent flex items-center gap-2 px-3 md:px-5 py-2 cursor-pointer"
        } text-sm md:text-base`}
      >
        <i className="fa-regular fa-star"></i>
        <button>{t("reviews")}</button>
      </li>
      <li
        onClick={() => setActiveTab("proposal")}
        className={`${
          activeTab === "proposal"
            ? "bg-white text-black border border-gray-300 border-b-white -mb-px overflow-hidden flex items-center gap-2 px-3 md:px-5 py-2 cursor-pointer"
            : "bg-[#f5f8fa] text-[#767676] hover:bg-[#D3E0E9] border border-transparent flex items-center gap-2 px-3 md:px-5 py-2 cursor-pointer"
        } text-sm md:text-base`}
      >
        <i className="fa-solid fa-envelope-open-text"></i>
        <button>{t("proposal")}</button>
      </li>
    </ul>
  );
}
ProposalTab.propTypes = {
  setActiveTab: PropTypes.any,
  activeTab: PropTypes.any,
};
export default ProposalTab;
