import React from "react";
import Form from "./component/Form";
import MessageList from "./component/MessageList";

const App = () => {
  return (
    <div className="main-container">
      <Form />
      <MessageList />
    </div>
  );
};

export default App;
