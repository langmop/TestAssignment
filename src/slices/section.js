import { createSlice } from "@reduxjs/toolkit";

const initialState = { sectionType: "ForYou" };

const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    sectionTypeAction: (state, action) => {
      const { value } = action.payload;
      state.sectionType = value;
    },
  },
});

export const { sectionTypeAction } = sectionSlice.actions;
export default sectionSlice.reducer;
