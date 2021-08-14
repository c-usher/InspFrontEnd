import { newUser } from "../../api/userApi";
import { newUserPending, newUserSuccess, newUserError } from "./newUserSlice";

export const createNewUser = (data) => async (dispatch) => {
  try {
    const result = await newUser(data);
    result.status === "success"
      ? dispatch(newUserSuccess(result.message))
      : dispatch(newUserError(result.message));
    console.log(result);
  } catch (error) {
    dispatch(newUserError(error.message));
  }
};
