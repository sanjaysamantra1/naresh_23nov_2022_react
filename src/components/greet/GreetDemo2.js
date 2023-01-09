import React, { Component } from "react";

export default class GreetDemo2 extends Component {
  render() {
    return (
      <div>
        Hello {this.props.name} , {this.props.msg}
      </div>
    );
  }
}
