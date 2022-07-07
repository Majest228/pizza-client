import { configureStore } from "@reduxjs/toolkit";
import pizzas from "./slice/pizzasSlice";
import cart from "./slice/cartSlice";

export const store = configureStore({
  reducer: { pizzas, cart },
});
