import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetAllProposalsDefaultQuery } from "../../redux/rtk/features/proposal/proposalApi";
import { useGetAllOfferDefaultQuery } from "../../redux/rtk/features/offer/offerApi";
import { useGetAllReviewDefaultQuery } from "../../redux/rtk/features/review/reviewApi";

function DashboardNav() {
  const { t } = useTranslation();
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const id = seller?.seller?._id;
  const { data } = useGetAllProposalsDefaultQuery();
  const { data: offerData } = useGetAllOfferDefaultQuery();
  const { data: reviewData } = useGetAllReviewDefaultQuery();
  const filterPropsal = data?.filter(
    (item) => item?.sellerId === id && item.status !== "close"
  );
  const filterPropsalOf = data?.filter((item) => item?.sellerId === id);
  const filterOffer = offerData?.filter((item) => item?.sellerId === id);
  const filterReview = reviewData?.filter((item) => item?.sellerId === id);

  return (
    <ul className="flex flex-col gap-3 border border-gray-300 p-5">
      <li className="flex gap-1 items-center">
        <i className="fa fa-fire fa-fw text-[#000000] text-sm"></i>
        <Link
          to="/seller-dashboard"
          className="text-[#767676] text-base font-normal hover:underline"
        >
          {t("new_leads")}
        </Link>
      </li>
      <li className="flex gap-1">
        <i className="fa fa-handshake fa-fw text-[#000000] text-sm pt-1"></i>
        <Link
          to="/seller-dashboard/perticipation"
          className="text-[#767676] text-base font-normal hover:underline flex gap-1"
        >
          {t("participation_contact_requests")}
          {filterPropsal?.length > 0 && (
            <p className="text-white bg-red-400 w-4 h-4 text-sm flex justify-center items-center rounded-full">
              {filterPropsal?.length}
            </p>
          )}
        </Link>
      </li>
      <li>
        <span className="flex gap-1 items-center">
          <i className="fa fa-file fa-fw text-[#000000] text-sm"></i>
          <Link
            to="/seller-dashboard/offers"
            className="text-[#767676] text-base font-normal hover:underline flex gap-1"
          >
            {t("offers")}
            {filterPropsalOf?.length > 0 && (
              <p className="text-white bg-red-400 w-4 h-4 text-sm flex justify-center items-center rounded-full">
                {filterPropsalOf?.length}
              </p>
            )}
          </Link>
        </span>
        <ul className="py-1 px-5 flex flex-col gap-2">
          <li>
            <Link
              to="/seller-dashboard/offers-open"
              className="text-[#767676] text-base font-normal hover:underline"
            >
              {t("open")}
            </Link>
          </li>
          <li>
            <Link
              to="/seller-dashboard/offers-pending"
              className="text-[#767676] text-base font-normal hover:underline"
            >
              {t("pending")}
            </Link>
          </li>
          <li>
            <Link
              to="/seller-dashboard/offers-complete"
              className="text-[#767676] text-base font-normal hover:underline"
            >
              {t("completed")}
            </Link>
          </li>

          <li>
            <Link
              to="/seller-dashboard/offers-archived"
              className="text-[#767676] text-base font-normal hover:underline"
            >
              {t("archived")}
            </Link>
          </li>
          <li>
            <Link
              to="/seller-dashboard/offers-invitation"
              className="text-[#767676] text-base font-normal hover:underline flex gap-1"
            >
              {t("invitaion")}
              {filterOffer?.length > 0 && (
                <p className="text-white bg-red-400 w-4 h-4 text-sm flex justify-center items-center rounded-full">
                  {filterOffer?.length}
                </p>
              )}
            </Link>
          </li>
        </ul>
      </li>
      <li className="flex gap-1 items-center">
        <i className="fa fa-star fa-fw text-[#000000] text-sm"></i>
        <Link
          to="/seller-dashboard/reviews"
          className="text-[#767676] text-base font-normal hover:underline flex gap-1"
        >
          {t("reviews")}
          {filterReview?.length > 0 && (
            <p className="text-white bg-red-400 w-4 h-4 text-sm flex justify-center items-center rounded-full">
              {filterReview?.length}
            </p>
          )}
        </Link>
      </li>
      <li className="flex gap-1 items-center">
        <i className="fa fa-eye fa-fw text-[#000000] text-sm"></i>
        <Link
          to="/seller-dashboard/observer"
          className="text-[#767676] text-base font-normal hover:underline"
        >
          {t("observer")}
        </Link>
      </li>
      <li className="flex gap-1 items-center">
        <i className="fa fa-envelope fa-fw text-[#000000] text-sm"></i>
        <Link
          to="/seller-dashboard/news"
          className="text-[#767676] text-base font-normal hover:underline"
        >
          {t("news")}
        </Link>
      </li>
      <li className="flex gap-1 items-center">
        <i className="fa fa-calculator fa-fw text-[#000000] text-sm"></i>
        <Link
          to="/seller-dashboard/bills"
          className="text-[#767676] text-base font-normal hover:underline"
        >
          {t("bills")}
        </Link>
      </li>
      <li className="flex gap-1 items-center">
        <i className="fa fa-briefcase fa-fw text-[#000000] text-sm"></i>
        <Link
          to="/seller-dashboard/activity"
          className="text-[#767676] text-base font-normal hover:underline"
        >
          {t("area_of_activity")}
        </Link>
      </li>
      <li className="flex gap-1 items-center">
        <i className="fa fa-columns fa-fw text-[#000000] text-sm"></i>
        <Link
          to="/seller-dashboard/company-profile"
          className="text-[#767676] text-base font-normal hover:underline"
        >
          {t("compancy_profile")}
        </Link>
      </li>
      <li className="flex gap-1 items-center">
        <i className="fa-regular fa-address-card text-[#000000] text-sm"></i>
        <Link
          to={`/seller-review-profile/${id}`}
          state={{ from: `seller-dashboard` }}
          className="text-[#767676] text-base font-normal hover:underline"
        >
          {t("preview_profile")}
        </Link>
      </li>
      <li className="flex gap-1 items-center">
        <i className="fa fa-certificate fa-fw text-[#000000] text-sm"></i>
        <Link
          to="/seller-dashboard/verify-documents"
          className="text-[#767676] text-base font-normal hover:underline"
        >
          {t("verify_documents")}
        </Link>
      </li>

      <li className="flex gap-1 items-center">
        <i className="fa fa-user fa-fw text-[#000000] text-sm"></i>
        <Link
          to="/seller-dashboard/personal-info"
          className="text-[#767676] text-base font-normal hover:underline"
        >
          {t("personal_information")}
        </Link>
      </li>
      <li className="flex gap-1 items-center">
        <i className="fa fa-trophy fa-fw text-[#000000] text-sm"></i>
        <Link
          to="/seller-dashboard/membership"
          className="text-[#767676] text-base font-normal hover:underline"
        >
          {t("member_cerdits")}
        </Link>
      </li>
    </ul>
  );
}

export default DashboardNav;
