import { useState, useRef, useEffect } from "react";
import verify from "../../assets/verify-email.png";
import { useVerifyClientMutation } from "../../redux/rtk/features/auth/client/authApi";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function VerifyBox() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);
  const [verifyClient, { data, isSuccess, isError, error, isLoading }] =
    useVerifyClientMutation();
  const navigate = useNavigate();

  // Handle input change and move to the next box automatically
  const handleInputChange = (e, index) => {
    const value = e.target.value;
    const newCode = [...code];

    // If the input field is cleared, go to the previous field
    if (value === "") {
      newCode[index] = ""; // Clear current value
      setCode(newCode);
      if (index > 0) {
        inputsRef.current[index - 1].focus(); // Move focus to the previous field
      }
      return;
    }

    // If a valid number is entered, move to the next input field
    if (!isNaN(value) && value.length === 1) {
      newCode[index] = value;
      setCode(newCode);
      if (index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  // Handle backspace to move to the previous field if necessary
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus(); // Move focus to the previous field
    }
  };

  useEffect(() => {
    const codeString = code.join("");
    if (codeString.length === 6 && !code.includes("")) {
      const code = codeString;
      verifyClient(code);
    }
  }, [code, verifyClient]);

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message, {
        duration: 800,
      });
      setTimeout(() => {
        navigate("/client-login");
      }, 1500);
    }
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [error, isError, isSuccess, data, navigate]);

  return (
    <div className="my-10 flex justify-center w-full">
      <div className="flex flex-col gap-2 items-center justify-center w-full border border-gray-300 p-10 rounded-md">
        <img src={verify} alt="" className="w-24 h-auto" />
        <h2 className="text-2xl font-normal text-[#111111]">
          Check your email inbox.
        </h2>
        <p className="text-base font-normal text-[#111111] pt-5">
          We have sent you a code.
        </p>
        <p className="text-base font-normal text-[#111111] p-0">
          Click the link or enter the code to confirm your request.
        </p>
        <form className="flex gap-2 items-center verify-input">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              value={digit}
              maxLength="1"
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="border border-gray-300 rounded-md h-12 w-8 text-2xl text-center"
            />
          ))}
        </form>
        <div>
          {isLoading && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 animate-spin"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          )}
        </div>
        <p className="text-base font-normal text-[#111111] text-center pt-10">
          Did not receive an email? Check your spam folder or write to us at
          info@mietexpress.ch
        </p>
      </div>
      <Toaster />
    </div>
  );
}

export default VerifyBox;
