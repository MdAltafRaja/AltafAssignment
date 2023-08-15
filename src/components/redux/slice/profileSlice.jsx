import { createSlice } from "@reduxjs/toolkit";
/* Profile Slice*/
const profileSlice = createSlice({
  name: "profile",
  initialState: false,
  reducers: {
    setShowProfile: (state, action) => action.payload,
    toggleShowProfile: (state) => !state,
  },
});

export const { setShowProfile, toggleShowProfile } = profileSlice.actions;
export default profileSlice.reducer;
