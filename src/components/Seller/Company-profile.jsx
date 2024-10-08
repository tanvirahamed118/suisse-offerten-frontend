import { useEffect, useState } from "react";
import services from "../../datas/seller-info";
import {
  useGetOneSellerQuery,
  useUpdateSellerCompanyMutation,
} from "../../redux/rtk/features/auth/seller/authApi";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

function CompanyProfile() {
  const { t } = useTranslation();
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const { _id, username } = seller?.seller || {};
  const { data } = useGetOneSellerQuery(_id);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
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
        companyInfo: data.companyInfo || [], // Ensure companyInfo is an array
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

    if (name === "companyTitle" || name === "companyDescription") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: e.target.value,
      }));
    } else {
      // Toggle the companyInfo array based on the checkbox
      setFormData((prevState) => {
        const updatedCompanyInfo = checked
          ? [...prevState.companyInfo, name] // Add item if checked
          : prevState.companyInfo.filter((item) => item !== name); // Remove item if unchecked

        return {
          ...prevState,
          companyInfo: updatedCompanyInfo,
        };
      });
    }
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name, files } = e.target;

    setFormData((prevState) => {
      if (name === "companyLogo") {
        return {
          ...prevState,
          companyLogo: files[0], // Assuming single file upload
        };
      } else if (name === "companyCover") {
        return {
          ...prevState,
          companyCover: files[0], // Assuming single file upload
        };
      } else if (name === "companyPictures") {
        return {
          ...prevState,
          companyPictures: Array.from(files), // Convert FileList to array
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("companyDescription", companyDescription);
    formData.append("companyTitle", companyTitle);

    // Append companyInfo array
    companyInfo.forEach((info) => formData.append("companyInfo[]", info));

    // Append file inputs
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

  return (
    <div className="">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold text-black">
          {t("company_profile")} {username}
        </h2>
        <p className="text-base text-black font-normal">
          {t("profile_des")}
          <a href="" className="text-[#3097d1] hover:underline pl-2">
            {t("view")}
          </a>
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
            required
            accept=".jpg, .jpeg, .png"
            className="border border-gray-200 px-2 py-3 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 md:px-4 w-full"
            onChange={handleFileChange}
          />
        </div>
        <div className="flex flex-col w-full gap-5">
          <label className="text-base font-bold text-black" htmlFor="">
            {t("cover_photo")}
          </label>
          <input
            type="file"
            name="companyCover"
            required
            accept=".jpg, .jpeg, .png"
            id="companyCover"
            className="border border-gray-200 px-2 py-3 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 md:px-4 w-full"
            onChange={handleFileChange}
          />
        </div>
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
            required
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
                <img
                  key={index}
                  src={item}
                  alt=""
                  className="w-2/12 h-36 object-cover rounded-md hover:cursor-pointer"
                  onClick={() => handleImageClick(item)}
                />
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
        <div className="flex flex-col gap-5">
          <div className="bg-[#f5f8fa] p-5 border border-gray-300 flex flex-col gap-5 items-start rounded-md w-full">
            <p className="text-black text-lg font-bold">
              {t("enter_company_info")}
              <span className="text-gray-500 text-sm"> ({t("optional")})</span>
            </p>
            <div className="flex justify-between mt-5 gap-5 lg:flex-row flex-col">
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 items-center w-full justify-between">
                {services?.map((item, index) => (
                  <li key={index} className="flex gap-2 items-start">
                    <input
                      type="checkbox"
                      name={item}
                      id={item}
                      className="mt-1.5"
                      checked={companyInfo.includes(item)} // Check if item is in companyInfo array
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
              className="bg-[#f25900] hover:bg-[#cc5a00] py-2 px-16 rounded-md text-white text-base font-normal flex gap-2 items-center"
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