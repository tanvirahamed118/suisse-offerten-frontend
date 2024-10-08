import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useSendOTPClientMutation } from "../../redux/rtk/features/auth/client/authApi";

function ClientReset() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [sendOTPClient, { data, isLoading, isError, isSuccess, error }] =
    useSendOTPClientMutation();

  const [client, setClient] = useState({
    email: "",
  });
  const { email } = client || {};
  const handleChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendOTPClient(client);
  };
  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(data?.message);
      setClient({
        email: "",
      });
      setTimeout(() => {
        navigate("/client-check-otp");
      }, 2000);
    }
  }, [isError, isSuccess, data, error, navigate]);
  return (
    <section>
      <div className="container">
        <div className="border p-6 border-gray-200 w-11/12 md:w-[400px] h-auto m-auto my-10 flex flex-col gap-5">
          <h2 className="text-black text-xl font-bold">{t("reset_account")}</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label htmlFor="" className="text-base text-black font-normal">
              {t("enter_email")}
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              className="border border-gray-200 px-2 py-3 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 w-full md:px-4"
            />
            <button
              type="submit"
              className="bg-[#ff730096] text-white font-normal rounded-md w-full hover:bg-[#F79359] text-md py-3 px-5 flex gap-2 justify-center"
            >
              {isLoading ? (
                <>
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
                  <p>{t("loading")}</p>
                </>
              ) : (
                t("reset")
              )}
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  );
}

export default ClientReset;
