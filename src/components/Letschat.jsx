import React, { useContext, useEffect, useState } from "react";
import style from "./letschat.module.css";
import { DataContext } from "./DataContextProvider";
import { FiX } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
function Letschat() {
  const {
    data,
    showProfile,
    setShowProfile,
    chatData,
    getAllData,
    showChatMsg,
    setShowChatMsg,
  } = useContext(DataContext);
  // const [addMsg,setAddMsg]=useState([])
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [hideChat, setHideChat] = useState(true);
  console.log("LetsChatAltaf", chatData);
  useEffect(() => {
    getAllData();
  }, []);
  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };
  console.log("tasks", tasks);
  console.log("taskInput", taskInput);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const iconStyle = {
    transform: "rotate(45deg)",
    marginRight: "5px",
  };

  return (
    <div
      className={style.mainDiv1}
      style={{
        display: showChatMsg ? "block" : "none",
        marginTop: hideChat ? "-270px" : "0px",
      }}
    >
      <div onClick={() => setShowChatMsg(!showChatMsg)} className={style.chat}>
        <div>
          <img
            src={chatData.profilepicture}
            style={{ height: "30px", width: "30px", borderRadius: "50px" }}
          />
          <p>{chatData.name}</p>
        </div>
        <FiX />
      </div>

      {showChatMsg ? (
        <div className={style.profiles}>
          <div
            style={{
              backgroundColor: "#f4eeee",
              borderRadius: "10px",
              padding: "5px",
              margin: "15px",
              paddingLeft: "15px",
              marginRight: "50px",
            }}
          >
            <p style={{ marginLeft: "2px" }}>
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#f4eeee",
              borderRadius: "10px",
              padding: "5px",
              margin: "15px",
              paddingLeft: "15px",
              marginRight: "50px",
            }}
          >
            <p style={{ marginLeft: "2px" }}>Lorem ipsum dolor sit</p>
          </div>
          <div style={{ paddingLeft: "40%" }}>
            <p>{"9:16 PM"}</p>
          </div>
          <div
            style={{
              backgroundColor: "#f4eeee",
              borderRadius: "10px",
              padding: "5px",
              margin: "5px",
              marginLeft: "50px",
            }}
          >
            <p style={{ marginLeft: "10px" }}>Lorem ipsum dolor</p>
          </div>

          {tasks.map((task, index) => (
            <div
              style={{
                backgroundColor: "#f4eeee",
                borderRadius: "10px",
                padding: "5px",
                margin: "5px",
                marginTop: "15px",
                marginLeft: "50px",
              }}
            >
              <p key={index} style={{ marginLeft: "10px" }}>
                {task.text}
              </p>
            </div>
          ))}

          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              position: "sticky",
              bottom: 0,
            }}
          >
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              onKeyDown={handleKeyPress}
              style={{
                height: "30px",
                width: "180px",
                borderRadius: "50px",
                caretColor: "grey",
                border: "2px solid grey",
                paddingLeft: "15px",
              }}
              placeholder="Message"
            />

            <div style={{ marginTop: "3px" }} onClick={addTask}>
              <FiSend size={30} color="grey" style={iconStyle} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Letschat;
