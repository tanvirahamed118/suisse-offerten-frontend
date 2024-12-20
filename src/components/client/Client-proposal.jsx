import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ProposalAdLoading from "../loading/Proposalad-loading";
import { useTranslation } from "react-i18next";
import {
  useGetOneOfferByBothQuery,
  useUpdateOfferRequestMutation,
} from "../../redux/rtk/features/offer/offerApi";

function ClientProposal({ jobId, sellerId }) {
  const { t } = useTranslation();
  const { data, isLoading, isSuccess } = useGetOneOfferByBothQuery({
    sellerId,
    jobId,
  });
  const [
    updateOfferRequest,
    {
      data: updateData,
      isLoading: updateLoading,
      isSuccess: updateSuccess,
      isError: updateisError,
      error: updateError,
    },
  ] = useUpdateOfferRequestMutation();
  const [role, setRole] = useState(null);

  const {
    sellerData,
    offerNote,
    offerPrice,
    priceUnit,
    jobData,
    _id,
    createdAt,
    status,
  } = data || {};
  const { companyName } = sellerData || {};
  const { jobTitle, jobNumber } = jobData || {};
  const date = new Date(createdAt);
  const day = date.getUTCDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  useEffect(() => {
    if (updateSuccess) {
      toast.success(updateData?.message);
    }
    if (updateisError) {
      toast.error(updateError?.data?.message);
    }
  }, [updateError, updateData, updateisError, updateSuccess]);

  const handleReject = () => {
    const id = _id;
    const formData = { sellerId: sellerId, jobId: jobId, status: "reject" };
    updateOfferRequest({ formData, id });
    setRole("reject");
  };

  const handleAccept = () => {
    const id = _id;
    const formData = { sellerId: sellerId, jobId: jobId, status: "accept" };
    updateOfferRequest({ formData, id });
    setRole("accept");
  };

  //   decide what to render
  let content;
  if (isLoading) {
    content = <ProposalAdLoading />;
  }

  if (isSuccess) {
    content = (
      <div className="flex flex-col gap-1">
        <table className="min-w-full border-collapse">
          <tbody>
            <tr className="bg-gray-200 ">
              <th className="border border-gray-300 text-left px-4 py-2 w-72">
                {t("offer_creator_name")}
              </th>
              <td className="border border-gray-300 text-left px-4 py-2 text-red-500 font-bold text-xl capitalize">
                {companyName}
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
                {t("offer_created")}
              </th>
              <td className="border border-gray-300 text-left px-4 py-2">
                {formattedDate}
              </td>
            </tr>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 text-left px-4 py-2">
                {t("offer_note")}
              </th>
              <td className="border border-gray-300 text-left px-4 py-2">
                {offerNote}
              </td>
            </tr>
            <tr>
              <th className="border border-gray-300 text-left px-4 py-2">
                {t("proposal_status")}
              </th>
              <td
                className={
                  status === "accept"
                    ? "border border-gray-300 text-left px-4 py-2 capitalize font-bold text-green-500"
                    : "border border-gray-300 text-left px-4 py-2 capitalize font-bold text-red-500"
                }
              >
                {status}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return data ? (
    <div className="mt-5">
      <div>
        <div className="">
          <div className="bg-white py-5 border-b border-gray-300 flex flex-col gap-3">
            <h2 className="text-black text-2xl font-bold">
              {t("recive_proposal")} {companyName}
            </h2>
            <p className="text-gray-400 font-normal text-base">
              {t("accept_condition")}
            </p>
          </div>
          <div className="flex flex-col gap-5 overflow-y-auto">{content}</div>

          <div className="py-5 flex gap-5 items-center">
            <button
              onClick={handleAccept}
              disabled={status !== "submit"}
              className={
                status === "accept"
                  ? "bg-gray-300 w-full md:w-60 p-3 rounded-md justify-center text-white text-base font-bold text-center cursor-not-allowed flex gap-2 items-center"
                  : status === "reject"
                  ? "bg-gray-300 w-full md:w-60 p-3 rounded-md justify-center text-white text-base font-bold text-center cursor-not-allowed flex gap-2 items-center"
                  : status === "pending"
                  ? "bg-gray-300 w-full md:w-60 p-3 rounded-md justify-center text-white text-base font-bold text-center cursor-not-allowed flex gap-2 items-center"
                  : "bg-[#FFAA00] w-full md:w-60 p-3 rounded-md justify-center text-black text-base font-bold text-center flex items-center gap-2"
              }
            >
              {updateLoading && role === "accept" ? (
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
                t("request_proposal")
              )}
            </button>
            <button
              onClick={handleReject}
              disabled={status !== "submit"}
              className={
                status === "accept"
                  ? "bg-gray-300 w-full md:w-60 p-3 rounded-md justify-center text-white text-base font-bold text-center cursor-not-allowed flex gap-2 items-center"
                  : status === "reject"
                  ? "bg-gray-300 w-full md:w-60 p-3 rounded-md justify-center text-white text-base font-bold text-center cursor-not-allowed flex gap-2 items-center"
                  : status === "pending"
                  ? "bg-gray-300 w-full md:w-60 p-3 rounded-md justify-center text-white text-base font-bold text-center cursor-not-allowed flex gap-2 items-center"
                  : "bg-[#FFAA00] w-full md:w-60 p-3 rounded-md justify-center text-black text-base font-bold text-center flex items-center gap-2"
              }
            >
              {updateLoading && role === "reject" ? (
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
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  ) : (
    <p>{t("no_data_found")}</p>
  );
}
ClientProposal.propTypes = {
  jobId: PropTypes.any,
  sellerId: PropTypes.any,
};
export default ClientProposal;
