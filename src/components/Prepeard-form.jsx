import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useCreateOfferBidMutation } from "../redux/rtk/features/offer/offerApi";

function PrepeardForm() {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const sellerId = seller?.seller?._id;
  const [showNotfi, setShowNoti] = useState(false);
  const [offerFiles, setOfferFiles] = useState([]);
  const [createOfferBid, { data, isLoading, isError, isSuccess, error }] =
    useCreateOfferBidMutation();
  const fileRef = useRef();
  const [offerData, setOfferData] = useState({
    priceUnit: "",
    offerPrice: 0,
    offerNote: "",
    jobId: id,
    sellerId: sellerId,
  });

  const handleChange = (e) => {
    setOfferData({
      ...offerData,
      [e.target.name]: e.target.value,
    });
  };
  const { offerNote, priceUnit, offerPrice } = offerData || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (offerNote.length > 0 && priceUnit.length > 0 && offerPrice > 0) {
      const formData = new FormData();
      formData.append("offerFiles", offerFiles[0]);
      Object.keys(offerData).forEach((key) => {
        formData.append(key, offerData[key]);
      });
      createOfferBid(formData);
    }
  };

  const handleFileChange = (e) => {
    setOfferFiles(e.target.files);
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(data?.message);
      setShowNoti(true);
      setOfferData({
        offerNote: "",
        offerPrice: 0,
        priceUnit: "",
        jobId: id,
        sellerId: sellerId,
      });
      clearFiles();
    }
  }, [isError, isSuccess, data, error, id, sellerId]);

  const clearFiles = () => {
    setOfferFiles([]);
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="w-full py-10">
      <div className="container">
        <Link
          onClick={handleBack}
          state={{ from: "proposal-form" }}
          className="text-white py-1 px-5 rounded-md text-base font-normal hover:underline bg-[#0050B2]"
        >
          {t("back")}
        </Link>
        {showNotfi && (
          <div className="bg-[#F5F6F7] p-5 rounded-md flex gap-2 items-center mt-5">
            <i className="fa-solid fa-circle-exclamation text-[#0050B2] text-2xl"></i>
            <p className="text-black font-normal text-base">
              {t("prepeare_text1")}
            </p>
          </div>
        )}

        <div className="bg-white shadow-lg p-5 w-full lg:w-7/12 flex flex-col gap-5 mt-5">
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
            <div className="flex gap-5 flex-col md:flex-row">
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
                    {t("select_option")}...
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
                className="dropContainer cursor-pointer"
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
            <div className="flex flex-col gap-3">
              <h2 className="text-sm font-normal text-gray-400">
                {t("prepeare_text2")}
              </h2>
              <p className="text-sm font-bold text-[#6c757d ]">
                {t("prepeare_text3")}
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <button
                disabled={
                  offerNote.length === 0 &&
                  offerPrice === 0 &&
                  priceUnit.length === 0
                }
                type="submit"
                className={
                  offerNote.length > 0 && offerPrice > 0 && priceUnit.length > 0
                    ? "bg-[#ff7100] text-white font-normal rounded-md hover:bg-[#F25900] text-md py-3 px-5 flex gap-2 items-center cursor-pointer"
                    : "bg-[#cccccc] text-[#666666] font-normal rounded-md text-md py-3 px-5 flex gap-2 items-center cursor-not-allowed"
                }
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
                    <p>{t("loading")}...</p>
                  </>
                ) : (
                  t("prepare_offer")
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

export default PrepeardForm;
