import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Aboutus() {
  const navigate = useNavigate();

  const goToProducts = () => {
    console.log("Do Something...."); //Logic
    navigate("/productlist");
  };

  return (
    <>
      <h1 className="text-center">This is About Us Component</h1>
      <a href="/productlist">Go To Products</a>
      <br /> <br />
      <Link to="/productlist">Go To Products</Link>
      <br />
      <br />
      <button onClick={goToProducts}>Do Something & Go to Products</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate(-2)}>Go last 2</button>
    </>
  );
}
