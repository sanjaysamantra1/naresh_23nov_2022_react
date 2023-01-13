import React, { Component } from "react";

export default class ShowHideDemo1 extends Component {
  state = {
    flag: true,
  };
  toggleFlag = () => {
    this.setState({ flag: !this.state.flag });
  };
  render() {
    return (
      <>
        {this.state.flag ? <h1>This is a paragraph</h1> : null}
        <button onClick={this.toggleFlag}>
          {this.state.flag ? "HIDE" : "SHOW"}
        </button>
      </>
    );
  }
}
