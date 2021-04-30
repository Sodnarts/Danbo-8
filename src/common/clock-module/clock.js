import React from 'react';
import "./clock.css";
import {ExpandLess, ExpandMore} from '@material-ui/icons';

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
    console.log("CALLING ALARM")
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
            console.log("Cannot be lower");
          }
        }
      }
  }
  
  render() {
    const {seconds, minutes, hours} = this.state.timer;
    const {isCountingDown} = this.state;

    return (
      <div className="container">
        
        <div className="clock">
          <a onClick={this.increaseTimer}><ExpandLess style={{display: 'inline-block', marginRight: '8px'}}/></a>
          {hours.toString().length > 1 ? hours : "0" + hours}:{minutes.toString().length > 1 ? minutes : "0" + minutes}:{seconds.toString().length > 1 ? seconds : "0" + seconds}
          <a onClick={this.decreaseTimer}><ExpandMore style={{display: 'inline-block', marginLeft: '8px'}}/></a>
        </div>
        <button className="button" onClick={this.handleCoundown}>{isCountingDown ? 'Stop countdown' : 'Start countdown'}</button>
      </div>
    );
  }
}
  
export { Clock };
  