import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function Pagination({ handlePageChange, page, totalItems, itemsPerPage }) {
  const { t } = useTranslation();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex gap-2 flex-wrap pt-8">
      <button
        className="bg-gray-400 text-white font-bold rounded-md hover:bg-gray-500 text-base py-3 px-5"
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        {t("back")}
      </button>
      {[...Array(totalPages).keys()].map((index) => (
        <button
          key={index}
          className={`border border-gray-300 py-2 px-5 text-center rounded-md text-[#111] text-base font-bold ${
            page === index + 1 ? "bg-[#FFAA00] font-bold" : ""
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className="bg-gray-400 text-white font-bold rounded-md hover:bg-gray-500 text-base py-3 px-5"
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages || page * itemsPerPage >= totalItems}
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
