import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetAllOfferByClientQuery } from "../../redux/rtk/features/offer/offerApi";

function ClientDashboard() {
  const { t } = useTranslation();
  const clientAuth = localStorage.getItem("client");
  const client = JSON.parse(clientAuth);
  const clientId = client?.client?._id;

  const { data } = useGetAllOfferByClientQuery({
    clientId,
    reviewSubmited: "pending",
  });
  const filterData = data?.offers?.filter((item) => item.view === "unseen");
  const filterreview = data?.offers?.filter((item) => item.status === "accept");

  return (
    <section>
      <div className="container py-10">
        <div className="flex gap-5 lg:flex-row flex-col items-start">
          <div className="w-full lg:w-[30%]">
            <ul className="flex flex-col gap-3 border border-gray-200 p-5 rounded-xl">
              <li className="flex gap-2">
                <Link
                  to="/client-dashboard"
                  className="text-black text-base font-bold hover:underline flex gap-1"
                >
                  {t("requests")}
                  {filterData?.length > 0 && (
                    <p className="text-white bg-red-400 w-4 h-4 text-sm flex justify-center items-center rounded-full">
                      {filterData?.length}
                    </p>
                  )}
                </Link>
              </li>
              <li className="flex gap-2">
                <Link
                  to="/client-dashboard/review"
                  className="text-black text-base font-bold hover:underline flex gap-1"
                >
                  {t("reviews")}
                  {filterreview?.length > 0 && (
                    <p className="text-white bg-red-400 w-4 h-4 text-sm flex justify-center items-center rounded-full">
                      {filterreview?.length}
                    </p>
                  )}
                </Link>
              </li>
              <li className="flex gap-2">
                <Link
                  to="/client-dashboard/profile"
                  className="text-black text-base font-bold hover:underline"
                >
                  {t("personal_information")}
                </Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default ClientDashboard;
