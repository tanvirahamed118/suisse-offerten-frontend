import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  job: "",
};

const categorySlice = createSlice({
  name: "categoryFilter",
  initialState,
  reducers: {
    choseCategory: (state, action) => {
      state.job = action.payload;
    },
  },
});

export const { choseCategory } = categorySlice.actions;
export default categorySlice.reducer;
