import { apiSlice } from "../api/apiSlice";

export const reviewApi = apiSlice.injectEndpoints({
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getOneReview: builder.query({
      query: (id) => ({
        url: `/auth/review/${id}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllReviewDefault: builder.query({
      query: () => ({
        url: "/auth/review/default",
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllReview: builder.query({
      query: ({ page, limit, sellerId }) => ({
        url: `/auth/review?sellerId=${sellerId}&page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    createReview: builder.mutation({
      query: (reviewData) => ({
        url: "/auth/review",
        method: "POST",
        body: reviewData,
      }),
      invalidatesTags: ["update"],
    }),
    updateReviewUseful: builder.mutation({
      query: ({ clientId, id }) => ({
        url: `/auth/review/like/${id}`,
        method: "PATCH",
        body: { clientId },
      }),
      invalidatesTags: ["update"],
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/auth/review/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["update"],
    }),
  }),
});

export const {
  useGetOneReviewQuery,
  useGetAllReviewQuery,
  useGetAllReviewDefaultQuery,
  useCreateReviewMutation,
  useUpdateReviewUsefulMutation,
  useDeleteReviewMutation,
} = reviewApi;
