import { apiSlice } from "../api/apiSlice";

export const proposalApi = apiSlice.injectEndpoints({
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getOneProposal: builder.query({
      query: (id) => ({
        url: `/auth/proposal/${id}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getOneProposalByClient: builder.query({
      query: ({ sellerId, jobId }) => ({
        url: `/auth/proposal/${sellerId}/${jobId}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllProposalsDefault: builder.query({
      query: () => ({
        url: "/auth/proposal/default",
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllProposals: builder.query({
      query: ({ clientId, page, limit, sellerId }) => ({
        url: `/auth/proposal?${clientId && `clientId=${clientId}`}${
          sellerId && `&sellerId=${sellerId}`
        }&page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    createProposal: builder.mutation({
      query: (offerData) => ({
        url: "/auth/proposal",
        method: "POST",
        body: offerData,
      }),
      invalidatesTags: ["update"],
    }),
    updateProposalStatusByClient: builder.mutation({
      query: (formData) => ({
        url: "/auth/proposal/status/client",
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["update"],
    }),
    updateProposalStatusBySeller: builder.mutation({
      query: (formData) => ({
        url: "/auth/proposal/status/seller",
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["update"],
    }),
    updateProposalView: builder.mutation({
      query: (id) => ({
        url: `/auth/proposal/view/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["update"],
    }),
    reviewRequests: builder.mutation({
      query: (id) => ({
        url: `/auth/proposal/review/request/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["update"],
    }),
    updateProposal: builder.mutation({
      query: ({ offerData, id }) => ({
        url: `/auth/proposal/${id}`,
        method: "PATCH",
        body: offerData,
      }),
      invalidatesTags: ["update"],
    }),
    deleteProposal: builder.mutation({
      query: (id) => ({
        url: `/auth/proposal/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["update"],
    }),
  }),
});

export const {
  useGetOneProposalQuery,
  useGetAllProposalsDefaultQuery,
  useGetAllProposalsQuery,
  useGetOneProposalByClientQuery,
  useCreateProposalMutation,
  useUpdateProposalStatusByClientMutation,
  useUpdateProposalStatusBySellerMutation,
  useUpdateProposalMutation,
  useUpdateProposalViewMutation,
  useReviewRequestsMutation,
  useDeleteProposalMutation,
} = proposalApi;
