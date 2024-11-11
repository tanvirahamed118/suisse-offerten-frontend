import { useTranslation } from "react-i18next";
import PerticipationTab from "./Perticipation-tab";
import { useState } from "react";
import PerticipationArchived from "./Perticipation-archived";
import AllPerticipation from "./All-perticipation";

function Perticipation() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="">
      <div className="">
        <h2 className="text-black text-xl font-bold">
          {t("participation_contact_requests")}
        </h2>
        <PerticipationTab activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "all" && <AllPerticipation />}
        {activeTab === "reject" && <PerticipationArchived />}
      </div>
    </div>
  );
}

export default Perticipation;
