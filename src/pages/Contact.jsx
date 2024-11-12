import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCreateContactMutation } from "../redux/rtk/features/contact/contactApi";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const { t } = useTranslation();
  const [createContact, { data, isLoading, isError, isSuccess, error }] =
    useCreateContactMutation();
  const [contact, setContact] = useState({
    notice: "",
    name: "",
    email: "",
    phone: "",
    service: "",
    role: "",
  });

  const { notice, name, email, phone, service, role } = contact || {};
  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createContact(contact);
    setContact({
      notice: "",
      name: "",
      email: "",
      phone: "",
      service: "",
      role: "",
    });
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(data?.message);
    }
  }, [isError, isSuccess, data, error]);

  return (
    <section>
      <div className="container py-5">
        <div className="md:w-7/12 m-auto w-full py-5 md:py-20">
          <h1 className="text-black text-2xl lg:text-5xl font-semibold text-center">
            {t("contact_title")}
          </h1>
          <p className="text-black text-base font-normal mt-20 ">
            {t("contact_text_1")}
          </p>
          <p className="text-balck text-black font-normal mt-5">
            {t("contact_text_2")}
          </p>
        </div>
        <div className="md:w-6/12 w-full m-auto">
          <h2 className="text-black text-3xl font-medium text-center">
            {t("form_title")}
          </h2>
          <form
            action=""
            className="flex flex-col gap-14 py-10"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="notice"
              id=""
              placeholder={t("form_text_1") + ":"}
              className="text-black text-base font-normal px-2 border-b border-gray-300 outline-none"
              value={notice}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="name"
              id=""
              placeholder={t("form_text_2") + ":"}
              className="text-black text-base font-normal px-2 border-b border-gray-300 outline-none"
              value={name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder={t("form_text_3") + ":"}
              className="text-black text-base font-normal px-2 border-b border-gray-300 outline-none"
              value={email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              id=""
              placeholder={t("form_text_4") + ":"}
              className="text-black text-base font-normal px-2 border-b border-gray-300 outline-none"
              value={phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="service"
              id=""
              placeholder={t("form_text_5") + ":"}
              className="text-black text-base font-normal px-2 border-b border-gray-300 outline-none"
              value={service}
              onChange={handleChange}
              required
            />
            <span className="flex gap-2">
              <label htmlFor="" className="text-black text-base font-normal">
                {t("form_text_6")}:
              </label>
              <select
                name="role"
                id=""
                className="text-black text-base font-normal outline-none border-b border-gray-300"
                value={role}
                onChange={handleChange}
                required
              >
                <option value="" selected disabled>
                  Select a option...
                </option>
                <option value="client">{t("form_text_7")}</option>
                <option value="company/handuman">{t("form_text_8")}</option>
              </select>
            </span>
            <button
              type="submit"
              className="bg-[#FFAA00] w-80 py-3 text-black text-2xl m-auto font-bold rounded-xl text-center flex gap-2 items-center justify-center"
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
                t("form_text_9")
              )}
            </button>
          </form>
        </div>
        <div className="py-20 border-t border-gray-200">
          <h2 className="text-black text-xl font-semibold text-center">
            {t("contact_text_3")}
          </h2>
        </div>
      </div>
      <div className="h-[200px] lg:h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.7377324281515!2d7.557824876821235!3d47.182571317162086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e2839ab349a3d%3A0x80d02d8ecbdf0883!2sHauptstrasse%2022%2C%204562%20Biberist%2C%20Switzerland!5e0!3m2!1sen!2sbd!4v1721985393844!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Toaster />
    </section>
  );
}

export default Contact;
