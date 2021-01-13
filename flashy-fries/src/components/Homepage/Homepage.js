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
          Get the best of both worlds with Study Date™ (sans serif) <br />
          We combine studying and online dating, to help you score in all spheres of life!
          <br />
          How to use (as a heading) <br />
          * Visit the Study Date™ website and create an account on it for free. You are given the option to register either as a **student** or as a **teacher**. <br />
* Choose the topic you want to study with or teach a random online date.<br />
* You can either choose to study with a student (Study Date™) or a teacher.<br />
* Our backend matches you with someone who wants to study the same topic and initiates a video call for you with them.<br />
* After you are done studying on video call, you can obtain your reward (cute cat photos) for completing the Study Date™.<br />
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
