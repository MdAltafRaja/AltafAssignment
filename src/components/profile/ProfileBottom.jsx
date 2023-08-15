import React, { Fragment } from "react";
import style from "../../css/profilebottom.module.css";
import Chat from "../chat/Chat";
import GoogleMaps from "../gmap/GoogleMaps";
import ChatBox from "../chat/ChatBox";
import { useSelector } from "react-redux";

/* Profile Details for the user */
function ProfileBottom() {
  const profileData = useSelector((state) => state.profileData);
  return (
    <div className={style.mainDiv}>
      <div className={style.leftSide}>
        {profileData &&
          profileData.map((el) => {
            return (
              <Fragment key={el.id}>
                <img src={el.profilepicture} alt="Profile image"  />
                <p>{el.name}</p>
                <div className={style.userName}>
                  <div>
                    <h2 style={{ marginTop: "0px" }}>UserName :</h2>
                    <h2>e-mail :</h2>
                    <h2>Phone :</h2>
                    <h2>Website :</h2>
                  </div>
                  <div>
                    <h3 style={{ marginTop: "0px" }}>{el.username}</h3>
                    <h3>{el.email}</h3>
                    <h3>{el.phone}</h3>
                    <h3>{el.website}</h3>
                  </div>
                </div>
                <hr />

                <h2>Company</h2>
                <div className={style.company}>
                  <div>
                    <h2 style={{ marginTop: "0px" }}>Name :</h2>
                    <h2>catchphrase :</h2>
                    <h2>Bs :</h2>
                  </div>
                  <div>
                    <h3 style={{ paddingTop: "3px" }}>{el.company.name}</h3>
                    <h3>{el.company.catchPhrase}</h3>
                    <h3>{el.company.bs}</h3>
                  </div>
                </div>
              </Fragment>
            );
          })}
      </div>
      <p className={style.vl}></p>
      <div className={style.rightSide}>
        {profileData &&
          profileData.map((el) => {
            return (
              <Fragment key={el.id}>
                <h2>Address:</h2>
                <div className={style.address}>
                  <div>
                    <h2 style={{ marginTop: "0px" }}>Street :</h2>
                    <h2>Suite :</h2>
                    <h2>City :</h2>
                    <h2>Zipcode :</h2>
                  </div>
                  <div>
                    <h3 style={{ marginTop: "0px" }}>{el.address.street}</h3>
                    <h3>{el.address.suite}</h3>
                    <h3>{el.address.city}</h3>
                    <h3>{el.address.zipcode}</h3>
                  </div>
                </div>
                <GoogleMaps />
                <div className={style.geo}>
                  <p>
                    Lat: <span>{el.address.geo.lat}</span>
                  </p>
                  <p>
                    Lng: <span>{el.address.geo.lng}</span>
                  </p>
                </div>
                <Chat />
                <ChatBox />
              </Fragment>
            );
          })}
      </div>
    </div>
  );
}

export default ProfileBottom;
