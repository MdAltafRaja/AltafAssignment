import React, { useContext } from "react";
import { DataContext } from "./DataContextProvider";
import style from "./profiledetails.module.css";
import UserData from "./UserData";
import { Link } from "react-router-dom";
function ProfileDetails() {
  const { profileData, setShowProfile, showProfile } = useContext(DataContext);
  const handleClick = () => {
    setShowProfile(false);
    sessionStorage.clear("id");
  };
  return (
    <div
      className={style.MainDiv}
      style={{ display: showProfile ? "block" : "none" }}
    >
      <div className={style.profile}>
        <img
          src={profileData[0].profilepicture}
          alt="profile"
          style={{ marginLeft: "35px" }}
        />
        <p style={{ marginLeft: "30px" }}>{profileData[0]?.name}</p>
        <p style={{ marginLeft: "30px" }}>{profileData[0]?.email}</p>
      </div>
      <hr />
      <div className={style.getProfile} onClick={() => setShowProfile(false)}>
        <UserData />
      </div>
      <Link to="/">
        <button onClick={handleClick} className={style.signout_button}>
          Sign Out
        </button>
      </Link>
    </div>
  );
}

export default ProfileDetails;
