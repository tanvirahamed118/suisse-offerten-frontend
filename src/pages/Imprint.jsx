import { useTranslation } from "react-i18next";

function Imprint() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container py-5">
        <div className="py-10">
          <div>
            <h2 className="text-5xl text-black font-normal text-center capitalize mb-10">
              {t("imprint_title")}
            </h2>
            <h3 className="text-base font-bold text-black">
              {t("imprint_text_1")}
            </h3>
            <div className="flex flex-col gap-5">
              <ul className="flex flex-col gap-1 pt-3">
                <li>
                  <a href=""></a>
                  {t("imprint_text_2")}
                </li>
                <li>
                  <a href=""></a>Hauptstrasse 22
                </li>
                <li>
                  <a href="">4562 Biberist</a>
                </li>
                <li>
                  <a href="">+41 77 942 59 44</a>
                </li>
                <li>
                  <a href="">info@suisse-offerten.ch</a>
                </li>
              </ul>
              <ul className="flex flex-col gap-1 pt-3">
                <li>
                  <a href=""></a>
                  {t("imprint_text_7")}
                </li>
                <li>
                  <a href=""></a>Mehmet Küçük
                </li>
              </ul>
              <ul className="flex flex-col gap-1 pt-3">
                <li>
                  <a href=""></a>
                  {t("imprint_text_9")}
                </li>
                <li>
                  <a href=""></a>
                  {t("imprint_text_10")}
                </li>
                <li>
                  <a href=""></a>
                  {t("imprint_text_11")}
                </li>
                <li>
                  <a href=""></a>
                  {t("imprint_text_12")}
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5 mt-10">
              <span className="">
                <p className="text-base text-black font-semibold">
                  {t("imprint_text_13")}
                </p>
                <p className="text-base text-black font-normal">
                  {t("imprint_text_14")}
                </p>
              </span>
              <span className="">
                <p className="text-base text-black font-semibold">
                  {t("imprint_text_15")}
                </p>
                <p className="text-base text-black font-normal">
                  {t("imprint_text_16")}
                </p>
              </span>
              <span className="">
                <p className="text-base text-black font-semibold">
                  {t("imprint_text_17")}
                </p>
                <p className="text-base text-black font-normal">
                  {t("imprint_text_18")}
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Imprint;
