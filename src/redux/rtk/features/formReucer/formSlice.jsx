import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  id: null,
};

const formSlice = createSlice({
  name: "categoryFilter",
  initialState,
  reducers: {
    choseId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { choseId } = formSlice.actions;
export default formSlice.reducer;
