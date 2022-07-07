import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},
});

export default pizzasSlice.reducer;
