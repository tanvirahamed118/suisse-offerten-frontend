import Search from "../assets/images/search/cleaning_lady-ecbee0dc07f0ecb23aef.svg";
import { useTranslation } from "react-i18next";
import { useGetAllJobQuery } from "../redux/rtk/features/job/jobApi";
import Pagination from "./Pagination";
import { useState } from "react";
import JobLoading from "./loading/JobLoading";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import outside from "../assets/images/request/outside.png";
import inside from "../assets/images/request/inside.png";
import planing from "../assets/images/request/planing.png";
import car from "../assets/images/request/car.png";
import moving from "../assets/images/request/moving.png";
import cleaning from "../assets/images/request/cleaning.png";
import transport from "../assets/images/request/transport.png";
import other from "../assets/images/request/other.png";

function OfferItems() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const limit = 20;
  const { category, location } = useSelector((state) => state.jobFilter);
  const { data, isLoading, isError, isSuccess, error } = useGetAllJobQuery({
    page,
    limit,
    category: category || undefined,
    location: location,
  });

  const totalItems = data?.totalJobs || 0;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // decide what to show for jobs
  let content;
  if (isLoading) {
    content = (
      <div className="w-full">
        <JobLoading />
        <JobLoading />
        <JobLoading />
        <JobLoading />
        <JobLoading />
        <JobLoading />
        <JobLoading />
      </div>
    );
  }
  if (isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && data?.jobs?.length === 0) {
    content = <p>No Data Found!</p>;
  }
  if (!isLoading && !isError && isSuccess && data?.jobs?.length > 0) {
    content = data?.jobs?.map((item) => {
      const {
        jobTitle,
        jobDescription,
        createdAt,
        jobCompletionDate,
        jobLocation,
        jobPostcode,
        jobFiles,
        jobCategoryCode,
      } = item || {};
      const date = new Date(createdAt);
      const formattedDate = date.toLocaleDateString("en-GB");
      const displayDate = formattedDate.replace(/\//g, ".");

      return (
        <Link
          key={item._id}
          to={`/search-job/${item._id}`}
          state={{ from: "search-job" }}
          className="group flex flex-col gap-2 border-2 border-gray-100 rounded-md p-5 hover:cursor-pointer custom-hover overflow-hidden"
        >
          <h5 className="text-xl text-black font-bold group-hover:underline">
            {jobTitle}
          </h5>
          <div className="flex flex-col gap-2 items-center md:flex-row md:gap-5">
            <div className="border-gray-300 p-1 border w-56 h-36">
              <img
                src={
                  jobFiles?.length > 0
                    ? jobFiles[0]
                    : jobCategoryCode === "Draußen" ||
                      jobCategoryCode === "Outside" ||
                      jobCategoryCode === "Dehors"
                    ? outside
                    : jobCategoryCode === "Innen" ||
                      jobCategoryCode === "Inside" ||
                      jobCategoryCode === "À_l'intérieur"
                    ? inside
                    : jobCategoryCode === "Planung_Beratung" ||
                      jobCategoryCode === "Planning_Consulting" ||
                      jobCategoryCode === "Planification_et_conseil"
                    ? planing
                    : jobCategoryCode === "Auto_/_Fahrzeuge" ||
                      jobCategoryCode === "Car_/_Vehicles" ||
                      jobCategoryCode === "Voiture_/_Véhicules"
                    ? car
                    : jobCategoryCode === "Umzug_Wohnungswechsel" ||
                      jobCategoryCode === "Moving_moving_house" ||
                      jobCategoryCode === "Déménager_déménager"
                    ? moving
                    : jobCategoryCode === "Reinigung" ||
                      jobCategoryCode === "Cleaning" ||
                      jobCategoryCode === "Nettoyage"
                    ? cleaning
                    : jobCategoryCode === "Transport_Entsorgung" ||
                      jobCategoryCode === "Transport_Disposal" ||
                      jobCategoryCode === "Transport_et_élimination"
                    ? transport
                    : jobCategoryCode === "Andere" ||
                      jobCategoryCode === "Other" ||
                      jobCategoryCode === "Autre"
                    ? other
                    : Search
                }
                alt=""
                className={
                  jobFiles?.length > 0
                    ? "rounded-md object-cover w-52 max-w-52 h-full"
                    : "rounded-md object-contain w-52 max-w-52 h-full"
                }
              />
            </div>
            <div>
              <p className="text-black text-base font-normal pb-3">
                {jobDescription?.slice(0, 250)}...
              </p>
              <table>
                <tbody>
                  <tr className="text-base text-gray-500 font-normal">
                    <td className="pr-5">{t("published_on")}:</td>
                    <td>{displayDate}</td>
                  </tr>
                  <tr className="text-base text-gray-500 font-normal">
                    <td className="pr-5">{t("appointment_request")}:</td>
                    <td>{jobCompletionDate}</td>
                  </tr>
                  <tr className="text-base text-gray-500 font-normal">
                    <td className="pr-5">{t("place_of_execution")}:</td>
                    <td>{jobPostcode + " " + jobLocation}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Link>
      );
    });
  }
  return (
    <section className="w-full lg:w-9/12">
      <div className="pb-10">
        <div className="flex flex-col md:flex-row md:gap-10 gap-6">
          <div className="w-full">
            <div className="flex flex-col gap-3">{content}</div>
            <h2 className="text-black text-base font-normal py-3">
              {t("total_orders")}: {data?.totalJobs}
            </h2>
            {totalItems > limit && (
              <Pagination
                handlePageChange={handlePageChange}
                page={page}
                totalItems={totalItems}
                itemsPerPage={limit}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferItems;
