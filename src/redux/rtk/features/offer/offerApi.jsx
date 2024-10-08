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
    getAllOfferDefault: builder.query({
      query: () => ({
        url: "/auth/offer/default",
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

    createOffer: builder.mutation({
      query: (formData) => ({
        url: "/auth/offer",
        method: "POST",
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
  useGetAllOfferQuery,
  useGetAllOfferDefaultQuery,
  useCreateOfferMutation,
  useUpdateMessageMutation,
  useDeleteMessageMutation,
} = offerApi;
