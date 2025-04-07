import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MessageList.css";

const MessageList = () => {
  const [message, setMessage] = useState([]);
  const url =
    "https://shivam-pager-default-rtdb.asia-southeast1.firebasedatabase.app/message.json";
  const fetchData = async () => {
    let res = await axios(url);
    console.log("data", res.data);
    let data = res.data; //here data is an object
    let messagelist = [];
    for (let messageId in data) {
      // traversing over object
      if (data[messageId].Name || data[messageId].message) {
        messagelist.push(data[messageId]);
      }
    }

    console.log("messageList", messagelist);
    messagelist.reverse();
    let messageDisplay = messagelist.slice(0, 5);
    setMessage(messageDisplay);
  };

  console.log("message:-", message);
  useEffect(() => {
    fetchData();
    setInterval(() => {
      fetchData();
    }, 4000);
  }, []);

  return (
    <div className="MessageList-container">
      {message.length === 0 ? (
        <p>No message to show</p>
      ) : (
        message.map((item, index) => (
          <div className="message">
            <li style={{ listStyle: "none" }} key={index}>
              <span style={{ fontWeight: "800", fontSize: "1.25rem" }}>
                {item.Name}
              </span>
              <p style={{ margin: "0px" }}>{item.message}</p>
            </li>
          </div>
        ))
      )}
    </div>
  );
};

export default MessageList;
