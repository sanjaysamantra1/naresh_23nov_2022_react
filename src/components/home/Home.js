import React from "react";

export default function Home() {
  return (
    <>
      <h1>This is Home Component</h1>

      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <small>Your name is: <b>{process.env.REACT_APP_MY_NAME}</b> .</small>
    </>
  );
}
