import { createSlice } from '@reduxjs/toolkit';

const bmiSlice = createSlice({
  name: 'bmi',
  initialState: {
    weight: 0,
    height: 0,
    bmi: 0,
  },
  reducers: {
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
    setHeight: (state, action) => {
      state.height = action.payload;
    },
    calculateBMI: (state) => {
      if (state.height > 0) {
        state.bmi = (state.weight *10000 / (state.height * state.height)).toFixed(2);
      }
    },
  },
});

export const { setWeight, setHeight, calculateBMI } = bmiSlice.actions;
export default bmiSlice.reducer;
