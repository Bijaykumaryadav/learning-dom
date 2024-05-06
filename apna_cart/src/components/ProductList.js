import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  // console.log(props);
  return props.product.length > 0 ? (
    props.product.map((product, i) => (
      <Product
        product={product}
        key={i}
        incrementQuantity={props.incrementQuantity}
        index={i}
        decrementQuantity={props.decrementQuantity}
        removeItem={props.removeItem}
      />
    ))
  ) : (
    <h1>No Product Exists in the Cart</h1>
  );
}
