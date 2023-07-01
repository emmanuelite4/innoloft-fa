import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices";
import { layoutReducer } from "redux/slices";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
