import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import date from "../assets/images/about/date.svg";
import search from "../assets/images/about/search.svg";
import JobQuestions from "./JobQuestions";
import ReletedJob from "./ReletedJob";
import OfferRequest from "./Offer-request";
import RecentlyJobs from "./Recently-jobs";
import SingleJobLoading from "./loading/single-job-loading";
import Perticipation from "./Perticipation";
import { useGetAllPerticipationQuery } from "../redux/rtk/features/perticipation/perticipation";
import CommunicationTab from "./Communication-tab";
import ConfirmOffer from "./Confirm-offer";
import SellerOffer from "./Seller-offer";
import jobTime from "../assets/images/about/time.svg";
import Wishlist from "./Wishlist";
import { useGetOneSellerQuery } from "../redux/rtk/features/auth/seller/authApi";

function SingleOfferMoving({ data, isLoading }) {
  const { t } = useTranslation();
  const id = data?._id;
  const location = useLocation();
  const { data: getData } = useGetAllPerticipationQuery(id);
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const clientAuth = localStorage.getItem("client");
  const sellerAuth = localStorage.getItem("seller");
  const client = JSON.parse(clientAuth);
  const seller = JSON.parse(sellerAuth);
  const clientId = client?.client?._id;
  const sellerId = seller?.seller?._id;
  const saverId = sellerId ? sellerId : clientId;
  const { data: sellerData } = useGetOneSellerQuery(sellerId);
  const { credits } = sellerData || {};
  const [active, setActive] = useState(false);
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsPopupOpen(true);
  };
  const filterPerticipation = getData?.filter((item) => {
    return item?.sellerId === seller?.seller?._id && item?.jobId === data?._id;
  });

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedImage(null);
  };
  useEffect(() => {
    setActive(true);
  }, [active]);
  const createdDate = new Date(data?.createdAt);
  const currentDate = new Date();
  const diffInMs = currentDate - createdDate;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInHours = Math.floor(
    (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const formattedDateDifference = `${diffInDays
    .toString()
    .padStart(2, "0")}D ${diffInHours.toString().padStart(2, "0")}h`;

  const handleBack = () => {
    if (
      location.state?.from === "bid-form" ||
      location.state?.from === "proposal-form"
    ) {
      navigate("/search-job");
    } else {
      navigate(-1);
    }
  };

  // decide what to render
  let content;
  if (isLoading) {
    content = <SingleJobLoading />;
  }
  if (!isLoading && data) {
    content = (
      <div className="custom-shadow rounded-xl p-4 md:p-8">
        <h2 className="text-xl md:text-4xl font-bold text-black capitalize">
          {data?.jobTitle}
        </h2>
        <div className="flex justify-between items-start md:items-center py-5 border-b border-gray-200 mb-5">
          <div className="flex flex-wrap gap-5 items-center">
            <span className="flex gap-2 bg-[#ffeae8] py-1 px-2 rounded-md">
              <img src={jobTime} alt="" />
              <h3 className="text-red-500 text-base font-normal">
                {formattedDateDifference}
              </h3>
            </span>
            <p className="text-[#0050b2] text-base font-normal">
              {data?.jobUsername}
            </p>
            <p className="text-black text-base font-normal">
              {t("order_number")}: {data?.jobNumber}
            </p>
          </div>
          {seller?.sellerToken && (
            <Wishlist
              jobId={data?._id}
              saverId={saverId}
              setActive={setActive}
            />
          )}
        </div>
        <p className="text-base text-black font-normal">
          {data?.jobDescription}
        </p>
        <div className="flex flex-wrap gap-2 md:gap-5 py-5">
          {data &&
            data?.jobFiles?.map((item, index) => (
              <img
                key={index}
                src={item}
                alt=""
                className="w-5/12 md:w-3/12 h-24 md:h-36 object-cover rounded-md hover:cursor-pointer"
                onClick={() => handleImageClick(item)}
              />
            ))}
        </div>
        {data && isPopupOpen && selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative w-11/12 md:w-10/12 xl:w-auto">
              <img
                src={selectedImage}
                alt="Full Size"
                className="w-full xl:w-[1000px] h-auto rounded-md"
              />
              <button
                onClick={handleClosePopup}
                className="absolute top-[-10px] right-[-10px] p-1 w-10 h-10 text-white bg-black rounded-full"
              >
                ✕
              </button>
            </div>
          </div>
        )}
        <div>
          <JobQuestions data={data} />

          <div className="flex flex-col gap-2 py-5">
            <span className="flex items-center gap-3">
              <img src={date} alt="" className="w-4" />
              <p className="text-black text-base font-normal">
                {data?.jobCompletionDate}
              </p>
            </span>
            <span className="flex items-center gap-3">
              <img src={search} alt="" className="w-4" />
              <p className="text-black text-base font-normal">
                {data?.jobSiteVisitPossible === "yes"
                  ? "Visit possible"
                  : "Visit not possible"}
              </p>
            </span>
            <span className="flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-[#999999]"></i>
              <p className="text-black text-base font-normal capitalize">
                {data?.jobPostcode + " " + data?.jobLocation}
              </p>
            </span>
          </div>
          <ConfirmOffer
            id={id}
            sellerId={seller?.seller?._id}
            sellerToken={seller?.sellerToken}
          />
          <div className="flex md:flex-row flex-col w-full justify-start items-center py-5 gap-5">
            {seller && (
              <button
                disabled={credits === 0}
                className={` ${
                  credits === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : filterPerticipation?.length > 0
                    ? "cursor-pointer w-full"
                    : "cursor-pointer"
                }`}
              >
                {credits === 0 ? (
                  <div
                    className={
                      filterPerticipation?.length > 0
                        ? "bg-[#f5f8fa] px-10 py-3 rounded-md text-black text-base font-normal text-center cursor-not-allowed w-full"
                        : "bg-[#ff7100] px-10 py-3 rounded-md text-white text-base font-normal text-center hover:bg-[#F25900] w-full"
                    }
                  >
                    <p>
                      {filterPerticipation?.length > 0
                        ? "You perticipate"
                        : t("participate_tender")}
                    </p>
                  </div>
                ) : (
                  <Link
                    to={
                      filterPerticipation?.length > 0
                        ? null
                        : `/search-job/send-bid/${data._id}`
                    }
                    className={
                      filterPerticipation?.length > 0
                        ? "bg-[#f5f8fa] px-10 py-3 rounded-md text-black text-base font-normal text-center cursor-not-allowed block"
                        : "bg-[#ff7100] px-10 py-3 rounded-md text-white text-base font-normal text-center hover:bg-[#F25900] w-full"
                    }
                  >
                    {filterPerticipation?.length > 0
                      ? "You perticipate"
                      : t("participate_tender")}
                  </Link>
                )}
              </button>
            )}
            {seller && filterPerticipation?.length > 0 ? (
              <Link
                to={`/search-job/prepard-bid/${data._id}`}
                className="bg-[#ff7100] px-10 py-3 rounded-md text-white text-base font-normal text-center hover:bg-[#F25900] w-full"
              >
                Prepare offer
              </Link>
            ) : null}
          </div>
          <SellerOffer id={id} sellerId={seller?.seller?._id} />
        </div>
      </div>
    );
  }

  return (
    <section>
      <div className="container py-5">
        <ul className="flex gap-2 pb-2">
          <li className="flex gap-3 items-center">
            <button
              className="text-base font-normal text-[#3097d1] hover:underline capitalize"
              onClick={handleBack}
            >
              {t("back")}
            </button>
            <i className="fa-solid fa-angles-right text-xs text-black"></i>
          </li>
          <li>
            <p className="text-base font-normal text-black">{data?.jobTitle}</p>
          </li>
        </ul>
        <div className="flex lg:flex-row flex-col gap-5 items-start ">
          <div className="w-full lg:w-8/12">
            <div>
              {content}

              <div className="bg-[#fffadf] p-5 rounded-md my-5">
                <p className="text-base font-normal text-black">
                  {t("offer_short_except")}
                </p>
              </div>
              <ReletedJob category={data?.jobCategoryCode} id={data?._id} />
              {seller || client ? <Perticipation id={data?._id} /> : null}
              <CommunicationTab id={data?._id} sellerId={seller?.seller?._id} />
            </div>
          </div>
          <div className="w-full lg:w-4/12 flex flex-col gap-5">
            {!seller?.sellerToken ? <OfferRequest /> : null}
            {seller || client ? <RecentlyJobs /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

SingleOfferMoving.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default SingleOfferMoving;
