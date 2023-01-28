import React, { useState } from "react";

export default function FormDemo3() {
  const [user, setUser] = useState({ fName: "sachin", lName: "tendulkar" });

  const resetHanlder=(e)=>{
    setUser({fName: "", lName: ""})
  }

  return (
    <>
      <h3>Form Demo 3</h3>
      <form onReset={resetHanlder}>
        <p>
          First Name:
          <input name="fName" value={user.fName} onChange={(e) => {
            setUser({...user,fName:e.target.value})
          }} />
        </p>
        <p>
          Last Name:
          <input name="lName" value={user.lName} onChange={(e) => {
            setUser({...user,lName:e.target.value})
          }}/>
        </p>
       <input type='reset'  />
       <input type='submit' />
      </form>
      <p>
        {user.fName} {user.lName}
      </p>
    </>
  );
}
