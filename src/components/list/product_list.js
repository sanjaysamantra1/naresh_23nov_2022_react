import React from "react";
import { products } from "./products_data";

export default function ProductList() {
  return (
    <>
      <h1 className="text-center bg-primary text-white">Product List</h1>
      <div className="container">
        <div className="row">
          {products.map((product, ind) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3" key={ind}>
                <div class="card">
                  <img src={product.image} class="card-img-top" style={{height:'150px'}} alt='' />
                  <div class="card-body text-center">
                    <h5 class="card-title">{product.category}</h5>
                    <p class="card-text">{product.title}</p>
                    <p class="card-text">Price: {product.price}</p>
                    <p class="card-text">Ratings: {product.rating.rate}</p>
                    <button className="btn btn-primary">BUY NOW</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
