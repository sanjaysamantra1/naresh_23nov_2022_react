import React, { useState } from "react";

export default function EventDemo2() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

 /*  let changeHandler = (e) => {
    if (e.target.name === "num1") {
      setNum1(e.target.value);
    } else {
      setNum2(e.target.value);
    }
  }; */
  /* let changeHandler2 = (e) => {
    setNum2(e.target.value);
  }; */
  let addition = (e) => {
    console.log(e)
    setSum(+num1 + +num2);
  };

  return (
    <>
      <h2 className="text-center">Addition Example</h2>
      <p>
        Enter Number-1
        <input name="num1" onChange={(e)=>setNum1(e.target.value)} />
      </p>
      <p>
        Enter Number-2
        <input name="num2" onChange={(e)=>setNum2(e.target.value)} />
      </p>
      <button onClick={addition}>Add</button>

      <p>
        Addition of {num1} & {num2} is {sum}
      </p>
    </>
  );
}
