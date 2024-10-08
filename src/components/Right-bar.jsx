import { useTranslation } from "react-i18next";

function RightBar() {
  const { t } = useTranslation();

  return (
    <div className="border border-gray-300 p-5 hidden lg:flex flex-col gap-2 w-[30%] none">
      <h2 className="text-lg text-black font-medium">
        {t("suisse_Offerten_advantage")}
      </h2>
      <h3 className="text-base text-black font-normal">
        <span
          className="
              font-bold"
        >
          ï€Œ
        </span>{" "}
        {t("free_inquiry")}
      </h3>
      <h3 className="text-base text-black font-normal">
        <span
          className="
              font-bold"
        >
          ï€Œ
        </span>{" "}
        {t("free_inquiry")}
      </h3>
      <h3 className="text-base text-black font-normal">
        <span
          className="
              font-bold"
        >
          ï€Œ
        </span>{" "}
        {t("free_inquiry")}
      </h3>
    </div>
  );
}

export default RightBar;
