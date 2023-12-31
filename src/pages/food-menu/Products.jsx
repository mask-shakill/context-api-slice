import React from "react";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  return (
    <div>
      <h1 className=" text-center mt-10">All-products</h1>
      <ProductCard img={3} />
    </div>
  );
};

export default Products;
