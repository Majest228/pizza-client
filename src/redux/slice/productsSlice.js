import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzas: [],
  sushies: [],
  rolls: [],
  sets: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.pizzas = action.payload;
    },
    setSushies(state, action) {
      state.sushies = action.payload;
    },
    setRolls(state, action) {
      state.rolls = action.payload;
    },
    setSets(state, action) {
      state.sets = action.payload;
    },
  },
});

export const { setPizzas, setSushies, setRolls, setSets } = productsSlice.actions;

export default productsSlice.reducer;
