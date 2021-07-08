import {
  fetchUnitsLoading,
  fetchUnitsSuccess,
  fetchUnitesFail,
} from "./unitsSlice";

const fetchAllUnits = () => (dispatch) => {
  dispatch(fetchUnitsLoading());
};
