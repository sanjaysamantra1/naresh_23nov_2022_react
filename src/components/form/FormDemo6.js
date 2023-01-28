import React, { useState } from "react";

const initialUser = {
  fname: { value: "", errorMsg: "" },
  lname: { value: "", errorMsg: "" },
};

export default function FormDemo6() {
  const [user, setUser] = useState(initialUser);

  return  <>
      <h3>Form Demo 3</h3>
      <form>
        <p>
          First Name:
          <input name="fName" value={user.fname.value} onChange={(e) => {
            setUser({...user,fName:e.target.value})
          }} />
        </p>
        <p>
          Last Name:
          <input name="lName" value={user.lname.value} onChange={(e) => {
            setUser({...user,lName:e.target.value})
          }}/>
        </p>
       <input type='reset'  />
       <input type='submit' />
      </form>
      <p>
        {user.fname.value} {user.lname.value}
      </p>
    </>
}
