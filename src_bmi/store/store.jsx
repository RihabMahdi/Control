import { configureStore } from '@reduxjs/toolkit';
import bmiReducer from '../features/bmiSlice';

export const store = configureStore({
  reducer: {
    bmi: bmiReducer,
  },
});
