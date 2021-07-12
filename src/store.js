import { configureStore } from "@reduxjs/toolkit";
import unitsReducer from "./pages/show_units/unitsSlice";
import loginReducer from "./components/login/loginSlice";
import userReducer from "./pages/dashboard/userSlice";

const store = configureStore({
  reducer: { units: unitsReducer, login: loginReducer, user: userReducer },
});

export default store;
