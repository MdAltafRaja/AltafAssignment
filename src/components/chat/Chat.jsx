import React, { useState } from "react";
import style from "../../css/chat.module.css";
import { BsChatRight } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setShowChatMsg } from "../redux/slice/chatMessageSlice";
import { setChatData } from "../redux/slice/chatDataslice";

/* All the Users and their dp for chat  */
function Chat() {
  const dispatch = useDispatch();
  const chatData = useSelector((state) => state.chatData);
  const data = useSelector((state) => state.fetchData.data?.users || []);
  const [hideChat, setHideChat] = useState(false);

  const chatHandler = () => {
    setHideChat(!hideChat);
    dispatch(setShowChatMsg(false));
  };

  const chatDataHandler = (el) => {
    dispatch(setShowChatMsg(true));
    dispatch(setChatData(el));
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
