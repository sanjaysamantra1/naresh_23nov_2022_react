import React, { Component, PureComponent } from "react";

export default class PureCompDemo1 extends Component {
  state = {
    name: "Sachin",
  };
  changeName = () => {
    this.setState({ name: "sachin" });
  };
  render() {
    console.log('Render called...')
    return (
      <>
        <div>Name is: {this.state.name}</div>
        <button onClick={this.changeName}>Change Name</button>
      </>
    );
  }
}
