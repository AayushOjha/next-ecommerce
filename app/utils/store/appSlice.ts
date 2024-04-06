import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAppSlice, IProduct } from "../interfaces";

const initialState: IAppSlice = {
  cart: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<IProduct>) => {
      state.cart = [...state.cart, action.payload];
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addProductToCart, removeProductFromCart } = appSlice.actions;
export default appSlice.reducer;
