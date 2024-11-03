import Logo from "../assets/Logo-text.png";
import { useTranslation } from "react-i18next";

function Error404() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full h-[70vh]">
      <img className="w-80" src={Logo} alt="" />
      <p className="text-gray-400 text-xl font-normal">{t("erro_title")} 🙊</p>
      <p className="text-[#111] text-4xl font-medium">{t("error_heading")}</p>
      <p className="text-[#111] text-base font-normal">{t("error_des")}</p>
      <p className="text-[#111] text-base font-normal">
        E-MAIL:{" "}
        <a
          className="text-[#3097d1] text-base hover:underline"
          href="mailto:suisseofferten@gmail.com"
        >
          suisseofferten@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Error404;
