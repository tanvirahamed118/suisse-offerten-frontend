import Inside from "../assets/images/home/list-cetagory-list-conversioninside.svg";
import House from "../assets/images/home/list-cetagory-house-technic.svg";
import Metal from "../assets/images/home/list-cetagory-metal.svg";
import Outside from "../assets/images/home/list-cetagory-outside-house.svg";
import Windows from "../assets/images/home/list-cetagory-windows.svg";
import Conversion from "../assets/images/home/list-cetagory-conversion.svg";

import { useTranslation } from "react-i18next";
import { useState } from "react";

import { Link } from "react-router-dom";
import { useGetAllCetagoryQuery } from "../redux/rtk/features/category/categoryApi";

function AllCeatgories() {
  const { t } = useTranslation();
  const [isShow, setIsShow] = useState(false);
  const { data } = useGetAllCetagoryQuery();
  const insideData = data?.filter(
    (item) => item.category === "Inside the house"
  );
  const houseData = data?.filter((item) => item.category === "House technic");
  const metalData = data?.filter(
    (item) => item.category === "Metal construction & wood construction"
  );
  const outsideData = data?.filter(
    (item) => item.category === "Outside the house"
  );
  const windowsData = data?.filter(
    (item) => item.category === "Windows & Doors"
  );
  const converstionData = data?.filter(
    (item) => item.category === "Conversion & total renovation"
  );

  return (
    <section>
      <div className="container pb-10">
        <h2 className="text-black text-2xl font-bold text-center md:text-4xl">
          {t("all_categories")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-14">
          <div className="flex flex-col gap-5">
            <span className="flex gap-3 items-center">
              <img src={Inside} alt="" className="w-6 h-autoo" />
              <h2 className="text-md text-black font-bold md:text-lg">
                {t("inside_the_house")}
              </h2>
            </span>
            <div className="flex flex-col gap-5">
              {insideData?.map((item) => (
                <Link
                  to={`/service-category/${item._id}`}
                  key={item.id}
                  className="text-[#4C6DB2] text-base font-normal flex items-center gap-3"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                  <p className="">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="flex gap-3 items-center">
              <img src={House} alt="" className="w-6 h-autoo" />
              <h2 className="text-md text-black font-bold md:text-lg">
                {t("house_technic")}
              </h2>
            </span>
            <div className="flex flex-col gap-5">
              {houseData?.map((item) => (
                <Link
                  to={`/service-category/${item._id}`}
                  key={item.id}
                  className="text-[#4C6DB2] text-base font-normal flex items-center gap-3"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                  <p className="">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="flex gap-3 items-center">
              <img src={Metal} alt="" className="w-6 h-autoo" />
              <h2 className="text-md text-black font-bold md:text-lg">
                {t("metal_construction_wood_construction")}
              </h2>
            </span>
            <div className="flex flex-col gap-5">
              {metalData?.map((item) => (
                <Link
                  to={`/service-category/${item._id}`}
                  key={item.id}
                  className="text-[#4C6DB2] text-base font-normal flex items-center gap-3"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                  <p className="">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="flex gap-3 items-center">
              <img src={Outside} alt="" className="w-6 h-autoo" />
              <h2 className="text-md text-black font-bold md:text-lg">
                {t("outside_the_house")}
              </h2>
            </span>
            <div className="flex flex-col gap-5">
              {outsideData?.map((item) => (
                <Link
                  to={`/service-category/${item._id}`}
                  key={item.id}
                  className="text-[#4C6DB2] text-base font-normal flex items-center gap-3"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                  <p className="">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="flex gap-3 items-center">
              <img src={Windows} alt="" className="w-6 h-autoo" />
              <h2 className="text-md text-black font-bold md:text-lg">
                {t("windows_Doors")}
              </h2>
            </span>
            <div className="flex flex-col gap-5">
              {windowsData?.map((item) => (
                <Link
                  to={`/service-category/${item._id}`}
                  key={item.id}
                  className="text-[#4C6DB2] text-base font-normal flex items-center gap-3"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                  <p className="">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="flex gap-3 items-center">
              <img src={Conversion} alt="" className="w-6 h-autoo" />
              <h2 className="text-md text-black font-bold md:text-lg">
                {t("conversion_total_renovation")}
              </h2>
            </span>
            <div className="flex flex-col gap-5">
              {converstionData?.map((item) => (
                <Link
                  to={`/service-category/${item._id}`}
                  key={item._id}
                  className="text-[#4C6DB2] text-base font-normal flex items-center gap-3"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                  <p className="">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
          {isShow && <div></div>}
        </div>
        {!isShow && (
          <button
            onClick={() => setIsShow(true)}
            className="bg-white shadow-md text-black text-base font-medium px-10 py-4 border border-gray-200 rounded-md m-auto flex justify-center"
          >
            {t("show_more")}
          </button>
        )}
      </div>
    </section>
  );
}

export default AllCeatgories;
