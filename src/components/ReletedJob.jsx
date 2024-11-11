import PropTypes from "prop-types";
import { useGetAllJobQuery } from "../redux/rtk/features/job/jobApi";
import JobCategoryLoading from "./loading/JobCategoryLoading";
import { useTranslation } from "react-i18next";
import Search from "../assets/images/search/cleaning_lady-ecbee0dc07f0ecb23aef.svg";

function ReletedJob({ category, id }) {
  const { t } = useTranslation();
  const { data, isLoading, isError, error, isSuccess } = useGetAllJobQuery({
    page: 1,
    limit: 20,
    category: category,
    location: "",
  });

  // decide what to show for jobs
  let content;

  if (isLoading) {
    content = (
      <div className="w-full">
        <JobCategoryLoading />
        <JobCategoryLoading />
        <JobCategoryLoading />
        <JobCategoryLoading />
        <JobCategoryLoading />
        <JobCategoryLoading />
      </div>
    );
  }
  if (isError) {
    content = <p>{error}</p>;
  }
  if (
    !isLoading &&
    !isError &&
    data?.jobs?.filter((item) => item._id !== id)?.length === 0
  ) {
    content = <p>{t("no_data_found")}</p>;
  }
  if (
    !isLoading &&
    !isError &&
    isSuccess &&
    data?.jobs?.filter((item) => item._id !== id)?.length > 0
  ) {
    content = data?.jobs
      ?.slice(0, 5)
      ?.filter((item) => item._id !== id)
      ?.map((item) => {
        const { jobFiles, jobTitle, jobLocation, jobPostcode, jobDescription } =
          item || {};

        return (
          <a
            key={item._id}
            href={`/search-job/${item._id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 border border-gray-200 rounded-sm p-5 hover:cursor-pointer custom-hover"
          >
            <div className="flex md:flex-row flex-col gap-2 items-center pb-5">
              <div className="w-3/12">
                <img
                  src={jobFiles?.length > 0 ? jobFiles[0] : Search}
                  alt=""
                  className="w-24 h-24 object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 items-start w-full md:w-8/12">
                <p className="text-[#3097d1] text-base font-normal">
                  {jobTitle?.slice(0, 60)}...
                </p>
                <p className="text-[#666] text-base font-normal">
                  {jobDescription.slice(0, 100)}...
                </p>
                <span className="flex gap-2 items-center">
                  <i className="fa-solid fa-location-dot text-[#999999]"></i>
                  <p className="text-[#666] text-base font-normal">
                    {jobPostcode + " " + jobLocation}
                  </p>
                </span>
              </div>
              <i className="fa-solid fa-angle-right w-1/12"></i>
            </div>
          </a>
        );
      });
  }

  return (
    <div className="border border-gray-200 p-5 rounded-md">
      <h2 className="text-2xl font-bold text-black pb-5">
        {t("similar_orders")}
      </h2>
      <div className="flex flex-col gap-3">{content}</div>
    </div>
  );
}
ReletedJob.propTypes = {
  category: PropTypes.any,
  id: PropTypes.any,
};
export default ReletedJob;
