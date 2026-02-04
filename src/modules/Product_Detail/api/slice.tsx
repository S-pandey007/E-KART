import { createSlice } from "@reduxjs/toolkit";

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    currentOpenedProductId: null,
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setCurrentOpenedProductId(state, action) {
      state.currentOpenedProductId = action.payload;
    },
    setData: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearCurrectProductDetail: (state) => {
      state.data = null;
      state.currentOpenedProductId = null
    },
  },
});

export const {
  setCurrentOpenedProductId,
  setData,
  setError,
  setLoading,
  clearCurrectProductDetail,
} = productDetailSlice.actions;
export default productDetailSlice.reducer;
