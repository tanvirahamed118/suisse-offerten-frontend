import { useTranslation } from "react-i18next";

function DataProtection() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container py-5">
        <div className="w-full lg:w-10/12 m-auto flex gap-5 flex-col">
          <h2 className="text-2xl md:text-4xl text-black font-bold mt-5 mb-16 text-center capitalize">
            {t("data_protection_title_1")}
          </h2>
          <div className="w-full">
            <div>
              <h2 className="text-base text-black font-bold capitalize">
                {t("data_protection_title_2")}
              </h2>
              <span className="flex flex-col gap-5 py-3">
                <p className="text-base text-black font-normal">
                  {t("data_protection_des_1")}
                </p>
              </span>
            </div>
            <div className="flex flex-col gap-2 py-3">
              <h2 className="text-base text-black font-bold capitalize">
                {t("data_protection_title_3")}
              </h2>
              <p className="text-base text-black font-normal">
                {t("data_protection_des_2")}
              </p>
              <p className="text-base text-black font-normal">
                {t("data_protection_des_3")}
              </p>
            </div>
            <div>
              <div className="flex flex-col gap-3 py-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("data_protection_title_4")}
                </h2>
                <p className="text-base text-black font-normal">
                  {t("data_protection_des_4")}
                </p>
                <ul className="flex flex-col gap-1 pt-3 px-10">
                  <li className="list-disc text-base text-black font-normal">
                    {t("data_protection_des_5")}
                  </li>
                  <li className="list-disc text-base text-black font-normal">
                    {t("data_protection_des_6")}
                  </li>
                  <li className="list-disc text-base text-black font-normal">
                    {t("data_protection_des_7")}
                  </li>
                  <li className="list-disc text-base text-black font-normal">
                    {t("data_protection_des_8")}
                  </li>
                </ul>
                <p className="text-base text-black font-normal">
                  {t("data_protection_des_9")}
                </p>
                <p className="text-base text-black font-normal">
                  {t("data_protection_des_10")}
                </p>
                <p className="text-base text-black font-normal">
                  {t("data_protection_des_11")}
                </p>
              </div>
              <div className="flex flex-col gap-3 py-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("data_protection_title_5")}
                </h2>
                <p className="text-base text-black font-normal">
                  {t("data_protection_des_12")}
                </p>
                <ul className="flex flex-col gap-1 pt-3 px-10">
                  <li className="list-disc text-base text-black font-normal">
                    {t("data_protection_des_13")}
                  </li>
                  <li className="list-disc text-base text-black font-normal">
                    {t("data_protection_des_14")}
                  </li>
                  <li className="list-disc text-base text-black font-normal">
                    {t("data_protection_des_15")}
                  </li>
                  <li className="list-disc text-base text-black font-normal">
                    {t("data_protection_des_16")}
                  </li>
                  <li className="list-disc text-base text-black font-normal">
                    {t("data_protection_des_17")}
                  </li>
                  <li className="list-disc text-base text-black font-normal">
                    {t("data_protection_des_18")}
                  </li>
                  <li className="list-disc text-base text-black font-normal">
                    {t("data_protection_des_19")}
                  </li>
                  <li className="list-disc text-base text-black font-normal">
                    {t("data_protection_des_20")}
                  </li>
                  <li className="list-disc text-base text-black font-normal">
                    {t("data_protection_des_21")}
                  </li>
                  <li className="list-disc text-base text-black font-normal">
                    {t("data_protection_des_22")}
                  </li>
                </ul>
                <p className="text-base text-black font-normal">
                  {t("data_protection_des_23")}
                </p>
              </div>
              <div className="flex flex-col gap-3 py-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("data_protection_title_6")}
                </h2>
                <p className="text-base text-black font-normal">
                  {t("data_protection_des_24")}
                </p>
                <ul className="flex flex-col gap-1 pt-3 px-10">
                  <li className="list-disc text-base text-black font-normal">
                    {t("data_protection_des_25")}
                  </li>
                  <li className="list-disc text-base text-black font-normal">
                    {t("data_protection_des_26")}
                  </li>
                  <li className="list-disc text-base text-black font-normal">
                    {t("data_protection_des_27")}
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 py-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("data_protection_title_7")}
                </h2>
                <p className="text-base text-black font-normal">
                  {t("data_protection_des_28")}
                </p>
                <p className="text-base text-black font-normal">
                  {t("data_protection_des_29")}
                </p>
              </div>
              <div className="flex flex-col gap-3 py-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("data_protection_title_8")}
                </h2>
                <p className="text-base text-black font-normal">
                  {t("data_protection_des_30")}
                </p>
              </div>
              <div className="flex flex-col gap-3 py-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("data_protection_title_9")}
                </h2>
                <p className="text-base text-black font-normal">
                  {t("data_protection_des_31")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataProtection;
