import React, { useState } from "react";
import { useContext } from "react";
import userContext from "../../utils/userContext";

export default function ShowHideDemo2() {
  const [flag, setFlag] = useState(true);
  const userObj = useContext(userContext);
  console.log(userObj);
  /* const toggleFlag = () => {
    setFlag(!flag);
  }; */
  return (
    <>
      {flag ? <h1>This is a paragraph</h1> : null}
      <button onClick={() => setFlag(!flag)}>{flag ? "HIDE" : "SHOW"}</button>

    <p>hi {userObj}</p>
    </>
  );
}
