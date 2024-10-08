import PropTypes from "prop-types";

function OrderTitle({ jobTitle, handleChange }) {
  return (
    <div className="flex flex-col gap-2">
      <span>
        <input
          type="text"
          name="jobTitle"
          onChange={(e) => handleChange(e)}
          value={jobTitle}
          placeholder="e.g.  B. Paint a 4.5 room apartment"
          required
          className={
            jobTitle
              ? "is-req-invalid py-2 px-5 border border-[#19BE10] rounded-md w-full text-base text-black font-normal outline-[#19BE10] focus:outline outline-4"
              : "is-req-valid py-2 px-5 border border-red-500 rounded-md w-full text-base text-black font-normal outline-[#ff473d34] focus:outline outline-4"
          }
        />
      </span>
    </div>
  );
}

OrderTitle.propTypes = {
  jobTitle: PropTypes.string,
  handleChange: PropTypes.func,
};

export default OrderTitle;
