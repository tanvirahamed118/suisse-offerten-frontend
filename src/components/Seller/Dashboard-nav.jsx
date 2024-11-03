import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetAllOfferDefaultQuery } from "../../redux/rtk/features/offer/offerApi";

function DashboardNav() {
  const { t } = useTranslation();
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const id = seller?.seller?._id;
  const { data } = useGetAllOfferDefaultQuery();

  const filterRequest = data?.filter(
    (item) => item?.offerRequestedNotify && item.sellerId === id
  );
  const filterOpen = data?.filter(
    (item) => item?.offerPlacedNotify && item.sellerId === id
  );

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
          {filterRequest?.length > 0 && (
            <p className="text-white bg-red-400 w-4 h-4 text-sm flex justify-center items-center rounded-full">
              {filterRequest?.length}
            </p>
          )}
        </Link>
      </li>
      <li>
        <span className="flex gap-1 items-center">
          <i className="fa fa-file fa-fw text-[#000000] text-sm"></i>
          <div>
            <Link
              to="/seller-dashboard/offers-open"
              className="text-[#767676] text-base font-normal hover:underline flex gap-1"
            >
              {t("open")}
              {filterOpen?.length > 0 && (
                <p className="text-white bg-red-400 w-4 h-4 text-sm flex justify-center items-center rounded-full">
                  {filterOpen?.length}
                </p>
              )}
            </Link>
          </div>
        </span>
        <ul className="py-1 px-5 flex flex-col gap-2">
          <li>
            <Link
              to="/seller-dashboard/offers-won"
              className="text-[#767676] text-base font-normal hover:underline flex gap-1"
            >
              {t("won")}
            </Link>
          </li>

          <li>
            <Link
              to="/seller-dashboard/offers-complete"
              className="text-[#767676] text-base font-normal hover:underline flex gap-1"
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
        </ul>
      </li>
      <li className="flex gap-1 items-center">
        <i className="fa fa-star fa-fw text-[#000000] text-sm"></i>
        <Link
          to="/seller-dashboard/reviews"
          className="text-[#767676] text-base font-normal hover:underline flex gap-1"
        >
          {t("reviews")}
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
