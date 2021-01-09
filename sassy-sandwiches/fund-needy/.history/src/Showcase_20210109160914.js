import React from "react";
import "./Showcase.css";
import Navbar from "./Navbar";

function Showcase() {
  return (
    <div className="showcase">
      {/* navabar */}
      <Navbar />
      {/* tagline + BI */}
      <div className="showcase_main">
        <h1>Today is your opportunity to build the tomorrow of someone.</h1>
        <p>Get Started</p>
      </div>
    </div>
  );
}

export default Showcase;
