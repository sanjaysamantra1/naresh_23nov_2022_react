import React from "react";

export default function Product(props) {
  const { image, category, title, price, rating } = props.prod;
  // Props De-structuring
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
      <div className="card">
        <img
          src={image}
          className="card-img-top"
          style={{ height: "150px" }}
          alt=""
        />
        <div className="card-body text-center">
          <h5 className="card-title">{category}</h5>
          <p className="card-text">{title}</p>
          <p className="card-text">Price: {price}</p>
          <p className="card-text">Ratings: {rating.rate}</p>
          <button className="btn btn-primary">BUY NOW </button>
        </div>
      </div>
    </div>
  );
}
