import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function OfferTab() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f5f6f7] py-10">
      <div className="container flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div>
          <h2 className="text-black text-2xl font-medium">
            {t("simply_several_offers_free")}
          </h2>
          <div className="flex gap-2 lg:gap-10 flex-col lg:flex-row items-start lg:items-center py-3">
            <span className="flex gap-3 items-center">
              <i className="fa-solid fa-check text-[#19be10] text-xl"></i>
              <p className="text-black text-base font-normal">
                {t("free_for_you")}
              </p>
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
          </div>
        </div>

        <Link
          to="/enter-request"
          className="text-white text-base font-normal text-center bg-[#ff7100] p3-5 py-5 rounded-md w-full lg:w-52 hover:bg-[#F25900]"
        >
          {t("request_quotes")}
        </Link>
      </div>
    </section>
  );
}

export default OfferTab;
