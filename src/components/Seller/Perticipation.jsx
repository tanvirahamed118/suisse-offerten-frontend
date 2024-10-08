import { useTranslation } from "react-i18next";
import PerticipationTab from "./Perticipation-tab";
import { useState } from "react";
import PerticipationArchived from "./Perticipation-archived";
import AllPerticipation from "./All-perticipation";
import { useGetAllProposalsQuery } from "../../redux/rtk/features/proposal/proposalApi";

function Perticipation() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const sellerId = seller?.seller?._id;
  const [page, setPage] = useState(1);
  const limit = 20;
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllProposalsQuery({ sellerId, page, limit });

  return (
    <div className="">
      <div className="">
        <h2 className="text-black text-xl font-bold">
          {t("participation_contact_requests")}
        </h2>
        <PerticipationTab activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* <!-- All --> */}
        {activeTab === "all" && (
          <AllPerticipation
            data={data}
            isLoading={isLoading}
            isSuccess={isSuccess}
            isError={isError}
            error={error}
            setPage={setPage}
            page={page}
            limit={limit}
          />
        )}

        {/* <!-- archived --> */}
        {activeTab === "archived" && (
          <PerticipationArchived
            data={data}
            isLoading={isLoading}
            isSuccess={isSuccess}
            isError={isError}
            error={error}
            setPage={setPage}
            page={page}
            limit={limit}
          />
        )}
      </div>
    </div>
  );
}

export default Perticipation;
