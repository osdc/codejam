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
            src="https://s3-eu-west-1.amazonaws.com/appearhere-blog/2018/11+November/01+Advice+from+the+shopkeepers/Anatome+3.jpg"
            alt=""
          />
          <img
            src="https://image.freepik.com/free-photo/shopkeeper-grocery-store_8595-3271.jpg"
            alt=""
          />
          <img
            src="https://startupnation.com/wp-content/uploads/2018/03/team.jpg"
            alt=""
          />
          <img
            src="https://s3-eu-west-1.amazonaws.com/appearhere-blog/2018/11+November/01+Advice+from+the+shopkeepers/Anatome+3.jpg"
            alt=""
          />
          <img
            src="https://s3-eu-west-1.amazonaws.com/appearhere-blog/2018/11+November/01+Advice+from+the+shopkeepers/Anatome+3.jpg"
            alt=""
          />
          <img
            src="https://s3-eu-west-1.amazonaws.com/appearhere-blog/2018/11+November/01+Advice+from+the+shopkeepers/Anatome+3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
