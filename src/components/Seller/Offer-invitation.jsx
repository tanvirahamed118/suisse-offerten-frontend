import { useTranslation } from "react-i18next";
import { useGetAllOfferQuery } from "../../redux/rtk/features/offer/offerApi";
import moment from "moment";
import { useState } from "react";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";
import InvitationLoading from "../loading/Invitation-loading";

function OfferInvitation() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const sellerId = seller?.seller?._id;
  const limit = 20;
  const { data, isLoading, isSuccess, isError, error } = useGetAllOfferQuery({
    sellerId,
    page,
    limit,
  });
  const totalItems = data?.totalOffers || 0;
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // decide what to show for jobs
  let content;

  if (isLoading) {
    content = (
      <>
        <InvitationLoading />
        <InvitationLoading />
        <InvitationLoading />
        <InvitationLoading />
        <InvitationLoading />
      </>
    );
  }
  if (isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && data?.offers?.length === 0) {
    content = (
      <p className="text-black font-semibold text-xl py-5">
        {t("no_data_found")}
      </p>
    );
  }
  if (!isLoading && !isError && isSuccess && data?.offers?.length > 0) {
    content = data?.offers?.map((item) => {
      const { _id, jobTitle, createdAt, jobId, message } = item || {};
      const formattedDate = moment(createdAt).format("MMMM D, YYYY");
      return (
        <tr className="striped" key={_id}>
          <td className="py-5 px-2 align-top border-b border-black text-left w-4/12">
            <div className="flex gap-5 items-start">
              <Link
                to={`/search-job/prepard-bid/${jobId}`}
                className="text-[#3097d1] hover:text-[#0050b2] text-base font-normal hover:underline"
              >
                {jobTitle}
              </Link>
            </div>
          </td>
          <td className="py-5 px-2 align-top border-b border-black text-left w-5/12">
            <p className="text-black text-base font-normal hover:underline">
              {message}
            </p>
          </td>

          <td className="py-5 px-2 align-top border-b border-black text-left w-full">
            <p className="text-black text-base font-normal">{formattedDate}</p>
          </td>
        </tr>
      );
    });
  }
  return (
    <div className="">
      <h2 className="text-black text-xl font-medium mt-10 border-b border-gray-400 pb-2">
        {t("invitation_title")}
      </h2>
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="border-b border-black">
                <th className="py-5 px-2 align-middle border-b border-black text-left w-4/12">
                  <h2 className="text-black text-lg font-bold">
                    {t("job_title")}
                  </h2>
                </th>
                <th className="py-5 px-2 align-middle border-b border-black text-left w-5/12">
                  <h2 className="text-black text-lg font-bold">
                    {t("offer_message")}
                  </h2>
                </th>
                <th className="py-5 px-2 align-middle border-b border-black text-left">
                  <h2 className="text-black text-lg font-bold">
                    {t("offer_request")}
                  </h2>
                </th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
      </div>

      <div className="">
        <div className="flex gap-2 flex-wrap pt-5">
          {totalItems?.length > 20 && (
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
  );
}

export default OfferInvitation;
