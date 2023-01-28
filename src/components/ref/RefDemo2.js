import React, { useEffect, useRef, useState } from "react";

export default function RefDemo2() {
  const [name, setName] = useState("sachin");
  const myRef = useRef();

  useEffect(() => {
    myRef.count = name;
    console.log(myRef);
  });

  return (
    <>
      <div>
        current Name: {name} , previous Name: {myRef.count}
      </div>
      <button onClick={() => setName("Rahul")}>changeName</button>
      <button onClick={() => setName("Deepak")}>changeName2</button>
    </>
  );
}
