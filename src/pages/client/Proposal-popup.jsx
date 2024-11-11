import PropTypes from "prop-types";
import { useEffect } from "react";
import StarRating from "../../components/Star-rating";

import toast, { Toaster } from "react-hot-toast";

import { useTranslation } from "react-i18next";

import {
  useGetOneOfferByBothQuery,
  useUpdateOfferRequestMutation,
} from "../../redux/rtk/features/offer/offerApi";
import ProposalTableLoading from "../../components/loading/Proposal-table-loading";

function ProposalPopup({ setIsShow, sellerId, isShow, jobId }) {
  const { t } = useTranslation();
  const { data, isLoading: offerLoading } = useGetOneOfferByBothQuery({
    sellerId,
    jobId,
  });
  const {
    sellerData,
    offerNote,
    offerPrice,
    priceUnit,
    jobData,
    _id,
    offerAccepted,
  } = data || {};
  const {
    companyName,
    location,
    reviewRating,
    username,
    emailVerify,
    uidVerify,
    locationVerify,
  } = sellerData || {};

  const { jobTitle, jobNumber } = jobData || {};
  const [
    updateOfferRequest,
    { data: createData, isLoading, isSuccess, isError, error },
  ] = useUpdateOfferRequestMutation();

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isShow]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(createData?.message);
    }
  }, [createData, isError, isSuccess, error]);

  const handleUpdate = () => {
    const id = _id;
    const formData = { sellerId: sellerId, jobId: jobId, status: "accept" };
    updateOfferRequest({ formData, id });
  };

  // decide what to render
  let content;
  if (offerLoading) {
    content = <ProposalTableLoading />;
  } else {
    content = (
      <div
        className={`relative w-[95%] m-auto md:w-[600px] h-auto border-[12px] rounded-md border-[#000000fb] bg-white p-5 ${
          isShow ? "zoom-animation" : ""
        }`}
      >
        <div className="flex items-center gap-2 flex-wrap">
          <h2 className="text-black text-xl font-medium capitalize">
            {companyName}
          </h2>
          <StarRating rating={reviewRating} />
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
          <p className="text-[#6c757d] text-base font-semibold py-3">
            {t("from")} {location ? location : t("not_available")}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <table className="min-w-full border-collapse">
            <tbody>
              <tr className="bg-gray-200 ">
                <th className="border border-gray-300 text-left px-4 py-2 w-52">
                  {t("offer_creator_name")}
                </th>
                <td className="border border-gray-300 text-left px-4 py-2 text-red-500 font-bold text-xl capitalize">
                  {username}
                </td>
              </tr>
              <tr>
                <th className="border border-gray-300 text-left px-4 py-2">
                  {t("job_title")}
                </th>
                <td className="border border-gray-300 text-left px-4 py-2">
                  {jobTitle}
                </td>
              </tr>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 text-left px-4 py-2">
                  {t("job_number")}
                </th>
                <td className="border border-gray-300 text-left px-4 py-2">
                  {jobNumber}
                </td>
              </tr>
              <tr>
                <th className="border border-gray-300 text-left px-4 py-2">
                  {t("offer_unit")}
                </th>
                <td className="border border-gray-300 text-left px-4 py-2">
                  {priceUnit}
                </td>
              </tr>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 text-left px-4 py-2">
                  {t("offer_price")}
                </th>
                <td className="border border-gray-300 text-left px-4 py-2">
                  {offerPrice}
                </td>
              </tr>
              <tr>
                <th className="border border-gray-300 text-left px-4 py-2">
                  {t("offer_note")}
                </th>
                <td className="border border-gray-300 text-left px-4 py-2">
                  {offerNote}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          onClick={handleUpdate}
          disabled={offerAccepted}
          className={
            offerAccepted
              ? "bg-gray-400 w-full md:w-60 py-3 rounded-md justify-center text-white text-base font-bold text-center cursor-not-allowed flex gap-2 items-center mt-5"
              : "bg-[#FFAA00] w-full md:w-60 py-3 rounded-md justify-center text-black text-base font-bold text-center flex items-center gap-2 mt-5"
          }
        >
          {isLoading ? (
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
            t("accept")
          )}
        </button>
        <i
          onClick={() => setIsShow(false)}
          className="fa-solid fa-xmark absolute top-5 right-5 text-black border border-gray-300 p-2 rounded-full cursor-pointer hover:bg-gray-300"
        ></i>
      </div>
    );
  }
  return (
    <section>
      <div className="py-10 flex justify-center items-center w-full h-screen absolute bg-[#000000e1] top-0 right-0">
        {content}
      </div>
      <Toaster />
    </section>
  );
}

ProposalPopup.propTypes = {
  setIsShow: PropTypes.func.isRequired,
  sellerId: PropTypes.any,
  id: PropTypes.any,
  isShow: PropTypes.any,
  jobId: PropTypes.any,
};

export default ProposalPopup;
