import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [prodInfo, setProdInfo] = useState({});
  const { id } = useParams();
  console.log(useParams())

  const fetchData = async () => {
    let prodInfo = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProdInfo(prodInfo);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      <h1 className="text-center">This is the product details for prod-{id}</h1>
      <div className="card col-sm-3 offset-3">
        <img
          src={prodInfo?.image}
          className="card-img-top"
          style={{ height: "150px" }}
          alt=""
        />
        <div className="card-body text-center">
          <h5 className="card-title">{prodInfo?.category}</h5>
          <p className="card-text">{prodInfo?.title}</p>
          <p className="card-text">Price: {prodInfo?.price}</p>
          <p className="card-text">Ratings: {prodInfo?.rating?.rate}</p>
        </div>
      </div>
    </>
  );
}
