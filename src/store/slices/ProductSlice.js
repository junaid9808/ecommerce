import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const FatchData = createAsyncThunk("fetchData", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(FatchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(FatchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(FatchData.rejected, (state, action) => {
      console.log("error", action.payload);
      state.isError = true;
    });
  },
});
export default productSlice.reducer;
