import React, { useEffect } from "react";
import style from "../../css/profiledetails.module.css";
import UserData from "../routing/UserData";
import { useNavigate } from "react-router-dom";
import { setShowProfile } from "../redux/slice/profileSlice";
import { useDispatch, useSelector } from "react-redux";

function ProfileDetails() {
  const profileData = useSelector((state) => state.profileData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showProfile = useSelector((state) => state.profile);
  const handleClick = () => {
    dispatch(setShowProfile(false));
    sessionStorage.clear("id");
    navigate("/");
  };
  let clickHandler = () => {
    dispatch(setShowProfile(false));
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
      <div className={style.getProfile} onClick={clickHandler}>
        <UserData />
      </div>

      <button onClick={handleClick} className={style.signout_button}>
        Sign Out
      </button>
    </div>
  );
}

export default ProfileDetails;
