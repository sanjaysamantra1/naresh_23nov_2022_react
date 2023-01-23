import React, { useState } from "react";

export default function PureCompDemo2() {
  const [name, setName] = useState("Sachin");
  const changeName = () => {
    setName("Sachin");
  };
  return (
    <>
      {console.log("Render called...")}
      <div>Name is: {name}</div>
      <button onClick={changeName}>Change Name</button>
    </>
  );
}
