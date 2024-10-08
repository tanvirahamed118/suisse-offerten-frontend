import { useGetOneSellerQuery } from "../../redux/rtk/features/auth/seller/authApi";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useUpdatePaymentMembershipMutation } from "../../redux/rtk/features/payment/paymentApi";

function PaymentSuccess() {
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const id = seller?.seller?._id;
  const [updatePaymentMembership] = useUpdatePaymentMembershipMutation();
  const { data } = useGetOneSellerQuery(id);
  const { t } = useTranslation();
  const { memberShip, memberShipStatus } = data || {};
  const { plan, title, credit, currentPrice, existPrice, savePrice } =
    memberShip || {};

  useEffect(() => {
    const formData = { sellerId: id, status: "complete", credit: credit };
    if (memberShipStatus === "not-complete") {
      updatePaymentMembership(formData);
    }
  }, [updatePaymentMembership, memberShipStatus, credit, id]);

  return (
    <div className="w-full h-[500px] flex flex-col gap-5 justify-center items-center">
      <i className="fa-solid fa-circle-check text-[60px] text-green-500"></i>
      <p className="text-xl font-medium text-black">
        {t("membership_purchase")}
      </p>
      <div>
        <h2 className="text-xl text-[#111111] font-normal py-5 text-center">
          {t("you_have_chose")}{" "}
          <span className="font-bold text-red-500 text-4xl">{plan}</span>{" "}
          {t("plan")}
        </h2>
        <table className="min-w-full border-collapse">
          <tr className="bg-gray-200">
            <th className="border border-gray-300 text-left px-4 py-2">
              {t("payment_status")}
            </th>
            <td className="border border-gray-300 text-left px-4 py-2">
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
    </div>
  );
}

export default PaymentSuccess;
