import PropTypes from "prop-types";

function ModelBox({ setModelValue, modelValue }) {
  return (
    <input
      type="text"
      name="jobTitle"
      required
      value={modelValue}
      className={
        " py-2 px-5 border border-[#19BE10] rounded-md w-full text-base text-black font-normal outline-[#19BE10] focus:outline outline-4"
      }
      onChange={(e) => setModelValue(e.target.value)}
    />
  );
}
ModelBox.propTypes = {
  setModelValue: PropTypes.any,
  modelValue: PropTypes.any,
};
export default ModelBox;
