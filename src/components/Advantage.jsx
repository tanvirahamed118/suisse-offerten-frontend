import { Link } from "react-router-dom";
import Verify from "../assets/images/home/Question1.png";
import Review from "../assets/images/home/Question2.png";
import Offer from "../assets/images/home/Question3.png";
import { useTranslation } from "react-i18next";

function Advantage() {
  const { t } = useTranslation();
  const sellerAuth = localStorage?.getItem("seller");
  const seller = JSON.parse(sellerAuth);

  return (
    <section>
      <div className="bg-[#E9E9E9]">
        <div className="w-full rounded-md bg-white py-20 flex justify-center">
          <div className="lg:w-5/12 w-11/12 h-[300px] lg:h-[400px]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/yhaF89p3e-U?si=gNP7IA7-3ycITTUw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="py-10 m-auto w-full xl:w-[1230px] flex flex-col gap-10 items-center">
          <h2 className="text-xl text-black font-bold text-center md:text-5xl">
            {t("why_us")}
          </h2>
          <div className="flex flex-col items-center px-2 mt-14 md:flex-row gap-10">
            <div className="flex flex-col gap-2 items-center">
              <a href="">
                <img src={Verify} alt="" className="w-24" />
              </a>
              <h2 className="text-xl font-bold text-black text-center">
                {t("reason_title_1")}
              </h2>
              <p className="text-base text-black text-center font-normal w-8/12">
                {t("reasob_des_1")}
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <a href="">
                <img src={Review} alt="" className="w-24" />
              </a>
              <h2 className="text-xl font-bold text-black text-center">
                {t("reason_title_2")}
              </h2>
              <p className="text-base text-black text-center font-normal w-8/12">
                {t("reasob_des_2")}
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <a href="">
                <img src={Offer} alt="" className="w-24" />
              </a>
              <h2 className="text-xl font-bold text-black text-center">
                {t("reason_title_3")}
              </h2>
              <p className="text-base text-black text-center font-normal w-8/12">
                {t("reasob_des_3")}
              </p>
            </div>
          </div>
          {!seller?.sellerToken && (
            <Link
              to="/enter-request"
              className="bg-[#FFAA00] text-black font-semibold rounded-2xl hover:bg-[#ffaa00e5] text-base md:text-3xl py-3 md:py-6 w-10/12 md:w-5/12 m-auto text-center"
            >
              {t("get_your_offer")}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default Advantage;
