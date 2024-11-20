import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function SubscribeTab() {
  const { t } = useTranslation();
  const sellerAuth = localStorage?.getItem("seller");
  const seller = JSON.parse(sellerAuth);

  return (
    <div className="flex justify-center flex-col py-10 md:pt-20 gap-5 items-center border-t border-gray-300">
      <h2 className="text-black text-base font-normal text-center">
        {t("get_multiple_offers")}
      </h2>
      <h2 className="text-black text-2xl font-bold text-center md:text-4xl">
        {t("free_non_binding")}
      </h2>
      {!seller?.sellerToken && (
        <Link
          to="/enter-request"
          className="bg-[#FFAA00] text-black font-semibold rounded-2xl hover:bg-[#ffaa00e5] text-base md:text-3xl py-2 md:py-6 px-10 text-center"
        >
          {t("describe_now_your_project")}
        </Link>
      )}
    </div>
  );
}

export default SubscribeTab;
