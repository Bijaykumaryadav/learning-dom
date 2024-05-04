import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from './components/ProductList';

function App() {
  const productList = [
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
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList product={productList} />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
