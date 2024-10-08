import { useTranslation } from "react-i18next";
import { useGetOneSellerQuery } from "../../redux/rtk/features/auth/seller/authApi";
import { Link } from "react-router-dom";

function VerifyDocuments() {
  const { t } = useTranslation();
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const id = seller?.seller?._id;
  const { data } = useGetOneSellerQuery(id);
  const { emailVerify, uidVerify, locationVerify } = data || {};

  return (
    <div className="">
      <div className="w-full bg-[#F5F8FA] p-5 border border-gray-300">
        <h2 className="text-black font-bold text-xl">
          {t("verify_qualifications_documents")}
        </h2>
        <p className="text-black text-base font-normal pt-2">
          {t("verify_document_text_1")}
        </p>
        <p className="text-black text-base font-normal py-5">
          {t("verify_document_text_2")}:
        </p>
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between items-center w-full border-b-2 border-gray-300 py-4">
            <div className="flex gap-4 items-center">
              <i className="fa-solid fa-envelope-circle-check text-2xl text-purple-500"></i>
              <p className="text-black text-base font-normal">
                {t("verify_document_text_7")}
              </p>
            </div>
            <span>
              {emailVerify ? (
                <i className=" fa-solid fa-circle-check text-2xl text-green-500"></i>
              ) : (
                <i className="fa-solid fa-circle-xmark text-2xl text-red-500"></i>
              )}
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between items-center w-full border-b-2 border-gray-300 py-4">
            <div className="flex gap-4 items-center">
              <i className="fa-solid fa-passport text-2xl text-blue-500"></i>

              <p className="text-black text-base font-normal">
                {t("verify_document_text_8")}
              </p>
            </div>
            <span>
              {uidVerify ? (
                <i className=" fa-solid fa-circle-check text-2xl text-green-500"></i>
              ) : (
                <i className="fa-solid fa-circle-xmark text-2xl text-red-500"></i>
              )}
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 pb-6">
          <div className="flex justify-between items-center w-full border-b-2 border-gray-300 py-4">
            <div className="flex gap-4 items-center">
              <i className="fa-solid fa-location-dot text-2xl text-[#FF00FE]"></i>

              <p className="text-black text-base font-normal">
                {t("verify_document_text_3")}
              </p>
            </div>
            <span>
              {locationVerify ? (
                <i className=" fa-solid fa-circle-check text-2xl text-green-500"></i>
              ) : (
                <i className="fa-solid fa-circle-xmark text-2xl text-red-500"></i>
              )}
            </span>
          </div>
        </div>
      </div>
      <p className="text-base text-black font-normal mt-5">
        {t("verify_document_text_5") + " "}
        <Link to="/contact" className="text-[#3097d1] hover:underline">
          {t("verify_document_text_6")}
        </Link>
      </p>
    </div>
  );
}

export default VerifyDocuments;
