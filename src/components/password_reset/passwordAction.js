import { passResetRequest } from "../../api/passApi";
import {
  resetReqError,
  resetReqPending,
  resetReqSuccess,
} from "./passwordSlice";

export const sendPassResetEmail = (email) => async (dispatch) => {
  try {
    dispatch(resetReqPending());
    const { status, message } = await passResetRequest(email);
    if (status === "success") {
      return dispatch(resetReqSuccess(message));
    }
    dispatch(resetReqError(message));
  } catch (error) {
    return dispatch(resetReqError(error.message));
  }
};
