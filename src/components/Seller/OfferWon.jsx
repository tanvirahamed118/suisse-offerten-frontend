import moment from "moment";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import SellerOfferLoading from "../loading/Seller-offer-loading";
import {
  useGetAllOfferBySellerQuery,
  useOfferArchiveRequestMutation,
  useOfferReviewRequestMutation,
} from "../../redux/rtk/features/offer/offerApi";
import toast, { Toaster } from "react-hot-toast";

function OfferWon() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const sellerId = seller?.seller?._id;
  const limit = 20;
  const [load, setLoad] = useState(null);
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllOfferBySellerQuery({
      sellerId,
      page,
      limit,
      status: "accept",
    });
  const [
    offerReviewRequest,
    {
      data: requestData,
      isLoading: requestLoading,
      isSuccess: requestSuccess,
      isError: requestisError,
      error: requestError,
    },
  ] = useOfferReviewRequestMutation();
  const [
    offerArchiveRequest,
    {
      data: archiveData,
      isLoading: archiveLoading,
      isSuccess: archivetSuccess,
      isError: archiveisError,
      error: archiveError,
    },
  ] = useOfferArchiveRequestMutation();
  const totalItems = data?.totalOffers || 0;
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const handleRequest = (id) => {
    offerReviewRequest(id);
    setLoad(id);
  };
  const handleArchive = (id) => {
    offerArchiveRequest(id);
    setLoad(id);
  };

  useEffect(() => {
    if (requestSuccess) {
      toast.success(requestData?.message);
    }
    if (requestisError) {
      toast.error(requestError.data.message);
    }
  }, [requestError, requestisError, requestSuccess, requestData]);

  useEffect(() => {
    if (archivetSuccess) {
      toast.success(archiveData?.message);
    }
    if (archiveisError) {
      toast.error(archiveError.data.message);
    }
  }, [archiveError, archiveisError, archivetSuccess, archiveData]);

  const filterData = data?.offers?.filter((item) => !item.offerArchived);

  // decide what to show for jobs
  let content;

  if (isLoading) {
    content = (
      <>
        <SellerOfferLoading />
        <SellerOfferLoading />
        <SellerOfferLoading />
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
  if (!isLoading && !isError && filterData?.length === 0) {
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
  if (!isLoading && !isError && isSuccess && filterData?.length > 0) {
    content = filterData?.map((item) => {
      const { _id, createdAt, status, jobId, offerPrice, reviewRequest } =
        item || {};

      const { jobTitle, jobNumber, jobLocation, placeBid, rejectBid } =
        item.jobData || {};
      const { username, phone } = item.clientData || {};
      const formattedDate = moment(createdAt).format("MMMM D, YYYY");
      return (
        <tr className="striped" key={_id}>
          <td className="p-5 align-top border-b border-black text-left w-3/12">
            <div className="flex flex-col gap-2">
              <Link
                to={`/search-job/${jobId}`}
                className="text-[#3097d1] hover:text-[#0050b2] text-lg font-normal hover:underline"
              >
                {jobTitle}
              </Link>
              <p className="text-[#999] text-base font-normal">{jobLocation}</p>
              <p className="text-black text-xs font-normal">
                {t("order_number")}: {jobNumber}
              </p>
              <p className="text-[#000] text-base font-normal">{username}</p>
              <p className="text-[#000] text-base font-normal hover:text-[#0050b2] hover:underline">
                {phone}
              </p>
            </div>
          </td>
          <td className="p-5 align-top border-b border-black text-left">
            <div className="flex flex-col gap-2 items-start">
              <p className="text-black text-base font-bold capitalize">
                {status}
              </p>
              <h3 className="text-[#19be10] text-sm font-normal">
                {t("offer_accepted")}
              </h3>
            </div>
          </td>
          <td className="p-5 align-top border-b border-black text-left">
            <div className="flex gap-1 items-start justify-start">
              <i className="fa fa-users text-base text-[#000111] pt-1"></i>
              <p className="text-black text-base font-normal">
                {placeBid + rejectBid}
              </p>
            </div>
          </td>
          <td className="p-5 align-top border-b border-black text-left">
            <div className="flex flex-col gap-1 lg:items-end items-center">
              <Link
                to={`/search-job/${jobId}`}
                className="bg-white text-base py-3 w-60 rounded-md text-center text-black font-bold border border-gray-200 hover:border-gray-300"
              >
                {t("view_advertisement")}
              </Link>

              <button
                onClick={() => handleRequest(_id)}
                className={
                  reviewRequest
                    ? "text-black bg-gray-300 py-3 text-center w-60 rounded-md text-base font-bold flex justify-center items-center gap-2"
                    : "text-black bg-[#FFAA00] border py-3 text-center w-60 rounded-md text-base font-bold flex justify-center items-center gap-2"
                }
                disabled={reviewRequest}
              >
                {load === _id && requestLoading ? (
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
                    <p>{t("loading")}...</p>
                  </>
                ) : (
                  t("request_review")
                )}
              </button>

              <p className="text-black text-lg font-normal text-right">
                CHF {offerPrice}
              </p>
              <p className="text-black text-sm font-normal text-right">
                {t("rating_not_yet")}
              </p>
              <p className="text-[#999] text-xs font-normal text-right">
                {t("orginally_published")}: {formattedDate}
              </p>
              <p
                onClick={() => handleArchive(_id)}
                className="text-[#3097d1] hover:text-[#0050b2] text-base font-normal hover:underline cursor-pointer text-right flex gap-2 items-center"
              >
                {archiveLoading && load === _id ? (
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
                    <p>{t("loading")}...</p>
                  </>
                ) : (
                  t("archive")
                )}
              </p>
            </div>
          </td>
        </tr>
      );
    });
  }
  return (
    <div className="">
      <h2 className="text-black text-xl font-bold">{t("offers")}</h2>

      <div className="md:overflow-hidden overflow-x-auto w-full">
        <table className="min-w-[900px] divide-y divide-gray-200">
          <thead>
            <tr className="border-b border-black">
              <th className="p-5 align-middle border-b border-black text-left w-4/12">
                <h2 className="text-black text-lg font-bold">
                  {t("order_title")}
                </h2>
              </th>
              <th className="p-5 align-middle border-b border-black text-left">
                <h2 className="text-black text-lg font-bold">{t("status")}</h2>
              </th>
              <th className="p-5 align-middle border-b border-black text-left ">
                <h2 className="text-black text-lg font-bold">
                  {t("competitor_offer")}
                </h2>
              </th>
              <th className="p-5 align-middle border-b border-black text-right">
                <h2 className="text-black text-lg font-bold">
                  {t("my_offers")}
                </h2>
              </th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>

      <div className="">
        <div className="flex gap-2 flex-wrap pt-5">
          {filterData?.length > 20 && (
            <Pagination
              handlePageChange={handlePageChange}
              page={page}
              totalItems={totalItems}
              itemsPerPage={limit}
            />
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default OfferWon;
