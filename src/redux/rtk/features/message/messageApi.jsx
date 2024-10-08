import { apiSlice } from "../api/apiSlice";

export const contactApi = apiSlice.injectEndpoints({
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getOneMessage: builder.query({
      query: (id) => ({
        url: `/auth/communication/${id}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllMessage: builder.query({
      query: () => ({
        url: "/auth/communication",
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllMessageByClient: builder.query({
      query: (id) => ({
        url: `/auth/communication/default?id=${id}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    createSellerMessage: builder.mutation({
      query: (formData) => ({
        url: "/auth/communication",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["update"],
    }),
    updateMessage: builder.mutation({
      query: ({ sellerMessage, clientMessage, id }) => ({
        url: `/auth/communication/${id}`,
        method: "PATCH",
        body: sellerMessage ? sellerMessage : clientMessage,
      }),
      invalidatesTags: ["update"],
    }),
    updateMessageView: builder.mutation({
      query: ({ id, jobId }) => ({
        url: "/auth/communication/view",
        method: "PATCH",
        body: { id, jobId },
      }),
      invalidatesTags: ["update"],
    }),
    deleteMessage: builder.mutation({
      query: (id) => ({
        url: `/auth/communication/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["update"],
    }),
  }),
});

export const {
  useGetOneMessageQuery,
  useGetAllMessageQuery,
  useGetAllMessageByClientQuery,
  useCreateMessageMutation,
  useCreateSellerMessageMutation,
  useUpdateMessageViewMutation,
  useUpdateMessageMutation,
  useDeleteMessageMutation,
} = contactApi;
