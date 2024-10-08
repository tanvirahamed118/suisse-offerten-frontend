import { apiSlice } from "../api/apiSlice";

export const proposalApi = apiSlice.injectEndpoints({
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getOneJob: builder.query({
      query: (id) => ({
        url: `/auth/job/${id}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllPerticipation: builder.query({
      query: (id) => ({
        url: `/auth/perticipation/${id}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllPerticipationBy: builder.query({
      query: ({ id, page, limit }) => ({
        url: `/auth/perticipation?id=${id}&page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),

    getFilterCategory: builder.query({
      query: ({ page, limit, category }) => ({
        url: `/auth/job/category?category=${category}&page=${page}&limit=${limit}`,
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
    updateContact: builder.mutation({
      query: ({ emails, id }) => ({
        url: `/auth/message/${id}`,
        method: "PATCH",
        body: emails,
      }),
      invalidatesTags: ["update"],
    }),
    updatePerticipationByStatus: builder.mutation({
      query: ({ data, id }) => ({
        url: `/auth/perticipation/status/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["update"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/auth/message/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["update"],
    }),
  }),
});

export const {
  useGetOneJobQuery,
  useGetAllPerticipationQuery,
  useGetAllPerticipationByQuery,
  useGetFilterCategoryQuery,
  useCreateJobMutation,
  useCreateProposalMutation,
  useUpdateContactMutation,
  useUpdatePerticipationByStatusMutation,
  useDeleteContactMutation,
} = proposalApi;
