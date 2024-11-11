import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import Pagination from "../Pagination";
import StarRating from "../Star-rating";
import provider from "../../assets/images/review/Group-d1359fcb6c40248caecf.svg";
import ProviderLoading from "../loading/Provider-loading";
import ShortFilter from "./Short-filter";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import { useGetAllOfferQuery } from "../../redux/rtk/features/offer/offerApi";

function Rejected({ activeTab }) {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const { offer } = useSelector((state) => state.offerFilter);
  const limit = 10;
  const params = useParams();
  const id = params.id;
  const jobId = id;

  const { data, isError, isLoading, isSuccess, error, refetch } =
    useGetAllOfferQuery({
      page,
      limit,
      id: jobId,
    });

  const { rejectBid } = useSelector((state) => state.perticipation);

  useEffect(() => {
    refetch();
  }, [activeTab, refetch]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return `${formattedDate} ${formattedTime}`;
  };

  const totalItems = data?.totalOffers || 0;

  const filterBy = (a, b) => {
    if (offer === "time of receipt") {
      return new Date(b?.createdAt) - new Date(a?.createdAt);
    } else if (offer === "best review") {
      return b?.seller?.totalReview - a?.seller?.totalReview;
    } else if (offer === "best rating") {
      return b?.seller?.reviewRating - a?.seller?.reviewRating;
    }
    return 0;
  };

  const filterData = data?.offers?.filter((item) => item.offerRejected);

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
      } = item.sellerData || {};
      const floorReviewPercent = parseFloat(reviewPercent?.toFixed(1));
      const { bidMessage } = item || {};
      return (
        <div
          key={_id}
          className="bg-[#F5F8FA] p-5 border border-gray-200 flex items-center justify-between rounded-md flex-col md:flex-row gap-5 md:gap-0"
        >
          <Link
            to={`/proposal/seller/${_id}/${jobId}`}
            className="flex flex-col gap-2"
          >
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center flex-wrap">
                <p className=" text-base font-bold text-[#3097d1] capitalize">
                  {companyName}
                </p>
                <StarRating rating={reviewRating} />
                <p className="text-base font-normal text-[#3097d1]">
                  ({totalReview ? totalReview : 0} reviews,{" "}
                  {floorReviewPercent >= 80
                    ? `${floorReviewPercent}% ${t("positive")}`
                    : floorReviewPercent >= 60
                    ? `${floorReviewPercent}% ${t("avarage")}`
                    : `${floorReviewPercent}% ${t("poor")}`}
                  )
                </p>
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
                {bidMessage?.slice(0, 300)}
              </p>
            </div>
          </Link>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <Link
              to={`/proposal/seller/${_id}/${jobId}`}
              className="bg-[#3056a7] hover:bg-[#274789] w-full md:w-52 py-2 rounded-md text-center text-white text-base font-normal"
            >
              {t("view_details")}
            </Link>
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <ShortFilter bid={rejectBid} type={"Rejected"} />
      <div className="flex flex-col gap-5 py-5">{content}</div>
      {totalItems > limit && (
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
Rejected.propTypes = {
  activeTab: PropTypes.any,
};
export default Rejected;
