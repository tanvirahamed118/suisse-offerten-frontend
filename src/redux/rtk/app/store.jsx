import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import sellerSlice from "../features/auth/seller/sellerSlice";
import clientSlice from "../features/auth/client/clientSlice";
import adminSlice from "../features/auth/admin/adminSlice";
import jobFilterSlice from "../features/filter/jobFilterSlice";
import perticipationSlice from "../features/filter/perticipationSlice";
import offerSlice from "../features/filter/offerSlice";
import reviewSlice from "../features/filter/reviewSlice";
import leadFilterSlice from "../features/filter/leadFilterSlice";
import formSlice from "../features/formReucer/formSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    admin: adminSlice,
    seller: sellerSlice,
    client: clientSlice,
    jobFilter: jobFilterSlice,
    perticipation: perticipationSlice,
    offerFilter: offerSlice,
    reviewFilter: reviewSlice,
    leadFilter: leadFilterSlice,
    choseId: formSlice,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(apiSlice.middleware),
});

export default store;
