import PropTypes from "prop-types";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function EmailBox({ item, handleChange, jobEmail, validateEmail, username }) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-black text-base font-normal">
          {t("prefered_username")}
        </label>
        <span>
          <input
            type="text"
            className={
              username?.length > 0
                ? "is-email-invalid py-2 px-5 border border-[#19BE10] rounded-md w-full text-base text-black font-normal outline-none"
                : "is-email-valid py-2 px-5 border border-red-500 rounded-md w-full text-base text-black font-normal outline-none"
            }
            onChange={handleChange}
            name="username"
            required
          />
          <p className="text-gray-500 text-sm font-normal pt-1">
            {t("only_visible_select")}
          </p>
        </span>
      </div>
      <div>
        <label htmlFor="" className="text-black text-base font-normal">
          {t("password")}
        </label>
        <span className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handleChange}
            className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
            required
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
      <div className="flex flex-col gap-2">
        <p>{item.label}</p>
        <input
          type="email"
          name="jobEmail"
          value={jobEmail}
          required
          className={
            validateEmail(jobEmail)
              ? "is-email-invalid py-2 px-5 border border-[#19BE10] rounded-md w-full text-base text-black font-normal outline-none"
              : "is-email-valid py-2 px-5 border border-red-500 rounded-md w-full text-base text-black font-normal outline-none"
          }
          onChange={handleChange}
        />
      </div>

      <p className="text-red-500 text-xs font-normal">
        {!validateEmail(jobEmail) && "Please enter valid email"}
      </p>
      <p>{item.tag}</p>
    </div>
  );
}
EmailBox.propTypes = {
  item: PropTypes.any,
  jobEmail: PropTypes.any,
  handleChange: PropTypes.any,
  validateEmail: PropTypes.any,
  username: PropTypes.any,
};
export default EmailBox;
