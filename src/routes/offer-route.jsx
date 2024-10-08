import { Navigate, Outlet } from "react-router-dom";

const OfferRoute = () => {
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);

  return seller?.sellerToken ? <Outlet /> : <Navigate to="/" />;
};

export default OfferRoute;
