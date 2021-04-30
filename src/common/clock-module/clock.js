import React from 'react';
import "./clock.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: {
        seconds: 10,
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
          if (hours > 0 ) {
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
  
  render() {
    const {seconds, minutes, hours} = this.state.timer;
    const {isCountingDown} = this.state;

    return (
      <div className="container">
        <div className="clock">{hours.toString().length > 1 ? hours : "0" + hours}:{minutes.toString().length > 1 ? minutes : "0" + minutes}:{seconds.toString().length > 1 ? seconds : "0" + seconds}</div>
        <button className="button" onClick={this.handleCoundown}>{isCountingDown ? 'Stop countdown' : 'Start countdown'}</button>
      </div>
    );
  }
}
  
export { Clock };
  