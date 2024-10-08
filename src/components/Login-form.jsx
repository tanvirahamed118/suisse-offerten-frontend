import { useTranslation } from "react-i18next";

function LoginForm() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className="border p-6 border-gray-200 w-[400px] h-auto m-auto my-10 flex flex-col gap-5">
          <h2 className="text-black text-xl font-bold">
            {t("login_suisse_offerten")}
          </h2>
          <form action="" className="flex flex-col gap-2">
            <label htmlFor="" className="text-base text-black font-normal">
              {t("email_or_username")}
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border border-gray-200 px-2 py-3 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 w-full md:px-4"
            />
            <div>
              <label htmlFor="" className="text-black text-base font-normal">
                {t("password")}
              </label>
              <span className="relative">
                <input
                  type="password"
                  name=""
                  id=""
                  className="w-full border border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
                />
                <i className="fa-solid fa-eye-slash absolute right-0 top-[-8px] rounded-tr-md rounded-br-md bg-[#D4DBE0] px-2 py-2.5"></i>
              </span>
              <p className="text-gray-500 text-sm font-normal pt-1">
                {t("password_conditon")}
              </p>
            </div>
            <button
              type="submit"
              className="bg-[#ff730096] text-white font-normal rounded-md w-full hover:bg-[#F79359] text-md py-3 px-5"
            >
              {t("login")}
            </button>
          </form>

          <span>
            <p className="text-black text-sm font-normal">
              {t("if_you_continue_Conditions_and_Privacy_Polic")}
              <a
                href=""
                className="text-[#3097d1] hover:underline hover:text-[#227aad]"
              >
                {t("term_condition") + " - "}
              </a>
              <a
                href=""
                className="text-[#3097d1] hover:underline hover:text-[#227aad]"
              >
                {t("privacy_policy")}
              </a>
              .
            </p>
          </span>
          <a
            href=""
            className="text-[#3097d1] text-sm font-normal hover:underline hover:text-[#227aad]"
          >
            {t("regiter_now_without_login")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
