import { Outlet } from "react-router-dom";
import DashboardNav from "../../components/Seller/Dashboard-nav";
import { useGetOneSellerQuery } from "../../redux/rtk/features/auth/seller/authApi";
import { useTranslation } from "react-i18next";

function SellerDashboard() {
  const { t } = useTranslation();
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const id = seller?.seller?._id;
  const { data, isLoading } = useGetOneSellerQuery(id);
  const { uidVerify, locationVerify } = data || {};

  return (
    <section>
      <div className="container py-5">
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="w-full lg:w-3/12">
            <DashboardNav />
          </div>
          <div className="w-full lg:w-9/12">
            <div className="flex flex-col gap-3">
              <div className={`${uidVerify || isLoading ? "hidden" : "block"}`}>
                <div className="bg-[#F5F6F7] p-5 rounded-md flex gap-2 items-start">
                  <i className="fa-solid fa-circle-exclamation text-red-500 text-2xl"></i>
                  <p className="text-black font-normal text-base">
                    {t("verify_uid_warn")}
                  </p>
                </div>
              </div>

              <div
                className={`${
                  locationVerify || isLoading ? "hidden" : "block"
                }`}
              >
                <div className="bg-[#F5F6F7] p-5 rounded-md flex gap-2 items-start mb-5">
                  <i className="fa-solid fa-circle-exclamation text-red-500 text-2xl"></i>
                  <p className="text-black font-normal text-base">
                    {t("verify_address_warn")}
                  </p>
                </div>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellerDashboard;
