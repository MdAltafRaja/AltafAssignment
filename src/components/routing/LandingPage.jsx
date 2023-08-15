import React from "react";
import style from "../../css/landingpage.module.css";

import UserData from "./UserData";
/*Landing Page*/
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
