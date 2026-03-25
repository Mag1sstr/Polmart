import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "./api";
import { getLocalStorageValue } from "../utils/getLocalStorageValue";

interface IInitState {
  compareData: Product[];
}

const initialState: IInitState = {
  compareData: getLocalStorageValue("ptcompare") || [],
};

export const compareSlice = createSlice({
  name: "compareSlice",
  initialState,
  reducers: {
    addToCompare(state, action: PayloadAction<Product>) {
      if (state.compareData.some((el) => el._id === action.payload._id)) return;
      state.compareData.push(action.payload);
      localStorage.setItem("ptcompare", JSON.stringify(state.compareData));
    },
    deleteCompareItem(state, action: PayloadAction<string>) {
      state.compareData = state.compareData.filter(
        (el) => el._id !== action.payload,
      );
      localStorage.setItem("ptcompare", JSON.stringify(state.compareData));
    },
  },
});

export const { addToCompare, deleteCompareItem } = compareSlice.actions;

export default compareSlice.reducer;
