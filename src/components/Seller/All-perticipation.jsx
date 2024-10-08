import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Pagination from "../Pagination";
import moment from "moment";
import { Link } from "react-router-dom";
import SellerPerticipateLoading from "../loading/Seller-participate-loading";
import { useUpdateProposalStatusBySellerMutation } from "../../redux/rtk/features/proposal/proposalApi";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function AllPerticipation({
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

  const [load, setLoad] = useState(null);
  const totalItems = data?.totalProposal || 0;
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const filterData = data?.proposals.filter(
    (item) => item.status !== "archived"
  );
  const [
    updateProposalStatusBySeller,
    {
      data: statusData,
      isLoading: statusLoading,
      isSuccess: statusSuccess,
      isError: statusIsError,
      error: statusError,
    },
  ] = useUpdateProposalStatusBySellerMutation();

  const handleStatus = (id) => {
    const status = "archived";
    const formData = { status, id };
    updateProposalStatusBySeller(formData);
    setLoad(id);
  };
  useEffect(() => {
    if (statusIsError) {
      toast.error(statusError?.data?.message);
    }
    if (statusSuccess) {
      toast.success(statusData?.message);
    }
  }, [statusIsError, statusSuccess, statusData, statusError]);
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
    content = filterData?.map((item) => {
      const {
        _id,
        jobTitle,
        jobNumber,
        jobLocation,
        createdAt,
        status,
        offerNote,
        jobId,
      } = item || {};
      const formattedDate = moment(createdAt).format("MMMM D, YYYY");
      return (
        <tr className="striped border-b border-gray-300" key={_id}>
          <td className="p-5 align-top  text-left">
            <div className="flex flex-col gap-2">
              <Link
                to={`/search-job/${jobId}`}
                className="text-[#0050b2] text-lg font-bold hover:underline"
              >
                {jobTitle}
              </Link>
              <p className="text-[#999] text-base font-normal">{jobLocation}</p>
              <p className="text-[#999] text-base font-normal">
                {t("order_number")}: {jobNumber}
              </p>
            </div>
          </td>
          <td className="p-5 align-top text-left">
            <div className="flex flex-col gap-2">
              <p className="text-black text-base font-normal">
                {offerNote?.slice(0, 150)}...
              </p>
              <p className="text-[#999] text-base font-normal">
                {t("request_made_on")} {formattedDate}
              </p>
              <h3 className="text-black text-base font-normal">
                {t("order_status")}: {status}
              </h3>
            </div>
          </td>
          <td className="p-5 align-top text-left">
            <div className="flex flex-col gap-3 items-end">
              {status ===
                "Client has received your offer but has not yet confirmed it" && (
                <Link
                  to={`/seller-dashboard/perticipation/${_id}`}
                  className="bg-[#ff7100] py-3 w-full rounded-md text-center text-white font-normal text-base"
                >
                  {t("update_offer")}
                </Link>
              )}
              <Link
                to={`/search-job/${jobId}`}
                className="bg-white text-base py-3 w-52 rounded-md text-center text-black font-normal border border-gray-200 hover:border-gray-300"
              >
                {t("view_advertisement")}
              </Link>

              {status === "pending" && (
                <button
                  onClick={() => handleStatus(_id)}
                  className="text-[#0050b2] text-base font-normal hover:underline flex gap-2 items-center"
                >
                  {load === item?._id && statusLoading ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 animate-spin"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                      <p>{t("loading")}</p>
                    </>
                  ) : (
                    t("archive")
                  )}
                </button>
              )}
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
            <tr className="border-b border-gray-300">
              <th className="px-5 py-2 align-middle  text-left w-4/12">
                <h2 className="text-black text-lg font-bold">
                  {t("order_title")}
                </h2>
              </th>
              <th className="px-5 py-2 align-middle  text-left w-8/12">
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
      <Toaster />
    </div>
  );
}
AllPerticipation.propTypes = {
  data: PropTypes.any,
  isLoading: PropTypes.any,
  isSuccess: PropTypes.any,
  isError: PropTypes.any,
  error: PropTypes.any,
  setPage: PropTypes.any,
  limit: PropTypes.any,
  page: PropTypes.any,
};
export default AllPerticipation;
