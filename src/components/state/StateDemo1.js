import React, { Component } from "react";

export default class StateDemo1 extends Component {
  //   counter = 0; // class variable
  state = {
    counter: 0,
  };
  increment = () => {
    // To Update the state call setState()
    let newState = { counter: this.state.counter + 1 };
    this.setState(newState);
  };
  render() {
    return (
      <>
        <div>Counter is : {this.state.counter}</div>
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}
