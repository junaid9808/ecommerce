import { createSlice } from "@reduxjs/toolkit";

const addToCart = createSlice({
  name: "cart",
  initialState: {
    count: 0,
  },
  reducers: {
    addCart: (state, action) => {
      state.count = action.payload;
    },
    incrementCart: (state) => {
      state.count += 1;
    },
    decrementCart: (state) => {
      state.count -= 1;
    },
  },
});
export default addToCart.reducer;
export const { addCart, incrementCart, decrementCart } = addToCart.actions;
