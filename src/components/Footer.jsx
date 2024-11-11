import { Link } from "react-router-dom";
import Logo from "../assets/suisse-offerten-logo.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#FFAA00] py-10 lg:py-20">
      <div className="container">
        <div className="flex lg:flex-row flex-col gap-8 lg:gap-20 justify-between">
          <div className="flex flex-col gap-4 w-full lg:w-[20%]">
            <Link to="/">
              <img src={Logo} alt="" className="w-60" />
            </Link>
            <h2 className="text-sm font-normal text-black">
              {t("footer_text")}
            </h2>
          </div>
          <div className="flex lg:flex-row flex-col justify-between gap-7 md:gap-10 w-full lg:w-[80%]">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/about"
                  className="text-black text-base font-semibold hover:underline capitalize"
                >
                  {t("about_us")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-black text-base font-semibold hover:underline capitalize"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/condition"
                  className="text-black text-base font-semibold hover:underline capitalize"
                >
                  {t("condition")}
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works-contractor"
                  className="text-black text-base font-semibold hover:underline capitalize"
                >
                  {t("how_does_contractor")}
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/imprint"
                  className="text-black text-base font-semibold hover:underline capitalize"
                >
                  {t("imprint")}
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works-client"
                  className="text-black text-base font-semibold hover:underline capitalize"
                >
                  {t("how_does_client")}
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  className="text-black text-base font-semibold hover:underline capitalize"
                  to="/data-protection"
                >
                  {t("data_protection")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-black text-base font-semibold hover:underline capitalize"
                  to="/order-aggrement"
                >
                  {t("order_aggrement")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-black text-base font-semibold hover:underline capitalize"
                  to="/location"
                >
                  {t("locations")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
