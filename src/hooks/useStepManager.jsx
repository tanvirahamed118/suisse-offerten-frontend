import { useEffect } from "react";

const useStepManager = (steps, setSteps, currentQuestion, formData) => {
  useEffect(() => {
    if (
      currentQuestion?.type === "orderTitle" &&
      formData.jobTitle.trim().length > 0
    ) {
      setSteps(0);
    } else if (currentQuestion?.type === "radio") {
      setSteps(1);
    } else if (currentQuestion?.type === "checkbox") {
      setSteps(2);
    } else if (currentQuestion?.type === "multibox") {
      setSteps(3);
    } else if (currentQuestion?.type === "inputBox") {
      setSteps(4);
    } else if (currentQuestion?.type === "doubleInput") {
      setSteps(5);
    } else if (currentQuestion?.type === "datebox") {
      setSteps(6);
    } else if (currentQuestion?.type === "inputNumber") {
      setSteps(7);
    } else if (currentQuestion?.type === "otherBox") {
      setSteps(8);
    } else if (currentQuestion?.type === "postBox") {
      setSteps(9);
    } else if (currentQuestion?.type === "orderbox") {
      setSteps(10);
    } else if (currentQuestion?.type === "selectbox") {
      setSteps(11);
    } else if (currentQuestion?.type === "questionBox") {
      setSteps(12);
    }
  }, [currentQuestion, formData, steps, setSteps]);

  return steps;
};

export default useStepManager;
