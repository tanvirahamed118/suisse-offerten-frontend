import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
  useGetAllReviewQuery,
  useUpdateReviewUsefulMutation,
} from "../../redux/rtk/features/review/reviewApi";
import Pagination from "../Pagination";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRating from "../Star-rating";
import moment from "moment";
import ReviewLoading from "../loading/ReviewLoading";
import ReviewFilter from "./Review-filter";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

function ClientReview({ sellerId }) {
  const { t } = useTranslation();
  const limit = 10;
  const [page, setPage] = useState(1);
  const { star, category } = useSelector((state) => state.reviewFilter);
  const { data, isLoading, isError, isSuccess, error } = useGetAllReviewQuery({
    limit,
    page,
    sellerId,
  });
  const [
    updateReviewUseful,
    {
      data: usefulData,
      isSuccess: usefulSucess,
      isError: isUsefulError,
      error: usefulError,
    },
  ] = useUpdateReviewUsefulMutation();

  const totalItems = data?.totalreviews || 0;
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    if (isUsefulError) {
      toast.error(usefulError.data.message);
    }
    if (usefulSucess) {
      toast.success(usefulData.message);
    }
  }, [usefulData, usefulSucess, isUsefulError, usefulError]);

  const sortCategory = (a, b) => {
    if (!category || category === "All Category") {
      return 0;
    }
    if (
      a.jobCategory?.toLowerCase() === category?.toLowerCase() &&
      b.jobCategory?.toLowerCase() !== category?.toLowerCase()
    ) {
      return -1;
    }
    if (
      a.jobCategory?.toLowerCase() !== category?.toLowerCase() &&
      b.jobCategory?.toLowerCase() === category?.toLowerCase()
    ) {
      return 1;
    }
    return 0;
  };

  const sortRating = (a, b) => {
    if (!star || star === "") {
      return 0;
    }
    if (a.rating === Number(star) && b.rating !== Number(star)) {
      return -1;
    }
    if (a.rating !== Number(star) && b.rating === Number(star)) {
      return 1;
    }
    return 0;
  };

  // decide what to render
  let content;
  if (isLoading) {
    content = (
      <div className="w-full flex flex-col gap-5">
        <ReviewLoading />
        <ReviewLoading />
        <ReviewLoading />
        <ReviewLoading />
        <ReviewLoading />
        <ReviewLoading />
      </div>
    );
  }
  if (isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && data?.reviews?.length === 0) {
    content = (
      <p className="text-black font-medium text-xl py-5">
        {t("no_data_found")}
      </p>
    );
  }
  if (!isLoading && !isError && isSuccess && data?.reviews?.length > 0) {
    content = [...(data?.reviews || [])]
      .sort(sortCategory)
      .sort(sortRating)
      .map((item) => {
        const {
          clinetName,
          review,
          rating,
          jobTitle,
          createdAt,
          _id,
          clientId,
          useful,
          jobId,
        } = item || {};
        const isExistId = useful?.filter((item) => item.usefulId === clientId);
        const id = _id;
        const totalLike = useful.reduce(
          (acc, item) => acc + (item.useful || 0),
          0
        );

        return (
          <div
            key={_id}
            className="border border-gray-200 relative custom-content"
          >
            <div className="p-5">
              <a href="" className="flex gap-2">
                <StarRating rating={rating} />
                <p className="text-sm text-black font-normal">
                  {moment(createdAt).format("DD.MM.YYYY")}
                </p>
              </a>
              <h2 className="text-black text-base font-bold">
                {clinetName}(client)
              </h2>
              <pre className="text-[#717171] italic font-normal text-base whitespace-pre-line">
                {review}
              </pre>
              <Link
                to={`/search-job/${jobId}`}
                className="text-base font-normal text-[#3097d1] hover:underline"
              >
                {jobTitle}
              </Link>
            </div>
            <div className="py-1 px-5 border-t border-gray-200">
              <div className="flex gap-3 items-center">
                {isExistId.length > 0 ? (
                  <span className="flex gap-1 items-center">
                    <i className="fa fa-fas fa-thumbs-up text-xs text-[#3097d1] font-bold"></i>
                    <button
                      disabled
                      onClick={() => updateReviewUseful({ clientId, id })}
                      className="text-sm text-[#3097d1] font-bold"
                    >
                      {t("userful")}
                    </button>
                  </span>
                ) : (
                  <span className="flex gap-1 items-center">
                    <i className="fa fa-fas fa-thumbs-up text-xs text-[#3097d1] font-normal"></i>
                    <button
                      onClick={() => updateReviewUseful({ clientId, id })}
                      className="text-sm text-[#3097d1] font-normal hover:underline"
                    >
                      {t("userful")}
                    </button>
                  </span>
                )}
                <p
                  key={item.clientId}
                  className="text-[#717171] text-xs font-normal border-l border-gray-300 pl-2"
                >
                  {totalLike} {t("found_useful")}
                </p>
              </div>
            </div>
          </div>
        );
      });
  }
  return (
    <div className="w-full">
      <h2 className="text-2xl font-medium text-black">
        {t("reviews_from_other_customers")}
      </h2>
      <ReviewFilter />
      <div className="flex flex-col gap-4">{content}</div>
      {totalItems > limit && (
        <div className="mt-5">
          <Pagination
            handlePageChange={handlePageChange}
            page={page}
            totalItems={totalItems}
            itemsPerPage={limit}
          />
        </div>
      )}
      <Toaster />
    </div>
  );
}
ClientReview.propTypes = {
  sellerId: PropTypes.any,
};
export default ClientReview;
