import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "reastaurant",
  initialState: {
    restaurantsList: [],
  },
  reducers: {
    setRestaurantsList: (state, action) => {
      state.restaurantsList = action.payload;
    },
    clearRestaurants: (state) => {
      state.restaurantsList = [];
    },
  },
});

export const { setRestaurantsList, clearRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;
