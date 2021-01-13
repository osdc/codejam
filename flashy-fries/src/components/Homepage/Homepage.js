import "./Homepage.css";
import logo from "./logo2.png";
import lady from "./lady.png";
import videocall from "./videocall.png"
import win from "./win.png"

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
          Studying | Dating (ye isi font mein)<br />
          Two far ends of the spectrum, right? (this in some other sans serif font)
          Get the best of both worlds with Study Date™
          <br />
          ......
        </div>
      </div>
      <div className="graphics">
        images ka size dekh lena
      <img src={lady}></img>
      <img src={videocall}></img>
      <img src={win}></img>
    </div> </div>
  );
}

export default Homepage;
