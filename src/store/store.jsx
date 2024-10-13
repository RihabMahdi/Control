import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import mealsReducer from '../features/mealsSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        meals: mealsReducer
    }
});
