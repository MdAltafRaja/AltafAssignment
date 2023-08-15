import React, { useEffect } from "react";
import style from "../../css/userdata.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slice/fetchData";
/*User data*/
function UserData() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchData.data?.users || []);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

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
