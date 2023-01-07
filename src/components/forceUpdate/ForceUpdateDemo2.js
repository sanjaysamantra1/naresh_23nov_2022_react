import React, { Component } from "react";

export default class ForceUpdateDemo2 extends Component {
  counter = 0; // counter is a class variable (Not a state/props variable)
  increment = () => {
    this.counter++;
    console.log(this.counter);
    // this.forceUpdate();
  };
  refresh = ()=>{
    this.forceUpdate();
  }
  render() {
    return (
      <>
        <div>ForceUpdateDemo2 Component</div>
        <div>Counter Value: {this.counter}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.refresh} className="ms-1">refresh data</button>
      </>
    );
  }
}
