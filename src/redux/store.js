import { configureStore } from "@reduxjs/toolkit";
import cart from "./slice/cartSlice";
import pizza from "./slice/pizzasSlice";

export const store = configureStore({
  reducer: { pizza, cart },
});
