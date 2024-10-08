import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const clientAuth = localStorage.getItem("client");
  const client = JSON.parse(clientAuth);

  return !seller?.sellerToken && !client?.clientToken ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default PublicRoute;
