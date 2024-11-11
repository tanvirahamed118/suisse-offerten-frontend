import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useLoginSellerMutation } from "../../redux/rtk/features/auth/seller/authApi";
import toast, { Toaster } from "react-hot-toast";

function SellerLogin() {
  const { t } = useTranslation();
  const [loginSeller, { data, isLoading, isError, isSuccess, error }] =
    useLoginSellerMutation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [seller, setSeller] = useState({
    input: "",
    password: "",
  });
  const { input, password } = seller || {};

  const handleChange = (e) => {
    setSeller({
      ...seller,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginSeller(seller);
  };
  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(data?.message);
      setSeller({
        input: "",
        password: "",
      });
      setTimeout(() => {
        navigate("/seller-dashboard");
      }, 2000);
    }
  }, [isError, isSuccess, data, error, navigate]);

  return (
    <section className="w-10/12 lg:w-[400px] xl:w-[500px]">
      <div className="w-full">
        <div className="border p-10 border-gray-400 rounded-xl bg-[#EBEBEB] h-auto m-auto my-10 flex flex-col gap-5">
          <h2 className="text-black text-xl font-bold text-center border-b-2 pb-3 border-gray-600">
            {t("login_suisse_offerten")}
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-base text-black font-bold">
                {t("email_or_username")}
              </label>
              <input
                type="text"
                name="input"
                value={input}
                onChange={handleChange}
                required
                className="border border-gray-400 px-2 py-3 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 w-full md:px-4"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-black text-base font-bold">
                {t("password")}
              </label>
              <span className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-400 px-2 py-3 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                />
                <i
                  onClick={() => setShowPassword(!showPassword)}
                  className={
                    showPassword
                      ? "fa-solid fa-eye absolute right-[1px] top-[1px] rounded-tr-md rounded-br-md bg-[#D4DBE0] px-3 py-[16px] cursor-pointer"
                      : "fa-solid fa-eye-slash absolute right-[1px] top-[1px] rounded-tr-md rounded-br-md bg-[#D4DBE0] px-3 py-[16px] cursor-pointer"
                  }
                ></i>
              </span>
              <Link
                to="/seller-reset"
                className="text-text-gray-500 text-sm font-normal pt-1 hover:underline"
              >
                {t("reset_password")}
              </Link>
            </div>
            <button
              type="submit"
              className="bg-[#FFAA01] text-black font-bold rounded-md w-full text-md py-3 px-5 flex gap-2 justify-center"
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
                t("login")
              )}
            </button>
          </form>

          <Link
            to="/company-register"
            className="text-gray-500 text-md font-normal hover:underline hover:text-[#227aad]"
          >
            {t("regiter_now_without_login")}
          </Link>
        </div>
      </div>
      <Toaster />
    </section>
  );
}

export default SellerLogin;
