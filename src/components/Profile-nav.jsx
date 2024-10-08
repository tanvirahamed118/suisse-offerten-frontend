import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import PropTypes from "prop-types";

function ProfileNav({ menu, setMenu, menuref }) {
  return (
    <section
      className={
        menu
          ? "w-64 h-screen bg-white border-l border-gray-200 absolute top-0 right-0 active"
          : "w-64 h-screen bg-white border-l border-gray-200 absolute top-0 right-0 inactive"
      }
      ref={menuref}
    >
      <div className="p-5">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="" className="w-24" />
          </Link>
          <i
            className="fa-solid fa-xmark text-2xl hover:text-black cursor-pointer"
            onClick={() => setMenu(false)}
          ></i>
        </div>
        <ul className="flex flex-col gap-3 mt-8">
          <li>
            <Link
              to="/login"
              className="text-gray-500 text-base font-normal hover:text-black"
            >
              login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="text-gray-500 text-base font-normal hover:text-black"
            >
              register
            </Link>
          </li>
          <li>
            <Link
              to="/enter-request"
              className="text-gray-500 text-base font-normal hover:text-black"
            >
              Enter company
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

ProfileNav.propTypes = {
  menu: PropTypes.bool,
  setMenu: PropTypes.func,
  menuref: PropTypes.any,
};

export default ProfileNav;
