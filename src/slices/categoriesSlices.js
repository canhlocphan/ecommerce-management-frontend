/* eslint-disable no-param-reassign */
// libs
import { createSlice } from "@reduxjs/toolkit";
// dataSources
import categorieList from "@/dataSources/categorieList";

export const categoriesSlices = createSlice({
  name: "categories",
  initialState: {
    value: categorieList,
  },
  reducers: {
    addCategorie: (state, currentValue) => {
      const arr = [...state.value, currentValue.payload];
      state.value = arr;
    },
    deleteCategorie: (state, currentValue) => {
      const index = state.value.findIndex(object =>
        object.id === currentValue.payload.id
      );
      state.value.splice(index, 1);
    }
  },
});

export const { addCategorie, deleteCategorie } = categoriesSlices.actions;

export const categories = (state) => state.categories.value;

export default categoriesSlices.reducer;
