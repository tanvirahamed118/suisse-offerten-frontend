import { useGetAllProposalsQuery } from "../redux/rtk/features/proposal/proposalApi";
import PropTypes from "prop-types";
import moment from "moment";

function SellerOffer({ id, sellerId }) {
  const page = 1;
  const limit = 20;
  const { data } = useGetAllProposalsQuery({ id: "", page, limit });

  const filterData = data?.proposals?.filter(
    (item) => item.sellerId === sellerId && item.jobId === id
  );
  const { sellerName, offerPrice, createdAt, priceUnit, offerNote, status } =
    filterData?.[0] || {};
  const lastDate = moment(createdAt).fromNow(true);

  return filterData?.length > 0 && status === "confirmed" ? (
    <div className="border border-gray-300 p-5 mt-5">
      <div className="flex justify-between items-start">
        <div className="flex gap-5 items-center">
          <h2 className="bg-[#FF7100] text-white font-bold text-3xl uppercase w-16 h-16 rounded-full flex items-center justify-center">
            {sellerName.slice(0, 1)}
          </h2>
          <span>
            <h2 className="text-black text-lg font-medium">My Offer</h2>
            <p className="text-sm text-gray-300 font-normal">
              added about {lastDate} ago
            </p>
          </span>
        </div>
        <div>
          <h2 className="text-lg font-bold text-black">CHF {offerPrice}</h2>
          <p className="text-base font-normal text-gray-300 capitalize">
            {priceUnit}
          </p>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-black bg-[#F3F5F8] font-normal text-sm p-5 rounded-md">
          {offerNote}
        </p>
      </div>
    </div>
  ) : null;
}
SellerOffer.propTypes = {
  id: PropTypes.any,
  sellerId: PropTypes.any,
};
export default SellerOffer;
