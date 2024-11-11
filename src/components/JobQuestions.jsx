import PropTypes from "prop-types";

function JobQuestions({ data }) {
  let jobDes;
  if (data) {
    jobDes = JSON.parse(data?.jobQuestions);
  }

  return (
    <ul className="p-5 border border-gray-200 rounded-md flex flex-col gap-6 question-list">
      {data &&
        Object.entries(jobDes).map(([key, value], index) => {
          let displayValue;
          if (Array.isArray(value)) {
            displayValue = value.join(", ");
          } else if (typeof value === "object" && value !== null) {
            displayValue = Object.entries(value).map(([subKey, subValue]) => (
              <div key={subKey}>{`${subKey}: ${subValue}`}</div>
            ));
          } else {
            displayValue = value;
          }

          return (
            <li key={index}>
              <h3 className="text-black text-base font-medium capitalize">
                {key.replace(/_/g, " ")}
              </h3>
              <p className="text-black text-base font-normal capitalize">
                {displayValue}
              </p>
            </li>
          );
        })}
    </ul>
  );
}
JobQuestions.propTypes = {
  data: PropTypes.object,
};
export default JobQuestions;
