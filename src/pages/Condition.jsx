import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Condition() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container py-5">
        <div className="flex gap-5 flex-col md:flex-row">
          <div className="w-full lg:w-10/12 m-auto">
            <h2 className="text-2xl md:text-4xl text-black font-bold mt-5 mb-16 text-center capitalize">
              {t("condition_title_1")}
            </h2>
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl text-black font-normal">
                {t("condition_title_2")}
              </h2>
              <span className="flex flex-col gap-5">
                <p className="text-base text-black font-normal">
                  {t("condition_des_1")}
                </p>
                <p className="text-base text-black font-normal">
                  {t("condition_des_2")}
                </p>
                <p className="text-base text-black font-normal">
                  {t("condition_des_3")}
                </p>
                <p className="text-base text-black font-normal">
                  {t("condition_des_4")}
                </p>
              </span>
              <div className="flex flex-col gap-5 pb-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("condition_title_3")}
                </h2>
                <span>
                  <p className="text-base text-black font-normal">1.1</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_5")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">1.2</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_6")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">1.3</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_7")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">1.4</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_8")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">1.5</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_9")}
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-5 pb-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("condition_title_4")}
                </h2>
                <span>
                  <p className="text-base text-black font-normal">2.1</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_10")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">2.2</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_11")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">2.3</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_12")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">2.4</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_13")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">2.5</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_14")}
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-5 pb-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("condition_title_5")}
                </h2>
                <span>
                  <p className="text-base text-black font-normal">3.1</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_15")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">3.2</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_16")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">3.3</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_17")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">3.4</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_18")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">3.5</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_19")}
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-5 pb-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("condition_title_6")}
                </h2>
                <span>
                  <p className="text-base text-black font-normal">4.1</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_20")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">4.2</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_21")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">4.3</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_22")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">4.4</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_23")}
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-5 pb-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("condition_title_7")}
                </h2>
                <span>
                  <p className="text-base text-black font-normal">5.1</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_24")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">5.2</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_25")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">5.3</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_26")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">5.4</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_27")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">5.5</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_28")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">5.6</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_29")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">5.7</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_30")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">5.8</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_31")}
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-5 pb-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("condition_title_8")}
                </h2>
                <span>
                  <p className="text-base text-black font-normal">6.1</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_32")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">6.2</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_33")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">6.3</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_34")}{" "}
                    <Link
                      to="/order-aggrement"
                      className="text-[#00B0F0] hover:underline"
                    >
                      {t("condition_des_35")}
                    </Link>{" "}
                    {t("condition_des_36")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">6.4</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_37")}{" "}
                    <Link
                      to="/data-protection"
                      className="text-[#00B0F0] hover:underline"
                    >
                      {t("condition_des_38")}
                    </Link>{" "}
                    {t("condition_des_39")}
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-5 pb-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("condition_title_9")}
                </h2>
                <span>
                  <p className="text-base text-black font-normal">7.1</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_40")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">7.2</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_41")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">7.3</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_42")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">7.4</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_43")}
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-5 pb-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("condition_title_10")}
                </h2>
                <span>
                  <p className="text-base text-black font-normal">8.1</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_44")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">8.2</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_45")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">8.3</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_46")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">8.4</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_47")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">8.5</p>
                  <p className="text-base text-black font-normal">
                    {t("condition_des_48")}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Condition;
