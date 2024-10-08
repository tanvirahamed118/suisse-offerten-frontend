import PropTypes from "prop-types";

function PostalCode({
  jobLocation,
  jobPostcode,
  handleChange,
  postalCodeValid,
}) {
  return (
    <div className="flex gap-5 items-center">
      <div className="flex flex-col gap-3">
        <label htmlFor="">Postal code</label>
        <input
          type="number"
          name="jobPostcode"
          value={jobPostcode}
          onChange={handleChange}
          placeholder="e.g. 8000"
          className={
            postalCodeValid
              ? "is-post-invalid py-2 px-5 border border-[#19BE10] rounded-md w-full text-base text-black font-normal outline-none"
              : "is-post-valid py-2 px-5 border border-red-500 rounded-md w-full text-base text-black font-normal outline-none"
          }
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="">Location</label>
        <input
          type="number"
          name="jobLocation"
          value={jobLocation || ""}
          onChange={handleChange}
          placeholder={jobLocation}
          disabled
          className={
            postalCodeValid
              ? "is-post-invalid py-2 px-5 border border-[#19BE10] rounded-md w-full text-base text-black font-normal outline-none"
              : "is-post-valid py-2 px-5 border border-red-500 rounded-md w-full text-base text-black font-normal outline-none"
          }
        />
      </div>
    </div>
  );
}
PostalCode.propTypes = {
  jobLocation: PropTypes.any,
  jobPostcode: PropTypes.any,
  handleChange: PropTypes.any,
  postalCodeValid: PropTypes.any,
};
export default PostalCode;
