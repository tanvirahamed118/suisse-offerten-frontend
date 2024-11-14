import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function LocationAction() {
  const { t } = useTranslation();
  const sellerAuth = localStorage.getItem("seller");
  const clientAuth = localStorage.getItem("client");
  const seller = JSON.parse(sellerAuth);
  const client = JSON.parse(clientAuth);

  return (
    <section className="bg-[#F5F6F7] p-5 lg:p-10">
      <div className="container py-5">
        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-col gap-3 items-center">
            <span className="flex flex-col gap-2">
              <h2 className="text-black font-black text-2xl lg:text-4xl w-full lg:w-10/12 text-center m-auto">
                {t("location_title")}
              </h2>
              <h2 className="text-black font-black text-2xl md:text-4xl w-full text-center">
                {t("location_text_1")}
              </h2>
            </span>
            <div className="flex flex-col gap-3 items-center justify-center">
              <h3 className="text-black text-xl lg:text-2xl font-normal w-full text-center">
                {t("location_text_2")}
              </h3>
              <h3 className="text-black text-xl lg:text-2xl italic font-normal w-full text-center">
                {t("location_text_3")}
              </h3>
              {!seller && !client && (
                <Link
                  className="bg-[#FFAA00] text-black font-bold text-md md:text-xl py-2 px-10 text-center rounded-lg"
                  to="/enter-request"
                >
                  {t("location_text_4")}
                </Link>
              )}
            </div>
          </div>
          <div className="flex sm:gap-5 md:flex-row flex-col gap-2 lg:gap-10 items-center mt-5">
            <span className="flex gap-2 items-center">
              <i className="fa-solid fa-check text-[#FFAA00] text-sm md:text-xl"></i>
              <h2 className="text-black font-black text-base">
                {t("free_100")}
              </h2>
            </span>
            <span className="flex gap-2 items-center">
              <i className="fa-solid fa-check text-[#FFAA00] text-sm md:text-xl"></i>
              <h2 className="text-black font-black text-base">
                {t("no_Obligation")}
              </h2>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationAction;
