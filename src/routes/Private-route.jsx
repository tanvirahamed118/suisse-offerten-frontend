import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ role }) => {
  const auth = JSON.parse(localStorage.getItem(role));

  // Check if the user is authenticated based on the role
  if (auth?.sellerToken) {
    return <Outlet />;
  } else if (auth?.clientToken) {
    return <Outlet />;
  } else {
    return <Navigate to={`/${role}-login`} />;
  }
};
PrivateRoute.propTypes = {
  role: PropTypes.any,
};
export default PrivateRoute;
