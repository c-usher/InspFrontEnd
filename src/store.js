import { configureStore } from "@reduxjs/toolkit";
import unitsReducer from "./pages/show_units/unitsSlice";

const store = configureStore({
  reducer: { units: unitsReducer },
});

export default store;
