import { Link } from "react-router-dom";
import { useGetAllPerticipationByQuery } from "../redux/rtk/features/perticipation/perticipation";
import PerticipationLoading from "./loading/Perticipation-loading";
import PropTypes from "prop-types";

function Perticipation({ id }) {
  const limit = 5;
  const page = 1;
  const { data, isError, isLoading, isSuccess, error } =
    useGetAllPerticipationByQuery({
      page,
      limit,
      id: id,
    });

  //   decide what to render
  let content;
  if (isLoading) {
    content = (
      <div className="w-full">
        <PerticipationLoading />
        <PerticipationLoading />
      </div>
    );
  }
  if (isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && data?.participations?.length === 0) {
    content = <p>No Data Found!</p>;
  }
  if (!isLoading && !isError && isSuccess && data?.participations?.length > 0) {
    content = data?.participations?.map((item) => {
      const {
        profilePic,
        username,
        companyName,
        reviewRating,
        totalReview,
        reviewPercent,
        leagalForm,
        _id,
        emailVerify,
        uidVerify,
        locationVerify,
      } = item?.sellerData || {};

      return (
        <div key={item._id} className="flex justify-between items-start">
          <div className="flex md:flex-row flex-col gap-5 items-center">
            <div>
              {profilePic ? (
                <img
                  src={profilePic}
                  alt=""
                  className="w-24 h-20 rounded-md "
                />
              ) : (
                <p className="text-5xl font-bold rounded-md uppercase bg-gray-100 w-24 h-24 flex justify-center items-center">
                  {username?.slice(0, 1)}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <span className="flex gap-2 items-center">
                <Link
                  to={`/seller-review-profile/${_id}`}
                  className="text-[#0050b2] text-xl font-medium hover:underline capitalize"
                >
                  {username?.slice(0, 50)}
                </Link>
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
              <div className="flex gap-3 items-center">
                <span className="flex gap-2 items-center">
                  <i className="fa-solid fa-star text-[#feb40a] text-xl"></i>
                  <p className="text-base font-medium text-black">
                    {reviewRating ? reviewRating : 0} / 5
                  </p>
                </span>
                <i className="fa-solid fa-circle text-[4px]"></i>
                <p className="text-base font-medium text-black">
                  {totalReview ? totalReview : 0} reviews
                </p>
                <i className="fa-solid fa-circle text-[4px]"></i>
                <p className="text-base font-medium text-black">
                  {reviewPercent >= 80
                    ? `${reviewPercent}% Positive`
                    : reviewPercent >= 60
                    ? `${reviewPercent}% Avarage`
                    : `${reviewPercent}% Poor`}
                </p>
              </div>
              <p className="text-black text-base font-normal capitalize">
                {companyName ? companyName : ""}
              </p>
            </div>
          </div>
          <p className="text-base font-medium text-black">
            {leagalForm ? leagalForm : ""}
          </p>
        </div>
      );
    });
  }
  return (
    data?.participations?.length > 0 && (
      <div className="mt-5">
        <div className="w-full border border-gray-300 rounded-md p-5">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-md md:text-2xl text-black font-bold capitalize">
              Participating providers
            </h2>
            <h2 className="text-sm md:text-lg text-black font-bold capitalize">
              Leagal Form
            </h2>
          </div>
          <div className="flex flex-col gap-10 py-5">{content}</div>
        </div>
      </div>
    )
  );
}
Perticipation.propTypes = {
  id: PropTypes.string,
};
export default Perticipation;
