import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import React, { useState } from "react";

function App() {
  const products = [
    {
      price: 99999,
      name: "Iphone 10s Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi NOte 10s Max",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity > 0
      ? newProductList[index].quantity--
      : newProductList[index].quantity = 0;
    setProductList(newProductList);
  };
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList
          product={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;