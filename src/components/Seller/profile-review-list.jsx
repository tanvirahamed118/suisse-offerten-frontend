import { useParams } from "react-router-dom";
import { useGetOneSellerQuery } from "../../redux/rtk/features/auth/seller/authApi";
import DashboardReviews from "./Dashboard-reviews";
import { useTranslation } from "react-i18next";

function ProfileReviewList() {
  const params = useParams();
  const id = params.id;
  const { data } = useGetOneSellerQuery(id);
  const { t } = useTranslation();
  const {
    companyName,
    UIDNumber,
    leagalForm,
    streetNo,
    postalCode,
    location,
    lastName,
    firstName,
    companyDescription,
    foundingYear,
    companyInfo,
    website,
    dirfirstname,
    dirlastname,
    emailVerify,
    uidVerify,
    locationVerify,
    companyTitle,
  } = data || {};

  return (
    <section>
      <div className="container py-10">
        <div className="flex lg:flex-row flex-col-reverse gap-0 lg:gap-10">
          <div className="w-full lg:w-8/12 flex flex-col gap-3">
            <div>
              <h2 className="text-xl md:text-4xl text-black font-normal">
                {t("about")} {companyName}
              </h2>
              <p className="text-sm text-black font-normal pt-3">
                {companyDescription ? companyDescription : t("not_available")}
              </p>
            </div>
            <DashboardReviews />
          </div>
          <div className="w-full lg:w-4/12">
            {foundingYear && (
              <h2 className="text-black text-base font-normal">
                <span className="font-bold">{t("foundation_year")}:</span>{" "}
                {foundingYear}
              </h2>
            )}
            {website && (
              <h2 className="text-black text-base font-normal">
                <span className="font-bold">{t("website")}:</span> {website}
              </h2>
            )}
            {companyTitle && (
              <h2 className="text-black text-base font-normal">
                <span className="font-bold">{t("company_title")}:</span>{" "}
                {companyTitle}
              </h2>
            )}
            <div className="flex flex-col gap-2 py-10">
              <div className="flex gap-2 items-start">
                <span className="flex gap-1 items-start w-[85px]">
                  <i className="fa-solid fa-wand-magic-sparkles"></i>
                  <p className="text-base text-black font-bold">
                    {t("infos")} :
                  </p>
                </span>
                <div className="w-full flex items-center flex-wrap gap-2">
                  {companyInfo?.length > 0 ? (
                    companyInfo?.map((item, index) => (
                      <span key={index} className="">
                        <p className="text-[#111111] text-sm font-normal">
                          {item}
                          {index < companyInfo.length - 1 && " - "}
                        </p>
                      </span>
                    ))
                  ) : (
                    <p>{t("not_available")}</p>
                  )}
                </div>
              </div>
              <span className="flex gap-2 items-center">
                <span className="flex gap-1 items-center">
                  <i className="fa fa-building"></i>
                  <p className="text-base text-black font-bold">
                    {t("name")} :
                  </p>
                </span>
                <p className="text-base text-black font-normal">
                  {companyName ? companyName : t("not_available")}
                </p>
              </span>
              <span className="flex gap-2 items-center">
                <span className="flex gap-1 items-center">
                  <i className="fa-solid fa-user-tie"></i>
                  <p className="text-base text-black font-bold capitalize">
                    {t("managing_director")} :
                  </p>
                </span>
                <p className="text-base text-black font-normal">
                  {firstName ? firstName + " " + lastName : t("not_available")}
                </p>
              </span>
              <span className="flex gap-2 items-center">
                <span className="flex gap-1 items-center">
                  <i className="fa fa-user"></i>
                  <p className="text-base text-black font-bold">
                    {t("contact_person")} :
                  </p>
                </span>
                <p className="text-base text-black font-normal">
                  {dirfirstname
                    ? dirfirstname + " " + dirlastname
                    : t("not_available")}
                </p>
              </span>
              <span className="flex gap-2 items-start">
                <span className="flex gap-1 items-center w-auto md:w-32">
                  <i className="fa-solid fa-location-dot"></i>
                  <p className="text-base text-black font-bold">
                    {t("location")} :
                  </p>
                </span>
                <p className="text-base text-black font-normal">
                  {location
                    ? streetNo + " " + postalCode + " - " + location
                    : t("not_available")}
                </p>
              </span>
              <span className="flex gap-2 items-center">
                <span className="flex gap-1 items-center">
                  <i className="fa fa-gavel"></i>
                  <p className="text-base text-black font-bold">
                    {t("legal_form")} :
                  </p>
                </span>
                <p className="text-base text-black font-normal">
                  {leagalForm ? leagalForm : t("not_available")}
                </p>
              </span>
              <span className="flex gap-2 items-center">
                <span className="flex gap-1 items-center">
                  <i className="fa fa-briefcase"></i>
                  <p className="text-base text-black font-bold">
                    {t("vat_number")} :
                  </p>
                </span>
                <p className="text-base text-black font-normal">
                  CHE-{UIDNumber ? UIDNumber : "xxx-xxx-xxx"}
                </p>
              </span>
              <span className="flex gap-2 items-center">
                <span className="flex gap-1 items-center">
                  <i className="fa-solid fa-user-lock"></i>
                  <p className="text-base text-black font-bold">
                    {t("verifications")} :
                  </p>
                </span>
                <span className="flex gap-1 items-center">
                  {emailVerify ? (
                    <i className="fa-solid fa-envelope-circle-check text-xm text-purple-500"></i>
                  ) : (
                    <i className="fa-solid fa-envelope-circle-check text-base text-gray-400"></i>
                  )}
                  {uidVerify ? (
                    <i className="fa-solid fa-passport text-base text-blue-500"></i>
                  ) : (
                    <i className="fa-solid fa-passport text-base text-gray-400"></i>
                  )}
                  {locationVerify ? (
                    <i className="fa-solid fa-location-dot text-base text-[#FF00FE]"></i>
                  ) : (
                    <i className="fa-solid fa-location-dot text-base text-gray-400"></i>
                  )}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileReviewList;
