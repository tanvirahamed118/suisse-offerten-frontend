import { useTranslation } from "react-i18next";

function PaymentFail() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[500px] flex flex-col gap-5 justify-center items-center">
      <i className="fa-solid fa-circle-xmark text-[60px] text-red-500"></i>
      <p className="text-xl font-medium text-black">{t("payment_failed")}</p>
      <div className="flex gap-2 items-center md:w-8/12 w-full bg-[#FFFADF] p-5 rounded-md">
        <i className="fa-solid fa-circle-exclamation text-3xl text-red-500"></i>
        <p className="text-sm text-[#111]">
          {t("membership_purchase_notify_fail")}
        </p>
      </div>
    </div>
  );
}

export default PaymentFail;
