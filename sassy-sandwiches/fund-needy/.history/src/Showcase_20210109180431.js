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
            src="https://cdn.hrpayrollsystems.net/wp-content/uploads/2019/01/Depositphotos_14150393_m-2015.jpg"
            alt=""
          />
          <img
            src="https://previews.123rf.com/images/michaeljung/michaeljung1310/michaeljung131000370/23152988-successful-construction-team-discussing-architectural-project.jpg"
            alt=""
          />
        </div>
        <button>See the Needies</button>
      </div>
    </div>
  );
}

export default Showcase;
