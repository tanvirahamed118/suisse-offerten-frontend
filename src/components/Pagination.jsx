import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function Pagination({ handlePageChange, page, totalItems, itemsPerPage }) {
  const { t } = useTranslation();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex gap-2 flex-wrap">
      <button
        className="border border-gray-300 py-1 px-5 rounded-md text-[#3097D1] text-base font-normal hover:bg-[#D4DBE0]"
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        {t("back")}
      </button>
      {[...Array(totalPages).keys()].map((index) => (
        <button
          key={index}
          className={`border border-gray-300 py-1 px-3 rounded-md text-[#3097D1] text-base font-normal hover:bg-[#D4DBE0] ${
            page === index + 1 ? "bg-[#D4DBE0]" : ""
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="border border-gray-300 py-1 px-5 rounded-md text-[#3097D1] text-base font-normal hover:bg-[#D4DBE0]"
        onClick={() => handlePageChange(page + 1)}
        disabled={page === 1} // Example: disable if no more pages
      >
        {t("next")}
      </button>
    </div>
  );
}
Pagination.propTypes = {
  handlePageChange: PropTypes.any,
  page: PropTypes.any,
  totalItems: PropTypes.any,
  itemsPerPage: PropTypes.any,
};
export default Pagination;
