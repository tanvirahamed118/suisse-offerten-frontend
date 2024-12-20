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
    <ul className="flex flex-col gap-3 border border-gray-200 rounded-xl p-5">
      <li className="flex gap-1 items-center">
        <Link
          to="/seller-dashboard"
          className="text-[#111111] text-base font-bold hover:underline"
        >
          {t("new_leads")}
        </Link>
      </li>
      <li className="flex gap-1">
        <Link
          to="/seller-dashboard/perticipation"
          className="text-[#111111] text-base font-bold hover:underline flex gap-1"
        >
          {t("participation_contact_requests")}
          {filterRequest?.length > 0 && (
            <p className="text-white bg-red-400 w-4 h-4 text-sm flex justify-center items-center rounded-full">
              {filterRequest?.length}
            </p>
          )}
        </Link>
      </li>

      <span className="flex gap-1 items-center">
        <div>
          <Link
            to="/seller-dashboard/offers-open"
            className="text-[#111111] text-base font-bold hover:underline flex gap-1"
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

      <li>
        <Link
          to="/seller-dashboard/offers-won"
          className="text-[#111111] text-base font-bold hover:underline flex gap-1"
        >
          {t("won")}
        </Link>
      </li>

      <li>
        <Link
          to="/seller-dashboard/offers-complete"
          className="text-[#111111] text-base font-bold hover:underline flex gap-1"
        >
          {t("completed")}
        </Link>
      </li>

      <li>
        <Link
          to="/seller-dashboard/offers-archived"
          className="text-[#111111] text-base font-bold hover:underline"
        >
          {t("archived")}
        </Link>
      </li>

      <li className="flex gap-1 items-center">
        <Link
          to="/seller-dashboard/reviews"
          className="text-[#111111] text-base font-bold hover:underline flex gap-1"
        >
          {t("reviews")}
        </Link>
      </li>
      <li className="flex gap-1 items-center">
        <Link
          to="/seller-dashboard/observer"
          className="text-[#111111] text-base font-bold hover:underline"
        >
          {t("observer")}
        </Link>
      </li>
      <li className="flex gap-1 items-center">
        <Link
          to="/seller-dashboard/news"
          className="text-[#111111] text-base font-bold hover:underline"
        >
          {t("news")}
        </Link>
      </li>
      <li className="flex gap-1 items-center">
        <Link
          to="/seller-dashboard/bills"
          className="text-[#111111] text-base font-bold hover:underline"
        >
          {t("bills")}
        </Link>
      </li>
      <li className="flex gap-1 items-center">
        <Link
          to="/seller-dashboard/activity"
          className="text-[#111111] text-base font-bold hover:underline"
        >
          {t("area_of_activity")}
        </Link>
      </li>
      <li className="flex gap-1 items-center">
        <Link
          to="/seller-dashboard/company-profile"
          className="text-[#111111] text-base font-bold hover:underline"
        >
          {t("compancy_profile")}
        </Link>
      </li>
      <li className="flex gap-1 items-center">
        <Link
          to={`/seller-review-profile/${id}`}
          state={{ from: `seller-dashboard` }}
          className="text-[#111111] text-base font-bold hover:underline"
        >
          {t("preview_profile")}
        </Link>
      </li>
      <li className="flex gap-1 items-center">
        <Link
          to="/seller-dashboard/verify-documents"
          className="text-[#111111] text-base font-bold hover:underline"
        >
          {t("verify_documents")}
        </Link>
      </li>

      <li className="flex gap-1 items-center">
        <Link
          to="/seller-dashboard/personal-info"
          className="text-[#111111] text-base font-bold hover:underline"
        >
          {t("personal_information")}
        </Link>
      </li>
      <li className="flex gap-1 items-center">
        <Link
          to="/seller-dashboard/membership"
          className="text-[#111111] text-base font-bold hover:underline"
        >
          {t("member_cerdits")}
        </Link>
      </li>
    </ul>
  );
}

export default DashboardNav;
