import { createSlice } from "@reduxjs/toolkit";

const productStore = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addProduct, deleteProduct } = productStore.actions;
export default productStore.reducer;
