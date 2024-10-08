import { useCallback } from "react";

const useQuestionChange = (setFormData, currentQuestion, handleNext) => {
  const handleQuestionChange = useCallback(
    (key, value, id) => {
      const keyname = key?.split(" ")?.join("_");

      setFormData((prevFormData) => {
        const updatedFormData = { ...prevFormData };

        if (key === "files") {
          // Handle file upload
          updatedFormData.jobFiles = [...prevFormData.jobFiles, ...value];
        } else if (currentQuestion.label === "main_services_categories") {
          const updatevalue = value
            .split(/\s*[,.&\s]+\s*/g)
            .filter(Boolean)
            .join("_");
          updatedFormData.jobCategoryCode = updatevalue;
          if (value === "Moving, moving house") {
            const updatevalue = value
              .split(/\s*[,.&\s]+\s*/g)
              .filter(Boolean)
              .join("_");
            updatedFormData.jobSubCategories = [
              ...prevFormData.jobSubCategories,
              updatevalue,
            ];
          }
        } else if (currentQuestion.type === "orderbox") {
          updatedFormData.jobSiteVisitPossible = value;
        } else if (currentQuestion.type === "selectbox") {
          updatedFormData.jobCompletionDate = value;
        } else if (currentQuestion.type === "radio") {
          // Handle radio type question
          const updatevalue = value
            .split(/\s*[,.&\s]+\s*/g)
            .filter(Boolean)
            .join("_");
          updatedFormData.jobSubCategories = [
            ...prevFormData.jobSubCategories,
            updatevalue,
          ];
        } else {
          updatedFormData.jobQuestions = {
            ...prevFormData.jobQuestions,
            [keyname]: value,
          };
        }

        return updatedFormData;
      });

      handleNext(id);
    },
    [setFormData, currentQuestion, handleNext]
  );

  return handleQuestionChange;
};

export default useQuestionChange;
