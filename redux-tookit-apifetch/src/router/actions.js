import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

// Thunk for fetching all products
export const fetchallproducts = createAsyncThunk('fetch/datafetch', async () => {

    const response = await axios.get("https://dummyjson.com/products/");
    console.log(response);
    console.log(response.data);
    return response.data.products;  


});

// // Uncomment and fix the thunk for fetching a single product if needed
// export const fetchsingleproducts = createAsyncThunk('fetch/singleproduct', async (id) => {
//   const response = await axios.get(`https://dummyjson.com/products/${id}`);
//   return response.data.product;    
// });

const Productslicer = createSlice({
  name: "products",
  initialState: {
    allproducts: [],
    // singleproduct: {},
    isLoading: false,
    success: "",
    error: ""
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchallproducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchallproducts.fulfilled, (state, action) => {
        state.allproducts = action.payload;
        state.isLoading = false;
        state.success = "Data is successfully fetched";
      })
      .addCase(fetchallproducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export default Productslicer.reducer;
