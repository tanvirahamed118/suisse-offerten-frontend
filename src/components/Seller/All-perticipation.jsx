import { useTranslation } from "react-i18next";
import Pagination from "../Pagination";
import moment from "moment";
import { Link } from "react-router-dom";
import SellerPerticipateLoading from "../loading/Seller-participate-loading";
import { useState } from "react";

import ArchivedPopup from "./Archived-popup";
import { useGetAllOfferBySellerBothQuery } from "../../redux/rtk/features/offer/offerApi";

function AllPerticipation() {
  const { t } = useTranslation();
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const sellerId = seller?.seller?._id;
  const [page, setPage] = useState(1);
  const limit = 20;
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllOfferBySellerBothQuery({
      sellerId,
      page,
      limit,
      status: ["pending", "request"],
    });
  const [isShow, setIsShow] = useState(false);

  const totalItems = data?.totalOffers || 0;

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
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && data?.offers?.length === 0) {
    content = (
      <p className="text-black font-semibold text-xl py-5">
        {t("no_data_found")}
      </p>
    );
  }
  if (!isLoading && !isError && isSuccess && data?.offers?.length > 0) {
    content = data?.offers?.map((item) => {
      const { _id, bidMessage, createdAt, status, jobId, offerRequested } =
        item || {};

      const { jobTitle, jobNumber, jobLocation } = item.jobData || {};
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
                {bidMessage?.slice(0, 150)}...
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
              <Link
                to={`/search-job/${jobId}`}
                className="bg-white text-base py-3 w-52 rounded-md text-center text-black font-normal border border-gray-200 hover:border-gray-300"
              >
                {t("view_advertisement")}
              </Link>
              {offerRequested && (
                <>
                  <span>
                    <p className="text-[#111111] text-sm fotn-normal">
                      {t("recive_request")}
                    </p>
                  </span>
                  <Link
                    to={`/search-job/prepard-bid/${jobId}`}
                    className="text-white bg-[#19be10] py-2 text-center w-full rounded-md text-base font-normal hover:bg-[#16A60E] flex justify-center items-center gap-2"
                  >
                    {t("place_bid")}
                  </Link>
                </>
              )}
            </div>
          </td>
          {isShow && (
            <ArchivedPopup
              isShow={isShow}
              setIsShow={setIsShow}
              id={_id}
              jobId={jobId}
            />
          )}
        </tr>
      );
    });
  }
  return (
    <div className="text-black text-xl font-bold">
      <div className="overflow-x-auto lg:overflow-x-clip">
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
    </div>
  );
}

export default AllPerticipation;
