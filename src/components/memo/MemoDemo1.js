import React, { useState } from "react";
import MemoDemo2 from "./MemoDemo2";

export default function MemoDemo1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("sachin");

  const increment = () => {
    setCount(count + 1);
  };
  const changeName = () => {
    setName("rahul");
  };
  return (
    <>
      <div>MemoDemo1 - Parent Component</div>
      <div>Count is: {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={changeName} className='ms-1'>Change Name</button>
      <hr />
      <MemoDemo2 name={name} />
    </>
  );
}
