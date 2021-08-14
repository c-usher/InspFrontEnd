import { newUser } from "../../api/userApi";
import { newUserPending, newUserSuccess, newUserError } from "./newUserSlice";

export const createNewUser = (data) => async (dispatch) => {
  try {
    const result = await newUser(data);
    console.log(result);
    dispatch(newUserSuccess(result.message));
  } catch (error) {
    dispatch(newUserError(error.message));
  }
};
