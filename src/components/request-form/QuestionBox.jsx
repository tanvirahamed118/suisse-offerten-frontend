import PropTypes from "prop-types";

function QuestionBox({ currentQuestion, handleNext, item, setFinalStep }) {
  const client = localStorage.getItem("client");
  const clientAuth = JSON.parse(client);

  const handleChange = (id) => {
    if (item.label === "Yes") {
      handleNext(id);
      setFinalStep(false);
    } else if (item.label === "No" && clientAuth?.clientToken) {
      setFinalStep(true);
    } else if (item.label === "Maybe later" && clientAuth?.clientToken) {
      setFinalStep(true);
    } else if (item.label === "No" && !clientAuth?.clientToken) {
      handleNext(457325240);
    } else if (item.label === "Maybe later" && !clientAuth?.clientToken) {
      handleNext(457325240);
    }
  };

  return (
    <div className="h-full flex flex-col items-center w-full hover:transform hover:translate-y-[-5px] transition-all duration-[350ms] ease-[cubic-bezier(0,0,0.2,1)] delay-[2ms]">
      <label
        htmlFor={item.id}
        className="px-3 py-5 flex items-start gap-2 bg-white rounded-md shadow-[0_1px_3px_0_rgba(0,0,0,0.1),_0_1px_2px_0_rgba(0,0,0,0.06)] hover:cursor-pointer w-full"
      >
        <input
          type="radio"
          name={`question-${currentQuestion.id}`}
          value={item.id}
          id={item.id}
          className="hidden peer"
          onChange={() => handleChange(item.id)}
        />
        <span className="w-4 h-4 flex-shrink-0 rounded-full border border-gray-400 peer-checked:bg-[#3097d1] flex items-center justify-center mt-1">
          <svg
            className="hidden w-3 h-3 text-white peer-checked:block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
        <span>
          {item.label && currentQuestion.options.find((q) => q.des) ? (
            <p className="text-base text-black font-bold">{item?.label}</p>
          ) : (
            <p className="text-base text-black font-normal">{item?.label}</p>
          )}
        </span>
      </label>
    </div>
  );
}
QuestionBox.propTypes = {
  handleNext: PropTypes.any,
  currentQuestion: PropTypes.any,
  item: PropTypes.any,
  setFinalStep: PropTypes.any,
};
export default QuestionBox;
