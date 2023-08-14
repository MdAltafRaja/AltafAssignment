import React, { useContext, useEffect } from "react";
import { DataContext } from "./DataContextProvider";
import style from "./homepage.module.css";
import ProfileDetails from "./ProfileDetails";
function TopNav() {
  const {
    profileData,
    setShowProfile,
    showProfile,
    getFilterData,
  } = useContext(DataContext);
  useEffect(() => {
    const ID = sessionStorage.getItem("id") || 1;
    getFilterData(Number(ID));
  }, []);
  console.log("profileData", profileData);
  return (
    <div>
      <div
        onClick={() => setShowProfile(!showProfile)}
        className={style.profile}
      >
        <img src={profileData[0].profilepicture} alt="profile img" />
        <p>{profileData[0].name}</p>
      </div>
      {/* -------- (Profile details component)----- */}
      <ProfileDetails />
    </div>
  );
}

export default TopNav;
