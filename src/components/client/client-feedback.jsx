import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";
import ProposalLoading from "../loading/Proposal-loading";
import { useCreateReviewMutation } from "../../redux/rtk/features/review/reviewApi";
import toast, { Toaster } from "react-hot-toast";
import { useGetAllOfferByClientQuery } from "../../redux/rtk/features/offer/offerApi";

function ClientFeedback() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const limit = 20;
  const clientAuth = localStorage.getItem("client");
  const client = JSON.parse(clientAuth);
  const clientId = client?.client?._id;

  const { data, isLoading, isSuccess, isError, error } =
    useGetAllOfferByClientQuery({
      clientId,
      page,
      limit,
      reviewSubmited: "pending",
      status: "accept",
    });

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const [reviewData, setReviewData] = useState({
    clinetName: client?.client?.username,
    review: "",
    rating: "",
    jobId: "",
    offerId: "",
    sellerId: "",
    clientId: client?.client?._id,
  });

  const { rating, review, sellerId, jobId } = reviewData || {};
  const handleChange = (e) => {
    const { name, value } = e.target;

    setReviewData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the field (rating or review)
    }));

    if (value === reviewData.rating) {
      e.target.check = false;
    }
  };
  const [
    createReview,
    {
      data: CreateData,
      isLoading: createLoading,
      isSuccess: createSuccess,
      isError: createIsError,
      error: createEror,
    },
  ] = useCreateReviewMutation();
  const totalItems = data?.totalOffers || 0;

  const handleCheck = (e, jobId, sellerId, _id) => {
    setReviewData({
      ...reviewData,
      sellerId: sellerId,
      jobId: jobId,
      offerId: _id,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (review?.length > 0 && rating > 0) {
      createReview(reviewData);
    }
    setReviewData({
      clinetName: client?.client?.username,
      review: "",
      rating: "",
      jobId: "",
      sellerId: "",
      clientId: client?.client?._id,
    });
  };
  useEffect(() => {
    if (createIsError) {
      toast.error(createEror?.data?.message);
    }
    if (createSuccess) {
      toast.success(CreateData?.message, {
        duration: 700,
      });
    }
  }, [createIsError, createSuccess, CreateData, createEror]);

  // decide what to show for jobs
  let content;

  if (isLoading) {
    content = (
      <>
        <ProposalLoading />
        <ProposalLoading />
        <ProposalLoading />
        <ProposalLoading />
        <ProposalLoading />
      </>
    );
  }
  if (isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && data?.offers?.length === 0) {
    content = (
      <p className="text-balck font-semibold text-lg py-5">
        {t("no_data_found")}
      </p>
    );
  }
  if (!isLoading && !isError && isSuccess && data?.offers?.length > 0) {
    content = data?.offers?.map((item) => {
      const { _id, sellerId, reviewRequest } = item || {};

      const { companyName, phone } = item.sellerData || {};
      const { jobTitle, _id: jobId } = item.jobData || {};
      return (
        <tr className="striped" key={_id}>
          <td className="p-5 align-top border-b border-black text-left w-8/12">
            <div className="flex gap-5 items-start">
              <input
                type="radio"
                name="proposal"
                id=""
                className="mt-2 cursor-pointer"
                onChange={(e) => handleCheck(e, jobId, sellerId, _id)}
              />
              <div className="flex flex-col gap-2">
                <Link
                  to={`/search-job/${jobId}`}
                  className="text-[#3097d1] hover:text-[#0050b2] text-lg font-normal hover:underline"
                >
                  {jobTitle}
                </Link>
                <p className="text-[#111111] font-normal text-base">
                  {companyName}
                </p>
                <p className="text-[#111111] text-lg font-normal">{phone}</p>
                {reviewRequest && (
                  <p className="text-red-400 text-sm font-bold">
                    {companyName} {t("request_review")}
                  </p>
                )}
              </div>
            </div>
          </td>
          <td className="p-5 align-top border-b border-black text-left">
            <div className="flex gap-2 items-center">
              <p className="text-black font-normal text-base">20.03.2024</p>
            </div>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="w-full">
      <div>
        <h2 className="text-xl font-bold text-black pb-3">
          {t("rate_member")}
        </h2>
        <div className="bg-[#F5F8FA] p-5 border border-gray-300">
          <p className="text-black text-base font-normal">
            {t("rating_text_1")}
          </p>
          <div className="py-5">
            <form
              onSubmit={handleSubmit}
              className="flex gap-5 md:gap-20 md:flex-row flex-col"
            >
              <div className="flex flex-col gap-3 w-full md:w-4/12">
                {[5, 4, 3, 2, 1].map((rating, index) => (
                  <div key={rating} className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="rating"
                      id={`rat-${rating}`}
                      onChange={handleChange}
                      value={rating}
                      checked={reviewData.rating === rating.toString()}
                    />
                    <label
                      htmlFor={`rat-${rating}`}
                      className="flex gap-1 items-center"
                    >
                      <span className="flex gap-0">
                        {[...Array(5)].map((_, starIndex) => (
                          <i
                            key={starIndex}
                            className={`fa${
                              starIndex < rating ? "" : "-regular"
                            } fa-star text-base text-[#feb40c]`}
                          ></i>
                        ))}
                      </span>
                      <p>{t(`rating_text_${index + 2}`)}</p>
                    </label>
                  </div>
                ))}
              </div>
              <div className="w-full md:w-8/12 flex flex-col gap-3">
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor=""
                    className="text-black text-base font-normal"
                  >
                    {t("rating_text_7")}
                  </label>
                  <textarea
                    name="review"
                    value={review}
                    id=""
                    cols="30"
                    rows="5"
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={
                    jobId.length > 0 &&
                    sellerId.length > 0 &&
                    review?.length > 0
                      ? "bg-[#ff7100] py-2 px-5 rounded-md w-60 text-white font-normal text-base flex gap-2 items-center justify-center"
                      : "bg-gray-300 py-2 px-5 rounded-md w-60 text-white font-normal text-base cursor-not-allowed flex justify-center"
                  }
                  disabled={
                    jobId?.length === 0 ||
                    sellerId.length === 0 ||
                    review?.length === 0
                  }
                >
                  {createLoading ? (
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
                    t("rating_text_8")
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div className="py-10">
          <h2 className="text-black text-2xl font-medium border-b border-gray-500 pb-2">
            {t("rating_text_9")}
          </h2>
          <div className="overflow-x-auto">
            <div className="min-w-[900px]">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="border-b border-black">
                    <th className="p-5 align-middle border-b border-black text-left">
                      <h2 className="text-black text-lg font-bold">
                        {t("order_title")}
                      </h2>
                    </th>
                    <th className="p-5 align-middle border-b border-black text-left">
                      <h2 className="text-black text-lg font-bold">
                        {t("news_date")}
                      </h2>
                    </th>
                  </tr>
                </thead>
                <tbody>{content}</tbody>
              </table>
            </div>
          </div>
          {totalItems > 20 && (
            <div className="mt-10">
              <Pagination
                handlePageChange={handlePageChange}
                page={page}
                totalItems={totalItems}
                itemsPerPage={limit}
              />
            </div>
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default ClientFeedback;
