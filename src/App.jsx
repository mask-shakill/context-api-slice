import React, { createContext } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Pricing from "./pages/pricing/Pricing";
import Navbar from "./components/Navbar";
import Products from "./pages/food-menu/Products";

export const CartContext = createContext("product");
function App() {
  return (
    <>
      <CartContext.Provider value="0">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;
