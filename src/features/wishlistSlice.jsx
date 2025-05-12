import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlistItems: [], // Array to hold wishlist products
  // You could add amount or other properties if needed, but typically wishlist just stores the item ID or object
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    // Action to add an item to the wishlist
    addToWishlist: (state, action) => {
      const newItem = action.payload;
      // Prevent adding duplicates - check if item already exists
      const existingItem = state.wishlistItems.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.wishlistItems.push(newItem);
        // Optionally add feedback here (e.g., using a notification library)
        console.log(`${newItem.name} added to wishlist`);
      } else {
        // Optionally provide feedback that item is already in wishlist
        console.log(`${newItem.name} is already in the wishlist`);
      }
    },
    // Action to remove an item from the wishlist
    removeFromWishlist: (state, action) => {
      const itemIdToRemove = action.payload; // Expecting the item ID
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== itemIdToRemove
      );
      console.log(`Item ${itemIdToRemove} removed from wishlist`);
    },
    // Optional: Action to clear the entire wishlist
    clearWishlist: (state) => {
      state.wishlistItems = [];
    },
  },
});

// Export actions
export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;

// Export reducer
export default wishlistSlice.reducer;
