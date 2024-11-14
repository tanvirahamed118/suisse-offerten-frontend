import moment from "moment";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SellerPerticipateLoading from "../loading/Seller-participate-loading";
import Pagination from "../Pagination";
import { useState } from "react";
import { useGetAllOfferBySellerQuery } from "../../redux/rtk/features/offer/offerApi";

function PerticipationArchived() {
  const { t } = useTranslation();
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const sellerId = seller?.seller?._id;
  const [page, setPage] = useState(1);
  const limit = 20;
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllOfferBySellerQuery({
      sellerId,
      page,
      limit,
      status: "reject",
    });
  const totalItems = data?.totalParticipations || 0;
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

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
    content = (
      <tr>
        <td colSpan="4" className="text-center">
          <p>{error}</p>
        </td>
      </tr>
    );
  }
  if (!isLoading && !isError && data?.offers?.length === 0) {
    content = (
      <tr>
        <td colSpan="4" className="text-center">
          <p className="text-black font-semibold text-xl py-5">
            {t("no_data_found")}
          </p>
        </td>
      </tr>
    );
  }
  if (!isLoading && !isError && isSuccess && data?.offers?.length > 0) {
    content = data?.offers?.map((item) => {
      const { _id, bidMessage, createdAt, status, jobId } = item || {};

      const { jobTitle, jobNumber, jobLocation } = item.jobData || {};
      const formattedDate = moment(createdAt).format("MMMM D, YYYY");
      return (
        <tr className="striped border-b border-gray-300" key={_id}>
          <td className="p-5 align-top text-left">
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
          <td className="p-5 align-top text-left">
            <div className="flex flex-col gap-2">
              <p className="text-black text-base font-normal">
                {bidMessage?.slice(0, 150)}...
              </p>
              <p className="text-[#999] text-base font-normal">
                Request made on: {formattedDate}
              </p>
              <h3 className="text-black text-base font-normal">
                <span className="font-bold">Status:</span> {status}
              </h3>
            </div>
          </td>
          <td className="p-5 align-top text-left">
            <div className="flex flex-col gap-3 items-end">
              <Link
                to={`/search-job/${jobId}`}
                className="bg-white py-3 w-52 rounded-md text-center text-black font-bold border border-gray-200 hover:border-gray-300 text-base"
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
      <div className="overflow-x-auto lg:overflow-x-clip">
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

export default PerticipationArchived;
