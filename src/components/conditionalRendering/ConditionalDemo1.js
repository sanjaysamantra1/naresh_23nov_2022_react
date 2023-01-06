import React from "react";

export default function ConditionalDemo1() {
  let x = 5;
  return <h1>{x % 2 === 0 ? `${x} is Even` : `${x} is odd`}</h1>;
}
