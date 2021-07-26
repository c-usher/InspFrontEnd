import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  error: "",
  successMsg: "",
};
const newUnitSlice = createSlice({
  name: "newUnit",
  initialState,
  reducers: {
    createUnitPending: (state) => {
      state.isLoading = true;
    },
    createUnitSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.successMsg = payload;
    },
    createUnitFail: (state, { payload }) => {
      state.isLoading = true;
      state.error = payload;
    },
  },
});

export const { createUnitPending, createUnitSuccess, createUnitFail } =
  newUnitSlice.actions;
export default newUnitSlice.reducer;
