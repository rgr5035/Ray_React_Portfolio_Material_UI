import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
