import PropTypes from "prop-types";

function DoubleBox({ item, setDoubleValue, doubleValue }) {
  const { width, height } = doubleValue || {};

  const handleChange = (e) => {
    setDoubleValue({
      ...doubleValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex gap-5 items-center py-2 w-full">
      <span className="w-full">
        <label htmlFor="">{item.width}</label>
        <input
          type="number"
          name="width"
          required
          className={
            " py-2 px-5 border border-[#19BE10] rounded-md w-full text-base text-black font-normal outline-[#19BE10] focus:outline outline-4"
          }
          onChange={handleChange}
          value={width}
        />
      </span>
      <span className="w-full">
        <label htmlFor="" className="mb-2">
          {item.height}
        </label>
        <input
          type="number"
          name="height"
          required
          className={
            " py-2 px-5 border border-[#19BE10] rounded-md w-full text-base text-black font-normal outline-[#19BE10] focus:outline outline-4"
          }
          onChange={handleChange}
          value={height}
        />
      </span>
    </div>
  );
}
DoubleBox.propTypes = {
  item: PropTypes.any,
  doubleValue: PropTypes.any,
  setDoubleValue: PropTypes.any,
};
export default DoubleBox;
