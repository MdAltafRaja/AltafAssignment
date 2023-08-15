import { createSlice } from "@reduxjs/toolkit";
/* Chat Message Slice*/
const chatMessageSlice = createSlice({
  name: "chatMessage",
  initialState: false,
  reducers: {
    toggleShowChatMsg: (state) => !state,
    setShowChatMsg: (state, action) => action.payload,
  },
});

export const { setShowChatMsg, toggleShowChatMsg } = chatMessageSlice.actions;
export default chatMessageSlice.reducer;
