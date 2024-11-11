import { useEffect, useState } from "react";
import JobDescription from "../../components/client/Job-description";
import Rejected from "../../components/client/Rejected";
import TabMenu from "../../components/client/Tab-menu";
import Offering from "../../components/client/offering";
import { Link, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  chosePlaceBid,
  choseRejectBid,
} from "../../redux/rtk/features/filter/perticipationSlice";
import { useTranslation } from "react-i18next";
import { useGetOneJobQuery } from "../../redux/rtk/features/job/jobApi";

function Proposal() {
  const [activeTab, setActiveTab] = useState("Offering");
  const { t } = useTranslation();
  const params = useParams();
  const id = params.id;
  const { data } = useGetOneJobQuery(id);
  const { jobNumber, jobTitle, placeBid, rejectBid } = data || {};
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(chosePlaceBid(placeBid));

    dispatch(choseRejectBid(rejectBid));
  }, [dispatch, rejectBid, placeBid]);

  return (
    <section>
      <div className="container py-10">
        <div>
          <div className="flex gap-3 items-center mb-5">
            <Link
              className="text-blue-500 font-normal text-sm hover:underline"
              to="/client-dashboard"
            >
              {t("dashboard")}
            </Link>
            <i className="fa-solid fa-angles-right"></i>
            <p className="text-blue-500 font-normal text-sm underline">
              {jobTitle?.slice(0, 40)}
            </p>
          </div>
          <div className="flex md:flex-row flex-col justify-between items-start gap-5 md:items-center">
            <h2 className="text-black text-base md:text-xl font-bold">
              {jobTitle?.slice(0, 80)}...
            </h2>
            <h2 className="text-black text-base md:text-xl font-bold">
              {t("order_number")}: {jobNumber}
            </h2>
          </div>
          <TabMenu
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            data={data}
          />

          {activeTab === "Offering" && <Offering activeTab={activeTab} />}
          {activeTab === "Rejected" && <Rejected activeTab={activeTab} />}
          {activeTab === "Job Description" && <JobDescription data={data} />}
        </div>
      </div>
    </section>
  );
}

export default Proposal;
