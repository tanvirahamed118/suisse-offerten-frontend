import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  category: "",
  location: "",
};

const leadFilterSlice = createSlice({
  name: "categoryFilter",
  initialState,
  reducers: {
    choseCategory: (state, action) => {
      state.category = action.payload;
    },
    choseLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { choseCategory, choseLocation } = leadFilterSlice.actions;
export default leadFilterSlice.reducer;
