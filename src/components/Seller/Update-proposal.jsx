import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import {
  useGetOneOfferQuery,
  useUpdateOfferDetailsMutation,
} from "../../redux/rtk/features/offer/offerApi";

function UpdateProposal() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [offerFiles, setOfferFiles] = useState([]);
  const [updateOfferDetails, { data, isLoading, isError, isSuccess, error }] =
    useUpdateOfferDetailsMutation();
  const { data: proposalData } = useGetOneOfferQuery(id);

  const fileRef = useRef();
  const [formData, setFormData] = useState({
    priceUnit: "",
    offerPrice: 0,
    offerNote: "",
  });
  useEffect(() => {
    setFormData(proposalData);
  }, [proposalData]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const { offerNote, priceUnit, offerPrice } = formData || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (offerNote?.length > 0 && priceUnit?.length > 0 && offerPrice > 0) {
      const offerData = new FormData();
      offerData.append("offerFiles", offerFiles[0]);
      Object.keys(formData).forEach((key) => {
        offerData.append(key, formData[key]);
      });
      updateOfferDetails({ offerData, id });
      setFormData({
        offerNote: "",
        offerPrice: 0,
        priceUnit: "",
      });
      clearFiles();
    }
  };

  const handleFileChange = (e) => {
    setOfferFiles(e.target.files);
  };

  const clearFiles = () => {
    setOfferFiles([]);
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(data?.message);
    }
  }, [isError, isSuccess, data, error]);

  return (
    <section className="w-full">
      <div className="container">
        <div className="bg-white shadow-lg p-5 w-full flex flex-col gap-5">
          <div>
            <h2 className="text-xl font-bold text-black border-b border-gray-300 pb-5 mb-5">
              {t("your_offer")}
            </h2>
          </div>
          <form
            action=""
            className=" flex flex-col gap-10"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-5">
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="" className="text-black text-base font-normal">
                  {t("price_unit")}
                </label>
                <select
                  name="priceUnit"
                  id=""
                  required
                  value={priceUnit}
                  onChange={handleChange}
                  className="md:w-full border border-gray-200 py-2 px-3 rounded-md outline-[#C3DEED] focus:outline outline-4 text-base text-black font-normal"
                >
                  <option value="" className="text-black text-base font-normal">
                    {t("select_option")}
                  </option>
                  <option value="fixed price">Fixed price</option>
                  <option value="per hour">Per hour</option>
                  <option value="guide price">Guide price</option>
                  <option value="per square price">Per square price</option>
                  <option value="per cuble price">Per cuble price</option>
                  <option value="apiece ">Apiece</option>
                  <option value="Per meter">Per meter</option>
                  <option value="per kilometer">Per kilometer</option>
                </select>
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="" className="text-black text-base font-normal">
                  {t("offer_price")}
                </label>
                <input
                  type="number"
                  name="offerPrice"
                  id=""
                  required
                  value={offerPrice}
                  onChange={handleChange}
                  className="md:w-full border border-gray-200 py-2 px-3 rounded-md outline-[#C3DEED] focus:outline outline-4 text-base text-black font-normal"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="" className="text-black text-base font-normal">
                {t("note_on_offer")}
              </label>
              <p className="text-gray-400 pb-2 text-sm font-normal">
                {t("optional_offer")}
              </p>
              <textarea
                name="offerNote"
                id=""
                rows={5}
                required
                value={offerNote}
                onChange={handleChange}
                cols={5}
                className="py-2 px-5 border border-gray-200 rounded-md w-full text-base text-black font-normal outline-[#ff473d34] focus:outline outline-4"
              ></textarea>
            </div>
            <div className="w-full flex flex-col gap-1 offer-files justify-center">
              <label
                htmlFor="upproduct"
                className="dropContainer cursor-pointer !h-40"
              >
                <i className="fa-solid fa-upload"></i>
                <p>{t("browse_file")}</p>
                <input
                  type="file"
                  ref={fileRef}
                  name="upproduct"
                  id="upproduct"
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
                  "Update offer"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Toaster />
    </section>
  );
}

export default UpdateProposal;
