import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMeals = createAsyncThunk('meals/fetchMeals', async () => {
    const response = await axios.get('http://localhost:3000/meals');
    return response.data;
});

const mealsSlice = createSlice({
    name: 'meals',
    initialState: {
        meals: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMeals.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMeals.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.meals = action.payload;
            })
            .addCase(fetchMeals.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default mealsSlice.reducer;
