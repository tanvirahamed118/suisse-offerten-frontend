import PropTypes from "prop-types";

function OtherTextareaStep({ handleChange, jobDescription }) {
  return (
    <div className="flex flex-col gap-3">
      <textarea
        name="jobDescription"
        cols="40"
        rows="10"
        placeholder=""
        onChange={handleChange}
        value={jobDescription}
        className={
          jobDescription
            ? "is-other-invalid py-2 px-5 border border-[#19BE10] rounded-md w-full text-base text-black font-normal outline-[#19BE10] focus:outline outline-4"
            : "is-other-valid py-2 px-5 border border-red-500 rounded-md w-full text-base text-black font-normal outline-[#ff473d34] focus:outline outline-4"
        }
      ></textarea>
    </div>
  );
}
OtherTextareaStep.propTypes = {
  handleChange: PropTypes.any,
  jobDescription: PropTypes.any,
};
export default OtherTextareaStep;
