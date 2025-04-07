import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

const Form = () => {
  let url =
    "https://shivam-pager-default-rtdb.asia-southeast1.firebasedatabase.app/message.json"; // instead of message we can write any thing

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleInput = (e) => setName(e.target.value);

  const handleMessage = (e) => setMessage(e.target.value);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(name, message);
    const formName = name.trim();
    const formMessage = message.trim();
    if (formName === "" || formMessage === "") {
      alert("fill all fields");
      //   return;
    } else if (formName.length < 3 || formMessage.length < 10) {
      alert(
        `    name should have atleast 3 character and
     message should have alteast 10 charcter`
      );
    }

    const response = await axios.post(url, { Name: name, message: message });
    console.log(response);
    setName("");
    setMessage("");
  };

  return (
    <div className="form-container">
      <h1>Send message to someone</h1>
      <form id="main-form">
        <div className="form-input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
          </svg>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="john"
            onChange={handleInput}
          />
        </div>
        <div className="form-message">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="M320-520q17 0 28.5-11.5T360-560q0-17-11.5-28.5T320-600q-17 0-28.5 11.5T280-560q0 17 11.5 28.5T320-520Zm160 0q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Zm160 0q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
          </svg>
          <input
            type="text"
            value={message}
            placeholder="say something"
            onChange={handleMessage}
          />
        </div>
        <button className="form-submit" type="submit" onClick={handleOnSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
