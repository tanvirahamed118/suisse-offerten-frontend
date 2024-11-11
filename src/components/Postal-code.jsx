import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function PostalCode({
  jobLocation,
  jobPostcode,
  handlePostalCodeChange,
  handleLocationChange,
  postalCodeValid,
}) {
  const { t } = useTranslation();

  return (
    <div className="flex gap-5 items-center">
      <div className="flex flex-col gap-3">
        <label htmlFor="">{t("form_post_code")}</label>
        <input
          type="number"
          name="jobPostcode"
          value={jobPostcode}
          onChange={handlePostalCodeChange}
          placeholder="E.G. 8000"
          className={
            postalCodeValid
              ? "is-post-invalid py-2 px-5 border border-[#19BE10] rounded-md w-full text-base text-black font-normal outline-none"
              : "is-post-valid py-2 px-5 border border-red-500 rounded-md w-full text-base text-black font-normal outline-none"
          }
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="">{t("location")}</label>
        <input
          type="text"
          name="jobLocation"
          value={jobLocation}
          onChange={handleLocationChange}
          placeholder={t("location")}
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
  jobLocation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  jobPostcode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handlePostalCodeChange: PropTypes.func,
  handleLocationChange: PropTypes.func,
  postalCodeValid: PropTypes.bool,
};

export default PostalCode;
