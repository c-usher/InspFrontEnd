import { addNewUnit } from "../../api/unitsApi";
import {
  createUnitFail,
  createUnitPending,
  createUnitSuccess,
} from "./addUnitSlice";

export const createNewUnit = (formData) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(createUnitPending());

      const result = await addNewUnit(formData);
      console.log(result);
      dispatch(createUnitSuccess());
    } catch (error) {
      console.log(error);
      dispatch(createUnitFail(error.message));
    }
  });
};
