import { apiSlice } from "../api/apiSlice";

export const settingApi = apiSlice.injectEndpoints({
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getAllSetting: builder.query({
      query: () => ({
        url: "/auth/setting",
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    createSetting: builder.mutation({
      query: (reviewData) => ({
        url: "/auth/setting",
        method: "POST",
        body: reviewData,
      }),
      invalidatesTags: ["update"],
    }),
    updateSetting: builder.mutation({
      query: ({ clientId, id }) => ({
        url: `/auth/setting/${id}`,
        method: "PATCH",
        body: { clientId },
      }),
      invalidatesTags: ["update"],
    }),
  }),
});

export const {
  useGetAllSettingQuery,
  useCreateSettingMutation,
  useUpdateSettingMutation,
} = settingApi;
