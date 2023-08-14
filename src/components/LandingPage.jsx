import React from "react";
import style from "./landingpage.module.css";

import UserData from "./UserData";
UserData;
function LandingPage() {
  return (
    <div className={style.landingMain}>
      <div className={style.card}>
        <h1 className={style.card_top}>Select an account</h1>

        <UserData />
      </div>
    </div>
  );
}

export default LandingPage;
