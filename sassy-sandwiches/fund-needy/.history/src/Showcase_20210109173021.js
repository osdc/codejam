import React from "react";
import "./Showcase.css";

function Showcase() {
  return (
    <div className="showcase">
      <div className="showcase_overlay"></div>
      <div className="showcase_main">
        <h1>Today is your opportunity to build the tomorrow of someone.</h1>
        <p>Get Started</p>
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
      <div className="showcase_needies">
        <h1>We need Funds!</h1>
        <div className="showcase_needies_grid">
          <img
            src="https://previews.123rf.com/images/stocking/stocking1507/stocking150700605/42252389-portrait-of-a-smiling-shopkeeper-in-a-grocery-store.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
