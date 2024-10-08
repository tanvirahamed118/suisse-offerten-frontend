import { useGetAllJobQuery } from "../redux/rtk/features/job/jobApi";
import JobRecentlyLoading from "./loading/JobRecentlyLoading";
function RecentlyJobs() {
  const { data, isLoading, isError, error, isSuccess } = useGetAllJobQuery({
    page: 1,
    limit: 20,
    category: "",
    location: "",
  });

  //   decide what to render
  let content;

  if (isLoading) {
    content = (
      <div className="w-full">
        <JobRecentlyLoading />
        <JobRecentlyLoading />
        <JobRecentlyLoading />
        <JobRecentlyLoading />
        <JobRecentlyLoading />
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
      const { _id, jobTitle, jobLocation, jobPostcode } = item || {};
      return (
        <li key={_id} className="py-5">
          <a
            className="flex flex-col gap-2 hover-tab"
            href={`/search-job/${_id}`}
          >
            <p className="text-[#3258a7] text-base font-normal ">{jobTitle}</p>
            <span className="flex gap-2 items-center">
              <i className="fa-solid fa-location-dot text-[#999999]"></i>
              <h5 className="text-base text-gray-400">
                {jobPostcode + " " + jobLocation}
              </h5>
            </span>
          </a>
        </li>
      );
    });
  }
  return (
    <div className="border border-gray-300 shadow-sm w-full p-8">
      <h2 className="text-2xl text-black font-bold">Recently posted jobs</h2>
      <div>
        <ul className="recently">{content}</ul>
      </div>
    </div>
  );
}

export default RecentlyJobs;
