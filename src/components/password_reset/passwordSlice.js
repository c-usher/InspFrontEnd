import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
};

const passResetSlice = createSlice({
  name: "passReset",
  initialState,
  reducers: {
    resetReqPending: (state) => {
      state.isLoading = true;
    },
    resetReqSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload;
    },
    resetReqError: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = payload;
    },
  },
});

const { reducer, actions } = passResetSlice;

export const { resetReqPending, resetReqSuccess, resetReqError } = actions;

export default reducer;
