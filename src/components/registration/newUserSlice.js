const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isLoading: false,
  status: "",
  message: "",
};

const newUserSlice = createSlice({
  name: "userRegistration",
  initialState,
  reducers: {
    newUserPending: (state) => {
      state.isLoading = true;
    },
    newUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "Success";
      state.message = payload;
    },
    newUserError: (state, { payload }) => {
      state.isLoading = false;
      state.status = "Error";
      state.message = payload;
    },
  },
});

const { reducer, actions } = newUserSlice;

export const { newUserPending, newUserSuccess, newUserError } = actions;

export default reducer;
