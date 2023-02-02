import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HttpDemo2() {
  const [users, setUsers] = useState([]);

  /* const fetchUsers = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url).then(response=>{
        console.log(response.data);
        setUsers([...response.data]);
    }).catch(err=>{
        console.log(err)
    })
  }; */
  const fetchUsers = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await axios.get(url);
    setUsers(response);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h2 className="text-center">Users List using AXIOS</h2>
      <ul>
        {users.map((user, ind) => {
          return <li key={ind}>{user.name}</li>;
        })}
      </ul>
    </>
  );
}
