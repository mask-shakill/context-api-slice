import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/food-menu">FoodMenu</Link>
        </li>
        <li>
          <Link to="/food-menu">
            Cart <span>(3)</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
