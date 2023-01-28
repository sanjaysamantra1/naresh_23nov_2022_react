import React, { useRef } from "react";

export default function RefDemo3() {
  const myRef1 = useRef();
  const myRef2 = useRef();

  const addition = () => {
    console.log(myRef1);
    const num1 = +myRef1.current.value;
    const num2 = +myRef2.current.value;
    alert(`Addtion of ${num1} & ${num2} is ${num1 + num2}`);
  };
  return (
    <>
      <h3 className="text-center">Addition using Ref</h3>
      <p>
        Number1: <input ref={myRef1} />
      </p>
      <p>
        Number2: <input ref={myRef2} />
      </p>
      <button onClick={addition}>Add</button>
    </>
  );
}
