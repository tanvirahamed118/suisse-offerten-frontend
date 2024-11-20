import { useEffect, useState } from "react";
import OrderTitle from "../components/Order-title";
import StepButtons from "../components/Step-buttons";
import { useTranslation } from "react-i18next";
import questions from "../datas/germen/request-data";
import OtherTextareaStep from "../components/Other-textarea-step";
import PostalCode from "./Postal-code";
import postalCode from "../datas/locations.json";
import RadioBox from "./request-form/RadioBox";
import CheckBox from "./request-form/CheckBox";
import MultiBox from "./request-form/MultiBox";
import InputBox from "./request-form/InputBox";
import DoubleBox from "./request-form/DoubleBox";
import NumberBox from "./request-form/NumberBox";
import DateBox from "./request-form/DateBox";
import ModelBox from "./request-form/ModelBox";
import SampleBox from "./request-form/SampleBox";
import ImageBox from "./request-form/ImageBox";
import EmailBox from "./request-form/EmailBox";
import OrderBox from "./request-form/OrderBox";
import usePostalCode from "../hooks/usePostalChange";
import useHandleNextButton from "../hooks/useHandleNextButton";
import useStepManager from "../hooks/useStepManager";
import useQuestionChange from "../hooks/useHandleQuestionChange";
import useCheckbox from "../hooks/useCheckBox";
import useNavigations from "../hooks/useNavigations";
import { useCreateJobMutation } from "../redux/rtk/features/job/jobApi";
import toast, { Toaster } from "react-hot-toast";
import QuestionBox from "./request-form/QuestionBox";
import { useNavigate } from "react-router-dom";

function EnterRequest() {
  const { t } = useTranslation();
  const [createJob, { data, isLoading, isError, isSuccess, error }] =
    useCreateJobMutation();
  const [hasShownSuccess, setHasShownSuccess] = useState(false);
  const [steps, setSteps] = useState(0);
  const [currentId, setCurrentId] = useState(392164430);
  const percentage = (steps / 12) * 100;
  const [history, setHistory] = useState([currentId]);
  const [isHas, setIsHas] = useState(false);
  const [hasOptions, setHasOptions] = useState(false);
  const [postalCodeValid, setIsPostalCodeValid] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const currentQuestion = questions.find((q) => q.id === currentId);
  const [finalStep, setFinalStep] = useState(false);
  const client = localStorage.getItem("client");
  const clientAuth = JSON.parse(client);
  const [numberValue, setNumberValue] = useState("");
  const [sampleValue, setSampleValue] = useState("");
  const [modelValue, setModelValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const [doubleValue, setDoubleValue] = useState({
    width: "",
    height: "",
  });

  const [formData, setFormData] = useState({
    clinetId: client ? clientAuth?.client?._id : "",
    jobTitle: "",
    jobDescription: "",
    jobCategoryCode: "",
    jobCategoryId: "",
    jobQuestions: {},
    jobPostcode: "",
    jobLocation: "",
    jobSiteVisitPossible: "",
    jobCompletionDate: "",
    jobFiles: [],
    jobEmail: "",
    jobCity: "",
    username: "",
    password: "",
    jobSubCategories: [],
    credits: 0,
    firstname: "",
    lastname: "",
    phone: "",
  });

  useStepManager(steps, setSteps, currentQuestion, formData);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const { handleNext } = useNavigations(
    questions,
    currentId,
    setCurrentId,
    history,
    setHistory
  );

  const handleQuestionChange = useQuestionChange(
    setFormData,
    currentQuestion,
    handleNext,
    questions
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePrevButton = (e) => {
    e.preventDefault();
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const prevId = newHistory[newHistory.length - 1];
      if (!currentQuestion?.type === "emailbox") {
        setSteps((prev) => prev - 1);
      }

      setHistory(newHistory);
      setCurrentId(prevId);
      const previousQuestion = questions.find((q) => q.id === prevId);
      const setLabel = previousQuestion?.label?.split(" ")?.join("_");

      if (previousQuestion) {
        setFormData((prevFormData) => {
          const updatedJobQuestions = { ...prevFormData.jobQuestions };

          if (
            Object.prototype.hasOwnProperty.call(updatedJobQuestions, setLabel)
          ) {
            delete updatedJobQuestions[setLabel];
          }
          let updatedJobSubCategories = [...prevFormData.jobSubCategories];
          if (previousQuestion.type === "radio") {
            updatedJobSubCategories.pop();
          }
          const updatedCredits =
            prevFormData.credits > 0 ? 0 : prevFormData.credits;
          const updatedJobCategoryCode =
            previousQuestion.label === "main_services_categories"
              ? ""
              : prevFormData.jobCategoryCode;
          return {
            ...prevFormData,
            jobQuestions: updatedJobQuestions,
            jobSubCategories: updatedJobSubCategories,
            credits: updatedCredits,
            jobCategoryCode: updatedJobCategoryCode,
          };
        });
      }
      if (previousQuestion.type === "datebox") {
        setDateValue("");
      }
      if (previousQuestion.type === "inputBox") {
        setInputValue("");
      }
      if (previousQuestion.type === "samplebox") {
        setSampleValue("");
      }
      if (previousQuestion.type === "modelbox") {
        setModelValue("");
      }
      if (previousQuestion.type === "inputNumber") {
        setNumberValue("");
      }
      if (previousQuestion.type === "doubleInput") {
        setDoubleValue({
          width: "",
          height: "",
        });
      }
    }
    if (
      currentQuestion?.type === "questionBox" &&
      formData.jobCompletionDate.length > 0
    ) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        jobCompletionDate: "",
      }));
    }
    if (
      currentQuestion?.type === "otherBox" &&
      formData.jobDescription.length > 0
    ) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        jobDescription: "",
      }));
    }
    if (formData.jobFiles.length > 0) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        jobFiles: [],
      }));
    }
    if (formData.jobEmail.length > 0) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        jobEmail: "",
      }));
    }

    setFinalStep(false);
  };

  const handleNextButton = useHandleNextButton({
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
    finalStep,
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
  });

  const { handleCheckboxChange } = useCheckbox(
    setSelectedOptions,
    setHasOptions
  );

  const { handleLocationChange, handlePostalCodeChange } = usePostalCode(
    postalCode,
    setFormData,
    setIsPostalCodeValid,
    formData
  );

  useEffect(() => {
    if (currentQuestion?.type === "emailbox") {
      setFinalStep(true);
    }
    if (
      currentQuestion?.type === "imagebox" &&
      clientAuth?.clientToken &&
      formData.jobFiles.length > 0
    ) {
      setFinalStep(true);
    }
  }, [setFinalStep, formData, currentQuestion, clientAuth]);

  const email = formData.jobEmail;

  useEffect(() => {
    if (isError && !hasShownSuccess) {
      toast.error(error?.data?.message);
      setHasShownSuccess(true);
    }

    if (isSuccess && !hasShownSuccess) {
      toast.success(data?.message, {
        duration: 1200,
      });
      setHasShownSuccess(true);
    }

    if (data?.message && !clientAuth) {
      localStorage.setItem("email", email);
      setTimeout(() => {
        navigate("/verify-email");
      }, 2000);
    }
    if (data?.message && clientAuth) {
      setTimeout(() => {
        navigate("/client-dashboard");
      }, 2000);
    }
  }, [
    isError,
    isSuccess,
    data,
    error,
    navigate,
    clientAuth,
    hasShownSuccess,
    email,
  ]);

  return (
    <section>
      <div className="w-[96%] xl:w-9/12 2xl:w-6/12 m-auto py-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-black text-md md:text-xl font-bold">
            {t("enter_your_request")}
          </h2>
          <p className="text-black text-sm md:text-base font-normal">
            {t("describe_the_work_to_be_done")}
          </p>
        </div>
        <div className="flex gap-10 py-5 flex-col lg:flex-row md:items-start">
          <div className="w-full">
            <div className="w-full h-4 bg-[#d4dbe0] rounded-md overflow-hidden mb-5">
              <div
                className="bg-[#FFAA00] h-full transition-all rounded-md duration-300 ease-in-out"
                style={{ width: `${percentage.toFixed(0)}%` }}
              ></div>
            </div>
            <div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="bg-[#F5F8FA] border border-gray-300 p-3 sm:p-5 box-border"
              >
                <div>
                  <div
                    className={
                      currentQuestion?.type === "radio"
                        ? "grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 py-5"
                        : currentQuestion?.type === "checkbox"
                        ? "flex flex-col gap-3 py-5"
                        : currentQuestion?.type === "multibox"
                        ? "flex flex-col gap-1 pb-5"
                        : currentQuestion?.type === "orderbox"
                        ? "flex flex-col gap-3 py-5"
                        : currentQuestion?.type === "questionBox"
                        ? "flex flex-col gap-3 py-5"
                        : "block"
                    }
                  >
                    {currentQuestion?.type !== "radio" && (
                      <h2
                        className={
                          currentQuestion?.type === "orderTitle"
                            ? "mb-2 text-lg"
                            : currentQuestion?.type === "otherBox"
                            ? "font-medium text-lg mb-2"
                            : currentQuestion?.type === "inputBox"
                            ? "font-medium text-lg mb-2"
                            : "text-lg"
                        }
                      >
                        {currentQuestion?.label}
                      </h2>
                    )}
                    {currentQuestion?.headline && (
                      <p className="py-2">{currentQuestion?.headline}</p>
                    )}

                    {currentQuestion?.options?.map((item, index) => {
                      const itemId = item.id ?? `fallback-key-${index}`;

                      return (
                        <span key={itemId}>
                          {currentQuestion?.type === "orderTitle" ? (
                            <OrderTitle
                              handleChange={handleChange}
                              jobTitle={formData?.jobTitle}
                              jobDes={currentQuestion.des}
                            />
                          ) : currentQuestion?.type === "radio" ? (
                            <RadioBox
                              item={item}
                              currentQuestion={currentQuestion}
                              handleQuestionChange={handleQuestionChange}
                            />
                          ) : currentQuestion?.type === "checkbox" ? (
                            <CheckBox
                              item={item}
                              currentQuestion={currentQuestion}
                              handleQuestionChange={handleQuestionChange}
                              questions={questions}
                            />
                          ) : currentQuestion?.type === "multibox" ? (
                            <MultiBox
                              item={item}
                              currentQuestion={currentQuestion}
                              handleCheckboxChange={handleCheckboxChange}
                              selectedOptions={selectedOptions}
                            />
                          ) : currentQuestion?.type === "otherBox" ? (
                            <OtherTextareaStep
                              handleChange={handleChange}
                              jobDescription={formData?.jobDescription}
                            />
                          ) : currentQuestion?.type === "postBox" ? (
                            <PostalCode
                              handlePostalCodeChange={handlePostalCodeChange}
                              handleLocationChange={handleLocationChange}
                              jobLocation={formData?.jobLocation}
                              jobPostcode={formData?.jobPostcode}
                              postalCodeValid={postalCodeValid}
                            />
                          ) : currentQuestion?.type === "inputBox" ? (
                            <InputBox
                              item={item}
                              setInputValue={setInputValue}
                            />
                          ) : currentQuestion?.type === "doubleInput" ? (
                            <DoubleBox
                              item={item}
                              setDoubleValue={setDoubleValue}
                              doubleValue={doubleValue}
                            />
                          ) : currentQuestion?.type === "inputNumber" ? (
                            <NumberBox
                              item={item}
                              setNumberValue={setNumberValue}
                            />
                          ) : currentQuestion?.type === "datebox" ? (
                            <DateBox
                              currentQuestion={currentQuestion}
                              handleQuestionChange={handleQuestionChange}
                              setDateValue={setDateValue}
                            />
                          ) : currentQuestion?.type === "modelbox" ? (
                            <ModelBox
                              setModelValue={setModelValue}
                              modelValue={modelValue}
                            />
                          ) : currentQuestion?.type === "samplebox" ? (
                            <SampleBox
                              setSampleValue={setSampleValue}
                              currentQuestion={currentQuestion}
                              sampleValue={sampleValue}
                            />
                          ) : currentQuestion?.type === "imagebox" ? (
                            <ImageBox setFormData={setFormData} />
                          ) : currentQuestion?.type === "emailbox" ? (
                            <EmailBox
                              item={item}
                              handleChange={handleChange}
                              jobEmail={formData?.jobEmail}
                              username={formData?.username}
                              firstname={formData?.firstname}
                              lastname={formData?.lastname}
                              phone={formData?.phone}
                              validateEmail={validateEmail}
                              setFormData={setFormData}
                              setIsHas={setIsHas}
                              isHas={isHas}
                            />
                          ) : currentQuestion?.type === "orderbox" ? (
                            <OrderBox
                              currentQuestion={currentQuestion}
                              handleQuestionChange={handleQuestionChange}
                              item={item}
                            />
                          ) : currentQuestion?.type === "questionBox" ? (
                            <QuestionBox
                              currentQuestion={currentQuestion}
                              item={item}
                              handleNext={handleNext}
                              setFinalStep={setFinalStep}
                              formData={formData}
                            />
                          ) : null}
                        </span>
                      );
                    })}
                    {currentQuestion?.type === "selectbox" ? (
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
                        defaultValue=""
                      >
                        <option disabled value="">
                          {t("select_option")}
                        </option>
                        {currentQuestion.options.map((optionItem, index) => {
                          const itemId =
                            optionItem.id ?? `fallback-key-${index}`;

                          return (
                            <option key={itemId} value={optionItem.label}>
                              {optionItem.label}
                            </option>
                          );
                        })}
                      </select>
                    ) : null}
                  </div>
                </div>

                <StepButtons
                  handlePrev={handlePrevButton}
                  handleNext={handleNextButton}
                  steps={steps}
                  loading={isLoading}
                  finalStep={finalStep}
                  createJob={createJob}
                  formData={formData}
                  validateEmail={validateEmail}
                  setFinalStep={setFinalStep}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
}

export default EnterRequest;
