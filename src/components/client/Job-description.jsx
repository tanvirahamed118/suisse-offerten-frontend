import PropTypes from "prop-types";
import JobQuestions from "../JobQuestions";
import moment from "moment";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function JobDescription({ data }) {
  const { t } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const {
    jobTitle,
    jobDescription,
    jobCategoryCode,
    jobLocation,
    jobPostcode,
    jobSiteVisitPossible,
    jobCompletionDate,
    createdAt,
  } = data || {};

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedImage(null);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-[#F5F8FA] p-5 border border-gray-200 flex flex-col gap-2 rounded-md">
        <h2 className="text-black text-base font-normal">
          {t("images_files")}
        </h2>
        <div className="flex flex-wrap gap-5 py-5">
          {data &&
            data?.jobFiles?.map((item, index) => (
              <img
                key={index}
                src={item}
                alt=""
                className="w-4/12 md:w-1/12 h-18 object-cover rounded-md hover:cursor-pointer"
                onClick={() => handleImageClick(item)}
              />
            ))}
        </div>
        {data && isPopupOpen && selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative w-10/12 xl:w-auto">
              <img
                src={selectedImage}
                alt="Full Size"
                className="w-full xl:w-[1000px] h-full lg:h-[600px] object-cover rounded-md"
              />
              <button
                onClick={handleClosePopup}
                className="absolute top-[-10px] right-[-10px] p-1 w-10 h-10 text-white bg-black rounded-full"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-5 bg-[#F5F8FA] p-5 border border-gray-200 rounded-md overflow-x-auto">
        <table className="w-[900px]">
          <tbody>
            <tr>
              <td className="w-3/12">
                <h2 className="text-black text-base font-bold p-4 align-top">
                  {t("order_title")}
                </h2>
              </td>
              <td>
                <p className="text-black text-base font-normal p-4 align-top capitalize">
                  {jobTitle}
                </p>
              </td>
            </tr>
            <tr>
              <td className="text-black text-base font-bold p-4 align-top w-3/12">
                {t("description")}
              </td>
              <td className="text-black text-base font-normal p-4 align-top">
                {jobDescription}
              </td>
            </tr>
            <tr>
              <td className="text-black text-base font-bold p-4 align-top w-3/12">
                {t("questions")}:
              </td>
              <td className="text-black text-base font-normal p-4 align-top">
                <JobQuestions data={data} />
              </td>
            </tr>
            <tr>
              <td className="text-black text-base font-bold p-2 align-top w-3/12">
                {t("category")}
              </td>
              <td className="text-black text-base font-normal p-2 align-top">
                {jobCategoryCode}
              </td>
            </tr>
            <tr>
              <td className="text-black text-base font-bold p-2 align-top w-3/12">
                {t("place_of_execution")}*
              </td>
              <td className="text-black text-base font-normal p-2 align-top">
                {t("postal_code")}: ({jobPostcode}) - {t("location")}: (
                {jobLocation})
              </td>
            </tr>
            <tr>
              <td className="text-black text-base font-bold p-2 align-top w-3/12">
                {t("possible_to_visit")}?*
              </td>
              <td className="text-black text-base font-normal p-2 align-top">
                {jobSiteVisitPossible}
              </td>
            </tr>
            <tr>
              <td className="text-black text-base font-bold p-2 align-top w-3/12">
                {t("duration_of_tender")}
              </td>
              <td className="text-black text-base font-normal p-2 align-top">
                {moment(createdAt).fromNow()}
              </td>
            </tr>
            <tr>
              <td className="text-black text-base font-bold p-2 align-top w-3/12">
                {t("desired_start_of_work")}
              </td>
              <td className="text-black text-base font-normal p-2 align-top">
                {jobCompletionDate}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
JobDescription.propTypes = {
  data: PropTypes.any,
};
export default JobDescription;
