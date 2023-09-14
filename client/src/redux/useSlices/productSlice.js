import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import {
  createProduct,
  deleteById,
  getAllProduct,
  updateProduct,
} from "../../services/productService";

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle", //trang thai truoc khi duoc chay
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.status = "Loading"; //cho
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        // console.log(action);
        state.status = "Successfull"; //thanh cong
        state.data = action.payload; //du lieu tra ve
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.status = "Failed"; //that bai
        state.error = action.error.message; //noi dung loi
      })
      .addCase(deleteById.fulfilled, (state, action) => {
        state.data = state.data.filter((st) => st.id !== action.payload);
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.data.push(action.payload);
        // console.log(action);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        [...state.data, action.payload];
        // console.log(action);
      });
  },
});

export default productSlice.reducer;
