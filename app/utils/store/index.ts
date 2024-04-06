import { configureStore } from "@reduxjs/toolkit";
import appReducer from "@/app/utils/store/appSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
