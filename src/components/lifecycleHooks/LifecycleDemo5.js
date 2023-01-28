import React, { useEffect, useState } from "react";

export default function LifecycleDemo5() {
  const [a, setA] = useState(10);
  const [b, setB] = useState(20);
  const [c, setC] = useState(30);

  useEffect(() => {
    console.log("Use Effect Called..."); // mounting/Updating
    return () => {
      console.log("component will unmount"); // unmounting
    };
  }, [a, b]);

  return (
    <>
      <div className="text-center">Lifecycledemo-5</div>
      <div>
        {a} {b} {c}
      </div>
      <button onClick={() => setA(15)}>update A</button>
      <button onClick={() => setB(25)} className="ms-1">
        update B
      </button>
      <button onClick={() => setC(35)} className="ms-1">
        update C
      </button>
    </>
  );
}
