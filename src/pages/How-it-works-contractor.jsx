import { Link } from "react-router-dom";
import How_5 from "../assets/how_5.png";
import How_6 from "../assets/how_6.png";
import How_7 from "../assets/how_7.png";
import How_8 from "../assets/how_8.png";
import How_9 from "../assets/how_9.png";
import { useTranslation } from "react-i18next";

function HowItWorksContractor() {
  const { t } = useTranslation();
  const sellerAuth = localStorage?.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const clientAuth = localStorage?.getItem("client");
  const client = JSON.parse(clientAuth);
  return (
    <section>
      <div className="pt-10">
        <div className="flex flex-col gap-5">
          <div className="bg-white py-20 flex flex-col gap-20 container">
            <h2 className="text-black text-5xl font-normal text-center">
              {t("contractor_title")}
            </h2>
            <h2 className="text-black text-3xl font-semibold underline">
              {t("how_it_works")}
            </h2>
          </div>

          <div className=" bg-[#E9E9E9] py-20 ">
            <div className="container grid md:grid-cols-2 grid-cols-1 gap-10 m-auto justify-center">
              <div className="">
                <h2 className="text-xl text-black font-semibold">
                  {t("how_it_work_contractor_title_1")}
                </h2>
                <div className="flex gap-10 py-2 items-center">
                  <img src={How_5} alt="" className="w-32" />
                  <p className="text-black font-normal text-sm w-full md:w-6/12">
                    {t("how_it_work_contractor_des_1")}
                  </p>
                </div>
              </div>
              <div className="">
                <h2 className="text-xl text-black font-semibold">
                  {t("how_it_work_contractor_title_2")}
                </h2>
                <div className="flex gap-10 py-2 items-center">
                  <img src={How_6} alt="" className="w-32" />
                  <p className="text-black font-normal text-sm w-full md:w-6/12">
                    {t("how_it_work_contractor_des_2")}
                  </p>
                </div>
              </div>
              <div className="">
                <h2 className="text-xl text-black font-semibold">
                  {t("how_it_work_contractor_title_3")}
                </h2>
                <div className="flex gap-10 py-2 items-center">
                  <img src={How_7} alt="" className="w-32" />
                  <p className="text-black font-normal text-sm w-full md:w-6/12">
                    {t("how_it_work_contractor_des_3")}
                  </p>
                </div>
              </div>
              <div className="">
                <h2 className="text-xl text-black font-semibold">
                  {t("how_it_work_contractor_title_4")}
                </h2>
                <div className="flex gap-10 py-2 items-center">
                  <img src={How_8} alt="" className="w-20" />
                  <p className="text-black font-normal text-sm w-full md:w-6/12">
                    {t("how_it_work_contractor_des_4")}
                  </p>
                </div>
              </div>
              <div className="">
                <h2 className="text-xl text-black font-semibold">
                  {t("how_it_work_contractor_title_5")}
                </h2>
                <div className="flex gap-10 py-2 items-center">
                  <img src={How_9} alt="" className="w-32" />
                  <p className="text-black font-normal text-sm w-full md:w-6/12">
                    {t("how_it_work_contractor_des_5")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!seller?.sellerToken && !client?.clientToken && (
          <div className="flex justify-center items-center h-72">
            <Link
              to="/company-register"
              className="bg-[#FFAA00] px-20 py-3 text-black text-2xl m-auto font-bold rounded-xl text-center"
            >
              {t("register_as_company")}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default HowItWorksContractor;
