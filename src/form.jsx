import { useState } from "react";
import questions from "./datas/request-data";

const MultiStepForm = () => {
  const [currentId, setCurrentId] = useState();
  const [answers, setAnswers] = useState({});

  const currentQuestion = questions.find((q) => q.id === currentId);

  const handleNext = (optionId) => {
    setAnswers((prev) => ({ ...prev, [currentId]: optionId }));

    const nextQuestion = questions.find((q) => q.id === optionId);

    if (nextQuestion) {
      setCurrentId(optionId);
    }
  };

  const handlePrevButton = (e) => {
    e.preventDefault();

    // Get the previous question's ID based on the current answer
    const prevQuestionId = Object.keys(answers).find(
      (key) => answers[key] === currentId
    );

    if (prevQuestionId) {
      setCurrentId(parseInt(prevQuestionId));
    }
  };

  return (
    <div>
      <h3>{currentQuestion?.label}</h3>
      {currentQuestion?.options?.map((option) => (
        <div key={option.id}>
          {currentQuestion.type === "radio" ? (
            <div className="radio-design">
              <label>
                <input
                  type="radio"
                  name={`question-${currentId}`}
                  value={option.id}
                  onChange={() => handleNext(option.id)}
                />
                {option?.label}
              </label>
            </div>
          ) : currentQuestion.type === "checkbox" ? (
            <div className="checkbox-design">
              <label>
                <input
                  type="checkbox"
                  name={`question-${currentId}`}
                  value={option.id}
                  onChange={() => handleNext(option.id)}
                />
                {option.label}
              </label>
            </div>
          ) : null}
        </div>
      ))}
      <button onClick={handlePrevButton}>Prev</button>
    </div>
  );
};

export default MultiStepForm;
