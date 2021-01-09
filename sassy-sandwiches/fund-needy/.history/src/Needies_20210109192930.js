import React from "react";
import "./Needies.css";
import Needy from "./Needy";

function Needies() {
  return (
    <div className="needies">
      <div className="needies_headline">
        <h1>We need Funds!</h1>
        <Needy />
      </div>
    </div>
  );
}

export default Needies;
