import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetAllMessageByClientQuery } from "../../redux/rtk/features/message/messageApi";
import { useGetAllProposalsDefaultQuery } from "../../redux/rtk/features/proposal/proposalApi";

function ClientDashboard() {
  const { t } = useTranslation();
  const clientAuth = localStorage.getItem("client");
  const client = JSON.parse(clientAuth);
  const id = client?.client?._id;

  const { data } = useGetAllMessageByClientQuery(id);
  const { data: getData } = useGetAllProposalsDefaultQuery();
  const filterData = data?.filter((item) => item.view === "unseen");
  const filterProp = getData?.filter((item) => item.status === "accept");

  return (
    <section>
      <div className="container py-10">
        <div className="flex gap-5 lg:flex-row flex-col items-start">
          <div className="w-full lg:w-[30%]">
            <ul className="flex flex-col gap-3 border border-gray-200 p-3">
              <li className="flex gap-2">
                <i className="fa fa-file-alt fa-fw"></i>
                <Link
                  to="/client-dashboard"
                  className="text-black text-base font-normal hover:underline flex gap-1"
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
                <i className="fa fa-star fa-fw"></i>
                <Link
                  to="/client-dashboard/review"
                  className="text-black text-base font-normal hover:underline flex gap-1"
                >
                  {t("reviews")}
                  {filterProp?.length > 0 && (
                    <p className="text-white bg-red-400 w-4 h-4 text-sm flex justify-center items-center rounded-full">
                      {filterProp?.length}
                    </p>
                  )}
                </Link>
              </li>
              <li className="flex gap-2">
                <i className="fa fa-user fa-fw"></i>
                <Link
                  to="/client-dashboard/profile"
                  className="text-black text-base font-normal hover:underline"
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
