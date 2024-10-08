import PropTypes from "prop-types";

function DateBox({ setDateValue }) {
  return (
    <div>
      <input
        type="date"
        name="jobTitle"
        required
        className={
          " py-2 px-5 border border-[#19BE10] rounded-md w-full text-base text-black font-normal outline-[#19BE10] focus:outline outline-4"
        }
        onChange={(e) => setDateValue(e.target.value)}
      />
    </div>
  );
}
DateBox.propTypes = {
  setDateValue: PropTypes.any,
};
export default DateBox;
