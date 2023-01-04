import React from "react";

export default function ExpressionDemo() {
  let a = 10;
  let b = 20;
  let user = { firstName: "Sachin", lastName: "Tendulkar", age: 45 };
  function fullName(user) {
    return user.firstName + " " + user.lastName;
  }
  return (
    <>
      <div>ExpressionDemo Component</div>
      <div>My react Version is {React.version}</div>
      <div>
        Addition of {a} and {b} is {a + b}
      </div>
      <div>
        Hi {user.firstName} you are {user.age} years old.
      </div>
      <div>Your FullName is: {fullName(user)}</div>
    </>
  );
}
