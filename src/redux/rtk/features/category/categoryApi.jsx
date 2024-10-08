import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getAllCetagory: builder.query({
      query: () => ({
        url: "/auth/category",
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getOneCetagory: builder.query({
      query: (id) => ({
        url: `/auth/category/${id}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    createCetagory: builder.mutation({
      query: (reviewData) => ({
        url: "/auth/category",
        method: "POST",
        body: reviewData,
      }),
      invalidatesTags: ["update"],
    }),
    updateCetagory: builder.mutation({
      query: ({ clientId, id }) => ({
        url: `/auth/category/${id}`,
        method: "PATCH",
        body: { clientId },
      }),
      invalidatesTags: ["update"],
    }),
    deleteCetagory: builder.mutation({
      query: (id) => ({
        url: `/auth/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["update"],
    }),
  }),
});

export const {
  useGetAllCetagoryQuery,
  useGetOneCetagoryQuery,
  useCreateCetagoryMutation,
  useUpdateCetagoryMutation,
  useDeleteCetagoryMutation,
} = categoryApi;
