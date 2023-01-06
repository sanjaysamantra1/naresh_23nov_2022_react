import React from "react";

export default function ListDemo1() {
  const cars = ["Tata", "Honda", "Maruti", "Toyota", "Hundai"];
  return (
    <>
      <div className="text-center">ListDemo1</div>
      <hr />
      {cars.map((car, ind) => {
        return <div key={ind}>{car}</div>;
      })}
      <hr />
      <ol>
        {cars.map((car, ind) => {
          return <li key={ind}>{car}</li>;
        })}
      </ol>
    </>
  );
}
