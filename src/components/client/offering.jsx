import { useEffect, useState } from "react";
import {
  useGetAllPerticipationByQuery,
  useUpdatePerticipationByStatusMutation,
} from "../../redux/rtk/features/perticipation/perticipation";
import { Link, useParams } from "react-router-dom";
import Pagination from "../Pagination";
import StarRating from "../Star-rating";
import provider from "../../assets/images/review/Group-d1359fcb6c40248caecf.svg";
import ProviderLoading from "../loading/Provider-loading";
import ShortFilter from "./Short-filter";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import OfferPopup from "../../pages/client/Offer-popup";
import {
  useGetAllProposalsDefaultQuery,
  useUpdateProposalStatusByClientMutation,
} from "../../redux/rtk/features/proposal/proposalApi";
import ProposalPopup from "../../pages/client/Proposal-popup";

function Offering({ activeTab }) {
  const { t } = useTranslation();
  const params = useParams();
  const jobId = params.id;

  const [page, setPage] = useState(1);
  const [sellerId, setSellerId] = useState(null);
  const { offer } = useSelector((state) => state.offerFilter);
  const [perticiationId, setPerticipationID] = useState(null);
  const [
    updateProposalStatusByClient,
    {
      data: propData,
      isLoading: propIsLoading,
      isSuccess: propIsSuccess,
      isError: propIsError,
      error: propError,
    },
  ] = useUpdateProposalStatusByClientMutation();

  const [load, setLoad] = useState(null);
  const [isShow, setIsShow] = useState(false);
  const [isPropShow, setIsPropShow] = useState(false);

  const limit = 20;

  const status = "reject";
  const { data, isError, isLoading, isSuccess, error, refetch } =
    useGetAllPerticipationByQuery({
      page,
      limit,
      id: jobId,
    });
  const [
    updatePerticipationByStatus,
    {
      data: getData,
      isError: getISError,
      isLoading: getIdLoading,
      isSuccess: getIsSuccess,
      error: getError,
    },
  ] = useUpdatePerticipationByStatusMutation();
  const { data: getAllProposals } = useGetAllProposalsDefaultQuery();
  const { placeBid } = useSelector((state) => state.perticipation);

  const filterData = data?.participations?.filter(
    (item) => item.status === "progress"
  );
  const handleStatus = (id) => {
    const data = { status, jobId };
    updatePerticipationByStatus({ data, id });
    setLoad(id);
  };
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Get date in the format MM/DD/YYYY
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    });

    // Get time in the format HH:MM
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // Use `true` if you want 12-hour format with AM/PM
    });

    return `${formattedDate} ${formattedTime}`;
  };
  const totalItems = data?.totalJobs || 0;
  useEffect(() => {
    refetch();
  }, [activeTab, refetch]);

  const filterBy = (a, b) => {
    if (offer === "time of receipt") {
      // Sort by creation date (most recent first)
      return new Date(b?.createdAt) - new Date(a?.createdAt);
    } else if (offer === "most review") {
      // Sort by the total number of reviews (most reviews first)
      return b?.sellerData?.totalReview - a?.sellerData?.totalReview;
    } else if (offer === "best rating") {
      // Sort by the best rating (highest rating first)
      return b?.sellerData?.reviewRating - a?.sellerData?.reviewRating;
    }
    return 0; // No sorting if no filter is selected
  };

  const handlePopup = (id) => {
    setIsShow(true);
    setPerticipationID(id);
  };

  const handleProposalPopup = (id) => {
    setIsPropShow(true);
    setSellerId(id);
  };

  const handleReject = (sellerId, jobId, id) => {
    const formData = { sellerId: sellerId, jobId: jobId, status: "rejected" };
    setLoad(id);
    updateProposalStatusByClient(formData);
  };

  useEffect(() => {
    if (getISError) {
      toast.error(getError?.data?.message);
    }
    if (getIsSuccess) {
      toast.success(getData?.message);
    }
  }, [getISError, getIsSuccess, getData, getError]);

  useEffect(() => {
    if (propIsError) {
      toast.error(propError?.data?.message);
    }
    if (propIsSuccess) {
      toast.success(propData?.message);
    }
  }, [propIsError, propError, propIsSuccess, propData]);

  // decide what to show for jobs
  let content;

  if (isLoading) {
    content = (
      <div className="w-full flex flex-col gap-5">
        <ProviderLoading />
        <ProviderLoading />
        <ProviderLoading />
        <ProviderLoading />
        <ProviderLoading />
      </div>
    );
  }
  if (isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && filterData?.length === 0) {
    content = <p>{t("no_data_found")}</p>;
  }
  if (!isLoading && !isError && isSuccess && filterData?.length > 0) {
    content = filterData?.sort(filterBy)?.map((item) => {
      const {
        _id,
        companyName,
        reviewRating,
        totalReview,
        reviewPercent,
        location,
        createdAt,
        emailVerify,
        uidVerify,
        locationVerify,
        postalCode,
        streetNo,
      } = item.sellerData || {};
      const filterProp = getAllProposals?.find(
        (e) => e.sellerId === item?.sellerId && e.jobId === item?.jobId
      );

      return (
        <div
          key={_id}
          className="bg-[#F5F8FA] p-5 border border-gray-200 flex items-start justify-between rounded-md flex-col md:flex-row gap-5 md:gap-0"
        >
          <Link
            to={`/proposal/seller/${_id}/${jobId}`}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center gap-5">
              <div className="flex gap-2 items-center w-full">
                <Link
                  to={`/proposal/seller/${_id}/${jobId}`}
                  className="hover:underline text-base font-bold text-[#3097d1] capitalize"
                >
                  {companyName}
                </Link>
                <StarRating rating={reviewRating} />
                <Link
                  to={`/proposal/seller/${_id}/${jobId}`}
                  className="hover:underline text-base font-normal text-[#3097d1]"
                >
                  ({totalReview ? totalReview : 0} {t("reviews")},{" "}
                  {reviewPercent >= 80
                    ? `${reviewPercent}% ${t("positive")}`
                    : reviewPercent >= 60
                    ? `${reviewPercent}% ${t("avarage")}`
                    : `${reviewPercent}% ${t("poor")}`}
                  )
                </Link>
                <span className="flex gap-1 items-center">
                  {emailVerify ? (
                    <i className="fa-solid fa-envelope-circle-check text-xm text-purple-500"></i>
                  ) : (
                    <i className="fa-solid fa-envelope-circle-check text-xm text-gray-400"></i>
                  )}
                  {uidVerify ? (
                    <i className="fa-solid fa-passport text-sm text-blue-500"></i>
                  ) : (
                    <i className="fa-solid fa-passport text-sm text-gray-400"></i>
                  )}
                  {locationVerify ? (
                    <i className="fa-solid fa-location-dot text-sm text-[#FF00FE]"></i>
                  ) : (
                    <i className="fa-solid fa-location-dot text-sm text-gray-400"></i>
                  )}
                </span>
              </div>
              {filterProp && (
                <p
                  className={
                    filterProp?.view === "unseen"
                      ? "text-red-500 text-xl font-bold w-9/12"
                      : "text-red-500 text-xl font-normal w-9/12"
                  }
                >
                  {t("request_recive")} {filterProp?.sellerName}
                </p>
              )}
            </div>
            <p className="text-[#7f7f7f] text-base font-normal">
              {t("from")} {streetNo + " " + postalCode + " - " + location}
            </p>

            <span className="flex gap-2 items-center">
              <img src={provider} alt="" />
              <p className="text-black text-base font-medium">
                {t("provider_interested")} {formatDate(createdAt)}
              </p>
            </span>
            <p className="text-[#7f7f7f] text-base font-normal w-9/12">
              {item?.message.slice(0, 300)}
            </p>
          </Link>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <button
              onClick={() => handlePopup(item._id)}
              disabled={
                filterProp?.status === "accept" ||
                filterProp?.status === "rejected"
              }
              className={
                filterProp?.status === "accept" ||
                filterProp?.status === "rejected"
                  ? "bg-gray-400 cursor-not-allowed w-full md:w-52 py-2 rounded-md text-center text-white text-base font-normal"
                  : "bg-[#19be10] hover:bg-[#16A60E] w-full md:w-52 py-2 rounded-md text-center text-white text-base font-normal"
              }
            >
              {t("request_offer")}
            </button>
            <Link
              to={`/proposal/seller/${_id}/${jobId}`}
              className="bg-[#3056a7] hover:bg-[#274789] w-full md:w-52 py-2 rounded-md text-center text-white text-base font-normal"
            >
              {t("view_details")}
            </Link>
            <button
              disabled={
                filterProp?.status === "accept" ||
                filterProp?.status === "rejected"
              }
              onClick={() => handleStatus(item?._id)}
              className={
                filterProp?.status === "accept" ||
                filterProp?.status === "rejected"
                  ? "bg-gray-400 cursor-not-allowed w-full md:w-52 py-2 rounded-md text-center text-white text-base font-normal flex gap-2 justify-center items-center"
                  : "bg-gray-500 hover:bg-gray-600 w-full md:w-52 py-2 rounded-md text-center text-white text-base font-normal flex gap-2 justify-center items-center"
              }
            >
              {load === item?._id && getIdLoading ? (
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
                t("reject_offer")
              )}
            </button>
            <hr />
            {filterProp && (
              <>
                <button
                  onClick={() => handleProposalPopup(item?.sellerId)}
                  disabled={
                    filterProp?.status === "accept" ||
                    filterProp?.status === "archived" ||
                    filterProp?.status === "rejected"
                  }
                  className={
                    filterProp?.status === "accept" ||
                    filterProp?.status === "archived" ||
                    filterProp?.status === "rejected"
                      ? "bg-gray-400 w-full md:w-52 py-2 rounded-md text-center text-white text-base font-normal cursor-not-allowed"
                      : "bg-[#FFAA00] hover:bg-[#D6A135] w-full md:w-52 py-2 rounded-md text-center text-white text-base font-normal"
                  }
                >
                  {filterProp?.status === "accept"
                    ? t("proposal_accepted")
                    : filterProp?.status === "rejected"
                    ? t("proposal_rejcted")
                    : t("request_proposal")}
                </button>
                <button
                  onClick={() =>
                    handleReject(item.sellerId, item?.jobId, item?._id)
                  }
                  disabled={
                    filterProp?.status === "accept" ||
                    filterProp?.status === "archived" ||
                    filterProp?.status === "rejected"
                  }
                  className={
                    filterProp?.status === "accept" ||
                    filterProp?.status === "archived" ||
                    filterProp?.status === "rejected"
                      ? "bg-gray-400 cursor-not-allowed w-full md:w-52 py-2 rounded-md text-center text-white text-base font-normal flex gap-2 justify-center items-center"
                      : "bg-gray-500 hover:bg-gray-600 w-full md:w-52 py-2 rounded-md text-center text-white text-base font-normal flex gap-2 justify-center items-center"
                  }
                >
                  {load === item?._id && propIsLoading ? (
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
                    t("reject_proposal")
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <ShortFilter bid={placeBid} type={"Interested"} />
      <div className="flex flex-col gap-5 py-5">{content}</div>
      {totalItems?.length > 20 && (
        <Pagination
          handlePageChange={handlePageChange}
          page={page}
          totalItems={totalItems}
          itemsPerPage={limit}
        />
      )}
      <Toaster />
      {isShow && (
        <OfferPopup
          setIsShow={setIsShow}
          data={data}
          id={perticiationId}
          isShow={isShow}
        />
      )}
      {isPropShow && (
        <ProposalPopup
          setIsShow={setIsPropShow}
          sellerId={sellerId}
          isShow={isPropShow}
          jobId={jobId}
        />
      )}
    </div>
  );
}
Offering.propTypes = {
  activeTab: PropTypes.any,
};
export default Offering;
