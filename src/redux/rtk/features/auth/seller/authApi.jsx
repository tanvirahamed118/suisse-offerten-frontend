import { apiSlice } from "../../api/apiSlice";
import { sellerLoggedIn } from "./sellerSlice";

export const sllerAuthApi = apiSlice.injectEndpoints({
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getOneSeller: builder.query({
      query: (id) => ({
        url: `/auth/seller/${id}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    SellerEmailValidate: builder.query({
      query: (token) => ({
        url: `/auth/seller/verify-email?token=${token}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllSeller: builder.query({
      query: () => ({
        url: "/auth/seller",
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    registerSeller: builder.mutation({
      query: ({ seller }) => ({
        url: "/auth/seller/register",
        method: "POST",
        body: seller,
      }),
    }),
    updateSellerActivity: builder.mutation({
      query: ({ id, activity }) => ({
        url: `/auth/seller/activity/${id}`,
        method: "PATCH",
        body: activity,
      }),
      invalidatesTags: ["update"],
    }),
    updateSellerPass: builder.mutation({
      query: ({ user, id }) => ({
        url: `/auth/seller/password/${id}`,
        method: "PATCH",
        body: user,
      }),
      invalidatesTags: ["update"],
    }),
    updateSellerStatus: builder.mutation({
      query: ({ status, id }) => ({
        url: `/auth/user/status/${id}`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["update"],
    }),
    updateSellerCompany: builder.mutation({
      query: ({ formData, id }) => ({
        url: `/auth/seller/company/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["update"],
    }),
    updateSeller: builder.mutation({
      query: ({ formData, id }) => ({
        url: `/auth/seller/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["update"],
    }),
    deleteSeller: builder.mutation({
      query: ({ user, id }) => ({
        url: `/auth/user/${id}`,
        method: "DELETE",
        body: user,
      }),
      invalidatesTags: ["update"],
    }),
    loginSeller: builder.mutation({
      query: (seller) => ({
        url: "/auth/seller/login",
        method: "POST",
        body: seller,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "seller",
            JSON.stringify({
              sellerToken: result.data.token,
              seller: result.data.seller,
            })
          );
          dispatch(
            sellerLoggedIn({
              sellerToken: result.data.token,
              seller: result.data.seller,
            })
          );
        } catch (error) {
          // Do Nothning
        }
      },
    }),
    sendOTPSeller: builder.mutation({
      query: (seller) => ({
        url: "/auth/seller/otp",
        method: "POST",
        body: seller,
      }),
    }),
    checkOTPSeller: builder.mutation({
      query: (seller) => ({
        url: "/auth/seller/otp/check",
        method: "POST",
        body: seller,
      }),
    }),
    changeOTPSeller: builder.mutation({
      query: (seller) => ({
        url: "/auth/seller/change",
        method: "POST",
        body: seller,
      }),
    }),
  }),
});

export const {
  useGetOneSellerQuery,
  useSellerEmailValidateQuery,
  useGetAllSellerQuery,
  useRegisterSellerMutation,
  useLoginSellerMutation,
  useSendOTPSellerMutation,
  useCheckOTPSellerMutation,
  useChangeOTPSellerMutation,
  useUpdateSellerActivityMutation,
  useUpdateSellerPassMutation,
  useUpdateSellerStatusMutation,
  useUpdateSellerCompanyMutation,
  useUpdateSellerMutation,
  useDeleteSellerMutation,
} = sllerAuthApi;