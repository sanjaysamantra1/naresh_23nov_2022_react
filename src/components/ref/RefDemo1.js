import React, { useEffect, useRef, useState } from "react";

export default function RefDemo1() {
  const [count, setCount] = useState(0);
  const myRef = useRef();
  console.log(myRef);

  useEffect(() => {
    myRef.count = count;
    console.log('use effect....')
  });

  return (
    <>
      {console.log('render....')}
      Now: {count}, before: {myRef.count}
     <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </>
  );
}
