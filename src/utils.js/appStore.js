import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./slices/restaurantSlice";

const appStore = configureStore({
  reducer: {
    restaurant: restaurantReducer,
  },
});

export default appStore;
