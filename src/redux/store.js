import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuReducer";
import filterReducer from "./filterReducer";

export const store = configureStore({
  reducer: { menu: menuReducer, filter: filterReducer },
});
