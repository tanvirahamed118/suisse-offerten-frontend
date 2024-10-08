import PropTypes from "prop-types";

const StarRating = ({ rating = 0 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return (
    <div className="flex items-center">
      {/* Full stars */}
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <i
            key={`full-${index}`}
            className="fa-solid fa-star text-[#FEB40C] text-sm"
          ></i>
        ))}
      {/* Half star */}
      {hasHalfStar && (
        <i className="fa-solid fa-star-half-stroke text-[#FEB40C] text-sm"></i>
      )}
      {/* Empty stars */}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <i
            key={`empty-${index}`}
            className="fa-regular fa-star text-[#FEB40C] text-sm"
          ></i>
        ))}
    </div>
  );
};
StarRating.propTypes = {
  rating: PropTypes.any,
};
export default StarRating;
