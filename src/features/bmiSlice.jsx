import { createSlice } from '@reduxjs/toolkit';

const bmiSlice = createSlice({
  name: 'bmi',
  initialState: {
    weight: 0,
    height: 0,
    bmi: 0,
    error: '', 
  },
  reducers: {
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
    setHeight: (state, action) => {
      const height = action.payload;

      if (height < 150) {
        state.error = "La taille doit être supérieure à 150 cm.";
      } else if (height <= 0 || isNaN(height)) {
        state.error = "Veuillez entrer une taille valide.";
      } else {
        state.error = ""; 
      }

      state.height = height;
    },
    calculateBMI: (state) => {
      state.error = '';

      if (state.height > 0) {
        state.bmi = (state.weight * 10000 / (state.height * state.height)).toFixed(2);
      } else {
        state.error = "Veuillez entrer une taille valide pour le calcul du Poids.";
      }
    },
  },
});

export const { setWeight, setHeight, calculateBMI } = bmiSlice.actions;
export default bmiSlice.reducer;
