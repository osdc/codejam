import "./Homepage.css";
import logo from "./logo2.png";

function Homepage() {
  return (
    <div>
      <div className="description">
        <div>
          <img
            src={logo}
            alt="logo"
          />
        </div>
        <div className="descr">
          what we aim to accomplish and stuff ......
          <br />
          ......
        </div>
      </div>
      <div className="graphics">cool graphics will be placed here</div>
    </div>
  );
}

export default Homepage;
