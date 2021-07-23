import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  units: [],
  isLoading: false,
  error: "",
  searchUnitList: [],
  selectedUnit: {},
  newNote: "",
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

        return row.unitNum.toLowerCase().includes(payload.toLowerCase());
      });
    },
    fetchUnitLoading: (state) => {
      state.isLoading = true;
    },
    fetchUnitSuccess: (state, { payload }) => {
      state.selectedUnit = payload;
      state.isLoading = false;
      state.error = "";
    },
    fetchUnitFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    addNoteLoading: (state) => {
      state.isLoading = true;
    },
    addNoteSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.newNote = payload;
      state.error = "";
    },
    addNoteFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    noteStatusUpdateLoading: (state) => {
      state.isLoading = true;
    },
    noteStatusUpdateSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.newNote = payload;
      state.error = "";
    },
    noteStatusUpdateFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = showUnitsSlice;

export const {
  fetchUnitsLoading,
  fetchUnitsSuccess,
  fetchUnitsFail,
  searchUnits,
  fetchUnitLoading,
  fetchUnitSuccess,
  fetchUnitFail,
  addNoteLoading,
  addNoteSuccess,
  addNoteFail,
  noteStatusUpdateLoading,
  noteStatusUpdateSuccess,
  noteStatusUpdateFail,
} = actions;

export default reducer;
