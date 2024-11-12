import { useTranslation } from "react-i18next";
import Pagination from "./Pagination";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetAllSellerQuery } from "../redux/rtk/features/auth/seller/authApi";
import StarRating from "./Star-rating";
import LocationLoading from "./loading/Location-loading";

function LocationLists() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const limit = 20;
  const { category, location } = useSelector((state) => state.jobFilter);
  const split = category?.split(" ").join("_");
  const { data, isLoading, isError, isSuccess, error } = useGetAllSellerQuery({
    page,
    limit,
    category: split,
    location,
  });

  const totalItems = data?.totalSellers || 0;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // decide what to show for jobs
  let content;

  if (isLoading) {
    content = (
      <div className="w-full">
        <LocationLoading />
        <LocationLoading />
        <LocationLoading />
        <LocationLoading />
        <LocationLoading />
      </div>
    );
  }
  if (isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && data?.sellers?.length === 0) {
    content = <p>{t("no_data_found")}</p>;
  }
  if (!isLoading && !isError && isSuccess && data?.sellers?.length > 0) {
    content = data?.sellers?.map((item) => {
      const {
        companyName,
        companyLogo,

        companyDescription,
        companyTitle,
        location,
        reviewRating,
        totalReview,
        reviewPercent,
      } = item || {};

      const floorReviewPercent = parseFloat(reviewPercent?.toFixed(1));

      const reviews = item?.reviewData;
      const { jobTitle, review, createdAt } = reviews || {};
      const date = new Date(createdAt);

      const formattedDate =
        date.toLocaleDateString("en-GB").replace(/\//g, ".") +
        " " +
        date.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        });
      return (
        <Link
          key={item._id}
          to={`/seller-review-profile/${item._id}`}
          state={{ from: "search-job" }}
          className="group flex flex-col gap-2 border-2 border-gray-100 rounded-xl p-5 hover:cursor-pointer custom-hover overflow-hidden"
        >
          <div className="flex flex-col gap-2 items-start lg:flex-row md:gap-5">
            <div className="w-full lg:w-3/12 xl:w-2/12">
              {companyLogo ? (
                <img
                  src={companyLogo}
                  alt=""
                  className="rounded-md object-contain w-36 h-36 m-auto"
                />
              ) : (
                <p className="rounded-md w-36 h-36 m-auto bg-[#293E53] text-white font-bold text-5xl flex justify-center items-center uppercase">
                  {companyName?.slice(0, 1)}
                </p>
              )}
            </div>
            <div className="w-full lg:w-9/12 xl:w-10/12 flex flex-col gap-3 lg:items-start items-center">
              <h5 className="text-xl capitalize text-[#3056a7] font-bold group-hover:underline lg:text-left text-center">
                {companyName?.slice(0, 50)}
              </h5>
              <div className="flex md:flex-row flex-col gap-2 md:gap-5 items-center">
                {location && companyTitle && (
                  <span className="flex gap-2 items-center">
                    <i className="fa-solid fa-location-dot text-md text-gray-400"></i>
                    <p className="text-md text-[#111111] font-normal">
                      <span className="capitalize">{companyTitle}</span> in{" "}
                      {location}
                    </p>
                  </span>
                )}
                <span className="flex gap-2 items-center">
                  <i className="fa-solid fa-star text-[#feb40a] text-md"></i>
                  <p className="text-base font-medium text-black">
                    <span className="font-black">
                      {reviewRating ? parseFloat(reviewRating?.toFixed(1)) : 0}
                    </span>{" "}
                    / 5
                  </p>
                </span>
                <p className="text-base font-medium text-black">
                  {totalReview ? totalReview : 0} {t("reviews")}
                </p>
                <p className="text-base font-medium text-black">
                  {floorReviewPercent >= 80
                    ? `${floorReviewPercent}% ${t("positive")}`
                    : floorReviewPercent >= 60
                    ? `${floorReviewPercent}% ${t("avarage")}`
                    : `${floorReviewPercent}% ${t("poor")}`}
                </p>
              </div>
              <p className="text-black text-base font-normal text-center lg:text-left">
                {companyDescription &&
                  `${companyDescription?.slice(0, 250)}...`}
              </p>
              {reviews && (
                <div className="w-full">
                  <p className="text-base pb-2 font-normal text-gray-400">
                    {t("latest_review")}
                  </p>
                  <div className="bg-[#F3F7F8] p-3 rounded-lg flex gap-8 items-center">
                    <div className="flex flex-col gap-1">
                      <StarRating rating={reviewRating} />
                      <p className="text-sm font-medium text-gray-400">
                        {formattedDate}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-md font-bold text-[#111]">
                        {jobTitle}
                      </p>
                      <p className="text-md font-medium text-[#111]">
                        {review}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Link>
      );
    });
  }
  return (
    <section className="w-full lg:w-9/12">
      <div className="pb-10">
        <div className="flex flex-col md:flex-row md:gap-10 gap-6">
          <div className="w-full">
            <div className="flex flex-col gap-5">{content}</div>
            <h2 className="text-black text-base font-normal py-3">
              {t("total_locations")}: {totalItems}
            </h2>
            {totalItems > limit && (
              <Pagination
                handlePageChange={handlePageChange}
                page={page}
                totalItems={totalItems}
                itemsPerPage={limit}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationLists;
