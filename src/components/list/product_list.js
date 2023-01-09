import React from "react";
import Product from "./Product";
import { products } from "./products_data";

export default function ProductList() {
  return (
    <>
      <h1 className="text-center bg-primary text-white">Product List</h1>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return <Product prod={product} key={product.id} />;
          })}
        </div>
      </div>
    </>
  );
}
