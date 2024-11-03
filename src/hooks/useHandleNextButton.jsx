import { useCallback } from "react";
import { useSelector } from "react-redux";

const useHandleNextButton = ({
  questions,
  currentQuestion,
  currentId,
  formData,
  setFormData,
  handleNext,
  selectedOptions,
  hasOptions,
  postalCodeValid,
  validateEmail,
  handleQuestionChange,
  numberValue,
  sampleValue,
  modelValue,
  dateValue,
  inputValue,
  doubleValue,
  setDateValue,
  setInputValue,
  setNumberValue,
  setSampleValue,
  setModelValue,
  setDoubleValue,
}) => {
  const state = useSelector((state) => state.choseId);

  const handleNextButton = useCallback(
    (e) => {
      e.preventDefault();

      if (
        currentQuestion.type === "multibox" &&
        (selectedOptions[currentQuestion.label.split(" ").join("_")]?.length ===
          undefined ||
          selectedOptions[currentQuestion.label.split(" ").join("_")]
            ?.length === 0)
      ) {
        return;
      }
      if (
        currentQuestion.type === "selectbox" &&
        formData.jobCompletionDate === ""
      ) {
        return;
      }
      if (
        currentQuestion.type === "selectbox" &&
        formData.jobCompletionDate.length > 0
      ) {
        handleNext(currentQuestion.mainId);
      }

      if (currentQuestion?.type === "radio" && !currentQuestion.mainId) {
        return;
      }
      if (currentQuestion?.type === "checkbox" && !currentQuestion.mainId) {
        return;
      }
      if (currentQuestion?.type === "postBox" && !postalCodeValid) {
        return;
      }
      if (
        currentQuestion?.type === "otherBox" &&
        formData.jobDescription?.length === 0
      ) {
        return;
      }
      if (
        currentQuestion?.type === "orderbox" &&
        formData.jobSiteVisitPossible?.length === 0
      ) {
        return;
      }
      if (
        currentQuestion?.type === "imagebox" &&
        formData.jobFiles?.length === 0
      ) {
        return;
      }
      if (
        currentQuestion?.type === "emailbox" &&
        !validateEmail(formData.jobEmail)
      ) {
        return;
      }
      if (currentQuestion?.type === "questionBox") {
        return;
      }
      if (currentQuestion?.type === "datebox" && dateValue.length === 0) {
        return;
      }
      if (currentQuestion?.type === "inputNumber" && numberValue.length === 0) {
        return;
      }
      if (currentQuestion?.type === "modelbox" && modelValue.length === 0) {
        return;
      }
      if (currentQuestion?.type === "samplebox" && sampleValue.length === 0) {
        return;
      }
      if (currentQuestion?.type === "inputBox" && inputValue.length === 0) {
        return;
      }

      if (currentQuestion?.type === "doubleInput") {
        if (
          doubleValue?.width.length === 0 ||
          doubleValue?.height.length === 0
        ) {
          return;
        }
      }
      const nextQuestion = questions.find((q) => q.id === currentId);
      if (
        formData.jobTitle.trim().length > 0 ||
        formData.jobDescription.trim().length > 0
      ) {
        handleNext(nextQuestion.options[0].id);
      }
      if (
        currentQuestion?.type === "multibox" &&
        !currentQuestion.mainId &&
        hasOptions
      ) {
        handleNext(611913870);
      }
      if (
        currentQuestion?.type === "multibox" &&
        currentQuestion.mainId &&
        hasOptions
      ) {
        handleNext(currentQuestion.mainId);
      }

      if (currentQuestion?.type === "inputNumber" && currentQuestion.mainId) {
        handleQuestionChange(
          currentQuestion.label,
          e.target.value,
          currentQuestion.mainId
        );
        setNumberValue("");
      }
      if (currentQuestion?.type === "inputNumber" && !currentQuestion.mainId) {
        handleQuestionChange(
          currentQuestion.label,
          numberValue,
          currentQuestion.mainId
        );
        handleNext(611913870);
        setNumberValue("");
      }
      if (currentQuestion?.type === "doubleInput" && currentQuestion.mainId) {
        handleQuestionChange(
          currentQuestion.label,
          doubleValue,
          currentQuestion.mainId
        );
        setDoubleValue({
          width: "",
          height: "",
        });
      }
      if (currentQuestion?.type === "doubleInput" && !currentQuestion.mainId) {
        handleQuestionChange(
          currentQuestion.label,
          doubleValue,
          currentQuestion.mainId
        );
        setDoubleValue({
          width: "",
          height: "",
        });
        handleNext(611913870);
      }
      if (currentQuestion?.type === "datebox" && currentQuestion.mainId) {
        handleQuestionChange(
          currentQuestion.label,
          dateValue,
          currentQuestion.mainId
        );
        setDateValue("");
      }
      if (currentQuestion?.type === "datebox" && !currentQuestion.mainId) {
        handleQuestionChange(
          currentQuestion.label,
          dateValue,
          currentQuestion.mainId
        );
        handleNext(611913870);
        setDateValue("");
      }
      if (currentQuestion?.type === "inputBox" && currentQuestion.mainId) {
        handleQuestionChange(
          currentQuestion.label,
          inputValue,
          currentQuestion.mainId
        );
        setInputValue("");
      }
      if (!currentQuestion?.mainId && currentQuestion.type === "inputBox") {
        handleQuestionChange(
          currentQuestion.label,
          inputValue,
          currentQuestion.mainId
        );
        handleNext(611913870);
        setInputValue("");
      }

      if (currentQuestion?.mainId && currentQuestion.type === "samplebox") {
        handleQuestionChange(
          currentQuestion.label,
          sampleValue,
          currentQuestion.mainId
        );
        setSampleValue("");
      }
      if (!currentQuestion?.mainId && currentQuestion.type === "samplebox") {
        handleQuestionChange(
          currentQuestion.label,
          sampleValue,
          currentQuestion.mainId
        );
        setSampleValue("");
        handleNext(611913870);
      }
      if (currentQuestion?.mainId && currentQuestion.type === "modelbox") {
        handleQuestionChange(
          currentQuestion.label,
          modelValue,
          currentQuestion.mainId
        );
        setModelValue("");
      }
      if (!currentQuestion?.mainId && currentQuestion.type === "modelbox") {
        handleQuestionChange(
          currentQuestion.label,
          modelValue,
          currentQuestion.mainId
        );
        setModelValue("");
        handleNext(611913870);
      }
      if (currentQuestion?.mainId && currentQuestion.type === "postBox") {
        handleNext(currentQuestion.mainId);
      }
      if (currentQuestion?.mainId && currentQuestion.type === "imagebox") {
        handleNext(currentQuestion.mainId);
      }
      if (state.id && formData.jobTitle) {
        handleNext(state.id);
      }

      setFormData((prevFormData) => ({
        ...prevFormData,
        jobQuestions: {
          ...prevFormData.jobQuestions,
          ...selectedOptions,
        },
      }));
    },
    [
      questions,
      currentQuestion,
      currentId,
      formData,
      setFormData,
      handleNext,
      selectedOptions,
      hasOptions,
      postalCodeValid,
      validateEmail,
      handleQuestionChange,
      numberValue,
      sampleValue,
      modelValue,
      dateValue,
      doubleValue,
      inputValue,
      setDateValue,
      setInputValue,
      setNumberValue,
      setSampleValue,
      setModelValue,
      setDoubleValue,
      state,
    ]
  );

  return handleNextButton;
};

export default useHandleNextButton;
