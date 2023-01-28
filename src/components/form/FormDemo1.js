import React, { useState } from "react";

export default function FormDemo1() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");

  const changeHandler = (e) => {
    if (e.target.name === "fName") {
      setFname(e.target.value);
    } else {
      setLname(e.target.value);
    }
  };

  const submitMyForm = (e) => {
    e.preventDefault();
    console.log(fName, lName);
  };
  return (
    <>
      <h1>Form Demo1</h1>
      <form onSubmit={submitMyForm}>
        <p>
          First name:
          <input name="fName" onChange={changeHandler} />
        </p>
        <p>
          Last name:
          <input name="lName" onChange={changeHandler} />
        </p>
        <input type="reset" value="clear" />
        <input type="submit" value="login" className="ms-1" />
      </form>
      <br/>
      <p>FirstName:{fName} </p>
      <p>lastName: {lName}</p>
    </>
  );
}
