import React, { Component } from 'react'

class Music extends Component {
  constructor(props) {
  super(props);
  
  this.relativePath = '/El Chombo - Chacarron.mp3';
  this.audio = new Audio(this.relativePath);
}

  componentWillReceiveProps(nextProps) {
    nextProps.shouldPlay ? this.audio.play(): this.audio.pause();
    this.audio.volume = nextProps.volume;

  }

  play = () => {
    this.audio.play();
  }

  pause = () => {
    this.audio.pause();
  }

  render ( ) {
    console.log(this.props.shouldPlay)
    return (<></>);
  }
}

export { Music };