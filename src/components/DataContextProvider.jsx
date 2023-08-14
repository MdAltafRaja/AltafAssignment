import React, { createContext, useEffect, useState } from "react";
import { fetchData } from "./FetchData";
export const DataContext = createContext();
function DataContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [showChatMsg, setShowChatMsg] = useState(false);
  const [chatData, setChatData] = useState([]);

  // useEffect(()=>{
  //     fetch("https://panorbit.in/api/users.json")
  //     .then((resp)=>resp.json())
  //     .then((tempData)=>setData(tempData))
  // },[])

  const getAllData = () => {
    fetchData()
      .then((res) => {
        setData(res.data.users);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  console.log(data);

  const getFilterData = (id) => {
    fetchData()
      .then((res) => {
        console.log("res>>>>>>>", res);
        setProfileData(res.data.users.filter((el) => el.id === Number(id)));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("profileData", profileData);

  return (
    <DataContext.Provider
      value={{
        data,
        getAllData,
        profileData,
        getFilterData,
        setShowProfile,
        showProfile,
        showChatMsg,
        setShowChatMsg,
        chatData,
        setChatData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
