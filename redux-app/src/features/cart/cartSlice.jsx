import { createSlice } from '@reduxjs/toolkit';
import cartData from './cartData';

const initialState = {
  items: cartData,
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      item.quantity += 1;
      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      }
    },
    calculateTotals: (state) => {
      state.totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0);
      state.totalAmount = state.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    },
  },
});

export const { increaseQuantity, decreaseQuantity, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
