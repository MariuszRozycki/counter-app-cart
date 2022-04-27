import React, { Component } from "react";
import './Counter.css';

import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
// import Clock from "./Clock";
import ClockFunctional from "./ClockFunctional";

class CounterClass extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counterValue: this.props.initValue,
      showClock: true
    };

    // this.changeValue = this.changeValue.bind(this); ES 5 (binding this)
  }

  /* methods */
  // changeValue = () => {
  //   this.setState({
  //     counterValue: this.state.counterValue + 1
  //   })
  // }

  // changeValue() { ES 5 (no this - binding in constructor method)
  changeValue = (action) => {

    // let currentCounterValue = this.state.counterValue;

    // if (action === "add") {

    //   currentCounterValue += 1;

    // } else if (action === "reinit") {

    //   currentCounterValue = this.props.initValue;

    // } else {

    //   currentCounterValue = 0;
    // }

    // this.setState({});
    // this.setState({
    //   counterValue: currentCounterValue
    // });

    this.setState((prevState, prevProps) => {

      let currentCounterValue = prevState.counterValue;

      if (action === "add") {
        currentCounterValue += 1;
      } else if (action === "reinit") {
        currentCounterValue = prevProps.initValue;
      } else {
        currentCounterValue = 0;
      }

      return ({
        counterValue: currentCounterValue
      });
    });


  }

  toggleClock = () => {
    this.setState((prevState) => {
      return ({
        showClock: !prevState.showClock
      });
    });
  }

  /* render method */
  render() {

    let clockElement = "";
    if (this.state.showClock) {
      // clockElement = <Clock toggleClockMethod={this.toggleClock} />
      clockElement = <ClockFunctional toggleClockMethod={this.toggleClock} />
    } else {
      clockElement = <span onClick={this.toggleClock} className="show-clock">Show clock</span>
    }

    return (
      <div className="counter" >
        Counter:
        <Display displayValue={this.state.counterValue} />
        <ButtonsPanel buttonMethod={this.changeValue} />
        {clockElement}
      </div>
    )
  }
}

export default CounterClass;
