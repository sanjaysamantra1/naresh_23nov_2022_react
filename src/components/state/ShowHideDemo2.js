import React, { useState } from "react";

export default function ShowHideDemo2() {
  const [flag, setFlag] = useState(true);
  /* const toggleFlag = () => {
    setFlag(!flag);
  }; */
  return (
    <>
      {flag ? <h1>This is a paragraph</h1> : null}
      <button onClick={() => setFlag(!flag)}>{flag ? "HIDE" : "SHOW"}</button>
    </>
  );
}
