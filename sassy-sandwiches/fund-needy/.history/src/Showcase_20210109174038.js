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
            src="https://cdn.alleywatch.com/wp-content/uploads/2020/02/laptop-office-working-men-3153201.jpg"
            alt=""
          />
          <img
            src="https://previews.123rf.com/images/perig76/perig761505/perig76150500007/39814844-view-of-a-farmer-team-at-work-in-a-greenhouse.jpg"
            alt=""
          />
          <img
            src="data:image/jpeg;base64,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"
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
