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
  search: string;
}

const initialState: IInitState = {
  sortType: null,
  categorySlug: "",
  search: "",
};

export const filtersSlice = createSlice({
  name: "filtersSlice",
  initialState,
  reducers: {
    setSortType(state, action: PayloadAction<TSort>) {
      state.sortType = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setSortType, setSearch } = filtersSlice.actions;

export default filtersSlice.reducer;
