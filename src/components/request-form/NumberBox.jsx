import PropTypes from "prop-types";

function NumberBox({ item, setNumberValue }) {
  return (
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor="">{item.label}</label>
      <input
        type="number"
        name="jobTitle"
        required
        className={
          " py-2 px-5 border border-[#19BE10] rounded-md w-full text-base text-black font-normal outline-[#19BE10] focus:outline outline-4"
        }
        onChange={(e) => setNumberValue(e.target.value)}
      />
    </div>
  );
}
NumberBox.propTypes = {
  item: PropTypes.any,
  setNumberValue: PropTypes.any,
};
export default NumberBox;
