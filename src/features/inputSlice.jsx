import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    inputValues: {
        codeMateriel: '',
        marque: '',
        date: '',
        categorie: ''
    },
    items: []
};

const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        setInputValue: (state, action) => {
            const { field, value } = action.payload;
            state.inputValues[field] = value;
        },
        addItem: (state) => {
            state.items.push({ ...state.inputValues });
            state.inputValues = {
                codeMateriel: '',
                marque: '',
                date: '',
                categorie: ''
            };
        },
        deleteItem: (state, action) => {
            state.items.splice(action.payload, 1);
        },
        editItem: (state, action) => {
            const index = action.payload;
            if (index !== -1) {
                state.items[index] = { ...state.inputValues };
                state.inputValues = {
                    codeMateriel: '',
                    marque: '',
                    date: '',
                    categorie: ''
                };
            }
        }
    }
});

export const { setInputValue, addItem, deleteItem, editItem } = inputSlice.actions;

export default inputSlice.reducer;
