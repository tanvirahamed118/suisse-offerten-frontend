import { apiSlice } from "../../api/apiSlice";
import { clientLoggedIn } from "./clientSlice";

export const userAuthApi = apiSlice.injectEndpoints({
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getOneClientByEmail: builder.query({
      query: ({ jobEmail }) => ({
        url: "/auth/client/access/email",
        method: "GET",
        body: jobEmail,
      }),
      providesTags: ["update"],
    }),
    getOneClientById: builder.query({
      query: (id) => ({
        url: `/auth/client/${id}`,
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    getAllClient: builder.query({
      query: () => ({
        url: "/auth/client",
        method: "GET",
      }),
      providesTags: ["update"],
    }),
    registerClient: builder.mutation({
      query: ({ client }) => ({
        url: "/auth/client/register",
        method: "POST",
        body: client,
      }),
    }),
    verifyClient: builder.mutation({
      query: (code) => ({
        url: "/auth/client/verify/check",
        method: "POST",
        body: { code },
      }),
    }),
    updateClient: builder.mutation({
      query: ({ client, id }) => ({
        url: `/auth/client/${id}`,
        method: "PATCH",
        body: client,
      }),
      invalidatesTags: ["update"],
    }),
    deleteClient: builder.mutation({
      query: (id) => ({
        url: `/auth/user/by/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["update"],
    }),
    loginClient: builder.mutation({
      query: (client) => ({
        url: "/auth/client/login",
        method: "POST",
        body: client,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "client",
            JSON.stringify({
              clientToken: result.data.token,
              client: result.data.client,
            })
          );
          dispatch(
            clientLoggedIn({
              clientToken: result.data.token,
              client: result.data.client,
            })
          );
        } catch (error) {
          // Do Nothning
        }
      },
    }),
    sendOTPClient: builder.mutation({
      query: (client) => ({
        url: "/auth/client/otp",
        method: "POST",
        body: client,
      }),
    }),
    checkOTPClient: builder.mutation({
      query: (client) => ({
        url: "/auth/client/otp/check",
        method: "POST",
        body: client,
      }),
    }),
    changeOTPClient: builder.mutation({
      query: (client) => ({
        url: "/auth/client/change",
        method: "POST",
        body: client,
      }),
    }),
  }),
});

export const {
  useGetOneClientByEmailQuery,
  useGetOneClientByIdQuery,
  useGetAllClientQuery,
  useRegisterClientMutation,
  useVerifyClientMutation,
  useLoginClientMutation,
  useSendOTPClientMutation,
  useCheckOTPClientMutation,
  useChangeOTPClientMutation,
  useUpdateClientMutation,
  useDeleteClientMutation,
} = userAuthApi;
