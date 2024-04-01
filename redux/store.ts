import { configureStore } from "@reduxjs/toolkit";
import { opportunitiesAPI } from "./slice/opportunitesAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./slice/authAPI";
import authSlice from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [opportunitiesAPI.reducerPath]: opportunitiesAPI.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(opportunitiesAPI.middleware, authApi.middleware),
});

setupListeners(store.dispatch);


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;