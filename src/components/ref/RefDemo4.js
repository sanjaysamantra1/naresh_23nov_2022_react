import React from "react";

export default function RefDemo4() {
  let myRef1;
  let myRef2;

  const addition = () => {
    const num1 = +myRef1.value;
    const num2 = +myRef2.value;
    alert(`Addtion of ${num1} & ${num2} is ${num1 + num2}`);
  };
  return (
    <>
      <h3 className="text-center">Addition using Ref - Callback ref</h3>
      <p>
        Number1: <input ref={inputBox=>{myRef1=inputBox}} />
      </p>
      <p>
        Number2: <input ref={inputBox=>{myRef2=inputBox}} />
      </p>
      <button onClick={addition}>Add</button>
    </>
  );
}
