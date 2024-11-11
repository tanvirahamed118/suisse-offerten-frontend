import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";
import SWIS from "../../assets/images/register/swis.png";
import AUST from "../../assets/images/register/austria.png";
import GER from "../../assets/images/register/germany.png";
import FRA from "../../assets/images/register/france.png";
import {
  useGetOneClientByIdQuery,
  useUpdateClientMutation,
} from "../../redux/rtk/features/auth/client/authApi";
import SwepPassword from "./Swep-password";

function ClientPersonalInfo() {
  const { t } = useTranslation();
  const clientAuth = localStorage.getItem("client");
  const clientData = clientAuth ? JSON.parse(clientAuth) : null;
  const id = clientData?.client?._id;
  const { data: getData } = useGetOneClientByIdQuery(id);
  const [updateClient, { data, isLoading, isError, isSuccess, error }] =
    useUpdateClientMutation();
  const [countryCode, setCountryCode] = useState("");
  const [placeholder, setPlaceholder] = useState("+41 123 45 64");
  const [isShow, setIsShow] = useState(false);
  const [tel, setTel] = useState("");
  const [isHas, setIsHas] = useState(false);
  const [client, setClient] = useState({
    salutation: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    secondPhone: "",
    username: "",
    newsletter: false,
  });

  const {
    salutation,
    firstname,
    lastname,
    email,
    secondPhone,
    username,
    newsletter,
  } = client || {};

  const countries = useMemo(
    () => [
      { name: "Austria", code: "+43", flag: AUST },
      { name: "Germany", code: "+49", flag: GER },
      { name: "France", code: "+33", flag: FRA },
      { name: "Switzerland", code: "+41", flag: SWIS },
    ],
    []
  );

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
    const { name, type, checked, value } = e.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateClient({ client, id });
    setTel("");
  };

  useEffect(() => {
    if (getData) {
      setClient((prevClient) => ({
        ...prevClient,
        ...getData,
      }));
      const phone = getData?.phone || "";
      const initialCode = phone.slice(0, 3);
      const matchedCountry = countries.find(
        (country) => country.code === initialCode
      );
      setCountryCode(matchedCountry ? matchedCountry.code : "+41");
      setTel(phone.replace(initialCode, ""));
      setClient((prev) => ({ ...prev, phone }));
    }
  }, [getData, countries]);

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
    }
  }, [data, isError, isSuccess, error]);

  return (
    <div className="container">
      <div className="bg-[#F5F8FA] p-5 border border-gray-200 w-full">
        <form
          className="w-full lg:w-7/12 flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
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
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-black text-base font-normal">
              {t("first_name")}:
            </label>
            <span>
              <input
                type="text"
                className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                value={firstname || ""}
                onChange={handleChange}
                name="firstname"
                required
              />
              <p className="text-gray-500 text-sm font-normal pt-1">
                {t("only_visible_select")}
              </p>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-black text-base font-normal">
              {t("last_name")}:
            </label>
            <span>
              <input
                type="text"
                className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                value={lastname || ""}
                onChange={handleChange}
                name="lastname"
                required
              />
              <p className="text-gray-500 text-sm font-normal pt-1">
                {t("only_visible_select")}
              </p>
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
                  tel.length > 8
                    ? "w-full border border-gray-200 px-2 pl-16 h-10 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 client-not-valid"
                    : "w-full border border-gray-200 px-2 pl-16 h-10 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 client-valid"
                }
                onChange={handleCodeChange}
                value={tel}
                required
              />
              <p className="text-gray-500 text-sm font-normal pt-1">
                {t("only_visible_select")}
              </p>
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
                    ? countries.find((country) => country.code === countryCode)
                        .flag
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
              value={secondPhone || ""}
              onChange={handleChange}
            />
            <p className="text-gray-500 text-sm font-normal pt-1">
              {t("only_visible_select")}
            </p>
          </div>
          <div>
            <label htmlFor="" className="text-black text-base font-normal">
              {t("email_address")}:
            </label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
              onChange={handleChange}
              value={email || ""}
              disabled
            />
            <p className="text-gray-500 text-sm font-normal pt-1">
              {t("only_visible_select")}
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
              value={username || ""}
              name="username"
              disabled
            />
            <p className="text-gray-500 text-sm font-normal pt-1">
              {t("username_condition")}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-start md:items-center">
              <input
                type="checkbox"
                name="newsletter"
                id="newsLetter"
                className="mt-2"
                onChange={handleChange}
                checked={newsletter || ""}
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
            className="bg-[#FFAA00] text-black font-bold w-auto rounded-md text-md py-3 px-5 mt-5 flex gap-2 justify-center"
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
              t("company_profile_text_3")
            )}
          </button>
        </form>
      </div>
      <SwepPassword id={id} />
      <Toaster />
    </div>
  );
}

export default ClientPersonalInfo;
