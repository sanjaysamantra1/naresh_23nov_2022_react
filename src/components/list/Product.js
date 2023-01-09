import React from "react";

export default function Product(props) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3" >
      <div className="card">
        <img
          src={props.prod.image}
          className="card-img-top"
          style={{ height: "150px" }}
          alt=""
        />
        <div className="card-body text-center">
          <h5 className="card-title">{props.prod.category}</h5>
          <p className="card-text">{props.prod.title}</p>
          <p className="card-text">Price: {props.prod.price}</p>
          <p className="card-text">Ratings: {props.prod.rating.rate}</p>
          <button className="btn btn-primary">BUY NOW </button>
        </div>
      </div>
    </div>
  );
}
