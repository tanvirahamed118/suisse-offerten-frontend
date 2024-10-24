import { apiSlice } from "../api/apiSlice";

export const offerApi = apiSlice.injectEndpoints({
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getOneOffer: builder.query({
      query: (id) => ({
        url: `/auth/offer/${id}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getOneOfferByJobid: builder.query({
      query: ({ id, sellerId }) => ({
        url: `/auth/offer/job/${id}?sellerId=${sellerId}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllOfferBySeller: builder.query({
      query: ({ page, limit, sellerId, status }) => ({
        url: `/auth/offer/seller?sellerId=${sellerId}&status=${status}&page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllOfferBySellerBoth: builder.query({
      query: ({ page, limit, sellerId, status }) => ({
        url: `/auth/offer/seller/both?sellerId=${sellerId}&status=${status}&page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllOfferDefault: builder.query({
      query: () => ({
        url: "/auth/offer/default",
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllOfferByClient: builder.query({
      query: ({ reviewSubmited, clientId, page, limit, status }) => {
        // Initialize query parameters
        const params = new URLSearchParams();

        // Conditionally append each parameter if it's defined
        if (clientId) params.append("clientId", clientId);
        if (reviewSubmited) params.append("reviewSubmited", reviewSubmited);
        if (status) params.append("status", status);
        if (page) params.append("page", page);
        if (limit) params.append("limit", limit);

        // Return the query object
        return {
          url: `/auth/offer/client?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["update"],
    }),

    getOneOfferByBoth: builder.query({
      query: ({ sellerId, jobId }) => ({
        url: `/auth/offer/both?sellerId=${sellerId}&jobId=${jobId}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllOffer: builder.query({
      query: ({ id, page, limit, sellerId }) => {
        const params = new URLSearchParams();

        if (sellerId) params.append("sellerId", sellerId);
        if (id) params.append("id", id);
        params.append("page", page);
        params.append("limit", limit);

        return {
          url: `/auth/offer?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["update"],
    }),

    createOfferPerticipation: builder.mutation({
      query: (formData) => ({
        url: "/auth/offer/create",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["update"],
    }),
    createOffer: builder.mutation({
      query: (formData) => ({
        url: "/auth/offer",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["update"],
    }),
    createOfferRequest: builder.mutation({
      query: ({ formData, id }) => ({
        url: `/auth/offer/bid/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["update"],
    }),
    createOfferBid: builder.mutation({
      query: (formData) => ({
        url: "/auth/offer/send/proposal",
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["update"],
    }),
    updateOffer: builder.mutation({
      query: ({ emails, id }) => ({
        url: `/auth/offer/${id}`,
        method: "PATCH",
        body: emails,
      }),
      invalidatesTags: ["update"],
    }),
    updateOfferView: builder.mutation({
      query: (data) => ({
        url: "/auth/offer/view",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["update"],
    }),
    updateOfferRequest: builder.mutation({
      query: ({ formData, id }) => ({
        url: `/auth/offer/status/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["update"],
    }),
    updateOfferDetails: builder.mutation({
      query: ({ offerData, id }) => ({
        url: `/auth/offer/details/${id}`,
        method: "PATCH",
        body: offerData,
      }),
      invalidatesTags: ["update"],
    }),
    offerReviewRequest: builder.mutation({
      query: (id) => ({
        url: `/auth/offer/review/request/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["update"],
    }),
    offerArchiveRequest: builder.mutation({
      query: (id) => ({
        url: `/auth/offer/archive/request/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["update"],
    }),

    deleteOffer: builder.mutation({
      query: (id) => ({
        url: `/auth/offer/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["update"],
    }),
  }),
});

export const {
  useGetOneOfferQuery,
  useOfferReviewRequestMutation,
  useOfferArchiveRequestMutation,
  useGetOneOfferByBothQuery,
  useGetOneOfferByJobidQuery,
  useGetAllOfferQuery,
  useGetAllOfferByClientQuery,
  useGetAllOfferBySellerQuery,
  useGetAllOfferBySellerBothQuery,
  useGetAllOfferDefaultQuery,
  useCreateOfferPerticipationMutation,
  useCreateOfferMutation,
  useCreateOfferRequestMutation,
  useCreateOfferBidMutation,
  useUpdateOfferViewMutation,
  useUpdateOfferDetailsMutation,
  useUpdateOfferRequestMutation,
  useUpdateMessageMutation,
  useDeleteMessageMutation,
} = offerApi;
