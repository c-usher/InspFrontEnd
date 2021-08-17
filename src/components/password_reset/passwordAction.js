import { passResetRequest, passUpdate } from "../../api/passApi";
import {
  resetReqError,
  resetReqPending,
  resetReqSuccess,
  updatePassSuccess,
} from "./passwordSlice";

export const sendPassResetEmail = (email) => async (dispatch) => {
  try {
    dispatch(resetReqPending());
    const { status, message } = await passResetRequest(email);
    if (status === "success") {
      return dispatch(resetReqSuccess({ message, email }));
    }
    dispatch(resetReqError(message));
  } catch (error) {
    return dispatch(resetReqError(error.message));
  }
};

export const updatePassword = (data) => async (dispatch) => {
  try {
    dispatch(resetReqPending());
    const { status, message } = await passUpdate(data);
    if (status === "success") {
      return dispatch(updatePassSuccess(message));
    }
    dispatch(resetReqError(message));
  } catch (error) {
    return dispatch(resetReqError(error.message));
  }
};
