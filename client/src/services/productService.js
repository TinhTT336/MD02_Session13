import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../api/axios";

// goi API lay thong tin tat ca product
export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async () => {
    try {
      const response = await instance.get("products");
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// goi API xoa thong tin 1 product theo id
export const deleteById = createAsyncThunk(
  "product/deleteById",
  async (productId) => {
    try {
      await instance.delete(`products/${productId}`);
      return productId;
    } catch (error) {
      console.log(error);
    }
  }
);

// goi API them moi san pham
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (product) => {
    try {
      const response = await instance.post("products", product);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// goi API sua 1 san pham theo id
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product) => {
    try {
      const response = await instance.put(`products/${product.id}`, product);
      //   console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
