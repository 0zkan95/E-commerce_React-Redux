import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from '../features/sliderSlice';
import productsReducer from "../features/productsSlice";
import cartReducer from "../features/cartSlice";
import authReducer from "../features/AuthSlice";
import wishlistReducer from "../features/wishlistSlice"; // Import wishlist reducer


export const store = configureStore({
  reducer: { 
    slider: sliderReducer,
    products: productsReducer,
    cart: cartReducer,
    user: authReducer,
    wishlist: wishlistReducer, // Add wishlist reducer
  },
});
