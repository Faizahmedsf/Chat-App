import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import "./Chat.css";
import { useNavigate } from "react-router-dom";
import { IChat } from "../../Interface";
// import io from "socket.io-client";
// const socket = io.connect("http://localhost:8001");

function Chat() {
  const navigate = useNavigate();


  const validate = (values: IChat) => {
    const errors: IChat = {
        message: ""
    };
    if (!values.message) {
      errors.message = "message is Required";
    }
  };

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    validate,

    onSubmit: async (values) => {
      console.log("j");
    //   if (values.message !== "") {
    //     const messageData = {
    //       room: room,
    //       message: values.message,
    //       userName: userName,
    //       time:
    //         new Date(Date.now()).getHours() +
    //         ":" +
    //         new Date(Date.now()).getMinutes(),
    //     };
    //     // console.log(messageData)
    //     await socket.emit("send_message", messageData);
    //     setMessageList((list) => [...list, messageData]);
    //     console.log(messageList);
    //   }
    },
  });


  const leaveRoom = () => {
    console.log("leaveRoom()");
    navigate("/");
    alert("Are You sure you want to leave the room");
  };

  return (
    <div className="chat container">
      <div className="chat-header">
        <h3>Chat Express</h3>
        <button className="btn btn-danger" onClick={leaveRoom}>
          Leave Room
        </button>
      </div>

      <div className="chat-components">
        <div className="chat-user">
          <div>
           
            {/* <div>
              <h3> Users: </h3>
              <i className="fa fa-user" aria-hidden="true"></i>
              {user.map((element) => {
                return  <p> {element} </p>
              })} 
              <p></p>
            </div> */}
          </div>
        </div>
        
        {/* <div className="chat-message">
          {messageList.map((singleMessage) => {
            return (
              <div
                className="single-message"
                id={userName === singleMessage.userName ? "you" : "other"}
              >
                <div>
                  <span className="user-message">{singleMessage.userName}</span>
                  <span className="float-right">{singleMessage.time}</span>
                </div>
                <span>{singleMessage.message}</span>
              </div>
            );
          })}
        </div> */}
      </div>

      <div className="send-message">
        <form id="chat-form" onSubmit={formik.handleSubmit}>
          <input
            id="message"
            name="message"
            type="text"
            placeholder="Enter Message"
            required
            // autocomplete="off"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          <button className="btn btn-primary" type="submit">
            <i className="fa fa-paper-plane"></i> Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
