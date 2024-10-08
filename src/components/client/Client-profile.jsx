import PropTypes from "prop-types";
import Carousel from "../Carousel";
import { useTranslation } from "react-i18next";

function ClientProfile({ data }) {
  const { t } = useTranslation();
  const { companyDescription, companyPictures } = data || {};

  return (
    <div className="py-10">
      <div className="flex flex-col gap-1">
        <p className="text-black text-base font-normal">{t("about_us")}</p>
        <p className="text-black text-base font-normal">
          {companyDescription ? companyDescription : t("not_available")}
        </p>
      </div>

      <div className="pt-10">
        <p className="text-black text-base font-bold pb-5">
          {t("pictures_previous_orders")}
        </p>
        <Carousel images={companyPictures} />
      </div>
    </div>
  );
}
ClientProfile.propTypes = {
  data: PropTypes.any,
};
export default ClientProfile;
