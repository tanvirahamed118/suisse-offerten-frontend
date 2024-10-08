import { apiSlice } from "../api/apiSlice";

export const membershipApi = apiSlice.injectEndpoints({
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getOneMembership: builder.query({
      query: (id) => ({
        url: `/auth/membership/${id}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllMembership: builder.query({
      query: () => ({
        url: "/auth/membership",
        method: "GET",
      }),
      providesTags: ["update"],
    }),

    createMembership: builder.mutation({
      query: (reviewData) => ({
        url: "/auth/membership",
        method: "POST",
        body: reviewData,
      }),
      invalidatesTags: ["update"],
    }),
    updateMembership: builder.mutation({
      query: ({ clientId, id }) => ({
        url: `/auth/membership/${id}`,
        method: "PATCH",
        body: { clientId },
      }),
      invalidatesTags: ["update"],
    }),
    cancelMembership: builder.mutation({
      query: (id) => ({
        url: `/auth/membership/cancel/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["update"],
    }),
    deleteMembership: builder.mutation({
      query: (id) => ({
        url: `/auth/membership/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["update"],
    }),
  }),
});

export const {
  useGetOneMembershipJobQuery,
  useGetAllMembershipQuery,
  useCreateMembershipMutation,
  useUpdateMembershipUsefulMutation,
  useCancelMembershipMutation,
  useDeleteMembershipMutation,
} = membershipApi;
