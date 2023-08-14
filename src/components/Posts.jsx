import React, { useContext } from "react";
import LeftNav from "./LeftNav";
import TopNav from "./TopNav";
import { DataContext } from "./DataContextProvider";
import style from "./comingsoon.module.css";
function Posts() {
  const { setShowProfile } = useContext(DataContext);
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
            setShowProfile(false);
          }}
        >
          <h1 className={style.ComingSoon}>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
}

export default Posts;
