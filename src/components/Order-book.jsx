import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function OrderBook() {
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
              <h2 className="text-black font-black text-2xl lg:text-4xl w-ful text-center">
                {t("fill_your_order")}
              </h2>
              <h2 className="text-black font-black text-2xl md:text-4xl w-ful text-center">
                {t("fill_your_order_2")}
              </h2>
            </span>
            <div className="flex flex-col gap-3 items-center justify-center">
              <h3 className="text-black text-xl lg:text-2xl font-normal w-full text-center">
                {t("fill_order_des")}
              </h3>
              <h3 className="text-black text-xl lg:text-2xl italic font-normal w-full text-center">
                {t("fill_order_des_2")}
              </h3>
              {!seller && !client && (
                <Link
                  className="bg-[#FFAA00] text-black font-bold text-xl py-2 px-10 text-center rounded-lg"
                  to="/company-register"
                >
                  {t("learn_more")}
                </Link>
              )}
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-1 md:gap-5 lg:gap-10 items-center mt-5">
            <span className="flex gap-2 items-center">
              <i className="fa-solid fa-check text-[#FFAA00] text-xl"></i>
              <h2 className="text-black font-black text-base">
                {t("seven_day_triel")}
              </h2>
            </span>
            <span className="flex gap-2 items-center">
              <i className="fa-solid fa-check text-[#FFAA00] text-xl"></i>
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

export default OrderBook;
