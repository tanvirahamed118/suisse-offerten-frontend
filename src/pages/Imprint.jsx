import { useTranslation } from "react-i18next";

function Imprint() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container py-5">
        <div className="py-10">
          <div>
            <h2 className="text-3xl md:text-5xl text-black font-normal text-center capitalize mb-10">
              {t("imprint_title")}
            </h2>
            <h3 className="text-xl font-bold text-[#111]">
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
                  <a href="">CH-4562 Biberist</a>
                </li>
              </ul>
              <ul className="flex flex-col gap-1 pt-3">
                <li className="text-xl font-bold text-[#111]">
                  <a href=""></a>
                  {t("imprint_text_7")}
                </li>
                <li>CHE-362.214.174</li>
              </ul>
              <div>
                <h2 className="text-xl font-bold text-[#111]">
                  {t("imprint_text_18")}
                </h2>
                <ul className="flex flex-col gap-1 pt-3 px-10">
                  <li className="list-disc">{t("imprint_text_9")}</li>
                  <li className="list-disc">{t("imprint_text_10")}</li>
                  <li className="list-disc">{t("imprint_text_11")}</li>
                  <li className="list-disc">{t("imprint_text_12")}</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#111]">
                  {t("imprint_text_13")}
                </h2>
                <ul className="flex flex-col gap-1 pt-3 px-10">
                  <li className="list-disc">{t("imprint_text_14")}</li>
                  <li className="list-disc">{t("imprint_text_15")}</li>
                  <li className="list-disc">{t("imprint_text_16")}</li>
                  <li className="list-disc">{t("imprint_text_17")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Imprint;
