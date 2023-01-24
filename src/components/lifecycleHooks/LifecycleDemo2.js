import React, { Component } from "react";

export default class LifecycleDemo2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
    console.log("constructor...");
    const h1 = document.querySelector("h1");
    console.log(h1);
  }
  getUsers = async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const finalData = await users.json();
    this.setState({ users: finalData }); // state update
  };
  componentDidMount() {
    console.log("componentDidMount...");
    this.getUsers();
    const h1 = document.querySelector("h1");
    h1.style.backgroundColor = "purple";
    h1.style.color = "white";
  }
  render() {
    console.log("Render...");
    return (
      <>
        <h1 className="text-center">User List</h1>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>phone</th>
              <th>city</th>
              <th>Pin code</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, ind) => {
              return (
                <tr key={ind}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address.city}</td>
                  <td>{user.address.zipcode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
