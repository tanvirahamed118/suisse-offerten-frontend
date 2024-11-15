import PropTypes from "prop-types";
import { useGetAllOfferQuery } from "../redux/rtk/features/offer/offerApi";
import { useTranslation } from "react-i18next";

function ConfirmOffer({ id, sellerId, sellerToken }) {
  const page = 1;
  const limit = 20;
  const { data } = useGetAllOfferQuery({ id: id, page, limit, sellerId });
  const { t } = useTranslation();
  const { clientData } = data?.offers?.[0] || {};
  const { username, firstname, salutation, phone } = clientData || {};

  return sellerToken &&
    data?.offers?.length > 0 &&
    data?.offers?.[0]?.offerAccepted ? (
    <div className="bg-[#FEF7E2] p-5 rounded-md flex flex-col gap-1">
      <h2 className="text-black text-lg font-bold">{t("confirm_offer")}</h2>
      <p className="text-black text-base font-normal">{t("offer_notify_1")}</p>
      <p className="text-black text-base font-normal my-3">
        {t("offer_notify_2")}
      </p>

      <ul className="flex flex-col gap-1">
        <li className="flex items-center gap-1">
          <h5 className="text-base font-bold text-black">{t("salutation")}:</h5>
          <p className="text-black text-base font-normal">{salutation}</p>
        </li>
        <li className="flex items-center gap-1">
          <h5 className="text-base font-bold text-black">{t("first_name")}:</h5>
          <p className="text-black text-base font-normal">{firstname}</p>
        </li>
        <li className="flex items-center gap-1">
          <h5 className="text-base font-bold text-black">
            {t("form_text_2")}:
          </h5>
          <p className="text-black text-base font-normal">{username}</p>
        </li>
        <li className="flex items-center gap-1">
          <h5 className="text-base font-bold text-black">{t("phone")}:</h5>
          <p className="text-black text-base font-normal">{phone}</p>
        </li>
      </ul>
    </div>
  ) : null;
}
ConfirmOffer.propTypes = {
  sellerId: PropTypes.any,
  id: PropTypes.any,
  sellerToken: PropTypes.any,
};
export default ConfirmOffer;
