import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categoriesSlices';

export default configureStore({
  reducer: {
    categories: categoriesReducer
  },
});