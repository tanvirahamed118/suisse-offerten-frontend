import { useEffect, useState } from "react";
import {
  useCreateWishlistMutation,
  useDeleteWishlistMutation,
  useGetOneWishlistQuery,
} from "../redux/rtk/features/wishlist/wistlistApi";
import PropTypes from "prop-types";
import toast, { Toaster } from "react-hot-toast";

function Wishlist({ jobId, saverId }) {
  const [createWishlist, { data, isSuccess, isError, error }] =
    useCreateWishlistMutation();
  const [exist, setExist] = useState(null);
  const { data: getData, refetch } = useGetOneWishlistQuery({ jobId, saverId });
  const [
    deleteWishlist,
    {
      data: deleteData,
      isSuccess: deleteSuccess,
      isError: deleteIsError,
      error: deleteError,
    },
  ] = useDeleteWishlistMutation();

  useEffect(() => {
    if (getData?._id) {
      setExist(getData?._id);
    } else {
      setExist(null);
    }
    refetch();
  }, [getData, refetch]);
  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(data?.message);
      refetch();
    }
  }, [data, isSuccess, isError, error, refetch]);
  useEffect(() => {
    if (deleteIsError) {
      toast.error(deleteError?.data?.message);
    }
    if (deleteSuccess) {
      toast.success(deleteData?.message);
      refetch();
    }
  }, [deleteData, deleteSuccess, deleteIsError, deleteError, refetch]);
  const handleSubmit = () => {
    createWishlist({ jobId, saverId });
  };
  const handleRemove = () => {
    const id = getData?._id;
    deleteWishlist(id);
    setExist(null);
  };

  return (
    <button className="">
      {exist ? (
        <i
          className="fa-solid fa-heart text-xl cursor-pointer"
          onClick={handleRemove}
        ></i>
      ) : (
        <i
          className="fa-regular fa-heart text-xl cursor-pointer"
          onClick={handleSubmit}
        ></i>
      )}
      <Toaster />
    </button>
  );
}
Wishlist.propTypes = {
  jobId: PropTypes.any,
  saverId: PropTypes.any,
};
export default Wishlist;
