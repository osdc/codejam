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
      <div className="head"> STUDY DATE</div> 
      </div>
      <br/>
      <div className="descr">
         <div className="head2"> Studying | Dating<br /></div>
          <div className="first">
          &nbsp;&nbsp;&nbsp;Two far ends of the spectrum, right?</div>
          <div className="second">Get the best of both worlds with Study Date™ <br /></div>
          &nbsp;We combine studying and online dating, to help you score in all spheres of life!
          <br />
         <h2 className="third"> How to use<br /></h2>
          <ul> <li> Visit the Study Date™ website and create an account on it for free. You are given the option to register either as a **student** or as a **teacher**. <br />
</li>
<li>Choose the topic you want to study with or teach a random online date.<br />
</li>
<li>
 You can either choose to study with a student (Study Date™) or a teacher.<br />
 </li>
 <li>
Our backend matches you with someone who wants to study the same topic and initiates a video call for you with them.<br />
</li>
<li>
After you are done studying on video call, you can obtain your reward (cute cat photos) for completing the Study Date™.<br />
    </li>
        </ul>
        </div>
      <div className="graphics">
      <div className="column"><img src={lady}></img></div>
      <div className="column1"><img src={videocall}></img></div>
      <div className="column2"><img src={win}></img></div>
      
    </div> 
    </div>
  );
}

export default Homepage;
