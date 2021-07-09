import { configureStore } from "@reduxjs/toolkit";
import unitsReducer from "./pages/show_units/unitsSlice";
import loginReducer from "./components/login/loginSlice";

const store = configureStore({
  reducer: { units: unitsReducer, login: loginReducer },
});

export default store;
