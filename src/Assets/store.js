import { configureStore } from "@reduxjs/toolkit";
import productStore from "./productStore";
export const store = configureStore({
  reducer: {
    todos: productStore,
  },
});
