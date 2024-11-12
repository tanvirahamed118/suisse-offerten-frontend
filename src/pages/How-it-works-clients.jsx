import { Link } from "react-router-dom";
import How_1 from "../assets/how_1.png";
import How_2 from "../assets/how_2.png";
import How_3 from "../assets/how_3.png";
import How_4 from "../assets/how_4.png";
import { useTranslation } from "react-i18next";

function HowItWorksClient() {
  const { t } = useTranslation();
  const clientAuth = localStorage?.getItem("client");
  const client = JSON.parse(clientAuth);
  const sellerAuth = localStorage?.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  return (
    <section>
      <div className="pt-10">
        <div className="flex flex-col gap-5">
          <div className="bg-white py-5 md:py-20 flex flex-col gap-20 container">
            <h2 className="text-black text-3xl md:text-5xl font-normal text-center">
              {t("client_title")}
            </h2>
            <h2 className="text-black text-3xl font-semibold underline">
              {t("how_it_works")}
            </h2>
          </div>

          <div className=" bg-[#E9E9E9] py-20 ">
            <div className="container grid md:grid-cols-2 grid-cols-1 gap-10 m-auto justify-center">
              <div className="">
                <h2 className="text-xl text-black font-semibold">
                  {t("how_it_work_client_title_1")}
                </h2>
                <div className="flex gap-10 py-2 items-center">
                  <img src={How_1} alt="" className="w-32" />
                  <p className="text-black font-normal text-sm w-full md:w-6/12">
                    {t("how_it_work_client_des_1")}
                  </p>
                </div>
              </div>
              <div className="">
                <h2 className="text-xl text-black font-semibold">
                  {t("how_it_work_client_title_2")}
                </h2>
                <div className="flex gap-10 py-2 items-center">
                  <img src={How_2} alt="" className="w-32" />
                  <p className="text-black font-normal text-sm w-full md:w-6/12">
                    {t("how_it_work_client_des_2")}
                  </p>
                </div>
              </div>
              <div className="">
                <h2 className="text-xl text-black font-semibold">
                  {t("how_it_work_client_title_3")}
                </h2>
                <div className="flex gap-10 py-2 items-center">
                  <img src={How_3} alt="" className="w-32" />
                  <p className="text-black font-normal text-sm w-full md:w-6/12">
                    {t("how_it_work_client_des_3")}
                  </p>
                </div>
              </div>
              <div className="">
                <h2 className="text-xl text-black font-semibold">
                  {t("how_it_work_client_title_4")}
                </h2>
                <div className="flex gap-10 py-2 items-center">
                  <img src={How_4} alt="" className="w-32" />
                  <p className="text-black font-normal text-sm w-full md:w-6/12">
                    {t("how_it_work_client_des_4")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!client?.clientToken && !seller?.sellerToken && (
          <div className="flex justify-center items-center h-72">
            <Link
              to="/client-register"
              className="bg-[#FFAA00] w-80 py-3 text-black text-2xl m-auto font-bold rounded-xl text-center"
            >
              {t("client_start")}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default HowItWorksClient;
