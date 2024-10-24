import PropTypes from "prop-types";

import { useTranslation } from "react-i18next";

function ArchivedPopup({ isShow, setIsShow }) {
  const { t } = useTranslation();

  return (
    <section>
      <div className="py-10 flex justify-center items-center w-full h-screen absolute bg-[#000000e1] top-0 right-0">
        <div
          className={`relative w-[95%] m-auto md:w-[600px] h-auto border-[12px] rounded-md border-[#000000fb] bg-white p-5 ${
            isShow ? "zoom-animation" : ""
          }`}
        >
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-medium text-[#111111]">
              {t("archived_notify")}
            </h2>
            <p className="text-base font-medium text-red-500">
              {t("archived_des")}
            </p>
            <div className="flex gap-5 items-center">
              <button
                onClick={() => setIsShow(false)}
                className="flex gap-1 items-center text-white text-base font-normal bg-[#111111] py-2 w-full justify-center rounded-md"
              >
                {t("exit")}
              </button>
              <button className="flex gap-1 items-center text-white text-base font-normal bg-[#111111] py-2 w-full justify-center rounded-md">
                {t("archive")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ArchivedPopup.propTypes = {
  setIsShow: PropTypes.func.isRequired,
  isShow: PropTypes.any,
  id: PropTypes.any,
  jobId: PropTypes.any,
};

export default ArchivedPopup;
