import { useTranslation } from "react-i18next";
import questions from "../../datas/request-data";
import { useEffect, useState } from "react";
import {
  useGetOneSellerQuery,
  useUpdateSellerActivityMutation,
} from "../../redux/rtk/features/auth/seller/authApi";
import toast, { Toaster } from "react-hot-toast";
import postalCode from "../../datas/locations.json";
import movingImg from "../../assets/images/request/moving.png";

function SellerActivity() {
  const { t } = useTranslation();
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const id = seller?.seller?._id;
  const [updateSellerActivity, { data, isLoading, isSuccess, isError, error }] =
    useUpdateSellerActivityMutation();
  const [activity, setActivity] = useState({
    activities: [],
    locations: [],
  });
  const { data: getSeller } = useGetOneSellerQuery(id);

  const filterData = questions?.filter(
    (item) => item.type === "radio" && item.label !== "main_services_categories"
  );
  const options = filterData
    .flatMap((item) => item.options)
    .filter((option) => option);
  const uniqueOptions = Array.from(
    new Map(options.map((option) => [option.label, option])).values()
  );
  const customOption = {
    id: 1010368261,
    label: "Moving, moving house",
    img: movingImg,
  };
  uniqueOptions.push(customOption);

  useEffect(() => {
    if (getSeller) {
      setActivity({
        activities: getSeller.activities || [], // Set activities from the seller data
        locations: getSeller.preference || [], // Set locations (preferences) from seller data
      });
    }
  }, [getSeller]);

  const handleChose = (label, type) => {
    const updatevalue = label
      .split(/\s*[,.-\s]+\s*/g)
      .filter(Boolean)
      .join("_");

    if (type === "locations") {
      setActivity((prevActivity) => {
        const updatedLocations = prevActivity.locations.includes(updatevalue)
          ? prevActivity.locations.filter((loc) => loc !== updatevalue) // Remove if already selected
          : [...prevActivity.locations, updatevalue]; // Add if not selected

        return { ...prevActivity, locations: updatedLocations };
      });
    } else {
      setActivity((prevActivity) => {
        const updatedActivities = prevActivity.activities.includes(updatevalue)
          ? prevActivity.activities.filter((act) => act !== updatevalue) // Remove if already selected
          : [...prevActivity.activities, updatevalue]; // Add if not selected

        return { ...prevActivity, activities: updatedActivities };
      });
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    updateSellerActivity({ id, activity });
  };

  useEffect(() => {
    if (isError) {
      toast.error(error.data.message);
    }
    if (isSuccess) {
      toast.success(data.message);
    }
  }, [isSuccess, isError, data, error]);

  return (
    <div className="">
      <div className="bg-[#F5F8FA] p-5 border border-gray-300 rounded-sm">
        <h2 className="text-2xl font-normal text-black">
          {t("area_of_activity_dash")}
        </h2>
        <p className="text-base font-normal text-black">
          {t("area_of_activity_des")}
        </p>
        <form onSubmit={handlesubmit}>
          <div className="flex justify-between mt-5 gap-5 lg:flex-row flex-col">
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between gap-1">
              {uniqueOptions.map((option) => {
                const type = "acitivity";
                const updatevalue = option.label
                  ?.split(/\s*[,.-\s]+\s*/g)
                  ?.filter(Boolean)
                  ?.join("_");
                return (
                  <li key={option.id} className="flex gap-2 items-start">
                    <input
                      type="checkbox"
                      name={`option-${option.id}`}
                      id={`option-${option.id}`}
                      className="mt-1"
                      checked={activity.activities.includes(updatevalue)}
                      onChange={() => handleChose(option.label, type)}
                    />
                    <label
                      htmlFor={`option-${option.id}`}
                      className="text-black text-sm font-normal"
                    >
                      {option.label}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>

          <p className="text-base font-normal text-black mt-10">
            {t("area_of_activity_text_3")}
          </p>
          <div className="flex justify-between mt-5 gap-5 lg:flex-row flex-col">
            <ul className="grid grid-cols-2 xl:grid-cols-4 w-full gap-1">
              {[
                ...new Set(postalCode.locations?.map((item) => item.Kanton)),
              ].map((kanton, index) => {
                const type = "locations";
                const updatevalue = kanton
                  ?.split(/\s*[,.-\s]+\s*/g)
                  ?.filter(Boolean)
                  ?.join("_");
                return (
                  <li key={index} className="flex gap-2 items-start w-full">
                    <input
                      type="checkbox"
                      name={`option-${kanton}`}
                      id={`option-${kanton}`}
                      className="mt-1"
                      checked={activity.locations.includes(updatevalue)}
                      onChange={() => handleChose(kanton, type)}
                    />
                    <label
                      htmlFor={`option-${kanton}`}
                      className="text-black text-sm font-normal"
                    >
                      {kanton}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex justify-end py-5">
            <button
              type="submit"
              className="flex justify-end bg-[#19be10] hover:bg-[#16A60E] py-2 px-5 text-left text-white text-sm font-normal rounded-md"
            >
              {}
              {isLoading ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 animate-spin"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                  <p>Loading...</p>
                </>
              ) : (
                t("area_of_activity_text_8")
              )}
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default SellerActivity;