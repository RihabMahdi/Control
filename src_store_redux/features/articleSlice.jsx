import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [
    { id: 1, title: 'First Article', description: 'This is the first article.' },
    { id: 2, title: 'Second Article', description: 'This is the second article.' },
    { id: 3, title: 'Third Article', description: 'This is the third article.' },
    { id: 4, title: 'Four Article', description: 'This is the first article.' },
    { id: 5, title: 'Five Article', description: 'This is the second article.' },
    { id: 6, title: 'Six Article', description: 'This is the third article.' }
  ]
};

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticle: (state, action) => {
      state.articles.push(action.payload);
    },
    deleteArticle: (state, action) => {
      state.articles = state.articles.filter(article => article.id !== action.payload);
    }
  }
});

export const { addArticle, deleteArticle } = articleSlice.actions;
export default articleSlice.reducer;
