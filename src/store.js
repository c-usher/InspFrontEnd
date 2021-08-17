import { configureStore } from "@reduxjs/toolkit";
import unitsReducer from "./pages/show_units/unitsSlice";
import loginReducer from "./components/login/loginSlice";
import userReducer from "./pages/dashboard/userSlice";
import createUnitReducer from "./components/add_unit_form/addUnitSlice";
import createUserReducer from "./components/registration/newUserSlice";
import passResetReducer from "./components/password_reset/passwordSlice";

const store = configureStore({
  reducer: {
    units: unitsReducer,
    login: loginReducer,
    user: userReducer,
    newUnit: createUnitReducer,
    newUser: createUserReducer,
    passReset: passResetReducer,
  },
});

export default store;
