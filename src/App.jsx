import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Pricing from "./pages/pricing/Pricing";
import FoodMenu from "./pages/food-menu/FoodMenu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/food-menu" element={<FoodMenu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
