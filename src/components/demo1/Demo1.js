/* export default function Demo1(){
  return <h1>This is Demo1 Functional Component</h1>
} */

import { Component } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { BsFillCalendarDateFill, BsFillClockFill } from "react-icons/bs";

export default class Demo1 extends Component {
  render() {
    return (
      <>
        <h1>This is Demo1 Class Component</h1>
        <i className="bi-alarm"></i>
        <i
          className="bi-airplane"
          style={{ fontSize: "2rem", color: "cornflowerblue" }}
        ></i>
        <i className="bi-server"></i>
        <br />
        <input /> <FaEdit style={{fontSize:'28px'}} /> <FaTrash /> <BsFillCalendarDateFill />
        <BsFillClockFill />
      </>
    );
  }
}
