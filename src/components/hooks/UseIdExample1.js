import React from "react";
import { useId } from "react";

export default function UseIdExample1() {
  const id = useId();

  return (
    <>
      <div>UseIdExample1</div>

      <label htmlFor={id}>Do you like React?</label>
      <input id={id} type="checkbox" name="react" />
      <br/>

      <label htmlFor={id + "-firstName"}>First Name</label>
      <input id={id + "-firstName"} type="text" />

      <label htmlFor={id + "-lastName"}>Last Name</label>
      <input id={id + "-lastName"} type="text" />
    </>
  );
}
