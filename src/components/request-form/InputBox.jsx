import PropTypes from "prop-types";

function InputBox({ item, setInputValue }) {
  return (
    <div>
      <label htmlFor="">{item.label}</label>
      <input
        type="text"
        name="jobTitle"
        required
        className={
          " py-2 px-5 border border-[#19BE10] rounded-md w-full text-base text-black font-normal outline-[#19BE10] focus:outline outline-4"
        }
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
InputBox.propTypes = {
  item: PropTypes.any,
  setInputValue: PropTypes.any,
};
export default InputBox;
