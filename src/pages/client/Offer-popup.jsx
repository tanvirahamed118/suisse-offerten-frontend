import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import StarRating from "../../components/Star-rating";

import toast, { Toaster } from "react-hot-toast";
import {
  useCreateOfferMutation,
  useGetOneOfferQuery,
} from "../../redux/rtk/features/offer/offerApi";
import { useTranslation } from "react-i18next";
import { useGetOneSellerQuery } from "../../redux/rtk/features/auth/seller/authApi";

function OfferPopup({ setIsShow, data, id, isShow }) {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");
  const filterItem = data.participations.filter((item) => item._id === id);
  const { jobId, sellerId, clientId, _id } = filterItem[0] || {};
  const { data: result } = useGetOneOfferQuery(_id);
  const { companyName, location, reviewRating } =
    filterItem?.[0].sellerData || {};
  const { data: sellerData } = useGetOneSellerQuery(sellerId);
  const [
    createOffer,
    { data: createData, isLoading, isSuccess, isError, error },
  ] = useCreateOfferMutation();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const perticipationId = _id;
    const formData = { sellerId, clientId, jobId, perticipationId, message };
    createOffer(formData);
    setMessage("");
  };

  const { emailVerify, uidVerify, locationVerify } = sellerData || {};

  return (
    <section>
      <div className="py-10 flex justify-center items-center w-full h-screen absolute bg-[#000000e1] top-0 right-0">
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
          </div>
          <p className="text-[#6c757d] text-base font-semibold py-3">
            {t("from")} {location ? location : t("not_available")}
          </p>
          <p className="text-black text-base font-normal">
            {t("hereby_express")}
          </p>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 py-5"
          >
            <label htmlFor="" className="text-black text-base font-bold">
              {t("message_provider")}{" "}
              <span className="text-sm">({t("optional")})</span>
            </label>
            <textarea
              name=""
              id=""
              cols="20"
              rows="5"
              value={message}
              disabled={result?.perticipationId}
              onChange={(e) => setMessage(e.target.value)}
              className={
                result?.perticipationId
                  ? "border border-red-300 px-2 py-3 rounded-md text-black text-base font-normal md:px-4"
                  : "border border-gray-300 px-2 py-3 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-1 md:px-4"
              }
            ></textarea>
            <button
              type="submit"
              disabled={result?.perticipationId}
              className={
                !result?.perticipationId
                  ? "bg-[#ff7100] w-full md:w-60 px-10 py-3 rounded-md justify-center text-white text-base font-normal text-center hover:bg-[#F25900] flex items-center gap-2"
                  : "bg-gray-300 w-full md:w-60 px-10 py-3 rounded-md justify-center text-white text-base font-normal text-center cursor-not-allowed flex gap-2 items-center"
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
                t("send")
              )}
            </button>
          </form>
          <p className="text-sm text-green-500 font-medium">
            ✓ {t("non_binding_free")}
          </p>
          <i
            onClick={() => setIsShow(false)}
            className="fa-solid fa-xmark absolute top-5 right-5 text-black border border-gray-300 p-2 rounded-full cursor-pointer hover:bg-gray-300"
          ></i>
        </div>
      </div>
      <Toaster />
    </section>
  );
}

OfferPopup.propTypes = {
  setIsShow: PropTypes.func.isRequired,
  data: PropTypes.any,
  id: PropTypes.any,
  isShow: PropTypes.any,
};

export default OfferPopup;
