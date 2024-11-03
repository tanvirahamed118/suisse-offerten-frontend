import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CallOfAction() {
  const { t } = useTranslation();
  const sellerAuth = localStorage?.getItem("seller");
  const seller = JSON.parse(sellerAuth);

  return (
    <section className="custom-image w-full h-96 lg:h-[70vh]">
      <div className="hero flex items-center py-5 h-full">
        <div className="container flex flex-col gap-5 justify-center items-center h-full">
          <h2 className="text-3xl lg:text-[50px] text-white font-semibold leading-tight text-center">
            {t("are_looking_craftsman")}
          </h2>
          <p className="text-base lg:text-2xl text-white font-normal leading-tigh w-full md:w-6/12 text-center">
            {t("receive_free_offers")}
          </p>
          {!seller?.sellerToken && (
            <Link to="/enter-request" className="w-full flex justify-center">
              <button
                className="bg-[#FFAA00] text-black font-semibold rounded-2xl hover:bg-[#d6a135] px-10 text-xl md:text-3xl py-2 md:py-6"
                type="submit"
              >
                {t("get_offer")}
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default CallOfAction;
