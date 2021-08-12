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
    registrationPending: (state) => {
      state.isLoading = true;
    },
    registrationSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "Success";
      state.message = payload;
    },
    registrationError: (state, { payload }) => {
      state.isLoading = false;
      state.status = "Error";
      state.message = payload;
    },
  },
});
