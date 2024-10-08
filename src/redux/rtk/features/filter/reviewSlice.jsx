import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  star: "",
  category: "",
};

const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  reducers: {
    choseStar: (state, action) => {
      state.star = action.payload;
    },
    choseCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { choseStar, choseCategory } = reviewSlice.actions;
export default reviewSlice.reducer;
