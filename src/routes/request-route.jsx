import { Navigate, Outlet } from "react-router-dom";

const RequestRoute = () => {
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);

  return !seller?.sellerToken ? (
    <Outlet />
  ) : (
    <Navigate to="/seller-dashboard" />
  );
};

export default RequestRoute;
