import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  offer: "",
};

const offerSlice = createSlice({
  name: "offerFilter",
  initialState,
  reducers: {
    choseOffer: (state, action) => {
      state.offer = action.payload;
    },
  },
});

export const { choseOffer } = offerSlice.actions;
export default offerSlice.reducer;
