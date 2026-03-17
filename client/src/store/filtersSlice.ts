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
  rangePrice: [n: number, n: number];
}

const initialState: IInitState = {
  sortType: null,
  categorySlug: "",
  search: "",
  rangePrice: [0, 0],
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
    setMinRange(state, action: PayloadAction<number>) {
      state.rangePrice[0] = action.payload;
    },
    setMaxRange(state, action: PayloadAction<number>) {
      state.rangePrice[1] = action.payload;
    },
    setPriceRange(state, action) {
      state.rangePrice = action.payload;
    },
  },
});

export const { setSortType, setSearch, setPriceRange, setMaxRange } =
  filtersSlice.actions;

export default filtersSlice.reducer;
