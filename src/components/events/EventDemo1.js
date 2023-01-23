import React, { Component } from "react";

export default class EventDemo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 10,
      b: 20,
    };
    this.f1 = this.f1.bind(this);
  }
  f1() {
    console.log(this.state.a);
  }
  f2 = () => {
    console.log(this.state.a);
  };
  add = (a, b) => {
    console.log(a + b);
  };
  sum = (a, b) => {
    console.log(a + b);
  };

  render() {
    return (
      <>
        <div>EventDemo1</div>
        <button onClick={this.f1}>btn-1</button>
        <button onClick={this.f2} className="ms-1">
          btn-2
        </button>
        <button onClick={()=>this.add(this.state.a,this.state.b)} className="ms-1">
          Add
        </button>
        <button onClick={this.sum.bind(this,this.state.a,this.state.b)} className="ms-1">
          Sum
        </button>
      </>
    );
  }
}
