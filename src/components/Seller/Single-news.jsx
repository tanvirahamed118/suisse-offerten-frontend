import { Link, useParams } from "react-router-dom";
import { useGetOneNewsQuery } from "../../redux/rtk/features/news/newsApi";
import SingleNewsLoading from "../loading/Single-news-loading";
import { useTranslation } from "react-i18next";

function SingleNews() {
  const params = useParams();
  const { t } = useTranslation();
  const id = params.id;
  const { data, isLoading, isError, error } = useGetOneNewsQuery(id);
  const { news, senderEmail, reference, nameOfStation } = data || {};

  // decide what to render
  let content;
  if (isError) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <SingleNewsLoading />;
  }
  if (!isLoading && !isError) {
    content = (
      <div className="p-5 bg-[#F5F8FA] border border-gray-200 rounded-md mt-5">
        <table>
          <tbody>
            <tr>
              <td className="w-3/12 pr-10">
                <h2 className="text-black text-base font-bold align-top">
                  {t("name_of_station")}
                </h2>
              </td>
              <td>
                <p className="text-black text-base font-normal align-top capitalize">
                  {nameOfStation}
                </p>
              </td>
            </tr>
            <tr>
              <td className="text-black text-base font-bold align-top w-3/12">
                {t("sender_email")}:
              </td>
              <td className="text-black text-base font-normal align-top">
                {senderEmail}
              </td>
            </tr>
            <tr>
              <td className="text-black text-base font-bold align-top w-3/12">
                {t("reference")}:
              </td>
              <td className="text-black text-base font-normal align-top">
                {reference}
              </td>
            </tr>
            <tr>
              <td className="text-black text-base font-bold  align-top w-3/12">
                {t("news")}:
              </td>
              <td className="text-black text-base font-normal align-top">
                {news}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div>
      <Link
        to={`/seller-dashboard/news/`}
        className="text-white py-1 px-5 rounded-md text-base font-normal hover:underline bg-[#0050B2]"
      >
        {t("back")}
      </Link>
      {content}
    </div>
  );
}

export default SingleNews;
