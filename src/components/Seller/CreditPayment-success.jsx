import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useUpdatePaymentCreditMutation } from "../../redux/rtk/features/payment/paymentApi";
import { useGetOneSellerQuery } from "../../redux/rtk/features/auth/seller/authApi";
import { useEffect } from "react";

function CreditPaymentSuccess() {
  const { t } = useTranslation();
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const id = seller?.seller?._id;
  const { data } = useGetOneSellerQuery(id);
  const [updatePaymentCredit] = useUpdatePaymentCreditMutation();
  const { pendingCredits } = data || {};

  useEffect(() => {
    if (pendingCredits > 0) {
      const formData = { sellerId: id, credit: pendingCredits };
      updatePaymentCredit(formData);
    }
  }, [pendingCredits, updatePaymentCredit, id]);

  return (
    <div className="w-full h-[500px] flex flex-col gap-5 justify-center items-center">
      <i className="fa-solid fa-circle-check text-[60px] text-green-500"></i>
      <p className="text-xl font-medium text-black">{t("credit_purchase")}</p>
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
