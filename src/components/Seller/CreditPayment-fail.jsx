import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CreditPaymentFail() {
  const { t } = useTranslation();
  return (
    <div className="w-full h-[500px] flex flex-col gap-5 justify-center items-center">
      <i className="fa-solid fa-circle-xmark text-[60px] text-red-500"></i>
      <p className="text-xl font-medium text-black">
        {t("credit_purchase_failed")}
      </p>
      <Link
        to="/seller-dashboard/membership"
        className="border border-gray-200 px-2 py-1 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-2 md:px-4"
      >
        {t("got_to_membership")}
      </Link>
    </div>
  );
}

export default CreditPaymentFail;
