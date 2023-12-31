import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <div>
      <ul className="flex bg-slate-300 p-5 justify-around font-semibold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li className="flex gap-1">
          Cart ={" "}
          <span>
            <Cart />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
