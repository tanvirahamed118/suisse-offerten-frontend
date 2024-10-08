import Search from "../assets/images/search/cleaning_lady-ecbee0dc07f0ecb23aef.svg";
import { useTranslation } from "react-i18next";
import { useGetAllJobQuery } from "../redux/rtk/features/job/jobApi";
import Pagination from "./Pagination";
import { useState } from "react";
import JobLoading from "./loading/JobLoading";
import AllJobCategory from "./AllJobCategory";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function OfferItems() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const limit = 20;
  const { category, location } = useSelector((state) => state.jobFilter);
  const split = category?.split(" ").join("_");
  const { data, isLoading, isError, isSuccess, error } = useGetAllJobQuery({
    page,
    limit,
    category: split || undefined,
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
      } = item || {};
      const date = new Date(createdAt);
      const formattedDate = date.toLocaleDateString("en-GB");

      const displayDate = formattedDate.replace(/\//g, ".");

      return (
        <Link
          key={item._id}
          to={`/search-job/${item._id}`}
          state={{ from: "search-job" }}
          className="group flex flex-col gap-2 border border-gray-200 rounded-sm p-5 hover:cursor-pointer custom-hover overflow-hidden"
        >
          <h5 className="text-xl text-black font-bold group-hover:underline">
            {jobTitle?.slice(0, 50)}
          </h5>
          <div className="flex flex-col gap-2 items-center md:flex-row md:gap-5">
            <div className="border-gray-300 p-1 border w-56 h-36">
              <img
                src={jobFiles?.length > 0 ? jobFiles[0] : Search}
                alt=""
                className="rounded-md object-cover w-52 max-w-52 h-full"
              />
            </div>
            <div>
              <p className="text-black text-base font-normal pb-3">
                {jobDescription?.slice(0, 250)}...
              </p>
              <table>
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
              </table>
            </div>
          </div>
        </Link>
      );
    });
  }
  return (
    <section>
      <div className="container pb-10">
        <div className="flex flex-col md:flex-row md:gap-10 gap-6">
          <div className="w-full md:w-9/12">
            <h2 className="text-black hidden md:block text-4xl font-medium pb-8">
              {t("find_orders_in_Switzerland")}
            </h2>
            <div className="flex flex-col gap-3">{content}</div>
            <h2 className="text-black text-base font-normal py-3">
              {t("total_orders")}: {data?.totalJobs}
            </h2>
            {totalItems?.length > 20 && (
              <Pagination
                handlePageChange={handlePageChange}
                page={page}
                totalItems={totalItems}
                itemsPerPage={limit}
              />
            )}
          </div>
          <div className="w-full md:w-3/12">
            <div className="p-3 border border-gray-200">
              <h2 className="text-black text-base font-normal pb-2">
                {t("all_categories")}
              </h2>
              <AllJobCategory />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferItems;
