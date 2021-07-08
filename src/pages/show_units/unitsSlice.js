import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  units: [],
  isLoading: false,
  error: "",
  searchUnitList: [],
};

const showUnitsSlice = createSlice({
  name: "showUnits",
  initialState,
  reducers: {
    fetchUnitsLoading: (state) => {
      state.isLoading = true;
    },
    fetchUnitsSuccess: (state, action) => {
      state.units = action.payload;
      state.searchUnitList = action.payload;
      state.isLoading = false;
    },
    fetchUnitsFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    searchUnits: (state, { payload }) => {
      state.searchUnitList = state.units.filter((row) => {
        if (!payload) return row;

        return row.subject.toLowerCase().includes(payload.toLowerCase());
      });
    },
  },
});

const { reducer, actions } = showUnitsSlice;

export const {
  fetchUnitsLoading,
  fetchUnitsSuccess,
  fetchUnitsFail,
  searchUnits,
} = actions;

export default reducer;
