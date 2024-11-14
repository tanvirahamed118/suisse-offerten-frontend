import { apiSlice } from "../api/apiSlice";

export const paymentApi = apiSlice.injectEndpoints({
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getOnePayment: builder.query({
      query: (id) => ({
        url: `/auth/payment/${id}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllPayment: builder.query({
      query: ({ id, page, limit, sellerId }) => {
        const params = new URLSearchParams();

        if (sellerId) params.append("sellerId", sellerId);
        if (id) params.append("id", id);
        params.append("page", page);
        params.append("limit", limit);

        return {
          url: `/auth/payment?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["update"],
    }),

    createPayment: builder.mutation({
      query: ({ item, id }) => ({
        url: `/auth/payment/${id}`,
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["update"],
    }),
    createCreditsPayment: builder.mutation({
      query: (item) => ({
        url: `/auth/payment/credit`,
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["update"],
    }),

    deletePayment: builder.mutation({
      query: (id) => ({
        url: `/auth/payment/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["update"],
    }),
  }),
});

export const {
  useGetOnePaymentQuery,
  useGetAllPaymentQuery,
  useCreatePaymentMutation,
  useCreateCreditsPaymentMutation,
  useDeletePaymentMutation,
} = paymentApi;
