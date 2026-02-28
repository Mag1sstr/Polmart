import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import adminReducer from "./adminSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    admin: adminReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

