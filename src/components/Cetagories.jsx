import { Link } from "react-router-dom";
import CAT1 from "../assets/cat_1.png";
import CAT2 from "../assets/cat_2.png";
import CAT3 from "../assets/cat_3.png";
import CAT4 from "../assets/cat_4.png";
import CAT5 from "../assets/cat_5.png";
import CAT6 from "../assets/cat_6.png";
import { useDispatch } from "react-redux";
import { choseId } from "../redux/rtk/features/formReucer/formSlice";
import { useTranslation } from "react-i18next";

function Cetagories() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleSelectId = (id) => {
    dispatch(choseId(id));
  };

  return (
    <section className="bg-[#E9E9E9] py-10">
      <div className="container">
        <div className="">
          <div className="grid grid-cols-2 xl:grid-cols-6 gap-5 md:gap-10 md:grid-cols-3 justify-center">
            <Link
              to="/enter-request"
              onClick={() => handleSelectId(1006566593)}
              className="flex flex-col gap-2 bg-[#FFAA00] items-center justify-center rounded-full hover:shadow-2xl md:w-40 md:h-40 w-32 h-32 m-auto"
            >
              <img src={CAT1} alt="" className="md:w-14 w-10" />
              <h2 className="text-black text-sm md:text-base font-semibold text-center capitalize px-6">
                {t("inside")}
              </h2>
            </Link>
            <Link
              to="/enter-request"
              onClick={() => handleSelectId(1008649487)}
              className="flex flex-col gap-2 bg-[#FFAA00] items-center justify-center rounded-full hover:shadow-2xl md:w-40 md:h-40 w-32 h-32 m-auto"
            >
              <img src={CAT2} alt="" className="md:w-14 w-10" />
              <h2 className="text-black text-sm md:text-base font-semibold text-center capitalize px-6">
                {t("planning_consulting")}
              </h2>
            </Link>
            <Link
              to="/enter-request"
              onClick={() => handleSelectId(1009692966)}
              className="flex flex-col gap-2 bg-[#FFAA00] items-center justify-center rounded-full hover:shadow-2xl md:w-40 md:h-40 w-32 h-32 m-auto"
            >
              <img src={CAT3} alt="" className="md:w-14 w-10" />
              <h2 className="text-black text-sm md:text-base font-semibold text-center capitalize px-6">
                {t("car_vehicles")}
              </h2>
            </Link>
            <Link
              to="/enter-request"
              onClick={() => handleSelectId(6972719352)}
              className="flex flex-col gap-2 bg-[#FFAA00] items-center justify-center rounded-full hover:shadow-2xl md:w-40 md:h-40 w-32 h-32 m-auto"
            >
              <img src={CAT4} alt="" className="md:w-14 w-10" />
              <h2 className="text-black text-sm md:text-base font-semibold text-center capitalize px-6">
                {t("transport_disposal")}
              </h2>
            </Link>
            <Link
              to="/enter-request"
              onClick={() => handleSelectId(1014170444)}
              className="flex flex-col gap-2 bg-[#FFAA00] items-center justify-center rounded-full hover:shadow-2xl md:w-40 md:h-40 w-32 h-32 m-auto"
            >
              <img src={CAT5} alt="" className="md:w-14 w-10" />
              <h2 className="text-black text-sm md:text-base font-semibold text-center capitalize px-6">
                {t("cleaning")}
              </h2>
            </Link>
            <Link
              to="/enter-request"
              onClick={() => handleSelectId(1017268119)}
              className="flex flex-col gap-2 bg-[#FFAA00] items-center justify-center rounded-full hover:shadow-2xl md:w-40 md:h-40 w-32 h-32 m-auto"
            >
              <img src={CAT6} alt="" className="md:w-12 w-10" />
              <h2 className="text-black text-sm md:text-base font-semibold text-center capitalize px-6">
                {t("other")}
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cetagories;
