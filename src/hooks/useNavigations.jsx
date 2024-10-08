import { useCallback } from "react";

const useNavigations = (
  questions,
  currentId,
  setCurrentId,
  history,
  setHistory
) => {
  const handleNext = useCallback(
    (optionId) => {
      if (optionId === undefined) {
        return;
      }
      if (!history.includes(optionId)) {
        const nextQuestion = questions.find((q) => q.id === optionId);

        if (nextQuestion) {
          setCurrentId(optionId);
          setHistory((prevHistory) => [...prevHistory, optionId]);
        }
      }
    },
    [history, questions, setCurrentId, setHistory]
  );

  return {
    handleNext,
  };
};

export default useNavigations;
