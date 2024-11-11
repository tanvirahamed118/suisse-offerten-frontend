import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import StarRating from "../../components/Star-rating";

import toast, { Toaster } from "react-hot-toast";

import { useTranslation } from "react-i18next";
import { useUpdateSellerAddressMutation } from "../../redux/rtk/features/auth/seller/authApi";

function AddressPopup({ setIsShow, data, isShow }) {
  const { t } = useTranslation();
  const fileRef = useRef();
  const [addressFile, setAddressFile] = useState("");
  const [formData, setFormData] = useState({
    streetNo: "",
    postalCode: 0,
    location: "",
  });
  const { streetNo, postalCode, companyName, location, reviewRating, _id } =
    formData || {};
  const id = _id;
  const [
    updateSellerAddress,
    { data: createData, isLoading, isSuccess, isError, error },
  ] = useUpdateSellerAddressMutation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setAddressFile(e.target.files[0]);
  };

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isShow]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(createData?.message);
      setFormData({
        streetNo: "",
        postalCode: 0,
        location: "",
      });
      clearFiles();
    }
  }, [createData, isError, isSuccess, error]);

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const offerData = new FormData();
    offerData.append("addressFile", addressFile);
    Object.keys(formData).forEach((key) => {
      offerData.append(key, formData[key]);
    });
    updateSellerAddress({ offerData, id });
  };

  const clearFiles = () => {
    setAddressFile([]);
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  return (
    <section>
      <div className="py-10 flex justify-center items-center w-full h-screen absolute bg-[#000000e1] top-0 right-0">
        <div
          className={`relative w-[95%] m-auto md:w-[600px] h-auto rounded-md  bg-white p-5 ${
            isShow ? "zoom-animation" : ""
          }`}
        >
          <div>
            <h2 className="text-xl font-bold text-black border-b border-gray-300 pb-5 mb-5">
              {t("update_address")}
            </h2>
          </div>

          <div className="bg-white w-full flex flex-col gap-5 mt-5">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-black text-xl font-medium capitalize">
                {companyName}
              </h2>
              <StarRating rating={reviewRating} />

              <p className="text-[#6c757d] text-base font-semibold py-3">
                {t("from")} {location ? location : t("not_available")}
              </p>
            </div>
            <form
              action=""
              className=" flex flex-col gap-10"
              onSubmit={handleSubmit}
            >
              <div className="flex gap-5 flex-col">
                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor="streetNo"
                    className="text-black text-base font-normal"
                  >
                    {t("steet_address")}
                  </label>
                  <input
                    type="text"
                    name="streetNo"
                    id="streetNo"
                    required
                    value={streetNo}
                    onChange={handleChange}
                    className="md:w-full border border-gray-200 py-2 px-3 rounded-md outline-[#C3DEED] focus:outline outline-4 text-base text-black font-normal"
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor="postalCode"
                    className="text-black text-base font-normal"
                  >
                    {t("post_code")}
                  </label>
                  <input
                    type="number"
                    name="postalCode"
                    id="postalCode"
                    required
                    value={postalCode}
                    onChange={handleChange}
                    className="md:w-full border border-gray-200 py-2 px-3 rounded-md outline-[#C3DEED] focus:outline outline-4 text-base text-black font-normal"
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor="location"
                    className="text-black text-base font-normal"
                  >
                    {t("your_country")}
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    required
                    value={location}
                    onChange={handleChange}
                    className="md:w-full border border-gray-200 py-2 px-3 rounded-md outline-[#C3DEED] focus:outline outline-4 text-base text-black font-normal"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col gap-1 offer-files justify-center">
                <label
                  htmlFor="addressFile"
                  className="dropContainer cursor-pointer"
                >
                  <i className="fa-solid fa-upload"></i>
                  <p>{t("browse_file")}</p>
                  <input
                    type="file"
                    ref={fileRef}
                    name="addressFile"
                    id="addressFile"
                    className="text-center w-28"
                    onChange={handleFileChange}
                  />
                </label>
              </div>

              <div className="flex gap-3 items-center">
                <button
                  type="submit"
                  className="bg-[#FFAA00] text-black font-bold rounded-md text-md py-3 px-5 flex gap-2 items-center cursor-pointer"
                >
                  {" "}
                  {isLoading ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 animate-spin"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                      <p>{t("loading")}</p>
                    </>
                  ) : (
                    t("save")
                  )}
                </button>
              </div>
            </form>
          </div>
          <i
            onClick={() => setIsShow(false)}
            className="fa-solid fa-xmark absolute top-5 right-5 text-black border border-gray-300 p-2 rounded-full cursor-pointer hover:bg-gray-300"
          ></i>
        </div>
      </div>
      <Toaster />
    </section>
  );
}

AddressPopup.propTypes = {
  data: PropTypes.object,
  isShow: PropTypes.bool,
  setIsShow: PropTypes.func,
};

export default AddressPopup;
