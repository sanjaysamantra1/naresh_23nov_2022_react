import React from "react";
import PropTypes from 'prop-types';

export default function GreetDemo1({name,msg,age,f1}) {
  return <>
    <div>Hello {name}, {msg}, Your age is {age}</div>
    <button onClick={f1}>click</button>
  </>
}
GreetDemo1.propTypes = {	
  name: PropTypes.string, // Optional prop
  msg:PropTypes.string.isRequired, // manadatory prop
  age:PropTypes.number,  // Optional prop
};	