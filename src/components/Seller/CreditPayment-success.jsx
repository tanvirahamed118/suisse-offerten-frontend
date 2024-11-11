import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetOneSellerQuery } from "../../redux/rtk/features/auth/seller/authApi";

function CreditPaymentSuccess() {
  const { t } = useTranslation();
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const id = seller?.seller?._id;
  const { data } = useGetOneSellerQuery(id);
  const { pendingCredits, credits } = data || {};

  return (
    <div className="w-full h-[500px] flex flex-col gap-5 justify-center items-center">
      <i className="fa-solid fa-circle-check text-[60px] text-green-500"></i>
      <p className="text-xl font-medium text-black">{t("credit_purchase")}</p>
      {credits === pendingCredits + credits && (
        <div className="flex gap-2 items-center w-8/12 lg:w-full bg-[#FFFADF] p-5 rounded-md my-5">
          <i className="fa-solid fa-circle-exclamation text-2xl text-red-500"></i>
          <p className="text-sm text-[#111]">{t("membership_credit_fail")}</p>
        </div>
      )}
      <Link
        to="/seller-dashboard/membership"
        className="border border-gray-200 px-2 py-1 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-2 md:px-4"
      >
        {t("got_to_membership")}
      </Link>
    </div>
  );
}

export default CreditPaymentSuccess;
