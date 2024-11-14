import { Link } from "react-router-dom";
import Logo from "../assets/suisse-offerten.svg";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function MobileNav({
  menu,
  setMenu,
  menuref,
  seller,
  handleLogout,
  client,
  headerlogo,
}) {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (e) => {
    const lng = e.target.value;
    if (lng === "en") {
      i18n.changeLanguage(lng);
    }
    if (lng === "gr") {
      i18n.changeLanguage(lng);
    }
    if (lng === "fr") {
      i18n.changeLanguage(lng);
    }
  };
  return (
    <section
      className={
        menu
          ? "w-64 h-screen bg-white border-r border-gray-200 absolute top-0 left-0 active z-10"
          : "w-64 h-screen bg-white border-r border-gray-200 absolute top-0 left-0 inactive"
      }
      ref={menuref}
    >
      <div className="p-5">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={() => setMenu(false)}>
            <img
              src={headerlogo ? headerlogo : Logo}
              alt=""
              className="w-36"
              onClick={() => setMenu(false)}
            />
          </Link>
          <i
            className="fa-solid fa-xmark text-2xl hover:text-black cursor-pointer"
            onClick={() => setMenu(false)}
          ></i>
        </div>
        <div className="mt-5">
          <ul className="flex flex-col gap-3 items-start">
            {!seller?.sellerToken && (
              <li>
                <Link
                  to="/enter-request"
                  onClick={() => setMenu(false)}
                  className={
                    i18n.languages[0] === "fr"
                      ? "text-black text-xs 2xl:text-sm font-semibold hover:underline"
                      : "text-black text-sm xl:text-base font-semibold hover:underline"
                  }
                >
                  {t("enter_new_job")}
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/search-job"
                onClick={() => setMenu(false)}
                className={
                  i18n.languages[0] === "fr"
                    ? "text-black text-xs 2xl:text-sm font-semibold hover:underline"
                    : "text-black text-sm xl:text-base font-semibold hover:underline"
                }
              >
                {t("search_job")}
              </Link>
            </li>
            {/* <li>
              <Link
                to="/cost-calculator"
                onClick={() => setMenu(false)}
                className={
                  i18n.languages[0] === "fr"
                    ? "text-black text-xs 2xl:text-sm font-semibold hover:underline"
                    : "text-black text-sm xl:text-base font-semibold hover:underline"
                }
              >
                {t("cost_schedule")}
              </Link>
            </li> */}

            {seller?.sellerToken ? (
              <>
                <li>
                  <Link
                    to="/seller-dashboard"
                    onClick={() => setMenu(false)}
                    className={
                      i18n.languages[0] === "fr"
                        ? "text-black text-xs 2xl:text-sm font-semibold hover:underline"
                        : "text-black text-sm xl:text-base font-semibold hover:underline"
                    }
                  >
                    {t("account")}
                  </Link>
                </li>
                <li>
                  <h2
                    onClick={handleLogout}
                    className={
                      i18n.languages[0] === "fr"
                        ? "text-black text-xs 2xl:text-sm font-semibold hover:underline cursor-pointer"
                        : "text-black text-sm xl:text-base font-semibold hover:underline cursor-pointer"
                    }
                  >
                    {t("logout")}
                  </h2>
                </li>
              </>
            ) : client?.clientToken ? (
              <>
                <li>
                  <Link
                    to="/client-dashboard"
                    onClick={() => setMenu(false)}
                    className={
                      i18n.languages[0] === "fr"
                        ? "text-black text-xs 2xl:text-sm font-semibold hover:underline"
                        : "text-black text-sm xl:text-base font-semibold hover:underline"
                    }
                  >
                    {t("account")}
                  </Link>
                </li>
                <li>
                  <h2
                    onClick={handleLogout}
                    className={
                      i18n.languages[0] === "fr"
                        ? "text-black text-xs 2xl:text-sm font-semibold hover:underline cursor-pointer"
                        : "text-black text-sm xl:text-base font-semibold hover:underline cursor-pointer"
                    }
                  >
                    {t("logout")}
                  </h2>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/client-register"
                    onClick={() => setMenu(false)}
                    className={
                      i18n.languages[0] === "fr"
                        ? "text-black text-xs 2xl:text-sm font-semibold hover:underline"
                        : "text-black text-sm xl:text-base font-semibold hover:underline"
                    }
                  >
                    {t("register_as_client")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/company-register"
                    onClick={() => setMenu(false)}
                    className={
                      i18n.languages[0] === "fr"
                        ? "text-black text-xs 2xl:text-sm font-semibold hover:underline"
                        : "text-black text-sm xl:text-base font-semibold hover:underline"
                    }
                  >
                    {t("register_as_company")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/auth-login"
                    onClick={() => setMenu(false)}
                    className={
                      i18n.languages[0] === "fr"
                        ? "text-black text-xs 2xl:text-sm font-semibold hover:underline"
                        : "text-black text-sm xl:text-base font-semibold hover:underline"
                    }
                  >
                    {t("login")}
                  </Link>
                </li>
              </>
            )}
            <li className="w-8/12">
              <select
                name=""
                id=""
                onChange={handleLanguageChange}
                className="border border-gray-200 px-1 py-1 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-2 md:px-4 w-full"
              >
                <option value="gr">German</option>
                <option value="en">English</option>
                <option value="fr">French</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

MobileNav.propTypes = {
  menu: PropTypes.bool,
  setMenu: PropTypes.func,
  menuref: PropTypes.any,
  seller: PropTypes.any,
  handleLogout: PropTypes.any,
  client: PropTypes.any,
  headerlogo: PropTypes.any,
};

export default MobileNav;
