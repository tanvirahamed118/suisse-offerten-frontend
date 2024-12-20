import { Link } from "react-router-dom";
import Verify from "../assets/images/home/works1.png";
import Review from "../assets/images/home/works2.png";
import Offer from "../assets/images/home/works3.png";
import { useTranslation } from "react-i18next";

function HowWorks() {
  const { t } = useTranslation();
  const sellerAuth = localStorage?.getItem("seller");
  const seller = JSON.parse(sellerAuth);

  return (
    <section className="bg-white py-10 md:py-20 mb-0 md:mb-10">
      <div className="py-10 m-auto w-full xl:w-[1230px] flex flex-col gap-20 items-center">
        <h2 className="text-xl text-black font-bold text-center md:text-5xl">
          {t("how_works")}
        </h2>
        <div className="flex flex-col gap-5 items-center px-2 mt-14 md:flex-row md:gap-10">
          <div className="flex flex-col gap-2 items-center">
            <a href="">
              <img src={Verify} alt="" className="w-24" />
            </a>
            <h2 className="text-xl font-bold text-black text-center">
              {t("work_title_1")}
            </h2>
            <p className="text-base text-black text-center font-normal w-8/12">
              {t("work_des_1")}
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <a href="">
              <img src={Review} alt="" className="w-24" />
            </a>
            <h2 className="text-xl font-bold text-black text-center">
              {t("work_title_2")}
            </h2>
            <p className="text-base text-black text-center font-normal w-8/12">
              {t("work_des_2")}
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <a href="">
              <img src={Offer} alt="" className="w-24" />
            </a>
            <h2 className="text-xl font-bold text-black text-center">
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
            className="bg-[#E9E9E9] text-black font-semibold text-base md:text-3xl md:py-4 py-2 px-10 rounded-md"
          >
            {t("enter_now_your_request")}
          </Link>
        )}
      </div>
    </section>
  );
}

export default HowWorks;
