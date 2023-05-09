import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoading: {} };

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    updateLoader: (state, action) => {
      const { value } = action.payload;
      state.isLoading = value;
    },
  },
});

export const { updateLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
