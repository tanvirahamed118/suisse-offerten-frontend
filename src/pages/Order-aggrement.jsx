import { useTranslation } from "react-i18next";

function OrderAggrement() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container py-5">
        <div className="flex gap-5 flex-col md:flex-row">
          <div className="w-full lg:w-10/12 m-auto">
            <div className="py-10">
              <h2 className="text-2xl md:text-4xl text-black font-bold text-center capitalize">
                {t("order_aggrement_title_1")}
              </h2>
              <p className="text-base text-black font-normal text-center py-2">
                {t("order_aggrement_title_2")}
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 pb-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("order_aggrement_title_3")}
                </h2>
                <span>
                  <p className="text-base text-black font-normal">1.1</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_1")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">1.2</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_2")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">1.3</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_3")}
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-5 pb-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("order_aggrement_title_4")}
                </h2>
                <span>
                  <p className="text-base text-black font-normal">2.1</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_4")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">2.2</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_5")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">2.3</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_6")}
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-5 pb-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("order_aggrement_title_5")}
                </h2>
                <span>
                  <p className="text-base text-black font-normal">3.1</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_7")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">3.2</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_8")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">3.3</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_9")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">3.4</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_10")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">3.5</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_11")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">3.6</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_12")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">3.7</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_13")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">3.8</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_14")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">3.9</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_15")}
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-5 pb-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("order_aggrement_title_6")}
                </h2>
                <span>
                  <p className="text-base text-black font-normal">4.1</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_16")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">4.2</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_17")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">4.3</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_18")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">4.4</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_19")}
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-5 pb-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("order_aggrement_title_7")}
                </h2>
                <span>
                  <p className="text-base text-black font-normal">5.1</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_20")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">5.2</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_21")}
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-5 pb-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("order_aggrement_title_8")}
                </h2>
                <span>
                  <p className="text-base text-black font-normal">6.1</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_22")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">6.2</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_23")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">6.3</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_24")}
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-5 pb-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("order_aggrement_title_9")}
                </h2>
                <span>
                  <p className="text-base text-black font-normal">7.1</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_25")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">7.2</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_26")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">7.3</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_27")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">7.4</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_28")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">7.5</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_29")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">7.6</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_30")}
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-5 pb-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("order_aggrement_title_10")}
                </h2>
                <span>
                  <p className="text-base text-black font-normal">8.1</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_31")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">8.2</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_32")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">8.3</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_33")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">8.4</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_34")}
                  </p>
                </span>
              </div>

              <div className="flex flex-col gap-5 pb-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("order_aggrement_title_11")}
                </h2>
                <span>
                  <p className="text-base text-black font-normal">9.1</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_35")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">9.2</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_36")}
                  </p>
                </span>
              </div>

              <div className="flex flex-col gap-5 pb-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("order_aggrement_title_12")}
                </h2>
                <span>
                  <p className="text-base text-black font-normal">10.1</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_37")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">10.2</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_38")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">10.3</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_39")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">10.4</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_41")}
                  </p>
                </span>
              </div>

              <div className="flex flex-col gap-5 pb-5">
                <h2 className="text-base text-black font-bold capitalize">
                  {t("order_aggrement_title_13")}
                </h2>
                <span>
                  <p className="text-base text-black font-normal">11.1</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_41")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">11.2</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_42")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">11.3</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_43")}
                  </p>
                </span>
                <span>
                  <p className="text-base text-black font-normal">11.4</p>
                  <p className="text-base text-black font-normal">
                    {t("order_aggrement_des_44")}
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

export default OrderAggrement;
