import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetAllMembershipQuery } from "../../redux/rtk/features/membership/membershipApi";
import MembershipLoading from "../../components/loading/Membership-loading";
import { useCreatePaymentMutation } from "../../redux/rtk/features/payment/paymentApi";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useGetOneSellerQuery } from "../../redux/rtk/features/auth/seller/authApi";

function Membership() {
  const { t } = useTranslation();
  const { data, isLoading, isError, error } = useGetAllMembershipQuery();
  const [load, setLoad] = useState(null);
  const navigate = useNavigate();

  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const id = seller?.seller?._id;
  const { data: getSeller } = useGetOneSellerQuery(id);
  const [
    createPayment,
    {
      data: createData,
      isLoading: createLoading,
      isSuccess: createSuccess,
      isError: createIsError,
      error: createError,
    },
  ] = useCreatePaymentMutation();

  const handlePayment = (item) => {
    createPayment({ item, id });
    setLoad(item?._id);
  };

  useEffect(() => {
    if (createIsError) {
      toast.error(createError.data.message);
    }
    if (createSuccess) {
      window.location.href = createData.pageUrl;
    }
  }, [createSuccess, createIsError, createData, createError]);

  useEffect(() => {
    if (getSeller && getSeller?.memberShipStatus === "done") {
      navigate("/seller-dashboard/membership");
    }
  }, [getSeller, navigate]);

  // decide what to render
  let content;
  if (isLoading) {
    content = (
      <>
        <MembershipLoading />
        <MembershipLoading />
        <MembershipLoading />
        <MembershipLoading />
      </>
    );
  }
  if (isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && data?.length === 0) {
    content = <p>{t("no_data_found")}</p>;
  }
  if (!isLoading && !isError && data?.length > 0) {
    content = data?.map((item) => {
      const {
        _id,
        title,
        savePrice,
        existPrice,
        currentPrice,
        shortNote,
        featureOne,
        featureTow,
        featureThree,
        featureFour,
        featureFive,
        credit,
      } = item || {};

      return (
        <div
          className="bg-[#fff] border border-gray-300 rounded-md p-5"
          key={_id}
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-black text-3xl font-bold capitalize ">
              {title}
            </h2>
            <div className="flex gap-2 items-center">
              <h2 className="bg-[#FFEEA9] py-[2px] px-2 text-center rounded-md text-balck text-sm font-medium capitalize">
                {t("save")} {savePrice}.00
              </h2>
              <h2 className="text-[#111111] font-medium text-sm line-through italic">
                <span className="font-bold ">₣</span> {existPrice}.00
              </h2>
            </div>
            <h3 className="text-[#111111] font-bold text-4xl">
              ₣ {currentPrice}.00<span className="text-base"> / mo</span>
            </h3>
            <p className="text-[#111111] text-sm font-normal">{shortNote}</p>
            <p className="text-[#111111] text-lg font-normal">
              {t("credits")}: {credit}
            </p>
          </div>
          <div className="my-5 flex justify-center">
            <button
              onClick={() => handlePayment(item)}
              className="bg-[#111111] text-white font-normal rounded-md text-md py-3 hover:scale-105 transition-all duration-[350ms] ease-[cubic-bezier(0,0,0.2,1)] delay-[2ms] w-full flex gap-2 justify-center"
            >
              {load === _id && createLoading ? (
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
                t("choose")
              )}
            </button>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-black text-sm font-normal flex gap-2 items-center">
              <i className="fa-solid fa-dollar-sign text-[#111111] border border-gray-300 text-lg px-2 py-[1px] rounded-md"></i>
              <p className="text-lg font-bold text-[#111111]">{featureOne}</p>
            </li>
            <li className="text-black text-sm font-normal flex gap-2 items-center">
              <i className="fa-solid fa-database text-[#111111] border border-gray-300 text-base px-2 py-[1px] rounded-md"></i>
              <p className="text-lg font-bold text-[#111111]">{featureTow}</p>
            </li>
            <li className="text-black text-sm font-normal flex gap-2 items-center">
              <i className="fa-solid fa-bell text-[#111111] border border-gray-300 text-lg px-2 py-[1px] rounded-md"></i>
              <p className="text-lg font-bold text-[#111111]">{featureThree}</p>
            </li>
            <li className="text-black text-sm font-normal flex gap-2 items-center">
              <i className="fa-solid fa-bolt text-[#111111] border border-gray-300 text-lg px-2 py-[1px] rounded-md"></i>
              <p className="text-lg font-bold text-[#111111]">{featureFour}</p>
            </li>
            <li className="text-black text-sm font-normal flex gap-2 items-center">
              <i className="fa-solid fa-clipboard-check text-[#111111] border border-gray-300 text-lg px-2 py-[1px] rounded-md"></i>
              <p className="text-lg font-bold text-[#111111]">{featureFive}</p>
            </li>
          </ul>
        </div>
      );
    });
  }

  return (
    <section className="my-10">
      <div className="container">
        <Link
          to="/seller-dashboard/membership"
          className="text-white py-1 px-5 rounded-md text-base font-normal hover:underline bg-[#111111]"
        >
          {t("back")}
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5">
          {content}
        </div>
      </div>
      <Toaster />
    </section>
  );
}

export default Membership;
