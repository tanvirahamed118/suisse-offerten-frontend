import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function StepButtons({
  handlePrev,
  handleNext,
  steps,
  loading,
  finalStep,
  formData,
  createJob,
  validateEmail,
}) {
  const { t } = useTranslation();
  const {
    jobTitle,
    jobDescription,
    jobCategoryCode,
    jobQuestions,
    jobPostcode,
    jobLocation,
    jobSiteVisitPossible,
    jobCompletionDate,
    jobFiles,
    jobEmail,
    clinetId,
    jobCity,
    password,
    username,
    jobSubCategories,
    credits,
    firstname,
    lastname,
    phone,
    jobCategoryId,
  } = formData || {};

  const client = localStorage.getItem("client");
  const clientAuth = JSON.parse(client);

  const handleSubmit = () => {
    if (
      jobTitle.length > 0 &&
      jobDescription.length > 0 &&
      jobCategoryCode.length > 0 &&
      Object.keys(jobQuestions).length > 0 &&
      jobPostcode.toString().length > 0 &&
      jobLocation.length > 0 &&
      jobSiteVisitPossible.length > 0 &&
      jobCompletionDate.length > 0
    ) {
      const formDataToSend = new FormData();
      formDataToSend.append("jobTitle", jobTitle);
      formDataToSend.append("credits", credits);
      formDataToSend.append("clinetId", clinetId);
      formDataToSend.append("jobDescription", jobDescription);
      formDataToSend.append("jobCategoryCode", jobCategoryCode);
      formDataToSend.append("jobPostcode", jobPostcode);
      formDataToSend.append("jobLocation", jobLocation);
      formDataToSend.append("jobSiteVisitPossible", jobSiteVisitPossible);
      formDataToSend.append("jobCompletionDate", jobCompletionDate);
      formDataToSend.append("jobEmail", jobEmail);
      formDataToSend.append("jobCity", jobCity);
      formDataToSend.append("username", username);
      formDataToSend.append("password", password);
      formDataToSend.append("jobSubCategories", jobSubCategories);
      formDataToSend.append("firstname", firstname);
      formDataToSend.append("lastname", lastname);
      formDataToSend.append("phone", phone);
      formDataToSend.append("jobCategoryId", jobCategoryId);
      jobFiles.forEach((file) => {
        formDataToSend.append("jobFiles", file);
      });
      formDataToSend.append("jobQuestions", JSON.stringify(jobQuestions));
      createJob(formDataToSend);
    }
  };

  return (
    <div className="flex gap-5 items-center mt-5 justify-center">
      {steps > 0 && (
        <button
          className="bg-gray-400 text-white font-bold rounded-md hover:bg-gray-500 text-md py-3 px-5"
          onClick={handlePrev}
        >
          {t("back")}
        </button>
      )}
      {finalStep && clientAuth?.clientToken ? (
        <button
          className={
            finalStep
              ? "bg-[#ff7100] text-white font-bold rounded-md hover:bg-[#F25900] text-md py-3 px-5 flex gap-2 items-center cursor-pointer"
              : "bg-[#cccccc] text-[#666666] font-bold rounded-md text-md py-3 px-5 flex gap-2 items-center cursor-not-allowed"
          }
          onClick={handleSubmit}
          type="button"
          disabled={!finalStep}
        >
          {loading ? (
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
              <p>{t("loading")}</p>
            </>
          ) : (
            t("submit")
          )}
        </button>
      ) : finalStep && !clientAuth?.clientToken ? (
        <button
          className={
            validateEmail(formData.jobEmail) &&
            username &&
            firstname &&
            lastname &&
            phone.length > 11
              ? "bg-[#FFAA00] text-[#111] font-bold rounded-md text-md py-3 px-5 flex gap-2 items-center cursor-pointer"
              : "bg-[#cccccc] text-[#111] font-bold rounded-md text-md py-3 px-5 flex gap-2 items-center cursor-not-allowed"
          }
          onClick={handleSubmit}
          type="button"
          disabled={
            validateEmail(formData.jobEmail) &&
            username &&
            firstname &&
            lastname &&
            phone.length > 11
              ? false
              : true
          }
        >
          {loading ? (
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
              <p>{t("loading")}</p>
            </>
          ) : (
            t("submit")
          )}
        </button>
      ) : (
        <button
          className="bg-[#FFAA00] text-[#111] font-bold rounded-md text-md py-3 px-5 flex gap-2 items-center"
          onClick={handleNext}
          type="button"
        >
          {t("further")}
        </button>
      )}
    </div>
  );
}
StepButtons.propTypes = {
  handlePrev: PropTypes.any,
  handleNext: PropTypes.any,
  steps: PropTypes.any,
  loading: PropTypes.any,
  finalStep: PropTypes.any,
  formData: PropTypes.any,
  createJob: PropTypes.any,
  validateEmail: PropTypes.any,
};
export default StepButtons;
