import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container py-5">
        <div>
          <div>
            <h2 className="text-2xl md:text-5xl text-black font-normal text-center py-10">
              {t("about_title")}
            </h2>
            <div className="flex flex-col gap-8 py-5 md:w-8/12 w-full m-auto">
              <h3 className="text-black text-xl font-bold">
                {t("about_text_1")}
              </h3>
              <p className="text-base text-black font-semibold">
                {t("about_text_2")}
              </p>
              <p className="text-base text-black font-semibold">
                {t("about_text_3")}
              </p>
              <p className="text-base text-black font-semibold">
                {t("about_text_4")}
              </p>
              <p className="text-base text-black font-semibold">
                {t("about_text_5")}
              </p>
              <p className="text-base text-black font-semibold">
                {t("about_text_6")}
              </p>
              <p className="text-base text-black font-semibold">
                {t("about_text_7")}
              </p>
              <p className="text-base text-black font-semibold">
                {t("about_text_8")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
