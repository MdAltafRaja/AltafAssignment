import { createSlice } from "@reduxjs/toolkit";
/* Chat Data Slice*/
const chatDataSlice = createSlice({
  name: "chatData",
  initialState: [],
  reducers: {
    setChatData: (state, action) => action.payload,
  },
});

export const { setChatData } = chatDataSlice.actions;
export default chatDataSlice.reducer;
