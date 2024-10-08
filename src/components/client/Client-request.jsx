import { useTranslation } from "react-i18next";
import Pagination from "../Pagination";
import { useState } from "react";
import { useGetAllJobsByClientQuery } from "../../redux/rtk/features/job/jobApi";
import { Link } from "react-router-dom";
import moment from "moment";
import RequestJobLoading from "../loading/RequestJob-loading";
import {
  useGetAllMessageByClientQuery,
  useUpdateMessageViewMutation,
} from "../../redux/rtk/features/message/messageApi";

function ClientRequest() {
  const { t } = useTranslation();
  const [updateMessageView] = useUpdateMessageViewMutation();
  const clientAuth = localStorage.getItem("client");
  const client = JSON.parse(clientAuth);
  const id = client?.client?._id;

  const { data: messageData } = useGetAllMessageByClientQuery(id);

  const [page, setPage] = useState(1);
  const limit = 20;
  const email = client?.client?.email;
  const { data, isError, isLoading, isSuccess, error } =
    useGetAllJobsByClientQuery({ page, limit, email });
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const totalItems = data?.totalJobs || 0;

  function getTimeDifference(createdAt) {
    // Convert the createdAt string to a Moment object
    const createdDate = moment(createdAt);
    const now = moment(); // Current date and time as a Moment object

    // Calculate the duration between the two dates
    const duration = moment.duration(now.diff(createdDate));

    // Extract days and hours from the duration
    const days = Math.floor(duration.asDays());
    const hours = duration.hours();

    return `${days} days ${hours} hours`;
  }

  const handleUpdate = (jobId) => {
    const id = client?.client?._id;
    updateMessageView({ id, jobId });
  };

  // decide what to render
  let content;

  if (isLoading) {
    content = (
      <>
        <RequestJobLoading />
        <RequestJobLoading />
        <RequestJobLoading />
        <RequestJobLoading />
        <RequestJobLoading />
      </>
    );
  }
  if (isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && data?.jobs?.length === 0) {
    content = (
      <p className="text-black font-xl font-medium py-3 bg-white">
        {t("not_create_job")},{" "}
        <Link to="/enter-request" className="text-blue-400 hover:underline">
          {t("create_new_job")}
        </Link>
      </p>
    );
  }
  if (!isLoading && !isError && isSuccess && data?.jobs?.length > 0) {
    content = data?.jobs?.map((item) => {
      const { jobTitle, createdAt, placeBid, status, _id, offerRequest } =
        item || {};
      const filterData = messageData?.filter(
        (item) => item.jobId === _id && item.view === "unseen"
      );
      return (
        <tr key={_id} className="w-full">
          <td className="p-3 align-top w-6/12">
            <Link
              to={`/proposal/${_id}`}
              className="text-[#3097d1] text-base font-normal hover:underline"
            >
              {jobTitle}
            </Link>
          </td>
          <td className="p-3 align-top w-3/12">
            <span className="text-black text-base font-normal">
              <i className="fa fa-clock"></i> {status}
            </span>
            <p className="text-red-500">
              ({t("job_post_in")} {getTimeDifference(createdAt)} {t("ago")})
            </p>
          </td>
          <td className="p-3 align-top flex flex-col gap-2 w-full">
            <li className="w-full flex">
              <Link
                to={`/proposal/${_id}`}
                onClick={() => handleUpdate(_id)}
                className="text-black bg-white py-2 rounded-md text-base font-medium w-full text-center border border-transparent hover:border hover:border-gray-500"
              >
                {t("view_order")}
              </Link>
            </li>
            <p
              className={
                filterData?.length > 0
                  ? "text-base font-bold text-black"
                  : "text-base font-normal text-black"
              }
            >
              {t("interested_offerers")} {placeBid ? placeBid : 0}
            </p>
            <p
              className={
                offerRequest > 0
                  ? "text-base font-bold text-black"
                  : "text-base font-normal text-black"
              }
            >
              {t("offers_requested")} {offerRequest ? offerRequest : 0}
            </p>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="w-full">
      <h2 className="text-black text-xl font-bold pb-5 border-b-2 border-gray-300">
        {t("requests")}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-[900px] mb-10">
          <thead className="">
            <tr className="">
              <th className="p-3 text-left text-base text-black font-bold">
                {t("order_title")}
              </th>
              <th className="p-3 text-left text-base text-black font-bold">
                {t("status")}
              </th>
              <th className="p-3 text-left text-base text-black font-bold">
                {t("activity")}
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#ECECEC] w-full border-t-2 border-gray-400">
            {content}
          </tbody>
        </table>
      </div>
      {totalItems > 20 && (
        <Pagination
          handlePageChange={handlePageChange}
          page={page}
          totalItems={totalItems}
          itemsPerPage={limit}
        />
      )}
    </div>
  );
}

export default ClientRequest;