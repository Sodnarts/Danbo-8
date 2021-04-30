import React from 'react';
import "./clock.css";
import {ExpandLess, ExpandMore} from '@material-ui/icons';
import { Music } from 'src/common/song/song-module';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: {
        seconds: 0,
        minutes: 0,
        hours: 0,
      },
      isCountingDown: false,
      shouldPlay: false,
      showStopButton: false,
      volume: 0.2,
    }
  }

  startCountDown = (shouldContinue) => {
    if (shouldContinue) {
      const { seconds, minutes, hours }= this.state.timer
      if (seconds > 0) {
        this.setState({timer: {seconds: seconds - 1, hours: hours, minutes: minutes}})
      } else {
        if (minutes > 0) {
          this.setState({timer: {seconds: 59, hours: hours, minutes: minutes - 1}})
        } else {
          if (hours > 0) {
            this.setState({timer: {seconds: 59, hours: hours - 1, minutes: 59}})
          } else {
            this.setState({isCountingDown: false}, this.callAlarm())
          }
        }
      }
      console.log("HEI", shouldContinue)

    
      setTimeout(() => this.startCountDown(this.state.isCountingDown), 1000)
    };
  }

  handleCoundown = () => {
    this.setState ({
      isCountingDown: !this.state.isCountingDown
    }, () => this.startCountDown(this.state.isCountingDown))
  }

  callAlarm = () => {
    this.setState({shouldPlay: true}, () => this.handleShowStopButton())
    
  }

  increaseTimer = () => {
    const { seconds, minutes, hours }= this.state.timer
      if (seconds < 59) {
        this.setState({timer: {seconds: seconds + 1, hours: hours, minutes: minutes}})
      } else {
        if (minutes < 59) {
          this.setState({timer: {seconds: 0, hours: hours, minutes: minutes + 1}})
        } else {
          if (hours < 99) {
            this.setState({timer: {seconds: 0, hours: hours + 1, minutes: 0}})
          } else {
            console.log("max hours");
          }
        }
      }
  }

  decreaseTimer = () => {
    const { seconds, minutes, hours } = this.state.timer
      if (seconds > 0) {
        this.setState({timer: {seconds: seconds - 1, hours: hours, minutes: minutes}})
      } else {
        if (minutes > 0) {
          this.setState({timer: {seconds: 59, hours: hours, minutes: minutes - 1}})
        } else {
          if (hours > 0) {
            this.setState({timer: {seconds: 59, hours: hours - 1, minutes: 59}})
          } else {
            console.log("Cannot be lower");
          }
        }
      }
  }

  handleShowStopButton = () => {
    const {shouldPlay, volume} = this.state;

    if (shouldPlay) {
      this.setState({ showStopButton: true})
      setTimeout(() => {this.setState({showStopButton: false})}, 500);
      setTimeout(() => {this.setState({volume: volume < 1 ? volume + 0.2 : volume}, () => this.handleShowStopButton())}, 10 * 1000);

    }
  }

  stopAlarm = () => {
    this.setState({
      shouldPlay: false,
      volume: 0.2,
      showStopButton: false,
    })
  }
  
  render() {
    const {seconds, minutes, hours} = this.state.timer;
    const {isCountingDown, shouldPlay, showStopButton, volume} = this.state;

    return (
      <>
        <div className="clock">
          <div style={{display: 'flex', flexDirection: "row"}}>
          <div onClick={this.increaseTimer}><ExpandLess style={{display: 'inline', marginRight: '8px'}}/></div>
          {hours.toString().length > 1 ? hours : "0" + hours}:{minutes.toString().length > 1 ? minutes : "0" + minutes}:{seconds.toString().length > 1 ? seconds : "0" + seconds}
          <div onClick={this.decreaseTimer}><ExpandMore style={{display: 'inline', marginLeft: '8px'}}/></div>
          </div>
        </div>
        <div className="button-container">
          <button className="button" onClick={this.handleCoundown}>{isCountingDown ? 'Stop Countdown' : 'Start Countdown'}</button>
          <button style={{visibility: showStopButton ? 'visible' : 'hidden'}} className="button" onClick={this.stopAlarm}>I am awake!</button>
        </div>
      <Music shouldPlay={shouldPlay} volume={volume}/>
      </>
    );
  }
}
  
export { Clock };
  