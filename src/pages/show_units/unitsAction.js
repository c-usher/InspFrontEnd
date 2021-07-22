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
  noteStatusUpdateLoading,
  noteStatusUpdateSuccess,
  noteStatusUpdateFail,
  fetchNoteLoading,
} from "./unitsSlice";

import {
  getAllUnits,
  getUnit,
  createNote,
  updateNoteStatus,
} from "../../api/unitsApi";

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
    dispatch(
      fetchUnitSuccess(result.data.result.length && result.data.result[0])
    );
  } catch (error) {
    dispatch(fetchUnitFail(error.message));
  }
};

export const fetchNote = (_id) => async (dispatch) => {
  dispatch(fetchNoteLoading());
  try {
    const result = await getUnit(_id);
    dispatch(
      fetchUnitSuccess(result.data.result.length && result.data.result[0])
    );
  } catch (error) {
    dispatch(fetchUnitFail(error.message));
  }
};

export const addNewNote = (_id, noteObj) => async (dispatch) => {
  dispatch(addNoteLoading());
  try {
    const result = await createNote(_id, noteObj);
    if (result.status === "error") {
      return dispatch(addNoteFail(result.message));
    }

    dispatch(fetchUnit(_id));
    dispatch(addNoteSuccess(result.message));
  } catch (error) {
    console.log(error.message);
    dispatch(addNoteFail(error.message));
  }
};

export const noteStatusUpdate = (_id) => async (dispatch) => {
  dispatch(noteStatusUpdateLoading());
  try {
    const result = await updateNoteStatus(_id);
    if (result.status === "error") {
      return dispatch(noteStatusUpdateFail(result.message));
    }
    dispatch(fetchUnit(_id));
    dispatch(noteStatusUpdateSuccess(result.message));
  } catch (error) {
    console.log(error.message);
    dispatch(noteStatusUpdateFail(error.message));
  }
};

export const filterSearchUnit = (str) => (dispatch) => {
  dispatch(searchUnits(str));
};
