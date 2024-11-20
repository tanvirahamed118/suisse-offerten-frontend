import { useEffect, useState } from "react";
import services from "../../datas/seller-info";
import {
  useGetOneSellerQuery,
  useUpdateSellerCompanyMutation,
  useUpdateSellerPicturesMutation,
} from "../../redux/rtk/features/auth/seller/authApi";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function CompanyProfile() {
  const { t } = useTranslation();
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const { _id, username } = seller?.seller || {};
  const { data } = useGetOneSellerQuery(_id);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState(null);
  const [
    updateSellerPictures,
    {
      data: delData,
      isLoading: delLoading,
      isError: delIsError,
      isSuccess: delSuccess,
      error: delError,
    },
  ] = useUpdateSellerPicturesMutation();
  const [
    updateSellerComany,
    { data: getData, isLoading, isSuccess, isError, error },
  ] = useUpdateSellerCompanyMutation();

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedImage(null);
  };

  const [formData, setFormData] = useState({
    companyDescription: "",
    companyTitle: "",
    companyInfo: [],
    companyLogo: null,
    companyCover: null,
    companyPictures: [],
  });

  useEffect(() => {
    if (data) {
      setFormData({
        ...data,
        companyInfo: data.companyInfo || [],
      });
    }
  }, [data]);

  const {
    companyDescription,
    companyTitle,
    companyInfo,
    companyLogo,
    companyCover,
    companyPictures,
  } = formData;

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "companyTitle") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: e.target.value,
      }));
    } else {
      setFormData((prevState) => {
        const updatedCompanyInfo = checked
          ? [...prevState.companyInfo, name]
          : prevState.companyInfo.filter((item) => item !== name);
        return {
          ...prevState,
          companyInfo: updatedCompanyInfo,
        };
      });
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  const handleDeletePictures = (item, role) => {
    const id = data?._id;
    const url = { item, role };
    if (item) {
      updateSellerPictures({ id, url });
    }
    setName(item);
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => {
      if (name === "companyLogo") {
        return {
          ...prevState,
          companyLogo: files[0],
        };
      } else if (name === "companyCover") {
        return {
          ...prevState,
          companyCover: files[0],
        };
      } else if (name === "companyPictures") {
        return {
          ...prevState,
          companyPictures: Array.from(files),
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("companyDescription", companyDescription);
    formData.append("companyTitle", companyTitle);
    companyInfo.forEach((info) => formData.append("companyInfo[]", info));
    if (companyLogo) formData.append("companyLogo", companyLogo);
    if (companyCover) formData.append("companyCover", companyCover);
    companyPictures.forEach((picture) =>
      formData.append("companyPictures", picture)
    );
    const id = _id;
    updateSellerComany({ formData, id });
    setFormData({
      companyDescription: "",
      companyTitle: "",
      companyInfo: [],
      companyLogo: null,
      companyCover: null,
      companyPictures: [],
    });
    document.getElementById("companyLogo").value = null;
    document.getElementById("companyCover").value = null;
    document.getElementById("companyPictures").value = null;
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(getData?.message);
    }
  }, [getData, isSuccess, isError, error]);

  useEffect(() => {
    if (delIsError) {
      toast.error(delError?.data?.message);
    }
    if (delSuccess) {
      toast.success(delData?.message);
    }
  }, [delData, delSuccess, delIsError, delError]);

  return (
    <div className="">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold text-black">
          {t("company_profile")} {username}
        </h2>
        <p className="text-base text-black font-normal">
          {t("profile_des")}
          <Link
            to={`/seller-review-profile/${_id}`}
            className="text-[#3097d1] hover:underline pl-2"
          >
            {t("view")}
          </Link>
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-[#f5f8fa] p-5 border border-gray-300 flex flex-col gap-5 items-start rounded-md my-10"
      >
        <div className="flex flex-col w-full gap-5">
          <label htmlFor="" className="text-base font-bold text-black">
            {t("company_description")}
          </label>
          <textarea
            name="companyDescription"
            id="companyDescription"
            cols="20"
            value={companyDescription}
            rows="5"
            required
            onChange={handleChange}
            className="border border-gray-200 px-2 py-3 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 md:px-4 w-full"
          ></textarea>
        </div>
        <div className="flex flex-col w-full gap-5">
          <label className="text-base font-bold text-black" htmlFor="">
            {t("company_logo")}
          </label>
          <input
            type="file"
            name="companyLogo"
            id="companyLogo"
            accept=".jpg, .jpeg, .png"
            className="border border-gray-200 px-2 py-3 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 md:px-4 w-full"
            onChange={handleFileChange}
          />
        </div>
        {data?.companyLogo && (
          <div>
            <div className="flex flex-wrap gap-5 py-5">
              <div className="relative w-24 h-24">
                <img
                  src={companyLogo}
                  alt=""
                  className="absolute w-full object-cover"
                  onClick={() => handleImageClick(companyLogo)}
                />
                <p
                  onClick={() => handleDeletePictures(companyLogo, "logo")}
                  className="absolute top-[-10px] left-[-10px] p-1 w-5 h-5 text-[10px] text-white bg-black rounded-full cursor-pointer text-center"
                >
                  {delLoading && name === companyLogo ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-3 h-3 animate-spin"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                    </>
                  ) : (
                    "X"
                  )}
                </p>
              </div>
            </div>
            {companyLogo && isPopupOpen && selectedImage && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
                <div className="relative w-10/12 xl:w-auto">
                  <img
                    src={selectedImage}
                    alt="Full Size"
                    className="w-full xl:w-[700px] h-auto rounded-md"
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
          </div>
        )}
        <div className="flex flex-col w-full gap-5">
          <label className="text-base font-bold text-black" htmlFor="">
            {t("cover_photo")}
          </label>
          <input
            type="file"
            name="companyCover"
            accept=".jpg, .jpeg, .png"
            id="companyCover"
            className="border border-gray-200 px-2 py-3 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 md:px-4 w-full"
            onChange={handleFileChange}
          />
        </div>
        {data?.companyCover && (
          <div>
            <div className="flex flex-wrap gap-5 py-5">
              <div className="relative w-24 h-24">
                <img
                  src={companyCover}
                  alt=""
                  className="absolute w-full object-cover"
                  onClick={() => handleImageClick(companyCover)}
                />
                <p
                  onClick={() => handleDeletePictures(companyCover, "cover")}
                  className="absolute top-[-10px] left-[-10px] p-1 w-5 h-5 text-[10px] text-white bg-black rounded-full cursor-pointer text-center"
                >
                  {delLoading && name === companyCover ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-3 h-3 animate-spin"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                    </>
                  ) : (
                    "X"
                  )}
                </p>
              </div>
            </div>
            {companyCover && isPopupOpen && selectedImage && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
                <div className="relative w-10/12 xl:w-auto">
                  <img
                    src={selectedImage}
                    alt="Full Size"
                    className="w-full xl:w-[700px] h-auto rounded-md"
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
          </div>
        )}
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="" className="text-base font-bold text-black">
            {t("picture")}
          </label>
          <p className="text-gray-400 text-base font-normal">
            {t("max_Mb")} (png, jpg, jpeg)
          </p>
          <input
            type="file"
            name="companyPictures"
            id="companyPictures"
            multiple
            accept=".jpg, .jpeg, .png"
            className="border border-gray-200 px-2 py-3 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 md:px-4 w-full"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <div className="flex flex-wrap gap-5 py-5">
            {data &&
              data?.companyPictures?.map((item, index) => (
                <div key={index} className="relative w-24 h-24">
                  <img
                    src={item}
                    alt=""
                    className="absolute w-full object-cover"
                    onClick={() => handleImageClick(item)}
                  />
                  <p
                    onClick={() => handleDeletePictures(item, "group")}
                    className="absolute top-[-10px] left-[-10px] p-1 w-5 h-5 text-[10px] text-white bg-black rounded-full cursor-pointer text-center"
                  >
                    {delLoading && name === item ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-3 h-3 animate-spin"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                          />
                        </svg>
                      </>
                    ) : (
                      "X"
                    )}
                  </p>
                </div>
              ))}
          </div>
          {data && isPopupOpen && selectedImage && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
              <div className="relative w-10/12 xl:w-auto">
                <img
                  src={selectedImage}
                  alt="Full Size"
                  className="w-full xl:w-[700px] h-auto rounded-md"
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
        </div>
        <div className="flex flex-col w-full gap-5">
          <label htmlFor="" className="text-black text-base font-nomal">
            {t("up_title")}
            <span className="text-gray-500 text-sm">({t("optional")})</span>
          </label>
          <input
            type="text"
            name="companyTitle"
            id="companyTitle"
            onChange={handleChange}
            value={companyTitle}
            className="border border-gray-200 px-2 py-2 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 md:px-4 w-full"
          />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="bg-[#f5f8fa] p-5 border border-gray-300 flex flex-col gap-5 items-start rounded-md w-full">
            <p className="text-black text-lg font-bold">
              {t("enter_company_info")}
              <span className="text-gray-500 text-sm"> ({t("optional")})</span>
            </p>
            <div className="flex justify-between mt-5 gap-5 lg:flex-row flex-col">
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 items-center w-full justify-between">
                {services?.map((item, index) => (
                  <li key={index} className="flex gap-2 items-start">
                    <input
                      type="checkbox"
                      name={item}
                      id={item}
                      className="mt-1.5"
                      checked={companyInfo.includes(item)}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor={item}
                      className="text-black text-base font-normal"
                    >
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#FFAA00] py-2 px-16 rounded-md text-black text-base font-bold flex gap-2 items-center"
            >
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
        </div>
      </form>
      <Toaster />
    </div>
  );
}

export default CompanyProfile;
