import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCreateProposalMutation } from "../redux/rtk/features/proposal/proposalApi";
import toast, { Toaster } from "react-hot-toast";

function PrepeardForm() {
  const { id } = useParams();
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const sellerId = seller?.seller?._id;
  const sellerName = seller?.seller?.username;
  const sellerphone = seller?.seller?.phone;
  const [showNotfi, setShowNoti] = useState(false);
  const [offerFiles, setOfferFiles] = useState([]);
  const [createProposal, { data, isLoading, isError, isSuccess, error }] =
    useCreateProposalMutation();
  const fileRef = useRef();
  const [formData, setFormData] = useState({
    priceUnit: "",
    offerPrice: 0,
    offerNote: "",
    jobId: id,
    sellerId: sellerId,
    sellerName: sellerName,
    sellerPhone: sellerphone,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const { offerNote, priceUnit, offerPrice } = formData || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (offerNote.length > 0 && priceUnit.length > 0 && offerPrice > 0) {
      const offerData = new FormData();
      offerData.append("offerFiles", offerFiles[0]);
      Object.keys(formData).forEach((key) => {
        offerData.append(key, formData[key]);
      });
      createProposal(offerData);
      setFormData({
        offerNote: "",
        offerPrice: 0,
        priceUnit: "",
        jobId: id,
        sellerId: sellerId,
        sellerName: sellerName,
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
      setShowNoti(true);
    }
  }, [isError, isSuccess, data, error]);

  return (
    <section className="w-full py-10">
      <div className="container">
        <Link
          to={`/search-job/${id}`}
          state={{ from: "proposal-form" }}
          className="text-white py-1 px-5 rounded-md text-base font-normal hover:underline bg-[#0050B2]"
        >
          Back
        </Link>
        {showNotfi && (
          <div className="bg-[#F5F6F7] p-5 rounded-md flex gap-2 items-center mt-5">
            <i className="fa-solid fa-circle-exclamation text-[#0050B2] text-2xl"></i>
            <p className="text-black font-normal text-base">
              Thank you! Your application has been submitted. If interested, the
              client will contact you and request a quote.
            </p>
          </div>
        )}

        <div className="bg-white shadow-lg p-5 w-full lg:w-7/12 flex flex-col gap-5 mt-5">
          <div>
            <h2 className="text-xl font-bold text-black border-b border-gray-300 pb-5 mb-5">
              Your offer
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
                  Price Unit
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
                    Please Select...
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
                  Your offer (incl. VAT)
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
                Note on the offer
              </label>
              <p className="text-gray-400 pb-2 text-sm font-normal">
                Optionally add a comment to your offer here.
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
                <p>Browse File</p>
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
                All entries (amount, text, documents) are only visible to you
                and the client. Please select only one file.
              </h2>
              <p className="text-sm font-bold text-[#6c757d ]">
                If you already send message to the client, you can send a
                proposal.
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
                    <p>Loading...</p>
                  </>
                ) : (
                  "Prepare offer"
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
