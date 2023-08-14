import React, { useContext, useEffect } from "react";
import { DataContext } from "./DataContextProvider";
import style from "./userdata.module.css";
import { Link } from "react-router-dom";

function UserData() {
  const { data, getAllData } = useContext(DataContext);
  console.log("UserDataays", data);
  useEffect(() => {
    getAllData();
  }, []);
  console.log("UserData", data);
  return (
    <div className={style.card_bottom}>
      {data &&
        data.map((d) => {
          return (
            <div key={d.id}>
              <Link to={`/homepage/${d.id}`}>
                <div className={style.maping_div}>
                  <img src={d.profilepicture} alt="profile image" />
                  <p>{d.name}</p>
                </div>
              </Link>
              <hr />
            </div>
          );
        })}
    </div>
  );
}

export default UserData;
