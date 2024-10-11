import { configureStore } from '@reduxjs/toolkit';
import employeReducer from './features/employeSlice';
import inputReducer from './features/inputSlice';

const store = configureStore({
    reducer: {
        employees: employeReducer,
        input: inputReducer,
    },
});

export default store;
