import { useTranslation } from "react-i18next";
import {
  useDeleteWishlistMutation,
  useGetAllWishlistQuery,
} from "../../redux/rtk/features/wishlist/wistlistApi";
import InvitationLoading from "../loading/Invitation-loading";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import toast, { Toaster } from "react-hot-toast";

function Observer() {
  const { t } = useTranslation();
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const sellerId = seller?.seller?._id;
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(null);
  const limit = 20;
  const { data, isError, isLoading, isSuccess, error } = useGetAllWishlistQuery(
    { page, limit, sellerId }
  );
  const [
    deleteWishlist,
    {
      data: deleteData,
      isSuccess: deleteSuccess,
      isError: deleteIsError,
      error: deleteError,
      isLoading: deleteLoading,
    },
  ] = useDeleteWishlistMutation();
  useEffect(() => {
    if (deleteIsError) {
      toast.error(deleteError?.data?.message);
    }
    if (deleteSuccess) {
      toast.success(deleteData?.message);
    }
  }, [deleteData, deleteSuccess, deleteIsError, deleteError]);
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const totalItems = data?.totalWishlists || 0;

  const handleRemove = (id) => {
    deleteWishlist(id);
    setLoad(id);
  };

  // decide what to show for jobs
  let content;

  if (isLoading) {
    content = (
      <>
        <InvitationLoading />
        <InvitationLoading />
        <InvitationLoading />
        <InvitationLoading />
        <InvitationLoading />
      </>
    );
  }
  if (isError) {
    content = (
      <tr>
        <td colSpan="4" className="text-center">
          <p>{error}</p>
        </td>
      </tr>
    );
  }
  if (!isLoading && !isError && data?.wishlists?.length === 0) {
    content = (
      <tr>
        <td colSpan="4" className="text-center">
          <p className="text-black font-semibold text-xl py-5">
            {t("no_data_found")}
          </p>
        </td>
      </tr>
    );
  }
  if (!isLoading && !isError && isSuccess && data?.wishlists?.length > 0) {
    content = data?.wishlists?.map((item) => {
      const { _id, jobTitle, status, placeBid } = item?.jobDetails || {};

      return (
        <tr className="striped" key={item?._id}>
          <td className="p-5 align-top border-b border-black text-left">
            <div className="flex gap-5 items-start">
              <Link
                to={`/search-job/${_id}`}
                className="text-[#3097d1] hover:text-[#0050b2] text-lg font-normal hover:underline w-80"
              >
                {jobTitle}
              </Link>
            </div>
          </td>
          <td className="p-5 align-top border-b border-black text-left">
            <div className="flex gap-2 items-center">
              <i className="fa fa-clock"></i>
              <p>{status}</p>
            </div>
          </td>

          <td className="p-5 align-top border-b border-black text-left">
            <div className="">
              <p className="text-black text-lg font-normal">{placeBid}</p>
            </div>
          </td>
          <td className="p-5 align-top border-b border-black text-left">
            <li className="list-none w-36">
              <button
                onClick={() => handleRemove(item?._id)}
                className="text-[#3097d1] text-base font-normal hover:underline text-right flex items-center gap-1"
              >
                {load === item?._id && deleteLoading ? (
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
                  t("remove_observer")
                )}
              </button>
            </li>
          </td>
        </tr>
      );
    });
  }
  return (
    <div className="">
      <div className="">
        <h2 className="text-black text-xl font-medium mt-10 border-b border-gray-400 pb-2">
          {t("you_following_the")}
        </h2>
        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="border-b border-black">
                  <th className="p-5 align-middle border-b border-black text-left">
                    <h2 className="text-black text-lg font-bold">
                      {t("order_title")}
                    </h2>
                  </th>
                  <th className="p-5 align-middle border-b border-black text-left">
                    <h2 className="text-black text-lg font-bold">
                      {t("observer_status")}
                    </h2>
                  </th>
                  <th className="p-5 align-middle border-b border-black text-left">
                    <h2 className="text-black text-lg font-bold">
                      {t("competitor_offer")}
                    </h2>
                  </th>
                  <th className="p-5 align-middle border-b border-black text-left">
                    <h2 className="text-black text-lg font-bold">
                      {t("email_remainder")}
                    </h2>
                  </th>
                </tr>
              </thead>
              <tbody>{content}</tbody>
            </table>
          </div>
        </div>

        <div className="">
          <div className="flex gap-2 flex-wrap pt-5">
            {totalItems?.length > 20 && (
              <Pagination
                handlePageChange={handlePageChange}
                page={page}
                totalItems={totalItems}
                itemsPerPage={limit}
              />
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Observer;
