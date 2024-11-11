import { useState } from "react";
import ClientNews from "../../components/client/Client-news";
import ClientProfile from "../../components/client/Client-profile";
import ClientReview from "../../components/client/Client-review";
import ProposalTab from "../../components/client/Proposal-tab";
import { Link, useParams } from "react-router-dom";
import { useGetOneSellerQuery } from "../../redux/rtk/features/auth/seller/authApi";
import StarRating from "../../components/Star-rating";
import ClientProposal from "../../components/client/Client-proposal";
import { useTranslation } from "react-i18next";

function ProposalProfile() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("news");
  const { sellerId, jobId } = useParams();
  const id = sellerId;
  const { data } = useGetOneSellerQuery(id);

  const {
    companyName,
    reviewRating,
    totalReview,
    reviewPercent,
    location,
    emailVerify,
    uidVerify,
    locationVerify,
    postalCode,
    streetNo,
    companyLogo,
  } = data || {};
  const floorReviewPercent = parseFloat(reviewPercent?.toFixed(1));

  return (
    <section>
      <div className="container py-10">
        <div className="w-full">
          <div className="w-full">
            <ul>
              <li className="text-sm font-normal text-[#7f7f7f]">
                <i className="fa-solid fa-angles-left"></i>
                <Link to={`/proposal/${jobId}`} className="hover:underline">
                  {t("back_offers")}
                </Link>
              </li>
            </ul>
            <div className="flex gap-2 items-center">
              {companyLogo ? (
                <img
                  src={companyLogo}
                  alt=""
                  className="w-16 h-16 object-cover"
                />
              ) : (
                <p className="text-black bg-gray-200 flex justify-center items-center text-4xl capitalize w-16 h-16">
                  {companyName?.slice(0, 1)}
                </p>
              )}
              <div className="py-5">
                <h2 className="text-black text-lg font-bold capitalize">
                  {companyName}
                </h2>
                <a href="" className="flex gap-2 pb-2">
                  <StarRating rating={reviewRating} />
                  <p className="text-sm text-black font-normal">
                    ({totalReview ? totalReview : 0} {t("reviews")},{" "}
                    {floorReviewPercent >= 80
                      ? `${floorReviewPercent}% ${t("positive")}`
                      : floorReviewPercent >= 60
                      ? `${floorReviewPercent}% ${t("avarage")}`
                      : `${floorReviewPercent}% ${t("poor")}`}
                    )
                  </p>
                </a>
                <span className="flex gap-1 items-center">
                  {emailVerify ? (
                    <i className="fa-solid fa-envelope-circle-check text-xm text-purple-500"></i>
                  ) : (
                    <i className="fa-solid fa-envelope-circle-check text-xm text-gray-400"></i>
                  )}
                  {uidVerify ? (
                    <i className="fa-solid fa-passport text-sm text-blue-500"></i>
                  ) : (
                    <i className="fa-solid fa-passport text-sm text-gray-400"></i>
                  )}
                  {locationVerify ? (
                    <i className="fa-solid fa-location-dot text-sm text-[#FF00FE]"></i>
                  ) : (
                    <i className="fa-solid fa-location-dot text-sm text-gray-400"></i>
                  )}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="flex gap-2 items-center">
                <i className="fa-solid fa-location-dot"></i>
                <p className="text-black text-sm capitalize md:text-base font-medium">
                  {t("from")} -{" "}
                  {streetNo
                    ? streetNo + " " + postalCode + " - " + location
                    : t("not_available")}
                </p>
              </span>
            </div>
            <ProposalTab setActiveTab={setActiveTab} activeTab={activeTab} />
            {activeTab === "news" && (
              <ClientNews jobId={jobId} sellerId={sellerId} />
            )}
            {activeTab === "profile" && <ClientProfile data={data} />}
            {activeTab === "reviews" && <ClientReview sellerId={sellerId} />}
            {activeTab === "proposal" && (
              <ClientProposal jobId={jobId} sellerId={sellerId} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProposalProfile;
