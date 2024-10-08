import PropTypes from "prop-types";

function CheckBox({ item, currentQuestion, handleQuestionChange, questions }) {
  const existItems = questions.find((e) => e.id === item.id);
  return (
    <div className="h-full flex flex-col items-center w-full hover:transform hover:translate-y-[-5px] transition-all duration-[350ms] ease-[cubic-bezier(0,0,0.2,1)] delay-[2ms]">
      <p className="text-base text-black font-normal">{currentQuestion?.des}</p>
      <label
        htmlFor={item.id}
        className="px-3 py-5 flex items-start gap-2 bg-white rounded-md shadow-[0_1px_3px_0_rgba(0,0,0,0.1),_0_1px_2px_0_rgba(0,0,0,0.06)] hover:cursor-pointer w-full"
      >
        <input
          type="checkbox"
          name={`question-${currentQuestion.id}`}
          value={item.id}
          onChange={() =>
            handleQuestionChange(
              currentQuestion?.label,
              item.label,
              existItems ? item.id : 611913870
            )
          }
          id={item.id}
          className="hidden peer"
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
          {currentQuestion.options.find((q) => q.des) ? (
            <p className="text-base text-black font-bold">{item?.label}</p>
          ) : (
            <p className="text-base text-black font-normal">{item?.label}</p>
          )}

          <p className="text-base text-black font-normal">{item?.des}</p>
        </span>
      </label>
    </div>
  );
}
CheckBox.propTypes = {
  currentQuestion: PropTypes.any,
  handleQuestionChange: PropTypes.any,
  item: PropTypes.any,
  questions: PropTypes.any,
};
export default CheckBox;
