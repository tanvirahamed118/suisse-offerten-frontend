import { apiSlice } from "../api/apiSlice";

export const wishlistApi = apiSlice.injectEndpoints({
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getOneWishlist: builder.query({
      query: ({ saverId, jobId }) => ({
        url: `/auth/wishlist/one?saverId=${saverId}&jobId=${jobId}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllWishlist: builder.query({
      query: ({ page, limit, sellerId }) => ({
        url: `/auth/wishlist?sellerId=${sellerId}&page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),

    createWishlist: builder.mutation({
      query: (formData) => ({
        url: "/auth/wishlist",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["update"],
    }),
    updateWishlistStatus: builder.mutation({
      query: (id) => ({
        url: `/auth/wishlist/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["update"],
    }),
    deleteWishlist: builder.mutation({
      query: (id) => ({
        url: `/auth/wishlist/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["update"],
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
