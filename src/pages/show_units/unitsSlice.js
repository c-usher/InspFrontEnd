import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  units: [],
  isLoading: false,
  error: "",
};

const showUnitsSlice = createSlice({
  name: "showUnits",
  initialState,
  reducers: {
    fetchUnitsLoading: (state) => {
      state.isLoading = true;
    },
    fetchUnitsSuccess: (state, { payload }) => {
      state.units = payload;
      state.isLoading = false;
    },
    fetchUnitsFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = showUnitsSlice;

export const { fetchUnitsLoading, fetchUnitsSuccess, fetchUnitesFail } =
  actions;

export default reducer;
