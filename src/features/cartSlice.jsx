import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    totalQuantity: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);

            state.totalQuantity += newItem.quantity;

            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.cartItems.push({
                    ...newItem,
                    quantity: newItem.quantity,
                });
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.cartItems = state.cartItems.filter(item => item.id !== id);
            }
        },
        clearCart(state) {
            state.cartItems = [];
            state.totalQuantity = 0;
        }
    }
});

// Export actions
export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer; 
