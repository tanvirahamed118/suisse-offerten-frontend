import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useGetAllOfferDefaultQuery } from "../../redux/rtk/features/offer/offerApi";

function PerticipationTab({ setActiveTab, activeTab }) {
  const { t } = useTranslation();
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const id = seller?.seller?._id;
  const { data } = useGetAllOfferDefaultQuery();

  const filterRejected = data?.filter(
    (item) => item?.offerRejected && item.sellerId === id
  );
  const filterRequest = data?.filter(
    (item) => item?.offerRequestedNotify && item.sellerId === id
  );
  return (
    <ul className="flex border-b border-gray-300 my-10">
      <li
        className={`${
          activeTab === "all"
            ? "bg-white text-black border border-gray-300 border-b-white -mb-px block overflow-hidden"
            : "bg-[#f5f8fa] text-[#767676] hover:bg-[#D3E0E9] border border-transparent"
        }`}
      >
        <button
          onClick={() => setActiveTab("all")}
          className={`py-2 px-5 ${
            activeTab === "Offering"
              ? "bg-white text-black flex gap-2 items-center"
              : "bg-[#f5f8fa] text-[#767676] hover:bg-[#D3E0E9] flex gap-2 items-center"
          }`}
        >
          {t("all")}
          {filterRequest?.length > 0 && (
            <p className="text-white bg-red-400 w-4 h-4 text-sm flex justify-center items-center rounded-full">
              {filterRequest?.length}
            </p>
          )}
        </button>
      </li>
      <li
        className={`${
          activeTab === "reject"
            ? "bg-white text-black border border-gray-300 border-b-white -mb-px block overflow-hidden"
            : "bg-[#f5f8fa] text-[#767676] hover:bg-[#D3E0E9] border border-transparent"
        }`}
      >
        <button
          onClick={() => setActiveTab("reject")}
          className={`py-2 px-5 ${
            activeTab === "reject"
              ? "bg-white text-black flex gap-2 items-center"
              : "bg-[#f5f8fa] text-[#767676] hover:bg-[#D3E0E9] flex gap-2 items-center"
          }`}
        >
          {t("rejected")}

          {filterRejected?.length > 0 && (
            <p className="text-white bg-red-400 w-4 h-4 text-sm flex justify-center items-center rounded-full">
              {filterRejected?.length}
            </p>
          )}
        </button>
      </li>
    </ul>
  );
}
PerticipationTab.propTypes = {
  setActiveTab: PropTypes.any,
  activeTab: PropTypes.any,
  data: PropTypes.any,
};
export default PerticipationTab;
