import React from "react";
import LeftNav from "../navbar/LeftNav";
import TopNav from "../navbar/TopNav";
import style from "../../css/comingsoon.module.css";
import { setShowProfile } from "../redux/slice/profileSlice";
/* Posts */
function Posts() {
  return (
    <div className={style.mainDiv}>
      <LeftNav />
      <div className={style.topDiv}>
        <div className={style.profile}>
          <h2>Posts</h2>
          <TopNav />
        </div>
        <hr style={{ color: "grey", width: "100%" }} />

        <div
          className={style.screen}
          onClick={() => {
            dispatch(setShowProfile(false));
          }}
        >
          <h1 className={style.ComingSoon}>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
}

export default Posts;
