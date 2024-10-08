import { Link } from "react-router-dom";
import Verify from "../assets/images/home/1-fe9230c82558b63f1f91.png";
import Review from "../assets/images/home/2-57898db736a3a502dff8.png";
import Offer from "../assets/images/home/3-c8ff5dd90ef09a1d6f8b.png";
import { useTranslation } from "react-i18next";

function HowWorks() {
  const { t } = useTranslation();
  const sellerAuth = localStorage?.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  return (
    <section className="bg-white py-20 border-b border-gray-400 mb-20">
      <div className="py-10 m-auto w-full xl:w-[1230px] flex flex-col gap-20 items-center">
        <h2 className="text-xl text-black font-bold text-center md:text-5xl">
          {t("how_works")}
        </h2>
        <div className="flex flex-col gap-5 items-center px-2 mt-14 md:flex-row md:gap-10">
          <div className="flex flex-col gap-2 items-center">
            <a href="">
              <img src={Verify} alt="" className="w-40" />
            </a>
            <h2 className="text-xl font-bold text-black text-center capitalize">
              {t("work_title_1")}
            </h2>
            <p className="text-base text-black text-center font-normal w-8/12">
              {t("work_des_1")}
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <a href="">
              <img src={Review} alt="" className="w-40" />
            </a>
            <h2 className="text-xl font-bold text-black text-center capitalize">
              {t("work_title_2")}
            </h2>
            <p className="text-base text-black text-center font-normal w-8/12">
              {t("work_des_2")}
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <a href="">
              <img src={Offer} alt="" className="w-40" />
            </a>
            <h2 className="text-xl font-bold text-black text-center capitalize">
              {t("work_title_3")}
            </h2>
            <p className="text-base text-black text-center font-normal w-8/12">
              {t("work_des_3")}
            </p>
          </div>
        </div>
        {!seller?.sellerToken && (
          <Link
            to="/enter-request"
            className="bg-[#E9E9E9] text-black font-semibold text-xl md:text-3xl py-4 px-10"
          >
            {t("enter_now_your_request")}
          </Link>
        )}
      </div>
    </section>
  );
}

export default HowWorks;
