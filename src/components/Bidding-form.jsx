import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetOneJobQuery } from "../redux/rtk/features/job/jobApi";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";
import { useCreateOfferPerticipationMutation } from "../redux/rtk/features/offer/offerApi";

function BiddingForm() {
  const { id } = useParams();
  const { data } = useGetOneJobQuery(id);
  const navigate = useNavigate();
  const [
    createOfferPerticipation,
    { data: createData, isLoading, isSuccess, error, isError },
  ] = useCreateOfferPerticipationMutation();
  const { jobUsername, jobEmail, credits } = data || {};
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const { t } = useTranslation();
  const [sellerMessage, setsellerMessage] = useState("");
  const [validButton, setValidButton] = useState(false);
  const formData = {
    bidMessage: sellerMessage,
    jobId: id,
    sellerId: seller?.seller?._id,
    jobCredit: credits,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createOfferPerticipation(formData);
    setsellerMessage("");
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(createData?.message, {
        duration: 700,
      });
      setTimeout(() => {
        navigate(`/search-job/${id}`);
      }, 1500);
    }
  }, [isError, isSuccess, createData, error, navigate, id]);

  useEffect(() => {
    if (sellerMessage.length > 0 && jobEmail) {
      setValidButton(true);
    }
  }, [sellerMessage, jobEmail]);

  return (
    <section className="w-full py-10">
      <div className="container">
        <Link
          to={`/search-job/${id}`}
          state={{ from: "bid-form" }}
          className="text-white py-1 px-5 rounded-md text-base font-normal hover:underline bg-[#0050B2]"
        >
          {t("back")}
        </Link>
        <div className="bg-white shadow-lg p-5 w-full lg:w-7/12 flex flex-col gap-5 mt-5">
          <div>
            <h2 className="text-xl font-bold text-black border-b border-gray-300 pb-5 mb-5">
              {t("your_message_to")} {jobUsername}
            </h2>

            <p className="text-black text-base font-normal">
              {t("your_message_note")}
            </p>
          </div>
          <form
            action=""
            className=" flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <textarea
              name=""
              id=""
              rows={5}
              cols={5}
              value={sellerMessage}
              onChange={(e) => setsellerMessage(e.target.value)}
              className="py-2 px-5 border border-gray-200 rounded-md w-full text-base text-black font-normal outline-[#ff473d34] focus:outline outline-4"
            ></textarea>
            <div className="flex gap-3 items-center">
              <button
                type="submit"
                className={
                  validButton
                    ? "bg-[#FFAA00] text-black font-bold rounded-md text-md py-3 px-5 flex gap-2 items-center cursor-pointer"
                    : "bg-[#747474] text-white font-bold rounded-md cursor-not-allowed text-md py-3 px-5 flex gap-2 items-center"
                }
                disabled={!validButton}
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
              <Link
                to={`/search-job/prepard-bid/${id}`}
                className="bg-[#3056a7] text-white font-bold rounded-md hover:bg-[#274789] text-md py-3 px-5 flex gap-2 items-center cursor-pointer"
              >
                {t("send_prepare_offer")}
              </Link>
            </div>
          </form>
          <div className="bg-[#f0f9fc] py-3 px-5 flex flex-col gap-2 rounded-sm">
            <h2 className="text-sm font-bold text-black flex gap-2 items-center">
              {t("lead_price")}:{" "}
              <span className="text-[#ff7100] font-bold text-xl">
                {credits} credits
              </span>
            </h2>
            <p className="text-xs font-normal text-[#6c757d ]">
              {t("pay_this_credit")}
            </p>
          </div>
          <div>
            <h3 className="text-black text-sm font-bold inline">
              {t("pay_this_credit1")}
              <span className="text-black text-sm font-normal ml-2">
                {t("pay_this_credit2")}
              </span>
            </h3>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
}

export default BiddingForm;
