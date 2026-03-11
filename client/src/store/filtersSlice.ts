import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type TSort =
  | "name"
  | "asc"
  | "desc"
  | "discountAsc"
  | "discountDesc"
  | null;

interface IInitState {
  sortType: TSort;
  categorySlug: string;
}

const initialState: IInitState = {
  sortType: null,
  categorySlug: "",
};

export const filtersSlice = createSlice({
  name: "filtersSlice",
  initialState,
  reducers: {
    setSortType(state, action: PayloadAction<TSort>) {
      state.sortType = action.payload;
    },
  },
});

export const { setSortType } = filtersSlice.actions;

export default filtersSlice.reducer;
