import moment from "moment";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SellerPerticipateLoading from "../loading/Seller-participate-loading";
import Pagination from "../Pagination";

function PerticipationArchived({
  data,
  isLoading,
  isSuccess,
  isError,
  error,
  setPage,
  limit,
  page,
}) {
  const { t } = useTranslation();
  const totalItems = data?.totalProposal || 0;
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const filterData = data?.proposals?.filter(
    (item) => item.status === "archived"
  );

  // decide what to show for jobs
  let content;

  if (isLoading) {
    content = (
      <>
        <SellerPerticipateLoading />
        <SellerPerticipateLoading />
        <SellerPerticipateLoading />
        <SellerPerticipateLoading />
        <SellerPerticipateLoading />
      </>
    );
  }
  if (isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && filterData?.length === 0) {
    content = (
      <p className="text-black font-semibold text-xl py-5">
        {t("no_data_found")}
      </p>
    );
  }
  if (!isLoading && !isError && isSuccess && filterData?.length > 0) {
    content = filterData.map((item) => {
      const {
        _id,
        jobTitle,
        offerNote,
        jobNumber,
        jobLocation,
        createdAt,
        status,
        jobId,
      } = item || {};
      const formattedDate = moment(createdAt).format("MMMM D, YYYY");
      return (
        <tr className="striped" key={_id}>
          <td className="p-5 align-top border-b border-black text-left">
            <div className="flex flex-col gap-2">
              <Link
                to={`/search-job/${jobId}`}
                className="text-[#0050b2] text-lg font-bold hover:underline w-72"
              >
                {jobTitle}
              </Link>
              <p className="text-[#999] text-base font-normal">{jobLocation}</p>
              <p className="text-[#999] text-base font-normal">
                {t("order_number")}: {jobNumber}
              </p>
            </div>
          </td>
          <td className="p-5 align-top border-b border-black text-left">
            <div className="flex flex-col gap-2">
              <p className="text-black text-base font-normal">
                {offerNote?.slice(0, 150)}...
              </p>
              <p className="text-[#999] text-base font-normal">
                Request made on: {formattedDate}
              </p>
              <h3 className="text-black text-base font-normal">
                <span className="font-bold">Status:</span> {status}
              </h3>
            </div>
          </td>
          <td className="p-5 align-top border-b border-black text-left">
            <div className="flex flex-col gap-3 items-end">
              <Link
                to={`/search-job/${jobId}`}
                className="bg-white py-3 w-52 rounded-md text-center text-black font-normal border border-gray-200 hover:border-gray-300 text-base"
              >
                {t("view_advertisement")}
              </Link>
              <p className="text-base font-normal text-black">
                {t("rating_archived")}
              </p>
            </div>
          </td>
        </tr>
      );
    });
  }
  return (
    <div className="text-black text-xl font-bold">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 w-[900px]">
          <thead>
            <tr className="border-b border-black">
              <th className="px-5 py-2 align-middle border-b border-black text-left">
                <h2 className="text-black text-lg font-bold">
                  {t("order_title")}
                </h2>
              </th>
              <th className="px-5 py-2 align-middle border-b border-black text-left">
                <h2 className="text-black text-lg font-bold">
                  {t("conact_request")}
                </h2>
              </th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>
      {totalItems?.length > 20 && (
        <Pagination
          handlePageChange={handlePageChange}
          page={page}
          totalItems={totalItems}
          itemsPerPage={limit}
        />
      )}
    </div>
  );
}
PerticipationArchived.propTypes = {
  data: PropTypes.any,
  isLoading: PropTypes.any,
  isSuccess: PropTypes.any,
  isError: PropTypes.any,
  error: PropTypes.any,
  setPage: PropTypes.any,
  limit: PropTypes.any,
  page: PropTypes.any,
};
export default PerticipationArchived;
