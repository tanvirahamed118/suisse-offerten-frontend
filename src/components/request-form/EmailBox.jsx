import PropTypes from "prop-types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SWIS from "../../assets/images/register/swis.png";
import AUST from "../../assets/images/register/austria.png";
import GER from "../../assets/images/register/germany.png";
import FRA from "../../assets/images/register/france.png";

function EmailBox({
  item,
  handleChange,
  jobEmail,
  validateEmail,
  username,
  setFormData,
  firstname,
  lastname,
  setIsHas,
  isHas,
}) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [placeholder, setPlaceholder] = useState("+41 123 45 64");
  const [isShow, setIsShow] = useState(false);
  const [tel, setTel] = useState("");

  const handleCountrySelect = (country) => {
    setCountryCode(country.code);
    setPlaceholder(`${country.code} 444 444 444`);
    setIsShow(false);

    // Update the formData with the new country code and current phone number
    setFormData((prevClient) => ({
      ...prevClient,
      phone: `${country.code}${tel}`, // Update formData to include the new country code
    }));
    setIsHas(false);
  };

  const handleCodeChange = (e) => {
    const phoneNumber = e.target.value;
    if (!countryCode) {
      setIsHas(true);
      return;
    } else {
      setIsHas(false);
    }
    setTel(phoneNumber);
    setFormData((prevClient) => ({
      ...prevClient,
      phone: `${countryCode}${phoneNumber}`,
    }));
  };
  const countries = [
    { name: "Austria", code: "+43", flag: AUST },
    { name: "Germany", code: "+49", flag: GER },
    { name: "France", code: "+33", flag: FRA },
    { name: "Switzerland", code: "+41", flag: SWIS },
  ];

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
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-black text-base font-normal">
          {t("first_name")}
        </label>
        <span>
          <input
            type="text"
            className={
              firstname?.length > 0
                ? "is-email-invalid py-2 px-5 border border-[#19BE10] rounded-md w-full text-base text-black font-normal outline-none"
                : "is-email-valid py-2 px-5 border border-red-500 rounded-md w-full text-base text-black font-normal outline-none"
            }
            onChange={handleChange}
            name="firstname"
            required
            value={firstname}
          />
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-black text-base font-normal">
          {t("last_name")}
        </label>
        <span>
          <input
            type="text"
            className={
              lastname?.length > 0
                ? "is-email-invalid py-2 px-5 border border-[#19BE10] rounded-md w-full text-base text-black font-normal outline-none"
                : "is-email-valid py-2 px-5 border border-red-500 rounded-md w-full text-base text-black font-normal outline-none"
            }
            onChange={handleChange}
            name="lastname"
            required
            value={lastname}
          />
        </span>
      </div>
      <div className="relative flex flex-col gap-2">
        <label htmlFor="" className="text-black text-base font-normal">
          {t("telephone_number")}:
        </label>
        <span>
          <input
            type="tel"
            placeholder={placeholder}
            className={
              tel.length > 0
                ? "w-full border border-gray-200 px-2 pl-16 h-10 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 is-num-not-valid"
                : "w-full border border-gray-200 px-2 pl-16 h-10 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 is-num-valid"
            }
            onChange={handleCodeChange}
            value={tel}
            required
          />
          {isHas ? (
            <p className="text-red-500 text-sm font-normal mt-3">
              {t("code_error")}
            </p>
          ) : null}
        </span>
        <div
          className="flex items-center gap-1 bg-white w-12 py-2 px-3 justify-center absolute top-[39px] left-1 cursor-pointer border-r border-gray-300"
          onClick={() => setIsShow(!isShow)}
        >
          <img
            src={
              countryCode
                ? countries.find((country) => country.code === countryCode).flag
                : SWIS
            }
            alt=""
            className="w-5"
          />
          {isShow ? (
            <i className="fa-solid fa-caret-down text-[10px]"></i>
          ) : (
            <i className="fa-solid fa-caret-up text-[10px]"></i>
          )}
        </div>
        <div
          className={
            isShow
              ? "absolute top-[70px] bg-white w-full rounded-lg z-10"
              : "absolute top-[70px] bg-white w-full rounded-lg hidden"
          }
        >
          <ul className="flex flex-col ">
            {countries.map((country) => (
              <li
                key={country.code}
                className="flex gap-2 items-center hover:bg-[#F2F2F2] py-2 px-3 cursor-pointer"
                onClick={() => handleCountrySelect(country)}
              >
                <img src={country.flag} alt={country.name} className="w-5" />
                <p className="text-base text-black font-normal">
                  {country.name}
                </p>
                <p className="text-sm text-gray-400 font-normal">
                  {country.code}
                </p>
              </li>
            ))}
          </ul>
        </div>
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
  setFormData: PropTypes.any,
  username: PropTypes.any,
  firstname: PropTypes.any,
  lastname: PropTypes.any,
  phone: PropTypes.any,
  isHas: PropTypes.any,
  setIsHas: PropTypes.any,
};
export default EmailBox;
