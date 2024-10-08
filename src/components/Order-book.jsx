import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function OrderBook() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#F5F6F7]">
      <div className="container categories-image py-5 md:h-[55vh]">
        <ul className="flex items-center gap-2 pb-2">
          <li>
            <Link
              to="/"
              className="text-[#3097d1] text-base hover:underline font-normal hover:text-[#007aff]"
            >
              {t("home")}
            </Link>
          </li>
          <li>
            <i className="fa-solid fa-angle-right"></i>
          </li>
          <li>
            <a href="" className="text-black text-base font-normal">
              {t("search_job")}
            </a>
          </li>
        </ul>
        <div className="flex flex-col gap-10 md:flex-row md:h-full md:items-center">
          <div className="flex flex-col gap-3 md:items-start md:gap-6">
            <h2 className="text-black font-bold text-2xl md:text-5xl w-ful md:w-7/12">
              {t("fill_your_order")}
            </h2>
            <h3 className="text-black text-base font-normal w-full md:w-[50%]">
              {t("fill_order_des")}
            </h3>
            <Link
              className="bg-[#ff7100] text-white font-normal rounded-md hover:bg-[#D96000] text-lg py-4 px-10 text-center"
              to="/enter-request"
            >
              {t("learn_more")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderBook;
