import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import adminReducer from "./adminSlice";
import selectProductSlice from "./selectProductSlice";
import filtersSlice from "./filtersSlice";
import compareSlice from "./compareSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    admin: adminReducer,
    selectProduct: selectProductSlice,
    filters: filtersSlice,
    compare: compareSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
