import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Navbar";
import Description from "./description";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Description />
  </React.StrictMode>,
  document.getElementById("root")
);
