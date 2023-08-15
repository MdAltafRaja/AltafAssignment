import React, { useEffect } from "react";
import style from "../../css/homepage.module.css";
import ProfileDetails from "../profile/ProfileDetails";
import { toggleShowProfile } from "../redux/slice/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { setProfileData } from "../redux/slice/profileDataSlice";

/* Top Navigation for Navigation Name and user Profile*/
function TopNav() {
  const profileData = useSelector((state) => state.profileData);
  const data = useSelector((state) => state.fetchData.data?.users || []);

  const dispatch = useDispatch();
  const showProfile = useSelector((state) => state.profile);

  const getFilterData = (id) => {
    const filteredData = data.filter((el) => el.id === Number(id));
    dispatch(setProfileData(filteredData));
  };
  useEffect(() => {
    const ID = sessionStorage.getItem("id") || 1;
    getFilterData(Number(ID));
  }, []);

  return (
    <div>
      <div
        onClick={() => dispatch(toggleShowProfile())}
        className={style.profile}
      >
        <img src={profileData[0].profilepicture} alt="profile img" />
        <p>{profileData[0].name}</p>
      </div>

      {/*  Profile details component */}
      <ProfileDetails />
    </div>
  );
}

export default TopNav;
