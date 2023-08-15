import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
/* Fetch Data Slice fetching data from the endpoint*/
export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await fetch("https://panorbit.in/api/users.json");
  return response.json();
});

const fetchDataSlice = createSlice({
  name: "fetchData",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default fetchDataSlice.reducer;
