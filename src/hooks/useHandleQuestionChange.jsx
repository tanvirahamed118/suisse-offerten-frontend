import { useCallback } from "react";
import { choseId } from "../redux/rtk/features/formReucer/formSlice";
import { useDispatch, useSelector } from "react-redux";

const useQuestionChange = (
  setFormData,
  currentQuestion,
  handleNext,
  questions
) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.choseId);
  const handleQuestionChange = useCallback(
    (key, value, id, credit, code) => {
      const keyname = key?.split(" ")?.join("_");

      setFormData((prevFormData) => {
        const updatedFormData = { ...prevFormData };
        if (key === "files") {
          updatedFormData.jobFiles = [...prevFormData.jobFiles, ...value];
        } else if (currentQuestion.label === "main_services_categories") {
          const updatevalue = value
            .split(/\s*[,.&\s]+\s*/g)
            .filter(Boolean)
            .join("_");
          updatedFormData.jobCategoryCode = updatevalue;
          updatedFormData.jobCategoryId = code;
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
          const updatevalue = value
            .split(/\s*[,.\s]+\s*/g)
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
        if (credit) {
          updatedFormData.credits = credit;
        }
        if (state.id) {
          const filteredData = questions
            ?.find((item) => item.label === "main_services_categories")
            ?.options.find((option) => option.id === state.id);
          if (filteredData) {
            updatedFormData.jobCategoryCode = filteredData.label || "";
            updatedFormData.jobCategoryId = filteredData.mainCatId || "";
          }
        }
        return updatedFormData;
      });

      handleNext(id);
      dispatch(choseId(null));
    },
    [setFormData, currentQuestion, handleNext, dispatch, questions, state]
  );

  return handleQuestionChange;
};

export default useQuestionChange;
