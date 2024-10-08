import PropTypes from "prop-types";

function MultiBox({
  item,
  currentQuestion,
  handleCheckboxChange,
  selectedOptions,
}) {
  return (
    <div className="flex gap-2" key={item.id}>
      <input
        type="checkbox"
        id={item.label}
        checked={
          selectedOptions[currentQuestion.label.split(" ").join("_")]?.includes(
            item.label
          ) || false
        }
        onChange={() => handleCheckboxChange(currentQuestion.label, item.label)}
      />
      <label
        htmlFor={item.label}
        className="flex items-start gap-2 hover:cursor-pointer"
      >
        {item.label}
      </label>
    </div>
  );
}
MultiBox.propTypes = {
  currentQuestion: PropTypes.any,
  handleCheckboxChange: PropTypes.any,
  item: PropTypes.any,
  selectedOptions: PropTypes.any,
};
export default MultiBox;
