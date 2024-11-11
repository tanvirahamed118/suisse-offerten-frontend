import { Link } from "react-router-dom";
import outside from "../assets/images/request/outside.png";
import inside from "../assets/images/request/inside.png";
import planing from "../assets/images/request/planing.png";
import car from "../assets/images/request/car.png";
import moving from "../assets/images/request/moving.png";
import cleaning from "../assets/images/request/cleaning.png";
import transport from "../assets/images/request/transport.png";
import other from "../assets/images/request/other.png";
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
      <div className="w-10/12 m-auto">
        <div className="">
          <div className="grid grid-cols-2 xl:grid-cols-4 2xl:grid-cols-8 gap-5 md:gap-10 md:grid-cols-3 justify-center">
            <Link
              to="/enter-request"
              onClick={() => handleSelectId(1004884940)}
              className="flex flex-col gap-2 bg-[#FFAA00] items-center justify-center rounded-full hover:shadow-2xl md:w-40 md:h-40 w-32 h-32 m-auto"
            >
              <img src={outside} alt="" className="md:w-14 w-10" />
              <h2 className="text-black text-sm md:text-base font-semibold text-center capitalize px-6">
                {t("outside")}
              </h2>
            </Link>
            <Link
              to="/enter-request"
              onClick={() => handleSelectId(1006566593)}
              className="flex flex-col gap-2 bg-[#FFAA00] items-center justify-center rounded-full hover:shadow-2xl md:w-40 md:h-40 w-32 h-32 m-auto"
            >
              <img src={inside} alt="" className="md:w-14 w-10" />
              <h2 className="text-black text-sm md:text-base font-semibold text-center capitalize px-6">
                {t("inside")}
              </h2>
            </Link>
            <Link
              to="/enter-request"
              onClick={() => handleSelectId(1008649487)}
              className="flex flex-col gap-2 bg-[#FFAA00] items-center justify-center rounded-full hover:shadow-2xl md:w-40 md:h-40 w-32 h-32 m-auto"
            >
              <img src={planing} alt="" className="md:w-14 w-10" />
              <h2 className="text-black text-sm md:text-base font-semibold text-center capitalize px-6">
                {t("planning_consulting")}
              </h2>
            </Link>
            <Link
              to="/enter-request"
              onClick={() => handleSelectId(1009692966)}
              className="flex flex-col gap-2 bg-[#FFAA00] items-center justify-center rounded-full hover:shadow-2xl md:w-40 md:h-40 w-32 h-32 m-auto"
            >
              <img src={car} alt="" className="md:w-14 w-10" />
              <h2 className="text-black text-sm md:text-base font-semibold text-center capitalize px-6">
                {t("car_vehicles")}
              </h2>
            </Link>
            <Link
              to="/enter-request"
              onClick={() => handleSelectId(3290426656)}
              className="flex flex-col gap-2 bg-[#FFAA00] items-center justify-center rounded-full hover:shadow-2xl md:w-40 md:h-40 w-32 h-32 m-auto"
            >
              <img src={moving} alt="" className="md:w-14 w-10" />
              <h2 className="text-black text-sm md:text-base font-semibold text-center capitalize px-6">
                {t("moving_transport")}
              </h2>
            </Link>
            <Link
              to="/enter-request"
              onClick={() => handleSelectId(1014170444)}
              className="flex flex-col gap-2 bg-[#FFAA00] items-center justify-center rounded-full hover:shadow-2xl md:w-40 md:h-40 w-32 h-32 m-auto"
            >
              <img src={cleaning} alt="" className="md:w-14 w-10" />
              <h2 className="text-black text-sm md:text-base font-semibold text-center capitalize px-6">
                {t("cleaning")}
              </h2>
            </Link>
            <Link
              to="/enter-request"
              onClick={() => handleSelectId(6972719352)}
              className="flex flex-col gap-2 bg-[#FFAA00] items-center justify-center rounded-full hover:shadow-2xl md:w-40 md:h-40 w-32 h-32 m-auto"
            >
              <img src={transport} alt="" className="md:w-12 w-10" />
              <h2 className="text-black text-sm md:text-base font-semibold text-center capitalize px-6">
                {t("transport_disposal")}
              </h2>
            </Link>
            <Link
              to="/enter-request"
              onClick={() => handleSelectId(1017268119)}
              className="flex flex-col gap-2 bg-[#FFAA00] items-center justify-center rounded-full hover:shadow-2xl md:w-40 md:h-40 w-32 h-32 m-auto"
            >
              <img src={other} alt="" className="md:w-12 w-10" />
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
