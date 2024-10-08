import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function OfferRequest() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-5 p-5 custom-shadow w-full rounded-xl">
      <h2 className="text-black text-2xl font-bold">
        {t("simply_several_offers_free")}
      </h2>
      <span className="flex gap-3 items-center">
        <i className="fa-solid fa-check text-[#19be10] text-xl"></i>
        <p className="text-black text-base font-normal">{t("free_for_you")}</p>
      </span>
      <span className="flex gap-3 items-center">
        <i className="fa-solid fa-check text-[#19be10] text-xl"></i>
        <p className="text-black text-base font-normal">
          {t("certified_craftsmen_service")}
        </p>
      </span>
      <span className="flex gap-3 items-center">
        <i className="fa-solid fa-check text-[#19be10] text-xl"></i>
        <p className="text-black text-base font-normal">
          {t("with_user_reviews")}
        </p>
      </span>

      <Link
        to="/enter-request"
        className="text-white text-base font-normal text-center bg-[#ff7100] p3-5 py-5 rounded-md w-full hover:bg-[#F25900]"
      >
        {t("request_quotes")}
      </Link>
      <p className="text-black text-base font-normal text-center">
        {t("completely_free_non_binding")}
      </p>
    </div>
  );
}

export default OfferRequest;
