import { configureStore } from "@reduxjs/toolkit";
import { quizeSlice } from "./features/quizeSlice";

export const store = configureStore({
  reducer: {
    quize: quizeSlice.reducer,
  },
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store