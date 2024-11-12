import PropTypes from "prop-types";

function RadioBox({ item, currentQuestion, handleQuestionChange }) {
  return (
    <div>
      <label className="flex flex-col w-[152px] h-[152px] md:w-52 md:h-52 gap-1 sm:gap-3 bg-white rounded-full shadow-[0_1px_3px_0_rgba(0,0,0,0.1),_0_1px_2px_0_rgba(0,0,0,0.06)] p-7 items-center hover:cursor-pointer justify-center hover:transform hover:translate-y-[-5px] transition-all duration-[350ms] ease-[cubic-bezier(0,0,0.2,1)] delay-[2ms] border-2 border-transparent hover:border-[#0050B2]">
        <input
          type="radio"
          name={`question-${currentQuestion.id}`}
          id={item.id}
          className="hidden"
          value={item.id}
          onChange={() =>
            handleQuestionChange(
              currentQuestion?.label,
              item.label,
              item.id ? item.id : 611913870,
              item.credit,
              item.mainCatId
            )
          }
        />
        <img src={item?.img} alt="" className="w-8 md:w-16" />
        <h2 className="text-xs md:text-base text-black font-normal text-center">
          {item?.label}
        </h2>
      </label>
    </div>
  );
}

RadioBox.propTypes = {
  currentQuestion: PropTypes.any,
  handleQuestionChange: PropTypes.any,
  item: PropTypes.any,
};

export default RadioBox;
