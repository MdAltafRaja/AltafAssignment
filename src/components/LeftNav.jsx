import React, { useEffect, useState } from "react";
import style from "./homepage.module.css";
import { Link, useLocation } from "react-router-dom";

function LeftNav() {
  const [id, setId] = useState("1");
  const location = useLocation();
  useEffect(() => {
    setId(sessionStorage.getItem("id") || 1);
  }, []);
  return (
    <div className={style.mainDiv}>
      <Link
        to={`/homepage/${id}`}
        className={
          location.pathname === `/homepage/${id}`
            ? style.active
            : style.notActive
        }
      >
        Home
      </Link>

      <hr />

      <Link
        to={`/posts/${id}`}
        className={
          location.pathname === `/posts/${id}` ? style.active : style.notActive
        }
      >
        <p>Posts</p>
      </Link>
      <hr />
      <Link
        to={`/gallery/${id}`}
        className={
          location.pathname === `/gallery/${id}`
            ? style.active
            : style.notActive
        }
      >
        <p>Gallery</p>
      </Link>
      <hr />

      <Link
        to={`/todo/${id}`}
        className={
          location.pathname === `/todo/${id}` ? style.active : style.notActive
        }
      >
        <p>ToDo</p>
      </Link>
    </div>
  );
}

export default LeftNav;
