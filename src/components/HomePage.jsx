import React, { useContext, useEffect } from "react";
import style from "./homepage.module.css";
import LeftNav from "./LeftNav";
import { DataContext } from "./DataContextProvider";
import { useParams } from "react-router-dom";
import TopNav from "./TopNav";
import ProfileBottom from "./ProfileBottom";

function HomePage() {
  const { profileData, getFilterData } = useContext(DataContext);
  const { id } = useParams();
  sessionStorage.setItem("id", id);
  useEffect(() => {
    let ID = sessionStorage.getItem("id") || 1;
    getFilterData(ID);
  }, [id]);
  console.log("location.pathname", location.pathname);
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
                <div onClick={() => setShowProfile(false)}>
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
