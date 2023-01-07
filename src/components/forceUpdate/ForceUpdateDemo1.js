import React from "react";

export default function ForceUpdateDemo1() {
  let counter = 0; // not a state/props variable
  function increment() {
    counter++;
    console.log(counter);
  }
  return (
    <>
      <div>ForceUpdateDemo1 Demo1</div>
      <div>Counter Value: {counter}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
}
