import PropTypes from "prop-types";

function SelectBox({ handleQuestionChange, currentQuestion }) {
  return (
    <select
      onChange={(e) =>
        handleQuestionChange(
          currentQuestion?.label,
          e.target.value,
          currentQuestion.id
        )
      }
      className={
        "mt-2 py-2 px-5 rounded-md w-full text-base text-black font-normal outline-[#19BE10] focus:outline outline-1"
      }
    >
      {currentQuestion.options.map((optionItem, index) => (
        <option key={index} value={optionItem.label}>
          {optionItem.label}
        </option>
      ))}
    </select>
  );
}
SelectBox.propTypes = {
  handleQuestionChange: PropTypes.any,
  currentQuestion: PropTypes.any,
};
export default SelectBox;
