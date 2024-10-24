import { useTranslation } from "react-i18next";
import SWIS from "../../assets/images/register/swis.png";
import AUST from "../../assets/images/register/austria.png";
import GER from "../../assets/images/register/germany.png";
import FRA from "../../assets/images/register/france.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useRegisterSellerMutation } from "../../redux/rtk/features/auth/seller/authApi";

function SellerRegister() {
  const { t } = useTranslation();
  const [registerSeller, { data, isLoading, isError, isSuccess, error }] =
    useRegisterSellerMutation();
  const [isShow, setIsShow] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [placeholder, setPlaceholder] = useState("+41 123 45 64");
  const [showPassword, setShowPassword] = useState(false);
  const [isHas, setIsHas] = useState(false);
  const [tel, setTel] = useState("");
  const [seller, setSeller] = useState({
    companyName: "",
    UIDNumber: "",
    person: "",
    email: "",
    phone: "",
    furtherInfo: "",
    username: "",
    newsletter: false,
    referance: "",
    password: "",
    agreement: false,
  });

  const {
    companyName,
    UIDNumber,
    person,
    email,
    furtherInfo,
    username,
    newsletter,
    referance,
    password,
    agreement,
    phone,
  } = seller || {};
  const formatUID = (value) => {
    // Remove any non-digit characters
    let cleanedValue = value.replace(/[^\d]/g, "");

    // Insert dashes in the appropriate places (after every 3 digits)
    if (cleanedValue.length > 3) {
      cleanedValue = cleanedValue.slice(0, 3) + "-" + cleanedValue.slice(3);
    }
    if (cleanedValue.length > 7) {
      cleanedValue = cleanedValue.slice(0, 7) + "-" + cleanedValue.slice(7);
    }

    // Limit to 9 digits total (formatted as XXX-XXX-XXX)
    const formattedValue = cleanedValue.slice(0, 11);

    // Add "CHE-" as the default prefix
    return "CHE-" + formattedValue;
  };

  const countries = [
    { name: "Austria", code: "+43", flag: AUST },
    { name: "Germany", code: "+49", flag: GER },
    { name: "France", code: "+33", flag: FRA },
    { name: "Switzerland", code: "+41", flag: SWIS },
  ];
  const handleCountrySelect = (country) => {
    setCountryCode(country.code);
    setPlaceholder(`${country.code} 444 444 444`);
    setIsShow(false);
    setSeller((prevClient) => ({
      ...prevClient,
      phone: `${country.code}${tel}`, // Update formData to include the new country code
    }));
  };

  useEffect(() => {
    setSeller((prevSeller) => ({
      ...prevSeller,
      phone: countryCode + tel,
    }));
  }, [countryCode, tel]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "UIDNumber") {
      const formattedUID = formatUID(value);
      setSeller((prevSeller) => ({
        ...prevSeller,
        UIDNumber: formattedUID,
      }));
    } else {
      setSeller({
        ...seller,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone?.length <= 11) {
      toast.error("Phone Number not valid");
      return;
    }
    if (password.length >= 6) {
      registerSeller({ seller });
    } else {
      toast.error("Please use more then 6 character");
    }
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
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(data?.message);
      setSeller({
        companyName: "",
        UIDNumber: "",
        person: "",
        email: "",
        phone: "",
        furtherInfo: "",
        username: "",
        newsletter: false,
        referance: "",
        password: "",
        agreement: false,
      });
      setTel("");
    }
  }, [isError, isSuccess, data, error]);
  return (
    <section className="flex items-start lg:flex-row flex-col gap-2 lg:gap-10 container">
      <div className="w-[95%] md:w-8/12 py-10 ">
        <h2 className="text-black font-semibold text-lg md:text-2xl mb-5">
          {t("register_title")}
        </h2>
        <div className="bg-[#F5F8FA] px-3 py-5 md:px-5 border border-gray-400 w-full ">
          <form
            className="w-full lg:w-8/12 flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-black text-sm md:text-base font-normal"
              >
                {t("company_name")}:
              </label>
              <input
                type="text"
                className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-sm md:text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                value={companyName}
                onChange={handleChange}
                name="companyName"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-black text-sm md:text-base font-normal"
              >
                {t("UID_number")}
              </label>
              <span>
                <input
                  placeholder="CHE-XXX-XXX-XXX"
                  type="text"
                  className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-sm md:text-base font-normal outline-[#C3DEED] focus:outline outline-4 add-uid"
                  onChange={handleChange}
                  value={UIDNumber}
                  name="UIDNumber"
                  required
                />
                <p className="text-gray-500 text-sm font-normal pt-1">
                  {t("must_add_UID")}
                </p>
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-black text-sm md:text-base font-normal"
              >
                {t("contact_person")}:
              </label>
              <input
                type="text"
                className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-sm md:text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                placeholder="Maria Muster"
                onChange={handleChange}
                value={person}
                name="person"
                required
              />
            </div>

            <div className="relative flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-black text-sm md:text-base font-normal"
              >
                {t("telephone_number")}:
              </label>
              <span>
                <input
                  type="tel"
                  placeholder={placeholder}
                  className={
                    tel.length > 8
                      ? "w-full border border-gray-200 px-2 pl-16 h-10 rounded-lg text-black text-sm md:text-base font-normal outline-[#C3DEED] focus:outline outline-4 is-not-invalid"
                      : "w-full border border-gray-200 px-2 pl-16 h-10 rounded-lg text-black text-sm md:text-base font-normal outline-[#C3DEED] focus:outline outline-4 is-invalid"
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
                      ? countries.find(
                          (country) => country.code === countryCode
                        ).flag
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
                    ? "absolute top-[70px] bg-white w-full rounded-lg"
                    : "absolute top-[70px] bg-white w-full rounded-lg hidden"
                }
              >
                <ul className="flex flex-col">
                  {countries.map((country) => (
                    <li
                      key={country.code}
                      className="flex gap-2 items-center hover:bg-[#F2F2F2] py-2 px-3 cursor-pointer"
                      onClick={() => handleCountrySelect(country)}
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-5"
                      />
                      <p className="text-sm md:text-base text-black font-normal">
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
              <label
                htmlFor=""
                className="text-black text-sm md:text-base font-normal"
              >
                {t("email_address")}:
              </label>
              <input
                type="email"
                name="email"
                id=""
                className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-sm md:text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                onChange={handleChange}
                value={email}
                required
              />
              <p className="text-gray-500 text-sm font-normal pt-1">
                {t("only_visible_select")}
              </p>
            </div>
            <div>
              <label
                htmlFor=""
                className="text-black text-sm md:text-base font-normal"
              >
                {t("prefered_username")}:
              </label>
              <input
                type="text"
                className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-sm md:text-base font-normal outline-[#C3DEED] focus:outline outline-4 mt-2"
                onChange={handleChange}
                value={username}
                name="username"
                required
              />
              <p className="text-gray-500 text-sm font-normal pt-1">
                {t("username_condition")}
              </p>
            </div>
            <div>
              <label
                htmlFor=""
                className="text-black text-sm md:text-base font-normal"
              >
                {t("password")}
              </label>
              <span className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-sm md:text-base font-normal outline-[#C3DEED] focus:outline outline-4 mt-2"
                  onChange={handleChange}
                  value={password}
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
              <label
                htmlFor=""
                className="text-black text-sm md:text-base font-normal"
              >
                {t("further_information_title")}
              </label>
              <textarea
                name="furtherInfo"
                className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-sm md:text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                placeholder={t("further_info")}
                rows={8}
                cols={36}
                onChange={handleChange}
                value={furtherInfo}
              ></textarea>
            </div>

            <div>
              <label
                htmlFor=""
                className="text-black text-sm md:text-base font-normal"
              >
                {t("aware")}
              </label>
              <select
                name="referance"
                className="w-full border border-gray-200 px-2 py-2 rounded-lg text-black text-sm md:text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                onChange={handleChange}
                value={referance}
                required
              >
                <option value={t("about_box_default")}>
                  {t("about_box_default")}
                </option>
                <option value={t("about_box_item_1")}>
                  {t("about_box_item_1")}
                </option>
                <option value={t("about_box_item_2")}>
                  {t("about_box_item_2")}
                </option>
                <option value={t("about_box_item_3")}>
                  {t("about_box_item_3")}
                </option>
                <option value={t("about_box_item_4")}>
                  {t("about_box_item_4")}
                </option>
                <option value={t("about_box_item_5")}>
                  {t("about_box_item_5")}
                </option>
                <option value={t("about_box_item_6")}>
                  {t("about_box_item_6")}
                </option>
              </select>
            </div>
            <div className="flex flex-col gap-7">
              <span className="flex gap-2 items-start">
                <input
                  type="checkbox"
                  name="newsletter"
                  id="newsLetter"
                  className="mt-2"
                  onChange={handleChange}
                  checked={newsletter}
                />
                <label
                  htmlFor="newsLetter"
                  className="text-black text-sm md:text-base font-normal"
                >
                  {t("newsletter_con")}
                </label>
              </span>
              <span className="flex gap-2 items-start">
                <input
                  type="checkbox"
                  name="agreement"
                  id="termsCondition"
                  className="mt-2"
                  onChange={handleChange}
                  checked={agreement}
                />
                <label
                  htmlFor="termsCondition"
                  className="text-black text-sm md:text-base font-normal"
                >
                  <p className="inline">{t("tearm_condition_1") + " "}</p>
                  <Link
                    to="/condition"
                    className="inline text-[#3097d1] hover:underline"
                  >
                    {t("tearm_condition_2") + " "}
                  </Link>
                  <p className="inline">{t("tearm_condition_3") + " "}</p>
                  <Link
                    to="/data-protection"
                    className="inline text-[#3097d1] hover:underline"
                  >
                    {t("tearm_condition_4") + " "}
                  </Link>
                  <p className="inline">{t("tearm_condition_5")}</p>
                </label>
              </span>
            </div>
            <button
              type="submit"
              className="bg-[#FFAA00] text-white font-normal w-auto rounded-md hover:bg-[#ffba31] text-sm md:text-md py-3 px-5 mt-5 flex gap-2 justify-center"
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
                t("register_now_for_free")
              )}
            </button>
          </form>
        </div>
      </div>
      <div className="w-full lg:w-4/12 mt-0 mb-10 lg:mb-0 lg:mt-24 flex gap-2">
        <i className="fa-solid fa-check text-green-500  text-xl"></i>
        <p className="text-black text-lg font-normal">{t("no_obligations")}</p>
      </div>
      <Toaster />
    </section>
  );
}

export default SellerRegister;
