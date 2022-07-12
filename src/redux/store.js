import { configureStore } from "@reduxjs/toolkit";
import cart from "./slice/cartSlice";
import products from "./slice/productsSlice";

export const store = configureStore({
  reducer: { products, cart },
});
