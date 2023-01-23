import React from "react";

function MemoDemo2({ name }) {
  return (
    <>
      {console.log("Memodemo-2 rendered....")}
      <div>MemoDemo2 - Child Component</div>
      <div>Name from my parent is:{name}</div>
    </>
  );
}
export default React.memo(MemoDemo2);
