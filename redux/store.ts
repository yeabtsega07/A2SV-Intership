import { configureStore } from "@reduxjs/toolkit";
import { opportunitiesAPI } from "./slice/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [opportunitiesAPI.reducerPath]: opportunitiesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(opportunitiesAPI.middleware),
});

setupListeners(store.dispatch);
