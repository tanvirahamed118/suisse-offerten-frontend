import PropTypes from "prop-types";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";
import { useCancelMembershipMutation } from "../../redux/rtk/features/membership/membershipApi";

function CancelPopup({ isShow, setIsShow }) {
  const { t } = useTranslation();
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const id = seller?.seller?._id;
  const [cancelMembership, { data, isLoading, isSuccess, isError, error }] =
    useCancelMembershipMutation();

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isShow]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(data?.message);
      setIsShow(false);
    }
  }, [data, isError, isSuccess, error, setIsShow]);

  const handleSubmit = () => {
    cancelMembership(id);
  };

  return (
    <section>
      <div className="py-10 flex justify-center items-center w-full h-screen absolute bg-[#000000e1] top-0 right-0">
        <div
          className={`relative w-[95%] m-auto md:w-[600px] h-auto border-[12px] rounded-md border-[#000000fb] bg-white p-5 ${
            isShow ? "zoom-animation" : ""
          }`}
        >
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-medium text-[#111111]">
              {t("cancel_membership")}
            </h2>
            <p className="text-base font-medium text-red-500">
              {t("warn_cencel")}
            </p>
            <div className="flex gap-5 items-center">
              <button
                onClick={() => setIsShow(false)}
                className="flex gap-1 items-center text-black text-base font-bold bg-[#FFAA00] py-2 w-full justify-center rounded-md"
              >
                {t("exit")}
              </button>
              <button
                onClick={handleSubmit}
                className="flex gap-1 items-center text-black text-base font-bold bg-[#FFAA00] py-2 w-full justify-center rounded-md"
              >
                {isLoading ? (
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
                  t("cancel_membership_btn")
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
}

CancelPopup.propTypes = {
  setIsShow: PropTypes.func.isRequired,
  isShow: PropTypes.any,
};

export default CancelPopup;
