import moment from "moment";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useGetAllProposalsQuery } from "../../redux/rtk/features/proposal/proposalApi";
import { useState } from "react";
import Pagination from "../Pagination";
import SellerOfferLoading from "../loading/Seller-offer-loading";

function OfferPending() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const sellerId = seller?.seller?._id;
  const limit = 20;

  const { data, isLoading, isSuccess, isError, error } =
    useGetAllProposalsQuery({ sellerId, page, limit });

  const totalItems = data?.totalProposal || 0;
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const filterData = data?.proposals?.filter(
    (item) =>
      item.status ===
      "Client has received your offer but has not yet confirmed it"
  );

  // decide what to show for jobs
  let content;

  if (isLoading) {
    content = (
      <>
        <SellerOfferLoading />
        <SellerOfferLoading />
        <SellerOfferLoading />
      </>
    );
  }
  if (isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && filterData?.length === 0) {
    content = (
      <p className="text-black font-semibold text-xl py-5">
        {t("no_data_found")}
      </p>
    );
  }
  if (!isLoading && !isError && isSuccess && filterData?.length > 0) {
    content = filterData?.map((item) => {
      const {
        _id,
        jobTitle,
        jobNumber,
        jobLocation,
        createdAt,
        status,
        offerPrice,
        jobId,
        clientName,
        clientPhone,
        compititor,
      } = item || {};
      const formattedDate = moment(createdAt).format("MMMM D, YYYY");
      return (
        <tr className="striped" key={_id}>
          <td className="p-5 align-top border-b border-black text-left w-3/12">
            <div className="flex flex-col gap-2">
              <Link
                to={`/search-job/${jobId}`}
                className="text-[#3097d1] hover:text-[#0050b2] text-lg font-normal hover:underline"
              >
                {jobTitle}
              </Link>
              <p className="text-[#999] text-base font-normal">{jobLocation}</p>
              <p className="text-black text-xs font-normal">
                {t("order_number")}: {jobNumber}
              </p>
              <p className="text-[#000] text-base font-normal">{clientName}</p>
              <p className="text-[#000] text-base font-normal hover:text-[#0050b2] hover:underline">
                {clientPhone}
              </p>
            </div>
          </td>
          <td className="p-5 align-top border-b border-black text-left">
            <div className="flex flex-col gap-2 items-start">
              <p className="text-black text-base font-normal">{status}</p>
              <h3 className="text-[#19be10] text-base font-normal">
                {status ===
                "Client has received your offer but has not yet confirmed it"
                  ? "(pending)"
                  : status === "active"
                  ? "(Open)"
                  : status === "complete"
                  ? "(Order wom)"
                  : status === "archived"
                  ? "(Rejected)"
                  : null}
              </h3>
            </div>
          </td>
          <td className="p-5 align-top border-b border-black text-left">
            <div className="flex gap-1 items-start justify-start">
              <i className="fa fa-users text-base text-[#000111] pt-1"></i>
              <p className="text-black text-base font-normal">{compititor}</p>
            </div>
          </td>
          <td className="p-5 align-top border-b border-black text-left">
            <div className="flex flex-col gap-1 lg:items-end items-center">
              <p className="text-black text-lg font-normal text-right">
                CHF {offerPrice}
              </p>
              <p className="text-[#999] text-base font-normal text-right">
                {t("")}
              </p>
              <p className="text-[#999] text-xs font-normal text-right">
                {t("orginally_published")}: {formattedDate}
              </p>
              {status === "archived" && (
                <p className="text-black text-sm font-normal text-right">
                  {t("rating_not_yet")}
                </p>
              )}
            </div>
          </td>
        </tr>
      );
    });
  }
  return (
    <div className="">
      <h2 className="text-black text-xl font-bold">{t("offers")}</h2>
      <div className="">
        <div className="overflow-x-auto ">
          <table className="min-w-[900px] divide-y divide-gray-200">
            <thead>
              <tr className="border-b border-black">
                <th className="p-5 align-middle border-b border-black text-left">
                  <h2 className="text-black text-lg font-bold">
                    {t("order_title")}
                  </h2>
                </th>
                <th className="p-5 align-middle border-b border-black text-left">
                  <h2 className="text-black text-lg font-bold">
                    {t("status")}
                  </h2>
                </th>
                <th className="p-5 align-middle border-b border-black text-left w-3/12">
                  <h2 className="text-black text-lg font-bold">
                    {t("competitor_offer")}
                  </h2>
                </th>
                <th className="p-5 align-middle border-b border-black text-right">
                  <h2 className="text-black text-lg font-bold">
                    {t("my_offers")}
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
          {filterData?.length > 20 && (
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

export default OfferPending;
