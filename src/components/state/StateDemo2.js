import React, { useState } from "react";

export default function StateDemo2() {
  //   let count = 0; not a state variable
  let [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>count is: {count}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
}
