import React from "react";
import client from "./api";
import axios from "axios";

export default function HttpDemo4() {
  const fetchData = async () => {
    // const promise1 = axios.get("https://jsonplaceholder.typicode.com/todos");
    // const promise2 = axios.get("https://jsonplaceholder.typicode.com/users");
    const promise1 = client.get('/users');    // 1 sec
    const promise2 = client.get('/comments'); // 2 sec

    try{
        const [data1, data2] = await axios.all([promise1, promise2]);
        console.log(data1.data,data2.data)
    } catch(err){
        console.log('something went wrong...')
    }

  };
  return (
    <>
      <div>HttpDemo4</div>
      <button onClick={fetchData}>Fetch data</button>
    </>
  );
}
