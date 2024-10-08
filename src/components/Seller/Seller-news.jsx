import { useTranslation } from "react-i18next";
import { useGetAllNewsQuery } from "../../redux/rtk/features/news/newsApi";
import { Link } from "react-router-dom";
import InvitationLoading from "../loading/Invitation-loading";
import Pagination from "../Pagination";
import { useState } from "react";
import moment from "moment";

function SellerNews() {
  const { t } = useTranslation();
  const limit = 20;
  const [page, setPage] = useState(1);
  const { data, isLoading, error, isSuccess, isError } = useGetAllNewsQuery({
    page,
    limit,
  });
  const totalItems = data?.totalNews || 0;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // decide what to show for jobs
  let content;

  if (isLoading) {
    content = (
      <>
        <InvitationLoading />
        <InvitationLoading />
        <InvitationLoading />
        <InvitationLoading />
        <InvitationLoading />
      </>
    );
  }
  if (isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && data?.news?.length === 0) {
    content = (
      <p className="text-black font-semibold text-xl py-5">
        {t("no_data_found")}
      </p>
    );
  }
  if (!isLoading && !isError && isSuccess && data?.news?.length > 0) {
    content = data?.news?.map((item) => {
      const { _id, sendName, news, createdAt } = item || {};
      const formattedDate = moment(createdAt).format("MMMM D, YYYY");
      return (
        <tr className="striped" key={_id}>
          <td className="py-5 px-2 align-top border-b border-black text-left w-2/12">
            <div className="flex gap-5 items-start">
              <p className="text-black hover:text-[#0050b2] text-base font-normal hover:underline w-32">
                {sendName}
              </p>
            </div>
          </td>
          <td className="py-5 px-2 align-top border-b border-black text-left w-7/12">
            <Link
              to={`/seller-dashboard/news/${_id}`}
              className="text-[#3097d1] text-base font-normal hover:underline"
            >
              {news}
            </Link>
          </td>

          <td className="py-5 px-2 align-top border-b border-black text-left">
            <div className="">
              <p className="text-black text-base font-normal">
                {formattedDate}
              </p>
            </div>
          </td>
        </tr>
      );
    });
  }
  return (
    <div className="">
      <h2 className="text-black text-xl font-medium mt-10 border-b border-gray-400 pb-2">
        {t("news_title")}
      </h2>
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="border-b border-black">
                <th className="py-5 px-2 align-middle border-b border-black text-left">
                  <h2 className="text-black text-lg font-bold">
                    {t("sender")}
                  </h2>
                </th>
                <th className="py-5 px-2 align-middle border-b border-black text-left">
                  <h2 className="text-black text-lg font-bold">
                    {t("news_title")}
                  </h2>
                </th>
                <th className="py-5 px-2 align-middle border-b border-black text-left">
                  <h2 className="text-black text-lg font-bold">
                    {t("news_date")}
                  </h2>
                </th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
      </div>

      <div className="">
        <div className="flex gap-2 flex-wrap pt-5">
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

export default SellerNews;
