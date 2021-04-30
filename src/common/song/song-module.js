import React, { Component } from 'react'

class Music extends Component {
  constructor(props) {
  super(props);
  this.state = {
    play: false,
    pause: true,
  }
  this.relativePath = "public/El Chombo - Chacarron.mp3";
  this.audio = new Audio(this.relativePath);
}

play = () => {
this.setState({ play: true, pause: false })
  this.audio.play();
}

pause = () => {
this.setState({ play: false, pause: true })
  this.audio.pause();
}

render() {
  
return (
  <div>
    <button onClick={this.play}>Play</button>
    <button onClick={this.pause}>Pause</button>
  </div>
  );
}
}

export{ Music };