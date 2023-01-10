import React from "react";

export default function Welcome(props) {
  return (
    <>
      <h3>This is Welcome Component</h3>
      <h3>This is Static text</h3>
      <h3>{props.children}</h3>
    </>
  );
}
