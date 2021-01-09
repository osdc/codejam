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
            src="https://i2-prod.walesonline.co.uk/incoming/article1776538.ece/ALTERNATES/s1200c/brian-ash-371964815.jpg"
            alt=""
          />
          <img
            src="https://i2-prod.walesonline.co.uk/incoming/article1776538.ece/ALTERNATES/s1200c/brian-ash-371964815.jpg"
            alt=""
          />
          <img
            src="https://i2-prod.walesonline.co.uk/incoming/article1776538.ece/ALTERNATES/s1200c/brian-ash-371964815.jpg"
            alt=""
          />
          <img
            src="https://i2-prod.walesonline.co.uk/incoming/article1776538.ece/ALTERNATES/s1200c/brian-ash-371964815.jpg"
            alt=""
          />
          <img
            src="https://i2-prod.walesonline.co.uk/incoming/article1776538.ece/ALTERNATES/s1200c/brian-ash-371964815.jpg"
            alt=""
          />
          <img
            src="https://i2-prod.walesonline.co.uk/incoming/article1776538.ece/ALTERNATES/s1200c/brian-ash-371964815.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
