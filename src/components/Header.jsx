import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo-text.png";
import MobileNav from "./Mobile-nav";
import { useEffect, useRef, useState } from "react";
import ProfileNav from "./Profile-nav";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";
import { useGetAllSettingQuery } from "../redux/rtk/features/setting/settingApi";

function Header() {
  const { t, i18n } = useTranslation();
  const sellerAuth = localStorage.getItem("seller");
  const clientAuth = localStorage.getItem("client");
  const navigate = useNavigate();
  const seller = JSON.parse(sellerAuth);
  const client = JSON.parse(clientAuth);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const menuref = useRef();
  const searchref = useRef();
  const { data } = useGetAllSettingQuery();

  const { headerlogo } = data || {};
  useEffect(() => {
    let handeler = (e) => {
      if (menuref.current !== null) {
        if (!menuref.current.contains(e.target)) {
          setMenu(false);
        }
      } else {
        return null;
      }
      if (!searchref.current.contains(e.target)) {
        setSearch(false);
      }
    };
    document.addEventListener("mousedown", handeler);
  }, []);
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

  const handleLogout = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/auth-login");
      toast.success("Logout Sucessfull");
    }, 1000);
    setMenu(false);
  };

  return (
    <header className="">
      <div className="xl:hidden flex justify-between items-center p-4">
        <button onClick={() => setMenu(!menu)}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <Link to="/">
          <img src={Logo} alt="" className="w-32 rounded-lg" />
        </Link>
        <select
          name=""
          id=""
          onChange={handleLanguageChange}
          className="border border-gray-200 px-1 py-1 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-2 md:px-4"
        >
          <option value="gr">German</option>
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </div>
      <div
        className={
          i18n.languages[0] === "fr"
            ? "hidden xl:block relative h-20"
            : "hidden xl:block relative h-20"
        }
      >
        <div className="fixed w-full h-20 bg-white shadow-md z-10">
          <div className="container gap-4 items-center flex w-full justify-between h-full">
            <Link to="/">
              <img
                src={Logo}
                alt=""
                className={i18n.languages[0] === "fr" ? "w-40" : "w-40 xl:w-60"}
              />
            </Link>
            <div className="">
              <ul className="flex gap-6 xl:gap-4 items-center">
                {!seller?.sellerToken && (
                  <li>
                    <Link
                      to="/enter-request"
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
                    className={
                      i18n.languages[0] === "fr"
                        ? "text-black text-xs 2xl:text-sm font-semibold hover:underline"
                        : "text-black text-sm xl:text-base font-semibold hover:underline"
                    }
                  >
                    {t("search_job")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cost-calculator"
                    className={
                      i18n.languages[0] === "fr"
                        ? "text-black text-xs 2xl:text-sm font-semibold hover:underline"
                        : "text-black text-sm xl:text-base font-semibold hover:underline"
                    }
                  >
                    {t("cost_schedule")}
                  </Link>
                </li>

                {seller?.sellerToken ? (
                  <>
                    <li>
                      <Link
                        to="/seller-dashboard"
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
                <li>
                  <select
                    name=""
                    id=""
                    onChange={handleLanguageChange}
                    className="border border-gray-200 px-2 py-1 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-2 md:px-4"
                  >
                    <option value="gr">German</option>
                    <option value="en">English</option>
                    <option value="fr">France</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <MobileNav
        menu={menu}
        setMenu={setMenu}
        menuref={menuref}
        seller={seller}
        handleLogout={handleLogout}
        client={client}
        headerlogo={Logo}
      />
      <ProfileNav menu={search} setMenu={setSearch} menuref={searchref} />
      <Toaster />
    </header>
  );
}

export default Header;
