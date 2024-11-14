import { apiSlice } from "../api/apiSlice";

export const wishlistApi = apiSlice.injectEndpoints({
  tagTypes: ["wishlist"],
  endpoints: (builder) => ({
    getOneWishlist: builder.query({
      query: ({ saverId, jobId }) => ({
        url: `/auth/wishlist/one?saverId=${saverId}&jobId=${jobId}`,
        method: "GET",
      }),
      providesTags: ["wishlist"],
    }),
    getAllWishlist: builder.query({
      query: ({ page, limit, sellerId }) => ({
        url: `/auth/wishlist?sellerId=${sellerId}&page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["wishlist"],
    }),

    createWishlist: builder.mutation({
      query: (formData) => ({
        url: "/auth/wishlist",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["wishlist"],
    }),
    updateWishlistStatus: builder.mutation({
      query: (id) => ({
        url: `/auth/wishlist/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["wishlist"],
    }),
    deleteWishlist: builder.mutation({
      query: (id) => ({
        url: `/auth/wishlist/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["wishlist"],
    }),
  }),
});

export const {
  useGetOneWishlistQuery,
  useGetAllWishlistQuery,
  useCreateWishlistMutation,
  useUpdateWishlistStatusMutation,
  useDeleteWishlistMutation,
} = wishlistApi;
