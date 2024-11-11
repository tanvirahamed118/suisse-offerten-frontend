import { useTranslation } from "react-i18next";
import SWIS from "../../assets/images/register/swis.png";
import AUST from "../../assets/images/register/austria.png";
import GER from "../../assets/images/register/germany.png";
import FRA from "../../assets/images/register/france.png";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRegisterClientMutation } from "../../redux/rtk/features/auth/client/authApi";
import { useNavigate } from "react-router-dom";

function ClientRegister() {
  const { t } = useTranslation();
  const [registerClient, { data, isLoading, isError, isSuccess, error }] =
    useRegisterClientMutation();
  const navigate = useNavigate();
  const [countryCode, setCountryCode] = useState("");
  const [placeholder, setPlaceholder] = useState("+41 123 45 64");
  const [isShow, setIsShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isHas, setIsHas] = useState(false);
  const [tel, setTel] = useState("");
  const [client, setClient] = useState({
    salutation: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    secondPhone: "",
    username: "",
    referance: "",
    password: "",
    agreement: false,
  });
  const {
    salutation,
    firstname,
    lastname,
    email,
    secondPhone,
    username,
    referance,
    password,
    agreement,
    phone,
  } = client || {};

  const countries = [
    { name: "Austria", code: "+43", flag: AUST },
    { name: "Germany", code: "+49", flag: GER },
    { name: "France", code: "+33", flag: FRA },
    { name: "Switzerland", code: "+41", flag: SWIS },
  ];

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

  const handleCountrySelect = (country) => {
    setCountryCode(country.code);
    setPlaceholder(`${country.code} 444 444 444`);
    setIsShow(false);
    setClient((prevClient) => ({
      ...prevClient,
      phone: `${country.code}${tel}`,
    }));
  };

  useEffect(() => {
    setClient((prevClient) => ({
      ...prevClient,
      phone: countryCode + tel,
    }));
  }, [countryCode, tel]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setClient({
      ...client,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone?.length <= 11) {
      toast.error("Phone Number not valid");
      return;
    }
    if (password.length >= 6) {
      registerClient({ client });
      setTel("");
    } else {
      toast.error("Please use more then 6 character");
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(data?.message);
      setClient({
        salutation: "",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        secondPhone: "",
        username: "",
        newsletter: false,
        referance: "",
        password: "",
        agreement: false,
      });
      setTel("");
      navigate("/verify-email");
    }
  }, [isError, isSuccess, data, error, navigate]);

  return (
    <section>
      <div className="container pb-10 ">
        <h2 className="text-2xl md:text-4xl text-center font-bold py-10">
          {t("register_as_client")}
        </h2>
        <div className="bg-[#EBEBEB] p-5 md:p-10 border border-gray-300 rounded-xl w-full xl:w-8/12 m-auto">
          <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="salutation"
                className="text-black text-base font-bold"
              >
                {t("salutation")}:
              </label>
              <div className="flex gap-5">
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
            </div>
            <div className="flex gap-10">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-black text-base font-bold">
                    {t("first_name")}:
                  </label>
                  <span>
                    <input
                      type="text"
                      className="w-full border border-gray-400 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                      value={firstname}
                      onChange={handleChange}
                      name="firstname"
                      required
                    />
                    <p className="text-gray-500 text-sm font-normal pt-1">
                      {t("only_visible_select")}
                    </p>
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-black text-base font-bold">
                    {t("last_name")}:
                  </label>
                  <span>
                    <input
                      type="text"
                      className="w-full border border-gray-400 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                      value={lastname}
                      onChange={handleChange}
                      name="lastname"
                      required
                    />
                    <p className="text-gray-500 text-sm font-normal pt-1">
                      {t("only_visible_select")}
                    </p>
                  </span>
                </div>

                <div className="relative flex flex-col gap-1">
                  <label htmlFor="" className="text-black text-base font-bold">
                    {t("telephone_number")}:
                  </label>
                  <span>
                    <span>
                      <input
                        type="tel"
                        placeholder={placeholder}
                        className={
                          tel.length > 8
                            ? "w-full border border-gray-400 px-2 pl-16 h-10 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 is-not-invalid"
                            : "w-full border border-gray-400 px-2 pl-16 h-10 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 is-invalid"
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
                      className="flex items-center gap-1 bg-white w-12 py-2 px-3 justify-center absolute top-[34px] left-1 cursor-pointer border-r border-gray-300"
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
                    <p className="text-gray-500 text-sm font-normal pt-1">
                      {t("number_condition")}
                    </p>
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-black text-base font-bold">
                    {t("phone_2")}
                  </label>
                  <span>
                    <input
                      type="tel"
                      name="secondPhone"
                      className="w-full border border-gray-400 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                      value={secondPhone}
                      onChange={handleChange}
                    />
                    <p className="text-gray-500 text-sm font-normal pt-1">
                      {t("only_visible_select")}
                    </p>
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-black text-base font-bold">
                    {t("email_address")}:
                  </label>
                  <span>
                    <input
                      type="email"
                      name="email"
                      className="w-full border border-gray-400 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                      onChange={handleChange}
                      value={email}
                      required
                    />
                    <p className="text-gray-500 text-sm font-normal pt-1">
                      {t("only_visible_select")}
                    </p>
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-black text-base font-bold">
                    {t("prefered_username")}:
                  </label>
                  <span>
                    <input
                      type="text"
                      className="w-full border border-gray-400 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                      onChange={handleChange}
                      value={username}
                      name="username"
                      required
                    />
                    <p className="text-gray-500 text-sm font-normal pt-1">
                      {t("username_condition")}
                    </p>
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-black text-base font-bold">
                    {t("password")}
                  </label>
                  <span>
                    <span className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        onChange={handleChange}
                        value={password}
                        className="w-full border border-gray-400 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
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
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-black text-base font-bold">
                    {t("aware")}
                  </label>
                  <select
                    name="referance"
                    className="w-full border border-gray-400 px-2 py-2 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
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
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="flex gap-2 items-start">
                <input
                  type="checkbox"
                  name="agreement"
                  id="termsCondition"
                  className="mt-1"
                  onChange={handleChange}
                  checked={agreement}
                />
                <label
                  htmlFor="termsCondition"
                  className="text-black text-base font-bold"
                >
                  {t("tearm_condition_1")}
                </label>
              </span>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center pt-5">
              <span className="flex gap-1 items-center">
                <i className="fa-solid fa-check text-[#FFAA00]"></i>
                <p className="text-sm font-bold text-[#111111]">
                  {t("free_100")}
                </p>
              </span>
              <span className="flex gap-1 items-center">
                <i className="fa-solid fa-check text-[#FFAA00]"></i>
                <p className="text-sm font-bold text-[#111111]">
                  {t("no_Obligation")}
                </p>
              </span>
            </div>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="bg-[#FFAA00] text-black font-bold w-auto rounded-md hover:bg-[#ffba31] text-sm md:text-base py-4 px-10 flex gap-2 justify-center"
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
                  t("register_now")
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  );
}

export default ClientRegister;
