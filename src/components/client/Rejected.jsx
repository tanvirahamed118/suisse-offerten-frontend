import { useEffect, useState } from "react";
import Verify from "../../assets/verify.png";
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

function Rejected({ activeTab }) {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const { offer } = useSelector((state) => state.offerFilter);
  const limit = 20;
  const [load, setLoad] = useState(null);
  const params = useParams();
  const id = params.id;
  const jobId = id;
  const status = "progress";
  const { data, isError, isLoading, isSuccess, error, refetch } =
    useGetAllPerticipationByQuery({
      page,
      limit,
      id: id,
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
  const { rejectBid } = useSelector((state) => state.perticipation);

  useEffect(() => {
    refetch();
  }, [activeTab, refetch]);
  const filterData = data?.participations?.filter(
    (item) => item.status === "reject"
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
    if (getISError) {
      toast.error(getError?.data?.message);
    }
    if (getIsSuccess) {
      toast.success(getData?.message);
    }
  }, [getISError, getIsSuccess, getData, getError]);

  const filterBy = (a, b) => {
    if (offer === "time of receipt") {
      // Sort by creation date (most recent first)
      return new Date(b?.createdAt) - new Date(a?.createdAt);
    } else if (offer === "best review") {
      // Sort by the total number of reviews (most reviews first)
      return b?.seller?.totalReview - a?.seller?.totalReview;
    } else if (offer === "best rating") {
      // Sort by the best rating (highest rating first)
      return b?.seller?.reviewRating - a?.seller?.reviewRating;
    }
    return 0; // No sorting if no filter is selected
  };

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
      } = item.sellerData || {};
      return (
        <div
          key={_id}
          className="bg-[#F5F8FA] p-5 border border-gray-200 flex items-center justify-between rounded-md flex-col md:flex-row gap-5 md:gap-0"
        >
          <Link
            to={`/proposal/seller/${_id}/${id}`}
            className="flex flex-col gap-2"
          >
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center flex-wrap">
                <Link
                  to={`/proposal/seller/${_id}/${id}`}
                  className="hover:underline text-base font-bold text-[#3097d1] capitalize"
                >
                  {companyName}
                </Link>
                <StarRating rating={reviewRating} />
                <Link
                  to={`/proposal/seller/${_id}/${id}`}
                  className="hover:underline text-base font-normal text-[#3097d1]"
                >
                  ({totalReview ? totalReview : 0} reviews,{" "}
                  {reviewPercent ? reviewPercent : 0}% positive)
                </Link>
                <span className="flex items-center gap-1">
                  <img src={Verify} alt="" className="w-24" />
                </span>
              </div>
              <p className="text-[#7f7f7f] text-base font-normal">
                {t("from")} {location}
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
            </div>
          </Link>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <button
              onClick={() => handleStatus(item?._id)}
              className="bg-gray-500 hover:bg-gray-600 w-full md:w-52 py-2 rounded-md text-center text-white text-base font-normal flex gap-2 justify-center items-center"
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
                t("undo_rejection")
              )}
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <ShortFilter bid={rejectBid} type={"Rejected"} />
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
    </div>
  );
}
Rejected.propTypes = {
  activeTab: PropTypes.any,
};
export default Rejected;
