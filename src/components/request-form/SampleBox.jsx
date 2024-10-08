import PropTypes from "prop-types";

function SampleBox({ currentQuestion, setSampleValue, sampleValue }) {
  return (
    <div className="flex flex-col gap-2 py-2">
      <input
        type="text"
        name="jobTitle"
        required
        value={sampleValue}
        className={
          " py-2 px-5 border border-[#19BE10] rounded-md w-full text-base text-black font-normal outline-[#19BE10] focus:outline outline-4"
        }
        onChange={(e) => setSampleValue(e.target.value)}
      />
      <img
        src={currentQuestion.img}
        alt=""
        className="w-full h-52 border border-gray-400 p-2 rounded-md"
      />
    </div>
  );
}
SampleBox.propTypes = {
  setSampleValue: PropTypes.any,
  currentQuestion: PropTypes.any,
  sampleValue: PropTypes.any,
};
export default SampleBox;
