import React, { Component } from "react";

export default class LifecycleDemo4 extends Component {
  render() {
    console.log('lifecycledemo4 rendered')
    return <div>LifecycleDemo4</div>;
  }
  componentWillUnmount(){
    console.log('lifecycledemo4 is about to be destroyed')
  }
}
