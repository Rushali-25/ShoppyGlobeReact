import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/cartSlice"; // Ensure path is correct

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
