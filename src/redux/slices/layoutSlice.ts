import { createSlice } from "@reduxjs/toolkit";
import { TLayoutConfig } from "types";
import { apiSlice } from "./apiSlice";
import { RootState } from "redux/store.ts";

type ILayoutState = {
  config: TLayoutConfig | null;
};

const initialState: ILayoutState = {
  config: null,
};
export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.getConfiguration.matchFulfilled,
      (state: ILayoutState, { payload }: { payload: TLayoutConfig }) => {
        state.config = payload;
      }
    );
  },
});

export const layoutReducer = layoutSlice.reducer;

export const selectLayoutConfig = (state: RootState): TLayoutConfig =>
  state.layout.config;
