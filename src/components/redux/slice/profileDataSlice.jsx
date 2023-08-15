import { createSlice } from "@reduxjs/toolkit";
/* Profile Data Slice*/
const profileDataSlice = createSlice({
  name: "profileData",
  initialState: [],
  reducers: {
    setProfileData: (state, action) => action.payload,
  },
});

export const { setProfileData } = profileDataSlice.actions;
export default profileDataSlice.reducer;
