import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetOneSellerQuery } from "../../redux/rtk/features/auth/seller/authApi";
import StarRating from "../Star-rating";

function ProfileReview() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const { data } = useGetOneSellerQuery(id);
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const {
    companyName,
    totalReview,
    companyCover,
    companyLogo,
    emailVerify,
    uidVerify,
    locationVerify,
    reviewPercent,
    reviewRating,
  } = data || {};

  const floorReviewPercent = parseFloat(reviewPercent?.toFixed(1));

  const handleBack = () => {
    if (location.state?.from === "seller-dashboard") {
      navigate("/seller-dashboard");
    } else {
      navigate(-1);
    }
  };

  return (
    <section>
      <div className="container py-5">
        <div>
          <ul className="flex gap-2 pb-2">
            <li>
              <button
                className="text-base font-normal text-[#3097d1] hover:underline capitalize"
                onClick={handleBack}
              >
                {t("back")}
              </button>
            </li>
            <li>
              <i className="fa-solid fa-angles-right text-xs text-black"></i>
            </li>
            <li>
              <Link className="text-base font-normal text-[#3097d1] hover:underline">
                {t("preview_profile")}
              </Link>
            </li>
          </ul>
          <div className="review-img h-72 flex items-end justify-between relative rounded-md">
            <img
              src={companyCover}
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
            />
            <div className="bg-[#00000080] w-full flex flex-col lg:flex-row rounded-b-md rounded-l-md items-center justify-between py-4 px-5 absolute bottom-0 left-0 gap-3 md:gap-0">
              <div className="flex gap-5 items-center">
                {companyLogo ? (
                  <img
                    src={companyLogo}
                    alt=""
                    className="w-20 h-20 object-cover lg:block rounded-full"
                  />
                ) : (
                  <p className="text-5xl uppercase bg-white text-[#111111] rounded-md p-3">
                    {companyName?.slice(0, 1)}
                  </p>
                )}
                <div className="flex flex-col gap-2">
                  <div className="flex gap-3 items-center">
                    <h2 className="text-xl lg:text-4xl text-white font-bold capitalize">
                      {companyName}
                    </h2>
                    <span className="flex gap-1 items-center bg-white px-2 py-1 rounded-lg">
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
                  </div>
                  <a href="#" className="flex gap-2 md:flex-row flex-col">
                    <StarRating rating={reviewRating} />
                    <h5 className="text-base text-white font-normal">
                      ({totalReview ? totalReview : 0} {t("reviews")},{" "}
                      {floorReviewPercent >= 80
                        ? `${floorReviewPercent}% ${t("positive")}`
                        : floorReviewPercent >= 60
                        ? `${floorReviewPercent}% ${t("avarage")}`
                        : `${floorReviewPercent}% ${t("poor")}`}
                      )
                    </h5>
                  </a>
                </div>
              </div>
              {!seller?.sellerToken && (
                <Link
                  to="/enter-request"
                  className="bg-[#ff7100] text-white font-normal rounded-md hover:bg-[#D96000] text-lg py-2 px-3"
                >
                  {t("request_an_offer")}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileReview;
