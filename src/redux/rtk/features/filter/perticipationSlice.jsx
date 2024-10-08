import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  shortBy: "",
  placeBid: "",
  rejectBid: "",
};

const perticipationFilterSlice = createSlice({
  name: "perticipationFilter",
  initialState,
  reducers: {
    choseShortBy: (state, action) => {
      state.shortBy = action.payload;
    },
    chosePlaceBid: (state, action) => {
      state.placeBid = action.payload;
    },
    choseRejectBid: (state, action) => {
      state.rejectBid = action.payload;
    },
  },
});

export const { choseShortBy, chosePlaceBid, choseRejectBid } =
  perticipationFilterSlice.actions;
export default perticipationFilterSlice.reducer;
