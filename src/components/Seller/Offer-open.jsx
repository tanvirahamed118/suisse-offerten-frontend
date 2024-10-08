import moment from "moment";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  useGetAllProposalsQuery,
  useReviewRequestsMutation,
} from "../../redux/rtk/features/proposal/proposalApi";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import SellerOfferLoading from "../loading/Seller-offer-loading";
import toast, { Toaster } from "react-hot-toast";

function OfferOpen() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const sellerId = seller?.seller?._id;
  const limit = 20;
  const [load, setLoad] = useState(null);
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllProposalsQuery({ sellerId, page, limit });
  const [
    reviewRequests,
    {
      data: requestData,
      isLoading: requestLoading,
      isSuccess: requestSuccess,
      isError: requestisError,
      error: requestError,
    },
  ] = useReviewRequestsMutation();
  const totalItems = data?.totalProposal || 0;
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const filterData = data?.proposals?.filter(
    (item) => item.status === "accept"
  );
  const handleRequest = (id) => {
    reviewRequests(id);
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
        offerPrice,
        jobId,
        clientName,
        clientPhone,
        compititor,
        reviewRequest,
      } = item || {};
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
              <p className="text-[#000] text-base font-normal">{clientName}</p>
              <p className="text-[#000] text-base font-normal hover:text-[#0050b2] hover:underline">
                {clientPhone}
              </p>
            </div>
          </td>
          <td className="p-5 align-top border-b border-black text-left">
            <div className="flex flex-col gap-2 items-start">
              <p className="text-black text-base font-normal">{status}</p>
              <h3 className="text-[#19be10] text-base font-normal">
                {status ===
                "Client has received your offer but has not yet confirmed it"
                  ? "(pending)"
                  : status === "accept"
                  ? "(Open)"
                  : status === "archived"
                  ? "(Rejected)"
                  : null}
              </h3>
            </div>
          </td>
          <td className="p-5 align-top border-b border-black text-left">
            <div className="flex gap-1 items-start justify-start">
              <i className="fa fa-users text-base text-[#000111] pt-1"></i>
              <p className="text-black text-base font-normal">{compititor}</p>
            </div>
          </td>
          <td className="p-5 align-top border-b border-black text-left">
            <div className="flex flex-col gap-1 lg:items-end items-center">
              <p className="text-black text-lg font-normal text-right">
                CHF {offerPrice}
              </p>
              <p className="text-[#999] text-base font-normal text-right">
                {t("")}
              </p>
              <p className="text-[#999] text-xs font-normal text-right">
                {t("orginally_published")}: {formattedDate}
              </p>
              {status === "accept" && (
                <>
                  <p className="text-black text-sm pt-5 font-normal text-center w-full">
                    {t("tast_completed")}
                  </p>
                  <button
                    onClick={() => handleRequest(_id)}
                    className={
                      reviewRequest
                        ? "text-white bg-gray-400 py-2 text-center w-full rounded-md text-base font-normal flex justify-center items-center gap-2 cursor-not-allowed"
                        : "text-white bg-[#19be10] py-2 text-center w-full rounded-md text-base font-normal hover:bg-[#16A60E] flex justify-center items-center gap-2"
                    }
                    disabled={reviewRequest}
                  >
                    {}
                    {requestLoading && load === _id ? (
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
                    ) : reviewRequest ? (
                      "Request sended"
                    ) : (
                      t("request_review")
                    )}
                  </button>
                </>
              )}
            </div>
          </td>
        </tr>
      );
    });
  }
  return (
    <div className="">
      <h2 className="text-black text-xl font-bold">{t("offers")}</h2>
      <div className="">
        <div className="overflow-x-auto ">
          <table className="min-w-[900px] divide-y divide-gray-200">
            <thead>
              <tr className="border-b border-black">
                <th className="p-5 align-middle border-b border-black text-left">
                  <h2 className="text-black text-lg font-bold">
                    {t("order_title")}
                  </h2>
                </th>
                <th className="p-5 align-middle border-b border-black text-left">
                  <h2 className="text-black text-lg font-bold">
                    {t("status")}
                  </h2>
                </th>
                <th className="p-5 align-middle border-b border-black text-left w-3/12">
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

export default OfferOpen;
