import credits from "../../datas/credits";
import { useCreateCreditsPaymentMutation } from "../../redux/rtk/features/payment/paymentApi";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

function Credit() {
  const { t } = useTranslation();
  const [createCreditsPayment, { data, isLoading, isSuccess, isError, error }] =
    useCreateCreditsPaymentMutation();
  const [load, setLoad] = useState(null);
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const id = seller?.seller?._id;

  const handlePayment = (item) => {
    const updatedItem = {
      ...item,
      sellerId: id,
    };
    createCreditsPayment(updatedItem);
    setLoad(item.id);
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      window.location.href = data.pageUrl;
    }
  }, [isError, isSuccess, data, error]);

  return (
    <section>
      <div className=" py-10">
        <div className="flex gap-4 items-center bg-[#f5f6f7] p-5">
          <img
            src="../../images/review/notice-0e20880a0c92a25a81bb.svg"
            alt=""
          />
          <p className="text-black text-base font-normal">
            {t("additional_credits")}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full justify-center m-auto py-10">
          {credits?.map((item) => {
            const { id, credit, price } = item || {};
            return (
              <div
                key={id}
                className="p-5 border border-gray-300 rounded-md flex flex-col gap-4 items-center"
              >
                <div className="bg-[#FFF7E6] p-5 flex flex-col gap-2 items-center rounded-lg w-full">
                  <span className="flex gap-2">
                    <img
                      src="../../images/review/coin-e944068b0cfb74c2b0b6.svg"
                      alt=""
                      className="w-full"
                    />
                    <h1 className="text-black font-bold text-3xl">{credit}</h1>
                  </span>
                  <p className="text-black text-base font-normal">
                    {t("credits")}
                  </p>
                </div>
                <h2 className="text-[#3258a7] text-xl font-bold">
                  CHF {price}.-
                </h2>
                <button
                  onClick={() => handlePayment(item)}
                  className="bg-[#FFAA00] py-2 w-full text-center flex gap-2 items-center justify-center text-black rounded-md font-bold"
                >
                  {load === id && isLoading ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 animate-spin"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                      <p>{t("loading")}</p>
                    </>
                  ) : (
                    <>
                      <i className="fa fa-shopping-cart"></i>
                      <p>{t("choose")}</p>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Toaster />
    </section>
  );
}

export default Credit;
