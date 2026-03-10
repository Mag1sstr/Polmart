import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "./api";

interface IInitState {
  product: Product | null;
}

const initialState: IInitState = {
  product: null,
};

export const selectProductSlice = createSlice({
  name: "selectProductSlice",
  initialState,
  reducers: {
    setSelectProduct(state, action: PayloadAction<Product>) {
      state.product = action.payload;
    },
  },
});
export const { setSelectProduct } = selectProductSlice.actions;

export default selectProductSlice.reducer;
