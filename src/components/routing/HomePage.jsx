import React, { useEffect } from "react";
import style from "../../css/homepage.module.css";
import LeftNav from "../navbar/LeftNav";
import { useParams } from "react-router-dom";
import TopNav from "../navbar/TopNav";
import ProfileBottom from "../profile/ProfileBottom";
import { setShowProfile } from "../redux/slice/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { setProfileData } from "../redux/slice/profileDataSlice";
/* Home */
function HomePage() {
  const profileData = useSelector((state) => state.profileData);
  const data = useSelector((state) => state.fetchData.data?.users || []);
  const dispatch = useDispatch();

  const { id } = useParams();
  sessionStorage.setItem("id", id);
  sessionStorage.setItem("profileData", JSON.stringify(profileData));

  let profileDatas = JSON.parse(sessionStorage.getItem("profileData"));

  const xy = profileData;
  console.log("xy", xy);
  const getFilterData = (id) => {
    const filteredData = data.filter((el) => el.id === Number(id));
    dispatch(setProfileData(filteredData));
  };
  useEffect(() => {
    let ID = sessionStorage.getItem("id") || 1;
    getFilterData(ID);
  }, [id, dispatch]);

  return (
    <div>
      <div className={style.HomeMain}>
        <LeftNav />
        {profileData &&
          profileData.map((el) => {
            return (
              <div
                style={{ width: "80%" }}
                className={style.profile_top}
                key={el.id}
              >
                <div className={style.profile}>
                  <h2>Profile</h2>
                  <TopNav />
                </div>
                <hr />
                <div
                  onClick={(e) => {
                    dispatch(setShowProfile(false));
                  }}
                >
                  <ProfileBottom />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HomePage;
