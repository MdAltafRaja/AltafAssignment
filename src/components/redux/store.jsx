import {configureStore} from "@reduxjs/toolkit";
import fetchDataReducer from './slice/fetchData' 
import chatReducer from "./slice/chatDataslice";
import chatMessageReducer from "./slice/chatMessageSlice";
import profileReducer from "./slice/profileSlice"
import profileDataReducer from "./slice/profileDataSlice";

/* Centralized Store to manage the state*/

export const store=configureStore({
    reducer:{
            fetchData:fetchDataReducer,
            chatData:chatReducer,
            chatMessage:chatMessageReducer,
            profile: profileReducer,
            profileData: profileDataReducer,
    },

});