import {
  fetchUnitsLoading,
  fetchUnitsSuccess,
  fetchUnitsFail,
  searchUnits,
} from "./unitsSlice";

import { getAllUnits } from "../../api/unitsApi";

export const fetchAllUnits = () => async (dispatch) => {
  dispatch(fetchUnitsLoading());
  try {
    const result = await getAllUnits();
    dispatch(fetchUnitsSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchUnitsFail(error.message));
  }
};

export const filterSearchUnit = (str) => (dispatch) => {
  dispatch(searchUnits(str));
};
