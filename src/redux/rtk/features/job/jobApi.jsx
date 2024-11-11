import { apiSlice } from "../api/apiSlice";

export const contactApi = apiSlice.injectEndpoints({
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getOneJob: builder.query({
      query: (id) => ({
        url: `/auth/job/${id}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllJob: builder.query({
      query: ({ page, limit, category, location }) => {
        const queryParams = [
          category && `category=${category}`,
          location && `location=${location}`,
          `page=${page}`,
          `limit=${limit}`,
        ]
          .filter(Boolean)
          .join("&");
        return {
          url: `/auth/job?${queryParams}`,
          method: "GET",
        };
      },
      providesTags: ["update"],
    }),
    getFilterCategory: builder.query({
      query: ({ page, limit, category }) => ({
        url: `/auth/job/category?category=${category}&page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllJobsByClient: builder.query({
      query: ({ page, limit, email }) => ({
        url: `/auth/job/client?email=${email}&page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllJobsBySeller: builder.query({
      query: ({ page, limit, id, category = "", location = "" }) => {
        const splitCategory = category
          .split(/\s*[,.&\s]+\s*/g)
          .filter(Boolean)
          .join("_");

        return {
          url: `/auth/job/seller?id=${id}&category=${splitCategory}&location=${location}&page=${page}&limit=${limit}`,
          method: "GET",
        };
      },
      providesTags: ["update"],
    }),

    createJob: builder.mutation({
      query: (formDataToSend) => ({
        url: "/auth/job",
        method: "POST",
        body: formDataToSend,
      }),
      invalidatesTags: ["update"],
    }),
    updateJob: builder.mutation({
      query: ({ emails, id }) => ({
        url: `/auth/job/${id}`,
        method: "PATCH",
        body: emails,
      }),
      invalidatesTags: ["update"],
    }),
    deleteJob: builder.mutation({
      query: (id) => ({
        url: `/auth/job/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["update"],
    }),
  }),
});

export const {
  useGetOneJobQuery,
  useGetAllJobQuery,
  useGetAllJobsByClientQuery,
  useGetAllJobsBySellerQuery,
  useGetFilterCategoryQuery,
  useCreateJobMutation,
  useUpdateJobMutation,
  useDeleteJobMutation,
} = contactApi;
