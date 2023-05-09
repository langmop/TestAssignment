import { createSlice } from "@reduxjs/toolkit";

const initialState = { modalKeys: {} };

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { key, value } = action.payload;
      state.modalKeys[key] = value;
    },
  },
});

export const { openModal } = modalSlice.actions;
export default modalSlice.reducer;
