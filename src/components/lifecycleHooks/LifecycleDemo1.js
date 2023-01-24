import React, { Component } from "react";

export default class LifecycleDemo1 extends Component {
  constructor(props) {
    super(props); // parent class's constructor
    console.log("Constructor...");
    this.state = {
      name: "sachin",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps...");
    let updatedState = { name: props.name || state.name };
    return updatedState;
  }
  f1 = () => {
    console.log("I am f1...");
  };
  componentDidMount() {
    console.log("componentDidMount...");
  }
  render() {
    console.log("Render...");
    return (
      <>
        <div>LifecycleDemo1</div>
        <div>Name is- {this.state.name}</div>
      </>
    );
  }
}
