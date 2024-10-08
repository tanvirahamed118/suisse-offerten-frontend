import { useTranslation } from "react-i18next";

function LocationAction() {
  const { t } = useTranslation();
  return (
    <section className="w-full h-auto lg:h-[500px] overflow-hidden bg-[#F5F6F7]">
      <div className="relative h-full">
        <div className="container z-2 w-full h-full">
          <div className="flex flex-col gap-5 justify-center h-full py-5">
            <h2 className="text-3xl lg:text-[50px] text-black font-bold leading-tight md:w-[50%] w-full">
              {t("location_title")}
            </h2>
            <p className="text-base lg:text-xl text-gray-500 font-normal leading-tigh md:w-[50%] w-fullt">
              {t("location_text_1")}
            </p>
            <form className="bg-transparent w-full md:flex-row flex-col lg:w-[60%] lg:border border-gray-200 rounded-md flex p-2 gap-5 bg-white">
              <input
                className="bg-white py-3 px-3 w-[100%] md:w-[60%] md:border-none outline-none text-base rounded-md text-black font-normal border border-gray-200"
                type="text"
                name=""
                id=""
                placeholder={t("location_text_2")}
              />
              <button
                className="bg-[#ff7100] w-[100%] md:w-[40%] text-white font-normal rounded-md hover:bg-[#D96000] text-lg py-4 px-3"
                type="submit"
              >
                {t("location_text_3")}
              </button>
            </form>
            <div>
              <p className="text-base text-gray-400 font-normal">
                {t("location_text_4")}
              </p>
              <ul className="flex gap-5 pt-3 flex-wrap">
                <li>
                  <a
                    href=""
                    className="text-black text-base font-normal hover:bg-gray-200 p-2 rounded-full"
                  >
                    {t("location_text_5")}
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-black text-base font-normal hover:bg-gray-200 p-2 rounded-full"
                  >
                    {t("location_text_6")}
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-black text-base font-normal hover:bg-gray-200 p-2 rounded-full"
                  >
                    {t("location_text_7")}
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-black text-base font-normal hover:bg-gray-200 p-2 rounded-full"
                  >
                    {t("location_text_8")}
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-black text-base font-normal hover:bg-gray-200 p-2 rounded-full"
                  >
                    {t("location_text_9")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img
          src="../images/about/hero_bd_by_city-d3e91debeed7da829b1b.jpg"
          alt=""
          className="hidden xl:block absolute top-[-200px] right-[-100px] h-[572px] -rotate-45 rounded-[100px] object-cover opacity-80"
        />
      </div>
    </section>
  );
}

export default LocationAction;
