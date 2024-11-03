import { useTranslation } from "react-i18next";
import Search from "../../assets/images/search/cleaning_lady-ecbee0dc07f0ecb23aef.svg";
import JobLoading from "../loading/JobLoading";
import Pagination from "../Pagination";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useGetAllJobsBySellerQuery } from "../../redux/rtk/features/job/jobApi";
import LeadsFilter from "./Leads-filter";
import { Link } from "react-router-dom";

function NewLeads() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const limit = 20;
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const id = seller?.seller?._id;
  const { category, location } = useSelector((state) => state.leadFilter);
  const [sortCriteria, setSortCriteria] = useState("");
  const [jobNumber, setJobNumber] = useState(null);

  // Combination sort function
  const sortJobs = (jobs) => {
    return jobs
      ?.slice() // create a copy of the jobs array
      .sort((a, b) => {
        if (sortCriteria === "date") {
          // Sort by date (newest first)
          return new Date(b.createdAt) - new Date(a.createdAt);
        } else if (sortCriteria === "bid") {
          // Sort by lowest bid
          return a.placeBid - b.placeBid;
        }
        return 0; // Default fallback
      });
  };

  const { data, isLoading, isError, isSuccess, error } =
    useGetAllJobsBySellerQuery({
      page,
      limit,
      id: id,
      category: category,
      location: location,
    });
  const sortedJobs = sortJobs(data?.jobs);
  const totalItems = data?.totalJobs || 0;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const filterBy = (item) => {
    return jobNumber ? item.jobNumber === jobNumber : item;
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
    content = <p>{t("no_data_found")}</p>;
  }
  if (!isLoading && !isError && isSuccess && data?.jobs?.length > 0) {
    content = sortedJobs?.filter(filterBy)?.map((item) => {
      const {
        jobTitle,
        jobDescription,
        createdAt,
        jobCompletionDate,
        jobLocation,
        jobPostcode,
        jobFiles,
        _id,
      } = item || {};
      const date = new Date(createdAt);
      const formattedDate = date.toLocaleDateString("en-GB");
      const displayDate = formattedDate.replace(/\//g, ".");

      return (
        <Link
          to={`/search-job/${_id}`}
          key={_id}
          className="flex flex-col gap-2 border border-gray-200 rounded-sm p-5 hover:cursor-pointer custom-hover"
        >
          <h5 className="text-xl text-black font-bold">{jobTitle}</h5>
          <div className="flex flex-col gap-2 items-center md:flex-row md:gap-5">
            <div className="border-gray-300 p-3 border w-36 md:w-60 h-36">
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
    <div className="">
      <h2 className="text-black font-bold text-xl pb-3">
        {t("new_leads_invitations")}
      </h2>
      <div className="flex flex-col gap-5">
        <LeadsFilter
          setSortCriteria={setSortCriteria}
          sortCriteria={sortCriteria}
          setJobNumber={setJobNumber}
        />
        <div className="flex flex-col gap-3">{content}</div>
        <div className="flex gap-2 flex-wrap">
          {totalItems?.length > 20 && (
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
  );
}

export default NewLeads;
