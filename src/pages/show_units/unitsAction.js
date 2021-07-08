import axios from "axios";

import {
  fetchUnitsLoading,
  fetchUnitsSuccess,
  fetchUnitsFail,
  searchUnits,
} from "./unitsSlice";

export const fetchAllUnits = () => async (dispatch) => {
  dispatch(fetchUnitsLoading());
  try {
    const result = await axios.get("http://localhost:3001/units", {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxMDExQHRlc3QuY29tIiwiaWF0IjoxNjI1NzE0OTE4LCJleHAiOjE2MjU3MTU4MTh9.ypuMzMpe-OCrgrITMY6f5rrfyftuvNT9begYfL43SEY",
      },
    });
    console.log(result);

    dispatch(fetchUnitsSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchUnitsFail(error.message));
  }
};

export const filterSearchUnit = (str) => (dispatch) => {
  dispatch(searchUnits(str));
};
