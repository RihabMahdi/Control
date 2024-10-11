import { configureStore } from '@reduxjs/toolkit';
import bmiReducer from '../features/bmiSlice';

 const store = configureStore({
  reducer: {
    bmi: bmiReducer,
  },
});

export default store;