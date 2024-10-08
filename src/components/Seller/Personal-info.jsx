import { useTranslation } from "react-i18next";
import {
  useGetOneSellerQuery,
  useUpdateSellerMutation,
} from "../../redux/rtk/features/auth/seller/authApi";
import { useEffect, useState } from "react";
import SWIS from "../../assets/images/register/swis.png";
import AUST from "../../assets/images/register/austria.png";
import GER from "../../assets/images/register/germany.png";
import FRA from "../../assets/images/register/france.png";
import toast, { Toaster } from "react-hot-toast";

function PersonalInfo() {
  const { t } = useTranslation();
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const id = seller?.seller?._id;
  const { data } = useGetOneSellerQuery(id);
  const [toastShown, setToastShown] = useState(false);
  const [
    updateSeller,
    { data: updateData, isLoading, isError, isSuccess, error },
  ] = useUpdateSellerMutation();
  const [countryCode, setCountryCode] = useState("");
  const [placeholder, setPlaceholder] = useState("+41 123 45 64");
  const [isShow, setIsShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [tel, setTel] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [formData, setFormData] = useState({
    salutation: "",
    firstName: "",
    lastName: "",
    director: "",
    dirfirstname: "",
    dirlastname: "",
    companyName: "",
    leagalForm: "",
    foundingYear: 0,
    website: "",
    UIDNumber: "",
    iban: "",
    streetNo: "",
    postalCode: 0,
    location: "",
    phone: "",
    secondPhone: "",
    password: "",
    newsletter: "",
    email: "",
    username: "",
  });
  const {
    salutation,
    firstName,
    lastName,
    director,
    dirfirstname,
    dirlastname,
    companyName,
    leagalForm,
    foundingYear,
    website,
    UIDNumber,
    iban,
    streetNo,
    postalCode,
    location,
    secondPhone,
    newsletter,
    email,
    username,
    password,
  } = formData || {};
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
  };
  useEffect(() => {
    setFormData((prevClient) => ({
      ...prevClient,
      phone: countryCode + tel,
    }));
  }, [countryCode, tel]);
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    setFormData((prevClient) => ({
      ...prevClient,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox input correctly
    }));
  };

  useEffect(() => {
    if (data) {
      setFormData((prevClient) => ({
        ...prevClient,
        ...data,
      }));
    }
    if (isError) {
      toast.error(error?.data?.message);
      setToastShown(false);
    }
    if (isSuccess && !toastShown) {
      toast.success(updateData?.message);
      setToastShown(true);
    }
  }, [data, updateData, isError, isSuccess, error, toastShown]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      toast.error("Password not match!");
    } else if (password.length >= 6) {
      updateSeller({ formData, id });
      setTel("");
    } else {
      toast.error("Please use more then 6 character");
    }
  };

  return (
    <div className="">
      <div className="bg-[#F5F8FA] p-5 border border-gray-200 w-full">
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-7/12 flex flex-col gap-5"
        >
          <h2 className="text-black text-base font-normal">
            {t("contact_person")}
          </h2>
          <div className="border-b-2 border-gray-300 pb-10 flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="salutation"
                className="text-black text-base font-normal"
              >
                {t("salutation")}:
              </label>
              <span className="flex gap-2">
                <input
                  type="radio"
                  name="salutation"
                  id="Mister"
                  value="Mister"
                  onChange={handleChange}
                  checked={salutation === "Mister"}
                  required
                />
                <label
                  htmlFor="Mister"
                  className="text-black text-base font-normal"
                >
                  {t("mister")}
                </label>
              </span>
              <span className="flex gap-2">
                <input
                  type="radio"
                  name="salutation"
                  id="Woman"
                  value="Woman"
                  onChange={handleChange}
                  checked={salutation === "Woman"}
                  required
                />
                <label
                  htmlFor="Woman"
                  className="text-black text-base font-normal"
                >
                  {t("woman")}
                </label>
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-black text-base font-normal">
                {t("first_name")}:
              </label>
              <input
                type="text"
                className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                value={firstName}
                onChange={handleChange}
                name="firstName"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-black text-base font-normal">
                {t("last_name")}:
              </label>
              <input
                type="text"
                className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                value={lastName}
                onChange={handleChange}
                name="lastName"
                required
              />
            </div>
          </div>
          <div className="border-b-2 border-gray-300 pb-10 flex flex-col gap-5">
            <h2 className="text-black text-base font-normal">
              {t("managing_director")}
            </h2>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="salutation"
                className="text-black text-base font-normal"
              >
                {t("salutation")}:
              </label>
              <span className="flex gap-2">
                <input
                  type="radio"
                  name="director"
                  id="dirMister"
                  value="dirMister"
                  onChange={handleChange}
                  checked={director === "dirMister"}
                  required
                />
                <label
                  htmlFor="dirMister"
                  className="text-black text-base font-normal"
                >
                  {t("mister")}
                </label>
              </span>
              <span className="flex gap-2">
                <input
                  type="radio"
                  name="director"
                  id="dirWoman"
                  value="dirWoman"
                  onChange={handleChange}
                  checked={director === "dirWoman"}
                  required
                />
                <label
                  htmlFor="dirWoman"
                  className="text-black text-base font-normal"
                >
                  {t("woman")}
                </label>
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-black text-base font-normal">
                {t("first_name")}:
              </label>
              <input
                type="text"
                className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                value={dirfirstname}
                onChange={handleChange}
                name="dirfirstname"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-black text-base font-normal">
                {t("last_name")}:
              </label>
              <input
                type="text"
                className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                value={dirlastname}
                onChange={handleChange}
                name="dirlastname"
                required
              />
            </div>
          </div>

          <div className="border-b-2 border-gray-300 pb-10">
            <div className="flex flex-col gap-4">
              <label htmlFor="" className="text-black text-base font-normal">
                {t("company_info")}:
              </label>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-black text-base font-normal">
                  {t("company_name")}:
                </label>
                <input
                  name="companyName"
                  value={companyName}
                  onChange={handleChange}
                  type="text"
                  required
                  className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-black text-base font-normal">
                  {t("legal_form")}:
                </label>
                <input
                  name="leagalForm"
                  value={leagalForm}
                  onChange={handleChange}
                  required
                  type="text"
                  className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-black text-base font-normal">
                  {t("founding_year") + " "}
                  <span className="text-gray-400">
                    ({t("founding_optional")})
                  </span>
                  :
                </label>
                <input
                  name="foundingYear"
                  value={foundingYear}
                  onChange={handleChange}
                  type="text"
                  className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-black text-base font-normal">
                  {t("website") + " "}
                  <span className="text-gray-400">
                    ({t("founding_optional")})
                  </span>
                  :
                </label>
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={handleChange}
                  className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-black text-base font-normal">
                  {t("UID_number")}
                </label>
                <input
                  name="UIDNumber"
                  value={UIDNumber}
                  onChange={handleChange}
                  type="text"
                  disabled
                  className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-black text-base font-normal">
                  {t("iban") + " "}
                  <span className="text-gray-400">
                    ({t("founding_optional")})
                  </span>
                  :
                </label>
                <input
                  name="iban"
                  value={iban}
                  onChange={handleChange}
                  type="text"
                  className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                />
              </div>
            </div>
          </div>

          <div className="pb-10">
            <div>
              <h2 className="text-black text-xl font-normal pb-5">
                {t("seller_dash_address")}
              </h2>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-black text-base font-normal">
                {t("street_No")}
              </label>
              <input
                name="streetNo"
                value={streetNo}
                onChange={handleChange}
                type="text"
                required
                className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
              />
            </div>
            <div className="flex gap-10 pt-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-black text-base font-normal">
                  {t("postal_code")}
                </label>
                <input
                  name="postalCode"
                  value={postalCode}
                  onChange={handleChange}
                  type="text"
                  required
                  className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-black text-base font-normal">
                  {t("seller_location")}
                </label>
                <input
                  name="location"
                  value={location}
                  onChange={handleChange}
                  type="text"
                  required
                  className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-black text-xl font-normal">
              {t("contact_deltails_seller_dash")}
            </p>
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
                      ? "w-full border border-gray-200 px-2 pl-16 h-10 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 is-not-invalid"
                      : "w-full border border-gray-200 px-2 pl-16 h-10 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 is-invalid"
                  }
                  onChange={(e) => setTel(e.target.value)}
                  value={tel}
                  required
                />
                <p className="text-gray-500 text-sm font-normal pt-1">
                  {t("only_visible_select")}
                </p>
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
                {t("phone_2")}
              </label>
              <input
                type="tel"
                name="secondPhone"
                className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                value={secondPhone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="" className="text-black text-base font-normal">
                {t("email_address")}
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                onChange={handleChange}
                value={email}
                disabled
              />
              <p className="text-gray-500 text-sm font-normal pt-1">
                {t("can_not_able")}
              </p>
            </div>
            <div>
              <label htmlFor="" className="text-black text-base font-normal">
                {t("prefered_username")}:
              </label>
              <input
                type="text"
                className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                onChange={handleChange}
                value={username}
                name="username"
                disabled
              />
              <p className="text-gray-500 text-sm font-normal pt-1">
                {t("can_not_able")}
              </p>
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
                className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                value={confirmPass}
                required
              />
              <p className="text-gray-500 text-sm font-normal pt-1">
                {t("password_conditon")}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
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
                className="text-black text-base font-normal"
              >
                {t("newsletter_con")}
              </label>
            </span>
          </div>
          <button
            type="submit"
            className="bg-[#ff7100] text-white font-normal w-full md:w-96 rounded-md hover:bg-[#F25900] text-md py-3 px-5 mt-5 flex gap-2 items-center justify-center"
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
              t("area_of_activity_text_8")
            )}
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default PersonalInfo;
