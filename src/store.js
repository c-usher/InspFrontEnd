import { configureStore } from "@reduxjs/toolkit";
import unitsReducer from "./pages/show_units/unitsSlice";
import loginReducer from "./components/login/loginSlice";
import userReducer from "./pages/dashboard/userSlice";
import createUnitReducer from "./components/add_unit_form/addUnitSlice";

const store = configureStore({
  reducer: {
    units: unitsReducer,
    login: loginReducer,
    user: userReducer,
    newUnit: createUnitReducer,
  },
});

export default store;
