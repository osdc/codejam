import { Component } from 'react';
import Particles from 'react-particles-js';
import Images from './Components/images.js'
import './App.css';

import heartImg from '../src/heart.png';

const inputText = document.getElementsByClassName('inputValue');

const particlesOption = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 700
      }
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      final: '',
    }
  }

  submitValue = (e) => {
    this.setState({
      input: e.target.value,
    })
  }
  onSubmitValue = (e) => {
    this.setState({
      final: this.state.input
    })
  }
  resetValue = () => {
    this.setState({
      final: '',
      input: '',
    })
    document.getElementsByClassName('inputValue')[0].value = ''
  }
  enterKey = (e) => {
    if (e.keyCode === 13) {
      this.onSubmitValue()
    }
  }
  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particlesOption} />
        <div className="relative">
          <div className="header">
            <h1>
              Communicating in a new way
            </h1>
        </div>
          <div className="Content">
            <div className="about">
              <span id="typewriter">
                
                American Sign Language (ASL) is the primary language of the deaf community in North America(but not limited to those borders). It uses a combination of hand movements, facial expressions, and body posture.<br></br><br></br>

                The Alphabet in sign language is the starting point for anyone who wants to communicate with a Deaf person.
                There are more we can do with these sign language.
                We can communicate underwater/space/through glass/in noisy place(where we can’t speak/communicating)<br></br><br></br>

                Using the alphabet in sign language is also called finger/Hand  spelling. It is commonly used in a few different situations, such as:
                *Spelling out a person's name, before you get to know their personalized 'name sign'.
                *Spelling out a place name or location before you get to know its designated sign.<br></br><br></br>

                Why this :<br></br>
                When communicating with a Deaf person from another region (dialects and signs can be different, so being able to fingerspell is a great back-up)<br></br><br></br>

                ASL is a common sign language – though by far not the only one – for people who are d/Deaf or hard of hearing (deaf refers to the physical condition of deafness, while Deaf refers to belonging to the Deaf community). .
                ASL “entails five parameters: handshapes, palm orientation, location (space on the body, around the signer), movement and of course, facial expressions”<br></br><br></br>

                Fact : About 15% of adults in America report hearing loss, and about 1 million use sign language to communicate.
             </span>
            </div>
            <div className="inputField ">
              <input type="text" placeholder="Enter Text to translate" onChange={this.submitValue} className="inputValue" contenteditable="true" onKeyDown={this.enterKey}></input>
              <button type="submit" onClick={this.onSubmitValue} onKeyPress={this.enterKey} className="button1" contenteditable="true">TRANSLATE</button>
              <button onClick={this.resetValue} className="button1" contenteditable="true">RESET</button>
            </div>
            <div className="images">
              <Images text={this.state.final} />
            </div>
          </div>
          <div className="footer">
              MADE WITH <img className="heart" src={heartImg} alt='heartimg' />  BY RHAPSODIC ROLLS
          </div>
        </div>
      </div>
    );
  }
}

export default App;
