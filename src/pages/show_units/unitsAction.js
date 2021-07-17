import {
  fetchUnitsLoading,
  fetchUnitsSuccess,
  fetchUnitsFail,
  searchUnits,
  fetchUnitLoading,
  fetchUnitSuccess,
  fetchUnitFail,
} from "./unitsSlice";

import { getAllUnits, getUnit } from "../../api/unitsApi";

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

export const filterSearchUnit = (str) => (dispatch) => {
  dispatch(searchUnits(str));
};
