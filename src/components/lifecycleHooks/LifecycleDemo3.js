import React, { Component } from "react";

export default class LifecycleDemo3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sachin",
      myTime: "",
      myTimer: 0,
    };
    console.log("Constructor...");
  }
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("getDerivedStateFromProps...");
  //     return state;
  //   }
  componentDidMount() {
    console.log("componentDidMount...");

    const myTimer = setInterval(() => {
      const myTime = new Date().toLocaleTimeString();
      this.setState({ myTime: myTime });
      console.log(myTime)
    });
    this.setState({ myTimer: myTimer });
  }
  shouldComponentUpdate() {
    console.log("componentDidMount...");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the Name was " + prevState.name;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated Name is " + this.state.name;
  }
  componentWillUnmount() {
    console.log("lifecycledemo3 is about to be destroyed");
    clearInterval(this.state.myTimer)
  }
  changeName = () => {
    this.setState({ name: "Rahul" });
  };
  render() {
    console.log("lifecycledemo3 render...");
    return (
      <>
        <h3 className="text-center">LifecycleDemo3-{this.state.myTime}</h3>
        <div>Current Name is- {this.state.name}</div>
        <button onClick={this.changeName}>Change Name</button>

        <div id="div1"></div>
        <div id="div2"></div>
      </>
    );
  }
}
