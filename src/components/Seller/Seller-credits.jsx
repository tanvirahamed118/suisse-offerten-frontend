import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useGetOneSellerQuery } from "../../redux/rtk/features/auth/seller/authApi";
import CancelPopup from "./Cancel-popup";
import { useState } from "react";

function SellerCredits() {
  const { t } = useTranslation();
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const id = seller?.seller?._id;

  const [isShow, setIsShow] = useState(false);
  const { data } = useGetOneSellerQuery(id);

  const { memberShip, memberShipStatus, credits, uidVerify, locationVerify } =
    data || {};
  const { plan, title, credit, currentPrice, existPrice, savePrice } =
    memberShip || {};

  return (
    <div className="">
      <div className="py-10">
        <h2 className="text-black text-2xl font-bold border-b border-gray-500 pb-2">
          {t("member_cerdits_title")}
        </h2>
        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="border-b border-black">
                  <th className="p-5 align-middle border-b border-black text-left">
                    <h2 className="text-black text-sm font-bold">
                      {t("member_cerdits_text_1")}
                    </h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="striped">
                  <td className="p-5 align-top border-b border-black text-left">
                    <p className="text-black font-normal text-base">
                      {t("member_cerdits_text_2")}
                    </p>
                  </td>
                  <td className="p-5 align-top border-b border-black text-left">
                    <div className="flex gap-2 items-center">
                      <p className="text-black font-normal text-base">
                        {memberShipStatus &&
                          `${t("current_credit")} ${credits}`}
                      </p>
                    </div>
                  </td>
                  <td className="p-5 align-top border-b border-black text-left w-64">
                    {memberShipStatus && memberShipStatus === "complete" ? (
                      <button
                        onClick={() => setIsShow(true)}
                        className="flex gap-1 items-center text-white text-base font-normal bg-[#111111] py-2 w-full justify-center rounded-md"
                      >
                        <i className="fa-solid fa-circle-xmark text-white"></i>
                        <p>{t("close_membership")}</p>
                      </button>
                    ) : (
                      <button
                        disabled={!uidVerify || !locationVerify}
                        className={`text-white text-base font-normal py-2 w-full justify-center rounded-md ${
                          !uidVerify || !locationVerify
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-[#111111] cursor-pointer"
                        }`}
                      >
                        {!uidVerify || !locationVerify ? (
                          <div className="flex gap-1 items-center justify-center">
                            <i className="fa fa-shopping-cart text-white"></i>
                            <p>{t("member_cerdits_text_11")}</p>
                          </div>
                        ) : (
                          <Link
                            to="/seller-dashboard/membership/buy"
                            className="flex gap-1 items-center justify-center"
                          >
                            <i className="fa fa-shopping-cart text-white"></i>
                            <p>{t("member_cerdits_text_11")}</p>
                          </Link>
                        )}
                      </button>
                    )}
                  </td>
                </tr>

                <tr className="striped">
                  <td className="p-5 align-top text-left">
                    <p className="text-black font-normal text-base">
                      {t("member_cerdits_text_3")}
                    </p>
                  </td>
                  <td className="p-5 align-top text-left">
                    <div className=" items-start flex-col hidden">
                      <p className="text-black font-normal text-base">
                        50 {t("member_cerdits_text_4")}
                      </p>
                      <p className="text-black font-normal text-base border-b border-black w-full pb-2">
                        + 19 {t("member_cerdits_text_5")}
                      </p>
                      <p className="text-black font-normal text-base">
                        69 {t("member_cerdits_text_6")}
                      </p>
                    </div>
                  </td>
                  <td className="p-5 align-top text-left w-64">
                    <button
                      disabled={!uidVerify || !locationVerify}
                      className={`text-white text-base font-normal py-2 w-full justify-center rounded-md ${
                        !uidVerify || !locationVerify
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-[#111111] cursor-pointer"
                      }`}
                    >
                      {!uidVerify || !locationVerify ? (
                        <div className="flex gap-1 items-center justify-center">
                          <i className="fa fa-shopping-cart text-white"></i>
                          <p>{t("member_cerdits_text_8")}</p>
                        </div>
                      ) : (
                        <Link
                          to="/seller-dashboard/seller-credit"
                          className="flex gap-1 items-center text-white text-base font-normal bg-[#111111] py-2 w-full justify-center rounded-md"
                        >
                          <i className="fa fa-shopping-cart text-white"></i>
                          <p>{t("member_cerdits_text_8")}</p>
                        </Link>
                      )}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            {memberShip && (
              <div>
                <table className="min-w-full border-collapse">
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 text-left px-4 py-2">
                      {t("payment_status")}
                    </th>
                    <td className="border border-gray-300 text-left px-4 py-2 text-red-500 font-bold text-xl capitalize">
                      {memberShipStatus}
                    </td>
                  </tr>
                  <tr>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      {t("membership_title")}
                    </th>
                    <td className="border border-gray-300 text-left px-4 py-2">
                      {title}
                    </td>
                  </tr>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 text-left px-4 py-2">
                      {t("membership_plan")}
                    </th>
                    <td className="border border-gray-300 text-left px-4 py-2">
                      {plan}
                    </td>
                  </tr>
                  <tr>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      {t("membership_credits")}
                    </th>
                    <td className="border border-gray-300 text-left px-4 py-2">
                      {credit}
                    </td>
                  </tr>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 text-left px-4 py-2">
                      {t("membership_price")}
                    </th>
                    <td className="border border-gray-300 text-left px-4 py-2">
                      ₣ {currentPrice}
                    </td>
                  </tr>
                  <tr>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      {t("membership_previous")}
                    </th>
                    <td className="border border-gray-300 text-left px-4 py-2">
                      ₣ {existPrice}
                    </td>
                  </tr>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 text-left px-4 py-2">
                      {t("membership_discount")}
                    </th>
                    <td className="border border-gray-300 text-left px-4 py-2">
                      ₣ {savePrice}
                    </td>
                  </tr>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {isShow && <CancelPopup isShow={isShow} setIsShow={setIsShow} />}
    </div>
  );
}

export default SellerCredits;
