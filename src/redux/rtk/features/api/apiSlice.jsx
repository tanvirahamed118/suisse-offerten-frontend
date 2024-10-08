import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const basequary = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_API_URL,
  prepareHeaders: async (headers) => {
    const sellerAuth = localStorage.getItem("seller");
    const seller = JSON.parse(sellerAuth);
    if (seller?.sellerToken) {
      const token = seller?.sellerToken;
      headers.set("token", `Bearer ${token}`);
    }
    const clientAuth = localStorage.getItem("client");
    const client = JSON.parse(clientAuth);
    if (client?.clientToken) {
      const token = client?.clientToken;
      headers.set("token", `Bearer ${token}`);
    }
    const adminAuth = localStorage.getItem("admin");
    const admin = JSON.parse(adminAuth);
    if (admin?.adminToken) {
      const token = admin?.adminToken;
      headers.set("token", `Bearer ${token}`);
    }
  },
});

export const apiSlice = createApi({
  reducerPath: "REST_API",
  baseQuery: async (args, api, extraOption) => {
    const result = await basequary(args, api, extraOption);
    return result;
  },
  endpoints: () => ({}),
});
