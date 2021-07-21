import {
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
} from "./unitsSlice";

import { getAllUnits, getUnit, updateNote } from "../../api/unitsApi";

export const fetchAllUnits = () => async (dispatch) => {
  dispatch(fetchUnitsLoading());
  try {
    const result = await getAllUnits();
    dispatch(fetchUnitsSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchUnitsFail(error.message));
  }
};

export const fetchUnit = (_id) => async (dispatch) => {
  dispatch(fetchUnitLoading());
  try {
    const result = await getUnit(_id);
    dispatch(fetchUnitSuccess(result.data.result[0]));
  } catch (error) {
    dispatch(fetchUnitFail(error.message));
  }
};

export const addNewNote = (_id, noteObj) => async (dispatch) => {
  dispatch(addNoteLoading());
  try {
    const result = await updateNote(_id, noteObj);
    console.log(result);
    if (result.status === "error") {
      return dispatch(addNoteFail(result.message));
    }
    dispatch(addNoteSuccess());
  } catch (error) {
    console.log(error.message);
    dispatch(addNoteFail(error.message));
  }
};

export const filterSearchUnit = (str) => (dispatch) => {
  dispatch(searchUnits(str));
};
