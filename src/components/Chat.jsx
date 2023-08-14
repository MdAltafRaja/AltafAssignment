import React, { useContext, useEffect, useState } from "react";
import style from "./chat.module.css";
import { DataContext } from "./DataContextProvider";
import { BsChatRight } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
function Chat() {
  const {
    data,
    showProfile,
    setShowProfile,
    getAllData,
    showChatMsg,
    setChatData,
    setShowChatMsg,
  } = useContext(DataContext);
  const [hideChat, setHideChat] = useState(false);
  useEffect(() => {
    getAllData();
  }, []);
  const chatHandler = () => {
    setHideChat(!hideChat);
    setShowChatMsg(false);
  };
  const chatDataHandler = (el) => {
    setShowChatMsg(true);
    setChatData(el);
  };
  return (
    <div
      className={style.mainDiv}
      style={{ marginTop: hideChat ? "-270px" : "20px" }}
    >
      <div onClick={chatHandler} className={style.chat}>
        <div>
          <BsChatRight />
          <p>Chats</p>
        </div>
        {hideChat ? <FiChevronDown /> : <FiChevronUp />}
      </div>
      {hideChat ? (
        <div className={style.profiles}>
          {data &&
            data.map((el) => {
              return (
                <div key={el.id} onClick={() => chatDataHandler(el)}>
                  <div className={style.maping_div}>
                    <img src={el.profilepicture} alt="profile image" />
                    <p>{el.name}</p>
                    {console.log(el.name)}
                  </div>

                  <hr />
                </div>
              );
            })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Chat;
