import React, { useRef, useState } from "react";

export default function FormDemo2() {
  const [fname, setFname] = useState("sa");
  const [lname, setLname] = useState("te");

  const ref1 = useRef();
  const ref2 = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(fname + " " + lname);
    console.log(ref1.current.value + " " + ref2.current.value);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        First Name:
        <input name="fname" defaultValue={fname} ref={ref1} />
        Last Name:
        <input name="lname" defaultValue={lname} ref={ref2} />
        <br />
        <br />
        <button>submit</button>
      </form>
      <p>{fname} {lname}</p>
    </>
  );
}
