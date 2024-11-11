import { useEffect, useState } from "react";
import { useUpdatePasswordMutation } from "../../redux/rtk/features/auth/seller/authApi";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";

function UpdatePassword({ id }) {
  const { t } = useTranslation();
  const [seller, setSeller] = useState({
    password: "",
  });
  const [updatePassword, { data, isLoading, isError, isSuccess, error }] =
    useUpdatePasswordMutation();
  const [confirmPass, setConfirmPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { password } = seller || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      toast.error("Password not match");
    } else if (password.length <= 7) {
      toast.error("Password should more then 8 character");
    } else {
      updatePassword({ seller, id });
    }
  };

  const handleChange = (e) => {
    setSeller({
      ...seller,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(data?.message);
      setSeller({
        password: "",
      });
      setConfirmPass("");
    }
  }, [data, isError, isSuccess, error]);

  return (
    <div className="bg-[#F5F8FA] border border-gray-200 p-5 my-5">
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-7/12 flex flex-col gap-5 "
      >
        <h2 className="text-black text-xl font-normal">
          {t("change_password")}
        </h2>

        <div className="flex flex-col gap-5">
          <div>
            <label htmlFor="" className="text-black text-base font-normal">
              {t("password")}
            </label>
            <span className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="xxxxxxxx"
                required
                className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
              />
              <i
                onClick={() => setShowPassword(!showPassword)}
                className={
                  showPassword
                    ? "fa-solid fa-eye absolute right-0 top-[-8px] rounded-tr-md rounded-br-md bg-[#D4DBE0] px-2 py-2.5 cursor-pointer"
                    : "fa-solid fa-eye-slash absolute right-0 top-[-8px] rounded-tr-md rounded-br-md bg-[#D4DBE0] px-2 py-2.5 cursor-pointer"
                }
              ></i>
            </span>
            <p className="text-gray-500 text-sm font-normal pt-1">
              {t("password_conditon")}
            </p>
          </div>
          <div>
            <label htmlFor="" className="text-black text-base font-normal">
              {t("Confirm_password")}
            </label>
            <input
              type="password"
              name="confirmPass"
              onChange={(e) => setConfirmPass(e.target.value)}
              placeholder="xxxxxxxx"
              className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
              value={confirmPass}
              required
            />
            <p className="text-gray-500 text-sm font-normal pt-1">
              {t("password_conditon")}
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#FFAA00] text-black font-bold w-full md:w-96 rounded-md text-md py-3 px-5 flex gap-2 items-center justify-center capitalize"
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
            t("change_password")
          )}
        </button>
        <Toaster />
      </form>
    </div>
  );
}

UpdatePassword.propTypes = {
  id: PropTypes.string,
};

export default UpdatePassword;
